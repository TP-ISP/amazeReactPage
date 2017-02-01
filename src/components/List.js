import React, { Component } from 'react';
import {
  Nav,
  Container,
  NavItem,
  Panel,
  List,
  ListItem
} from 'amazeui-react';
import {Link} from 'react-router';

class ButtonBar extends Component {
  render() {
    return (
      <div className="App">
      <Container>
        <Nav pills justify>
        <NavItem><Link to="/">首页</Link></NavItem>
        <NavItem active><Link to="/list">列表</Link></NavItem>
        <NavItem><Link to="/recent">最新发布</Link></NavItem>
        </Nav>
        <Panel>
        信息列表
        </Panel>
        <List static>
          <ListItem>脱下长日的假面</ListItem>
          <ListItem>奔向梦幻的疆界</ListItem>
          <ListItem>南瓜马车的午夜</ListItem>
          <ListItem>昨天太近　明天太远</ListItem>
          <ListItem>让我享受这感觉</ListItem>
        </List>
      </Container>

      </div>
    );
  }
}

export default ButtonBar;
