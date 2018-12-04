import FormOne from "./FormOne";
import Spoiler from "./Spoiler";
import {TableGrocery} from "./TableGrocery";
import React from "react";
//React Class
export function TxtField(){
    return (
        <>
            <FormOne />
            <Spoiler />
            <p id="counter"/>
            <TableGrocery />
        </>

    );
}