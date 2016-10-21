import DashbardComponent from './components/dashboardcomponent';
import React from 'react';
import { render } from 'react-dom';
import InsertWeightComponent from './components/insertWeightComponent';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends React.Component {
    render() {
        return (
            <div>
                <DashbardComponent />
                <InsertWeightComponent />
            </div>
        );
    }
}

const renderApplication = () => {
    render(<MuiThemeProvider><App /></MuiThemeProvider>, document.getElementById('applicatie'));
}

export default renderApplication;
