import React from "react";
import {useState, useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import D6 from "./D6";

const Dice = () => {
    return ( 
        <>
            <D6 />
            <D6 />
        </>

     );
}
 
export default Dice;