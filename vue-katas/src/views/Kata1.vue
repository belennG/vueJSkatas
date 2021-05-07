<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel v-for="(trivia, index) in trivias" :key="index">
        <v-expansion-panel-header>
          {{ trivia.question }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ trivia.correct_answer }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  data() {
    return {
      trivias: [],
    };
  },
  async mounted() {
    const response = await axios.get("https://opentdb.com/api.php?amount=10");
    this.trivias = response.data.results;
  },
});
</script>

<style scoped></style>
