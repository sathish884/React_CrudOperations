import React, { useState } from 'react'
import UserCreations from './UserCreations'

function UserList() {
    const [modal, seModal] = useState("#createModal")
    return (
        <>
            <div className="container p-5">
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={modal}>
                                        <i className="bi bi-pencil-square"></i>
                                    </button> &nbsp;
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <i className="bi bi-trash-fill"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <UserCreations create={modal} />


        </>
    )
}

export default UserList