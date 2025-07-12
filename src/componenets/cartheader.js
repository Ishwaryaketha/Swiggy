import { Outlet } from "react-router-dom";
import Swiggyheader from "./swiggycart";

export default function Cartheader() {
    return (
        <>
            <Swiggyheader></Swiggyheader>
            <Outlet /> 
        </>
    );
}
