# AWS Cognito minimal sign-up example

Based on Epsagon's article [A Quick Start Guide to AWS Cognito, Lambda and SES](https://epsagon.com/tools/a-quickstart-guide-to-aws-cognito-lambda-and-ses/).

Cognito can seem overwhelming but actually offers a (long but) pretty easy and self-explanatory set of steps.

My modifications to the flow in the article is that I am requiring `nickname` and `phone_number` as additional user attributes, so make sure to also click in those options.

When you sign-up you will be prompted for a confirmation code which should be emailed to you.

## Installation

The approach used here will require a few manual steps which I have pre-packaged for you:

- Run `npm run setup` to install the `amazon-cognito-identity-js` package, pull the pre-built version out and remove the node modules (you won't need them anymore)

You should now be able to run the code locally without a dev server.

## Configuration

You need to get your user pool ID and client ID from the Cognito console. The client ID is under `App clients`. Put these values in `app.js`.

## References

- [Amazon Cognito Identity SDK for JavaScript](https://www.npmjs.com/package/amazon-cognito-identity-js)
