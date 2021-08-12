<template>
 <v-app>
   <Nav />
  <v-content>
    <v-container>
      <v-row>
        <v-col sm="6" offset-sm="3">
           <pomo />
        </v-col>
      </v-row>
      </v-container>
   </v-content>
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
  Pomo,
  Nav,
  Footer,
}
};
</script>


<style>
</style>
