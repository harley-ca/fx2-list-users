const UserDetails = ({user}) => {

    return(
        <>
            <p><b>Name:</b> {user.fullName()}</p>
            <p>Email: {user.email}</p>
            <p>City: {user.city}</p>
            <br></br>
        </>
    )
}

export default UserDetails