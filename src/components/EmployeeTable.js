import React from 'react';
import EmployeeRow from './EmployeeRow';

function EmployeeTable(props) {
    return (

            <tbody>
                {
                    props.employees.map((emp, i) => {
                        return (
                            <EmployeeRow 
                                key={i} 
                                first={emp.first_name}
                                last={emp.last_name}
                                cell={emp.cell}
                                dob={emp.dob}
                                email={emp.email}
                                thumbnail={emp.thumbnail}
                            />
                        )
                    })
                }
            </tbody>
    );
}



export default EmployeeTable;