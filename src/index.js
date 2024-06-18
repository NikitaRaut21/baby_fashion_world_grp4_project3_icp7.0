
import ReactDOM from "react-dom/client"

import About from "./views/About/About";

import ShoppingList from "./views/ShoppingList/ShoppingList";

import Contact from "./views/Contact/Contact";

import BoyGirl from "./views/BlogCard/BoyGirl/BoyGirl"




            const root = ReactDOM.createRoot(document.getElementById("root"));

            const path = window.location.pathname
            if(path === "/")
               {
                   root.render()
               }              
                   else if (path === "/about")
                    {
                        root.render(<About />)
                    }

                    else if (path === "/boygirl")
                        {
                            root.render(<BoyGirl/>)
                        }
                                          
                    else if (path === "/shopping")
                       {
                           root.render(<ShoppingList />)
                       }
                      
                    else if (path === "/contact")
                            {
                                root.render(<Contact />)
                            }
                        
                    else{
                           root.render(<h1>404 Page Not Found</h1>)
                       }