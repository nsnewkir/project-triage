var waitingApp = new Vue({
  el: '#patientWaitingApp',
  data: {
    person:  [
    {

    }
  ]
},
  methods: {
      fetchPatients() {
          fetch('https://randomuser.me/api/')
          .then( response => response.json() )
          .then( json => {waitingApp.person = json.results[0]})
          //.then( function(result) {
            //return result.json()
          //} )
          //.catch(/*function goes here*/)
          ;
          //thenDoThis();
      }
  },
  created() {
    this.fetchPatients();
  }
})
