import React from "react";
import { Link } from "react-router-dom";
import Appwriteservice from "../appwrite/config";

function PostCard({ id, title, featuredImage }) {
  return (
    <Link to={`/post/${id}`}>
      <div className="w-full rounded-xl bg-gray-100 p-4">
        <div className="w-full flex justify-center mb-4">
          <img
            src={Appwriteservice.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
