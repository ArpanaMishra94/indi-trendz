import { React } from 'react'
import Hero from './Hero';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './Cart';
import ProfilePage from './Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            <ToastContainer style={{marginTop: '80px'}}
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="light"
                toastClassName={() => 
                    "relative flex p-2 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer mb-3 ease-in-out"
                    + " bg-white text-gray-800 shadow-md"
                    + " hover:shadow-lg transition-all duration-300"
                    + " sm:w-full md:max-w-md"
                }
                bodyClassName={() => "text-sm font-medium block p-3"}
                progressClassName={() => 
                    "absolute bottom-0 left-0 right-0 h-1 bg-[#7b8a8b] transition-all duration-300 ease-in-out"
                }
            />
        </div>
    )
}

export default Body
