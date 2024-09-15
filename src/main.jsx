import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/home';
import JobDetailgs from './Components/JobDetailgs/JobDetails';
import Featured from './Components/JobFeatured/Featured';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Root/>,
    children : [
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "/Applied",
        loader : () => fetch("/Data/Jobs.json"),
        element : <AppliedJobs/>
      },
      {
        path : "/Statistics",
        element : <Featured/>
      },
      {
        path : "/jobs/:id",
        loader : () => fetch("/Data/Jobs.json"),
        element : <JobDetailgs/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
