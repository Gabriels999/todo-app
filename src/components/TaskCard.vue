<template>
  <div>
    <v-card class="mx-auto" v-for="task in tasks" :key="task.id" max-width="400">
      <!-- <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/tasks/docks.jpg"
      > -->
      <!-- </v-img> -->
      <v-card-title>{{ task.title }}</v-card-title>

      <v-card-subtitle class="pb-0">{{ task.group }}</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{ task.state }}</div>

        <div>{{ task.expiration }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text> Editar </v-btn>

        <v-btn color="orange" text> Deletar </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  props: ["tasks"],
  data: () => ({}),
};
</script>
