<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .cont_intro.pb-5
      p(data-aos="fade-right") Los circuitos integrados (CI) han revolucionado la tecnología al permitir dispositivos más pequeños y eficientes. Estos componentes electrónicos, esenciales en múltiples aplicaciones, realizan desde funciones básicas hasta procesos complejos en microprocesadores.

      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mt-5(data-aos="flip-up" data-aos-duration="700")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/intro2.png')})`}"
        )
        .bloque-texto-g__texto.p-4.p-xl-5
          p.mb-0 Las principales tecnologías de los CI son la bipolar y MOS. La tecnología bipolar se destaca por su alta velocidad y resistencia al ruido, mientras que MOS lidera por su bajo consumo energético y alta integración, siendo la base de dispositivos actuales.
      
      .row.mt-4(data-aos="fade-up")
        .col-md-auto.d-none.d-md-block(style="place-self:center;")
          figure
            img(src="@/assets/curso/intro3.svg")
        .col-md(style="place-self:center;")
          p.mb-0 La evolución de estas tecnologías ha impulsado la miniaturización y el rendimiento de los sistemas electrónicos, transformando áreas como la computación y las telecomunicaciones.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
