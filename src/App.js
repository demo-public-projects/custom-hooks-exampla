import "./App.css";
import FriendsList from "./components/FriendsList";
import { friends } from "./utils/FriendsInfo";
import { useState } from "react";
import FriendDetailedInfo from "./components/FriendDetailedInfo";

function App() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  return (
    <div className="App">
      <FriendsList friends={friends} setSelectedFriend={setSelectedFriend} />
      {selectedFriend && (
        <FriendDetailedInfo
          friend={selectedFriend}
          close={() => setSelectedFriend(null)}
        />
      )}
    </div>
  );
}

export default App;
