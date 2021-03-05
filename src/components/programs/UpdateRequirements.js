import { updateReq } from "../../rtk/ProgramsSlicer"
import React, { useState, useContext } from 'react';
import { connect, useDispatch } from 'react-redux';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {
    CardContent,
    Typography,
    Chip
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Show from "../Show";
import { AuthContext } from "../../context/SignInContext";

const useStyles = makeStyles((theme) => ({
  chipsDiv: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    borderRadius:'10',
  },
  cardContentPadding: {
    padding: '0px 16px',
  },
  button :{
      display:'block',
      width:'100px',
      margin : "10px auto 0",
      color :'#000',
      backgroundColor:'#fff',
      border :'1px solid #9E5256',
borderRadius:'20px',
boxShadow:'none',
  }
 
}));

function UpdateRequirment(props) {
    const context = useContext(AuthContext)
    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [record, setRecorrd] = useState(props.details);
    const update = (e) => {
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
        dispatch(updateReq(record));
    }
    return (
        <CardContent className={classes.cardContentPadding}>
            <div className={classes.chipsDiv}>

       <Chip  size="small" label={`CPU: ${props.details.cpu}`} />
       <Chip  size="small" label={`Storage Space: ${props.details.storage_space}`} />
       <Chip  size="small" label={`Storage Type: ${props.details.storage_type}`} />
       <Chip size="small" label={`RAM: ${props.details.ram}`} />
       <Chip  size="small" label={`Display: ${props.details.display_resolution}`} />

       </div>

            <Typography paragraph>
                <Show condition={context.isValidAction('update')}>
                    <Button onClick={handleClickOpen} className={classes.button} variant="contained" >
                    Edit
                    </Button>
                </Show>
            </Typography>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogContent>
                    <DialogTitle id="form-dialog-title">{props.details.program_name}</DialogTitle>

                    <DialogContent>
                        <DialogContentText>
                            Update the program requirement:
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

});

export default connect(mapStateToProps)(UpdateRequirment);