// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.


Vue.config.devtools = true;

const app = new Vue(
    {

        el: `#root`,

        data: {

            userMessage: "red",

            userName: prompt("Qual è il tuo nome?"),

            userSurname: prompt("Qual è il tuo cognome?"),

            myImage: "https://picsum.photos/246/146",
        },

        methods: {
            changeColor:function(event) {
                event.preventDefault();
                if (this.userMessage === `blue`) {
                    this.userMessage = `red`;
                } else {
                    this.userMessage = `blue`;
                }
            },
        },
    }
)