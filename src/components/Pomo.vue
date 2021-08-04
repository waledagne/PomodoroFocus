<template>
    <v-card class="mt-8">
        <v-tabs v-model="timerType" grow>
            <v-tab v-for="tab in tabTitles" :key="tab">
                {{ tab }}
            </v-tab>
           <v-tabs-items v-model="timerType">
      <v-tab-item>
        <v-card
          color="basil"
          class="pa-6
          d-flex flex-column justify-center align-center"
          flat>

            <h1 class="time">{{displayMinutes}}:{{displaySeconds}}</h1>

        <div class="button-group">
            <v-btn left class="primary" @click="start">
                <v-icon>mdi-play-circle-outline</v-icon>
                     Start
            </v-btn>
            <v-btn left class="error" @click="pause">
                <v-icon>mdi-stop-circle-outline</v-icon>
                Pause
                </v-btn>
            <v-btn left @click="reset">
                <v-icon>mdi-restart</v-icon>
                Reset
                </v-btn>
       </div>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
        </v-tabs>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            timer : null,
            totalSeconds: 25 * 60,
            timerType: 0,
            tabTitles: ['Pomodoro','ShortBreak','LongBreak']
        }
    },

    computed: {
        displayMinutes() {
            const minutes = Math.floor(this.totalSeconds / 60);
            return this.formatTime(minutes);
        },

        displaySeconds () {
            const seconds = this.totalSeconds % 60;
            return this.formatTime(seconds)
        }
    },

    methods: {
        formatTime(time){
            if(time < 10){
                return '0' + time
            }
            return time.toString();
        },

        start() {
            this.pause()
            this.timer = setInterval(() =>{
             this.totalSeconds -= 1
            },1000)
        },

        pause(){
            clearInterval(this.timer)
        },

        reset(){
            this.pause,
            this.totalSeconds = 25 * 60
        }
    }
}
</script>

 <style scoped>
 .v-card{
     width:600px;
 }

 .time{
     text-align: center;
     font-weight: 300;
     font-size: 80px;
 }
 .v-btn{
     margin:0 3px;
 }
 </style>