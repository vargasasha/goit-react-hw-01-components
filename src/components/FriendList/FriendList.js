import { FriendListItem } from "components/FriendListItem/FriendListItem";

export const FriendList = ({ friends }) => {

    return (
      <ul>
        {friends.map(friend => (
          <li key={friend.id}>
                <FriendListItem friend={friend} />
          </li>
        ))}
      </ul>
    );
}