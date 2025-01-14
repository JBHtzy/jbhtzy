<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary shadow">
      <div class="container-fluid p-2 px-5">
        <nuxt-link class="navbar-brand fw-bold fs-4" to="/"
          >JB's Portfolio</nuxt-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="d-flex justify-content-end flex-row me-5">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
              <li class="nav-item">
                <nuxt-link class="nav-link" aria-current="page" to="/"
                  >Home</nuxt-link
                >
              </li>
              <li class="nav-item mx-3">
                <nuxt-link class="nav-link" aria-current="page" to="/aboutme"
                  >About Me</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" aria-current="page" to="/projects"
                  >Projects</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
.router-link-exact-active {
  color: #208e20 !important;
}
</style>
