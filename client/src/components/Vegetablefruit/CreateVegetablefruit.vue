<template>
  <div>
    <h1>Create Vegetablefruit</h1>
    <form v-on:submit.prevent="createVegetablefruit">
      <div>Name: <input type="text" v-model="vegetablefruit1.name"></div>
      <div>Color: <input type="text" v-model="vegetablefruit1.color"></div>
      <div>Cotyledon: <input type="text" v-model="vegetablefruit1.cotyledon"></div>
      <div>CultivationSite: <input type="text" v-model="vegetablefruit1.cultivationsite"></div>
      <div><button type="submit">create </button></div>
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
  methods: {
    async createVegetablefruit() {
      try {
        await VegetablefruitService.post(this.vegetablefruit1);
        this.$router.push('/vegetablefruitall');
      } catch (err) {
        console.log(err);
      }

    }
  }

}
</script>

<style>
.form-container {
  background-color: #f3f3f3; /* Light gray background */
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  margin: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Optional: Style form elements */
form div {
  margin-bottom: 12px;
}

button {
  background-color: #4CAF50; /* Green */
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049; /* Darker green on hover */
}
</style>