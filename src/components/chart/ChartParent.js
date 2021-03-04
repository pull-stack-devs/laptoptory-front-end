import React, { useEffect } from 'react';
import Chart from './Chart'
import { connect, useDispatch } from 'react-redux';
import { getNumData, getStudents } from '../../rtk/StudentsSlicer';
import SecondChart from './SecondChart'

function ChartParent(props) {

  const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch(getStudents())
      dispatch(getNumData())
     
  }, [dispatch])
  return (
    <>
     
    <div style={{ paddingTop:"8%",width:"100%",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",color:"#5D5C61"}}>
        <Chart data={{ data0: props.stdNotAssigned, data1: props.stdwithLap, data2: props.stdNotReturned }} />
        <SecondChart numbers={{num1:props.nonAvailableLap,num2:props.availableLap}} />
    </div>
    
    </>
  )


}

const mapStateToProps = state => ({
  stdwithLap: state.students.studentsWithLap,
  stdNotAssigned: state.students.stdWithNoLap,
  stdNotReturned: state.students.notReturned,
  availableLap:state.students.availableLap,
  nonAvailableLap:state.students.nonAvailableLap
});

export default connect(mapStateToProps)(ChartParent);