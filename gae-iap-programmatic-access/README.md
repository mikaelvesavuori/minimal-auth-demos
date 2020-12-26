# Programmatic authentication toward Identity Aware Proxy-protected resources

[Identity-Aware Proxy (IAP)](https://cloud.google.com/iap) is a brilliant, almost magic way to require and handle authentication for your GCP resources. While it's almost as easy as flicking the switch on IAP to make it work for human users, it might feel a bit harder to do programmatic access with it, for example when you are securing an API or internal resource. This repo shows you the admittedly less-optimal way of doing it, using keyfiles (bad!) for service accounts (good!), but it will at least set you off in the right direction.

This demo uses Google App Engine but that's purely for ease and convenience. The script will simply authenticate programmatically and request the contents of a simple HTML page hosted on GAE. Unauthenticated requests will be redirected to Google's login.

Code in `index.js` is adapted from Google.

To avoid incurring unwanted costs, do these two things when you are done:

- Disable the App Engine application
- Remove/deactivate the service account's key that you created for this demo

## Prerequisites

- Google Cloud Platform account
- `gcloud` CLI installed

## Installation

Run `npm install`.

## Configuration

### 1. Enable APIs and App Engine

You will need to [turn on the Identity Aware Proxy API](https://console.cloud.google.com/marketplace/product/google/iap.googleapis.com) in case it's not.

Also double-check that you have [App Engine turned on](https://console.cloud.google.com/appengine/settings). On that page you'll probably already see whether IAP is activated or not for the App Engine resource, else [do so on the IAP page](https://console.cloud.google.com/security/iap).

### 2. OAuth client

Set up your [OAuth client](https://console.cloud.google.com/apis/credentials/oauthclient/) and consent screen. Refer to the [official docs](https://cloud.google.com/iap/docs/app-engine-quickstart#enabling_iap) if you haven't done this before. Some of the wording might sound a bit worrisome but there is no cost or anything attached to this, for what we are doing.

### 3. Get and set values

Get your client ID [from the page](https://console.cloud.google.com/apis/credentials/oauthclient/) (called `Client ID for Web application`). Paste it into `index.js`.

Copy your App Engine URL from the App Engine page (looks like `https://YOUR_PROJECT_ID.ew.r.appspot.com`) and place the value in `index.js`.

### 4. Service account and keyfile

For brevity, you can just add a service account key to the regular `App Engine default service account` in the [Service accounts](https://console.cloud.google.com/iam-admin/serviceaccounts) page. Add a JSON key and download it. Rename it `keyfile.json`. Place it in this folder so the script can access it.

## Deployment

Run `npm run deploy`.

## Browse site

Run `npm run browse`. If you are logged in with Google you will see the page as expected. Try visiting with Incognito mode and it will ask for credentials.

## Visit the site with your service account

Run `npm run visit`. You can verify success by the response being the HTML from `src/index.html`.

## References

- [Programmatic authentication](https://cloud.google.com/iap/docs/authentication-howto#iap_make_request-nodejs)
- [Authenticating as a service account](https://cloud.google.com/docs/authentication/production)
- [User authentication with Identity-Aware Proxy](https://codelabs.developers.google.com/codelabs/user-auth-with-iap)
- [IAP How-to guides](https://cloud.google.com/iap/docs/how-to)

## Resources

For more GCP-based authentication demos, see:

- [Demo: GCP API Gateway fronting a GraphQL API on Cloud Run, secured with Identity-Aware Proxy](https://github.com/mikaelvesavuori/gcp-api-gateway-run-gql-auth-demo)
- [Demo: GCP API Gateway fronting an App Engine app secured with Identity-Aware Proxy](https://github.com/mikaelvesavuori/gcp-api-gateway-gae-auth-demo)
- [Using Google Cloud Functions with Cloud Endpoints for authorization (API key)](https://github.com/mikaelvesavuori/gcp-cloud-endpoints-authed-function)
