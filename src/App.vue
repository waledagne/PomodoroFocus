<template>
 <v-app>
  <v-content>
    <v-container>
      <v-row>
        <v-col sm="6" offset-sm="3">
           <pomo />
        </v-col>
      </v-row>
      </v-container>
   </v-content>
 </v-app>
</template>

<script>
import Pomo from "./components/Pomo.vue";

export default {
  name: 'App',

components: {
  Pomo,
}
};
</script>


<style>

</style>
