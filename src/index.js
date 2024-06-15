
import ReactDOM from "react-dom/client"

import About from "./views/About/About";

import Review from "./views/Review/Review";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<h1>baby_fashion_world_grp4_project3_icp7.0</h1>);

 const path = window.location.pathname

   
     if (path === "/about")
        {
            root.render(< About/>)
        }
        
            else{
                root.render(<h1>404 Page Not Found</h1>)
            }