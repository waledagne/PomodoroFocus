<template>
 <v-app>
   <Nav />
  <v-content>
    <v-container>
      <v-row>
        <v-col sm="6" offset-sm="3">
         <router-view></router-view>
        </v-col>
      </v-row>
         
      </v-container>
   </v-content>  
   <br>
    <Footer /> 
 </v-app>
</template>

<script>
import Pomo from "./components/Pomo.vue";
import Nav from "./components/Nav.vue"
import Footer from "./components/Footer.vue";

export default {
  name: 'App',

components: {
  Nav,
  //Pomo,
  Footer,
},
data() {
  return {
    dialog:false
  }
},
};
</script>

<style>
nav {
  width: 100%;
  height: 60px;
  background-image: linear-gradient(to right, #130f40, #db524d);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}
.nav-items {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-item {
  color: white;
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  background-color: rgba(255, 255, 255, 0.083);
  border-radius: 5px;
  box-shadow: 0 0 5px #000000;
  transition: all 0.25s;
}

.nav-item:hover,
.nav-item:active {
  background-color: rgba(255, 255, 255, 0.193);
}

.nav-link {
  color: #fff;
  padding: 1rem 1rem;
}

.logo {
  font-size: 1.5rem;
  color: #fff;
  font-weight: bolder;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}
</style>
