import GetDashboard from './api/DashboardApi';

const applicationBootstrapper = () => {
    window.onload = () => {
        document.getElementById('load-button').onclick = (ev) => {
            GetDashboard(1).then(data => {
                document.getElementById('applicatie').innerText = JSON.stringify(data);
            });
        }
    }
}

export default applicationBootstrapper;
