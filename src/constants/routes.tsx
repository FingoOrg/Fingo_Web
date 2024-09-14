import Chat from "../routes/Chat";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Road from "../routes/Road";
import { Route } from "./types";

export const routes: Route[] = [
    {
        path: '/',
        element: <Home />, 
        name: 'Home'
    },
    {
        path: '/road',
        element: <Road />,
        name: 'Road'
    },
    {
        path: '/chat',
        element: <Chat />,
        name: 'Chat'
    },
    {
        path: '/profile',
        element: <Profile />,
        name: 'Profile'
    },
]