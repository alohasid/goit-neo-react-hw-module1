import React from "react";
import FriendListItem from "../FriendsListItem/FriendsListItem.jsx";

const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(({ avatar, name, isOnline, id }) => (
                <li key={id} className="friend-list-item">
                    <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
                </li>
            ))}
        </ul>
    );
};

export default FriendList;