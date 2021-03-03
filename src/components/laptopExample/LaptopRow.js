import React, { Component } from 'react';
import { fetchLaptops, fetchStudents, addLaptops, assignLaptops, returnLaptops, getLaptops } from "../../rtk/laptop.store";
import GridTable from '@nadavshaar/react-grid-table';
import { makeStyles } from '@material-ui/core/styles';
import {connect, useDispatch} from 'react-redux';
import { Slide } from "@material-ui/core";

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

class LaptopRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns : []
        };
    }

    componentDidMount = () =>{
        this.props.fetchLaptops()
        this.setState({ columns: [
            {
              id: "checkbox",
              visible: true,
              pinned: true,
              width: "54px"
            },
            {
                id: "2", 
                field: 'brand', 
                label: 'Brand',
                editable: false,
            }, 
            {
                id: "3", 
                field: 'cpu', 
                label: 'CPU',
                editable: false,
            },
            {
                id: "4", 
                field: 'ram', 
                label: 'RAM',
                editable: false,
            },
            {
                id: "5", 
                field: 'storage', 
                label: 'Storage',
                editable: false,
            },
            {
                id: "6", 
                field: 'storage_type', 
                label: 'Storage Type',
                editable: false,
            },
            {
                id: "7", 
                field: 'display_resolution', 
                label: 'Display Resolution',
                editable: false,
            },
            {
              id: "8", 
              field: 'availability', 
              label: 'Available in Inventory',
              getValue: ({value, column}) => value ? 'Available' : 'Not Available', 
              editable: false,
            },
            {
              id: "9", 
              field: 'availability_student', 
              label: 'Available with student',
              getValue: ({value, column}) => value ? 'Available' : 'Not Available',
              editable: false,
            },
            {
              id: "10", 
              field: 'std_id', 
              label: 'Student ID',
              getValue: ({value, column}) => value ? `Assigned to ${value}` : 'Not Assigned',
              editable: false,
              // editorCellRenderer: ({
              //   tableManager,
              //   value,
              //   data,
              //   column,
              //   colIndex,
              //   rowIndex,
              //   onChange
              // }) => (
              //   <select
              //     style={styles.select}
              //     value={value}
              //     onChange={(e) =>
              //       onChange({ ...data, [column.field]: e.target.value })
              //     }
              //   >
              //     {/* {state.map((item, index)=>{
              //       return <option key={index}>{item.id}</option>
              //     })} */}
              //   </select>
              // )
            },
            {
              id: "11", 
              field: 'display_resolution', 
              label: 'Select Student',
              getValue: ({value, column}) => '',
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
                  {/* {let rowsClone = [...tableManager.rowsApi.rows];} */}
                  {console.log("fihaofiwnqdajsdioashldihasoidkn",this.props.myStudents)}
                  
                  {/* {props.myStudents.map((item, index)=>{
                    return <option key={index}>{item}</option>
                  })} */}
                </select>
              )
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
                      tableManager.rowEditApi.setEditRowId(null);
                    }}
                  >
                    {SAVE_SVG}
                  </button>
                </div>
              )
            }
        ]});
    }

    
    componentDidUpdate = () => {

        
    }

    render() {
        console.log("propzzzzzzzzzzzzzz", this.props)
        return (
            <div>
                <GridTable 
                    columns={this.state.columns}
                    rows={this.props.myLaptops} 
                    onRowClick={({ rowIndex, data, column, isEdit, event }, tableManager) =>
                    !isEdit &&
                    tableManager.rowSelectionApi.getIsRowSelectable(data.id) &&
                    tableManager.rowSelectionApi.toggleRowSelection(data.id)
                    }
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    myLaptops: state.laptops.laptops,
    myStudents: state.student.studentID
})
    
const mapDispatchToProps = {
    fetchLaptops,
}
    
export default connect(mapStateToProps, mapDispatchToProps)(LaptopRow);