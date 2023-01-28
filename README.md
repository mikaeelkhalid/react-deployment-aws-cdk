React Deployment Stack

This repository contains an AWS CDK stack for deploying a React application. It creates an S3 bucket for storing the application files, and a CloudFront distribution for serving the files to the public.

Usage

To use this stack, you will need to have the AWS CDK CLI installed and configured on your machine.

Clone the repository
Run npm install in the repository's root directory to install the necessary dependencies
Run cdk deploy to deploy the stack to your AWS account
Stack Components

An S3 bucket named react-deployment-bucket is created for storing the application files. The bucket is configured as a website and set to allow public read access.
A CloudFront distribution is created and configured to use the S3 bucket as its origin.
Outputs

WebsiteURL: The URL of the website hosted in the S3 bucket
CloudFrontDistributionDomainName: The domain name of the CloudFront distribution.
This repo is part of the following blog post: https://hashnode.com/preview/63d5547eb58a2c00082ea248
