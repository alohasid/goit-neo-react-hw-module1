import React from "react";
import FriendListItem from "../FriendsListItem/FriendsListItem.tsx";

interface Friend {
    avatar: string;
    name: string;
    isOnline: boolean;
    id: number;
}

interface FriendListProps {
    friends: Friend[];
}

const FriendList: React.FC<FriendListProps> = ({ friends }) => {
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