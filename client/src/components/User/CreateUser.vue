<template>
  <div>
    <h1>Create User</h1>
    <form v-on:submit.prevent = "createUser">
      <div>name: <input type="text" v-model="user.name"></div>
      <div>lastname: <input type="text" v-model="user.lastname"></div>
      <div>email: <input type="text" v-model="user.email"></div>
      <div>password: <input type="password" v-model="user.password"></div>
      <div><button type="submit">create user</button></div>
    </form>
  </div>
</template>

<script>
import UsersService from '../../services/UsersService';
export default {
  data(){
    return {
      user: {
        name: '',
        lastname: '',
        email: '',
        password: '',
        status: 'active'
      }
    }
  },
  methods:{
    async createUser(){
      try{
        await UsersService.post(this.user);
        this.$router.push('/users');
      }catch(err){
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