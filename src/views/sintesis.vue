<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-down" data-aos-duration="700") A continuación, se presenta una síntesis de la temática estudiada en el componente formativo. 

    .row.justify-content-center.p-4(style="background-color:#F6F6F6;border-radius:20px;")
      .col-lg-10.mb-5
        figure(data-aos="zoom-in-up" data-aos-duration="700")
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis se presenta  el proceso de transformación de señales en electrónica y su relación con los circuitos integrados. La electrónica analógica convierte señales como voz, temperatura o presión en señales eléctricas. La electrónica digital transforma cualquier señal en señal digital (conjunto de números). Los circuitos integrados se clasifican en digitales y análogos, organizados según familias lógicas (TTL, CMOS) y niveles de integración (SSI, MSI, LSI, VLSI, ULSI, GLSI). ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
