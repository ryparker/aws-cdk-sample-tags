import { App, Stack, Tags } from "aws-cdk-lib";
import { SecurityGroup, Vpc } from "aws-cdk-lib/aws-ec2";

const app = new App();
const stack = new Stack(app, "test-tags");

const securityGroup = new SecurityGroup(stack, "TempSecurityGroup", {
  vpc: new Vpc(stack, "TempVpc"),
});

// Tags.of(stack).add("Environment", "UAT"); // Works just fine
Tags.of(securityGroup).add("Environment", "UAT"); // Works just fine
