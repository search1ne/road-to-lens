// pages/profile/[id].js

import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import fetchProfileQuery from "../../queries/fetchProfileQuery.js";
import Profile from "../../components/Profile.js";
import Post from "../../components/Post.js";

export default function ProfilePage() {
  const router = useRouter(); // Get the router object from next/router
  const { id } = router.query; // Get the id parameter from the URL query string

  console.log("fetching profile for", id);
  const { loading, error, data } = useQuery(fetchProfileQuery, {
    variables: { 
      request: { profileId: id }, // Pass the id as a variable to the query
      publicationsRequest: {
        profileId: id,
        publicationTypes: ["POST"], // We really only want POSTs
      },
    },
  });

  if (loading) return "Loading.."; // Display a loading indicator while the query is executing
  if (error) return `Error! ${error.message}`; // Display an error message if the query fails

  console.log("on profile page data: ", data); // Log the profile data

   // Pass the profile data to the Profile component
  return (
<div className="flex flex-col p-8 items-center">
  {/* Display the profile with full details */}
  <Profile profile={data.profile} displayFullProfile={true} />

  {/* Loop through the items in the publications array and render a Post component for each one */}
  {data.publications.items.map((post, idx) => {
    return <Post key={idx} post={post}/>;
  })}
</div>

  );
}
