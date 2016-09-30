import React, { Component } from 'react';
import './App.css';
import {
  Nav,
  Container,
  NavItem
} from 'amazeui-react';
import {Link} from 'react-router';

class ButtonBar extends Component {
  render() {
    return (
      <div className="App">
      <Container>
        <Nav pills justify>
          <NavItem active><Link to="/">首页</Link></NavItem>
          <NavItem><Link to="/list">列表</Link></NavItem>
          <NavItem><Link to="/recent">最新发布</Link></NavItem>
        </Nav>
      </Container>
      </div>
    );
  }
}

export default ButtonBar;
