import { useFriendStatus } from "../hooks/useFriendStatus"

export default function FriendListItem({ friend, setSelectedFriend }) {
  const isOnline = useFriendStatus(friend);
  
  return (
    <li
      role="button"
      className="list-group-item list-group-item-action"
      style={{ color: isOnline ? "limeGreen" : "black" }}
      onClick={() => setSelectedFriend(friend)}
    >
      {`${friend.name} ${friend.surName}`}
    </li>
  );
}
