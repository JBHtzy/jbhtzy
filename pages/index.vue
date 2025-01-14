<template>
  <div>
    <div class="contentBody p-5 shadow">
      <div class="content-text ps-5">
        <div class="lh-1">
          <h5>Hello,</h5>
          <h1 class="fs-1 fw-bold">
            <span>I'm James Badang</span>
          </h1>
        </div>
        <h2 class="fs-5">Bachelor of Science in Information Technology</h2>
        <p class="fs-6 w-50 fst-italic">
          Hello World! I'm an Aspiring Web Developer, I'm constantly expanding
          my knowledge and eager to contribute my skills and looking forward to
          use my programming skills for the growth of the organization and
          myself.
        </p>
        <button class="btn btn-outline-primary mainBtn">
          <nuxt-link
            class="icon-link icon-link-hover text-decoration-none fw-bold font-monospace"
            style="
              --bs-icon-link-transform: translate3d(0, -0.125rem, 0);
              --bs-link-hover-color-rgb: 255, 255, 255;
            "
            to="/aboutme"
          >
            <i class="fa-solid fa-address-card bi me-2" aria-hidden="true"></i>
            About Me.. <i class="ms-1 fa-solid fa-arrow-right"></i
          ></nuxt-link>
        </button>
      </div>
    </div>
  </div>
</template>
