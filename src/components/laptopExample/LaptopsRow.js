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
    FormControl
  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { fetchLaptops, addLaptops, updateLaptops } from "../../rtk/laptop.store";
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
const Username = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {
    return (
        <div className='rgt-cell-inner' style={{display: 'flex', alignItems: 'center', overflow: 'hidden'}}>
            <img src={data.avatar} alt="user avatar" />
            <span className='rgt-text-truncate' style={{marginLeft: 10}}>{value}</span>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    addBtn: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
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
  }));

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  

export const MyAwesomeTable = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
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
        props.addLaptops(laptop)
      };

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchLaptops());
    }, [])

    const updateChange = (row) =>{
        props.updateLaptops(row);
    }
    
    const columns = [
        {
            id: "checkbox",
            visible: true,
            pinned: true,
            width: "54px"
        },
        {
            id: 1, 
            field: 'brand', 
            label: 'brand',
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
                  <option>Lenovo</option>
                  <option>Asus</option>
                  <option>Acer</option>
                  <option>HP</option>
                  <option>Dell</option>
                </select>
              )
        }, 
        {
            id: 2, 
            field: 'cpu', 
            label: 'cpu',
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
                  <option>i3</option>
                  <option>i5</option>
                  <option>i7</option>
                  <option>i9</option>
                </select>
              )
        },
        {
            id: 3, 
            field: 'ram', 
            label: 'ram',
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
                  <option>4</option>
                  <option>8</option>
                  <option>12</option>
                  <option>16</option>
                  <option>24</option>
                  <option>32</option>
                </select>
              )
        },
        {
            id: 4, 
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
                  <option>128GB</option>
                  <option>256GB</option>
                  <option>516GB</option>
                  <option>1TB</option>
                </select>
              )
        },
        {
            id: 5, 
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
                <option>HDD</option>
                  <option>SSD</option>
                </select>
              )
        },
        {
            id: 6, 
            field: 'display_resolution', 
            label: 'display resolution',
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
                  <option>1280x1080</option>
                  <option>1366x768</option>
                  <option>1920x1080</option>
                  <option>2160x1440</option>
                  <option>3840x2160</option>
                </select>
              )
        },
        {
            id: "Button",
            field: "button",
            label: 'Edit',
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
                    updateChange(rowsClone[rowIndex-1])
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
        <GridTable 
            columns={columns}
            rows={props.myLaptops.laptops} 
            onRowClick={({ rowIndex, data, column, isEdit, event }, tableManager) =>
            !isEdit &&
            tableManager.rowSelectionApi.getIsRowSelectable(data.id) &&
            tableManager.rowSelectionApi.toggleRowSelection(data.id)
            }
        />
        <Fab color="primary" aria-label="add" className={classes.addBtn}>
            <Button onClick={handleClickOpen}>
              <AddIcon />
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
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
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
    myLaptops: state.laptop
  })
  
  const mapDispatchToProps = {
    fetchLaptops,
    updateLaptops,
    addLaptops
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(MyAwesomeTable);