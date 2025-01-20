import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import App from './routes/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Postlist from './Components/postlist.jsx';
import CreatePost from './Components/CreatePost.jsx';

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    { path: "/", element: <Postlist /> },
    { path: "/CreatePost", element: <CreatePost /> }
  ],
},]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
