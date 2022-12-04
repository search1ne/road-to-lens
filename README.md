Step 1. Set up a Next.js application and install Apollo
Open a command line. Use the create-next-app to start a project that will be named road-to-lens

npx create-next-app road-to-lens
npm install @apollo/client graphql

Step 2. Set up the Apollo provider to wrap our entire app so that we have access to methods like useQuery and useMutation later on.

Create a file in the top-level directory called apollo-client.js

Initialize a client here with the base url pointed at the Lens Matic Mainnet API: https://api.lens.dev
Import client to /pages/_app.jsfile and use it to wrap our global app Component

Update /pages/index.js to make a query to fetch Recommended Profiles from Lens

-Define a GraphQL query called RecommendedProfiles.

-Fetch a list of profiles by calling useQuery with the RecommendedProfiles query -> which gets returned in the data variable.

-Display some profile information such as data.profile.name, data.profile.bio, and data.profile.attributes.