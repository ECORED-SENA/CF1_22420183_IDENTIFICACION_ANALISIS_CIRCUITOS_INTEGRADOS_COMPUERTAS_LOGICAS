<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Circuito integrado 
    
    .cont_intro
      p(data-aos="fade-left") Un circuito integrado (CI), también conocido como "chip", es un cristal semiconductor de silicio que contiene múltiples componentes eléctricos interconectados, diseñados para formar un circuito electrónico y realizar una función específica. Los CI son de tamaño reducido y pueden contener una gran cantidad de componentes en su interior. Gracias a los avances tecnológicos, actualmente se fabrican chips microscópicos que solo pueden ser manipulados por máquinas o robots electrónicos.

      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mt-5(data-aos="flip-up" data-aos-duration="700")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4.p-xl-5
          p.mb-0 Los CI poseen una marca, línea blanca o muesca en su estructura, que indica el punto de inicio para numerar los pines. El pin 1 se encuentra a la izquierda de la muesca, y la numeración sigue en sentido contrario a las manecillas del reloj.

      .row.mt-4(data-aos="fade-up")
        .col-md-auto.d-none.d-md-block(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/2.svg")
        .col-md(style="place-self:center;")
          p.mb-0 Los componentes están encapsulados en materiales como plástico, cerámica o metal, y las clavijas o patas sirven para conectarlos con otros circuitos o componentes electrónicos. Además, cada CI tiene un código o identificación impresa en la superficie del encapsulado.
    
    p.mt-5(data-aos="fade-right") Las características de los CI son:


    .pb-5.cont_1_2.mt-5
      .row.mt-5.justify-content-center
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in")
          .p-4.h-100.text-center(style="background-color:#E8F2FF;border-radius:19px;box-shadow:0px 3px 3px rgba(0,0,0,.13);")
            p.mb-4.fw-bold Operan con señales binarias.
            figure
              img.d-inline(src="@/assets/curso/tema2/3.svg" style="max-width:90px;")
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in")
          .p-4.h-100.text-center(style="background-color:#E8F2FF;border-radius:19px;box-shadow:0px 3px 3px rgba(0,0,0,.13);")
            p.mb-4.fw-bold Están formados por compuertas digitales interconectadas.
            figure
              img.d-inline(src="@/assets/curso/tema2/4.svg" style="max-width:90px;")
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in")
          .p-4.h-100.text-center(style="background-color:#E8F2FF;border-radius:19px;box-shadow:0px 3px 3px rgba(0,0,0,.13);")
            p.mb-4.fw-bold Son de tamaño muy reducido.
            figure
              img.d-inline(src="@/assets/curso/tema2/5.svg" style="max-width:90px;")
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in")
          .p-4.h-100.text-center(style="background-color:#E8F2FF;border-radius:19px;box-shadow:0px 3px 3px rgba(0,0,0,.13);")
            p.mb-4.fw-bold Tienen un costo bajo.
            figure
              img.d-inline(src="@/assets/curso/tema2/6.svg" style="max-width:90px;")
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in")
          .p-4.h-100.text-center(style="background-color:#E8F2FF;border-radius:19px;box-shadow:0px 3px 3px rgba(0,0,0,.13);")
            p.mb-4.fw-bold Consumen poca potencia.
            figure
              img.d-inline(src="@/assets/curso/tema2/7.svg" style="max-width:90px;")
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in")
          .p-4.h-100.text-center(style="background-color:#E8F2FF;border-radius:19px;box-shadow:0px 3px 3px rgba(0,0,0,.13);")
            p.mb-4.fw-bold Son confiables y presentan baja probabilidad de fallas.
            figure
              img.d-inline(src="@/assets/curso/tema2/8.svg" style="max-width:90px;")
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in")
          .p-4.h-100.text-center(style="background-color:#E8F2FF;border-radius:19px;box-shadow:0px 3px 3px rgba(0,0,0,.13);")
            p.mb-4.fw-bold Su velocidad de operación es alta.
            figure
              img.d-inline(src="@/assets/curso/tema2/9.svg" style="max-width:90px;")
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in")
          .p-4.h-100.text-center(style="background-color:#E8F2FF;border-radius:19px;box-shadow:0px 3px 3px rgba(0,0,0,.13);")
            p.mb-4.fw-bold Reducen la cantidad de conexiones externas necesarias.
            figure
              img.d-inline(src="@/assets/curso/tema2/10.svg" style="max-width:90px;")
      
      p.mt-5(data-aos="fade-right") Los tipos de CI son:
    
    .cont_2_3.mt-5.pb-5
      .cont_2_2
        .col-xl-8.m-auto
          .row.justify-content-center
            .col-xl.col-lg-8.col-md-10.mb-4.mb-xl-0(data-aos="zoom-in")
              .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
                .indicador--hover(v-if="indicadorTarjetaFlip")
                .tarjeta-flip__contenedor
                  .tarjeta-flip__img.d-flex.align-content-center.align-items-end.text-center(:style="{'background-image': `url(${require('@/assets/curso/tema2/12.png')})`}" style="box-shadow:0px 4px 20px rgba(0,0,0,.18);")
                    .w-100.text-center
                      h4.mb-4.p-1.ps-5.pe-5.m-auto(style="background-color:#FD96CA;border-radius:5px;max-width:fit-content") Dual en línea (DIP)
                  .tarjeta-flip__contenido.p-4.p-xl-5.bg-white.text-center(style="box-shadow:0px 4px 20px rgba(0,0,0,.18);")
                    span.p-1.ps-5.pe-5.h4.m-auto(style="background-color:#FD96CA;border-radius:5px;") Dual en línea (DIP)
                    .mt-5
                      ul.lista-ul.text-start
                        li.d-flex
                          i.fas.fa-check-circle(style="color:#67987C;")
                          span Bajo costo.
                        li.d-flex
                          i.fas.fa-check-circle(style="color:#67987C;")
                          span Fácil instalación.
                        li.d-flex
                          i.fas.fa-check-circle(style="color:#67987C;")
                          span Tamaño estándar.
                        li.d-flex
                          i.fas.fa-check-circle(style="color:#67987C;")
                          span Pines dispuestos en dos hileras.

            .col-xl.col-lg-8.col-md-10.mb-4.mb-xl-0(data-aos="zoom-in")
              .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
                .tarjeta-flip__contenedor
                  .tarjeta-flip__img.d-flex.align-content-center.align-items-end.text-center(:style="{'background-image': `url(${require('@/assets/curso/tema2/13.png')})`}" style="box-shadow:0px 4px 20px rgba(0,0,0,.18);")
                    .w-100.text-center
                      h4.mb-4.p-1.ps-5.pe-5.m-auto(style="background-color:#FD96CA;border-radius:5px;max-width:fit-content") Planos
                  .tarjeta-flip__contenido.p-4.p-xl-5.bg-white.text-center(style="box-shadow:0px 4px 20px rgba(0,0,0,.18);")
                    span.p-1.ps-5.pe-5.h4.m-auto(style="background-color:#FD96CA;border-radius:5px;") Planos
                    .mt-5
                      ul.lista-ul.text-start
                        li.d-flex
                          i.fas.fa-check-circle(style="color:#67987C;")
                          span Más costosos.
                        li.d-flex
                          i.fas.fa-check-circle(style="color:#67987C;")
                          span Tamaño muy reducido.
                        li.d-flex
                          i.fas.fa-check-circle(style="color:#67987C;")
                          span Instalación más compleja debido a los pines planos.

    .row(style="margin-top:4rem;")
      .col-lg.mb-4.mb-lg-0.pe-lg-0(data-aos="fade-right")
        .h-100.p-4.p-xl-5(style="background-color:#C7E0FF;border-radius:15px 0px 0px 15px;")
          .row
            .col-auto
              figure
                img(src="@/assets/curso/tema2/14.svg")
            .col(style="place-self:end;")
              h4.p-1.ps-3.pe-3(style="background-color:#FD96CA;max-width:fit-content;") Análogos o lineales
          ul.lista-ul.text-start.mt-5.mb-0
            li.d-flex
              i.fas.fa-check-circle(style="color:#67987C;")
              span Operación fija.
            li.d-flex
              i.fas.fa-check-circle(style="color:#67987C;")
              span Contienen componentes simples y complejos, como transistores y amplificadores.
            li.d-flex
              i.fas.fa-check-circle(style="color:#67987C;")
              span Funcionan con señales continuas.
            li.d-flex.mb-0
              i.fas.fa-check-circle(style="color:#67987C;")
              span Realizan una función específica.
      .col-lg.mb-4.mb-lg-0.ps-lg-0(data-aos="fade-left")
        .h-100.p-4.p-xl-5(style="background-color:#E8F2FF;border-radius:0px 15px 15px 0px;")
          .row
            .col-auto
              figure
                img(src="@/assets/curso/tema2/15.svg")
            .col(style="place-self:end;")
              h4.p-1.ps-3.pe-3(style="background-color:#FD96CA;max-width:fit-content;") Análogos o lineales
          ul.lista-ul.text-start.mt-5.mb-0
            li.d-flex
              i.fas.fa-check-circle(style="color:#67987C;")
              span Son programables.
            li.d-flex
              i.fas.fa-check-circle(style="color:#67987C;")
              span Incluyen desde compuertas lógicas hasta microprocesadores.
            li.d-flex.mb-0 
              i.fas.fa-check-circle(style="color:#67987C;")
              span Funcionan con señales binarias.
    
    .cont_decorativo.mb-4.mt-5.p-relative(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/2.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Niveles o escalas de integración en los que se puede clasificar un CI
    
    .row
      .col-lg(data-aos="fade-right" style="place-self:center;")
        p El nivel de integración se refiere a la cantidad de compuertas lógicas que puede tener un CI. Es decir, cuanto más compuertas y sistemas tenga un chip, podrá realizar más funciones con menos chips.
        p.mb-0 A continuación, la clasificación por niveles de integración:
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/16.png")
    
    .cont_1_2.mt-4.pt-5.pb-5
      .col-xl-10.m-auto
        .titulo-sexto.color-acento-contenido(data-aos="fade-down")
          h5 Tabla 1.
          span Niveles o escalas de integración en los que se puede clasificar un CI
        .tabla-a.color-acento-contenido(data-aos="fade-up")
          table
            thead
              tr(style="background-color:#F3F8FF;")
                th Escala de integración
                th Significado
                th Capacidad de integración
                th Aplicaciones
            tbody.bg-white
              tr
                td SSI
                td #[em Small Scale Integration]
                td Hasta 10 puertas
                td Puertas lógicas
              tr
                td MSI
                td #[em Medium Scale Integration]
                td Entre 10 y 100 puertas
                td Codificadores, multiplexores
              tr
                td LSI
                td #[em Large Scale Integration]
                td Entre 100 y 1.000 puertas
                td Calculadoras elementales, primeros microprocesadores
              tr
                td VLSI
                td #[em Very Large Scale Integration]
                td De 1.000 a 10.000 puertas
                td Miniaturización de equipos
              tr
                td ULSI
                td #[em Ultra Large Scale Integration]
                td De 10.000 a 1.000.000 puertas
                td Microprocesadores avanzados
              tr
                td GLSI
                td #[em Giga Large Scale Integration]
                td Más de 1.000.000 de puertas
                td Microcontroladores de última generación

    .cont_decorativo.mb-4.mt-5.p-relative(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/2.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Familias lógicas de los CI
    
    .row
      .col-lg(data-aos="fade-right" style="place-self:center;")
        p Para fabricar CI existen varias técnicas o tecnologías, y gracias a estas se han dividido los CI por familias lógicas, de acuerdo con la tecnología empleada en su fabricación. Cada familia se identifica por características particulares.
        p.fw-bold.mb-0 Características
        p Las propiedades de un circuito digital se usan para comparar las compuertas de las diferentes familias lógicas. 
        p.mb-0 Estas incluyen:
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/17.png")
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-5(data-aos="flip-up" data-aos-duration="700")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/18.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-xl-5
        ul.lista-ul.mb-0
          li.d-flex
            i.lista-ul__vineta
            span #[strong #[em Fan Out] (cargabilidad de salida):] máximo número de cargas que pueden ser gobernadas en la salida de la compuerta sin alterar su operación.
          li.d-flex
            i.lista-ul__vineta
            span #[strong #[em Fan In] (cargabilidad de entrada):] número máximo de entradas que puede tener una compuerta.
          li.d-flex
            i.lista-ul__vineta
            span #[strong Tensión de umbral:] voltaje en el que la compuerta cambia de estado lógico (cero o uno).
          li.d-flex.mb-0
            i.lista-ul__vineta
            span #[strong Margen de ruido:] límite de tensión de ruido admisible en la entrada del elemento lógico sin alterar su salida.
    
    p.mt-5(data-aos="fade-right") Las familias lógicas se dividen en dos tipos de tecnologías:

    p.mt-5.fw-bold(data-so="fade-up") Tecnología bipolar

    .cont_1_2
      .row
        .col-lg(data-aos="fade-right" style="place-self:center;")
          p La tecnología bipolar fue una de las primeras en desarrollarse para la fabricación de circuitos integrados. Se basa en el uso de transistores bipolares, que ofrecen alta velocidad de operación y capacidad de manejo de señales con mayor corriente en comparación con otras tecnologías como MOS. Aunque en la actualidad ha sido reemplazada en muchas aplicaciones por tecnologías más eficientes como CMOS, sigue siendo utilizada en ciertas áreas donde se requieren características específicas como velocidad extrema y resistencia al ruido.
          p.mb-0 A continuación, se describen las principales familias de la tecnología bipolar:
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema2/19.svg")
      
      .col-xl-8.col-lg-10.m-auto.mt-5
        .titulo-sexto.color-acento-contenido(data-aos="fade-down")
          h5 Tabla 2.
          span Tecnología bipolar
        .tabla-a.color-acento-contenido(data-aos="fade-up")
          table
            thead
              tr(style="background-color:#F3F8FF;")
                th Norma
                th Significado
                th Aplicaciones
            tbody.bg-white
              tr
                td RTL
                td #[em Resistor Transistor Logic]
                td Obsoleta, ya no se fabrica.
              tr
                td DTL
                td #[em Diode Transistor Logic]
                td Obsoleta, ya no se fabrica.
              tr
                td HTL
                td #[em High Threshold Logic]
                td Alta inmunidad al ruido. Usada en aplicaciones industriales.
              tr
                td TTL
                td #[em Transistor Transistor Logic]
                td Alta popularidad. Alimentación de 5V. Variantes como TTL-LS, TTL Schottky.
              tr
                td ECL
                td #[em Emitter Coupled Logic]
                td Más rápida. Utilizada en circuitos de alta velocidad.
              tr
                td IIL
                td #[em Integrated Injection Logic]
                td Mayor densidad de integración, llegando a microprocesadores.

    p.mt-5.fw-bold(data-so="fade-up") Tecnologías MOS (Metal Oxide Semiconductor)

    .row.mt-5
      .col-lg(data-aos="fade-right" style="place-self:center;")
        p La tecnología MOS (Metal Oxide Semiconductor) es una de las más significativas e importantes en el ámbito de los circuitos integrados. Esta tecnología se basa en el uso de transistores MOS, que ofrecen ventajas clave como un consumo energético reducido, mayor densidad de integración y una notable velocidad de operación. Su evolución ha permitido el desarrollo de dispositivos con capacidades superiores y mayor eficiencia, siendo una base esencial para los microprocesadores modernos y otros sistemas electrónicos avanzados.
        p.mb-0 A continuación, se describen las principales variantes de esta tecnología:
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/20.png")
      
    .cont_1_2.mt-5.pb-5
      .col-xl-8.col-lg-10.m-auto
        .titulo-sexto.color-acento-contenido(data-aos="fade-down")
          h5 Tabla 3.
          span Tecnologías MOS (Metal Oxide Semiconductor)
        .tabla-a.color-acento-contenido(data-aos="fade-up")
          table
            thead
              tr(style="background-color:#F3F8FF;")
                th(style="width:30%;") Nombre
                th Características de la tecnología MOS
            tbody.bg-white
              tr
                td PMOS
                td Anticuada. Basada en transistores MOS de canal P.
              tr
                td NMOS
                td Más rápida que PMOS. Usada en microprocesadores de 8 bits.
              tr
                td CMOS
                td Dominante en CI de integración media. Bajo consumo. Alimentación entre 3 y 15V.
              tr
                td HCMOS
                td Versión mejorada del CMOS. Alta velocidad, compatible con circuitos TTL.
              tr
                td HMOS
                td Tecnología avanzada por Intel. Alta densidad y velocidad. Integración de millones de transistores.




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    indicadorTarjetaFlip: true,
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
