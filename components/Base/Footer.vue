<template>
  <div class="footer bg-purple">
      <div class="py-5 footer-container">
      <div class="row pb-3">
        <div class="col-md-6 col-lg-3 pt-3">
          <h4>Company</h4>
          <div class="pt-3 text-grey pointer">
            <li>About</li>
            <li class="mt-1">Contact us</li>
            <li class="mt-1">FAQs</li>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 pt-3">
          <h4>Quick links</h4>
          <div class="pt-3 text-grey pointer">
            <li>Find services</li>
            <li class="mt-1">Pricing & plans</li>
            <li class="mt-1">List your business</li>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 pt-3">
          <h4>Resources</h4>
          <div class="pt-3 text-grey pointer">
            <li>Blog</li>
            <li class="mt-1">Affiliate program</li>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 pt-3">
          <h4>More from Dutiful</h4>
          <div class="pt-3 text-grey pointer">
            <li>Dutiful jobs</li>
          </div>
        </div>
        </div>
        <hr class="mt-4" />
        <div class="d-flex align-items-center justify-content-between">
        <div class="my-3 d-flex align-items-center">
          <span class="text-white font-weight-500 fs-18">Follow us</span>
          <span class="iconify text-white fs-24 ml-3" data-icon="basil:facebook-solid"></span>
          <span class="iconify text-white fs-24 ml-3" data-icon="ri:instagram-line"></span>
          <span class="iconify text-white fs-24 ml-3" data-icon="mdi:twitter"></span>
          <span class="iconify text-white fs-24 ml-3" data-icon="mdi:youtube"></span>
          <span class="iconify text-white fs-24 ml-3" data-icon="mdi:linkedin"></span>
        </div>
        <div class="d-flex align-items-center">
          <span class="text-white font-weight-500 fs-18">Download the app</span>
          <span class="iconify text-white fs-24 ml-3" data-icon="ic:baseline-apple"></span>
          <span class="iconify text-white fs-24 ml-3" data-icon="ion:logo-google-playstore"></span>
        </div>
        </div>
        <hr />
        <div class="mt-3 d-flex align-items-center">
          <span class="text-white fs-18 mr-lg-5">©  {{ new Date().getFullYear() }} Dutiful®</span>
          <div class="d-flex align-items-center pl-lg-5">
            <span class="text-grey mr-3">Terms of Service</span>
            <span class="text-grey mr-3">Privacy policy</span>
            <span class="text-grey">Disclaimer</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h4{
  color: #fff;
  font-size: 22px;
  font-weight: 500;
}
li{
  list-style: none;
}
.footer-container {
  padding: 0px 100px;
}
</style>