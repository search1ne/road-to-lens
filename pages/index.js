import { useQuery } from "@apollo/client"; 
import recommendedProfilesQuery from '../queries/recommendedProfilesQuery.js'; 
import Profile from '../components/Profile.js'; 

export default function Home() {
  // Use the useQuery hook to fetch data from the recommendedProfilesQuery
  const {loading, error, data} = useQuery(recommendedProfilesQuery); 

  // Loading and error handling
  if (loading) return 'Loading..'; 
  if (error) return `Error! ${error.message}`; 

  return (
    <div>
      {data.recommendedProfiles.map((profile, index) => { // Map over the returned data
        console.log(`Profile ${index}:`, profile); // Log the profile data to the console
        return <Profile key={profile.id} profile={profile} displayFullProfile={false} />; // Use the profile data to render a Profile component
      })}
    </div>
  )
}
