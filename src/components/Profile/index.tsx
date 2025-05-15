import type { UserInstance } from "../../models/user";
import AuthSession from "../../utils/session";
import "../profileCalendar.scss";

type ProfileCardProps = {
  profile?: UserInstance;
};

const ProfileCard = ({ profile }: ProfileCardProps) => {
  console.log("profile:", JSON.stringify(profile, null, 2));

  // Eğer profil varsa, önce oradan al; yoksa AuthSession'dan
  const roles = profile?.role
    ? profile.role
    : AuthSession.getRoles();

  const roleName = Array.isArray(roles)
    ? roles.map((role) => role.name).join(", ")
    : roles?.name;

  return (
    <div className="profile-section">
      <div className="profile-info">
        <h2>Welcome, {profile?.name ?? AuthSession.getName()}</h2>
        <p>{profile?.email ?? AuthSession.getEmail()}</p>
        <p>{roleName}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
