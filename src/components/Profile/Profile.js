import { List, ListItem, Image } from "./Profile.styled";

export const Profile = ({ avatar, username, tag, location, stats }) => {
    
  const keys = Object.keys(stats);

  return (
    <div>
      <div>
        <Image src={avatar} alt={username} />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <List>
        {keys.map(item => (
          <ListItem key={item}>
            <span>{item}</span>
            <span>{stats[item]}</span>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
