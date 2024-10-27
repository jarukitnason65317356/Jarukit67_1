<template>
    <div>
      <h1>Show Vegetablefruit</h1>
      <p>ID: {{ vegetablefruit1.id }} </p>
      <p>Name: {{ vegetablefruit1.name }} </p>
      <p>Color: {{ vegetablefruit1.color }} </p>
      <p>Cotyledon: {{ vegetablefruit1.cotyledon }}</p>
      <p>CultivationSite: {{ vegetablefruit1.cultivationsite }}</p>
     
    </div>
  </template>
  
  <script>
 import VegetablefruitService from '../../services/VegetablefruitService';
  
  export default { 
    data(){
      return {
        vegetablefruit1: {}
      }
    },
    async created() {
      try{
        var vegetablefruitId = this.$route.params.vegetablefruitId;
        this.vegetablefruit1 = (await VegetablefruitService.show(vegetablefruitId)).data;
      }catch(err){
        console.log(err);
      }
      
      // console.log(this.user);
    },
    
  
  }
  </script>
  
  <style>
  
  </style>