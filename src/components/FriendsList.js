import React from "react";
import FriendListItem from "./FrendListItem";

function FriendsList({ friends, setSelectedFriend }) {
  return (
    <ul className="list-group friendsList">
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          friend={friend}
          setSelectedFriend={setSelectedFriend}
        />
      ))}
    </ul>
  );
}

export default FriendsList;
