var waitingApp = new Vue({
  el: '#patientWaitingApp',
  data: {
    patients:  [
    {
       "PatientGuid": "01",
       "firstName": "Alex",
       "lastName": "Lile",
       "dob": "1996-05-10",
       "sexAtBirth":"M",
       priority: "high"
    },
    {
       "PatientGuid": "02",
       "firstName": "Josh",
       "lastName": "Mawson",
       "dob": "1996-03-20",
       "sexAtBirth":"M",
       priority: "medium"
    }
    {
       "PatientGuid": "03",
       "firstName": "Autumn",
       "lastName": "Triscuit",
       "dob": "1996-07-27",
       "sexAtBirth":"F",
       priority: "low"
     }
  ]
},
  methods: {
      fetchPatients() {
          //fetch('https://randomuser.me/api/')
          fetch('dummy.php')
          .then( response => response.json() )
          .then( json => {waitingApp.patients = json})
          //.then( function(result) {
            //return result.json()
          //} )
          //.catch(/*function goes here*/)
          ;
          thenDoThis();
      }
  },
  created() {
    this.fetchPatients();
  }
})
