## Welcome to CDK React App Deployment [Typescript]

[![Mikaeel Khalid](https://badgen.now.sh/badge/by/mikaeelkhalid/purple)](#)

This repository contains an AWS CDK stack for deploying a React application. It creates an S3 bucket for storing the application files and a CloudFront distribution for serving the files to the public.

### Usage

To use this stack, you must have the AWS CDK CLI installed and configured on your machine.

1. Clone the repository: https://github.com/mikaeelkhalid/react-deployment-aws-cdk.git
2. Run `npm install` in the repository's root directory to install the necessary dependencies
3. Run `cdk deploy` to deploy the stack to your AWS account
4. Run `cdk destroy` to destroy & clean up resources.


### Stack Components

An S3 bucket named `react-deployment-bucket` is created for storing the application files. The bucket is configured as a website and sets to allow public read access.
A CloudFront distribution is created and configured to use the S3 bucket as its origin.
Outputs

1. `WebsiteURL`: The URL is hosted in the S3 bucket.
2. `CloudFrontDistributionDomainName`: The domain name of the CloudFront distribution.

This repo is part of the following blog post: https://blog.mikaeels.com/deploy-react-app-with-aws-cdk
