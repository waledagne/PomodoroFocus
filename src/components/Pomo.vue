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
          class="pa-5
          d-flex flex-column justify-center align-center"
          flat>

            <h1 class="time">00:00</h1>

        <div class="button-group">
            <v-btn left class="primary">
                <v-icon>mdi-play-circle-outline</v-icon>
                     Start
            </v-btn>
            <v-btn left class="error">
                <v-icon>mdi-stop-circle-outline</v-icon>
                Pause
                </v-btn>
            <v-btn left >
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
            timerType: 0,
            tabTitles: ['Pomodoro','ShortBreak','LongBreak']
        }
    },
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