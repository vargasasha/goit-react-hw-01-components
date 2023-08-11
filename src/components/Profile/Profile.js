import { List, ListItem, Image, Wrapper, Avatar } from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
    
  const keys = Object.keys(stats);

  return (
    <Wrapper>
      <Avatar>
        <Image src={avatar} alt={username} />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </Avatar>

      <List>
        {keys.map(item => (
          <ListItem key={item}>
            <span>{item}</span>
            <span>{stats[item]}</span>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};
