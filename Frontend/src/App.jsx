import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Signup from "./components/auth/Signup";
import LogIn from "./components/auth/Login";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";
import Companies from "./components/admin/Companies";
import CompanyCreate from "./components/admin/CompanyCreate";
import CompanySetup from "./components/admin/CompanySetup";
import AdminJobs from "./components/admin/AdminJobs";
import PostJob from "./components/admin/PostJob";
import Applicants from "./components/admin/Applicants";
import ProtectedRoute from "./components/admin/ProtectedRoute";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/description/:id",
    element: <JobDescription />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
// amin ke liye yha se start hoga
{
  path: "/admin/companies",
  element:<ProtectedRoute><Companies/></ProtectedRoute>
},
{
  path: "/admin/companies/create",
  element:<CompanyCreate/>
},
{
  path: "/admin/companies/:id",
  element:<CompanySetup/>
},
{
  path: "/admin/jobs",
  element:<AdminJobs/>
},
{
  path: "/admin/jobs/create",
  element:<PostJob/>
},
{
  path: "/admin/jobs/:id/applicants",
  element:<Applicants/>
},

]);
function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
