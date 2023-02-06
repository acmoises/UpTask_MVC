<?php

namespace Controllers;

use MVC\Router;

class LoginController {

    public static function login(Router $router) {

        if($_SERVER['REQUEEST_METHOD'] === 'POST' ){
            
        }

        // Render de la vista

        $router->render('auth/login', [
            'titulo' => 'Iniciar Sesión'
        ]);
    }

    public static function logout() {
        echo "desde logout";

    }

    public static function crear(Router $router) {

        if($_SERVER['REQUEEST_METHOD'] === 'POST' ){

        }

        // Render de la vista
        $router->render('auth/crear', [
            'titulo' => 'Crear Cuenta'
        ]);

    }

    public static function olvide(Router $router) {

        if($_SERVER['REQUEEST_METHOD'] === 'POST' ){

        }

        //Muestra la vista
        $router->render('auth/olvide', [
            'titulo' => 'Olvide mi Password'
        ]);

    }

    public static function reestablecer(Router $router) {
        
        if($_SERVER['REQUEEST_METHOD'] === 'POST' ){

        }

        //Muestra la vista
        $router->render('auth/reestablecer', [
            'titulo' => 'Reestablecer PAssword'
        ]);
    }

    public static function mensaje(Router $router) {
        
        //Muestra la vista
        $router->render('auth/mensaje', [
            'titulo' => 'Cuenta Creada Exitosamente'
        ]);
    }
    
    public static function confirmar(Router $router) {
        
        //Muestra la vista
        $router->render('auth/confirmar', [
            'titulo' => 'Confirmar'
        ]);
    }
}