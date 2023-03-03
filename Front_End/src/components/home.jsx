// const Home = () => {
//     return (
//         // <div className="home d-lg-flex d-sm-block">
//         // <div className="home row p-lg-5 p-sm-0">
//         //     {/* <h1>Welcome to home page</h1> */}
//         //     <p className="col-lg-6 col-sm-12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt libero accusantium magnam delectus, quas quidem necessitatibus corrupti reprehenderit, fuga consequatur ipsam ipsum placeat corporis non in, eum facere provident id?</p>
//         //     <p className="col-lg-6 col-sm-12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt libero accusantium magnam delectus, quas quidem necessitatibus corrupti reprehenderit, fuga consequatur ipsam ipsum placeat corporis non in, eum facere provident id?</p>
//         // </div>

//     //     <div className="image row">
//     //       <img className=" col-lg-8 col-sm-12 p-0 " src="./images/burger.jpg" height={600} alt=""/>
//     //          <div className="para col-lg-4 col-sm-12  bg-warning pt-lg-5 p-lg-2 p-sm-5 ps-sm-5">
//     //               <h1 className="">Love the Delicious & Tasty Foods</h1>
//     //                   <p className=" ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam porro necessitatibus quaerat. A sapiente
//     //         consectetur explicabo tempore quas atque rerum id nisi, ipsa dolores consequuntur qui iste. Esse, velit
//     //         aliquid.</p>
//     //         <button className="btn btn-dark">Add a post</button>
//     //           </div>

//     //       </div>

//     );
// }

// export default Home;



const Home = () => {
    return (
        <div className="home">
            <div className="top mt-0 row" style={{ justifyContent: 'center' }} >
                <img className=" col-lg-6 col-sm-12 p-0" src="./images/pizza3.jpg" alt="" />
                <div className="col-lg-3 col-sm-12  bg-warning  p-5 mb-5 h-50"  >
                    <p style={{ fontSize: "16px", fontWeight: 400, fontFamily: "Poppins", color: 'rgba(0,0,0,0.7)', textTransform: 'uppercase', letterSpacing: '2px' }} >FEATURED POSTS</p>
                    <h1 className="" style={{ fontWeight: '800', fontFamily: "Poppins,Arial,sans-serif", fontSize: '39px', color: 'black' }} >Love the Delicious & Tasty Foods</h1>
                    <h2 className="col-lg-12 col-sm-12" style={{ textDecoration: 'underline', marginTop: '-30px', marginBottom: '20px' }}>____________________</h2>
                    <p style={{ fontSize: "18px", fontWeight: 400, lineHeight: 1.5, color: 'rgba(0,0,0,0.5)' }}>A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
                    <a href="/home/addPost" className="btn btn-dark text-light btn-outline-danger p-3 mt-3 ">Add Post  <span className="ps-3">   -></span></a>
                    <a href="/home/about" className="btn col-lg-2 col-sm-2 bg-light  border  heroBtn fw-bold fs-4 rounded-0 text-secondary" style={{ height: "70px", width: "387px", padding: "20px", marginLeft: "-48px", marginBottom: "-50px", marginTop: "10px" }}>Read more &gt;</a>
                </div>
            </div>

            {/*section 2 */}
            <div className="section2 ms-5 p-5">
                <h1>Recent Stories</h1>
                <div className="sec2   row ">
                    <div className="inner  col-lg-3 col-sm-12   ">
                        <div className="info my-3 ">
                            <img className="col-lg-8 col-sm-4 w-100" src="./images/rice.jpg" alt="" />
                            <p>Dessert -------- March 01, 2018</p>
                            <h4>Tasty & Delicious Foods</h4>
                        </div>

                        <div className="info my-3">
                            <img className="col-lg-8 col-sm-4 w-100" src="./images/halfboil.jpg" alt="" />
                            <p>Dessert -------- March 01, 2018</p>
                            <h4>Tasty & Delicious Foods</h4>
                        </div>
                    </div>

                    <div className="sec3 col-lg-3 col-sm-12">
                        <div className="info my-3 ">
                            <img className="col-lg-8 col-sm-12 w-100" src="./images/pizza2.jpg" alt="" />
                            <p>Dessert -------- March 01, 2018</p>
                            <h4>Tasty & Delicious Foods</h4>
                        </div>
                        <div className="info my-3 ">
                            <img className="col-lg-8 col-sm-4 w-100" src="./images/dose2.jpg" alt="" />
                            <p>Dessert -------- March 01, 2018</p>
                            <h4>Tasty & Delicious Foods</h4>
                        </div>
                    </div>
                    <div className="info my-3 col-lg-6 col-sm-12">
                        <img className="col-lg-8 col-sm-12 w-100" src="./images/burger.jpg" alt="" />
                        <div className="in" style={{ marginTop: '-100px' }}>
                            <p className="text text-dark fw-bold fs-6 ps-3">Food</p>
                            <h3 className="text-light fw-bold"   >Tasty & Delicious Foods</h3>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
