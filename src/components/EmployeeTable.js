import React from 'react';
import EmployeeRow from './EmployeeRow';

function EmployeeTable(props) {
    return (

            <>
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
            </>
    );
}



export default EmployeeTable;