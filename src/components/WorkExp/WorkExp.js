import React from 'react'
import {
    Grid,
    Image,
    Header,
    Container,
    Message,
} from 'semantic-ui-react'
const style = {
    container: {
        marginBottom: '3em',
    },
    message:{
        height:'220px',
    },
}
const WorkExp = (props) => (

    <Grid container style={style.container}>
            <Grid.Column width={3}>
                <Image size='small' src={props.work.image} />
            </Grid.Column>
        <Grid.Column className="" width={9} centered>
            <Message style={style.message}>
                <Header as="h3" textAlign="left">{props.work.company}</Header>
                <hr />
                <Container text fluid textAlign="left">
                    <p>{props.work.description}</p>
                </Container>
            </Message>
        </Grid.Column>
        <Grid.Column className="" width={4}>
            <Message style={style.message}>
                <Header.Subheader as="h4" textAlign="left"> <p>Role</p></Header.Subheader>
                <hr />
                <p>{props.work.title}</p>
                <Header as="h5"><p>Technologies used:</p></Header>
            </Message>
        </Grid.Column>
    </Grid>

)

export default WorkExp