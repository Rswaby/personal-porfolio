import React from 'react'
import {
    Grid,
    Image,
    Header,
    Container,
} from 'semantic-ui-react'

const WorkExp = (props) => (

    <Grid container>
        <Grid.Column width={4}>
            <Image size='small' src={props.work.image} />
        </Grid.Column>
        <Grid.Column className="" width={9} centered>
            <Header as="h3" textAlign="left">{props.work.company}</Header>
            <hr/>
            <Container text fluid textAlign="left">
                <p>{props.work.description}</p>
            </Container>
        </Grid.Column>
        <Grid.Column className="" width={3}>
            <Header.Subheader as="h4" textAlign="left"> <p>Role</p></Header.Subheader>
            <hr/>
            <p>{props.work.title}</p>
        </Grid.Column>
    </Grid>

)

export default WorkExp