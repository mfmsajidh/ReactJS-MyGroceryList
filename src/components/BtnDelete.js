import {Button} from "@material-ui/core";
import React from "react";
import {app} from "./app"

export function BtnDelete (props){
    return (
        <Button color="secondary" onClick={()=>app.Delete(props.index)}>Delete</Button>
    )
}