import { MdDelete } from "react-icons/md"
function Posts() {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete">
          <MdDelete />
        </span>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, in.</p>
        <span className="badge text-bg-info">gym</span>
        <div className="alert alert-success" role="alert">
          post has been 25 likes ❤
        </div>
        <div className="alert alert-danger" role="alert">
          post has been 25 dislikes 🖤
        </div>
      </div>
    </ div>
  )
}
export default Posts;