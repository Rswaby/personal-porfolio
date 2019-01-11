import React, { Component } from 'react';
import './App.css';
import { Grid, Header } from 'semantic-ui-react'
import { ProfileCard, WorkExp } from './components';
import { ResumeContext } from './context/Resume.context';
// import { FetchResumeData } from './fetches';
//import resumeData from '../public/'


class App extends Component {
  static contextType = ResumeContext;
  componentWillMount() {
    // FetchResumeData().then(response =>{
    //   console.log(response)
    // })
    
  }
  render() {
    return (
      <div className="App p-l-15">
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <ProfileCard />
            </Grid.Column>
            <Grid.Column className="" width={8}>
              <Header as="h2" textAlign="center"><p>Skills</p></Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Header as="h2" textAlign="center"> <p> Work Experience </p></Header>
          </Grid.Row>
          <Grid.Row>
            {this.context && this.context.resumeData? this.context.resumeData.resume.work.map((work, index) => <WorkExp work={work} />) : <h4>loading...</h4>}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
