<template>
  <div class="uploade-image">
    <!-- Upload Image -->
    <input 
      type="file"
      ref="inputFile"
      accept="image/*"
      @change="onFileSelected($event)"
    />

    <div
      v-if="!url" 
      @click="$refs.inputFile.click()"
      @drop.prevent="addFileDrop($event)"
      @dragover.prevent>

      <b-icon-card-image class="icon"></b-icon-card-image>
      <p>Jogue aqui o arquivo de imagem do seu pastel ou clique para localizar a pasta.</p>
    </div>

    <div
      v-else
      class="image-preview">
      <img :src="url" alt="image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'image-upload',

  props: {
    url: {
      default: null,
    }
  },

  data() {
    return {
      image: null,
    }
  },

  methods: {
    addFileDrop($event) {
      this.upload({ item: $event, type: 'addFile'})
    },

    onFileSelected($event) {
      this.upload({ item: $event, type: 'fileSelect'})
    },

    upload(obj) {
      this.image = null
      if(obj.type === 'addFile') this.image = obj.item.dataTransfer.files[0]
      else this.image = obj.item.target.files[0]
      
      this.$refs.inputFile.value = ''
      const makeUrl = URL.createObjectURL(this.image)
      this.$emit('uploadImage', makeUrl)
    }
  }
}
</script>

<style lang="scss">
.uploade-image {
  input {
    display:none;
  }

  border: 1px solid #E43636;
  border-radius: 10px;
  min-height: 110px;
  padding: 15px;
  cursor: pointer;
  
  .icon {
    font-size: 50px;
    color: #E43636;
  }

  p {
    font-size:16px;
    color: #A03400;
  }

  .image-preview {
    img {
      width: 150px;
      height: 150px;
      border-radius: 10px;
    }
  }
}
</style>