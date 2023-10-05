import React from 'react';

type InstagramPostProps = {
    profilePic: string;
    imageUrl: string;
    username: string;
    caption: string;
};

const InstagramPost = ({ profilePic, imageUrl, username, caption }: InstagramPostProps) => {
    return (
        <div className="border bg-white border-gray-300 rounded p-4 mx-2 mb-2 w-[87%] shrink-0">
            <div className="flex items-center mb-2.5">
                <img src={profilePic} alt="profile" className="w-8 h-8 rounded-full mr-2.5" />
                <span>{username}</span>
            </div>
            <img src={imageUrl} alt="post" className="w-full aspect-square object-cover rounded" />
            <div className="mt-2.5 text-sm">
                <strong>{username}</strong> {caption}
            </div>
        </div>
    );
};

export default InstagramPost;
