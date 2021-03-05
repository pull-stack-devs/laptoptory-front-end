import React, { useEffect } from 'react';
import Chart from './Chart'
import { connect, useDispatch } from 'react-redux';
import { getNumData, getStudents } from '../../rtk/StudentsSlicer';
import SecondChart from './SecondChart'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Show from '../Show';

function ChartParent(props) {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('laptop');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  useEffect(() => {
      dispatch(getStudents())
      dispatch(getNumData())
      setValue('student')
  }, [dispatch])
  return (
    <>
     <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",}}>   
    <FormControl component="fieldset">
      <FormLabel component="legend"style={{color:"#6F5F95"}}>Select Statics</FormLabel>
      <RadioGroup aria-label="select" name="select1" value={value} onChange={handleChange}>
        <FormControlLabel value="laptop" control={<Radio  />} label="Laptop" />
        <FormControlLabel value="student" control={<Radio />} label="Students" />
      </RadioGroup>
    </FormControl>
    <div style={{ width:"70%",color:"#5D5C61"}}>
      <Show condition={value==='laptop'}>

        <SecondChart numbers={{num1:props.nonAvailableLap,num2:props.availableLap}} />
      </Show>
      <Show condition={value==='student'}>

        <Chart data={{ data0: props.stdNotAssigned, data1: props.stdwithLap, data2: props.stdNotReturned }} />
       </Show>
    </div>
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