<div class="contenedor">
    <h1>UpTask</h1>
    <p>Crea y administra tus proyectos</p>

    <div class="contenedor-sm">
        <p class="descripcion-pagina">Iniciar Sesión</p>

        <form class="formulario" method="POST" action="/">
            <div class="campo">
                <label for="email">Email</label>
                    <input 
                        type="email"
                        id="email"
                        placeholder="Tu email"
                        name="email"
                    />
            </div>

            <div class="campo">
                <label for="password">Email</label>
                    <input 
                        type="password"
                        id="password"
                        placeholder="Tu Password"
                        name="password"
                    />
            </div>

            <input type="submit" class="boton" value="Iniciar Sesión">

        </form>

        <div class="acciones">
            <a href="/crear">¿Aún no tienes una cuenta? Obtener una</a>
            <a href="/olvide">¿Olvidaste tu password?</a>
        </div>

    </div>  <!--contenedor-sm -->

</div>