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
          text:"<i class='bx bxs-map'></i>臺東縣951綠島鄉溫泉路256號",
          html:"<div>"+
                    "<i style='color:#08A6BB;font-size:14px' class='bx bxs-map'></i><span style='color:#08A6BB;font-size:14px'>臺東縣951綠島鄉溫泉路167號</span>"+
                    "<p>紫坪位在綠島最南方，從附近的步道，可通往海岸邊的潟湖。此處是由珊瑚礁構成的潮池，也是綠島著名的潟湖所在地，有全綠島最完整的潟湖地形以及珊瑚礁植群，更有茂盛的植物水芫花和珍貴的陸寄居蟹。</p>"+
                "</div>",
          imageUrl: 'https://unsplash.it/400/200',
          imageWidth: 400,
          imageHeight: 300,
          footer: " <i style='color:#08A6BB;' class='bx bx-time-five' ></i> <span style='color:#08A6BB;'>全天候開放</span>"+"&emsp;"
                  +"<a style='color:#08A6BB;' href='tel:02-1154-7789'><i class='bx bx-phone' ></i>02-1154-7789</a>"+"&emsp;"
                  +"<i style='color:#08A6BB;' class='bx bx-list-ul' ></i> <span style='color:#08A6BB;'>自然風景類</span>",
          imageAlt: 'Custom image',
        });
    },
  },
};
</script>