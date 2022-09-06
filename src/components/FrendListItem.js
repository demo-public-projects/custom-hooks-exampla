import { useState, useEffect } from "react";

export default function FriendListItem({ friend, setSelectedFriend }) {
  const [isOnline, setIsOnline] = useState(null);
  
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status);
    }
    friend.subscribeToStatusChange(handleStatusChange);
    return () => {
      friend.unsubscribeFromStatusChange(handleStatusChange);
    };
  });

  useEffect(() => {
    setIsOnline(friend.isOnline);
  }, [friend]);

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
