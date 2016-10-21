import DashbardComponent from './components/dashboardcomponent';
import React from 'react';
import { render } from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const renderApplication = () => {
    render(<MuiThemeProvider><DashbardComponent /></MuiThemeProvider>, document.getElementById('applicatie'));
}

export default renderApplication;
