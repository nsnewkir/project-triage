<?php

// 0. Validate my data

<<<<<<< HEAD
//$_GET
//$_POST
//super globals. GET and POST are arrays. Set of key-value pairs

=======
>>>>>>> upstream/blue-10-07
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO PatientVisit
    (patientGuid, visitDescription, priority)
<<<<<<< HEAD
  VALUES (?, ?, ?)'
);
$stmt->execute([
    $_POST['patientGuid'],
    $_POST['visitDescription'],
    $_POST['priority']
]);
$patients = $stmt->fetchAll();

// patientGuid VARCHAR(64) PRIMARY KEY,
// firstName VARCHAR(64),
// lastName VARCHAR(64),
// dob DATE DEFAULT NULL,
// sexAtBirth CHAR(1) DEFAULT ''
=======
  VALUES (?,?,?)'
);
$stmt->execute([
  $_POST['patientGuid'],
  $_POST['visitDescription'],
  $_POST['priority']
]);

// TODO: Error checking?!
>>>>>>> upstream/blue-10-07

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../waiting/');
