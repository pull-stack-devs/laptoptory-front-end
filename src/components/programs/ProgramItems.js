import React, { useContext, useEffect, useState } from 'react';
import clsx from 'clsx';
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
  Collapse,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  NativeSelect,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 'auto',
  },
  title: {
    textTransform: 'capitalize',
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
  formControl: {
    margin: theme.spacing(1),
    width: '45%',
  },
  cardInfo: {
    padding: ' 10px 10px 10px  25px',
  },
  centerBottom: {
    display: 'flex',
    justifyContent: 'center',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  boldLabel: {
    fontWeight: 'bold',
  },
  avatar: {
    backgroundColor: red[500],
  },
  programData: {
    textTransform: 'uppercase',
  },
  flexBox: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  inputWidth: {
    width: '45%',
  },
}));
function ProgramItems(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [state, setState] = useState(false);
  const [record, setRecorrd] = useState(props.items);
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const changeState = () => {
    setState(!state);
  };

  const update = (e) => {
    if (e.target.name === 'version') {
      setRecorrd({
        ...record,
        [e.target.name]: `v${e.target.value.toString()}`,
      });
    } else {
      setRecorrd({ ...record, [e.target.name]: e.target.value });
    }
  };
  const changeAndUpdate = async () => {
    setOpen(false);
    await dispatch(updatProgram(record));
  };

  const programStatusSetter = (status) => {
    return status ? 'Active' : 'Inactive';
  };
  return (
    <Card className={classes.root} key={props.items.id}>
      <Box color="text.primary" className={classes.flexBox}>
        <CardHeader
          className={classes.title}
          title={props.items.name.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ' ')}
        />
        <CardActions disableSpacing className={classes.centerBottom}>
          {/* onClick={changeState}  */}
          <Tooltip
            title="Edit a program requirements"
            onClick={handleClickOpen}
          >
            <IconButton aria-label="add to favorites">
              <EditIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Box>
      <CardContent className={classes.cardInfo}>
        {/* <Typography
            variant="h5"
            gutterBottom
            component="h2"
            className={classes.title}
          >
            {props.items.name.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ' ')}
          </Typography> */}
        <Typography variant="subtitle2" gutterBottom>
          <span className={classes.boldLabel}>Department: </span>
          <span className={classes.programData}>{props.items.department}</span>
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          <span className={classes.boldLabel}>Program Version: </span>
          <span>{props.items.version}</span>{' '}
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          <span className={classes.boldLabel}>Program Status: </span>
          {programStatusSetter(props.items.is_active)}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
        ></Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="subtitle2" gutterBottom>
            Program reqs
          </Typography>
        </CardContent>
      </Collapse>
      {/* <CardActions disableSpacing className={classes.centerBottom}>
          <Tooltip title="Edit a program requirements" onClick={changeState}>
            <IconButton aria-label="add to favorites">
              <EditIcon />
            </IconButton>
          </Tooltip>
        </CardActions> */}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Update Program Info</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* To subscribe to this website, please enter your email address here. We will send updates
                        occasionally. */}
          </DialogContentText>
          <TextField
            disabled
            className={classes.inputWidth}
            id="standard-full-width"
            label="Program Name"
            name="name"
            style={{ margin: 8 }}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue={props.items.name}
            onChange={update}
          />
          <TextField
            className={classes.inputWidth}
            id="standard-full-width"
            label="Program Department"
            name="department"
            style={{ margin: 8 }}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue={props.items.department}
            onChange={update}
          />

          <TextField
            disabled
            className={classes.inputWidth}
            id="standard-full-width"
            label="Program Version"
            style={{ margin: 8 }}
            name="version"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            type="number"
            min="1"
            defaultValue={parseInt(props.items.version.replace(/\D/g, ''))}
            onChange={update}
          />
          <FormControl className={classes.formControl}>
            <InputLabel shrink htmlFor="age-native-helper">
              Age
            </InputLabel>
            <NativeSelect
              value={state.age}
              inputProps={{
                name: 'is_active',
                id: 'age-native-helper',
              }}
              onChange={update}
            >
              {props.items.is_active ? (
                <>
                  <option selected value={true}>
                    Active
                  </option>{' '}
                  <option value={false}>Inactive</option>
                </>
              ) : (
                <>
                  <option selected value={false}>
                    Inactive
                  </option>{' '}
                  <option value={true}>Active</option>{' '}
                </>
              )}
            </NativeSelect>
          </FormControl>

          {/* <TextField
              name="department"
              variant="outlined"
              type="version"
              defaultValue={props.items.department}
              onChange={update}
              autoFocus
              margin="dense"
            /> */}
          {/* <TextField
              name="is_active"
              variant="outlined"
              defaultValue={() => programStatusSetter(props.items.is_active)}
              onChange={update}
            />
            <TextField
              name="version"
              variant="outlined"
              defaultValue={props.items.version}
              onChange={update}
            /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          {/* <Tooltip
              title="Edit a program requirements"
              onClick={changeAndUpdate}
            >
              <IconButton aria-label="add to favorites">
                <EditIcon />
              </IconButton>
            </Tooltip> */}
          <Button onClick={changeAndUpdate} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>

      {/* <Show condition={state}>
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
            defaultValue={() => programStatusSetter(props.items.is_active)}
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
          <Tooltip
            title="Edit a program requirements"
            onClick={changeAndUpdate}
          >
            <IconButton aria-label="add to favorites">
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete a program">
                        <IconButton aria-label="share">
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Assign a laptop">
                        <IconButton aria-label="share">
                            <AssignmentIndIcon />
                        </IconButton>
                    </Tooltip>
        </CardActions>
      </Show> */}
    </Card>
  );
}

export default ProgramItems;
