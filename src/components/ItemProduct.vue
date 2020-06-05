<template>
 <b-row class="wrapper-item-card d-flex justify-content-center">
  <b-col offset-lx="2" sm="9" xl="9">
    <b-row class="item-header">
      <b-col xl="10" class="item-header-title">
        <p>{{ item.title }}</p>
      </b-col>

      <b-col xl="2" class="price">
        <p>{{ item.price }}</p>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="item-body-description">
        <img :src="item.image.url || url" alt="imagem">
        <p><strong>Sabor:</strong> "{{  item.flavor }}"</p>
        <p><strong>Descrição:</strong> {{ item.description }}</p>
      </b-col>
    </b-row>
  </b-col>
</b-row>
</template>

<script>
export default {
  name: 'item-product',

  data() {
    return {
      url: require('../assets/img/hamburguer.jpg')
    }
  },

  props: {
    item: {},
  },
}
</script>

<style lang="scss">
  .wrapper-item-card {
    padding: 70px 0;
    .item-header {
      background: #E43636 0% 0% no-repeat padding-box;
      border-radius: 20px 20px 0px 0px;
      opacity: 1;
      line-height: 80px;
      height: 80px;

      .item-header-title {
        text-align: left;
        color: #FFCA00;
        font-size:30px;
        padding: 0 50px;
        
        p {
          margin-left:45px;
        }
      }

      .price {
        color: #FFFFFF;
        font-size:26px;
        font-weight: bold;
      }
    }

    .item-body-description {
      background-color: #ffffff;
      min-height: 120px;
      padding: 30px;
      box-shadow: 0px 0px 30px #740B0B45;
      border-bottom-right-radius: 20px;
      border-bottom-left-radius: 20px;

      img {
        position: absolute;
        left: -110px;
        top: -25px;
        height: 180px;
        width: 180px;
        border-radius: 10px;
      }

      p {
        color: #A03400;
        text-align: left;
        font-size: 24px;
        margin-left:60px;
      }
    }
  }
</style>