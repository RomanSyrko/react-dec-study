const UserDetails = ({user}) => {

    const {id, name, username} = user;

    return (
        <div>
            {id} -- {name} -- {username}
        </div>
    );
};

export {UserDetails};