import React from 'react';

import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import SideNavMenuItem from './components/SideNavMenuItem';
import UserProfile from './components/UserProfile';
import AnalyticsIcon from 'material-ui/svg-icons/av/equalizer';
import DashboardIcon from 'material-ui/svg-icons/action/dashboard';
import HourLoggingIcon from 'material-ui/svg-icons/action/schedule';
import InvoicingIcon from 'material-ui/svg-icons/action/payment';
import PersonalInfoIcon from 'material-ui/svg-icons/social/person';
import ReportsIcon from 'material-ui/svg-icons/content/content-paste';
import SchedulingIcon from 'material-ui/svg-icons/action/event';
import ScoringIcon from 'material-ui/svg-icons/image/edit';
import SettingsIcon from 'material-ui/svg-icons/action/settings';

const styles = {
  logo: {
    float: 'center'
  }
};

export default class SideNav extends React.Component {
  render() {
    return (
      <Drawer open={true}>
        <AppBar showMenuIconButton={false}>
          <img style={styles.logo} src='./img/logo.png' />
        </AppBar>
        <UserProfile
          url='img/profpic.jpg'
          type='Institution'
          name='Northcliff High School'
        />
        <Divider />
        <SideNavMenuItem text='Dashboard' icon={<DashboardIcon />} />
        <SideNavMenuItem text='Scheduling' icon={<SchedulingIcon />} />
        <SideNavMenuItem text='Hour logging' icon={<HourLoggingIcon />} />
        <SideNavMenuItem text='Invoicing' icon={<InvoicingIcon />} />
        <SideNavMenuItem text='Reports' icon={<ReportsIcon />} />
        <SideNavMenuItem text='Analytics' icon={<AnalyticsIcon />} />
        <SideNavMenuItem text='Scoring' icon={<ScoringIcon />} />
        <Divider />
        <SideNavMenuItem text='Personal info' icon={<PersonalInfoIcon />} />
        <SideNavMenuItem text='Settings' icon={<SettingsIcon />} />
      </Drawer>
    );
  }
}
