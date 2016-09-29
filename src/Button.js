import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Icon,
  Button,
  Nav,
  Navbar,
  Container,
  Grid,
  NavItem
} from 'amazeui-react';

class ButtonBar extends Component {
  render() {
    return (
      <div className="App">
      <Container>
        <Nav pills>
          <NavItem active href="http://www.amazeui.org">首页</NavItem>
          <NavItem href="http://www.amazeui.org">开始使用</NavItem>
          <NavItem href="http://www.amazeui.org">按需定制</NavItem>
        </Nav>
      </Container>
      </div>
    );
  }
}

export default ButtonBar;
