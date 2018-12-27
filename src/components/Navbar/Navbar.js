import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = { activeItem: 'Rohan' }
  render() {

    return (
      <div className="container">
        <Menu fixed="top" secondary inverted>
          <Container>
            <Menu.Item link as="a" href="/" name='Rohan' />
            <Menu.Item link as="a" href="/projects" name="projects" />
            <Menu.Menu position="right">
              <Menu.Item link as="a" href="/about" name="About" />
              <Menu.Item link as="a" href="/contact" name="Contact" />
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    )
  }
}
