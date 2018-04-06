import React from 'react';
import { Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ContactsListItem.css';

class ContactsListItem extends React.Component {
  static propTypes = {
    item: PropTypes.instanceOf(Object).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
    };
  }

  render() {
    const { item } = this.state;
    return (
      <div className={s.listItem}>
        <Checkbox className={s.item} />
        <div className={s.item}>{item.name}</div>
        <div className={s.item}>555-555-5555</div>
      </div>
    );
  }
}

export default withStyles(s)(ContactsListItem);
