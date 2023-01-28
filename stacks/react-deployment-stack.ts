import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { CloudFrontWebDistribution } from 'aws-cdk-lib/aws-cloudfront';

export class ReactDeploymentStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const reactDeploymentBucket = new Bucket(this, 'ReactDeploymentBucket', {
      bucketName: 'react-deployment-bucket', //should be unique
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'index.html',
      publicReadAccess: true,
    });

    const distribution = new CloudFrontWebDistribution(
      this,
      'ReactDeploymentDistribution',
      {
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: reactDeploymentBucket,
            },
            behaviors: [{ isDefaultBehavior: true }],
          },
        ],
      }
    );
  }
}

