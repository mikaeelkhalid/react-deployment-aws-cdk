import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { CloudFrontWebDistribution } from 'aws-cdk-lib/aws-cloudfront';

export class ReactDeploymentStack extends Stack {
  public readonly bucket: Bucket;
  public readonly distribution: CloudFrontWebDistribution;
  public readonly cloudfrontDomainName: CfnOutput;
  public readonly s3BucketUrl: CfnOutput;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    this.bucket = this._createS3Bucket();
    this.distribution = this._createCloudFrontDistribution(this.bucket);
    this.cloudfrontDomainName = this._outputDomainName(this.distribution);
    this.s3BucketUrl = this._outputS3Url(this.bucket);
  }

  _createS3Bucket() {
    const reactDeploymentBucket = new Bucket(this, 'ReactDeploymentBucket', {
      bucketName: 'react-deployment-bucket', //should be unique
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'index.html',
      publicReadAccess: true,
    });

    return reactDeploymentBucket;
  }

  _createCloudFrontDistribution(bucket: Bucket) {
    const distribution = new CloudFrontWebDistribution(
      this,
      'ReactDeploymentDistribution',
      {
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: bucket,
            },
            behaviors: [{ isDefaultBehavior: true }],
          },
        ],
      }
    );

    return distribution;
  }

  _outputS3Url(reactDeploymentBucket: Bucket) {
    const s3Url = new CfnOutput(this, 'WebsiteURL', {
      value: reactDeploymentBucket.bucketWebsiteUrl,
      description: 'URL of the website',
    });
    return s3Url;
  }

  _outputDomainName(distribution: CloudFrontWebDistribution) {
    const domainName = new CfnOutput(this, 'CloudFrontDistributionDomainName', {
      value: distribution.distributionDomainName,
      description: 'CloudFront Distribution Domain Name',
    });

    return domainName;
  }
}

