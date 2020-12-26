// Keyfile
const projectId = 'YOUR_PROJECT_ID';
const keyFilename = './keyfile.json';

// GAE and IAP references
const url = `https://${projectId}.ew.r.appspot.com`;
const targetAudience = 'LONG_AUD_STRING.apps.googleusercontent.com';

const { GoogleAuth } = require('google-auth-library');
const auth = new GoogleAuth({ projectId, keyFilename });

async function request() {
  console.info(`Request IAP ${url} with target audience ${targetAudience}`);
  const client = await auth.getIdTokenClient(targetAudience);
  const res = await client.request({ url });
  console.info(res.data);
}

request().catch((err) => {
  console.error(err.message);
  process.exitCode = 1;
});
