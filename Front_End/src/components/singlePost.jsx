import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Banner from "./banner";


const SinglePost = () => {
    let title = 'Read Details'
    let [single, setSingle] = useState([])
    let params = useParams()

    useEffect(() => {
        const fetchData = async () => {
          const res = await axios.get(`http://localhost:4000/foods/${params.id}`);
          const data = res.data;
          setSingle(data);
        };
        fetchData();
      });
      

    return ( 
        <div className="singlePost ">
            <Banner data={title}/>
            <span className="d-flex justify-content-between">

                <h2 className="ms-2 mt-2 bg- text-danger">{single.author}</h2>           
                 <a href="/home/foods" className="btn btn-dark me-5 mt-2" >Go Back</a>
</span>
              <div className="single d-flex p-2">
              <img className="col-4" src={single.images} alt="" />
            <div className="side ms-4 mb-4">
            <h1 className="" style={{marginTop:"-18px"}}>{single.title} </h1>
            <p>{single.summary}</p>
            <iframe className="w-100 h-100" src={single.location} frameborder="0"></iframe>
            </div>
              {/* <a href="/home/foods" className="btn btn-dark w-25 h-25 " >Go Back</a> */}

              </div>

        </div>
        
     );
}
 
export default SinglePost;