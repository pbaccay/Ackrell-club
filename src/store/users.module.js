import { userService } from '../services';

export const users = {
    namespaced: true,
    state: {
        all: {}
    },
    actions: {
        getAll({ commit }) {
            commit('getAllRequest');

            userService.getAll()
                .then(
                    users => commit('getAllSuccess', users),
                    error => commit('getAllFailure', error)
                );
        },
        getStatus({ commit }) {
            commit('getStatusRequest');

            userService.getStatus()
                .then(
                    user => console.log('users module user ' + user),
                    error => console.log('users module ERROR ' + error)
                );
        }		
    },
    mutations: {
        getAllRequest(state) {
            state.all = { loading: true };
        },
        getAllSuccess(state, users) {
            state.all = { items: users };
        },
        getAllFailure(state, error) {
            state.all = { error };
        }
    }
}
