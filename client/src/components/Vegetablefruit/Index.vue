<template>
    <div>
      <h1>Get All Users</h1>
      <div><button v-on:click="navigateTo('/vegetablefruit1/create')">สร้างข้อมูล</button></div>
      <hr>
      <div v-if="vegetablefruitall.length">
        <div><b>จำนวนผลไม้:</b> {{ vegetablefruitall.length }}</div>
        <div v-for="vegetablefruit1 in vegetablefruitall" v-bind:key="vegetablefruit1.id">
          <div><b>id:</b> {{ vegetablefruit1.id }}</div>
          <div><b>ชื่อ</b> {{ vegetablefruit1.name }} </div>
          <div><b>สี:</b> {{ vegetablefruit1.color }}</div>
          <div><b>ใบเลี้ยง:</b> {{ vegetablefruit1.cotyledon }}</div>
          <div><b>แหล่งเพาะปลูก:</b> {{ vegetablefruit1.cultivationsite }}</div>
          <!--div><b>type:</b> {{ user.type }}</div-->
          <div>
            <button v-on:click="navigateTo('/vegetablefruit1/'+vegetablefruit1.id)">ดูข้อมูล</button>
            <button v-on:click="navigateTo('/vegetablefruit/edit/'+vegetablefruit1.id)">แก้ไขข้อมูล</button>
            <button v-on:click="deleteVegetablefruit(vegetablefruit1)">ลบข้อมูล</button>
          </div>
          <hr>
        </div>
      </div>
      <div><button v-on:click="logout">Logout</button></div>
  
    </div>
  </template>
  
  <script>
  import VegetablefruitService from "@/services/VegetablefruitService";
  export default {
    data(){
      return {
       vegetablefruitall : []
      }
    },
    async created() {
      try{
        this.vegetablefruitall = (await VegetablefruitService.index()).data;
      }catch(err){
        console.log(err);
      }
    },
    methods:{
      logout(){
        this.$store.dispatch('setToken',null)
        this.$store.dispatch('setUser',null)
        this.$router.push({
          name: 'login'
        })
      },
      navigateTo(route){
        this.$router.push(route);
      },
      async deleteVegetablefruit(vegetablefruit1){
        let result = confirm("คุณต้องการลบข้อมูลใช่หรือไม่?");
        if(result){
          try{
            await VegetablefruitService.delete(vegetablefruit1);
            this.refreshData();
  
          }catch(err){
            console.log(err);
          }
        }
      },
      async refreshData(){
        try{
          this.vegetablefruitall = (await VegetablefruitService.index()).data;
        }catch(err){
          console.log(err);
        }
      }
    }
  };
  </script>
  
  <style></style>
  