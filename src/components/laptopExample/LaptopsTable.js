import React, {useEffect} from 'react'
import MyAwesomeTable from './LaptopsRow';
import { fetchLaptops, addLaptops, assignLaptops, returnLaptops, getLaptops } from "../../rtk/laptop.store";
import {connect, useDispatch} from 'react-redux';

function LaptopsTable(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchLaptops())
    }, [])
    return (
        <div>
            <MyAwesomeTable data={{laptops: props.myLaptops, students: props.myStudents}}/>
        </div>
    )
}

const mapStateToProps = state => ({
    myLaptops: state.laptops.laptops,
    myStudents: state.laptops.students
  })
  
  export default connect(mapStateToProps)(LaptopsTable);
