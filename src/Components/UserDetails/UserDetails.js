const UserDetails = ({user}) => {

    const {email, username, phone, website} = user;

    return (
        <div>
            <h3>Username: {username}</h3>
            <h4>Email: {email}</h4>



            <h4>phone: {phone}</h4>
            <h4>website: {website}</h4>
            <hr/>
        </div>
    );
};

export {UserDetails};