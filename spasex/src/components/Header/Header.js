import React from 'react';
import './header.css';
import logo from '../../logo.svg';

const Header = () => (
    <header class="header">
    <img
        src={logo}
        alt="Logo Space X"
        class="logo"
    />
    <nav class="main-nav nav">
      <ul class="list">
        <li class="item">
          <a href="#" class="item-link">Falcon 1</a>
        </li>
        <li class="item">
          <a href="#" class="item-link">Falcon 9</a>
        </li>
        <li class="item">
          <a href="#" class="item-link">Falcon Heavy</a>
        </li>
        <li class="item">
          <a href="#" class="item-link">Updates</a>
        </li>
      </ul>
    </nav>
    <nav class="secondary-nav">
      <ul class="list">
        <li class="item">
          <a href="#" class="item-link">Home</a>
        </li>
        <li class="item">
          <a href="calendar.html" class="item-link">Calendar</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;