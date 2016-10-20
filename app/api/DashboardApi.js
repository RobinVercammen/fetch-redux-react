import ApiUrl from './ApiUrl';

const GetDashboard = (userId) => {
    const options = {
        method: 'GET',
        headers: new Headers({ 'x-user-id': userId })
    }
    return fetch(`${ApiUrl}/dashboard`, options).then(result => result.json());
}

export default GetDashboard;
