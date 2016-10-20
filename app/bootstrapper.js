import GetDashboard from './api/DashboardApi';

const applicationBootstrapper = () => {
    GetDashboard(1).then(data => {
        document.getElementById('applicatie').innerText = JSON.stringify(data);
    });
}

export default applicationBootstrapper;
