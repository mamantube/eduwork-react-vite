import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project"
import App from "../App";

const router = createBrowserRouter ([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "",
                Component: Home,
            },
            {
                path: "/about",
                Component: About,
            },
            {
                path: "/project",
                Component: Project,
            },
            
        ]
    },
])

export default router;