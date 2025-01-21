import { useContext, useRef } from "react";
import { Post } from "../store/Post-List-store";
import { useNavigate } from "react-router";

function CreatePost() {
  let { addPost, setCurrent } = useContext(Post);
  const navigate = useNavigate();

  let userIdElement = useRef();
  let postTitleElement = useRef();
  let postContentElement = useRef();
  let likesElement = useRef();
  let dislikesElement = useRef();
  let HastagElement = useRef();

  let handleSubmit = (e) => {
    e.preventDefault();
    let userId = userIdElement.current.value;
    let postTitle = postTitleElement.current.value;
    let postContent = postContentElement.current.value;
    let Likes = likesElement.current.value;
    let Dislikes = dislikesElement.current.value;
    let Hastags = HastagElement.current.value.split(" ");

    //submitting data using fetch
    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: userId,
        title: postTitle,
        body: postContent,
        likes: Likes,
        dislikes: Dislikes,
        tags: Hastags
      })
    })
      .then(res => res.json())
      .then((post) => {
        addPost(post)
        navigate("/");
        setCurrent("Home");
      }
      );
  }
  return (
    <form className="post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="id" className="form-label">Enter your user id</label>
        <input type="text" className="form-control" ref={userIdElement} />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post title</label>
        <input type="text" className="form-control" ref={postTitleElement} />
      </div>
      <div className="mb-3 content">
        <label htmlFor="conntent" className="form-label content">Post content</label>
        <textarea rows="4" ref={postContentElement}></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">number of people likes on post</label>
        <input type="text" className="form-control" ref={likesElement} />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">number of people dislikes on post</label>
        <input type="text" className="form-control" ref={dislikesElement} />
      </div>

      <div className="mb-3">
        <label htmlFor="hashtags" className="form-label">Enter your hashtags</label>
        <input type="text" className="form-control" ref={HastagElement} />
      </div>

      <button type="submit" className="btn btn-outline-primary">Submit</button>
    </form>
  )
}
export default CreatePost;