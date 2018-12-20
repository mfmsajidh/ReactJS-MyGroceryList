import React, {Component} from 'react'
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import {Button} from "@material-ui/core";
import {app} from './app'


export default class EditDialog extends Component {

    componentDidMount() {
        app.Edit(this.props.index);
    }

    render() {
        return (
            <form id="saveEdit"  method="POST" action="javascript:void(0)">
                <DialogContent>
                    <DialogContentText>Fill in the below required to commit your changes</DialogContentText>
                    <TextField
                        id="edit-item"
                        autoFocus
                        margin="dense"
                        label="Item"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="edit-quantity"
                        margin="dense"
                        label="Quantity"
                        fullWidth={true}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.handleClose} color="primary">Cancel</Button>
                    <Button type="submit" onClick={this.props.handleSubmit} color="primary">Change</Button>
                </DialogActions>
            </form>
        )
    }
}