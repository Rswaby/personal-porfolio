import React, { Component } from 'react';
import './App.css';
import { Grid, Image, Header } from 'semantic-ui-react'
import { ProfileCard,WorkExp } from './components';
import { ResumeContext } from './context/Resume.context';
// import { FetchResumeData } from './fetches';
//import resumeData from '../public/'


class App extends Component {
  static contextType = ResumeContext;
  componentWillMount() {
    // FetchResumeData().then(response =>{
    //   console.log(response)
    // })
    const { resumeData } = this.context;
    console.log("resumate", resumeData)
  }
  render() {
    const { resumeData } = this.context;
    return (
      <div className="App p-l-15">
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <ProfileCard />
            </Grid.Column>
            <Grid.Column width={6}>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Grid.Column>
            <Grid.Column width={3}>
              <Header>Skills</Header>
            </Grid.Column>
          </Grid.Row>
          <Header as="h3" textAlign="center"> work Experience </Header>
          <Grid.Row>
            {resumeData? resumeData.resume.work.map((work,index)=> <WorkExp work={work}/> ) : <h4>loading...</h4>}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
