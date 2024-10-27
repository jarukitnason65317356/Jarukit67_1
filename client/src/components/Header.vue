<template>
  <div>
    <div class="nv-navbar">
      <ul class="nav">
        <li><router-link :to="{ name: 'blogs' }">Blogs</router-link></li>
        <li><router-link :to="{ name: 'users' }">Users</router-link></li>
        <li><router-link :to="{ name: 'vegetablefruitall' }">vegetablefruitall</router-link></li>
        <!--li><router-link :to="{ name: 'comments' }">Comments</router-link></li-->
        <!-- if isLogin is true, show logout menu. otherwise, show login menu-->
        <li><router-link :to="{ name: 'login' }">Login</router-link></li>  
      </ul>
    </div>
  </div>
</template>
<script>

export default {

  methods:{
    isLogin(){
      return this.$store.getters.isUserLoggedIn;
    },
    logout(){
      this.$store.dispatch('logout');
      this.$router.push({name: 'login'});
    }
  }
};
</script>
<style scoped>
.nv-navbar {
  background-color: rgb(22, 175, 55);
  width: 100%;
  height: 20px;
  padding: 10px 0px 10px 0px;
}
.nv-navbar .nav {
  list-style: none;
  margin: 0;
  padding: 0;
  float: left;
}
.nv-navbar .nav li {
  float: left;
}
.nv-navbar .nav li a {
  padding: 10px;
  text-decoration: none;
  color: gray;
  font-weight: bold;
}
.nv-navbar .nav li a:hover {
  padding: 10px;
  text-decoration: none;
  color: darkslategrey;
}
.nv-navbar .nav li a.router-link-active {
  background-color: rgba(228, 108, 34, 0.803);
  color: darkslategrey;
}
.clearfix {
  clear: left;
}

.form-container {
  background-color: #e938db; /* Light gray background */
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
<style>
body {
  background-color: rgb(137, 228, 134);
}
</style>


