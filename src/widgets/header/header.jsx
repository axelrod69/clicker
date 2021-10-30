import "./header.css";
import {BsFillHandIndexThumbFill} from "react-icons/bs";


const Header = () => {
    return(
        <div className="caption">
            <div><BsFillHandIndexThumbFill color="white" size="40px"/></div>
            <div>Clicker</div>
        </div>
    );
}

export default Header;