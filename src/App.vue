<template>
 <v-app>
   <Nav />
  <v-content>
    <v-container>
      <v-row>
        <v-col sm="8" offset-sm="3">
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
import Nav from "./components/Nav.vue"
import Footer from "./components/Footer.vue";

export default {
  name: 'App',

components: {
  Nav,
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
body{
  margin: 0;
  padding: 0;
 
}

</style>
