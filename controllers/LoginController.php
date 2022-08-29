<?php

namespace Controllers;

class LoginController {

    public static function login() {
        echo "desde login controller";

        if($_SERVER['REQUEEST_METHOD'] === 'POST' ){

        }
    }

    public static function logout() {
        echo "desde logout";

    }

    public static function crear() {
        echo "desde crear";

        if($_SERVER['REQUEEST_METHOD'] === 'POST' ){

        }
    }
    
}