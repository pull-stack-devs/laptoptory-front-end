import React, { useState } from 'react';
import Show from '../Show';
import { TableRow, TableCell, TextField, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import RemoveCircleSharpIcon from '@material-ui/icons/RemoveCircleSharp';
import { green } from '@material-ui/core/colors';
import axios from 'axios';
import cookie from 'react-cookies';
const apiUrl = 'https://husam278-api-server.herokuapp.com/api/todo';
const apiU = 'https://pull-stack-laptoptory.herokuapp.com/';

export default function TableRows(props) {
  const [state, setState] = useState(false);
  const [record, setRecord] = useState(props.items);

  const changeType = () => {
    setState(true);
    setRecord(props.items);
    console.log('state>>>>>>', state);
  };

  const updateChange = async () => {
    setState(false);
    console.log('record>>>>', record);
    let data = await axios.put(`${apiUrl}/record._id`, {
      data: JSON.stringify(record),
      headers: {
        'Authorization': `Bearer ${cookie.load('auth')}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cookie' : `token=${cookie.load('auth')}`
      },
    });
    console.log('data>>>>>', data);
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
              name="difficulty"
              defaultValue={props.items.difficulty}
            />
          </TableCell>
          <TableCell>
            <TextField
              name="text"
              defaultValue={props.items.text}
              onChange={onChangeItem}
            />
          </TableCell>
          <TableCell>
            <TextField
              name="_id"
              defaultValue={props.items._id}
              onChange={onChangeItem}
            />
          </TableCell>
          <TableCell>
            <TextField
              name="assignee"
              defaultValue={props.items.assignee}
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
            <Button onClick={changeType}>
              <RemoveCircleSharpIcon color="error" />
            </Button>
          </TableCell>
          <TableCell>{props.items.id}</TableCell>
          <TableCell>{props.items.serial_no}</TableCell>
          <TableCell>{props.items.availability}</TableCell>
          <TableCell>{props.items.cpu}</TableCell>
          <TableCell>{props.items.brand}</TableCell>
          <TableCell>{props.items.model}</TableCell>
          <TableCell>{props.items.display_resolution}</TableCell>
          <TableCell>{props.items.storage}</TableCell>
          <TableCell>{props.items.storage_type}</TableCell>
          <TableCell>{props.items.ram}</TableCell>

        </TableRow>
      </Show>
    </>
  );
}
