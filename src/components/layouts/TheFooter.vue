<template>
  <footer>
    <nav
      class="bg-red d-flex justify-content-between align-items-center p-2 flex-column flex-lg-row"
    >
      <div
        class="d-flex flex-wrap justify-content-center gap-5 my-4 w-50 w-100 flex-column flex-xxl-row"
      >
        <div
          class="d-flex flex-column text-white text-nowrap align-items-center"
        >
          <h5 class="fw-bold">Adresa</h5>
          <span>Franjčevićeva ul., 10361, Dumovec</span>
        </div>
        <div
          class="d-flex flex-column text-white text-nowrap align-items-center"
        >
          <h5 class="fw-bold">Kontakt</h5>
          <span>mob: +385 (0)91 321 4696</span
          ><span>mob: +385 (0)91 521 4696</span>
          <span>info@noina-arka.hr</span>
        </div>
        <div
          class="d-flex flex-column text-white text-nowrap align-items-center"
        >
          <h5 class="fw-bold">Linkovi</h5>
          <router-link to="/home">Početna</router-link>
          <router-link to="/dogs">Udomi psa!</router-link>
          <router-link to="/cats">Udomi mačku!</router-link>
          <router-link to="/about">O nama</router-link>
          <router-link to="/contact">Kontakt</router-link>
        </div>
      </div>
      <GoogleMap
        api-key="AIzaSyDYidypNWHSTgjFwIg7kkKWbTADK20g_iA"
        style="width: 50%; height: 300px"
        class="google-map w-100"
        :center="center"
        :zoom="14"
      >
        <Marker :options="{ position: center }" />
      </GoogleMap>
    </nav>
    <nav class="navbar navbar-expand bg-red border-top">
      <div
        class="container-fluid text-white d-flex flex-column gap-3 py-3 text-center justify-content-center align-items-center flex-md-row justify-content-md-evenly"
      >
        <p class="m-0">
          © 2008 - 2024 Pino - hrvatska udruga zaštitnika životinja
        </p>
        <div class="d-flex gap-2">
          <a
            id="fb"
            target="_blank"
            href="https://www.facebook.com/noinaarka"
          ></a>
          <a id="twitter" target="_blank" href="https://x.com/Noina_Arka"></a>
          <a
            id="ig"
            target="_blank"
            href="https://www.instagram.com/_noinaarka_/"
          ></a>
          <a
            id="yt"
            target="_blank"
            href="https://www.youtube.com/user/noinaarka/videos"
          ></a>
        </div>
      </div>
    </nav>
  </footer>
</template>

<script setup>
import { GoogleMap, Marker } from "vue3-google-map";

const center = { lat: 45.803741455078125, lng: 16.160058975219727 };
</script>

<style scoped>
a:not(.d-flex.gap-2 a).active,
a:not(.d-flex.gap-2 a):focus,
a:not(.d-flex.gap-2 a):hover {
  color: #ffffff !important;
  border-color: #ffffff;
}
.d-flex.gap-2 a {
  display: block;
  text-align: center;
  background-color: var(--red-color);
  filter: brightness(90%);
  width: 32px;
  height: 32px;
  border-radius: 50%;

  transition: all 0.2s ease-in-out;
}

a:not(.d-flex.gap-2 a) {
  width: fit-content;
  border-bottom: 2px solid transparent;
}

#fb::before,
#twitter::before,
#ig::before,
#yt::before {
  content: "";
  display: block;
  background-repeat: no-repeat;
  background-position: center;
  width: 32px;
  height: 32px;
}

#fb::before {
  background-image: url("data:image/svg+xml,%3Csvg width='18px' height='18px' viewBox='-5 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill='' stroke=''%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Ctitle%3Efacebook %5B%23176%5D%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Dribbble-Light-Preview' transform='translate(-385.000000, -7399.000000)' fill='%23ffffff'%3E%3Cg id='icons' transform='translate(56.000000, 160.000000)'%3E%3Cpath d='M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z' id='facebook-%5B%23176%5D'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

#fb:hover {
  background-color: #45619d;
}

#twitter::before {
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D'20px'%20height%3D'20px'%20viewBox%3D'0%200%2048%2048'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20fill%3D'%23ffffff'%20stroke%3D'%23ffffff'%3E%3Cpath%20d%3D'M38.74%2C16.55v1c0%2C10.07-7.64%2C21.61-21.62%2C21.61A21.14%2C21.14%2C0%2C0%2C1%2C5.5%2C35.71a12.22%2C12.22%2C0%2C0%2C0%2C1.81.11%2C15.25%2C15.25%2C0%2C0%2C0%2C9.44-3.24%2C7.56%2C7.56%2C0%2C0%2C1-7.1-5.29%2C6.9%2C6.9%2C0%2C0%2C0%2C1.44.15%2C7.53%2C7.53%2C0%2C0%2C0%2C2-.27A7.57%2C7.57%2C0%2C0%2C1%2C7%2C19.72v-.1a7.42%2C7.42%2C0%2C0%2C0%2C3.44.94A7.54%2C7.54%2C0%2C0%2C1%2C8.05%2C10.5a21.58%2C21.58%2C0%2C0%2C0%2C15.68%2C7.94%2C6.38%2C6.38%2C0%2C0%2C1-.21-1.74%2C7.55%2C7.55%2C0%2C0%2C1%2C13.17-5.31%2C15.59%2C15.59%2C0%2C0%2C0%2C4.83-1.85%2C7.65%2C7.65%2C0%2C0%2C1-3.39%2C4.27%2C15.87%2C15.87%2C0%2C0%2C0%2C4.37-1.26%2C15.56%2C15.56%2C0%2C0%2C1-3.76%2C4Z'%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
}

#twitter:hover {
  background-color: #55acee;
}

#ig::before {
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D'18px'%20height%3D'18px'%20viewBox%3D'0%200%2024%2024'%20fill%3D'none'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20stroke%3D'%23ffffff'%3E%3Cpath%20fill-rule%3D'evenodd'%20clip-rule%3D'evenodd'%20d%3D'M12%2018C15.3137%2018%2018%2015.3137%2018%2012C18%208.68629%2015.3137%206%2012%206C8.68629%206%206%208.68629%206%2012C6%2015.3137%208.68629%2018%2012%2018ZM12%2016C14.2091%2016%2016%2014.2091%2016%2012C16%209.79086%2014.2091%208%2012%208C9.79086%208%208%209.79086%208%2012C8%2014.2091%209.79086%2016%2012%2016Z'%20fill%3D'%23ffffff'%3E%3C%2Fpath%3E%3Cpath%20d%3D'M18%205C17.4477%205%2017%205.44772%2017%206C17%206.55228%2017.4477%207%2018%207C18.5523%207%2019%206.55228%2019%206C19%205.44772%2018.5523%205%2018%205Z'%20fill%3D'%23ffffff'%3E%3C%2Fpath%3E%3Cpath%20fill-rule%3D'evenodd'%20clip-rule%3D'evenodd'%20d%3D'M1.65396%204.27606C1%205.55953%201%207.23969%201%2010.6V13.4C1%2016.7603%201%2018.4405%201.65396%2019.7239C2.2292%2020.8529%203.14708%2021.7708%204.27606%2022.346C5.55953%2023%207.23969%2023%2010.6%2023H13.4C16.7603%2023%2018.4405%2023%2019.7239%2022.346C20.8529%2021.7708%2021.7708%2020.8529%2022.346%2019.7239C23%2018.4405%2023%2016.7603%2023%2013.4V10.6C23%207.23969%2023%205.55953%2022.346%204.27606C21.7708%203.14708%2020.8529%202.2292%2019.7239%201.65396C18.4405%201%2016.7603%201%2013.4%201H10.6C7.23969%201%205.55953%201%204.27606%201.65396C3.14708%202.2292%202.2292%203.14708%201.65396%204.27606ZM13.4%203H10.6C8.88684%203%207.72225%203.00156%206.82208%203.0751C5.94524%203.14674%205.49684%203.27659%205.18404%203.43597C4.43139%203.81947%203.81947%204.43139%203.43597%205.18404C3.27659%205.49684%203.14674%205.94524%203.0751%206.82208C3.00156%207.72225%203%208.88684%203%2010.6V13.4C3%2015.1132%203.00156%2016.2777%203.0751%2017.1779C3.14674%2018.0548%203.27659%2018.5032%203.43597%2018.816C3.81947%2019.5686%204.43139%2020.1805%205.18404%2020.564C5.49684%2020.7234%205.94524%2020.8533%206.82208%2020.9249C7.72225%2020.9984%208.88684%2021%2010.6%2021H13.4C15.1132%2021%2016.2777%2020.9984%2017.1779%2020.9249C18.0548%2020.8533%2018.5032%2020.7234%2018.816%2020.564C19.5686%2020.1805%2020.1805%2019.5686%2020.564%2018.816C20.7234%2018.5032%2020.8533%2018.0548%2020.9249%2017.1779C20.9984%2016.2777%2021%2015.1132%2021%2013.4V10.6C21%208.88684%2020.9984%207.72225%2020.9249%206.82208C20.8533%205.94524%2020.7234%205.49684%2020.564%205.18404C20.1805%204.43139%2019.5686%203.81947%2018.816%203.43597C18.5032%203.27659%2018.0548%203.14674%2017.1779%203.0751C16.2777%203.00156%2015.1132%203%2013.4%203Z'%20fill%3D'%23ffffff'%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
}

#ig:hover {
  background-color: #e1306c;
}

#yt::before {
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2226px%22%20height%3D%2226px%22%20viewBox%3D%220%20-0.5%2025%2025%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20id%3D%22SVGRepo_bgCarrier%22%20stroke-width%3D%220%22%3E%3C%2Fg%3E%3Cg%20id%3D%22SVGRepo_tracerCarrier%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fg%3E%3Cg%20id%3D%22SVGRepo_iconCarrier%22%3E%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M18.168%2019.0028C20.4724%2019.0867%2022.41%2017.29%2022.5%2014.9858V9.01982C22.41%206.71569%2020.4724%204.91893%2018.168%205.00282H6.832C4.52763%204.91893%202.58998%206.71569%202.5%209.01982V14.9858C2.58998%2017.29%204.52763%2019.0867%206.832%2019.0028H18.168Z%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M12.008%209.17784L15.169%2011.3258C15.3738%2011.4454%2015.4997%2011.6647%2015.4997%2011.9018C15.4997%2012.139%2015.3738%2012.3583%2015.169%2012.4778L12.008%2014.8278C11.408%2015.2348%2010.5%2014.8878%2010.5%2014.2518V9.75184C10.5%209.11884%2011.409%208.77084%2012.008%209.17784Z%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%20%3C%2Fg%3E%3C%2Fsvg%3E");
}

#yt:hover {
  background-color: #cc181e;
}

@media (min-width: 576px) {
  .google-map {
    height: 400px !important;
  }
}
</style>
