<?php

namespace Controllers;

use Classes\Email;
use Model\Usuario;
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

        $alertas = [];
        $usuario = new Usuario;

        if($_SERVER['REQUEST_METHOD'] === 'POST' ){
            
            $usuario->sincronizar($_POST);
            $alertas = $usuario->validarNuevaCuenta();
            
            if(empty($alertas)){
                
                $existeUsuario = Usuario::where('email', $usuario->email);

                if($existeUsuario){
                    Usuario::setAlerta('error', 'El usuario ya esta registrado');
                    Usuario::getAlertas();
                }else{

                    // Hashear password
                   $usuario->hashPassword();

                   // Eliminar password2
                   unset($usuario->password2);

                   // Generar token 
                   $usuario->crearToken();

                    // Crear un nuevo usuario
                    $resultado = $usuario->guardar();

                    // Enviar email
                    $email = new Email($usuario->email, $usuario->nombre, $usuario->token);
                    $email->enviarConfirmacion();
                    
                    if($resultado){
                        header('Location: /mensaje');
                    }
                    
                }
            }

        }

        // Render de la vista
        $router->render('auth/crear', [
            'titulo' => 'Crear Cuenta',
            'usuario' => $usuario,
            'alertas' => $alertas
        ]);

    }

    public static function olvide(Router $router) {

        if($_SERVER['REQUEST_METHOD'] === 'POST' ){

        }

        //Muestra la vista
        $router->render('auth/olvide', [
            'titulo' => 'Olvide mi Password'
        ]);

    }

    public static function reestablecer(Router $router) {
        
        if($_SERVER['REQUEST_METHOD'] === 'POST' ){

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

        $token = s($_GET['token']);

        if(!$token) header('Location: /');

        // Encontrar al usuario con este token
        $usuario = Usuario::where('token', $token);

        if(empty($usuario)){
            // No se encontró un usuario con ese token
            Usuario::setAlerta('error', 'Token No Válido'); 
        }else{
           // Confirmar cuenta 
           $usuario->confirmado = 1;
           $usuario->token = null;
           unset($usuario->password2);

           // Guardar en la base de datos
           $usuario->guardar();
           Usuario::setAlerta('exito', 'Cuenta Comprobada Correctamente'); 
        }

        $alertas = Usuario::getAlertas();

        
        //Muestra la vista
        $router->render('auth/confirmar', [
            'titulo' => 'Confirmar',
            'alertas' => $alertas
        ]);
    }
}