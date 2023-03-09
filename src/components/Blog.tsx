import React from "react";
import styles from "./Blog.module.css";
import { useState } from "react";

type BlogTypes = {
  text: string;
};

function Blog() {
  const [listOfPosts, setListOfPosts] = useState<Array<BlogTypes>>([]);
  const [newPost, setNewPosts] = useState<BlogTypes>({
    text: "",
  });
  console.log(newPost);
  const ListOfPosts = [...listOfPosts].map((post, index) => (
    <div key={index}>
      {post.text}
      <button>edytuj</button>
    </div>
  ));

  const handleNewPost = () => {
    setListOfPosts([...listOfPosts, newPost]);
  };
  console.log(listOfPosts);
  return (
    <body className={styles.blog_body}>
      <div>
        <input
          type="text"
          name="text"
          onChange={(e) =>
            setNewPosts({ ...newPost, [e.target.name]: e.target.value })
          }
        />
      </div>
      <button onClick={handleNewPost}>klik</button>
      {ListOfPosts}
      <div>text osobny koponent</div>
      <div>lista postów ul list</div>
    </body>
  );
}

export default Blog;
