import * as cdk from 'aws-cdk-lib';
import { ReactDeploymentStack } from '../stacks/react-deployment-stack';

const app = new cdk.App();

new ReactDeploymentStack(app, 'ReactDeploymentStack', {
  env: { account: '123456789012', region: 'us-east-1' },
});

