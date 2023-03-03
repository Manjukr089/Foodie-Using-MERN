import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
            <div className="navbar h-25 bg-light navbar-expand-lg  justify-content-between ps-4 pe-5 align-items-center">
            <div className="logo d-flex align-items-center ">
                <img className="" src="/images/logo1.jpg" width={100}  alt="" />
                <h3 className="p-1 fw-bolder">Foodie</h3> 
            </div>
            <div className="links ">    
            <ul className="navbar-nav navbar-collapse-sm" id="navbarNav">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>           
                <li className="nav-item"><Link className="mx-2 nav-link" to={'/home'}>Home</Link></li>
                <li className="nav-item"><Link className="mx-2 nav-link" to={'/home/about'}>About</Link></li>
                <li className="nav-item"><Link className="mx-2 nav-link" to={'/home/foods'}>Foods</Link></li>
                <li className="nav-item"><Link className="mx-2 nav-link" to={'/home/addPost'}>Add Post</Link></li>
                <li className="nav-item"><Link className="mx-2 nav-link" to={'/'}>Logout</Link></li>
            </ul>
            </div>
            </div>
     );
}
 
export default Navbar;