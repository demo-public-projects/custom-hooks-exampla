import React from "react";
import FriendStatus from "./FriendStatus";

function FriendDetailedInfo({ friend, close }) {
  return (
    <div className="friendsDetails">
      <div className="card ">
        <img
          src={friend.avatar}
          className="card-img-top"
          alt="avatar"
          width={"50px"}
        />
        <div className="card-body">
          <h5 className="card-title">{`${friend.name} ${friend.surName}`}</h5>
          <h5>
            <FriendStatus friend={friend} />
          </h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
          <button className="btn btn-primary" onClick={close}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default FriendDetailedInfo;
