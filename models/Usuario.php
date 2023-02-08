<?php

namespace Model;

class Usuario extends ActiveRecord {

    protected static $tabla = 'usuarios';
    protected static $columnasDB = ['id', 'nombre', 'email', 'password', 'token', 'confirmado'];

    public function __construct($args = [])
    {
        $this->id = $args['id'] ?? null;
        $this->nombre = $args['nombre'] ?? '';
        $this->email = $args['email'] ?? '';
        $this->password = $args['password'] ?? '';
        $this->token = $args['token'] ?? '';
        $this->confirmado = $args['confirmado'] ?? '';
    }

    public function validarNuevaCuenta() {
        
        if(!$this->nombre){
            self::$alertas['error'][] = 'El Nombre de Usuario es obligatorio';
        }
        
        if(!$this->email){
            self::$alertas['error'][] = 'El Email de Usuario es obligatorio';
        }

        return self::$alertas;
    }

}