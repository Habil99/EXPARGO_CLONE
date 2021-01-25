<template>
  <div class="container-fluid bg_gradient py-5">
    <div class="container-sm">
      <div class="row">
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6 py-4 logo-part">
              <img
                class="w-50 mb-5 expLogo"
                src="../assets/expargo_logo.png"
                alt="Expargo"
              />
              <p class="mb-3 text-white">
                Xaricdən sifarişlərin sərfəli çatdırılması
              </p>
              <p class="mb-3 text-white">
                Expert MMC Səid Rüstəmov 6A Bakı, AZ1001, İçərişəhər
              </p>
              <a href="tel:+994704390838" class="mb-3 phone text-white">
                <i class="fa fa-phone"></i>+994 (70) 439 08 38
              </a>
            </div>
            <div class="col-md-6 pb-4">
              <h6 class="mt-3 mb-5 mt-md-0 text-white">İstifadəçi paneli</h6>
              <p class="mt-3 mb-2 text-white">
                Daxil ol və ya qeydiyyatdan keç
              </p>
              <button class="my-3 btn rounded-pill btn-lg px-4 text-center">
                Daxil Ol
              </button>
              <button class="btn rounded-pill btn-lg px-4 text-center">
                Qeydiyyat
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6">
              <h6 class="mt-3 mb-5 mt-md-0 text-white">Digər Linklər</h6>
              <div class="row">
                <div class="col-sm-6">
                  <ul>
                    <router-link to="/" class="px-1 py-1"
                      ><span>Əsas səhifə</span></router-link
                    >
                    <router-link to="/cooporative" class="px-1 py-1"
                      ><span>Korporativ</span></router-link
                    >
                    <router-link to="/how" class="px-1 py-1"
                      ><span>Necə işləyir?</span></router-link
                    >
                    <router-link to="/conditions" class="px-1 py-1">
                      <span>Şərtlər & Qaydalar</span>
                    </router-link>
                    <router-link to="/securtiy" class="px-1 py-1">
                      <span>Gizlilik Siyasəti</span>
                    </router-link>
                  </ul>
                </div>
                <div class="col-sm-6">
                  <ul>
                    <router-link to="/pricing" class="px-1 py-1"
                      ><span>Tariflər</span></router-link
                    >
                    <router-link to="/articles" class="px-1 py-1"
                      ><span>Xəbərlər</span></router-link
                    >
                    <router-link to="/dashboard" class="px-1 py-1">
                      <span>İstifadəçi paneli</span>
                    </router-link>
                    <router-link to="/partners" class="px-1 py-1"
                      ><span>Əməkdaşlar</span></router-link
                    >
                    <router-link to="/contact" class="px-1 py-1"
                      ><span>Əlaqə</span></router-link
                    >
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <h6 class="mb-5">Bizi izlə</h6>
              <div class="social my-2">
                <a
                  href=""
                  class="text-white px-2"
                  style="font-size: 22px; margin-right: 10px"
                >
                  <i class="fa fa-facebook"></i>
                </a>
                <a
                  href=""
                  class="text-white px-2"
                  style="font-size: 22px; margin-right: 10px"
                >
                  <i class="fa fa-instagram"></i>
                </a>
                <a
                  href=""
                  class="text-white px-2"
                  style="font-size: 22px; margin-right: 10px"
                >
                  <i class="fa fa-youtube"></i>
                </a>
              </div>
              <h6 class="my-3">Mobil Tətbiqetmə</h6>
              <div class="row">
                <div class="col-6">
                  <img
                    class="svgs"
                    src="../assets/app-store-badge.svg"
                    alt=""
                  />
                </div>
                <div class="col-6">
                  <img
                    class="svgs"
                    src="../assets/google-play-badge.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
@import "../views/styles/_footer";
</style>