<template>
    <div>
        <title>{{nama}}</title>
        <div class="row">
            <div class="col-sm-10"></div>
            <div class="col-sm-2">
                <button class="btn btn-danger btn-sm" @click="logout()">Keluar</button>
            </div>
        </div>
       <h1>
           Selamat datang {{nama}}
       </h1>
       <a href="#/pengguna/produk">Daftar Produk</a>
    </div>
</template>
<script>
export default {
    data(){
        return{
            id      : localStorage.id,
            nama    : localStorage.nama,
            email   : localStorage.email,
        }
    },
    created(){
        if(this.id == null){
            this.logout()
        }else{
            
        }
    },methods:{
        logout(){
            localStorage.clear()
            this.$router.push('/login')
            
        },
        produks(){
            this.$router.push('/pengguna/produk')
        }
    }
}
</script>

