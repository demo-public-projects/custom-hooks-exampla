import { useState, useEffect } from "react";

export const useFriendStatus = (friend) => {
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

  return isOnline;
};
