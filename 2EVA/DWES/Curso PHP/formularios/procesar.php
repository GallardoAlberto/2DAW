<?php

    // si la variable esta definida
    if(isset($_POST['usuario'])){
        
        // y no esta vacia
        if(!empty($_POST['usuario'])){

            // creo la variable con ese nombre
            $user = $_POST['usuario'];
        }
    }

     // si la variable esta definida
     if(isset($_POST['contrasenia'])){
        
        // y no esta vacia
        if(!empty($_POST['contrasenia'])){
            
            // creo la variable con ese nombre
            $password = $_POST['contrasenia'];
        }
    }

    
?>