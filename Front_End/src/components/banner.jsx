import { Link } from "react-router-dom";
import '../styles/banner.css';
const Banner = ({ data }) => {
    return (
        <div className="banner row align-items-end" >
            <div className="infoo text-center pb-5"  >
                
                <h1 className="text text-light fw-bolder " style={{ fontFamily: "Playfair Display", fontSize: "64px", marginTop:'300px' }}>{data}</h1>
                <Link to="/home" className="text-decoration-none text-light fs-5">Home &gt;</Link>
            </div>
        </div>
    );
}

export default Banner;