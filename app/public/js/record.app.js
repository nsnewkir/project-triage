var patientRecordsApp = new Vue({
  el: '#patientRecordsApp',
  data: {
    patients: [],
    recordPatient: {}
  },
  methods: {
    fetchPatients() {
<<<<<<< HEAD
      fetch('api/records/index.php')
=======
      fetch('api/records/')
>>>>>>> upstream/blue-10-07
      .then(response => response.json())
      .then(json => { patientRecordsApp.patients = json })
    },
    handleSubmit(event) {
<<<<<<< HEAD
      // fetch(url, {
      //   method: 'post',
      //   data: this.recordPatient
      // })
      // .then( ... )
      //this.patients.push( this.recordPatient );

      fetch('api/records/post.php', {
        method:'POST',
        body: JSON.stringify(this.patient)
=======
      fetch('api/records/post.php', {
        method:'POST',
        body: JSON.stringify(this.recordPatient),
>>>>>>> upstream/blue-10-07
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
<<<<<<< HEAD
      .then( json => {patientRecordsApp.patients.push = json[0] })
      .catch( err => {
        console.error('RECORD POST ERROR');
        console.error(err);
      });
=======
      .then( json => { patientRecordsApp.patients.push( json[0] ) })
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
     });
>>>>>>> upstream/blue-10-07

      this.handleReset();
    },
    handleReset() {
      this.recordPatient = {
        firstName: '',
        lastName: '',
        dob: '',
        sexAtBirth: ''
      }
    },
    handleRowClick(patient) {
      patientTriageApp.patient = patient;
    }
  }, // end methods
  created() {
    this.handleReset();
    this.fetchPatients();
  }
});
