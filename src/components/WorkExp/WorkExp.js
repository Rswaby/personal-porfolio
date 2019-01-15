import React from 'react'
import {
    Grid,
    Image,
    Header,
    Container,
    Message,
    List,
} from 'semantic-ui-react'
const style = {
    container: {
        marginBottom: '3em',
    },
    message: {
        height: '220px',
        backgroundColor:'#DFEFF0'
    },
}
//f8ffff
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
                <p>{props.work.title}</p>
                <p>{props.work.years}</p>
                <hr/>
                <Header as="h5"><p>Technologies used:</p></Header>
                <List bulleted>
                    {
                        props.work.stack.map((technology) =><List.Item>{technology.name}</List.Item>)
                    }
                </List>
            </Message>
        </Grid.Column>
    </Grid>

)

export default WorkExp