<template>
  <TaskCard :tasks="tasksList" />
</template>

<script>
import API from "@/helpers/apiMock";
import TaskCard from "@/components/TaskCard.vue";

export default {
  components: {
    TaskCard,
  },
  data: () => ({
    tasksList: [],
  }),
  async created() {
    const response = await API.getTasks();
    this.tasksList = response;
  },
  methods: {},
};
</script>
