import '../styles/reactPost.css'
import LikedMessage from './PostLiked'
import { useState } from "react"


const ReactPost = (props) => {
  let [like, setLike] = useState(false)
  return (
    <div className="post-box">
      
      <div className='q-a-box'>
      <h3 className='question'> {props.question} </h3>
      <p> {props.answer} </p>
      </div>
      
      <div className='likeContainer'>
      {like && (<LikedMessage/>)}
      </div>
      
      <button className='likeBtn' onClick={() => {setLike(!like)}}>{like ? <p>I want to get back my like</p> : <p>LIKE</p>}</button>

   

    </div>
  )
}

export default ReactPost