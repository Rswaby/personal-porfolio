import React, { Component } from 'react';
import './App.css';
import { Grid, Header, Message, Loader,Sticky } from 'semantic-ui-react'
import { ProfileCard, WorkExp, Twitter, Skills } from './components';
import { ResumeContext } from './context/Resume.context';



class App extends Component {
  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })

  static contextType = ResumeContext;
  render() {
    const {contextRef} = this.state;
    return (
      <div hrf={this.handleContextRef} className="App p-l-15">
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
                <ProfileCard />
            </Grid.Column>
            <Grid.Column width={11}>
              <Header as="h3" textAlign="center"><p>Skills</p></Header>
              {
                this.context && this.context.resumeData ?
                  this.context.resumeData.resume.skills.map((skill) =>
                    <Skills skill={skill} />) : <Loader inverted content='Loading' />
              }
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}>
            <Sticky context={contextRef} offset={25}>
              <Message >
                <Message.Header>Quick Links</Message.Header>
              </Message>
              <Twitter height={'500'} />
              </Sticky>
            </Grid.Column>
            <Grid.Column width={11}>
              <Header as="h3" textAlign="center"> <p> Work Experience </p></Header>
              {this.context && this.context.resumeData ?
                this.context.resumeData.resume.work.map((work) =>
                  <WorkExp work={work} />) : <Loader inverted content='Loading' />
              }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;