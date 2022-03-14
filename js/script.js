const app = new Vue({
    el: '#root',
    data: {
        newTodo:'',
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

        addTodo() {
            this.arrayToDo.push(this.newTodo = {nome: this.newTodo 
            , done: false});
            this.newTodo='';
        }

    }
})    