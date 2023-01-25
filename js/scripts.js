/*

Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco di ogni item una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

*/

const { createApp } = Vue;

createApp({

    data() {

        return {
            
            newTodo: '',
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ]

        };

    },

    methods: {

        checkDone: function (todo) {
            // if (todo.done == true) {
            if (todo.done) {
                return 'todo-done';
            }
            else {
                return '';
            }
        },
        addTodo: function () {
            // 1a versione
            // const newObjTodo = {
            //     text: this.newTodo,
            //     done: false
            // };

            // this.todos.push(newObjTodo);

            // 2a versione
            this.todos.push({
                text: this.newTodo,
                done: false
            });

            this.newTodo = '';
        },
        removeTodo: function (index) {
            this.todos.splice(index, 1);
        }

    }

}).mount('#app');