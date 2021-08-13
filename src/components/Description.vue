<template>
    <div>
        <div class="heroimage container">
        <h1 class="heroimage__title">
          An online Pomodoro Timer to boost your productivity
        </h1>
        <!-- <image src="/images/heroimage2.png" class="heroimage__img"></image> -->
      </div>

      <div class="catchcopy container">
        <h2 class="catchcopy__header">What is Pomofocus?</h2>
        <p class="catchcopy__text">
          Pomofocus is a customizable pomodoro timer that works on
          desktop & mobile browser. The aim of this app is to help you
          focus on any task you are working on, such as study,
          writing, or coding. This app is inspired by
          <a
            href="https://francescocirillo.com/pages/pomodoro-technique"
            target="_blank"
            rel="noopener"
            >Pomodoro Technique</a
          >
          which is a time management method developed by Francesco
          Cirillo.
        </p>
      </div>

      <div class="pomodoro container">
        <h2 class="catchcopy__header">What is Pomodoro Technique?</h2>
        <p class="catchcopy__text">
          The Pomodoro Technique is created by Francesco Cirillo for a
          more productive way to work and study. The technique uses a
          timer to break down work into intervals, traditionally 25
          minutes in length, separated by short breaks. Each interval
          is known as a pomodoro, from the Italian word for 'tomato',
          after the tomato-shaped kitchen timer that Cirillo used as a
          university student. -
          <a
            href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
            target="_blank"
            rel="noopener"
            >Wikipedia</a
          >
        </p>
      </div>

      <div class="pomodoro container">
        <h2 class="catchcopy__header">
          How to use the Pomodoro Timer?
        </h2>
        <ol class="features__list-ol">
          <li>
            <strong>Start timer</strong> and focus on the task for 25
            minutes
          </li>
          <li>
            <strong>Take a break</strong> for 5 minutes when the alarm
            ring
          </li>
          <li>
            <strong>Iterate</strong> 3-5 until you finish the tasks
          </li>
        </ol>
      </div>

      <!-- <div class="features container">
        <h2 class="catchcopy__header">Features</h2>
        <ul class="features__list">
          <li>
            <strong>Responsive design</strong> that works with desktop
            and mobile
          </li>
          <li>
            <strong>Color transition</strong> to switch moods between
            work time and rest time
          </li>
          <li>
            <strong>Audio notification</strong> at the end of a timer
            period
          </li>
          <li>
            <strong>Customizable timer</strong> intervals to suit your
            preference
          </li>
        </ul>
      </div> -->
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

@font-face {
  font-family: 'ArialRounded';
  font-display: swap;
  src: url('/fonts/ArialRounded/Arial_Rounded_MT.ttf')
    format('truetype');
}
@font-face {
  font-family: 'ArialRounded';
  font-display: swap;
  src: url('/fonts/ArialRounded/Arial-Rounded-MT-Bold.ttf')
    format('truetype');
  font-weight: bold;
}

body {
  margin: 0;
  font-family: 'ArialRounded', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

  font-weight: 300;
  -webkit-tap-highlight-color: transparent;
  position: relative;
}

h1,
h2 {
  margin-top: 34px;
  display: inline-block;
  padding-bottom: 4px;
  margin-bottom: 4px;
  line-height: 1.4em;
}

h1,
h2,
h3,
h4 {
  color: hsl(357, 50%, 22%);
  margin-top: 1.8rem;
  margin-bottom: 0em;
}

h1 {
  font-size: 34px;
}

 .heroimage {
  margin-top: 30px;
}

.heroimage__title {
  display: block;
  margin-top: 50px;
  margin-bottom: 20px;
}

@media only screen and (max-width: 680px) {
  .heroimage__title {
    margin-top: 20px;
    margin-bottom: 0px;
  }
  .header__brand_title {
    font-size: 20px;
  }
  .header__brand_icon {
    width: 20px;
  }
}

.heroimage__img {
  width: 220px;
}
</style>>
