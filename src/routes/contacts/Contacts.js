import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ContactsComponent from '../../components/Contacts/Contacts';
import s from './Contacts.css';

class Contacts extends React.Component {
  render() {
    return (
      <div>
        <ContactsComponent />
      </div>
    );
  }
}

export default withStyles(s)(Contacts);
