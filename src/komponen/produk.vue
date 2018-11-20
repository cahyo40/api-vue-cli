<template>
    <div>
        <title>{{nama}}</title>
        <h1>INI PRODUK</h1>
        <table class="table">
            <tr>
                <th>Nama Produk</th>
                <th>Jumlah Produk</th>
            </tr>
            <tr v-for="produks in produk.data" v-bind:key="produks.id">
                <td>{{produks.nama_produk}}</td>
                <td>{{produks.jumlah}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    methods:{
        getProduk(){
            this.$http.get('http://localhost/notif/public/api/produk').then(function(response){
                this.produk = response.body.data
            });
        },logout(){
            // localStorage.removeItem('nama')
            // localStorage.removeItem('email')
            // localStorage.removeItem('id')
            localStorage.clear()
            this.$router.push('/login')
            
        }
    },data(){
        return{
            produk  :   [],
            nama    :   localStorage.nama,
            id      :   localStorage.id,
            email   :   localStorage.email
        }
    },created(){
        if(this.id == null){
            this.logout()
            this.$router.push('/login')
        }else{
            this.getProduk();
        }
    }
}
</script>

