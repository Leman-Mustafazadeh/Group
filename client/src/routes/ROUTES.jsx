
import AdminRouter from "../pages/Admin/AdminRouter";
import AdminHome from "../pages/Admin/Home";
import Home from "../pages/User/Home";
import Login from "../pages/User/Login";
import Register from "../pages/User/Register";
import TravelRouter from "../pages/User/TravelRouter";


export const ROUTES=[{
    path:"/",
    element:<TravelRouter/>,
    children:[{
        index:true,
        element:<Home/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    }

]
},
{
    path:"/admin",
    element:<AdminRouter/>,
    children:[{
        index:true,
        element:<AdminHome/>
    },
    // {
    //     path:"/login",
    //     element:<Login/>
    // },
    // {
    //     path:"/register",
    //     element:<Register/>
    // }

]
}
]