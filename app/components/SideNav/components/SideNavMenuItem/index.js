import React from 'react';

import MenuItem from 'material-ui/MenuItem';

export default class SideNavMenuItem extends React.Component {
  render() {
    return (
      <MenuItem primaryText={this.props.text} leftIcon={this.props.icon} />
    );
  }
}
