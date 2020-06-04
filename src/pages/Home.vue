<template>
  <div class="wrapper-body">
    
    <b-container fluid>
      <!-- Header-->
      <b-row class="wrapper-header">
        <b-col class="wrapper-header-logo">
          <img src="../assets/img/logo.svg" alt="logo-pastel">
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
                          <b-form-input
                            id="title"
                            class="mb-3"
                            placeholder="Título do pedido"
                          ></b-form-input>
                        </b-col>

                        <b-col xl="5">
                          <b-form-input
                            id="type"
                             class="mb-3"
                            placeholder="Sabor"
                          ></b-form-input>
                        </b-col>

                        <b-col xl="2">
                          <b-form-input
                            id="price"
                             class="mb-3"
                            placeholder="R$"
                          ></b-form-input>
                        </b-col> 
                      </b-row>

                      <b-row class="mb-4">
                        <b-col>
                          <b-form-textarea
                            id="textarea"
                            v-model="text"
                            placeholder="Descrição"
                            rows="3"
                            max-rows="6"
                          ></b-form-textarea>
                        </b-col>
                      </b-row>

                      <b-row class="mb-4">
                        <b-col>
                          <div class="uploade-image">
                            <b-icon-card-image class="icon"></b-icon-card-image>
                            <p>Jogue aqui o arquivo de imagem do seu pastel ou clique para localizar a pasta.</p>
                          </div>
                        </b-col>
                      </b-row>
                    </div>

                    <div class="fix-btn-position">
                      <b-row class="d-flex justify-content-center mb-3">
                        <b-col>
                          <b-button class="button-clean">Limpar</b-button>
                          <b-button class="button-sign-up">Cadastrar</b-button>
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
      <b-row class="wrapper-item-card d-flex justify-content-center">
        <b-col offset-lx="2" sm="9" xl="9">
          <b-row class="item-header">
            <b-col xl="10" class="item-header-title">
              <p>Suco de goiaba</p>
            </b-col>

            <b-col xl="2" class="price">
              <p>R$ 5,00</p>
            </b-col>
          </b-row>

          <b-row>
            <b-col class="item-body-description">
              <img src="../assets/img/images.png" alt="">
              <p><strong>Sabor:</strong> "Goiaba"</p>
              <p><strong>Descrição:</strong> Um mero suco de goiaba. Tem sachet de açucar no balcão...</p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      checked: true
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
    min-height: 30vh;

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
        height: 350px;
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
            }
          }
        }

        .uploade-image {
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
}

@media(max-width:1024px) {
  .wrapper-body{
    .paralax-container {
      top: 120px;
      left: -75px;
      height: 350px;
      width: 350px;
    }

    .wrapper-form {
      min-height: 35vh;
      .wrapper-form-container  {
        .form-body {
          height: 430px;
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
      min-height: 45vh;
      .wrapper-form-container  {
        .form-body {
          height: 430px;
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

@media(max-width:500px) {
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
          height: 460px;

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
