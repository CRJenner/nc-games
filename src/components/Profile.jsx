const Profile = (props) => {
  const { profile, setProfile } = props;
  console.log(profile.name);
  return (
    <div>
      <img src={profile.avatar_url} alt="Profile avatar" />
      <h4>{profile.users}</h4>
    </div>
  );
};

export default Profile;
