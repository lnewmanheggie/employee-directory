import React from 'react';
import EmployeeRow from './EmployeeRow';

function EmployeeTable(props) {
    return (
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth has-text-centered">
            <thead>
                <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>DOB</th>
                </tr>
            </thead>
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
        </table>

        // <div>

        //     {
        //         props.employees.map((emp, i) => <EmployeeRow key={i + "-row"}  {...emp} />)
        //     }
        // </div>
    );
}



export default EmployeeTable;