<?php 

namespace Proyecto;

use Composer\Autoload\ClassLoader;
use Model\ActiveRecord;

class Proyecto extends ActiveRecord {
    protected static $table = 'proyectos';
    protected static $columnasDB = ['id', 'proyecto', 'url', 'propietarioId'];

    public function __construct($args = [])
    {
        $this->id = $args['id'] ?? null;
        $this->proyecto = $args['proyecto'] ?? '';
        $this->url = $args['url'] ?? '';
        $this->propietarioId = $args['propietarioId'] ?? '';
    }

}