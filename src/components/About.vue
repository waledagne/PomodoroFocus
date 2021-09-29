<template>
   <div class="about">
    <h1>About <span class="keyword">PomoFocus</span></h1>
    <p>
      PomoFocus is a simple timer that will help you to focus and do tasks 
      in short times and take breaks also so you won't be furstrated by a single task 
    </p>
    <a href="" target="_blank" class="btn"
      >Contact developer</a
    >
  </div>
</template>

<style scoped>
.about {
  width: 80%;
  margin-top: auto;
  margin: 1.5rem auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background-color: rgba(145, 144, 144, 0.159);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.494);
  transition: all 0.25s;
}
.about:hover {
  background-color: rgba(145, 144, 144, 0.076);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.494);
}
p {
  font-weight: bold;
  margin: 1rem 0;
}
a {
  text-decoration: underline;
}
.keyword {
  color: grey;
}
@media screen and (max-width: 600px) {
  .about {
    width: 90%;
  }
}
</style>