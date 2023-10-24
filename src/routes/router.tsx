import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import UpcomingPage from "../pages/UpcomingPage";
import InboxPage from "../pages/InboxPage";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: 'today',
                element: <HomePage />
            },
            {
                path: 'upcoming',
                element: <UpcomingPage />
            },
            {
                path: 'inbox',
                element: <InboxPage />
            }
        ]
    },
    // {
    //     path: "/login",
    //     element: ,
    //     children: []
    // }
])

function Router() {
    return <RouterProvider router={router}></RouterProvider>
}

export default Router;