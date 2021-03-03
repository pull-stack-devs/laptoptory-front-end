import React, { useEffect } from 'react';
import Chart from './Chart'
import { connect, useDispatch } from 'react-redux';
import { getNumData,getStudents} from '../../rtk/StudentsSlicer'
function ChartParent(props){
const dispatch=useDispatch();
useEffect(()=>{
    document.title='chart'
    const fetchData = async () => {
        await dispatch(getStudents())
        await dispatch(getNumData())
      };
      fetchData();
 
    },[])
    console.log(props.stdNotReturned)
return(
    <>
    <Chart data={{data0:props.stdNotAssigned,data1:props.stdwithLap,data2:props.stdNotReturned}}/>
    </>
)


}

const mapStateToProps = state => ({
    stdwithLap: state.students.studentsWithLap,
    stdNotAssigned: state.students.stdWithNoLap,
    stdNotReturned: state.students.notReturned,
  });
//   const mapDispatchToProps={
//     getNumData,
//   }
  export default connect(mapStateToProps)(ChartParent);