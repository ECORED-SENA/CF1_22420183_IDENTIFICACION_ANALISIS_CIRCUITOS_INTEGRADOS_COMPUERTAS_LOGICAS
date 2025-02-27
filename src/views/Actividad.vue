<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Circuitos integrados y electrónica',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar fundamentales de circuitos integrados, señales analógicas y digitales, tecnologías de fabricación, y características de las familias lógicas en electrónica.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es una característica principal de las señales analógicas? ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Son señales que varían de forma continua en el tiempo. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Son señales discretas que solo pueden tener valores 0 y 1. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'No pueden representar magnitudes como la temperatura o el audio. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Son fáciles de almacenar y manipular digitalmente. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de las siguientes es una ventaja de las señales digitales sobre las analógicas? ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Varían de forma continua en el tiempo. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Son difíciles de comparar y calcular. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Representan valores con ondas senoidales. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Facilidad para almacenar, manipular y recuperar información rápidamente. ',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué representa el término "CI" en electrónica? ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Control inteligente. ', esCorrecta: false },
            { id: 'b', texto: 'Conexión interna. ', esCorrecta: false },
            { id: 'c', texto: 'Circuito integrado. ', esCorrecta: true },
            { id: 'd', texto: 'Compuerta intermedia. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál es la función principal de un circuito integrado? ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar el tamaño de los componentes electrónicos. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Convertir señales digitales en analógicas. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Formar un circuito electrónico para una función específica. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Realizar funciones mecánicas. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué indica la muesca o marca en un circuito integrado? ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El tipo de material del encapsulado. ',
              esCorrecta: false,
            },
            { id: 'b', texto: 'El fabricante del CI. ', esCorrecta: false },
            {
              id: 'c',
              texto: 'La ubicación correcta para numerar los pines. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El nivel de integración del circuito. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de las siguientes NO es una característica de los circuitos integrados? ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Operan con señales binarias. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Consumen gran cantidad de potencia. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Son de tamaño muy reducido. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducen el número de conexiones externas. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es una característica de los circuitos integrados digitales? ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Operan con señales continuas. ',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Son de operación fija. ', esCorrecta: false },
            {
              id: 'c',
              texto: 'Contienen componentes como amplificadores. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Son programables y operan con señales binarias. ',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué tipo de encapsulado de CI es más fácil de instalar y tiene pines en dos hileras? ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Plano. ', esCorrecta: false },
            { id: 'b', texto: 'Superficial. ', esCorrecta: false },
            { id: 'c', texto: 'Modular. ', esCorrecta: false },
            { id: 'd', texto: 'Dual en línea (DIP). ', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Los niveles de integración SSI, MSI, LSI, VLSI, ULSI y GLSI se refieren a: ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tipos de señales analógicas. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tecnologías de fabricación MOS. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cantidad de compuertas lógicas en un CI. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Familias lógicas de tecnología bipolar. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál de las siguientes es una familia lógica de tecnología bipolar más popular y ampliamente utilizada? ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'TTL (<i>Transistor Transistor Logic</i>). ',
              esCorrecta: true,
            },
            { id: 'b', texto: 'RTL. ', esCorrecta: false },
            { id: 'c', texto: 'DTL. ', esCorrecta: false },
            { id: 'd', texto: 'PMOS. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: 'La tecnología CMOS se caracteriza por: ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso en aplicaciones industriales robustas. ',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Alto consumo de energía. ', esCorrecta: false },
            {
              id: 'c',
              texto: 'Ser obsoleta y no fabricarse más. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Bajo consumo y alta integración. ',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'En un circuito integrado, el término "<i>Fan Out</i>" se refiere a: ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Número máximo de entradas que puede tener una compuerta. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Voltaje en el que la compuerta cambia de estado lógico. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Límite de tensión de ruido admisible en la entrada. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Número máximo de cargas que pueden ser gobernadas en la salida de una compuerta. ',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál de las siguientes tecnologías MOS es una variante mejorada del CMOS con alta velocidad? ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'PMOS. ', esCorrecta: false },
            { id: 'b', texto: 'HCMOS. ', esCorrecta: true },
            { id: 'c', texto: 'NMOS. ', esCorrecta: false },
            { id: 'd', texto: 'HMOS. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Los circuitos integrados análogos son programables y operan con señales binarias. ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'b', texto: 'Verdadero. ', esCorrecta: false },
            { id: 'a', texto: 'Falso.  ', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'La tecnología bipolar ECL es la más rápida y se utiliza en circuitos de alta velocidad. ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'b', texto: 'Verdadero. ', esCorrecta: true },
            { id: 'a', texto: 'Falso. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
