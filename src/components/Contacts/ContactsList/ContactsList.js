import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { AutoSizer, Table, Column } from 'react-virtualized';
import ContactsListItem from './ContactsListItem/ContactsListItem';
import s from './ContactsList.css';

class ContactsList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.list = [
      {
        name: 'Colton Travers',
        phone: '555-555-5555',
      },
      {
        name: 'Tracy Massey',
        phone: '555-555-5555',
      },
      {
        name: 'Phil Massey',
        phone: '555-555-5555',
      },
      {
        name: 'Wyatt West',
        phone: '555-555-5555',
      },
      {
        name: 'Colton Travers',
        phone: '555-555-5555',
      },
      {
        name: 'Tracy Massey',
        phone: '555-555-5555',
      },
      {
        name: 'Phil Massey',
        phone: '555-555-5555',
      },
      {
        name: 'Wyatt West',
        phone: '555-555-5555',
      },
      {
        name: 'Colton Travers',
        phone: '555-555-5555',
      },
      {
        name: 'Tracy Massey',
        phone: '555-555-5555',
      },
      {
        name: 'Phil Massey',
        phone: '555-555-5555',
      },
      {
        name: 'Wyatt West',
        phone: '555-555-5555',
      },
      {
        name: 'Colton Travers',
        phone: '555-555-5555',
      },
      {
        name: 'Tracy Massey',
        phone: '555-555-5555',
      },
      {
        name: 'Phil Massey',
        phone: '555-555-5555',
      },
      {
        name: 'Wyatt West',
        phone: '555-555-5555',
      },
    ];

    this.state = {
      rowHeight: 40,
      useDynamicRowHeight: false,
    };

    this.noRowsRenderer = this.noRowsRenderer.bind(this);
    this.rowClassName = this.rowClassName.bind(this);
  }

  rowRenderer({
    index, // Index of row
    isScrolling, // The List is currently being scrolled
    key, // Unique key within array of rendered rows
    style, // Style object to be applied to row (to position it);
    // This must be passed through to the rendered row element.
  }) {
    const item = this.list[index];

    const content = isScrolling ? (
      '...Scrolling'
    ) : (
      <ContactsListItem item={item} />
    );

    return (
      <div key={key} style={style}>
        {content}
      </div>
    );
  }

  /* eslint-disable class-methods-use-this */
  noRowsRenderer() {
    return <div>You have no contacts.</div>;
  }
  /* eslint-enable class-methods-use-this */

  updateUseDynamicRowHeight(value) {
    this.setState({
      useDynamicRowHeight: value,
    });
  }

  render() {
    const { rowHeight, useDynamicRowHeight } = this.state;
    return (
      <div>
        <AutoSizer disableHeight>
          {({ width }) => (
            <Table
              width={width}
              height={300}
              headerHeight={20}
              // rowHeight={30}
              rowHeight={useDynamicRowHeight ? this.getRowHeight : rowHeight}
              rowCount={this.list.length}
              rowGetter={({ index }) => this.list[index]}
            >
              <Column label="Name" dataKey="name" width={200} />
              <Column width={500} label="Phone" dataKey="phone" />
            </Table>
          )}
        </AutoSizer>
      </div>
    );
  }
}

export default withStyles(s)(ContactsList);
