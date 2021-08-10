<template>

   <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
     <v-card>
      A dialog
     </v-card>
        </v-dialog>
   </v-row>
</template>


<script>
export default {
    props: {
        dialog: {
            type: Boolean,
            requied: true
        }
    }
}
</script>