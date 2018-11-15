<template>
    <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-10">
            <form>
                <div class="form-group">
                    <label>Merk</label>
                    <input class="form-control" type="text" v-model="nambah.merk">
                </div>
                <div class="form-group">
                    <label>Model</label>
                    <input class="form-control" type="text" v-model="nambah.model">
                </div>
                <div class="form-group">
                    <label>Name</label>
                    <input class="form-control" type="text" v-model="nambah.nama">
                </div>
                <div class="form-group">
                    <label for="">Year</label>
                    <input type="text" v-model="nambah.year" class="form-control">
                </div>
                <button role="submit" @click="addData()" class="btn btn-primary">Simpan</button>
            </form>
        </div>
        <div class="col-sm-1"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            nambah :{
                merk :null,
                model : null,
                nama : null,
                year :null
            }            
        }
    },
    methods:{
        addData(){
            var ini = this;
            this.$http.post('https://vizyan.000webhostapp.com/api/car/addCar.php',ini.nambah).then(function(response){
                console.log('nambah 1 gan');
            });
        },
    },
    created(){

    }
}
</script>

