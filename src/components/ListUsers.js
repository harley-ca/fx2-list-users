import users from "../data/UsersList"
import UserDetails from "./User"

const ListUsers = () => {
    return(
        <>
            <h3>Current Users</h3>
            <ul>
            {users.map(user =>
                <li key = {user.id}><UserDetails user = {user} /></li>)}
            </ul>
        </>
    )
}

export default ListUsers