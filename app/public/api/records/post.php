<?php

<<<<<<< HEAD
// 0. Validate my data
use Ramsey\Uuid\Uuid;
$guid = Uuid::uuid4()->toString();

//$_GET
//$_POST
//super globals. GET and POST are arrays. Set of key-value pairs
=======
// Step 0: Validation
use Ramsey\Uuid\Uuid;
$guid = Uuid::uuid4()->toString(); // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a
>>>>>>> upstream/blue-10-07

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
<<<<<<< HEAD
if (isset($_GET['guid'])) {
  $stmt = $db->prepare(
    'SELECT * FROM Patient
    WHERE patientGuid = ?'
  );
  $stmt.execute($_GET['guid']);
}
else {
  $stmt = $db->prepare(
    'SELECT * FROM Patient'
  );
  $stmt.execute();
}


=======
>>>>>>> upstream/blue-10-07
$stmt = $db->prepare(
  'INSERT INTO Patient
    (patientGuid, firstName, lastName, dob, sexAtBirth)
  VALUES (?, ?, ?, ?, ?)'
);
<<<<<<< HEAD
$stmt->execute([
    $guid,
    $_POST['patientGuid'],
    $_POST['firstName'],
    $_POST['lastName']
    $_POST['dob']
    $_POST['sexAtBirth']
]);
$patients = $stmt->fetchAll();

// patientGuid VARCHAR(64) PRIMARY KEY,
// firstName VARCHAR(64),
// lastName VARCHAR(64),
// dob DATE DEFAULT NULL,
// sexAtBirth CHAR(1) DEFAULT ''
=======

$stmt->execute([
  $guid,
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['dob'],
  $_POST['sexAtBirth']
]);
>>>>>>> upstream/blue-10-07

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../records/?guid='.$guid);
