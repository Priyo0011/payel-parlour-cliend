import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Main = () => {
    return (
        <div>
            <div className="max-w-[1400px] mx-auto"><Navbar></Navbar></div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;