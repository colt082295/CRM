import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.searchFocused = this.searchFocused.bind(this);
    this.searchBlurred = this.searchBlurred.bind(this);
  }

  state = {
    searchFocus: false,
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  searchFocused() {
    this.setState({ searchFocus: true });
  }

  searchBlurred() {
    this.setState({ searchFocus: false });
  }

  isFocused() {
    if (this.state.searchFocus) {
      return s.searchFocus;
    }
    return '';
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Menu attached="top">
        <Menu.Menu position="left">
          <Menu.Item
            as={Link}
            name="home"
            to="/"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>
          <Menu.Item
            as={Link}
            name="contacts"
            to="/contacts"
            active={activeItem === 'contacts'}
            onClick={this.handleItemClick}
          >
            Contacts
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
          <div
            className={`${'ui right aligned category search item' +
              ' '}${this.isFocused()}`}
          >
            <div className={`ui transparent icon input ${s.searchWrapper}`}>
              <input
                className="prompt"
                type="text"
                placeholder="Search contacts"
                onFocus={this.searchFocused}
                onBlur={this.searchBlurred}
              />
              <i className="search link icon" />
            </div>
            <div className="results" />
          </div>
          <Dropdown item icon="user outline" simple>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/profile">Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/settings">Settings</Link>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>More</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default withStyles(s)(Navigation);
