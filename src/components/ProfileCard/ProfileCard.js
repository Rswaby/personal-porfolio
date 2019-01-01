import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const ProfileCard = () => (
    <Card>
        <Image src='https://res.cloudinary.com/roro-personal/image/upload/v1546200308/thumb-350-82029.jpg' />
        <Card.Content>
            <Card.Header>Rohan Swaby</Card.Header>
            <Card.Description>Student Software Developer at The city College Of New York</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Icon name='graduation' />
            May 2019
    </Card.Content>
    </Card>
)

export default ProfileCard