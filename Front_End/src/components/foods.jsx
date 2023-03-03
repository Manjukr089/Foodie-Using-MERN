import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "./banner";

const Foods = () => {
    let title = "All Posts"

    let [posts,setPosts] = useState([])
   
    useEffect(() => {
        const fetchData = async () => {
          const res = await axios.get("http://localhost:4000/foods");
          const data = res.data;
          setPosts(data);
        };
        fetchData();
      }, []); // specify an empty array as the second argument
      
    return ( 
        <div className="foods ">
            <Banner data={title}/>
            <div className="post_list m-2 d-flex flex-wrap">
            {
                posts.map((x)=>(
                    <div className="card  p-2 m-2 col-4 w-25">
                        <img  className="w-100" src={x.images} alt="" />
                        <h3>{x.author}</h3>
                        <p>{x.title}</p>
                        <Link className="btn btn-dark w-50 " to={`/home/foods/${x._id}`}>Read Post</Link>

                    </div>
                ))
            }
            </div>
        </div>
     );
}
 
export default Foods;