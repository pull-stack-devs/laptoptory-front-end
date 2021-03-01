import { updateReq } from "../../rtk/ProgramsSlicer"
import React, { useContext, useEffect, useState, useRef } from 'react';
import { connect, useDispatch } from 'react-redux';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    IconButton,
    Typography,
    Tooltip,


} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
function UpdateRequirment(props) {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [record, setRecorrd] = useState(props.details);
    const update = (e) => {
        console.log("in updaaaaaaaaaaaaate", e.target.value)
        setRecorrd({ ...record, [e.target.name]: e.target.value })
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen('');
    };
    const handleEdit = (e) => {
        handleClose()
        console.log(record);
        dispatch(updateReq(record));
    }
    return (
        <CardContent>

            <Typography paragraph>Requirements:</Typography>
            <Typography paragraph>
                program name  {props.details.program_name}
            </Typography>
            <Typography paragraph>
                program_version   {props.details.program_version}

            </Typography>
            <Typography paragraph>
              CPU  {props.details.cpu}
            </Typography>
            <Typography paragraph>
            RAM  {props.details.ram.toString()}
            </Typography>
            <Typography paragraph>
            Display Resolution  {props.details.display_resolution.toString()}
            </Typography>
            <Typography paragraph>
            Storage Space  {props.details.storage_space.toString()}
            </Typography>
            <Typography paragraph>
            Storage Type  {props.details.storage_type}
            </Typography>


            <Typography paragraph><Button onClick={handleClickOpen} color="primary">
                Edit
        </Button></Typography>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogContent>
                    <DialogTitle id="form-dialog-title">{props.details.program_name}</DialogTitle>

                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We will send updates
                            occasionally.
                 </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Cpu"
                            type="text"
                            fullWidth
                            name="cpu"
                            defaultValue={props.details.cpu}
                            onChange={update}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Display Resolution"
                            type="text"
                            fullWidth
                            name="display_resolution"
                            defaultValue={props.details.display_resolution}
                            onChange={update}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Ram"
                            type="number"
                            min="1"
                            fullWidth
                            name="ram"
                            defaultValue={props.details.ram}
                            onChange={update}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Storage Space"
                            type="number"
                            min="1"
                            fullWidth
                            name="storage_space"
                            defaultValue={props.details.storage_space}
                            onChange={update}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Storage Type"
                            type="text"
                            min="1"
                            fullWidth
                            name="storage_type"
                            defaultValue={props.details.storage_type}
                            onChange={update}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Close
                </Button>
                        <Button onClick={handleEdit} color="primary">
                            Edit
                </Button>
                    </DialogActions>

                </DialogContent>
            </Dialog>
        </CardContent>
    )
}

const mapStateToProps = state => ({

    activeReq: state.programs.programsRequirments,
    // activeOne: state.categories,

});
// const mapDispatchToProps = (dispatch, getState,string) => ({
//     setReq: (string)=>dispatch(setdetailedRequirments(string)),
//     // activeProduct: (string)=>dispatch(activeProduct(string))
// })
export default connect(mapStateToProps)(UpdateRequirment);