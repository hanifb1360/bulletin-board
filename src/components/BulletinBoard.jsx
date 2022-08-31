import ReactPost from "./ReactPost"
import { Data } from "./data"

const BulletinBoard = () => {
  return (
    <div>
      
      <section className="board-wrapper">

          {Data.map((question, id) => {
            return <ReactPost key={id} {...question} />;
          })}

      </section>
    </div>
  )
}

export default BulletinBoard