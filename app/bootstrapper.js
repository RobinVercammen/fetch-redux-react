import GetDashboard from './api/DashboardApi';
import Store from './store';
import InsertWeightEntry from './api/WeightApi';


import renderApplication from './renderApplication';

renderApplication();

const applicationBootstrapper = () => {
    window.onload = () => {
        document.getElementById('load-button').onclick = (ev) => {
            GetDashboard(1).then(data => {
                Store.dispatch({ type: 'load_dashboard', data });
            });
        }
    }
}

export default applicationBootstrapper;
