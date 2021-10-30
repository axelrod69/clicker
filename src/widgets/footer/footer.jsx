import "./footer.css";
import { ImPlus } from "react-icons/im";
import { HiRefresh } from "react-icons/hi";
import { RiSubtractFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { Increase, Refresh, Decrease } from "../../action";

const Footer = () => {
    
    const dispatch = useDispatch();

    return (
        <div className="footer">
            <div>
                <button className="green" onClick={() => dispatch(Increase())}><ImPlus color="white" size="35px"/></button>
            </div>
            <div>
                <button className="yellow" onClick={() => dispatch(Refresh())}><HiRefresh color="black" size="35px"/></button>
            </div>
            <div>
                <button className="red" onClick={() => dispatch(Decrease())}><RiSubtractFill color="white" size="35px" fontWeight="bold"/></button>
            </div>
        </div>
    );
}

export default Footer;