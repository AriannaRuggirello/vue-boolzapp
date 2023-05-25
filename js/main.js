
var { createApp } = Vue

createApp({
    data(){
        return{
            // prop attiva in quel momento
            activeMessage :0,
            // prop per la creazione del nuovo mex quando lo si invia
            newMessage: '',
            // prop necessaria per inserire nell'input da filtrare
            searchText: '',
            // click per far apparire il menu dropdown nel mex
            showMenu : null,
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/michele.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/fabio.png',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/samuele.png',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/alessandroB.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/alessandroL.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/claudia.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/federico.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/davide.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
    
        
        }   
    },
    methods:{
        // Click sul contatto mostra la conversazione del contatto cliccato

    mainChatUser(idx){
        // collegando l'indice in html definisco che l'elemento attivo in quel momento è uguale all'indice
        this.activeMessage = idx;
    },
    sendNewMessage(){
        // Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde

        // se il messaggio che stai creando non è vuoto
        if(this.newMessage != ''){
            // allora aggiungo il messaggio 'push' in coda ai messages creando un nuovo obj con message creato da noi e status sent
            this.contacts[this.activeMessage].messages.push({date: '10/01/2020 15:30:55',message: this.newMessage, status: 'sent'});
            // risposta dal computer con un tempo impostato creando un obj con message fisso e status received
            setTimeout(()=> {
                this.contacts[this.activeMessage].messages.push({date: '10/01/2020 15:30:55',message: 'ok', status: 'received'});
            },1000
            )
        }
        // stampo il mex
        this.newMessage='';
    },
    showMenuDropdown(indice){
        
        if(this.showMenu === indice)
        {
            this.showMenu = null;
        }else{
            this.showMenu = indice;
            
        }
      },
    deleteMessage(indice){
        
         this.contacts[this.activeMessage].messages.splice(indice,1);
     },
    } ,
    // una computed property semplifica il calcolo di valori basati su altri dati reattivi e si assicura che i risultati siano sempre aggiornati in modo automatico.
    computed: {
        // funzione  necessaria alla ricerca
        filteredSearchContacts() {
            // var uguale al testo di ricerca filtrato in testo minuscolo e senza spazi
          const filterText = this.searchText.toLowerCase().trim();
        //   se la var filtrata non è presente allora mi stamperà l'array contacts originale 
          if (!filterText) {
            return this.contacts;
          }
        //   altrimenti l'array filtrato recupererà il valore filtrato cercando di vedere se è incluso nell'array originale
          return this.contacts.filter(contact =>
            contact.name.toLowerCase().includes(filterText)
          );
        }
      },
    
}).mount('#app')



// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)







