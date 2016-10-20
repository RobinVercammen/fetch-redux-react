import ApiUrl from './ApiUrl';

const GetDashboard = (userId) => {
    var options = {
        method: 'GET',
        headers: new Headers({ 'x-user-id': userId })
    }
    return fetch(`${ApiUrl}/dashboard`, options).then(result => result.json());
}

export default GetDashboard;
