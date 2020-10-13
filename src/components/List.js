import React from 'react'
import { useSelector } from 'react-redux'

const UsersList = () => {
    const userslist = useSelector(state => state.user.list)

    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {userslist.length > 0 ?
                        userslist.map((user,index) => (
                            <tr key={user.age+index}>
                                <td>
                                    <input type="text" name="" id="" value={user.name}/>
                                </td>
                                <td>{user.age}</td>
                            </tr>
                        ))
                        : null}
                </tbody>
            </table>
        </div>
    )
}

export default UsersList