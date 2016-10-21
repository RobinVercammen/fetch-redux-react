import DashbardComponent from './components/dashboardcomponent';
import React from 'react';
import { render } from 'react-dom';

const renderApplication = () => {
    render(<DashbardComponent />, document.getElementById('applicatie'));
}

export default renderApplication;
