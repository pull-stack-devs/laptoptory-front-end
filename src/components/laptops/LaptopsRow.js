import React, { useState } from 'react';
import Show from '../Show';
import { TableRow, TableCell, TextField, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import RemoveCircleSharpIcon from '@material-ui/icons/RemoveCircleSharp';
import { green } from '@material-ui/core/colors';
// import { updateLaptops } from "../../rtk/laptop.store";
import {connect, useDispatch} from 'react-redux';

export function TableRows(props) {
  const [state, setState] = useState(false);
  const [record, setRecord] = useState(props.items);

  const dispatch = useDispatch();
  const changeType = () => {
    setState(true);
    setRecord(props.items);
    console.log('state>>>>>>', state);
  };

  const updateChange = () => {
    setState(false);
    // dispatch(updateLaptops(record))
  };

  
  const onChangeItem = (e) => {
    setRecord({ ...record, [e.target.name]: e.target.value });
    console.log("record>>>>>>", record)
  };

  console.log('props>>>>', props);

  return (
    <>
      <Show condition={state}>
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
              name="serial_no"
              defaultValue={props.items.serial_no}
            />
          </TableCell>
          <TableCell>
            <TextField
              name="brand"
              defaultValue={props.items.brand}
              onChange={onChangeItem}
            />
          </TableCell>
          <TableCell>
            <TextField
              name="cpu"
              defaultValue={props.items.cpu}
              onChange={onChangeItem}
            />
          </TableCell>
          <TableCell>
            <TextField
              name="ram"
              defaultValue={props.items.ram}
              onChange={onChangeItem}
            />
          </TableCell>
          <TableCell>
            <TextField
              name="storage"
              defaultValue={props.items.storage}
              onChange={onChangeItem}
            />
          </TableCell>
          <TableCell>
            <TextField
              name="storage_type"
              defaultValue={props.items.storage_type}
              onChange={onChangeItem}
            />
          </TableCell>
          
          <TableCell>{!props.items.power_cable}</TableCell>
          
          <TableCell>
            <TextField
              name="display_resolution"
              defaultValue={props.items.display_resolution}
              onChange={onChangeItem}
            />
          </TableCell>
          <TableCell>
            <TextField
              name="model"
              defaultValue={props.items.model}
              onChange={onChangeItem}
            />
          </TableCell>
          <TableCell>{props.items.availability}</TableCell>
        </TableRow>
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
          <TableCell>{props.items.serial_no}</TableCell>
          <TableCell>{props.items.brand}</TableCell>
          <TableCell>{props.items.cpu}</TableCell>
          <TableCell>{props.items.ram}</TableCell>
          <TableCell>{props.items.storage}</TableCell>
          <TableCell>{props.items.storage_type}</TableCell>
          <TableCell>{!props.items.power_cable ? 'not included' : 'included'}</TableCell>
          <TableCell>{props.items.display_resolution}</TableCell>
          <TableCell>{props.items.model}</TableCell>
          <TableCell>{!props.items.availability ? 'false' : 'true'}</TableCell>
          
        </TableRow>
      </Show>
    </>
  );
}


const mapStateToProps = state => ({
  
})

const mapDispatchToProps = {
  // updateLaptops
}

export default connect(mapStateToProps, mapDispatchToProps)(TableRows);