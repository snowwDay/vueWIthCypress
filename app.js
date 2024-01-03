const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        name: '',
        confirmedName: ''
      };
    },
    computed:{
        welcome(){
            if (this.name === ''){
              return '';
            }
            else{
             return 'Hello ' + this.name; 
            }
            
          }
  
  
  
    },
    methods:{
      add(num){
        this.counter = this.counter + num;
      },
      reduce(num){
        this.counter= this.counter - num;
      },
      setName(event, lastName){
        this.name = event.target.value + ' ' + lastName;
      },
      submitForm(){
        alert('Submitted')
      },
      confirmInput(){
        this.confirmedName = this.name;
      },
      resetInput() {
        this.name = '';
      }
  
    }
  });
  
  app.mount('#events');
  