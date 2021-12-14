import React, { useState } from 'react'
import   './App.css'
import PostForm from './Component/PostForm';
import PostList from './Component/PostList/PostList';


function App() {
  const [posts, setPosts] = useState([
                              {id: 1, title: 'Привет React', body: 'Изучаем react'},
                              {id: 2, title: 'Привет React', body: 'Изучаем фреймворк'},
                              {id: 3, title: 'Привет React', body: 'Изучаем фреймворк react'}
                              ])
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }  
  const removePost = (post) =>{
    setPosts(posts.filter(p => p.id !== post.id))
  }                        
          
  return (
    <div className="App">
    <PostForm create = {createPost} />
    <PostList remove = {removePost} posts = {posts} title = 'Список постов 1' />
   
   
    </div>
  );
}

export default App;
