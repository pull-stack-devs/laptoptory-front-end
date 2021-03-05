import React, { useState, useContext } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { connect, useDispatch } from 'react-redux';
import ProgramsRequirments from './ProgramRequirements';
import { updatProgram } from '../../rtk/ProgramsSlicer';
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
import Show from "../Show";
import { AuthContext } from "../../context/SignInContext";


const useStyles = makeStyles((theme) => ({

  root: {
    maxWidth: 345,
    margin: 'auto',
    borderRadius:'20',
    transition:{
      easing:{
        easeIn: 'cubic-bezier(0, 0, 0.2, 1)',
      },
    duration:{
      shortest: 500,
    }
    },
    "&:hover": {
      transform: 'scale(1.05)',
    }
  },
  title: {
    textTransform: 'capitalize',
  color:'#0F3057',
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
    color :  '#9E5256',
    
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
  expandPanel: {
    padding: '6px 15px 16px',
  },
  removeIconPadding: {
    padding: '0px',
  },
  collapsePadding: {
    padding: '0px',
  },
  iconEdit:{
    color:'rgba(208, 211, 212 )',
    "&:hover": {
      backgroundColor: "#233e5e",
      color:'#fff'
    }
  },
 
}));

function ProgramItems(props) {
  const context = useContext(AuthContext)
  const dispatch = useDispatch();
  const classes = useStyles();
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
          title={props.items.name.replace(/[.,#!$%&;:{}=\-_`~()]/g, ' ')}
        />
        <CardActions disableSpacing className={classes.centerBottom}>
          <Tooltip
          className={classes.iconEdit}
            title="Edit a program requirements"
            onClick={handleClickOpen}
          >
            <Show condition={context.isValidAction('update')}>
              <IconButton
                className={classes.hoverEdit}
                aria-label="add to favorites"
              >
                <EditIcon fontSize="small" />
              </IconButton>
            </Show>
          </Tooltip>
        </CardActions>
      </Box>
      <CardContent className={classes.cardInfo}>
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
      <CardActions className={classes.expandPanel} disableSpacing>
        <Typography variant="button" component="h6">
          Program Requirements
        </Typography>{' '}
        <IconButton
          className={`${clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })} ${classes.removeIconPadding}`}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse
        className={classes.collapsePadding}
        in={expanded}
        timeout="auto"
        unmountOnExit
      >
        <ProgramsRequirments item={props.items} key={props.items.id} />
      </Collapse>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Update Program Info</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
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
              Program Status
            </InputLabel>
            <NativeSelect
              value={false}
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={changeAndUpdate} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
const mapStateToProps = (state) => ({
  activeReq: state.programs.detailedRequirments,
});
export default connect(mapStateToProps)(ProgramItems);