import React from 'react';
import GetDashboard from '../api/DashboardApi';
import Store from '../store';

export default class DashboardComponent extends React.Component {
    componentWillMount() {
        this.state = { dashboard: 'loading' };
        GetDashboard(1).then(jsondata => {
            Store.dispatch({ type: 'load_dashboard', data: jsondata });
        });

        Store.subscribe(() => {
            this.setState({ dashboard: JSON.stringify(Store.getState().dashboard) });
        });
    }
    render() {
        return (
            <h1>{this.state.dashboard}</h1>
        )
    }
}
