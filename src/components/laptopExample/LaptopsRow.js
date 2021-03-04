import React, {useState, useEffect} from "react";
import GridTable from '@nadavshaar/react-grid-table';
import {
    Fab,
    Dialog,
    DialogActions,
    DialogContentText,
    DialogContent,
    DialogTitle,
    Slide,
    Button,
    TextField,
    InputLabel,
    MenuItem,
    Select,
    FormControl,
    Grid
  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AssignmentReturnIcon from '@material-ui/icons/AssignmentReturn';
import { grey } from '@material-ui/core/colors';
import AddIcon from '@material-ui/icons/Add';
import { fetchLaptops, addLaptops, assignLaptops, returnLaptops, updateLaptops } from "../../rtk/laptop.store";
import {connect, useDispatch} from 'react-redux';

const styles = {
    select: { margin: "0 20px" },
    buttonsCellContainer: {
      padding: "0 20px",
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center"
    },
    editButton: {
      background: "#f3f3f3",
      outline: "none",
      cursor: "pointer",
      padding: 4,
      display: "inline-flex",
      border: "none",
      borderRadius: "50%",
      boxShadow: "1px 1px 2px 0px rgb(0 0 0 / .3)"
    },
    buttonsCellEditorContainer: {
      height: "100%",
      width: "100%",
      display: "inline-flex",
      padding: "0 20px",
      justifyContent: "flex-end",
      alignItems: "center"
    },
    cancelButton: {
      background: "#f3f3f3",
      outline: "none",
      cursor: "pointer",
      marginRight: 10,
      padding: 2,
      display: "inline-flex",
      border: "none",
      borderRadius: "50%",
      boxShadow: "1px 1px 2px 0px rgb(0 0 0 / .3)"
    },
    saveButton: {
      background: "#f3f3f3",
      outline: "none",
      cursor: "pointer",
      padding: 2,
      display: "inline-flex",
      border: "none",
      borderRadius: "50%",
      boxShadow: "1px 1px 2px 0px rgb(0 0 0 / .3)"
    }
  };

const EDIT_SVG = (
  <svg
    height="16"
    viewBox="0 0 20 20"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#fff" stroke="#1856bf" transform="translate(2 2)">
      <path
        d="m8.24920737-.79402796c1.17157287 0 2.12132033.94974747 2.12132033 2.12132034v13.43502882l-2.12132033 3.5355339-2.08147546-3.495689-.03442539-13.47488064c-.00298547-1.16857977.94191541-2.11832105 2.11049518-2.12130651.00180188-.00000461.00360378-.00000691.00540567-.00000691z"
        transform="matrix(.70710678 .70710678 -.70710678 .70710678 8.605553 -3.271644)"
      />
      <path d="m13.5 4.5 1 1" />
    </g>
  </svg>
);
const CANCEL_SVG = (
  <svg
    height="20"
    viewBox="0 0 20 20"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" stroke="#dc1e1e" transform="translate(5 5)">
      <path d="m.5 10.5 10-10" />
      <path d="m10.5 10.5-10-10z" />
    </g>
  </svg>
);
const SAVE_SVG = (
  <svg
    height="20"
    viewBox="0 0 20 20"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m.5 5.5 3 3 8.028-8"
      fill="none"
      stroke="#4caf50"
      transform="translate(5 6)"
    />
  </svg>
);

// custom cell component


const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    addBtn: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      backgroundColor: '#0F3057',
    },
    root: {
      width: '100%',
      overflowX: 'auto',
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
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    typography: {
      padding: theme.spacing(2),
    },
    item: {
      position: 'relative',
      right: '0%',
      marginBottom: 10
    },
    grid_table: {
      marginTop: 40,
    },
    dialogTextField: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'space-between'
    }
  }));

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  

export const MyAwesomeTable = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [record, setRecord] = useState({});
    // console.log("props>>>>>>>>>>", props)
    const [laptop, setLaptop] = useState({
        'serial_no':'',
        'model':'',
        'brand':'',
        'cpu':'',
        'ram':'',
        'storage':'',
        'display_resolution':'',
        'storage_type':'',
        'power_cable':false,
        'availability':false,
    })

    const [openAssign, setOpenAssign] = React.useState(false);

    const handleClickOpenAssign = () => {
      setOpenAssign(true);
    };

    const handleCloseAssign = () => {
      setOpenAssign(false);
    };

    const [openReturn, setOpenReturn] = React.useState(false);

    const handleClickOpenReturn = () => {
      setOpenReturn(true);
    };

    const handleCloseReturn = () => {
      setOpenReturn(false);
    };


    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const handleChange = (e) =>{
        setLaptop({...laptop, [e.target.name]: e.target.value})
      };

      const addItem = () =>{
        setOpen(false)
        dispatch(addLaptops(laptop))
      };

      const updateAssigning = (e) =>{
        setRecord({...record, [e.target.name]: e.target.value})
      }

      const dispatch = useDispatch();

      const assignLaptopToStudent = () =>{
        console.log("record", record)
        dispatch(assignLaptops({
          studentId: record.student_id,
          laptopSerial: record.serial_number
        }))
        setOpenAssign(false)
      }

      const returnLaptopToStudent = ()=>{
        dispatch(returnLaptops({
          studentId: record.student_id,
          laptopSerial: record.serial_number,
          id: record.laptop_student_id
        }))
        setOpenReturn(true);
      }

      const updateLaptopRow = (row) =>{
        dispatch(updateLaptops(row));
      }

    console.log("props>>>>>>>>>", props)
    
    const columns = [
        {
          id: "checkbox",
          visible: true,
          pinned: true,
          width: "54px"
        },
        {
          id: "1", 
          field: 'serial_no', 
          label: 'Serial Number',
          disabled: false
        },
        {
            id: "2", 
            field: 'brand', 
            label: 'Brand',
            editorCellRenderer: ({
              tableManager,
              value,
              data,
              column,
              colIndex,
              rowIndex,
              onChange
            }) => (
                <select
                  style={styles.select}
                  value={value}
                  onChange={(e) =>
                    onChange({ ...data, [column.field]: e.target.value })
                  }
                >
                  <option value="Lenovo">Lenovo</option>
                  <option value="Asus">Asus</option>
                  <option value="Acer">Acer</option>
                  <option value="HP">HP</option>
                  <option value="Dell">Dell</option>
                </select>
            )
        }, 
        {
            id: "3", 
            field: 'cpu', 
            label: 'CPU',
            editorCellRenderer: ({
              tableManager,
              value,
              data,
              column,
              colIndex,
              rowIndex,
              onChange
            }) => (
              <select
                style={styles.select}
                value={value}
                onChange={(e) =>
                  onChange({ ...data, [column.field]: e.target.value })
                }
              >
                <option value="i3">i3</option>
                <option value="i5">i5</option>
                <option value="i7">i7</option>
                <option value="i9">i9</option>
              </select>
            )
        },
        {
            id: "4", 
            field: 'ram', 
            label: 'RAM',
            editorCellRenderer: ({
              tableManager,
              value,
              data,
              column,
              colIndex,
              rowIndex,
              onChange
            }) => (
              <select
                style={styles.select}
                value={value}
                onChange={(e) =>
                  onChange({ ...data, [column.field]: e.target.value })
                }
              >
                <option value="4">4</option>
                <option value="8">8</option>
                <option value="12">12</option>
                <option value="16">16</option>
                <option value="24">24</option>
                <option value="32">32</option>
              </select>
            )
        },
        {
            id: "5", 
            field: 'storage', 
            label: 'Storage',
            editorCellRenderer: ({
              tableManager,
              value,
              data,
              column,
              colIndex,
              rowIndex,
              onChange
            }) => (
              <select
                style={styles.select}
                value={value}
                onChange={(e) =>
                  onChange({ ...data, [column.field]: e.target.value })
                }
              >
                <option value="128GB">128GB</option>
                <option value="256GB">256GB</option>
                <option value="516GB">516GB</option>
                <option value="1TB">1TB</option>
                <option value="2TB">2TB</option>
              </select>
            )
        },
        {
            id: "6", 
            field: 'storage_type', 
            label: 'Storage Type',
            editorCellRenderer: ({
              tableManager,
              value,
              data,
              column,
              colIndex,
              rowIndex,
              onChange
            }) => (
              <select
                style={styles.select}
                value={value}
                onChange={(e) =>
                  onChange({ ...data, [column.field]: e.target.value })
                }
              >
              <option value="HDD">HDD</option>
              <option value="SSD">SSD</option>
              </select>
            )
        },
        {
            id: "7", 
            field: 'display_resolution', 
            label: 'Display Resolution',
            editorCellRenderer: ({
              tableManager,
              value,
              data,
              column,
              colIndex,
              rowIndex,
              onChange
            }) => (
              <select
                style={styles.select}
                value={value}
                onChange={(e) =>
                  onChange({ ...data, [column.field]: e.target.value })
                }
              >
                <option value="1280x1080">1280x1080</option>
                <option value="1366x768">1366x768</option>
                <option value="1920x1080">1920x1080</option>
                <option value="2160x1440">2160x1440</option>
                <option value="3840x2160">3840x2160</option>
              </select>
            )
        },
        {
          id: "8", 
          field: 'availability', 
          label: 'Available in Inventory',
          editorCellRenderer: ({
            tableManager,
            value,
            data,
            column,
            colIndex,
            rowIndex,
            onChange
          }) => (
            <select
              style={styles.select}
              value={value}
              onChange={(e) =>
                onChange({ ...data, [column.field]: e.target.value })
              }
            >
              <option value={true}>Available</option>
              <option value={false}>Not Available</option>
            </select>
          )
        },
        {
          id: "9", 
          field: 'availability_student', 
          label: 'Available with student',
          getValue: ({value, column}) => value ? 'Available' : 'Not Available',
          disabled: false
        },
        {
          id: "10", 
          field: 'std_id', 
          label: 'Student ID',
          getValue: ({value, column}) => value ? `Assigned to ${value}` : 'Not Assigned',
          disabled: false,
          
        },
        {
          id: "11", 
          field: 'std_lapt_id', 
          label: 'Student Laptop ID',
          getValue: ({value, column}) => value ? `${value}` : 'Empty',
          disabled: false,
        },
        {
          id: "buttons",
          width: "max-content",
          pinned: true,
          sortable: false,
          resizable: false,
          cellRenderer: ({
            tableManager,
            value,
            data,
            column,
            colIndex,
            rowIndex
          }) => (
            <div style={styles.buttonsCellContainer}>
              <button
                title="Edit"
                style={styles.editButton}
                onClick={(e) => {
                  e.stopPropagation();
                  tableManager.rowEditApi.setEditRowId(data.id);
                }}
              >
                {EDIT_SVG}
              </button>
            </div>
          ),
          editorCellRenderer: ({
            tableManager,
            value,
            data,
            column,
            colIndex,
            rowIndex,
            onChange
          }) => (
            <div style={styles.buttonsCellEditorContainer}>
              <button
                title="Cancel"
                style={styles.cancelButton}
                onClick={(e) => {
                  e.stopPropagation();
                  tableManager.rowEditApi.setEditRowId(null);
                }}
              >
                {CANCEL_SVG}
              </button>
              <button
                title="Save"
                style={styles.saveButton}
                onClick={(e) => {
                  e.stopPropagation();
                  let rowsClone = [...tableManager.rowsApi.rows];
                  let updatedRowIndex = rowsClone.findIndex(
                    (r) => r.id === data.id
                  );
                  rowsClone[updatedRowIndex] = data;
                  updateLaptopRow({
                    'id': data.id,
                    'serial_no':data.serial_no,
                    'model':data.modal,
                    'brand':data.brand,
                    'cpu':data.cpu,
                    'ram':data.ram,
                    'storage':data.storage,
                    'display_resolution':data.display_resolution,
                    'storage_type':data.storage_type,
                    'power_cable':false,
                    'availability':data.availability,
                })
                  tableManager.rowEditApi.setEditRowId(null);
                }}
              >
                {SAVE_SVG}
              </button>
            </div>
          )
        }
    ];

    return (
        <>
        <form className={classes.root} noValidate autoComplete="off">
        <Grid item container xs={6} className={classes.item}>
          <Grid item
          className="animate__animated animate__fadeInUp" style={{marginRight: 10}}>
            <Fab variant="extended" color='primary' onClick={handleClickOpenAssign}>
              <AssignmentIndIcon className={classes.extendedIcon} />
              Assign
            </Fab>
          </Grid>
          <Grid item
          className="animate__animated animate__fadeInUp" >
            <Fab variant="extended" color='secondary' onClick={handleClickOpenReturn}>
              <AssignmentReturnIcon className={classes.extendedIcon} />
              Return
            </Fab>
          </Grid>
        </Grid>

        <Dialog
        open={openAssign}
        onClose={handleCloseAssign}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Assign a laptop to a student:"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className={classes.dialogTextField}>
            <TextField id="filled-basic" label="Serial Number" variant="filled" name="serial_number" onChange={updateAssigning}/>
            < TextField id="filled-basic" label="Student ID" variant="filled" name="student_id" type="number" min="1" onChange={updateAssigning}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAssign} color="primary">
          Cancel
          </Button>
          <Button onClick={assignLaptopToStudent} color="primary" autoFocus>
            Assign
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openReturn}
        onClose={handleCloseReturn}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Return a student laptop to the inventory:"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className={classes.dialogTextField}>
            <TextField id="filled-basic" label="Serial Number" variant="filled" name="serial_number" onChange={updateAssigning}/>
            < TextField id="filled-basic" label="Student ID" variant="filled" name="student_id" type="number" min="1" onChange={updateAssigning}/>
            <TextField id="filled-basic" label="Student Laptop ID" variant="filled" type="number" min="1" name="laptop_student_id" onChange={updateAssigning}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseReturn} color="primary">
            Cancel
          </Button>
          <Button onClick={returnLaptopToStudent} color="primary" autoFocus>
            Return
          </Button>
        </DialogActions>
      </Dialog>
          
        </form>
        
        <GridTable 
            columns={columns}
            rows={props.myLaptops} 
            isLoading={true}
            onRowClick={({ rowIndex, data, column, isEdit, event }, tableManager) =>
            !isEdit &&
            tableManager.rowSelectionApi.getIsRowSelectable(data.id) &&
            tableManager.rowSelectionApi.toggleRowSelection(data.id)
            }
            className={classes.grid_table}
            className="animate__animated animate__fadeInUp"
        />
        
        <Fab color="primary" aria-label="add" className={classes.addBtn}>
            <Button onClick={handleClickOpen}>
              <AddIcon style={{ color: grey[50]}} />
            </Button>
        </Fab>
        <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Add a new Laptop to the table"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Serial Number"
              type="text"
              name="serial_no"
              fullWidth
              onChange={handleChange}
            />

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Model"
              type="text"
              name="model"
              fullWidth
              onChange={handleChange}
            />
            
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Brand</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="brand"
                onChange={handleChange}
              >
                <MenuItem value={'Lenovo'}>Lenovo</MenuItem>
                <MenuItem value={'Dell'}>Dell</MenuItem>
                <MenuItem value={'Asus'}>Asus</MenuItem>
                <MenuItem value={'HP'}>HP</MenuItem>
                <MenuItem value={'Acer'}>Acer</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">CPU</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="cpu"
                onChange={handleChange}
              >
                <MenuItem value={'i3'}>i3</MenuItem>
                <MenuItem value={'i5'}>i5</MenuItem>
                <MenuItem value={'i7'}>i7</MenuItem>
                <MenuItem value={'i9'}>i9</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">RAM</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="ram"
                onChange={handleChange}
              >
                <MenuItem value={'4'}>4</MenuItem>
                <MenuItem value={'8'}>8</MenuItem>
                <MenuItem value={'12'}>12</MenuItem>
                <MenuItem value={'16'}>16</MenuItem>
                <MenuItem value={'24'}>24</MenuItem>
                <MenuItem value={'32'}>32</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Storage</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="storage"
                onChange={handleChange}
              >
                <MenuItem value={'1 TB'}>1TB</MenuItem>
                <MenuItem value={'128 GB'}>128GB</MenuItem>
                <MenuItem value={'256 GB'}>256GB</MenuItem>
                <MenuItem value={'512 GB'}>512GB</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Display Resolution</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="display_resolution"
                onChange={handleChange}
              >
                <MenuItem value={'1280x1080'}>1280x1080</MenuItem>
                <MenuItem value={'1366x768'}>1366x768</MenuItem>
                <MenuItem value={'1920x1080'}>1920x1080</MenuItem>
                <MenuItem value={'2160x1440'}>2160x1440</MenuItem>
                <MenuItem value={'3840x2160'}>3840x2160</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Storage Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="storage_type"
                onChange={handleChange}
              >
                <MenuItem value={'HDD'}>HDD</MenuItem>
                <MenuItem value={'SSD'}>SSD</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Power Cable</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="power_cable"
                onChange={handleChange}
              >
                <MenuItem value={true}>Included</MenuItem>
                <MenuItem value={false}>Not Included</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Availability</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="availability"
                onChange={handleChange}
              >
                <MenuItem value={true}>Available</MenuItem>
                <MenuItem value={false}>Not Available</MenuItem>
              </Select>
            </FormControl>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addItem} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
        </>
    )
};

const mapStateToProps = state => ({
  myLaptops: state.laptops.laptops,
  myStudents: state.student.studentID
  })
  
  const mapDispatchToProps = {
    fetchLaptops,
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(MyAwesomeTable);