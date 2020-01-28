export default {
    state: {
        requestList: []
    },
    actions: {
        async fetchCities({ commit }, data) {
            try {
                const res = await fetch(`https://distanceto.p.rapidapi.com/get?car=false&foot=false&route=${data}`, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "distanceto.p.rapidapi.com",
                        "x-rapidapi-key": "9730a97a1amsh70a78c55a7854b5p1afea3jsnd47afd9e95c9"
                    }
                })
                const request = await res.json()
                request['date'] = new Date().toJSON().slice(5, 16).replace(/-/g, '/').replace(/T/g, ' в ')
                commit('updateRequestList', request)
                // console.log(request)
            } catch (e) {
                throw e
            }
        }
    },
    mutations: {
        updateRequestList(state, request) {
            state.requestList = [...state.requestList, request]
            console.log(state.requestList)
        },
        clearRequestList(state) {
            state.requestList = []
        }
    },
    getters: {
        getAllRequests(state) {
            return state.requestList
        }
    }
}