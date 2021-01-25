<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top header">
    <div class="container p-1" style="background: #4e008e">
      <button
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
        class="navbar-toggler collapsed hamburger p-2"
      >
        <span class="navbar-toggler-icon"></span></button
      ><a class="navbar-brand" href="/"
        ><img
          src="../assets/expargo_logo.png"
          alt="logo"
          width="150px"
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
          class="ml-3 ml-md-0 logo" /></a
      ><a
        href="https://dash.expargo.com"
        class="navbar-toggler"
        style="padding: 7px 18px"
        ><i class="fa fa-user" style="font-size: 20px"></i
      ></a>
      <div id="navbarColor01" class="navbar-collapse collapse">
        <ul class="navbar-nav mr-auto mt-md-0 mt-5">
          <li
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            class="nav-item"
          >
            <router-link
              class="nav-link active"
              to="/"
              exact-active-class="active"
            >
              Əsas Səhifə</router-link
            >
          </li>
          <li
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            class="nav-item"
          >
            <router-link class="nav-link" to="/how" exact-active-class="active"
              >Necə işləyir?</router-link
            >
          </li>
          <li
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            class="nav-item"
          >
            <router-link
              class="nav-link"
              to="/pricing"
              exact-active-class="active"
              >Tariflər</router-link
            >
          </li>
          <li
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            class="nav-item"
          >
            <router-link
              class="nav-link"
              to="/articles"
              exact-active-class="active"
              >Xəbərlər</router-link
            >
          </li>
          <li
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            class="nav-item"
          >
            <router-link
              class="nav-link"
              to="/partners"
              exact-active-class="active"
              >Əməkdaşlar</router-link
            >
          </li>
          <li
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            class="nav-item"
          >
            <router-link class="nav-link" to="/contact" exact-active-class="active"
              >Əlaqə</router-link
            >
          </li>
          <li
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            class="nav-item"
          >
            <router-link class="nav-link" to="" exact-active-class="active"
              ><strong style="color: #f2a900">Korporativ</strong></router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a
              href="https://dash.expargo.com"
              class="btn dash_btn text-uppercase font-weight-bolder"
              ><i class="fa fa-user"></i
              ><span id="dash" class="ml-2">İstifadəçi paneli</span></a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top header">
    <div class="container p-0" style="background: #4e008e">
      <button
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
        class="navbar-toggler collapsed hamburger p-2"
      >
        <span class="navbar-toggler-icon"></span></button
      ><router-link class="navbar-brand" to="/"
        ><img
          src="../assets/expargo_logo.png"
          alt="logo"
          width="150px"
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
          class="ml-3 ml-md-0 logo" /></router-link
      ><a
        href="https://dash.expargo.com"
        class="navbar-toggler"
        style="padding: 7px 18px"
        ><i class="fa fa-user" style="font-size: 20px"></i
      ></a>
      <div id="navbarColor01" class="navbar-collapse collapse">
        <ul class="navbar-nav mr-auto mt-md-0 mt-5">
          <li
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            class="nav-item"
          >
            <router-link
              class="nav-link active"
              exactive-active-class="active"
              to="/"
            >
              Əsas Səhifə</router-link
            >
          </li>
          <li
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            class="nav-item"
          >
            <router-link
              class="nav-link"
              exactive-active-class="active"
              to="/how"
              >Necə işləyir?</router-link
            >
          </li>
          <li
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            class="nav-item"
          >
            <router-link
              class="nav-link"
              exactive-active-class="active"
              to="/pricing"
              >Tariflər</router-link
            >
          </li>
          <li
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            class="nav-item"
          >
            <router-link
              class="nav-link"
              to="/articles"
              exactive-active-class="active--link"
              >Xəbərlər</router-link
            >
          </li>
          <li
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            class="nav-item"
          >
            <router-link
              class="nav-link"
              exactive-active-class="active"
              to="/partners"
              >Əməkdaşlar</router-link
            >
          </li>
          <li
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            class="nav-item"
          >
            <router-link class="nav-link" exactive-active-class="active" to="/contact"
              >Əlaqə</router-link
            >
          </li>
          <li
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            class="nav-item"
          >
            <router-link class="nav-link" exactive-active-class="active" to=""
              ><strong style="color: #f2a900">Korporativ</strong></router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a
              href="https://dash.expargo.com"
              class="btn dash_btn text-uppercase font-weight-bolder"
              ><i class="fa fa-user"></i
              ><span id="dash" class="ml-2">İstifadəçi paneli</span></a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.header {
  background: #4e008e;
  color: white;
  font-family: BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial,
    Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Noto Color Emoji !important;
  font-size: 13px;
}

.nav-link {
  color: #ffffff80 !important;
  transition: 300ms ease all;
  &:hover {
    color: #d88f21 !important;
  }
  &.router-link-exact-active {
    color: #ffffffe6 !important;
  }
}

.dash_btn {
  background: #eee;
  color: #4e008e !important;
  font-size: 12px !important;
  &:hover {
    color: #601a99;
    box-shadow: 0px 5px 10px rgba(209, 208, 208, 0.2),
      0px -5px 10px rgba(211, 209, 209, 0.1);
  }
}

.logo {
  width: 150px;
  max-height: 30px !important;
  vertical-align: middle;
}
</style>