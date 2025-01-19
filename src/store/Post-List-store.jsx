import { createContext, useReducer } from "react";
export const Post = createContext({});

const PostListReducer = (currPost, action) => {
  let newPos = currPost;
  if (action.type == 'DELETE') {
    newPos = currPost.filter((post) => post.id != action.payload.postId)
  }
  else if (action.type == 'ADDPOST') {
    newPos = [action.payload, ...currPost];
  }
  return newPos;

}

let PostListProvider = ({ children }) => {

  let [postlist, dispatchPostlist] = useReducer(PostListReducer, INITIALPOST);

  let deletePost = (postId) => {
    dispatchPostlist({
      type: 'DELETE',
      payload: {
        postId,
      }
    })
  }
  let addPost = (post) => {
    dispatchPostlist({
      type: 'ADDPOST',
      payload:
        post,
    })
  }
  return (
    <Post.Provider value={{ postlist, deletePost, addPost }} >{children}</Post.Provider>
  )
}
let INITIALPOST = [
  {
    id: "23",
    title: "go to gym",
    body: "hi,my name is pranav phalke",
    likes: 23,
    dislikes: 1,
    tags: ["gym", "fitness", "routine"]
  },
  {
    id: "45",
    title: "go to walk",
    body: "hi,my name is pranav phalke",
    likes: 23,
    dislikes: 1,
    tags: ["gym", "fitness", "routine"]
  },

];
export default PostListProvider;
