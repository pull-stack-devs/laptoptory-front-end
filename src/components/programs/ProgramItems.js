import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { connect, useDispatch } from 'react-redux';
import { updatProgram } from '../../rtk/ProgramsSlicer';

import Show from '../Show';
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    IconButton,
    Typography,
    Tooltip,
    TextField,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', 
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    centerBottom: {
        display: 'flex',
        justifyContent: 'center',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));
 function ProgramItems(props) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [state, setState] = useState(false);
    const [record, setRecorrd] = useState(props.items);


    const changeState = () => {
        setState(!state);
    }
     
     const update= (e)=>{
         setRecorrd({...record,[e.target.name]:e.target.value})
     }
     const changeAndUpdate=async()=>{
        setState(!state);
        await dispatch(updatProgram(record));
     }
    return (
        <Card className={classes.root} key={props.items.id}>
            <Show condition={!state}>
                <CardHeader
                    title={props.items.name}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.items.department}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.items.version}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.items.is_active.toString()}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.centerBottom}>
                    <Tooltip title="Edit a program requirements" onClick={changeState} >
                        <IconButton aria-label="add to favorites">
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Show>

            <Show condition={state}>
                <TextField
                    name="name"
                    variant="outlined"
                    defaultValue={props.items.name}
                    onChange={update}

                />
                <CardContent>
                        <TextField
                            name="department"
                            variant="outlined"
                            type="version"
                            defaultValue={props.items.department}
                            onChange={update}
                            autoFocus
                           margin="dense"

                        />
                         <TextField
                            name="is_active"
                            variant="outlined"
                            defaultValue={props.items.is_active.toString()}
                            onChange={update}

                        />
                         <TextField
                            name="version"
                            variant="outlined"
                            defaultValue={props.items.version}
                            onChange={update}

                        />
                </CardContent>

                <CardActions disableSpacing className={classes.centerBottom}>
                    <Tooltip title="Edit a program requirements" onClick={changeAndUpdate} >
                        <IconButton aria-label="add to favorites">
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                    {/* <Tooltip title="Delete a program">
                        <IconButton aria-label="share">
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Assign a laptop">
                        <IconButton aria-label="share">
                            <AssignmentIndIcon />
                        </IconButton>
                    </Tooltip> */}
                </CardActions>
            </Show>

        </Card>

    )
}

export default ProgramItems;