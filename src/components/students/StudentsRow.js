import React, { useState } from 'react';
import Show from '../Show';
import { TableRow, TableCell, TextField, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import RemoveCircleSharpIcon from '@material-ui/icons/RemoveCircleSharp';
import { green } from '@material-ui/core/colors';
import { connect, useDispatch } from 'react-redux';
import {updatStudentData,deleteStudent} from '../../rtk/StudentsSlicer';
// import axios from 'axios';
// import cookie from 'react-cookies';
// const apiUrl = 'https://husam278-api-server.herokuapp.com/api/todo';
// const apiU = 'https://pull-stack-laptoptory.herokuapp.com/';

export default function TableRows(props) {

  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const [record, setRecord] = useState(props.items);

  const changeType = () => {
    setState(!state);
    setRecord(props.items);
  };
  const DeleteStudent=()=>{
    console.log('in delete=========>',props.items);
    dispatch(deleteStudent(props.items))
    
  }
  const updateChange = async () => {
    console.log('state>>>>>>', record);
    setState(!state);
    await dispatch(updatStudentData(record));
    // console.log('record>>>>', record);
    // let data = await axios.put(`${apiUrl}/record._id`, {
    //   data: JSON.stringify(record),
    //   headers: {
    //     'Authorization': `Bearer ${cookie.load('auth')}`,
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     'Cookie' : `token=${cookie.load('auth')}`
    //   },
    // });
    // console.log('data>>>>>', data);
  };

  const onChangeItem = (e) => {
    setRecord({ ...record, [e.target.name]: e.target.value });
  };

  console.log('props>>>>', props);

  return (
    <>
      <Show condition={state}>
        {/* <form> */}
        <TableRow>
          <TableCell>
            <Button
              onClick={() => {
                updateChange();
              }}
            >
              <SaveIcon color="primary" />
            </Button>
          </TableCell>
          <TableCell>
            <TextField
              onChange={onChangeItem}
              name="name"
              defaultValue={props.items.name }
            />
          </TableCell>
          <TableCell>
            <TextField
              name="nationality"
              defaultValue={props.items.nationality}
              onChange={onChangeItem}
            />
          </TableCell>
          <TableCell>
            <TextField
              name="national_id"
              defaultValue={props.items.national_id}
              onChange={onChangeItem}
            />
          </TableCell>
          <TableCell>
            <TextField
              name="student_status"
              defaultValue={props.items.student_status}
              onChange={onChangeItem}
            />
          </TableCell>
          <TableCell>
            <TextField
              name="program_name"
              defaultValue={props.items.program_name}
              onChange={onChangeItem}
            />
          </TableCell>
          <TableCell>
            <TextField
              name="program_version"
              defaultValue={props.items.program_version}
              onChange={onChangeItem}
            />
          </TableCell>
        </TableRow>
        {/* </form> */}
      </Show>

      <Show condition={!state}>
        <TableRow>
          <TableCell>
            <Button onClick={changeType}>
              <EditIcon style={{ color: green[500] }} />
            </Button>
            <Button onClick={DeleteStudent}>
              <RemoveCircleSharpIcon color="error" />
            </Button>
          </TableCell>
          <TableCell>{props.items.name}</TableCell>
          <TableCell>{props.items.nationality}</TableCell>
          <TableCell>{props.items.national_id}</TableCell>
          <TableCell>{props.items.student_status.toString()}</TableCell>
          <TableCell>{props.items.program_name}</TableCell>
          <TableCell>{props.items.program_version}</TableCell>
          {/* <TableCell>{props.items.display_resolution}</TableCell>
          <TableCell>{props.items.storage}</TableCell>
          <TableCell>{props.items.storage_type}</TableCell>
          <TableCell>{props.items.ram}</TableCell> */}

        </TableRow>
      </Show>
    </>
  );
}