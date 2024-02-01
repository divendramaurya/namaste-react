import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from './components/Header';
import Body from './components/Body';
//import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
//import Grocery from './components/grocery';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

const Grocery =  lazy(() => import('./components/grocery'));
const About = lazy(() => import('./components/About'))


const styleCard = {
    backgroundColor: '#f0f0f0',
}

const AppLayout = () => {
    const [userName, setUserName] = useState();

   useEffect(() => {
    const data = {
        name :"Divendra Maurya"
    };
    setUserName(data.name);
   }, [])
   
    console.log(<Body/>);
    return(
        <Provider store={appStore}>
        <UserContext.Provider value = {{loggedInUser : userName, setUserName}}>
         <div className="app">
            <Header/>
            <Outlet/>
         </div>
        </UserContext.Provider>
        </Provider>
    )
} 

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children:[
            {
                path: '/',
                element:<Body/>
            },
            {
                path: '/about',
                element: <Suspense fallback={<h1>About us, page is loading...</h1>}><About/></Suspense>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<h1>Grocery page is loading...</h1>}><Grocery/></Suspense>
            },
            {
                path: '/restaurants/:resId',
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    },
]);



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)
//root.render(<AppLayout/>)