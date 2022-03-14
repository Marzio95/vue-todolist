const app = new Vue({
    el: '#root',
    data: {
        arrayToDo: [
            {
                nome: 'fare i compiti',
                done: false,
            },
            {
                nome: 'fare esercizio js',
                done: false,
            },
            {
                nome: 'programmare tutto il giorno',
                done: false,
            },
        ]

    },
    methods: {
        removeTodo(index) {
            this.arrayToDo.splice(index, 1)
        },

    }
})    