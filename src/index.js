import ReactDOM from "react-dom/client"

import About from "./views/About/About";

import ShoppingList from "./views/ShoppingList/ShoppingList";

import Contact from "./views/Contact/Contact";

import BoyGirl from "./views/BlogCard/BoyGirl/BoyGirl"

import Home from "./views/Home/Home" 
import ProductView from "./views/BlogCard/ProductView/ProductView"
import BlogProductCard from "./views/BlogCard/BlogProductCard/BlogProductCard"
import Category from "./views/BlogCard/Category/Category"

    
import { RouterProvider, createBrowserRouter } from "react-router-dom";
            const root = ReactDOM.createRoot(document.getElementById("root"));

            const router =createBrowserRouter([
                {
                    path:"/",
                    element:<Home/>
                },
                {
                   path:"/about",
                   element:<About/>
               },
               {
                path:"/contact",
                element:<Contact/>
             
             },
             {
                path:"/shopping",
                element:<ShoppingList/>
             
             },
            
             {
                path:'/BoyGirl',
                element:<BoyGirl/>
             }, {
                path: "/category/:gender",
                element: <Category />,
              },
              {
                path: "/category/:gender/:category",
                element: <BlogProductCard />,
              },
              {
                path: "/product/:id",
                element: <ProductView />,
              },
              
            ])
            root.render(<RouterProvider router={router} /> )            