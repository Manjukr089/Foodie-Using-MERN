import { useEffect, useState } from "react";
import axios from "axios";
import Banner from "./banner";

const About = () => {
    const title = "About Us"
    // const [list,setList] = useState([
    //     {
    //         value:10,
    //         about:"Years of Experienced"
    //     },
    //     {
    //         value:200,
    //         about:"Foods"
    //     },
    //     {
    //         value:300,
    //         about:"Lifestyle"
    //     },
    //     {
    //         value:40,
    //         about:"Happy Customers"
    //     }
    // ])
    let [posts, setPosts] = useState([])
    let [users, setUsers] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:4000/foods");
            const res1 = await axios.get("http://localhost:4000/users");
            const data = res.data;
            const data1 = res1.data;
          setPosts(data);
          setUsers(data1);
        };
        fetchData();
      }, []); 
    return ( 
        <div className="about">
            <Banner data={title} />

            <div className="aboutFoodie my-3 d-flex justify-content-center">
                <div className="aboutImage row">
                    <img className="rounded-2 col-sm-12" width="450" height="600" src="/images/about.jpg" alt="" />
                </div>
                <div className="aboutInfo w-50 p-5 row">
                    <h2 className="fw-bolder fs-1 col-sm-12">About Foodie</h2>
                    {/* <div className="line my-3"></div> */}
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    <div className="lists p-2  m-2">
                        {/* <div className="card  bg-light  p-5 col-sm-12  bordertext-center"style={{width:"50%"}}> */}
                                <div className="row ">
                                    <div className="card col-4 m-3 bg-light">
                                        <h1 className="fw-bolder ">{users.length}</h1>
                                        <p>Happy Customers</p>
                                        
                                    </div>
                                    <div className="card col-4 m-3 bg-light">
                                    <h1 className="fw-bolder ">{posts.length}</h1>
                                        <p>Foods</p>
                                    </div>
                                </div>
                        </div>                                             
                    </div>
                </div>
            </div>
        // </div>
     );
}
 
export default About;
