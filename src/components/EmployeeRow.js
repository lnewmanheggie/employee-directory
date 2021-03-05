import React from 'react';

function EmployeeRow({ first, last, dob, email, thumbnail, cell }) {

    const styles = {
        cell: {
            backgroundColor: "lightgrey"
        },

        email: {
            backgroundColor: "lightgrey",
            fontSize: "0.9rem"
        }
    }

    return (
        <>
            <div className="cell" style={styles.cell}>
                <figure className="image is-64x64">
                    <img src={thumbnail} />
                </figure>
            </div>
            <div className="cell" style={styles.cell}>
                <div>{first} {last}</div>
            </div>
            <div className="cell" style={styles.email}>
                <div>{email}</div>
            </div>
            <div className="cell" style={styles.cell}>
                <div>{cell}</div>
            </div>
            <div className="cell" style={styles.cell}>
                <div>{dob}</div>
            </div>
        </>
    )
}

export default EmployeeRow;