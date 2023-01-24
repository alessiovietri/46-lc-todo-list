const { createApp } = Vue;

createApp({

    data() {

        return {
            newTodo: '',
            todos: [
                'Fare i compiti',
                'Fare la spesa',
                'Fare il bucato...'
            ]
        };

    },

    methods: {

        // addTodo() {
        // oppure
        addTodo: function () {

            if(this.newTodo != '' && this.newTodo.length > 3) {
                this.todos.push(this.newTodo);
                this.newTodo = '';
    
                console.log(this.todos);
            }

        },

        // removeTodo(index) {
        // oppure
        removeTodo: function (index) {

            // Rimuovo il todo associato all'icona che ho cliccato
            this.todos.splice(index, 1);

        }

    }

}).mount('#app');




// const arr = [1, 2, 3, 4, 5];

// arr.splice(1, 1);

// console.log(arr);