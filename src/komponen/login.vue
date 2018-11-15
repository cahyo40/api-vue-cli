<template>
    <div>
            <div class="form-group">
                <label for="">Email</label>
                <input type="email" v-model="input.email" class="form-control">
            </div>
             <div class="form-group">
                <label for="">Password</label>
                <input type="password" v-model="input.password" class="form-control">
            </div>
            <button @click="login()">Login</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            input : {email:null,password:null}
        }
    },
    methods:{
        login(){
            var dataLog = this.input;
            this.$http.post('http://localhost/notif/public/api/login',dataLog).then(function(response){
                console.log(response);
            });
        }
    }
}
</script>

