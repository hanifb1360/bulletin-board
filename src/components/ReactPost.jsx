import '../styles/reactPost.css'

const ReactPost = (props) => {
  return (
    <div className="post-box">
      <h3> {props.question} </h3>
      <p> {props.answer} </p>
      <button className='likeBtn'> Like </button>
    </div>
  )
}

export default ReactPost