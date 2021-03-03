import React, { useState, useEffect } from "react";
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
import { updatStudentData, deleteStudent } from "../../rtk/StudentsSlicer";
import { connect, useDispatch } from 'react-redux';

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
    <div className='rgt-cell-inner' style={{ display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <img src={data.avatar} alt="user avatar" />
      <span className='rgt-text-truncate' style={{ marginLeft: 10 }}>{value}</span>
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
  const dispatch = useDispatch();

  console.log('from tttttttttttttaaaaaaaabbbbbbllllleeeeee',props.students) 
  console.log('from tttttttttttttaaaaaaaabbbbbbllllleeeeee',props)             
  useEffect(()=>{
  },[])
  const updateChange = (row) => {
    dispatch(updatStudentData(row));
  }

  const columns = [
    
    {
      id: 1,
      field: 'name',
      label: 'name',
    },
    {
      id: 2,
      field: 'nationality',
      label: 'nationality',
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
          <option>Jordanian</option>
          <option>Iraqi</option>
          <option>Palestinian</option>
          <option>Syrian</option>
        </select>
      )
    },
    {
      id: 3,
      field: 'national_id',
      label: 'national_id',
    },
    {
      id: 4,
      field: 'student_status',
      label: 'student status',
      getValue: ({value, column}) => value?'Active':'In Active',
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
          <option value="true">Active</option>
          <option value="false">In Active</option>
        </select>
      )
    },
    {
      id: 5,
      field: 'program_name',
      label: 'program_name',
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
          {props.myprograms.map((program,indx) => {

            return <option key={indx}>{program}</option>
          })}
        </select>
      )
    },
    {
      id: 6,
      field: 'program_version',
      label: 'program_version',
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
          {props.myVersions.map((program,indx) => {

            return <option key={indx}>{program}</option>
          })}
  
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
              console.log("data>>>>", data)
              updateChange(data)
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
        rows={props.students}
        onRowClick={({ rowIndex, data, column, isEdit, event }, tableManager) =>
          !isEdit &&
          tableManager.rowSelectionApi.getIsRowSelectable(data.id) &&
          tableManager.rowSelectionApi.toggleRowSelection(data.id)
        }
      />
     
    </>
  )
};

const mapStateToProps = state => ({
  myprograms: state.programs.programsNames,
  myVersions:state.programs.programsVersions,
})



export default connect(mapStateToProps)(MyAwesomeTable);

