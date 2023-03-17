import React from 'react'
import { Card, CardTitle, CardText, Row, Col, Alert } from 'reactstrap';


const User = ({user}) => {
    return (
        <div className='card'>
            
                    <Card body>
                        <CardTitle tag="h5" className='titre'>{user.name}</CardTitle>
                        <CardText>
                            Email :<Alert color='success'>{user.email}</Alert>
                            Phone :<Alert color='success'>{user.phone}</Alert>
                            Website :<Alert color='success'>{user.website}</Alert>
                        </CardText>
                    </Card>
             
        </div>
    )
}

export default User
