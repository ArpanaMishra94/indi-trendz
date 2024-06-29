import { React } from 'react'
import Hero from './Hero';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './Cart';
import ProfilePage from './Profile';

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Hero />,
        },
        {
            path: "/cart",
            element: <Cart />
        },
        {
            path: "/profile",
            element: <ProfilePage />
        }
    ]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body
