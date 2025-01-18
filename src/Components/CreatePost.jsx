function CreatePost() {
  return (
    <form className="post">
      <div className="mb-3">
        <label htmlFor="id" className="form-label">Enter your user id</label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post title</label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3 content">
        <label htmlFor="conntent" className="form-label content">Post content</label>
        <textarea rows="4"></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">number of people likes on post</label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">number of people dislikes on post</label>
        <input type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="hashtags" className="form-label">Enter your hashtags</label>
        <input type="text" className="form-control" />
      </div>

      <button type="submit" className="btn btn-outline-primary">Submit</button>
    </form>
  )
}
export default CreatePost;