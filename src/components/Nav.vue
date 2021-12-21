<template>
    <div>
   <nav class="nav">
      <router-link to="/" class="logo"
        ><span>PomoClock</span>
        </router-link>

        <router-link to="/about" class="hover:text-accent" >About</router-link>
       <!--
         <ul class="nav-items">
        <li >
           <v-btn class="nav-item" color="#db524d" @click="dialog=true">
    <v-icon>mdi-cog-outline</v-icon>
          </v-btn>
        </li>
         <li class="nav-item">
                 Home
        </li>
        <router-link to="/about">
        <li class="nav-item">
        About
        </li>
        </router-link>
         <li class="nav-item">
         Contact
        </li>
      </ul>
       -->
    </nav>
    </div>
</template>
<script>
export default {
  data() {
    return {
      dialog:false
    }
  },
}
</script>

<style scoped>
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
  /* color: #fff; */
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