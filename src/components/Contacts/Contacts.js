import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ContactsSidebar from './ContactsSidebar/ContactsSidebar';
import ContactsList from './ContactsList/ContactsList';
import ContactsFilter from './ContactsFilter/ContactsFilter';
import s from './Contacts.css';

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <ContactsSidebar />
        <div>
          <ContactsFilter />
          <ContactsList />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
