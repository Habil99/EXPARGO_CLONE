<template>
  <div class="container-fluid contact mt-5 mb-5 p-0">
    <div
      class="alert alert-success alert-dismissible fade show"
      role="alert"
      v-show="showAlert"
    >
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        @click="closeAlert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <i class="fa fa-check"></i>
      <strong>Mesajınız uğurla göndərildi</strong>
      <div
        class="progress-bar progress-bar-animated"
        role="progressbar"
        :style="progress"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <div
      class="alert alert-danger alert-dismissible fade show"
      role="alert"
      v-show="showWrong"
    >
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        @click="closeWrong"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <i class="fas fa-exclamation-circle text-danger"></i>
      <strong>Əməliyyat uğursuz oldu !</strong>
    </div>
    <div class="container p-2">
      <div class="row">
        <div class="col text-center font-weight-bolder">
          <p class="title">ƏLAQƏ</p>
        </div>
      </div>
      <div class="row my-3">
        <div class="col-md-6">
          <div
            class="brand d-flex align-items-center justify-content-center w-100"
          >
            <img src="../assets/favicon.png" alt="" />
          </div>
          <div class="info my-3 text-center">
            <p>
              Email ünvanı:
              <a href="mailto:abiyevhabil3@gmail.com">abiyevhabil3@gmail.com</a>
            </p>
            <p>Servislərimiz ilə tanışlıq və fikirləriniz üçün bizə yazın.</p>
          </div>
          <form
            action=""
            method="post"
            ref="form"
            @input="checkValidation"
            @submit.prevent="sendEmail"
          >
            <div class="form-group my-3">
              <label>Email ünvanınız</label>
              <input
                v-model="email"
                type="email"
                class="form-control"
                aria-describedby="emailHelpId"
                placeholder="Email..."
                name="email"
                autocomplete="off"
                autofocus
                required
              />
              <small
                v-show="!isValidMail"
                id="emailHelpId"
                class="form-text text-danger"
                >{{ errMsg }}
                <i class="fas fa-exclamation-circle text-danger"></i>
              </small>
              <label class="mt-3">Mesaj</label>
              <textarea
                class="form-control"
                name="message"
                id=""
                rows="3"
                minlength="5"
                aria-valuemin="5"
                required
                v-model="message"
              ></textarea>
              <small
                v-show="!isValidText"
                id="textAreaHelpId"
                class="form-text text-danger"
                >{{ errMsgTextArea }}
                <i class="fas fa-exclamation-circle text-danger"></i>
              </small>
              <button
                type="submit"
                ref="submit"
                class="btn btn-md btn-block my-3 submitBtn"
                disabled
              >
                Təsdiqlə
              </button>
            </div>
          </form>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col">
              <span class="faqTitle my-1">
                <i class="fas fa-exclamation-circle"></i>
                FAQ ( Suallar & Cavablar )
              </span>
              <hr class="my-3" />
              <div class="accordion" id="accordionExample">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                      <button
                        class="btn btn-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Sifarişlər neçə günə gəlir?
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapseOne"
                    class="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      Bağlama xarici anbarımıza çatdıqdan 4-7 gün sonra gəlir.
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingTwo">
                    <h2 class="mb-0">
                      <button
                        class="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Bağlama birləşdirmək olur?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      Təəssüf ki, belə bir xidmətimiz yoxdur.
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingThree">
                    <h2 class="mb-0">
                      <button
                        class="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Həcmli bağlamalar necə hesablanır?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      Bütün növ bağlamalar fiziki çəki əsasında hesablanır.
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingFour">
                    <h2 class="mb-0">
                      <button
                        class="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        ID kodu nədir?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseFour"
                    class="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      ID kodu hesabınızın sağ küncündəki istifadəçi kodunuzdur.
                      Bu kod həmçinin xarici ünvanınızın sonunda da göstərilib.
                      Sifariş verərkən ID kodunu qeyd etmək mütləqdir.
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingFive">
                    <h2 class="mb-0">
                      <button
                        class="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Maye sifariş edə bilərik?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseFive"
                    class="collapse"
                    aria-labelledby="headingFive"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      Bəli, maye sifariş edə bilərsiniz. Qeyd edək ki, mayelər
                      xüsusi reys və qablaşdırılmalarda göndərilir deyə onlar
                      fərqli tariflərlə hesablanır və fərqli günlərdə Bakıya
                      göndərilir.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script>
import Footer from "@/components/Footer";
import emailjs from "emailjs-com";

export default {
  components: {
    Footer,
  },
  data() {
    return {
      message: "",
      email: "",
      errMsg: "",
      errMsgTextArea: "",
      isValidMail: true,
      isValidText: true,
      showAlert: false,
      showWrong: false,
      progressValue: 100,
    };
  },
  methods: {
    checkValidation() {
      if (!this.validEmail(this.email)) {
        this.isValidMail = false;
        this.errMsg = "Mailinizin düzgünlüyünü yoxlayın";
      } else if (this.message.trim().length <= 5) {
        this.isValidText = false;
        this.errMsgTextArea = "Mesaj boş buraxıla bilməz";
        this.$refs.submit.disabled = true;
      } else {
        this.isValidMail = true;
        this.isValidText = true;
        this.errMsg = "";
        this.errMsgTextArea = "";
        this.$refs.submit.disabled = false;
      }
    },
    validEmail(email) {
      let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (email.match(regex)) {
        return true;
      } else {
        return false;
      }
    },
    sendEmail(e) {
      emailjs
        .sendForm(
          "service_73l693d",
          "template_sq7coeh",
          e.target,
          "user_BxvPuEr4Lp12vbarIApzq"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
            this.showAlert = true;
            setInterval(() => {
              this.progressValue--;
            }, 23);
            setTimeout(() => {
              this.showAlert = false;
              clearInterval(this.progressValue);
            }, 3500);
          },
          (error) => {
            console.log("FAILED...", error);
            this.showWrong = true;
            setTimeout(() => {
              this.showWrong = false;
            }, 3500);
          }
        );
      e.target.reset();
    },
    closeAlert() {
      this.showAlert = false;
    },
    closeWrong() {
      this.showWrong = false;
    },
  },
  computed: {
    progress() {
      return {
        width: this.progressValue + "%",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/_accordion";
form {
  &:invalid {
    [disabled] {
      pointer-events: none;
    }
  }
  &:valid {
    [disabled] {
      pointer-events: all;
    }
  }
}
.alert {
  position: fixed;
  position: -webkit-sticky;
  top: 80px;
  right: 10px;
  z-index: 10000;
  &.alert-success {
    background: rgba(86, 233, 101, 0.3);
  }
  &.alert-danger {
    background: rgba(228, 80, 72, 0.3);
    &.text-danger {
      color: rgba(209, 61, 53, 0.3) !important;
    }
  }
  i {
    margin-right: 20px;
    font-size: 20px;
  }
  .progress-bar {
    background: #aeceb5;
    height: 5px;
  }
}
.card {
  .card-header {
    padding: 15px !important;
  }
}

@media (max-width: 768px) {
  .alert {
    font-size: 12px;
    i {
      font-size: 16px;
    }
    .progress-bar {
      height: 3px;
    }
  }
}

@media (max-width: 320px) {
  .alert {
    top: 100px;
    background: rgba(46, 235, 65, 0.3);
  }
}

input[type="email"]:focus {
  border: 1px solid #4e008e;
  box-shadow: 0px 2px 4px #842bce27, 0px -2px 4px #5931961e;
}
.contact {
  margin-top: 120px !important;
  color: #666;
  font-size: 14px;
  .title {
    font-size: 30px;
    color: #4e008e;
  }
  .brand {
    img {
      width: 106px;
      object-fit: cover;
    }
  }
  .info {
    p {
      &:nth-child(1) {
        font-size: 14px;
        a {
          color: #593196;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
  textarea {
    resize: none;
    &:focus {
      border: 1px solid #4e008e;
      box-shadow: 0px 2px 4px #842bce27, 0px -2px 4px #5931961e;
    }
  }
  .submitBtn {
    color: #4e008e;
    border: 1px solid;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: #4e008e;
      color: white;
    }
  }
  .faqTitle {
    color: #4e008e;
    font-size: 21px;
  }
}
</style>