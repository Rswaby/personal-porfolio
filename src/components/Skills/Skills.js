import React, { Component } from 'react'
import { Grid,Progress } from 'semantic-ui-react';
const style = {
    column8: {
        paddingTop: '0em',
        paddingBottom:'0em',
    },
}
export default class Skills extends Component {
    
    render() {
        const { skill } = this.props
        return (
            <Grid >
                <Grid.Column width={3}>
                    <p>{skill.name}</p>
                </Grid.Column>
                <Grid.Column style={style.column8} width={8}>
                    <Progress percent={skill.level} progress />
                </Grid.Column>

            </Grid>
        )
    }
}
