import React  from 'react'
import Post from '../Post/Post'

const PostList = function(props) {

return <div>
   <h1 style = {{textAlign: 'center'}}>
            {props.title}
      </h1>
           {props.posts.map((post, index) => <Post remove = {props.remove} number = {index +1} post = {post} key = {post.id}/>)}
  
</div>
}
export default PostList