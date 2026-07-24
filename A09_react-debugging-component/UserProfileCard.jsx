import { useState } from "react";

const userData = {
  name: "Winston Gultiano",
  avatarUrl:
    "https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-1/659908747_122099637506915091_1448214410584482261_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s200x200&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeE2lWLvvlmgH_c25kVZEhLSXCWdsQ8xzixcJZ2xDzHOLDcExAff9yp9myQw4GS4FKcKtnOnyH1xYlec_YJOr9N0&_nc_ohc=fugEaApjNT8Q7kNvwFcLcQw&_nc_oc=AdrFAiyeJ-NTrDKdXKLqHDev3NeyMERNodFbqPhEiH91tPIEZg61nLt3Di61Oe_Bc0M&_nc_zt=24&_nc_ht=scontent.fmnl30-2.fna&_nc_gid=cSbiNUSgVwJU4Dbs3MfJOw&_nc_ss=7b2a8&oh=00_AQDdo4aRiD9iFBVtezsI76AI7RlnLhT0ZkHJO1vhUb4CWg&oe=6A68D795",
  bio: "I'm currently studying Bachelor of Science in Information Systems at La Verdad Christian College.",
  skills: ["Python", "Java", "HTML", "CSS", "JavaScript", "PHP", "Laravel"],
  isOnline: true,
  lastUpdated: "1 minute ago",
};

function UserProfileCard() {
  const [messageCount, setMessageCount] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  function handleSendMessage() {
    setMessageCount(messageCount + 1);
  }

  function handleReset() {
    setMessageCount(0);
  }

  function handleToggleFavorite() {
    setIsFavorited(!isFavorited);
  }

  return (
    <>
      <div className="profile-card">
        <img src={userData.avatarUrl} />

        <h2>{userData.name}</h2>

        <label htmlFor="bio">Bio</label>
        <p id="bio">{userData.bio}</p>

        <h3>Skills</h3>
        <ul>
          {userData.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <div style={{ color: "blue", fontWeight: "bold" }}>
          Messages sent: {messageCount}
        </div>

        {userData.isOnline ? <span>🟢 Online</span> : <span>⚪ Offline</span>}

        <button onClick={handleSendMessage}>Send Message</button>
        <button onClick={handleReset}>Reset</button>

        {userData.isOnline && (
          <button onClick={handleToggleFavorite}>
            {isFavorited ? "★ Favorited" : "☆ Favorite"}
          </button>
        )}
      </div>
      <p className="footer">Card last updated: {userData.lastUpdated}</p>
    </>
  );
}

export default UserProfileCard;
