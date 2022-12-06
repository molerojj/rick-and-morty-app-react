// CREANDO UN COMPONENTE USERS

import React from "react";
import { connect } from 'react-redux';
import { getUsers } from './actions'
import User from './user';

class Users extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){ // Cuando el componente se monto, queremos que despache (dispatch)
        this.props.getUsers() // es una funcion que hace dispatch de get_users
    }                         // get_user es una action. que va al api y recibe la info y se la pasa 
                              // al reducer para que actualice el estado.

    render(){
        return(
            <>
                <h1>Soy el componente users</h1>
                {
                    this.props.users.map(user => {
                        return (<User 
                            name = {user.name}
                            id = {user.id}
                            username = {user.username}
                            key = {user.ud}
                        />)
                    })
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => {dispatch(getUsers())}
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Users);
