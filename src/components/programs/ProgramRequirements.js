import React, { useContext, useEffect, useState, useRef } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  addReq,
  getRequirmentsData,
  updateReq,
} from '../../rtk/ProgramsSlicer';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {
  Card,
  Link,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Tooltip,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import UpdateRequirements from './UpdateRequirements';
import Show from '../Show';

const useStyles = makeStyles((theme) => ({
  centerBottom: {
    display: 'flex',
    justifyContent: 'center',
  },
  centerdText: {
    textAlign: 'center',
    fontSize: '15px',
    marginBottom: 0,
  },
  marginCenter: {
    margin: 'auto',
    display: 'block',
  },
  cardContentPadding: {
    padding: '0px 16px',
  },
}));

function ProgramRequirements(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({});
  const [cpu, setCpu] = useState();
  const [resolution, setResolution] = useState();
  const [ram, seetRam] = useState();
  const [space, setSpace] = useState();
  const [type, setType] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen('');
  };
  const handleCpu = (e) => {
    setCpu(e.target.value);
  };
  const handleResolution = (e) => {
    setResolution(e.target.value);
  };
  const handleRam = (e) => {
    seetRam(e.target.value);
  };
  const handleSpace = (e) => {
    setSpace(e.target.value);
  };
  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleAddReq = (e) => {
    if (false) {
      setOpen('');
      let object = {
        program_name: props.item.name,
        program_version: props.item.version,
        cpu: cpu,
        ram: ram,
        display_resolution: resolution,
        storage_space: space,
        storage_type: type,
      };
      dispatch(addReq(object));
    } else {
      console.log('not full farm');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getRequirmentsData());
    };
    fetchData();

    props.activeReq.forEach((element) => {
      if (
        element.program_name == props.item.name &&
        element.program_version == props.item.version
      ) {
        setFlag(true);
        return setDetails(element);
      }
    });
  }, []);
  return (
    <>
      <Show condition={flag != false}>
        <UpdateRequirements details={details} />
      </Show>

      <Show condition={flag == false}>
        <CardContent className={classes.cardContentPadding}>
          {/* <Typography paragraph className={classes.centerdText}>
            This program has no specified requirments.
          </Typography> */}
          <Button
            onClick={handleClickOpen}
            color="primary"
            className={classes.marginCenter}
          >
            Add Requirments for this program
          </Button>{' '}
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">{props.item.name}</DialogTitle>
            <DialogContent>
              <DialogContentText></DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                label="Cpu"
                type="text"
                fullWidth
                onChange={handleCpu}
              />
              <TextField
                autoFocus
                margin="dense"
                label="Display Resolution"
                type="text"
                fullWidth
                onChange={handleResolution}
              />
              <TextField
                autoFocus
                margin="dense"
                label="Ram"
                type="number"
                min="1"
                fullWidth
                onChange={handleRam}
              />
              <TextField
                autoFocus
                margin="dense"
                label="Storage Space"
                type="number"
                min="1"
                fullWidth
                onChange={handleSpace}
              />
              <TextField
                autoFocus
                margin="dense"
                label="Storage Type"
                type="text"
                min="1"
                fullWidth
                onChange={handleType}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
              <Button onClick={handleAddReq} color="primary">
                Add
              </Button>
            </DialogActions>
          </Dialog>
        </CardContent>
      </Show>
    </>
  );
}

const mapStateToProps = (state) => ({
  activeReq: state.programs.programsRequirments,
});

export default connect(mapStateToProps)(ProgramRequirements);
