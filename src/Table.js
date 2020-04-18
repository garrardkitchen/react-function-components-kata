import React from "react"

const Table = (props) => {
    return (
        <table className="table  table-striped">
            <thead className="thead-dark">
            <tr>
                <th>#</th>
                <th>Value</th>
            </tr>
            </thead>
            <tbody>
            {props.items.map((item, i) =>
                <tr key={"key" + i} scope="row">
                    <td>{i}</td>
                    <td>{item}</td>
                </tr>
            )}
            </tbody>
        </table>
    )
}

export default Table