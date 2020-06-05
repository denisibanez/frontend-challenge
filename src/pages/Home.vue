<template>
  <div class="wrapper-body">
    <ValidationObserver
      v-slot="{ valid }"
      ref="observer"
      tag="form"
      @submit.prevent="submit()"
    >
      <b-container fluid>
        <!-- Header-->
        <b-row class="wrapper-header">
          <b-col class="wrapper-header-logo">
            <img src="../assets/img/logotipo.svg" alt="logo-pastel">
          </b-col>
        </b-row>

        <div class="paralax-container">
          <img src="../assets/img/pastel-paralax.png" alt="paralax" v-parallax="0.2">
        </div>
        
        <!-- Body -->
        <b-row>
          <b-container>
            <b-col>
              <!-- Form -->
              <div class="wrapper-form">
                <div class="wrapper-form-container">
                  <b-row class="form-header">
                    <b-col xl="8">
                      <p>Monte aqui o seu cardápio. O que está esperando?</p>
                    </b-col>

                    <b-col xl="4" class="d-flex justify-content-center check-wrapper">
                      <span>Comida</span> 
                      <b-form-checkbox v-model="checked" name="check-button" switch>
                      </b-form-checkbox>
                      <span>Bebida</span>
                    </b-col>
                  </b-row>

                  <b-row class="form-body">
                    <b-col class="form-body-col">
                      <div class="fix-position">
                        <b-row>
                          <b-col xl="5">
                            <validation-provider
                              :rules="{ required:true, min: 3, max: 60, checkLetters: true }"
                              v-slot="{ errors }"
                              class="text-left">
                              <b-form-input
                                id="title"
                                placeholder="Título do pedido"
                                class="mb-3"
                                v-model="form.title"
                                :maxlength="60"
                                :minlength="3"
                                :type="'text'"
                              ></b-form-input>
                              <span class="error">{{ errors[0] }}</span>
                            </validation-provider>
                          </b-col>

                          <b-col xl="5">
                            <validation-provider
                              :rules="{ required:true, min: 3, max: 60, checkLetters: true  }"
                              v-slot="{ errors }"
                              class="text-left">
                              <b-form-input
                                id="flavor"
                                type="text"
                                placeholder="Sabor"
                                class="mb-3"
                                v-model="form.flavor"
                                :maxlength="60"
                                :minlength="3"
                              ></b-form-input>
                              <span class="error">{{ errors[0] }}</span>
                            </validation-provider>
                          </b-col>

                          <b-col xl="2">
                            <validation-provider
                              rules="required|checkValue"
                              v-slot="{ errors }"
                              class="text-left">
                              <b-form-input
                                id="price"
                                type="text"
                                placeholder="R$"
                                class="mb-3"
                                v-model="form.price"
                                v-money="form.price !== null ? money : null"
                              ></b-form-input>
                              <span class="error">{{ errors[0] }}</span>
                            </validation-provider>
                          </b-col> 
                        </b-row>

                        <b-row class="mb-4">
                          <b-col>
                            <b-form-textarea
                              id="textarea"
                              placeholder="Descrição"
                              rows="3"
                              max-rows="6"
                              type="text"
                              v-model="form.description"
                            ></b-form-textarea>
                          </b-col>
                        </b-row>

                        <b-row class="mb-4">
                          <b-col>
                            <image-upload
                              @uploadImage="updateUrl($event)"
                              :url="form.image.url"></image-upload>
                          </b-col>
                        </b-row>
                      </div>

                      <div class="fix-btn-position">
                        <b-row class="d-flex justify-content-center mb-3">
                          <b-col>
                            <b-button
                              class="button-clean"
                              @click="cleanForm()">
                              Limpar
                            </b-button>
                            <b-button
                              class="button-sign-up"
                              :disabled="!valid"
                              @click="submit()">
                              Cadastrar
                            </b-button>
                          </b-col>
                        </b-row>
                      </div>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </b-col>
          </b-container>
        </b-row>

        <!-- Separator -->
        <b-row class="separator">
          <b-col>
            <h1>
              <span>Veja como será apresentado ao cliente</span>
            </h1>
          </b-col>
        </b-row>
        
        <!-- Item Product -->
        <div v-if="items.length">
          <item-product
            v-for="(item, index) in items"
            :key="index"
            :id="index"
            :item="item">
          </item-product>
        </div>

        <b-row class="d-flex justify-content-center" v-else>
          <b-col>
            <p class="not-found-items">Nenhum pedido feito.</p>
          </b-col>
        </b-row>
      </b-container>
    </ValidationObserver> 
  </div>
</template>

<script>
import { VMoney } from 'v-money'

import ImageUpload from '@/components/ImageUpload'
import ItemProduct from '@/components/ItemProduct'

export default {
  name: 'index',

  components: {
    ImageUpload,
    ItemProduct,
  },

  directives: { 
    money: VMoney
  },

  data () {
    return {
      checked: false,
      money: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        suffix: '',
        precision: 2,
        masked: false /* doesn't work with directive */
      },
      form: {
        title: '',
        flavor: '',
        price: null, 
        description:'',
        image: {
          url: null
        },
        typeFood: 'Bebida',
        updateAt: null
      },
      items: []
    }
  },

  methods: {
    updateUrl($event) {
      this.form.image.url = $event
    },

    cleanForm() {
      this.form = {
        title: '',
        flavor: '',
        description:'',
        price: null,
        image: {
          url: null
        },
        typeFood: 'Bebida'
      }

      this.checked = false
    },

    async submit() {
      const isValid = await this.$refs.observer.validate()
      if (isValid) {
        this.form.updateAt = new Date()
        this.items.push(this.form)
        this.sortItems()
        this.cleanForm()
      }
    },

    sortItems() {
      this.items = this.items.sort((a, b) => new Date(b.updateAt) - new Date(a.updateAt))
    }
  },

  watch: {
    checked(value) {
      this.form.typeFood = !value ? 'Bebida' : 'Comida'
    }  
  }
}

</script>

<style scoped lang="scss">
.wrapper-body {
  .wrapper-header {
    min-height: 547px;
    background-repeat: no-repeat;
    background-image: url('../assets/img/wave.png');

    .wrapper-header-logo {
      padding: 35px;
      margin-top: 50px;

      img {
        width: 50%;
        max-width: 736px;
        z-index: 999;
        position: relative;
      }
    }
  }

  .paralax-container {
    position: absolute;
    z-index: 9999;
    top: 30px;
    left: -59px;
    height: 450px;
    width: 450px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .wrapper-form {
    min-height: 40vh;

    .wrapper-form-container {
      padding: 50px;
      position: absolute;
      width: 100%;
      top: -200px;
        
      &:after {
        content: '';
        width: 403px;
        height: 325px;
        background: url('../assets/img/pasteis-img.png') no-repeat;
        top: -100px;
        right: 5px;
        position: absolute;
        display: block;
        z-index: 1;
      }

      .form-header {
        background: #FFCA00 0% 0% no-repeat padding-box;
        border-radius: 20px 20px 0px 0px;
        opacity: 1;
        height: 90px;
        z-index: 10;
        position: relative;

        p {
          font-size: 24px;
          color: #A03400;
          font-weight: bold;
          line-height: 75px;
        }

        span {
          color: #A03400;
        }

        .check-wrapper {
          height: 90px;
          line-height: 75px;

          .custom-control {
            margin-top: 28px;
            width: 65px;
          }
        }
      }

      .form-body {
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 0px 30px #740B0B45;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        opacity: 1;
        position: relative;
        height: 400px;
        z-index: 11;

        .form-body-col {
          .fix-position {
            position: absolute;
            top: -20px;
            padding-right: 30px;
            width: 100%;
          }
        }

        .fix-btn-position {
          position: absolute;
          bottom: -45px;
          width: 100%;

          button {
            border-radius: 30px;
            opacity: 1;
            border: 0;
            min-width: 200px;
            height: 60px;
            text-transform: uppercase;
            font-weight: bold;
            margin: 0 15px;

            &.button-clean {
              background: #E43636 0% 0% no-repeat padding-box;
              color: #ffffff;
            }

            &.button-sign-up {
              background: #FFCA00 0% 0% no-repeat padding-box;
              color: #A03400;

              &:disabled {
                background-color: #b3b3b3;
                color: #ffffff;
              }
            }
          }
        }
      } 
    }
  }

  .separator {
    h1 {
      color: #A03400;
      font-size: 24px;
      display: flex;
      line-height: 5px;
      padding: 0;

      span {
        padding: 0 25px;
        min-width: 250px;
        margin: 0 auto;
      }

      &:after, &:before {
        content: '';
        width: 30%;
        height: 1px;
        display: block;
        border: 1px solid #A03400;
      }
    }
  }

  .not-found-items {
    color: #A03400;
    width: 100%;
    padding: 50px;
    height: 50px;
    font-size: 24px;
    line-height: 5px;
  }

  .error {
    color: #A03400;
    font-size: 14px;
    position: relative;
    top: -15px;
  }

  .text-left {
    float: left;
    width: 100%;
  }
}

@media(max-width:1200px) {
  .wrapper-body{
    .paralax-container {
      top: 120px;
      left: -75px;
      height: 350px;
      width: 350px;
    }

    .wrapper-form {
      min-height: 45vh;
      .wrapper-form-container  {
        .form-body {
          height: 550px;
        }
      }
    }

    .separator {
      h1 {
        span {
          margin: 0 auto;
          width: 100%;
        }
      }
    }
  }
}

@media(max-width:768px) {
  .wrapper-body{
    .paralax-container {
      top: 100px;
      left: -75px;
      height: 350px;
      width: 350px;
    }

    .wrapper-form {
      min-height: 60vh;
      .wrapper-form-container  {
        .form-body {
          height: 550px;
        }
      }
    }

    .separator {
      h1 {
        span {
          margin: 0 auto;
          width: 100%;
        }
      }
    }
  }
}

@media(max-width:576px) {
  .wrapper-body{
    .paralax-container {
      display: none;
    }

    .wrapper-header {
      .wrapper-header-logo {
         img {
           width: 100%;
         }
      }
    }

    .wrapper-form {
      min-height: 80vh;
      .wrapper-form-container  {
        .form-body {
          height: 550px;

          .fix-btn-position {
            bottom: -160px;
            button {
              margin:15px 0;
            }
          }
        }
      }
    }

    .separator {
      h1 {
        line-height: 25px;
        padding: 70px 0 30px;
        span {
          margin: 0 auto;
          width: 100%;
        }

         &:after, &:before {
          display: none;
        }
      }
    }
  }
}
</style>
