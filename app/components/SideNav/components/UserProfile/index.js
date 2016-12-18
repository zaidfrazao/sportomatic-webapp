import React from 'react';

import Avatar from 'material-ui/Avatar';

const styles = {
  content: {
    padding: '20px',
    textAlign: 'center'
  }
};

export default class UserProfile extends React.Component {
  render() {
    return (
      <div style={styles.content}>
        <Avatar src={this.props.url} size={100} />
        <br /><strong>{this.props.type}</strong>
        <br />{this.props.name}
      </div>
    );
  }
}
