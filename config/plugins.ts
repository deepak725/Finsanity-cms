module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
        jwt: {
          expiresIn: '7d', // Set the expiry duration as needed (e.g., 7 days)
        },
        providers: {
          google: {
            enabled: true,
            clientId: env('GOOGLE_CLIENT_ID'),
            clientSecret: env('GOOGLE_CLIENT_SECRET'),
            redirectUri: env('GOOGLE_CALLBACK_URL'),
          },
        },
      },
    },
  });