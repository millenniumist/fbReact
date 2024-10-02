
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "../pages/home/HomePage";

const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <div>
                    <Outlet />
                </div>
            ),
            children: [
                {
                    path: "/",
                    element: <HomePage />,
                },
                {
                    path: "about",
                    element: <div>About Page</div>,
                },
                {
                    path: "contact",
                    element: <div>Contact Page</div>,
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
};

export default AppRouter;