import React  from 'react'
import MyButton from '../Ui/Button/MyButton'
const Post = function(props) {

return <div>
  <div className='post'>
      <div>
      <div className = 'post__content'>
        <strong>{props.number} {props.post.title}</strong>
      </div>
      <div>
       {props.post.body}
      </div>
      </div>
    
      <div className = 'post__btn'>
        <MyButton>Удалить</MyButton>
      </div>
    </div>
</div>
}
export default Post