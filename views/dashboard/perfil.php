<?php include_once __DIR__ . '/header-dashboard.php'; ?>

<div class="contenedor-sm">
    <?php include_once __DIR__ . '/../templates/alertas.php';  ?>

    <form action="" class="formulario" method="POST">
        <div class="campo">
            <label for="nombre">Nombre</label>
            <input
                type="text"
                value="<?= $usuario->nombre; ?>"
                name="nombre"
                placeholder="Tu Nombre"
            />
        </div>
        <div class="campo">
            <label for="email">Email</label>
            <input
                type="email"
                value="<?= $usuario->email; ?>"
                name="email"
                placeholder="Tu Email"
            />
        </div>

        <input type="submit" value="Guardar Cambios" >

    </form>

</div>

<?php include_once __DIR__ . '/footer-dashboard.php'; ?>