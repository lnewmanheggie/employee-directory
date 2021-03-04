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
            <td>{first} {last}</td>
            <td>{email}</td>
            <td>{cell}</td>
            <td>{dob}</td>
        </tr>
    )
}

export default EmployeeRow;