<template>
  <div class="d-flex justify-content-center align-items-center p-3">
    <div
      class="card rounded-bottom-0"
      style="
        border: 1px solid #000000;
        max-width: 1000px;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
      "
      :class="{ 'fade-in': cardImageLoaded }"
    >
      <div class="row g-0">
        <div class="col-12">
          <img
            src="../assets/background-image.jpg"
            class="img-fluid rounded-top"
            alt="..."
            @load="onCardImageLoad"
          />
        </div>
        <div class="col-12">
          <div class="card-header text-center bg-red text-white rounded-0">
            <h4 class="m-0">Kontaktirajte nas</h4>
          </div>
          <div class="card-body text-center bg-light-pink">
            <h5 class="card-title d-flex flex-column mt-3 mb-5 my-md-3">
              <span
                >Ukoliko nas želite kontaktirati, pošaljite nam e-mail na adresu
                info@pino.hr ili ispunite ovaj obrazac:</span
              >
            </h5>
            <div
              class="d-flex flex-column-reverse flex-md-row justify-content-md-between gap-5"
            >
              <div
                class="d-flex flex-column pe-md-5 pb-md-5 pt-md-3"
                style="flex-basis: 50%"
              >
                <div
                  class="mobile-phones position-relative d-flex flex-column gap-2 ps-4"
                >
                  <h5>+385 (0)91 321 4696</h5>
                  <h5>+385 (0)91 321 4696</h5>
                </div>
                <hr />
                <h5 class="address position-relative m-0 ps-5">
                  Franjčevićeva ul., <br />
                  10361,<br />
                  Dumovec
                </h5>
                <hr />
                <h5 class="email position-relative m-0 ps-5">info@pino.hr</h5>
                <hr />
                <div
                  class="donation-info position-relative d-flex flex-column justify-content-center ps-5"
                >
                  <h5>
                    Opće poslovanje udruge:<br />
                    HR9823600001101542052
                  </h5>
                  <h5>
                    Dogradnja prihvatilišta:<br />
                    HR3223600001500142333
                  </h5>
                  <h5>
                    Devizni račun:<br />
                    HR6423600001500244189<br />
                    SWIFT: ZABAHR2X
                  </h5>
                </div>
              </div>
              <form
                class="row g-3 needs-validation fs-5"
                ref="form"
                style="flex-basis: 50%"
                novalidate
                @submit.prevent="isFormSuccessful"
              >
                <div class="col-12">
                  <label for="validationCustom01" class="form-label"
                    >Ime <span style="color: red">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    name="from_name"
                    required
                  />
                  <div class="invalid-feedback">Ovo polje je obavezno.</div>
                </div>
                <div class="col-12">
                  <label for="validationCustom02" class="form-label text-start"
                    >Prezime <span style="color: red">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    name="from_surname"
                    required
                  />
                  <div class="invalid-feedback">Ovo polje je obavezno.</div>
                </div>
                <div class="col-12">
                  <label for="validationCustom02" class="form-label text-start"
                    >Email <span style="color: red">*</span></label
                  >
                  <input
                    type="email"
                    class="form-control"
                    name="from_email"
                    required
                  />
                  <div class="invalid-feedback">Ovo polje je obavezno.</div>
                </div>

                <div class="col-12">
                  <label for="validationTextarea" class="form-label"
                    >Upit <span style="color: red">*</span></label
                  >
                  <textarea
                    class="form-control"
                    name="message"
                    style="resize: none; height: 100px"
                    required
                  ></textarea>
                  <div class="invalid-feedback">Ovo polje je obavezno.</div>
                </div>
                <div
                  class="alert alert-success alert-dismissible fade show"
                  role="alert"
                  v-if="isFormSuccessful"
                >
                  <svg
                    class="me-2"
                    width="20px"
                    height="20px"
                    style="min-width: 20px; min-height: 20px"
                    viewBox="0 0 512 512"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    fill="#0a3622"
                    stroke=""
                    transform="translate(0,1)"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M213.333333,3.55271368e-14 C95.51296,3.55271368e-14 3.55271368e-14,95.51296 3.55271368e-14,213.333333 C3.55271368e-14,331.153707 95.51296,426.666667 213.333333,426.666667 C331.153707,426.666667 426.666667,331.153707 426.666667,213.333333 C426.666667,95.51296 331.153707,3.55271368e-14 213.333333,3.55271368e-14 Z M293.669333,137.114453 L323.835947,167.281067 L192,299.66912 L112.916693,220.585813 L143.083307,190.4192 L192,239.335893 L293.669333,137.114453 Z"
                        id="Shape"
                      ></path>
                    </g>
                  </svg>
                  <strong>Hvala Vam!</strong> Zaprimili smo Vaš upit.Odgovorit
                  ćemo Vam preko email-a,u najkraćem mogućem roku.<button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="col-12 mt-5 d-flex justify-content-end">
                  <button type="submit" class="btn btn-danger">Pošalji</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import emailjs from "@emailjs/browser";

const form = ref(null);

const isFormSuccessful = ref(null);

const sendEmail = () => {
  emailjs
    .sendForm("pino_contact", "pino_template", form.value, {
      publicKey: "SvtzovAEZMfDGJTeQ",
    })
    .then(
      () => {
        if (!isFormSuccessful.value) {
          isFormSuccessful.value = true;
        }
        const formElement = form.value;
        formElement.reset();
        formElement.classList.remove("was-validated");
      },
      (error) => {
        console.log(error.text);
      }
    );
};

const cardImageLoaded = ref(false);

const onCardImageLoad = () => {
  cardImageLoaded.value = true;
};

const setValidation = () => {
  const form = document.querySelector(".needs-validation");

  form.addEventListener(
    "submit",
    (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        if (isFormSuccessful.value) {
          isFormSuccessful.value = false;
        }
      } else {
        sendEmail();
      }

      form.classList.add("was-validated");
    },
    false
  );
};

onMounted(() => {
  setValidation();
});
</script>

<style scoped>
.btn-danger {
  --bs-btn-bg: var(--red-color);
  --bs-btn-border-color: var(--red-color);
}

.btn-danger:hover {
  filter: brightness(90%) !important;
}

.mobile-phones::before,
.address::before,
.email::before,
.donation-info::before {
  content: "";
  display: block;
  position: absolute;
  top: 20%;
  left: 0;
  width: 42px;
  height: 42px;
  background-color: var(--red-color);
  filter: brightness(90%);
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
}

.mobile-phones::before {
  background-image: url('data:image/svg+xml,%3Csvg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cg id="SVGRepo_bgCarrier" stroke-width="0"%3E%3C/g%3E%3Cg id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"%3E%3C/g%3E%3Cg id="SVGRepo_iconCarrier"%3E%3Cpath d="M16.1007 13.359L15.5719 12.8272H15.5719L16.1007 13.359ZM16.5562 12.9062L17.085 13.438H17.085L16.5562 12.9062ZM18.9728 12.5894L18.6146 13.2483L18.9728 12.5894ZM20.8833 13.628L20.5251 14.2869L20.8833 13.628ZM21.4217 16.883L21.9505 17.4148L21.4217 16.883ZM20.0011 18.2954L19.4723 17.7636L20.0011 18.2954ZM18.6763 18.9651L18.7459 19.7119H18.7459L18.6763 18.9651ZM8.81536 14.7266L9.34418 14.1947L8.81536 14.7266ZM4.00289 5.74561L3.2541 5.78816L3.2541 5.78816L4.00289 5.74561ZM10.4775 7.19738L11.0063 7.72922H11.0063L10.4775 7.19738ZM10.6342 4.54348L11.2346 4.09401L10.6342 4.54348ZM9.37326 2.85908L8.77286 3.30855V3.30855L9.37326 2.85908ZM6.26145 2.57483L6.79027 3.10667H6.79027L6.26145 2.57483ZM4.69185 4.13552L4.16303 3.60368H4.16303L4.69185 4.13552ZM12.0631 11.4972L12.5919 10.9654L12.0631 11.4972ZM16.6295 13.8909L17.085 13.438L16.0273 12.3743L15.5719 12.8272L16.6295 13.8909ZM18.6146 13.2483L20.5251 14.2869L21.2415 12.9691L19.331 11.9305L18.6146 13.2483ZM20.8929 16.3511L19.4723 17.7636L20.5299 18.8273L21.9505 17.4148L20.8929 16.3511ZM18.6067 18.2184C17.1568 18.3535 13.4056 18.2331 9.34418 14.1947L8.28654 15.2584C12.7186 19.6653 16.9369 19.8805 18.7459 19.7119L18.6067 18.2184ZM9.34418 14.1947C5.4728 10.3453 4.83151 7.10765 4.75168 5.70305L3.2541 5.78816C3.35456 7.55599 4.14863 11.144 8.28654 15.2584L9.34418 14.1947ZM10.7195 8.01441L11.0063 7.72922L9.9487 6.66555L9.66189 6.95073L10.7195 8.01441ZM11.2346 4.09401L9.97365 2.40961L8.77286 3.30855L10.0338 4.99296L11.2346 4.09401ZM5.73263 2.04299L4.16303 3.60368L5.22067 4.66736L6.79027 3.10667L5.73263 2.04299ZM10.1907 7.48257C9.66189 6.95073 9.66117 6.95144 9.66045 6.95216C9.66021 6.9524 9.65949 6.95313 9.659 6.95362C9.65802 6.95461 9.65702 6.95561 9.65601 6.95664C9.65398 6.95871 9.65188 6.96086 9.64972 6.9631C9.64539 6.96759 9.64081 6.97245 9.63599 6.97769C9.62634 6.98816 9.61575 7.00014 9.60441 7.01367C9.58174 7.04072 9.55605 7.07403 9.52905 7.11388C9.47492 7.19377 9.41594 7.2994 9.36589 7.43224C9.26376 7.70329 9.20901 8.0606 9.27765 8.50305C9.41189 9.36833 10.0078 10.5113 11.5343 12.0291L12.5919 10.9654C11.1634 9.54499 10.8231 8.68059 10.7599 8.27309C10.7298 8.07916 10.761 7.98371 10.7696 7.96111C10.7748 7.94713 10.7773 7.9457 10.7709 7.95525C10.7677 7.95992 10.7624 7.96723 10.7541 7.97708C10.75 7.98201 10.7451 7.98759 10.7394 7.99381C10.7365 7.99692 10.7335 8.00019 10.7301 8.00362C10.7285 8.00534 10.7268 8.00709 10.725 8.00889C10.7241 8.00979 10.7232 8.0107 10.7223 8.01162C10.7219 8.01208 10.7212 8.01278 10.7209 8.01301C10.7202 8.01371 10.7195 8.01441 10.1907 7.48257ZM11.5343 12.0291C13.0613 13.5474 14.2096 14.1383 15.0763 14.2713C15.5192 14.3392 15.8763 14.285 16.1472 14.1841C16.28 14.1346 16.3858 14.0763 16.4658 14.0227C16.5058 13.9959 16.5392 13.9704 16.5663 13.9479C16.5799 13.9367 16.5919 13.9262 16.6024 13.9166C16.6077 13.9118 16.6126 13.9073 16.6171 13.903C16.6194 13.9008 16.6215 13.8987 16.6236 13.8967C16.6246 13.8957 16.6256 13.8947 16.6266 13.8937C16.6271 13.8932 16.6279 13.8925 16.6281 13.8923C16.6288 13.8916 16.6295 13.8909 16.1007 13.359C15.5719 12.8272 15.5726 12.8265 15.5733 12.8258C15.5735 12.8256 15.5742 12.8249 15.5747 12.8244C15.5756 12.8235 15.5765 12.8226 15.5774 12.8217C15.5793 12.82 15.581 12.8183 15.5827 12.8166C15.5862 12.8133 15.5895 12.8103 15.5926 12.8074C15.5988 12.8018 15.6044 12.7969 15.6094 12.7929C15.6192 12.7847 15.6265 12.7795 15.631 12.7764C15.6403 12.7702 15.6384 12.773 15.6236 12.7785C15.5991 12.7876 15.501 12.8189 15.3038 12.7886C14.8905 12.7253 14.02 12.3853 12.5919 10.9654L11.5343 12.0291ZM9.97365 2.40961C8.95434 1.04802 6.94996 0.83257 5.73263 2.04299L6.79027 3.10667C7.32195 2.578 8.26623 2.63181 8.77286 3.30855L9.97365 2.40961ZM4.75168 5.70305C4.73201 5.35694 4.89075 4.9954 5.22067 4.66736L4.16303 3.60368C3.62571 4.13795 3.20329 4.89425 3.2541 5.78816L4.75168 5.70305ZM19.4723 17.7636C19.1975 18.0369 18.9029 18.1908 18.6067 18.2184L18.7459 19.7119C19.4805 19.6434 20.0824 19.2723 20.5299 18.8273L19.4723 17.7636ZM11.0063 7.72922C11.9908 6.7503 12.064 5.2019 11.2346 4.09401L10.0338 4.99295C10.4373 5.53193 10.3773 6.23938 9.9487 6.66555L11.0063 7.72922ZM20.5251 14.2869C21.3429 14.7315 21.4703 15.7769 20.8929 16.3511L21.9505 17.4148C23.2908 16.0821 22.8775 13.8584 21.2415 12.9691L20.5251 14.2869ZM17.085 13.438C17.469 13.0562 18.0871 12.9616 18.6146 13.2483L19.331 11.9305C18.2474 11.3414 16.9026 11.5041 16.0273 12.3743L17.085 13.438Z" fill="%23ffffff"%3E%3C/path%3E%3C/g%3E%3C/svg%3E');
}

.address::before {
  background-image: url('data:image/svg+xml,%3Csvg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cg id="SVGRepo_bgCarrier" stroke-width="0"%3E%3C/g%3E%3Cg id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"%3E%3C/g%3E%3Cg id="SVGRepo_iconCarrier"%3E%3Cpath d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="%23ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3C/path%3E%3Cpath d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="%23ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3C/path%3E%3C/g%3E%3C/svg%3E');
}

.email::before {
  background-image: url('data:image/svg+xml,%3Csvg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cg id="SVGRepo_bgCarrier" stroke-width="0"%3E%3C/g%3E%3Cg id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"%3E%3C/g%3E%3Cg id="SVGRepo_iconCarrier"%3E%3Cpath d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="%23ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3C/path%3E%3Crect x="3" y="5" width="18" height="14" rx="2" stroke="%23ffffff" stroke-width="2" stroke-linecap="round"%3E%3C/rect%3E%3C/g%3E%3C/svg%3E');
  top: -10px;
  left: 0;
}

.donation-info::before {
  background-image: url('data:image/svg+xml,%3Csvg fill="%23ffffff" width="26px" height="26px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="%23ffffff"%3E%3Cg id="SVGRepo_bgCarrier" stroke-width="0"%3E%3C/g%3E%3Cg id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"%3E%3C/g%3E%3Cg id="SVGRepo_iconCarrier"%3E%3Cpath d="M 16 3 C 10.486 3 6 7.486 6 13 C 6 18.514 10.486 23 16 23 C 21.514 23 26 18.514 26 13 C 26 7.486 21.514 3 16 3 z M 16 5 C 20.411 5 24 8.589 24 13 C 24 17.411 20.411 21 16 21 C 11.589 21 8 17.411 8 13 C 8 8.589 11.589 5 16 5 z M 15 7 L 15 8.1894531 C 14.855 8.2419531 14.714063 8.3061133 14.580078 8.3789062 C 14.446094 8.4516992 14.318203 8.5338281 14.197266 8.625 C 14.076328 8.7161719 13.963281 8.8161914 13.857422 8.9238281 C 13.645703 9.1391016 13.465391 9.3846484 13.326172 9.6542969 C 13.256562 9.7891211 13.196875 9.930625 13.148438 10.076172 C 13.051562 10.367266 13 10.6775 13 11 C 13 11.205 13.022109 11.405469 13.0625 11.599609 C 13.143281 11.987891 13.300547 12.350391 13.517578 12.669922 C 13.626094 12.829688 13.748516 12.978984 13.884766 13.115234 C 14.157266 13.387734 14.481719 13.608594 14.839844 13.761719 C 15.197969 13.914844 15.59 14 16 14 C 16.1425 14 16.276016 14.026953 16.396484 14.076172 C 16.516953 14.125391 16.623516 14.197734 16.712891 14.287109 C 16.802266 14.376484 16.874609 14.483047 16.923828 14.603516 C 16.973047 14.723984 17 14.8575 17 15 C 17 15.4275 16.757891 15.776172 16.396484 15.923828 C 16.276016 15.973047 16.1425 16 16 16 C 15.8575 16 15.723984 15.973047 15.603516 15.923828 C 15.483047 15.874609 15.376484 15.802266 15.287109 15.712891 C 15.108359 15.534141 15 15.285 15 15 L 13 15 C 13 15.16125 13.013828 15.320254 13.039062 15.474609 C 13.064297 15.628965 13.1 15.778281 13.148438 15.923828 C 13.196875 16.069375 13.256562 16.210879 13.326172 16.345703 C 13.395781 16.480527 13.475703 16.608281 13.564453 16.730469 C 13.653203 16.852656 13.751563 16.968535 13.857422 17.076172 C 13.963281 17.183809 14.076328 17.283828 14.197266 17.375 C 14.318203 17.466172 14.446094 17.548301 14.580078 17.621094 C 14.714062 17.693887 14.855 17.758047 15 17.810547 L 15 19 L 17 19 L 17 17.810547 C 18.015 17.443047 18.784297 16.555098 18.960938 15.474609 C 18.986172 15.320254 19 15.16125 19 15 C 19 14.795 18.977891 14.594531 18.9375 14.400391 C 18.897109 14.20625 18.838281 14.018906 18.761719 13.839844 C 18.685156 13.660781 18.590937 13.489844 18.482422 13.330078 C 18.373906 13.170312 18.251484 13.021016 18.115234 12.884766 C 17.978984 12.748516 17.829687 12.626094 17.669922 12.517578 C 17.510156 12.409063 17.339219 12.314844 17.160156 12.238281 C 16.981094 12.161719 16.79375 12.102891 16.599609 12.0625 C 16.405469 12.022109 16.205 12 16 12 C 15.8575 12 15.723984 11.973047 15.603516 11.923828 C 15.483047 11.874609 15.376484 11.802266 15.287109 11.712891 C 15.197734 11.623516 15.125391 11.516953 15.076172 11.396484 C 15.026953 11.276016 15 11.1425 15 11 C 15 10.8575 15.026953 10.723984 15.076172 10.603516 C 15.125391 10.483047 15.197734 10.376484 15.287109 10.287109 C 15.376484 10.197734 15.483047 10.125391 15.603516 10.076172 C 15.723984 10.026953 15.8575 10 16 10 C 16.57 10 17 10.43 17 11 L 19 11 C 19 10.83875 18.986172 10.679746 18.960938 10.525391 C 18.935703 10.371035 18.9 10.221719 18.851562 10.076172 C 18.560938 9.2028906 17.87 8.5044531 17 8.1894531 L 17 7 L 15 7 z M 2 21 L 2 29 L 4 29 L 4 23 L 9.3808594 23 C 8.5298594 22.435 7.7610781 21.758 7.0800781 21 L 2 21 z M 24.919922 21 C 24.238922 21.758 23.470141 22.435 22.619141 23 L 28 23 L 28 29 L 30 29 L 30 21 L 24.919922 21 z M 6 25 L 6 27 L 26 27 L 26 25 L 6 25 z"%3E%3C/path%3E%3C/g%3E%3C/svg%3E');
  top: 30%;
}
</style>
