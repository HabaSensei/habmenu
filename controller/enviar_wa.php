<?php 
  include '../library/consulSQL.php';

 $id = $_POST['array'];
  
 $arreglo = json_decode($id);

 $equipo = array ($id);


var_dump($equipo);

  // consultasSQL::InsertSQL("pedidos", 
  //                           "id,
  //                            num_orden, 
  //                            establecimiento,
  //                            datos_json ", 
  //                           "'',
  //                           'asd',
  //                           'asdd',
  //                           '$id'
  //                        ");
   
           
?>