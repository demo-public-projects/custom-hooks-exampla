import { useState, useEffect } from "react";

export default function FriendStatus({ friend }) {
  const [isOnline, setIsOnline] = useState(friend.isOnline);

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

  return isOnline ? "Here" : "Away";
}
