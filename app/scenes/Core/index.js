import React from 'react';

import DefaultAppBar from '../../components/DefaultAppBar';
import SideNav from '../../components/SideNav';
import spacing from 'material-ui/styles/spacing';

const styles = {
  content: {
    marginLeft: spacing.desktopKeylineIncrement * 4
  }
};

export default class Core extends React.Component {
  render() {
    return (
      <div>
        <div style={styles.content}>
          <DefaultAppBar />
        </div>
        <SideNav />
      </div>
    );
  }
}
