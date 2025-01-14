<template>
  <div>
    <div id="aboutMe">
      <div class="container">
        <div
          class="d-flex justify-content-between align-items-center flex-wrap p-3"
        >
          <div class="card card-profile text-bg-dark border-0 mt-3">
            <img
              src="~/assets/imgs/IMG20200301223959.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Web Developer</h5>
              <p class="card-text">
                Aspiring web developer dedicated to learning and contributing
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item p-3">
                Email:
                <a href="mailto:jamesbadang16@gmail.com"
                  >jamesbadang16@gmail.com</a
                >
              </li>
              <li class="list-group-item">
                Contact No: <a href="tel:+639544507515">(+63) 954 4507 515</a>
              </li>
            </ul>
          </div>

          <div class="aboutcontents">
            <!-- About me contents -->
            <div class="about-text text-center">
              <h1 class="fw-bold fs-3 text-uppercase">About me</h1>
              <hr />
              <p class="fs-6 mt-4">
                "With a passion for web development, eager to dive into both
                frontend and backend technologies. With a foundational knowledge
                of Angular and Laravel, I enjoy and a keen to learn more and
                enhance my skills in creating dynamic, user-friendly web
                applications. My approach emphasizes clean code, seamless user
                experiences, and a commitment to continual learning. I am
                excited to explore new technologies and methodologies, whether
                working independently or collaborating with a team. My goal is
                to deliver innovative and high-quality solutions that meet and
                exceed client expectations."
              </p>
              <button class="btn btn-outline-primary mt-3 mainBtn">
                <nuxt-link
                  class="icon-link icon-link-hover text-decoration-none fw-bold font-monospace"
                  style="
                    --bs-icon-link-transform: translate3d(0, -0.125rem, 0);
                    --bs-link-hover-color-rgb: 255, 255, 255;
                  "
                  to="https://drive.google.com/file/d/1JuUmnk0e8kdQZYceZZpfGHB7NhLcwMxX/view?usp=sharing"
                  target="_blank"
                >
                  <i
                    class="fa-solid fa-file-export me-2 bi"
                    aria-hidden="true"
                  ></i>
                  View Resume</nuxt-link
                >
              </button>
              <button class="btn btn-outline-primary mt-3 mainBtn ms-3">
                <nuxt-link
                  class="icon-link icon-link-hover text-decoration-none fw-bold font-monospace"
                  style="
                    --bs-icon-link-transform: translate3d(0, -0.125rem, 0);
                    --bs-link-hover-color-rgb: 255, 255, 255;
                  "
                  to="https://github.com/JBHtzy"
                  target="_blank"
                >
                  <i class="fa-brands fa-github me-2 bi" aria-hidden="true"></i>
                  GitHub</nuxt-link
                >
              </button>
            </div>
            <!-- Images-skills -->
            <div class="w-100 mt-4" id="techSkills">
              <div class="row g-4 py-3">
                <div class="col-3">
                  <img
                    src="https://www.kindpng.com/picc/b/23-237385_transparent-jquery-logo-png-html-css-logo-png.png"
                    width="120"
                    alt="HTML, CSS, JS"
                  />
                </div>
                <div class="col-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png"
                    width="120"
                    alt="PHP"
                  />
                </div>
                <div class="col-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png"
                    width="120"
                    alt="MYSQL"
                  />
                </div>
                <div class="col-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Logo_jQuery.svg/1280px-Logo_jQuery.svg.png"
                    width="120"
                    alt="jQuery"
                  />
                </div>
                <div class="col-3">
                  <img
                    src="~/assets/imgs/angular-logo-1.png"
                    width="120"
                    alt="Angular"
                  />
                </div>
                <div class="col-3">
                  <img
                    src="~/assets/imgs/laravel.png"
                    width="120"
                    alt="Laravel"
                  />
                </div>
                <div class="col-3">
                  <img
                    src="~/assets/imgs/Figma-Logo-PNG-HD-Image.png"
                    width="120"
                    alt="Figma"
                  />
                </div>
                <div class="col-3">
                  <img
                    src="~/assets/imgs/git-github.png"
                    width="120"
                    alt="Git, GitHub"
                  />
                </div>
                <div class="col-3">
                  <img
                    src="https://logovectorseek.com/wp-content/uploads/2019/10/bootstrap-logo-vector.png"
                    width="120"
                    alt="Bootstrap"
                  />
                </div>
                <div class="col-3">
                  <img
                    src="https://logovectordl.com/wp-content/uploads/2020/11/nuxtjs-logo-vector.png"
                    width="120"
                    alt="NuxtJS"
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
