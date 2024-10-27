<template>
    <div>
      <h1>Edit Vegetablefruit</h1>
     
        <form v-on:submit.prevent = "editVegetablefruit">
        <div>Name: <input type="text" v-model="vegetablefruit1.name"></div>
        <div>Color: <input type="text" v-model="vegetablefruit1.color"></div>
        <div>Cotyledon: <input type="text" v-model="vegetablefruit1.cotyledon"></div>
        <div>CultivationSite: <input type="text" v-model="vegetablefruit1.cultivationsite"></div>
      
        <div><button type="submit">Edit </button></div>
      </form>
    </div>
  </template>
  
  <script>
     import VegetablefruitService from '../../services/VegetablefruitService';
  export default {
    data(){
      return {
        vegetablefruit1: {
          name: '',
          color: '',
          cotyledon: '',
          cultivationsite: '',
          status: 'active'
        }
      }
    },
    async created(){
      try{
        var vegetablefruitId = this.$route.params.vegetablefruitId;
        this.vegetablefruit1 = (await VegetablefruitService .show(vegetablefruitId)).data;
      }catch(err){
        console.log(err);
      }
    },
    methods:{
      async editUser(){
        try{
          await VegetablefruitService.put(this.vegetablefruit1);
          this.$router.push('/vegetablefruitall');
        }catch(err){
          console.log(err);
        }
      }
    }
  }
  </script>
  
  <style>
  
  </style>