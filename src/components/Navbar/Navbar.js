import React, { Component } from 'react'
import { Menu, Container, Segment } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = { activeItem: 'Rohan' }
  render() {

    return (
      <div className="Navbar m-b-15">
        <Segment inverted >
          <Menu fixed="top" size="large" inverted>
            <Container>
              <Menu.Item header link as="a" href="/" name='Rohan Swaby' />
              <Menu.Menu position="right">
                <Menu.Item link as="a" href="/about" name="About" />
                <Menu.Item link as="a" href="/projects" name="projects" />
                <Menu.Item link as="a" href="/contact" name="Contact" />
              </Menu.Menu>
            </Container>
          </Menu>
        </Segment>
      </div>
    )
  }
}
