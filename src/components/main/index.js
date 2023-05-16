//Se importa librria de react 
import React from "react";
//Se imorta componente leftSide
import LeftSide from './helpers/componentsChildren/leftSide/index';
import RightSide from './helpers/componentsChildren/rightSide/index';

//Se genera componente 
function main(){
    return(
        <div className="main-container">
            <LeftSide/>
            <RightSide/>

        </div>
    );
};
export default main;