import Event from "../components/Event";
import Home from "../pages/Home";
import TravelRouter from "../pages/TravelRouter";

export const ROUTES=[{
    path:"/",
    element:<TravelRouter/>,
    children:[{
        index:true,
        element:<Home/>
    },
    {
        path:"event",
        element:<Event/>
    }

]
}]