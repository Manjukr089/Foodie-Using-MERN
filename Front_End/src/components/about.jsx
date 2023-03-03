import { useState } from "react";
import Banner from "./banner";

const About = () => {
    const title = "About Us"
    const [list,setList] = useState([
        {
            value:10,
            about:"Years of Experienced"
        },
        {
            value:200,
            about:"Foods"
        },
        {
            value:300,
            about:"Lifestyle"
        },
        {
            value:40,
            about:"Happy Customers"
        }
    ])
    return ( 
        <div className="about">
            <Banner data={title} />

            <div className="aboutFoodie my-3 d-flex justify-content-center">
                <div className="aboutImage row">
                    <img className="rounded-2 col-sm-12" width="450" height="600" src="/images/about.jpg" alt="" />
                </div>
                <div className="aboutInfo w-50 p-5 row">
                    <h2 className="fw-bolder fs-1 col-sm-12">About Foodie</h2>
                    <div className="line my-3"></div>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    <div className="lists p-2 d-flex flex-wrap row">
                        {list.map(item => (
                            <div className="list bg-light p-5 col-sm-12 border text-center" key={item.value} style={{width:"50%"}}>
                                <h1 className="fw-bolder">{item.value}</h1>
                                <p className="text-secondary">{item.about}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default About;

// import { useState } from "react";
// import Banner from "./banner";

// const About = () => {
//     const title = "About Us";
//     const [list, setList] = useState([
//         {
//             value:10,
//             about:"Years of Experience"
//         },
//         {
//             value:200,
//             about:"Foods"
//         },
//         {
//             value:300,
//             about:"Lifestyle"
//         },
//         {
//             value:40,
//             about:"Happy Customers"
//         }
//     ]);
//     return (
//         <div className="about">
//             <Banner data={title} />

//             <div className="aboutFoodie my-5 d-flex justify-content-center">
//                 <div className="aboutImage row">
//                     <img className="rounded-2 col-sm-12" width="450" height="600" src="/images/about.jpg" alt="" />
//                 </div>
//                 <div className="aboutInfo w-50 p-5 row">
//                     <h2 className="fw-bolder fs-1 col-sm-12">About Foodie</h2>
//                     <div className="line my-3"></div>
//                     <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
//                     <div className="lists p-2 d-flex flex-wrap d-inline-block">
//                         {list.map(item => (
//                             <div className="list bg-light  p-5 col-sm-12 border text-center" key={item.value} style={{width:"50%", margin: "0 0px 10px 0"}}>
//                                 <h1 className="fw-bolder">{item.value}</h1>
//                                 <p className="text-secondary">{item.about}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
 
// export default About;
