import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Contact.css';

class Contact extends React.Component {
  render() {
    return <div className={s.root} />;
  }
}

export default withStyles(s)(Contact);
