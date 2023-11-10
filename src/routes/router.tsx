import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import UpcomingPage from "../pages/UpcomingPage";
import InboxPage from "../pages/InboxPage";
import RedirectToToday from "../utils/RedirectToToday";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RedirectToToday />
    },
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
]);

function Router() {
    return <RouterProvider router={router}></RouterProvider>
}

export default Router;