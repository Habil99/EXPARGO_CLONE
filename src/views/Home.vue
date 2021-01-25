<template>
  <div class="home">
    <div class="container-fluid bgColor my-5">
      <div class="container bg_resp p-4">
        <div class="time">
          <i class="fas fa-clock"></i> Həftə içi: 10:00-20:00
        </div>
        <div class="row">
          <div class="col-md-12 col-lg-6 p-4">
            <h1 class="h1 text-white text-wrap heading">
              XARİCDƏN <br />
              SİFARİŞLƏRİN <br />
              SƏRFƏLİ ÇATDIRILMASI
            </h1>
            <p class="text-white text">
              Expargo məhsul, xidmət və ideyalardan istifadə edərək insanları
              birləşdirir, imkan yaradır və həyatlarını yaxşılaşdırır. Biz
              Expargo olaraq güclü informasiyalı bir dünyanın daha yaxşı bir
              dünya olduğuna inanırıq və bu inam bizə gördüyümüz hər işdə yol
              göstərə bilir.
            </p>
            <div class="form-group">
              <select
                class="form-select p-1 pl-2 pr-5 pb-1 border-0"
                @change="getValue"
                ref="option"
              >
                <option
                  v-for="country in countries"
                  :value="country"
                  :key="country"
                >
                  {{ country }}
                </option>
              </select>
              <div class="form-check form-check-inline" v-show="!show">
                <input
                  class="form-check-input ml-2"
                  type="checkbox"
                  id="flexCheckDefault"
                  ref="checkbox"
                />
                <label
                  class="form-check-label text-white"
                  for="flexCheckDefault"
                >
                  Maye məhsulu
                </label>
              </div>
              <div class="input-group mb-3">
                <input
                  type="number"
                  id="weight"
                  class="form-control rounded-0"
                  inputmode="numeric"
                  placeholder="Çəki (KG)"
                  aria-label="Çəki (KG)"
                  aria-describedby="basic-addon2"
                  ref="field"
                  @input="getFieldLength"
                />
                <button
                  class="w-25 disabled font-weight-bold rounded-0 btn border-0 button"
                  id="basic-addon2"
                  ref="btn"
                  @click="calculatePrice"
                >
                  Hesabla
                </button>
                <small
                  class="price m-0 p-0 w-100 text-white font-weight-bold"
                  >{{ price }}</small
                >
              </div>
            </div>
          </div>
          <div class="col-md-6 bgImg"></div>
        </div>
      </div>
    </div>
    <main>
      <div class="app-welcome">
        <div class="rows">
          <img src="../assets/basket.png" alt="" />
          <p>Qeydiyyatdan keçin</p>
        </div>
        <div class="rows">
          <img src="../assets/expargo.png" alt="" />
          <p>Bağlamanızı xaricdəki ünvanımıza göndərin</p>
        </div>
        <div class="rows">
          <img src="../assets/homeicon.png" alt="" />
          <p>Bağlamanızı Bakı anbarından təhvil alın</p>
        </div>
      </div>
      <div class="rates">
        <div class="heading">
          <span>TARİFLƏR</span>
          <div class="pills">
            <button
              @submit.prevent
              @click="selectedTab = 'Turkey'"
              ref="turkeyTab"
              class="activeTab"
            >
              <img
                src="../assets/tr.png"
                alt="Tr"
                style="width: 20px; height: 20px"
              />
              Türkiyə
            </button>
            <button
              @submit.prevent
              @click="selectedTab = 'Germany'"
              ref="germanTab"
            >
              <img
                src="../assets/de.png"
                alt="De"
                style="width: 20px; height: 16px"
              />Almaniya
            </button>
          </div>
        </div>
        <div class="tables">
          <transition name="slide" mode="out-in" type="animation">
            <component :is="selectedTab"></component>
          </transition>
        </div>
      </div>

      <div class="services">
        <span>XİDMƏT ŞƏBƏKƏSİ</span>
        <div class="map">
          <img src="../assets/map.png" alt="" />
        </div>
        <Accordion />
      </div>
      <div class="container-fluid mt-5 mb-5">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center font-weight-bolder capture">
              XƏBƏRLƏR
            </div>
          </div>
          <div
            class="d-flex cards align-items-center justify-content-between w-100 flex-wrap flex-md-wrap"
          >
            <div class="card p-0 my-2 mx-1 justify-self-center">
              <img
                src="../assets/cards/card-1.jpg"
                class="img-fluid card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h6 class="card-title">Avropadan Sifariş Qaydası</h6>
                <p class="card-subtitle">Bir neçə addımda istənil...</p>
              </div>
              <footer class="card-footer">
                <div class="row">
                  <div class="col-6 text-center">
                    <button
                      class="btn btn-sm detailsBtn"
                      type="button"
                      role="button"
                    >
                      <i class="fa fa-arrow-right"></i> Ətraflı
                    </button>
                  </div>
                  <div class="col-6 text-center">
                    <span class="date">2 yan 2021</span>
                  </div>
                </div>
              </footer>
            </div>
            <div class="card p-0 my-2 mx-1 justify-self-center">
              <img
                src="../assets/cards/card-2.jpg"
                class="img-fluid card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h6 class="card-title">Smart Customs və Faktura</h6>
                <p class="card-subtitle">Hörmətli müş...</p>
              </div>
              <footer class="card-footer">
                <div class="row">
                  <div class="col-6 text-center">
                    <button
                      class="btn btn-sm detailsBtn"
                      type="button"
                      role="button"
                    >
                      <i class="fa fa-arrow-right"></i> Ətraflı
                    </button>
                  </div>
                  <div class="col-6 text-center">
                    <span class="date">2 yan 2021</span>
                  </div>
                </div>
              </footer>
            </div>
            <div class="card p-0 my-2 mx-1 justify-self-center">
              <img
                src="../assets/cards/card-3.jpg"
                class="img-fluid card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h6 class="card-title">
                  Ekspress xidmət ilə vaxtınıza qənaət edin!
                </h6>
                <p class="card-subtitle"><b>Bağla...</b></p>
              </div>
              <footer class="card-footer">
                <div class="row">
                  <div class="col-6 text-center">
                    <button
                      class="btn btn-sm detailsBtn"
                      type="button"
                      role="button"
                    >
                      <i class="fa fa-arrow-right"></i> Ətraflı
                    </button>
                  </div>
                  <div class="col-6 text-center">
                    <span class="date">2 yan 2021</span>
                  </div>
                </div>
              </footer>
            </div>
            <div class="card p-0 my-2 mx-1 justify-self-center">
              <img
                src="../assets/cards/card-4.jpg"
                class="img-fluid card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h6 class="card-title">Bakıxanov Filialı!</h6>
                <p class="card-subtitle">Hörmətli, Bakıxanov sakinlə...</p>
              </div>
              <footer class="card-footer">
                <div class="row">
                  <div class="col-6 text-center">
                    <button
                      class="btn btn-sm detailsBtn"
                      type="button"
                      role="button"
                    >
                      <i class="fa fa-arrow-right"></i> Ətraflı
                    </button>
                  </div>
                  <div class="col-6 text-center">
                    <span class="date">2 yan 2021</span>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid mb-5">
        <div class="container-lg">
          <div class="row mb-2">
            <div class="col text-center text-uppercase heading p-3">
              <span class="employee">Əməkdaşlar</span>
            </div>
          </div>
          <div
            class="d-flex align-items-center justify-content-between flex-wrap"
          >
            <a href="http://www.flo.com.tr" target="_blank">
              <img src="../assets/expargo-logos-01.png" class="image" alt=""
            /></a>
            <a href="http://www.trendyol.com" target="_blank">
              <img src="../assets/expargo-logos-02.png" class="image" alt="" />
            </a>
            <a href="http://www.boyner.com.tr" target="_blank">
              <img src="../assets/expargo-logos-03.png" class="image" alt=""
            /></a>
            <a href="https://www.gittigidiyor.com" target="_blank">
              <img src="../assets/expargo-logos-04.png" class="image" alt="" />
            </a>
            <a href="http://www.n11.com.tr" target="_blank">
              <img src="../assets/expargo-logos-05.png" class="image" alt="" />
            </a>
            <a href="http://www.hm.com/tr" target="_blank">
              <img src="../assets/expargo-logos-06.png" class="image" alt=""
            /></a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  </div>
</template>

<script>
import Turkey from "@/components/Turkey";
import Germany from "@/components/Germany";
import Accordion from "@/components/Accordion";
import Footer from "@/components/Footer";

export default {
  components: {
    Turkey,
    Germany,
    Accordion,
    Footer,
  },
  data() {
    return {
      countries: ["Türkiyə", "Almaniya"],
      show: false,
      selectedTab: "Turkey",
      price: "",
    };
  },
  methods: {
    getValue() {
      const option = this.$refs.option.value;
      this.show = !this.show;
      if (option == "Almaniya") {
        this.price = "";
      }
    },
    getFieldLength() {
      const button = this.$refs.btn;
      let numField = this.$refs.field.value;

      if (numField != "") {
        button.classList.remove("disabled");
      } else {
        button.classList.add("disabled");
      }
    },
    calculatePrice() {
      const checkbox = this.$refs.checkbox;
      const option = this.$refs.option.value;
      let numField = this.$refs.field.value;
      let input = Number(this.$refs.field.value).toFixed(2);
      let priceInfoTr = "Daşınma haqqı: $";
      let priceInfoDe = "Daşınma haqqı: €";
      let result;

      if (numField != "") {
        if (option == "Türkiyə") {
          if (!checkbox.checked) {
            this.turkeyPrice(input, priceInfoTr, result);
          } else {
            result = input * 6.5;
            this.price = `${priceInfoTr}${result}`;
          }
        } else {
          this.germanPrice(input, priceInfoDe, result);
        }
      }
      console.log(input);
    },
    turkeyPrice(input, priceInfoTr, result) {
      if (input >= 0 && input <= 0.25) {
        result = input * 1;
        this.price = `${priceInfoTr}${result}`;
      } else if (input > 0.25 && input <= 0.5) {
        result = input * 2.5;
        this.price = `${priceInfoTr}${result}`;
      } else if (input > 0.5 && input <= 0.75) {
        result = input * 2.5;
        this.price = `${priceInfoTr}${result}`;
      } else if (input > 0.75 && input <= 1) {
        result = input * 2.5;
        this.price = `${priceInfoTr}${result}`;
      } else {
        result = input * 4;
        this.price = `${priceInfoTr}${result}`;
      }
    },
    germanPrice(input, priceInfoDe, result) {
      if (input >= 0 && input <= 0.25) {
        result = input * 2;
        this.price = `${priceInfoDe}${result}`;
      } else if (input > 0.25 && input <= 0.5) {
        result = input * 3;
        this.price = `${priceInfoDe}${result}`;
      } else if (input > 0.5 && input <= 0.75) {
        result = input * 4.5;
        this.price = `${priceInfoDe}${result}`;
      } else if (input > 0.75 && input < 1) {
        result = input * 6.5;
        this.price = `${priceInfoDe}${result}`;
      } else {
        result = input * 7;
        this.price = `${priceInfoDe}${result}`;
      }
    },
  },
  watch: {
    selectedTab(value) {
      if (value == "Turkey") {
        this.$refs.turkeyTab.classList.add("activeTab");
        this.$refs.germanTab.classList.remove("activeTab");
      } else if (value == "Germany") {
        this.$refs.germanTab.classList.add("activeTab");
        this.$refs.turkeyTab.classList.remove("activeTab");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$purple: #4e008e;
$font: "Roboto", sans-serif;
$yellow: #d88f21;
@import "./styles/_appwelcome";
@import "./styles/_news";
@import "./styles/_employee";
@import "./styles/_footer";
@import "./styles/_rates";
* {
  outline: none !important;
}
input[type="text"]:focus {
  outline: none !important;
}
input[type="number"] {
  outline: none !important;
  box-shadow: none !important;
  border: none !important;
}
input[type="number"]:focus {
  outline: none !important;
  box-shadow: none !important;
  border: none !important;
}

.container {
  position: relative;
  .time {
    position: absolute;
    top: 25px;
    right: 0px;
    color: white;
    font-size: 14px;
  }
}

.bgColor {
  background: #4e008e;
}

.bgImg {
  background: url(../assets/bgGo.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.text {
  font-size: 14px;
}

.button {
  background: #d88f21;
  color: #fff;
  cursor: pointer !important;
}

.button:hover {
  color: #fff;
}

#weight {
  font-weight: 600;
  color: #4e008e;
}

.button.disabled {
  cursor: auto !important;
  color: #4e008e;
}

#weight::placeholder {
  color: grey;
}

#weight::-webkit-inner-spin-button {
  appearance: none;
}
.price {
  height: 20px;
}

@media (max-width: 990px) {
  .bg_resp {
    background: url(../assets/bgGo.png), #4e008e;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
}

@media (max-width: 556px) {
  .text {
    font-size: 12px;
  }

  .heading {
    font-size: 32px;
  }
}

main {
  @extend .app-welcome;
  .services {
    width: 90%;
    max-width: 1250px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    span {
      font-family: "Montserrat", sans-serif;
      font-weight: bolder;
      font-size: 30px;
      color: $purple;
      flex: 1 100%;
      align-self: center;
      text-align: center;
      margin: 10px;
    }

    .map {
      align-self: flex-start;
      width: 400px;
      margin-right: 10px;
      flex: 1;
      height: 400px;
      background: #e0e4e8;
      border-radius: 4px;
      border-left: 6px solid $purple;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .accordion {
      align-self: flex-end;
      width: 600px;
      height: auto;
      margin-left: 10px;
      flex: 1;
    }
  }
}

.slide-enter-active {
  animation: slide-in 0.4s linear forwards;
}
.slide-leave-to {
  animation: slide-out 0.4s linear forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(50px);
    opacity: 0;
  }
}

@media (max-width: 968px) {
  .services {
    flex-flow: column wrap !important;
    .map {
      align-self: center !important;
      width: 100% !important;
      margin-right: 0 !important;
      margin-bottom: 20px !important;
      height: 300px !important;

      img {
        width: 100% !important;
        height: 100% !important;
        object-fit: contain !important;
      }
    }

    .accordion {
      align-self: center !important;
      width: 100% !important;
      margin-left: 0 !important;
    }
  }
}

.securityLink,
.conditionLink {
  color: $purple;
  text-decoration: none;
  font-size: 14px;
  padding: 8px 10px;
  transition: all 0.3s ease;
  &:hover {
    background: $purple;
    color: white;
  }
}

.paymentPng {
  width: 200px;
}
</style>
