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
  mysqli_query($conn, "INSERT INTO moves (ID, move) VALUES('1', 'h2-h4 Rh8-h5')");
  mysqli_query($conn, "INSERT INTO moves (ID, move) VALUES('2', 'Kb1-c3 Bc8-a6')");

  /*
  // sql to delete a record
  // $sqlDelRow = "DELETE FROM moves WHERE id=3";
  $sqlDelRow = "DELETE FROM moves";

  if ($conn->query($sqlDelRow) === TRUE) {
    echo "Records deleted successfully";
  } else {
    echo "Error deleting record: " . $conn->error;
  }
  */

?>




<?php

  function allMoves() {

    try {
      // ip address; db name; user; pass.
      // root - user name, root - password
      // The PHP Data Objects ( PDO ) extension defines a lightweight, consistent interface for accessing databases in PHP
      $pdo = new PDO('mysql:host=127.0.0.1; dbname=chess', 'root', 'root');
    } catch (PDOException $e) {
      die($e->getMessage());
    };

    // 'select * from moves' - sql kod. prepare - only prepare query (not execute)
    $prepQuery = $pdo->prepare('select * from moves');
    $prepQuery->execute();
    // get all and assign to "class myMoves"
    return $prepQuery->fetchAll(PDO::FETCH_CLASS, 'myMoves');
  };

  class myMoves {
    public $ID;
    public $move;
    public $date_created;
  };


  $varAllMoves = allMoves();


foreach ($varAllMoves as $myMoves) :

    echo "<script>
    document.getElementsByClassName('moves')[0].innerHTML += '" . $myMoves->ID . $myMoves->move . $myMoves->date_created . "<br>';
    </script>";

endforeach;

?>

<!--
<?= "varAllMoves\n"; ?>
<?php print_r ($varAllMoves); ?>
<?php // var_dump($varAllMoves); ?>
-->





<?php echo "<aside class='movies'><div class='list'>"; ?>

<h3>Movies:</h3>
<ul>
  <?php foreach ($varAllMoves as $myMoves) : ?>
    <li>
      <?= $myMoves->ID . $myMoves->move . $myMoves->date_created; ?>
    </li>
  <?php endforeach; ?>
</ul>

<?php
  echo "</div></aside>";

  $conn->close();
?>