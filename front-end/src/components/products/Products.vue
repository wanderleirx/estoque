<template>
    <div class="row">
        <div class="col l12">
            <h3>Produtos</h3>
            <div class="divider"></div>
             <formProducts></formProducts> 
             <tableProducts></tableProducts> 
        </div>
    </div>
</template>

<script>

    import tableProducts from './tableProducts.vue'
    import formProducts from './formProducts.vue'

    export default{
        components:{
            tableProducts, formProducts
        }
        
    }
</script>
