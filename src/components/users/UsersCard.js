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
  TextField,
  Select,
  MenuItem,
  Avatar,
  Box,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  Button,
  NativeSelect,
} from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { updateUsers, deleteUsers, acceptUsers } from '../../rtk/user.store';
import Show from '../Show';
import { red } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { useDispatch, connect } from 'react-redux';
import DoneIcon from '@material-ui/icons/Done';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import 'aos/dist/aos.css';
import AOS from 'aos';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  smallSelect: {
    padding: '0px 2px 3px 3px!important',
    fontSize: '0.875rem',
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
    // backgroundColor: red[500],
    padding: '16px',
  },
  formControl: {
    margin: theme.spacing(1),
    width: '45%',
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
    justifyContent: 'center',
  },
  flexBox: {
    display: 'flex',
  },
  cardInfo: {
    padding: ' 10px 10px 10px  25px',
    color :'#0F3057'
  },
  boldLabel: {
    fontWeight: 'bold',
    display: 'inline-block',
    paddingTop: '12px',
  },
  capitalizedText: {
    textTransform: 'capitalize',
    color :'#9E5256',
  },
  labelPadding: {
    display: 'inline-block',
    paddingTop: '12px',
  },
  inputWidth: {
    width: '45%',
  },
}));

export function UserCard(props) {
  const classes = useStyles();
  const [state, setState] = useState(false);
  const [record, setRecord] = useState(props.items);
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const [updateOpen, setUpdateOpen] = React.useState(false);
  const [approvalRole, setApprovalRole] = React.useState(props.items.role_name);

  useEffect(()=>{
    AOS.init()
  },[])
  console.log('props users card>>>>>', props);
  const handleApprovalRoleChange = (event) => {
    setApprovalRole(event.target.value);
  };
  const handleClickDeleteOpen = () => {
    setDeleteOpen(true);
  };
  const handleCloseDeleteOpen = () => {
    setDeleteOpen(false);
  };
  const handleClickUpdateOpen = () => {
    setUpdateOpen(true);
  };
  const handleCloseUpdateOpen = () => {
    setUpdateOpen(false);
  };
  const dispatch = useDispatch();

  // const changeType = () => {
  //   setState(true);
  //   setRecord(props.items);
  //   console.log('state>>>>>>', state);
  // };

  const updateChange = () => {
    setUpdateOpen(false);
    dispatch(updateUsers(record));
  };

  const updateAccepted = () => {
    console.log('record>>>>', record);
    props.acceptUsers({ id: props.items.id, role_name: approvalRole });
  };

  const deleteItem = () => {
    setDeleteOpen(false);
    dispatch(deleteUsers(record));
  };

  const handleChange = (e) => {
    setRecord({ ...record, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Card className={classes.root} key={props.key}  data-aos="fade-up" >
        <Box color="text.primary" className={classes.flexBox}>
          <AvatarGroup
            max={4}
            className={` ${classes.avatar} ${classes.middle}`}
          >
            <Avatar >
              {props.items.name[0].toUpperCase() +
                props.items.name[1].toUpperCase()}
            </Avatar>
          </AvatarGroup>
          <CardHeader
            className={classes.capitalizedText}
            title={props.items.name}
          />
        </Box>
        <CardContent className={classes.cardInfo}>
          <Typography variant="subtitle2" gutterBottom >
            <span className={classes.boldLabel}>Username:</span>{' '}
            <span>{props.items.username}</span>
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            <span className={classes.boldLabel}>Email:</span>
            <span> {props.items.email}</span>
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {/* <span className={classes.boldLabel}>Role:</span>{' '} */}
            {props.accepted !== 1 ? (
              <>
                <span className={classes.boldLabel}>Role:</span>
                <span className={classes.capitalizedText}>
                  {` ${props.items.role_name}`}
                </span>
              </>
            ) : (
              <>
                <span
                  className={`${classes.boldLabel} ${classes.labelPadding}`}
                >
                  Role:
                </span>{' '}
                <FormControl className={classes.formControl}>
                  <Select
                    className={classes.smallSelect}
                    value={approvalRole}
                    onChange={handleApprovalRoleChange}
                  >
                    <MenuItem value={'admin'}>Admin </MenuItem>
                    <MenuItem value={'editor'}>Editor</MenuItem>
                    <MenuItem value={'user'}>User</MenuItem>
                  </Select>
                </FormControl>
              </>
            )}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.centerBottom}>
          {props.accepted !== 1 ? (
            <Tooltip title="Edit User's information">
              <IconButton
                aria-label="add to favorites"
                onClick={handleClickUpdateOpen}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
          ) : null}

          <Tooltip title="Disapprove this user">
            <IconButton aria-label="share" onClick={handleClickDeleteOpen}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          {props.accepted === 1 ? (
            <Tooltip title="Approve this user">
              <IconButton aria-label="share" onClick={() => updateAccepted()}>
                <CheckCircleIcon />
              </IconButton>
            </Tooltip>
          ) : (
            ''
          )}
        </CardActions>
      </Card>
      <Dialog
        // fullScreen={fullScreen}
        open={deleteOpen}
        onClose={handleCloseDeleteOpen}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {'Delete this user'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to remove <span>{props.username}</span>?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseDeleteOpen} color="primary">
            Disagree
          </Button>
          <Button onClick={deleteItem} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={updateOpen}
        onClose={handleCloseUpdateOpen}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Update User Info</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* To subscribe to this website, please enter your email address here. We will send updates
                        occasionally. */}
          </DialogContentText>
          <TextField
            disabled
            className={classes.inputWidth}
            id="standard-full-width"
            label="Name"
            name="name"
            style={{ margin: 8 }}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue={props.items.name}
            onChange={handleChange}
          />
          <TextField
            disabled
            className={classes.inputWidth}
            id="standard-full-width"
            label="Username"
            name="name"
            style={{ margin: 8 }}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue={props.items.username}
            onChange={handleChange}
          />
          <TextField
            disabled
            className={classes.inputWidth}
            id="standard-full-width"
            label="Email"
            type="email"
            name="department"
            style={{ margin: 8 }}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue={props.items.email}
            onChange={handleChange}
          />
          <FormControl className={classes.formControl}>
            <InputLabel shrink htmlFor="role-native-helper">
              Role
            </InputLabel>
            <NativeSelect
              value={state.age}
              inputProps={{
                name: 'role_name',
                id: 'role-native-helper',
              }}
              onChange={handleChange}
              defaultValue={props.items.role_name}
            >
              <option value={'admin'}>Admin</option>
              <option value={'editor'}>Editor</option>
              <option value={'user'}>User</option>
            </NativeSelect>
          </FormControl>
          {/* <FormControl className={classes.formControl}>
            <InputLabel shrink htmlFor="approval-native-helper">
              Approval
            </InputLabel>
            <NativeSelect
              value={state.age}
              inputProps={{
                name: 'is_accepted',
                id: 'age-native-helper',
              }}
              onChange={handleChange}
              defaultValue={props.items.is_accepted}
            >
              <option value={true}>Approved</option>
              <option value={false}>Non Approved</option>
            </NativeSelect>
          </FormControl> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseUpdateOpen} color="primary">
            Close
          </Button>
          <Button onClick={updateChange} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>

      {/* <Show condition={state}>
        <Card className={classes.root} key={props.key}>
          <AvatarGroup max={4}>
            <Avatar>
              {props.items.name[0].toUpperCase() +
                props.items.name[1].toUpperCase()}
            </Avatar>
          </AvatarGroup>
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Username</InputLabel>
            <OutlinedInput
              id="component-outlined"
              value={props.items.username}
              onChange={handleChange}
              label="Username"
              name="username"
            />
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
              <OutlinedInput
                id="component-outlined"
                value={props.items.email}
                onChange={handleChange}
                label="Email"
                name="email"
              />
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel htmlFor="component-outlined">User's Name</InputLabel>
              <OutlinedInput
                id="component-outlined"
                value={props.items.name}
                onChange={handleChange}
                label="Name"
                name="name"
              />
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
      </Show> */}
    </>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  updateUsers,
  deleteUsers,
  acceptUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
