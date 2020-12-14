<?php
  define("DB_SERVER", "localhost");
  define("DB_USER", "root");
  define("DB_PASSWORD", "root");
  define("DB_NAME", "chess");

  $conn = new mysqli(DB_SERVER, DB_USER, DB_PASSWORD, DB_NAME);
  if($conn->connect_error) {
    echo "DB connecting error.\n";
    echo 'Error: ' . $conn->connect_error . '\n';
    exit();
  }

  /* echo "INSERT INTO `moves`(`move`) VALUES ('Kb1-c3 Bc8-a6')"; */
  // mysqli_query($conn, "INSERT INTO moves (move) VALUES('h2-h4 Rh8-h5')");

  // /*
  // sql to delete a record
  // $sqlDelRow = "DELETE FROM moves WHERE id=3";
  $sqlDelRow = "DELETE FROM moves";

  if ($conn->query($sqlDelRow) === TRUE) {
    echo "Records deleted successfully";
  } else {
    echo "Error deleting record: " . $conn->error;
  }
  // */

?>




<?php

  // function visosUzduotys($conn) {
  function allMoves() {


  try {
    // ip adres; db pavadinima; user; pass.
    // root - vartotojo vardas, '' - slaptazodis
    $pdo = new PDO('mysql:host=127.0.0.1; dbname=chess', 'root', 'root');
  } catch (PDOException $e) {
    die($e->getMessage());
  }



    // 'select * from ndarbai' - sql kodas. prepare - tik paruose uzklausa (ne ivykdo)
    $teiginys = $pdo->prepare('select * from moves');
    $teiginys->execute();
    // istraukti viska ir talpinti i musu "class myMoves"
    return $teiginys->fetchAll(PDO::FETCH_CLASS, 'myMoves');
  }


  class myMoves {
    public $ID;
    public $move;
    public $date_created;
  }




  // $namuDarbai = visosUzduotys($conn);
  $varAllMoves = allMoves();

?>



<h3>Mano chess:</h3>
<ul>
  <?php foreach ($varAllMoves as $myMoves) : ?>
    <li>
      <?= $myMoves->ID . $myMoves->move . $myMoves->date_created; ?>
    </li>
  <?php endforeach; ?>
</ul>


<?php
  $conn->close();


?>