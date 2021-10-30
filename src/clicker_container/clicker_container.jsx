import "./clicker_container.css";
import Header from "../widgets/header/header";
import Footer from "../widgets/footer/footer";
import { Refresh } from "../action";
import { useSelector } from "react-redux";

const Clicker_Container = () => {
    const counter = useSelector(state => state.counter);
    return (
        <div className="container">
            <div style={{marginBottom : "30px"}}>
                <Header></Header>
            </div>
            <div className="box">
                <div className="initCounter">
                    {counter}
                </div>
                <div className="counterButtons">
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
}

export default Clicker_Container;