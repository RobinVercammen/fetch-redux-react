import { createStore } from 'redux';

const reducer = (state, action) => {
    switch (action.type) {
        case 'load_dashboard':
            return Object.assign({}, state, { dashboard: action.data });
        default:
            return state;
    }
}

const store = createStore(reducer, {});

export default store;
