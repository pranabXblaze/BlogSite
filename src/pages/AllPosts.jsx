import React, { useEffect, useState } from "react";
import Appwriteservice from "../appwrite/config";
import { Container, PostCard } from "../components";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    Appwriteservice.listPosts([]).then((posts) => {
      posts && setPosts(posts);
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="w-1/4 p-4" key={post.$id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
