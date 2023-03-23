const { createApp } = Vue

  createApp({
    data() {
      return {
        numeroMail:'',
        lista:[]
      }
    },
    methods:{
      generatorMail(){
        for(let i=0;i<this.numeroMail;i++){
          axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then(response => {
            this.lista.push({email:response.data.response});
          });
        }
      }
    }
  }).mount('#app')