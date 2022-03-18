import router from "../../router";

const state = {
    person:null,
    people: null
}

const getters = {
    person: state => {
        return state.person
    },
    people: state => {
        return state.people
    },
    isDisabled: (state) => !(state.person.name && state.person.age && state.person.job)

}

const actions = {
    getPeople({commit}) {
        axios.get('/api/people')
            .then(result => {
                commit('setPeople', result.data)
            })
    },

    getPerson({commit, dispatch, actions}, id) {
        axios.get(`/api/people/${id}`)
            .then(result => {
                commit('setPerson', result.data)
            })
    },

    update({}, data) {
        axios.patch(`/api/people/${data.id}`, {
            name: data.name, age: data.age, job: data.job
        })
            .then(result => {
                router.push({name: 'person.show', params: {id: data.id}})
            })
    },

    deletePerson({dispatch, actions}, id) {
        axios.delete(`/api/people/${id}`)
            .then(result => {
                dispatch('getPeople')
            })
    },
    store({}, data) {
        axios.post(`/api/people/`, {name: data.name, age: data.age, job: data.job})
            .then(result => {
                router.push({name: 'person.index',})
            })
    }

}

const mutations = {
    setPeople(state, people) {
        state.people = people

    },
    setPerson(state, person) {
        state.person = person

    }

}

export default {
     state, mutations, getters,actions
}




