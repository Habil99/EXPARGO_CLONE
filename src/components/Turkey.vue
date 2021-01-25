<template>
  <div class="table">
    <div class="card">
      <div>
        <ul>
          <li class="heading-3">
            <i class="fa fa-plane" aria-hidden="true"></i> STANDART
          </li>
          <li><img src="../assets/tr.png" alt="Tr" /> Türkiyə-Bakı</li>
        </ul>
      </div>
      <div class="card-main">
        <ul>
          <li>$1.00</li>
          <li>0.00 KQ - 0.25 KQ</li>
        </ul>
        <ul>
          <li>$2.50</li>
          <li>0.25 KQ - 0.50 KQ</li>
        </ul>
        <ul>
          <li>$3.50</li>
          <li>0.50 KQ - 0.75 KQ</li>
        </ul>
        <ul>
          <li>$4.00</li>
          <li>0.75 KQ - 1.00 KQ</li>
        </ul>
      </div>
    </div>
    <div class="card">
      <div>
        <ul>
          <li class="heading-3">
            <i class="fas fa-tint" style="color: #009cdc"></i> MAYE
          </li>
          <li><img src="../assets/tr.png" alt="Tr" /> Türkiyə-Bakı</li>
        </ul>
      </div>
      <div class="card-main">
        <ul>
          <li>$2.00</li>
          <li>0.00 KQ - 0.25 KQ</li>
        </ul>
        <ul>
          <li>$3.00</li>
          <li>0.25 KQ - 0.50 KQ</li>
        </ul>
        <ul>
          <li>$4.50</li>
          <li>0.50 KQ - 0.75 KQ</li>
        </ul>
        <ul>
          <li>$6.50</li>
          <li>0.75 KQ - 1.00 KQ</li>
        </ul>
      </div>
    </div>
    <div class="alert">
      <p>
        Korporativ daşınmalar üçün <b>commercial@expargo.com</b> ünvanına mail
        yaza bilərsiniz.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$purple: #4e008e;
@media (max-width: 768px) {
  .card {
    width: 100% !important;
    margin-bottom: 30px !important;
  }
}
ul {
  list-style: none;
  li {
    color: $purple;
  }
}
.table {
  width: 100%;
  max-width: 1200px;
  min-height: 530px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0px 10px;

  .card {
    padding: 20px;
    border-left: 4px solid $purple;
    box-shadow: 3px 6px 8px rgba(0, 0, 0, 0.4), -3px -6px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    width: 48%;
    margin-bottom: 10px;
    .card-main {
      margin-top: 10px;
      ul {
        border-bottom: 1px dashed #1c033138;
        li {
          font-size: 18px;
        }
      }
    }
    ul {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #1c033138;
      li {
        font-weight: 700;
        font-family: "Montserrat", sans-serif !important;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        padding: 15px 0px;
        img {
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
        i {
          margin-right: 10px;
        }
        &.heading-3 {
          font-size: 20px;
        }
      }
    }
  }

  .alert {
    width: 100%;
    margin: 20px 0px;
    border-radius: 6px;
    background: #ded6ea;
    color: #2e1942;
  }
}

@media(max-width: 560px) {
  .alert {
    font-size: 14px !important;
    text-align: left;
  }
}
</style>