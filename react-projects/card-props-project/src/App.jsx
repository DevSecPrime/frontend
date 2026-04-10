import Card from "./components/Card";
import { profiles } from "./components/user";

function App() {
  return (
    <>
      {profiles.map((profile, index) => (
        <Card
          key={index}
          username={profile.username}
          designation={profile.designation}
          profileImage={profile.profileImage}
          skills={profile.skills}
          fullName={profile.fullName}
        />
      ))}
    </>
  );
}

export default App;
