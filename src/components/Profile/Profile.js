import { List } from "./Profile.styled";

export const Profile = ({ avatar, username, tag, location, stats }) => {
    
  const keys = Object.keys(stats);

  return (
    <div>
      <div>
        <img src={avatar} alt={username} />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <List>
        {keys.map(item => (
          <li key={item}>
            <span>{item}</span>
            <span>{stats[item]}</span>
          </li>
        ))}
      </List>
    </div>
  );
};
