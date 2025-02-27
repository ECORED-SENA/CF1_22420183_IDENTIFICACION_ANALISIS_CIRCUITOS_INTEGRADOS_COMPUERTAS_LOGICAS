<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Electrónica digital y analógica

    .row(data-aos="fade-up" data-aos-duration="750")
      .col-lg.pe-lg-0
        .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#FAF1FE;")
          p.mb-0 La electrónica analógica trabaja con señales continuas que representan magnitudes variables, como la temperatura o el audio. Estas señales son difíciles de almacenar y procesar. Por otro lado, la electrónica digital utiliza señales discretas representadas en números binarios (0 y 1), lo que permite manipular y almacenar información de forma rápida, precisa y confiable. Ambas son fundamentales en el desarrollo de sistemas electrónicos modernos.
      .col-lg-auto.d-none.d-lg-block.ps-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png")
    
    .cont_decorativo.mb-4.mt-5.p-relative(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/2.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Electrónica analógica

    .cont_1_1 
      p(data-aos="fade-right") La electrónica analógica representa magnitudes o señales que varían de forma continua en el tiempo, como una onda senoidal. Ejemplos de estas señales incluyen:

      .row.mt-5.justify-content-center
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .p-3.h-100(style="background-color:#D4F0E0;border-radius:15px;box-shadow:0px 3px 3px rgba(0,0,0,.13);")
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/4.svg")
              .col(style="place-self:center;")
                p.mb-0.fw-bold La velocidad.
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .p-3.h-100(style="background-color:#D4F0E0;border-radius:15px;box-shadow:0px 3px 3px rgba(0,0,0,.13);")
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/5.svg")
              .col(style="place-self:center;")
                p.mb-0.fw-bold La temperatura.
        .col-lg.col-md-9(data-aos="zoom-in")
          .p-3.h-100(style="background-color:#D4F0E0;border-radius:15px;box-shadow:0px 3px 3px rgba(0,0,0,.13);")
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/6.svg")
              .col(style="place-self:center;")
                p.mb-0.fw-bold El audio, entre otras.
      
      p.mt-5(data-aos="fade-right") Una señal analógica se caracteriza por ser un voltaje o corriente continuo. Sin embargo, resulta difícil almacenar, manipular, comparar, calcular y recuperar información de señales analógicas o continuas.

      .col-xl-8.col-lg-10.m-auto.mt-5.pb-5
        .titulo-sexto.color-acento-contenido(data-aos="fade-down")
          h5 Figura 1.
          span #[i Señal analógica]
    .col-xl-8.col-lg-10.m-auto
      figure(data-aos="zoom-in-up")
        img(src="@/assets/curso/tema1/7.svg" alt="La figura presenta una señal analógica, representada por una onda continua que varía suavemente con el tiempo.")
    

    .cont_1_1.pt-5
      .cont_decorativo.mb-4.p-relative(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/tema1/2.svg")
          .col.ps-2(style="place-self:end;")
            h3.mb-0.mb-lg-2.pe-4 Electrónica digital

      p(data-aos="fade-right") La electrónica digital representa valores o cantidades mediante números binarios (0 y 1) a través de señales discretas, también conocidas como señales digitales. Estas solo pueden adoptar dos valores: "0" o "1". Algunos ejemplos incluyen:

      .row.mt-5.justify-content-center
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .p-3.h-100(style="background-color:#ECCCFD;border-radius:15px;box-shadow:0px 3px 3px rgba(0,0,0,.13);")
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/8.svg")
              .col(style="place-self:center;")
                p.mb-0.fw-bold Cantidad de productos.
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .p-3.h-100(style="background-color:#ECCCFD;border-radius:15px;box-shadow:0px 3px 3px rgba(0,0,0,.13);")
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/9.svg")
              .col(style="place-self:center;")
                p.mb-0.fw-bold Cantidad de estudiantes.
        .col-lg.col-md-9(data-aos="zoom-in")
          .p-3.h-100(style="background-color:#ECCCFD;border-radius:15px;box-shadow:0px 3px 3px rgba(0,0,0,.13);")
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/10.svg")
              .col(style="place-self:center;")
                p.mb-0.fw-bold Cantidad de ciudades, entre otros.

      p.mt-5(data-aos="fade-right") A diferencia de las señales analógicas, la información digital se puede almacenar, manipular, comparar, calcular y recuperar de forma rápida, exacta, precisa y continua.
    
    .cont_1_2.mt-5
      .col-xl-8.col-lg-10.m-auto
        .titulo-sexto.color-acento-contenido(data-aos="fade-down")
          h5 Figura 2.
          span #[i Señal digital]
        figure.mt-5(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema1/11.svg" alt="La figura presenta  una señal digital, representada por una forma escalonada que alterna entre dos niveles discretos  en función del tiempo t. ")
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
