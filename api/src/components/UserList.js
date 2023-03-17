import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { apiCall } from '../redux/user/action'
import User from './User'
import { Alert } from 'reactstrap'
import SelektonComponent from './SelektonComponent'

const UserList = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(state)

    useEffect(() => {
        dispatch(apiCall())
        
    }, [dispatch])

  
    return (
        <div className='container'>
            {
                state.isLoading ? (
                    // <h1 style={{textAlign:'center', color:'red'}}>Loading...</h1>
                    <SelektonComponent /> 
                )
                :state.error ? (
                    <Alert color='danger'>{state.error}</Alert>
                )
                :(
                    state.users.map(user=>{
                       return(
                           <User key={user.id} user={user}/>
                       ) 
                    })
                )
            }
        </div>
    )
}

export default UserList
