import { Marker } from "./FriendListItem.styled";


export const FriendListItem = ({ friend: { avatar, name, isOnline, } }) => {
  return (
    <>
      <Marker isOnline={isOnline}></Marker>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </>
  );
};
