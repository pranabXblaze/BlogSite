import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Appwriteservice from "../appwrite/config";
import { Container, PostForm } from "../components";

export default function EditPost() {
  const [post, setPosts] = useState([]);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      Appwriteservice.getPost(slug).then((post) => {
        if (post) setPosts(post);
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}
