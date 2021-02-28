import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Tooltip,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  MenuItem,
  Avatar
} from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { updateUsers, deleteUsers, acceptUsers } from "../../rtk/user.store";
import Show from '../Show';
import { red } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { useDispatch, connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  middle: {
      display: 'flex',
      justifyContent: 'center'
  }
}));

export function UserCard(props) {
  const classes = useStyles();
  const [state, setState] = useState(false);
  const [record, setRecord] = useState(props.items);
  console.log("props users card>>>>>", props)

  const dispatch = useDispatch();
  const changeType = () => {
    setState(true);
    setRecord(props.items);
    console.log('state>>>>>>', state);
  };

  const updateChange = () => {
    setState(false);
    dispatch(updateUsers(record))
  };
  
  const updateAccepted = () => {
    console.log("record>>>>", record)
    props.acceptUsers(record)
  };

  const deleteItem = () =>{
      dispatch(deleteUsers(record))
  }

  const handleChange = (e) =>{
    setRecord({ ...record, [e.target.name]: e.target.value });
  }

  return (
      <>
        <Show condition={!state}>
            <Card className={classes.root} key={props.key}>
            <AvatarGroup max={4} className={classes.middle}>
                <Avatar>{props.items.name[0].toUpperCase()+props.items.name[1].toUpperCase()}</Avatar>
            </AvatarGroup>
            <CardHeader
                // action={
                //   <IconButton aria-label="settings">
                //     <MoreVertIcon />
                //   </IconButton>
                // }
                title={props.items.username}
                // subheader="September 14, 2016"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                Role Name: {props.items.role_name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Password: {props.items.password}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Email: {props.items.email}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                User's Name: {props.items.name}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.centerBottom}>
                <Tooltip title="Edit a laptop properties">
                    <IconButton aria-label="add to favorites" onClick={changeType}>
                        <EditIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete a laptop">
                <IconButton aria-label="share" onClick={deleteItem}>
                    <DeleteIcon />
                </IconButton>
                </Tooltip>
                {props.accepted ===1 ? 
                  <Tooltip title="Assigne a laptop">
                  <IconButton aria-label="share" onClick={() => updateAccepted()}>
                      <AssignmentIndIcon />
                  </IconButton>
                  </Tooltip>
                : ''}
            </CardActions>
            </Card>
        </Show>

        <Show condition={state}>
            <Card className={classes.root} key={props.key}>
                <AvatarGroup max={4}>
                    <Avatar>{props.items.name[0].toUpperCase()+props.items.name[1].toUpperCase()}</Avatar>
                </AvatarGroup>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="component-outlined">Username</InputLabel>
                    <OutlinedInput id="component-outlined" value={props.items.username} onChange={handleChange} label="Username" name="username"/>
                </FormControl>
                <CardContent>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Role Name</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="role_name"
                            onChange={handleChange}
                        >
                            <MenuItem value={'admin'}>admin</MenuItem>
                            <MenuItem value={'editor'}>editor</MenuItem>
                            <MenuItem value={'user'}>user</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="component-outlined">Email</InputLabel>
                        <OutlinedInput id="component-outlined" value={props.items.email} onChange={handleChange} label="Email" name="email"/>
                    </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="component-outlined">User's Name</InputLabel>
                        <OutlinedInput id="component-outlined" value={props.items.name} onChange={handleChange} label="Name" name="name"/>
                    </FormControl>
                </CardContent>
                <CardActions disableSpacing className={classes.centerBottom}>
                    <Tooltip title="Edit a laptop properties">
                    <IconButton aria-label="add to favorites" onClick={updateChange}>
                        <EditIcon />
                    </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>
        </Show>
      </>
  );
}

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = {
  updateUsers,
  deleteUsers,
  acceptUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
