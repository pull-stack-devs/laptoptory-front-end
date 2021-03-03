import React, {useEffect, useState} from 'react'
import MyAwesomeTable from './LaptopsRow';
import { fetchLaptops, fetchStudents, addLaptops, assignLaptops, returnLaptops, getLaptops } from "../../rtk/laptop.store";
import {connect, useDispatch} from 'react-redux';
import { getStudents } from "../../rtk/student.store";

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
    myStudents: state.student.students
  })
  
  export default connect(mapStateToProps)(LaptopsTable);
