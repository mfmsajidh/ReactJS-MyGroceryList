import React, {Component} from 'react'
import {Button} from "@material-ui/core";

import Dialog from '@material-ui/core/Dialog';
import EditDialog from "./EditDialog";
import DialogTitle from "@material-ui/core/DialogTitle";

//ES6 Class
export class BtnEdit extends Component{

    constructor(props){
        super(props);
        this.state={open: false};

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleClickOpen() {
        this.setState({open: true});
    }

    handleClose(){
        this.setState({open: false});
    }

    handleSubmit() {
        this.setState({open: false})

    }

    // state = {
    //     open: false
    // };
    //
    // handleClickOpen = () => {
    //     this.setState({ open: true });
    // };
    //
    // handleClose = () => {
    //     this.setState({ open: false });
    // };
    //
    // handleSubmit = () => {
    //     this.setState({open: false});
    // };

    render() {
        return (
            <div>
                <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>Edit</Button>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Edit</DialogTitle>
                    <EditDialog index={this.props.index} handleClose={this.handleClose} handleSubmit={this.handleSubmit}/>
                </Dialog>
            </div>
        );
    }



    // render(){
    //     return (
    //         <Button variant="contained" color="secondary" onClick={()=>app.Edit(this.props.index)}>Edit</Button>
    //     )
    // }
}