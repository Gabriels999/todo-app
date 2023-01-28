<template>
  <TaskCard :tasks="tasksList" />
</template>

<script>
import API from "@/helpers/api";
import TaskCard from "@/components/TaskCard.vue";

export default {
  components: {
    TaskCard,
  },
  data: () => ({
    tasksList: [],
  }),
  methods: {
    async getTasks() {
      const response = await API.getTasks();
      this.tasksList = response.data;
    },
  },
};
</script>
