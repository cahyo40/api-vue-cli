<template>
    <div>
        <center>
        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
                <title>Login</title>
                <h1>Halaman Login</h1>
                    <div class="form-group">
                        <label for="">Email</label>
                        <input type="email" v-model="input.email" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="">Kata Sandi</label>
                        <input type="password" v-model="input.password" class="form-control">
                    </div>
                    <button style="margin-right:10px;" class="btn btn-primary btn-sm" @click="login()">Masuk</button>

                    <button class="btn btn-warning btn-sm" @click="regis()">Registrasi</button>
                    <br>
                    <br>
                <label class="badge badge-danger">{{notif}}</label>
            </div>
            <div class="col-sm-3"></div>
        </div>
        </center>
    </div>
</template>
<script>
export default {
    data(){
        return{
            input : {email:null,password:null},
            notif : null,
        }
    },
    methods:{
        login(){
        if(this.input.email != null && this.input.password != null){
            var dataLog = this.input;
            this.$http.post('http://localhost/notif/public/api/login',dataLog).then(function(response){
                if(response.body.pesan == "Berhasil Login"){
                    localStorage.id     =   response.body.data.id
                    localStorage.nama   =   response.body.data.nama
                    localStorage.email  =   response.body.data.email
                    this.$router.push('/pengguna')
                }else{
                    this.input = {email:null,password:null},
                    this.notif = response.body.pesan
                }
            })
        }else{
            this.input = {email:null,password:null}
            this.notif = "Harap email dan kata sandi di isi terlebih dahulu"
        }  
        },regis(){
            this.$router.push('/registrasi')
        }
    }
}
</script>