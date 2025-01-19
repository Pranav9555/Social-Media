import { useContext } from "react";
import Posts from "./Posts";
import { Post } from "../store/Post-List-store";
function Postlist() {

  let { postlist } = useContext(Post);
  return (
    <>
      {
        postlist.map((post) => (
          <Posts key={post.id} post={post} />
        ))
      }

    </>
  )
}
export default Postlist;