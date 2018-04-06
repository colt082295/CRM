import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ContactsFilter.css';

class ContactsFilter extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.info}>
          <div className={s.title}>Contacts</div>
          <div className={s.contactsCount}>142 Total</div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ContactsFilter);
