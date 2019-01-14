import React, { Component } from 'react'
import { Timeline } from 'react-twitter-widgets'

export default class Twitter extends Component {
    render() {
        const { height } = this.props;
        return (
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'rohanswaby'
                }}
                options={{
                    username: 'RohanSwaby',
                    height: height
                }}
                onLoad={() => console.log('Timeline is loaded!')}
            />)
    }
}
