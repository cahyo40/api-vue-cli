<template>
    <div>
        <h1>Home</h1>
        <table class="table">
             <tr v-for="cie in waduh.slice(0,10)" v-bind:key="cie.id">
                <td >
                    {{cie.kecamatan}}
                </td>
                <td>
                    {{cie.kelurahan}}
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    data(){
       return{
           waduh :[]
       }
    },
    methods:{
        getData(){
            this.$http.get('https://kodepos-2d475.firebaseio.com/kota_kab/k110.json?print=pretty').then(function(response){
                console.log(response.body);
                var th = this;
                th.waduh = response.body;
            });
        }
    },
    created(){
        this.getData();
    }
}
</script>

