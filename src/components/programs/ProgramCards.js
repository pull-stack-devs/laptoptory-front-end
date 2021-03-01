import React, { useContext, useEffect, useState, useRef } from 'react';
import ProgramItems from './ProgramItems';
import { connect, useDispatch } from 'react-redux';
import { getRemoteData, addProgram, getRequirmentsData } from '../../rtk/ProgramsSlicer';
import { Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
    addBtn: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    }
}));

function ProgramCard(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [version, setVersion] = useState('');
    const [is_active, setIs_active] = useState();

    const radioGroupRef = useRef(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen('');
    };
    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleDepartmen = (e) => {
        setDepartment(e.target.value)
    }
    const handleVersion = (e) => {
        setVersion(e.target.value)
    }

    const handleSelect = (e) => {
        setIs_active(e.target.value)
    }
    const handleAdd = (e) => {
        setOpen('');
        let object = {
            name: name,
            department: department,
            version: version,
            is_active: is_active,
        };
        dispatch(addProgram(object));
    }

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getRemoteData());

        };
        fetchData();
    }, [dispatch]);

    return (
        <>
            <Grid container spacing={3} justify="center" >
                <Grid item xs={10} lg={9}>
                    {props.myPrograms.map((item, index) => (
                        <ProgramItems items={item} key={index} />
                    ))}
                </Grid>
            </Grid>
            {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
               ADD Program
          <AddIcon />
        
     </Button> */}
            <Fab onClick={handleClickOpen} color="primary" aria-label="add" className={classes.addBtn}>
                <AddIcon />
            </Fab>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Program</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {/* To subscribe to this website, please enter your email address here. We will send updates
                        occasionally. */}
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Name"
                        type="name"
                        fullWidth
                        onChange={handleName}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Department"
                        type="department"
                        fullWidth
                        onChange={handleDepartmen}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Version"
                        type="version"
                        fullWidth
                        onChange={handleVersion}
                    />
                    <RadioGroup
                        ref={radioGroupRef}
                        aria-label="ringtone"
                        name="ringtone"
                        label="Is_Active"
                        onChange={handleSelect}
                    >
                        Is_Active
                            <FormControlLabel value="true" key="true" control={<Radio />} label="Yes" />
                        <FormControlLabel value="''" key="''" control={<Radio />} label="No" />

                    </RadioGroup>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                        </Button>
                    <Button onClick={handleAdd} color="primary">
                        Add
          </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

const mapStateToProps = state => ({
    myPrograms: state.programs.programs,
});

export default connect(mapStateToProps)(ProgramCard);