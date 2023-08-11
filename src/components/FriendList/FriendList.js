import { FriendListItem } from "components/FriendListItem/FriendListItem";
import { FriendItem } from "./FriendList.styled";


export const FriendList = ({ friends }) => {

  return (
      <ul>
        {friends.map(friend => (
          <FriendItem key={friend.id}>
                <FriendListItem friend={friend} />
          </FriendItem>
        ))}
      </ul>
    );
}