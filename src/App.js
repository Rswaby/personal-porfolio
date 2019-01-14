import React, { Component } from 'react';
import './App.css';
import { Grid, Header, Message} from 'semantic-ui-react'
import { ProfileCard, WorkExp, Twitter } from './components';
import { ResumeContext } from './context/Resume.context';



class App extends Component {
  static contextType = ResumeContext;
  render() {
    return (
      <div className="App p-l-15">
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <ProfileCard />
            </Grid.Column>
            <Grid.Column width={11}>
                <Header as="h2" textAlign="center"><p>Skills</p></Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}>
              <Message >
                <Message.Header>Quick Links</Message.Header>
              </Message>
              <Twitter height={'500'} />
            </Grid.Column>
            <Grid.Column width={11}>
              <Header as="h2" textAlign="center"> <p> Work Experience </p></Header>
              {this.context && this.context.resumeData ?
                this.context.resumeData.resume.work.map((work, index) => <WorkExp work={work} />) : <h4>loading...</h4>
              }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;


// {/* <Grid>
//           <Grid.Row>
//             <Grid.Column width={4}>
//               <ProfileCard />
//             </Grid.Column>
//             <Grid.Column className="" width={8}>
//               <Header as="h2" textAlign="center"><p>Skills</p></Header>
//             </Grid.Column>
//           </Grid.Row>
//           <Grid.Row centered>
//             <Header as="h2" textAlign="center"> <p> Work Experience </p></Header>
//           </Grid.Row>
//           <Grid.Row>
//             {this.context && this.context.resumeData? this.context.resumeData.resume.work.map((work, index) => <WorkExp work={work} />) : <h4>loading...</h4>}
//           </Grid.Row>
//         </Grid> */}
// {/* <Grid.Row>
//             {this.context && this.context.resumeData? this.context.resumeData.resume.work.map((work, index) => <WorkExp work={work} />) : <h4>loading...</h4>}
//           </Grid.Row> */}