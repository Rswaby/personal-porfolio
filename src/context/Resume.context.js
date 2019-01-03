import React, { Component } from 'react';
import { FetchResumeData } from '../fetches';

export const ResumeContext = React.createContext();

export class ResumeProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resumeData: '',
        }
    }

    onLoad() {
        FetchResumeData().then(result => {
            this.setState({
                resumeData: result,
            });
        })
    }
    componentWillMount() {

            FetchResumeData().then(result => {
                this.setState({
                    resumeData: result,
                });
            })

    }

    componentDidMount() {
        // this.setState(this.initialState());
        if (!this.state.resumeData) {

            FetchResumeData().then(result => {
                this.setState({
                    resumeData: result,
                });
            })
        }
    }

    render() {
        return (
            <ResumeContext.Provider value={{
                resumeData: this.state.resumeData,
                onLogout: () => {
                    this.setState({ resumeData: '' });
                },
                onLoad: () => { this.onLoad(); }
            }}>
                {this.props.children}
            </ResumeContext.Provider>
        )
    }
}

const ResumeConsumer = ResumeContext.Consumer;

export function ResumeWrapper(WrappedComponent) {
    return function Wrapper(props) {
        return (
            <ResumeConsumer >
                {value => (
                    <WrappedComponent {...props} {...value} />
                )}
            </ResumeConsumer>
        )
    }
}
