import { useEffect } from "react";
import { fetchLogs } from "../../rtk/logs.store";
import { useDispatch, connect } from "react-redux";
import { DataGrid, GridToolbar } from '@material-ui/data-grid';


const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'timestamp', headerName: 'Time Stamp', width: 300,
    valueFormatter: ({value}) =>{
            const spliting = value.split('T');
            const time = spliting[1].split('.')
            return `${spliting[0]} at ${time[0]}`
        }
    },
    { field: 'action', headerName: 'Action', width: 100 },
    {
      field: 'user',
      headerName: 'User',
      width: 130,
    },
    {
      field: 'description',
      headerName: 'Description',
      sortable: false,
      width: 500,
    },
  ];

 function LogTable(props) {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchLogs());
    }, [dispatch])

    return (
      <div style={{ height: '80vh', width: '100%' }}>
        <DataGrid rows={props.myLogs} columns={columns} pageSize={15}
        components={{
            Toolbar: GridToolbar,
          }}
          className="animate__animated animate__fadeInUp"
          />
      </div>
    );
  }

  const mapStateToProps = state => ({
    myLogs: state.logs.logs
    })
    
    export default connect(mapStateToProps)(LogTable);