export const FriendListItem = ( {friend: { avatar, name, isOnline, id}}) => {
  return (
    <>
      <span>{isOnline}</span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </>
  );
};
