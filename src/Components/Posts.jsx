import { useContext } from "react";
import { MdDelete } from "react-icons/md"
import { Post } from "../store/Post-List-store";
function Posts({ post }) {
  let { deletePost } = useContext(Post);
  return (
    <div className="card" style={{ width: "70%" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete" onClick={() => deletePost(post.id)} >
          <MdDelete />
        </span>
        <p className="card-text">{post.body}</p>
        {
          post.tags.map((tag) => (
            <span className="alert alert-info tag" key={tag}>{tag}</span>

          ))
        }
        <div className="alert alert-success like" role="alert">
          post has been {post.likes} likes ❤
        </div>
        <div className="alert alert-danger" role="alert">
          post has been {post.dislikes} dislikes 🖤
        </div>
      </div>
    </ div>
  )
}
export default Posts;