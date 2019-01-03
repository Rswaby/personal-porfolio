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
        <Grid.Column width={9} centered>
            <Header as="h3" textAlign="left">{props.work.company}</Header>
            <Container text fluid textAlign="left">
                <p>{props.work.description}</p>
            </Container>
        </Grid.Column>
        <Grid.Column width={3}>
        </Grid.Column>
    </Grid>

)

export default WorkExp