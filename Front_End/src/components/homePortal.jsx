import { Route, Routes} from "react-router-dom";
import About from "./about";
import AddPost from "./addPost";
import Food from "./foods";
import Home from "./home";
import Navbar from "./navbar";
import SinglePost from "./singlePost";
const HomePortal = () => {
    return ( 
        <div className="homePortal">
                <Navbar/>
            <Routes>
                
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/addPost" element={<AddPost/>}/>
                <Route path="/foods" element={<Food/>}/>
                <Route path="/foods/:id" element={<SinglePost/>}/>
               
            </Routes>
        </div>
        
     );
}
 
export default HomePortal;