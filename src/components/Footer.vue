<template>
  <v-footer class="footer">
    <p>&copy; PomoClock</p>
     <div class="social-wrap">
      <a href="https://twitter.com/demakese" target="_blank" class="social"
        ><v-icon color="blue">mdi-twitter</v-icon>
      </a>
      <a href="https://www.instagram.com/wale_dagne" target="_blank" class="social"
        ><v-icon color="#c1558b">mdi-instagram</v-icon></a>
      <a
        href="https://www.linkedin.com/in/walelgn-dagne/"
        target="_blank"
        class="social"
        ><v-icon color="#006192">mdi-linkedin</v-icon>
      </a>
      <a href="https://www.github.com/waledagne"
         target="_blank"
         class="social">
         <v-icon>mdi-github</v-icon>
       </a>
    </div>
  </v-footer>
</template>

<style scoped>
footer {

  width: 100%;
  height: 10vh;
  position: fixed;
  background-image: linear-gradient(to left, #130f40, #db524d);
  top: 93vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.social-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

.social {
  font-size: 1.25rem;
  padding: 0.25rem 0.125rem;
  margin: 0 1rem;
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.63);
  cursor: pointer;
  transition: all 0.25s;
}

.social:hover {
  color: white;
}

p {
  color: white;
  font-size: 1rem;
  font-weight: bold;
}
</style>
