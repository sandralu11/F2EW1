<template>
  <button @click="showAlert">了解更多</button>
</template>

<script>
export default {
  methods: {
    showAlert() {
      // Use sweetalert2
        this.$swal({
          title: '紫坪',
          showCloseButton: true,
          showConfirmButton:false,
          html:
          'You can use <b>bold text</b>, ' +
          '<a href="//sweetalert2.github.io">links</a> ' +
          'and other HTML tags',
          imageUrl: 'https://unsplash.it/400/200',
          imageWidth: 400,
          imageHeight: 300,
          footer: '<a href="">Why do I have this issue?</a>',
          imageAlt: 'Custom image',
        });
    },
  },
};
</script>