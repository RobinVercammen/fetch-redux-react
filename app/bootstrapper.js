import GetDashboard from './api/DashboardApi';
import Store from './store';

const applicationBootstrapper = () => {
    window.onload = () => {
        Store.subscribe(() => {
            document.getElementById('applicatie').innerText = JSON.stringify(Store.getState().dashboard);
        });

        document.getElementById('load-button').onclick = (ev) => {
            GetDashboard(1).then(data => {
                Store.dispatch({ type: 'load_dashboard', data });
            });
        }
    }
}

export default applicationBootstrapper;
