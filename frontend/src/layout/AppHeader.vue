<template>
    <nav>
        <div class="nav-wrapper  teal lighten-1">
            <a href="#" class="brand-logo">Controle de Estoque</a>
            <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/products">Produtos</router-link></li>
            </ul>
            <ul class="side-nav" id="mobile-demo">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/products">Produtos</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {}
</script>