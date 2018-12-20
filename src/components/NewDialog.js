import React, {Component} from "react";
import Button from "@material-ui/core/es/Button/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";

export class NewDialog extends Component {
    render() {
        return (
            <div>
                <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>Edit</Button>

                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <form id="saveEdit"  method="POST" action="javascript:void(0)">
                        <DialogTitle id="form-dialog-title">Edit</DialogTitle>
                        <DialogContent>
                            <DialogContentText>Fill in the below required to commit your changes</DialogContentText>
                            <TextField id="edit-item" autoFocus margin="dense" label="Item" fullWidth/>
                            <TextField id="edit-quantity" margin="dense" label="Quantity" fullWidth={true}/>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">Cancel</Button>
                            <Button type="submit" onClick={this.handleSubmit} color="primary">Change</Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </div>
        );
}