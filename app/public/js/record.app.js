var recordApp = new Vue({
  el: '#patientRecordApp',
  data: {
    patient:  [
    {

    }
  ]
},
  methods: {
      fetchPatients() {
          //fetch('https://randomuser.me/api/')
          fetch('dummy.php')
          .then( response => response.json() )
          .then( json => {recordApp.patient = json.results[0]})
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
