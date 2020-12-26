# Firebase authentication demo

Firebase auth is the OG when it comes to authentication in Google Cloud Platform, and is still the right choice if you need "standard-style" authentication.

This demo works without any dev server or similar.

## Steps

- Go to the [Firebase console](https://console.firebase.google.com/)
- Create a project
- Click `Project Overview` in the left-side panel
- Click the web choice
- Register a new application, select Firebase Hosting if that makes sense, else skip it
- Paste the configuration object content into `app.js`
- Under `Authentication` add a sign-in method for email/password
- Ensure your local development URL is whitelisted

## References

- [Add Firebase to your JavaScript project](https://firebase.google.com/docs/web/setup)
- [Firebase auth snippets](https://github.com/firebase/snippets-web/tree/94f5dc85944d0f84530c59e8442dfeddc1170872/auth)
