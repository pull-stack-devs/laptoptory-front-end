import React, {useEffect} from 'react'
import MyAwesomeTable from './LaptopsRow';
import { fetchLaptops } from "../../rtk/laptop.store";
import {connect, useDispatch} from 'react-redux';
import { getStudents } from "../../rtk/StudentsSlicer";

function LaptopsTable(props) {
    // const [record, setRecord] = useState([]);
    const dispatch = useDispatch()
    useEffect(() => {
        const getData = () => {
            dispatch(fetchLaptops());
            dispatch(getStudents())
        }; 
        getData();
    }, [dispatch])

    console.log("myyyyyyyyyyt", props.myLaptops, props.myStudents)
    return (
        <div>
            <MyAwesomeTable data={{laptops: props.myLaptops, students: props.myStudents}}/>
        </div>
    )
}

const mapStateToProps = state => ({
    myLaptops: state.laptops.laptops,
    myStudents: state.students.students
  })
  
  export default connect(mapStateToProps)(LaptopsTable);