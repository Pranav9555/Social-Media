import { useContext } from "react";
import Posts from "./Posts";
import { Post } from "../store/Post-List-store";
function Postlist() {

  let { postlist } = useContext(Post);
  return (
    <>
      {postlist.length === 0 && <h1 className="Message">Their are no post</h1>}
      {
        postlist.map((post) => (
          <Posts key={post.id} post={post} />
        ))
      }

    </>
  )
}
export default Postlist;