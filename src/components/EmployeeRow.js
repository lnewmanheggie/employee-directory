import React from 'react';

function EmployeeRow({ first, last, dob, email, thumbnail, cell }) {
    return (
        <tr>
            <td>
                <div className="is-flex is-justify-content-center">
                    <figure className="image is-64x64">
                        <img src={thumbnail} />
                    </figure>
                </div>
            </td>
            <td>
                <div className="mt-2">{first} {last}</div>
            </td>
            <td>
                <div className="mt-2">{email}</div> 
            </td>
            <td>
                <div className="mt-2">{cell}</div>
            </td>
            <td>
                <div className="mt-2">{dob}</div>
            </td>
        </tr>
    )
}

export default EmployeeRow;