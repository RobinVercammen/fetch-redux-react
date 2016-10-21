import GetDashboard from './api/DashboardApi';
import Store from './store';
import InsertWeightEntry from './api/WeightApi';


import renderApplication from './renderApplication';

renderApplication();

const applicationBootstrapper = () => {
    window.onload = () => {
        Store.subscribe(() => {
            document.getElementById('applicatie-1').innerHTML = `
            <pre>
                ${JSON.stringify(Store.getState().dashboard || {})}
            </pre>
            <br>
            <pre>
                ${JSON.stringify(Store.getState().weight || {})}
            </pre>`;
        });
        document.getElementById('load-button').onclick = (ev) => {
            GetDashboard(1).then(data => {
                Store.dispatch({ type: 'load_dashboard', data });
            });
        }

        document.getElementById('insert-weight-form').onsubmit = (ev) => {
            ev.preventDefault();
            const date = ev.target['insert-weight-form-date'].value;
            const weight = Number(ev.target['insert-weight-form-weight'].value);
            InsertWeightEntry(1, { date, weight }).then(data => Store.dispatch({ type: 'weight_inserted', data }));
        }
    }
}

export default applicationBootstrapper;
