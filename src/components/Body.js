import { React } from 'react'
import Hero from './Hero';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './Cart';

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Hero />,
        },
        {
            path: "/cart",
            element: <Cart />
        }
    ]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body
