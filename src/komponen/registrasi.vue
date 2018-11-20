<template>
    <div>
        <title>Registrasi</title>
        <h1>Halaman Registrasi</h1>
        <div class="form-group">
            <label for="">Nama</label>
            <input type="text" v-model="profil.nama" class="form-control">
        </div>
        <div class="form-group">
            <label for="">Email</label>
            <input type="email" v-model="profil.email" class="form-control">
        </div>
        <div class="form-group">
            <label for="">Alamat</label>
            <input type="text" v-model="profil.alamat" class="form-control">
        </div>
        <div class="form-group">
            <label for="">Kata Sandi : <label v-show="this.panjang<8" class="badge badge-danger">Panjang Kata Sandi minimal 8</label></label>
            <input type="password" @keyup="lihat();" v-model="profil.password" class="form-control">
            
        </div>
        <div class="form-group">
            <label for="">Ulangi Kata Sandi :  <label v-show="this.profil.password!=this.profil.pass2" class="badge badge-danger">{{notif2}}</label></label>
            <input type="password" @keyup="cek()" v-model="profil.pass2" class="form-control">
        </div>
        <button class="btn btn-success" @click="simpan()" >Simpan</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            profil  :   {nama:null,email:null,alamat:null,password:null,pass2:null},
            notif   :   null,
            notif2  :   null,
            panjang :   0
        }
    },methods:{
        simpan(){
           if(this.profil.nama == null || this.profil.email == null || this.profil.alamat == null || this.profil.password == null){
               this.notif = "Masih ada form yang kosong"
               alert(this.notif)
           }else{
               if(this.profil.password.length <8){
                   this.notif = "Password Minimal 8 Karakter"
                   alert(this.notif)
               }else{
                    if(this.profil.password == this.profil.pass2){
                        
                        var inp = this.profil;
                        this.$http.post('http://localhost/notif/public/api/registrasi',inp).then(function(response){
                            this.notif = response.body.pesan
                            alert(this.notif)
                            this.profil  =   {nama:null,email:null,alamat:null,password:null,pass2:null}
                            this.$router.push('/login')
                        });
                    }else{
                        this.notif = "Pasangan Kata Sandi Berbeda",
                        alert(this.notif)
                        this.profil.password    =   null,
                        this.profil.pass2       =   null
                    }
               }
           }
        },
        lihat(){
            this.panjang = this.profil.password.length
        },cek(){
            if(this.profil.password != this.profil.pass2){
                this.notif2 = "Belum Sama"
            }else{
                this.notif2 = "Sudah Sama"
            }
        }
    }
}
</script>

