<template>
  <button @click="showAlert">了解更多</button>
</template>

<script>
export default {
  methods: {
    showAlert() {
      // Use sweetalert2
       this.$swal('Hello Vue world!!!');
    },
  },
};
</script>