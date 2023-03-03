import React from "react";
import styles from "./Blog.module.css";
import {useState} from "react"

type BlogTypes ={

}


function Blog() {


const [posts,setPosts] = useState({})

  return <body className={styles.blog_body}>
    <div>post komponent</div>
    <div>text osobny koponent</div>
    <div>lista postów ul list</div>
    </body>;
}

export default Blog;
