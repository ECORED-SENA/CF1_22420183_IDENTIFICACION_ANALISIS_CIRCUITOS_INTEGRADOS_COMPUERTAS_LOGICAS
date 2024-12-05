export default {
  global: {
    componenteFormativo: 'Los circuitos integrados y sus familias lógicas',
    descripcionCurso:
      'Los circuitos integrados (CI) permiten dispositivos más pequeños y eficientes, esenciales en diversas aplicaciones. Las tecnologías principales son la bipolar, destacada por su velocidad y resistencia al ruido, y MOS, líder por su bajo consumo y alta integración. Estas innovaciones han impulsado la miniaturización y el desarrollo tecnológico en áreas como la computación y las telecomunicaciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Electrónica digital y analógica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: ' Circuito integrado',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Electrónica digital y analógica. ',
      referencia:
        'González, J. (2002). Circuitos y sistemas digitales. Universidad Pontifica de Salamanca en Madrid.  ',
      tipo: 'Documento',
      link:
        'http://www.iearobotics.com/personal/juan/docencia/apuntes-ssdd-0.3.7.pdf  ',
    },
    {
      tema: 'Electrónica digital y analógica. ',
      referencia:
        'Electrónica FP. (2018). <em>Circuitos electrónicos básicos explicados paso a paso</em> [Video]. YouTube. ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=x4do0qN__Bk&ab_channel=Electr%C3%B3nicaFP  ',
    },
    {
      tema: 'Circuito integrado. ',
      referencia:
        'El profe García. (2013). <em>Título del video correspondiente</em> [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=m0nza32BRl8&ab_channel=ElprofeGarc%C3%ADa ',
    },
    {
      tema: 'Circuito integrado. ',
      referencia:
        'MADE IN COLOMBIA. (2017). <em>Título del video correspondiente</em> [Video]. YouTube.  ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=n15R_n_TshA&ab_channel=MADEINCOLOMBIA ',
    },
  ],
  glosario: [
    {
      termino: 'Circuito integrado',
      significado:
        'dispositivo miniaturizado que contiene componentes electrónicos interconectados en un único chip. ',
    },
    {
      termino: 'CMOS',
      significado:
        'Familia lógica basada en tecnología <em>Complementary Metal-Oxide</em>-Semiconductor, destacada por su bajo consumo de energía. ',
    },
    {
      termino: 'Electrónica analógica',
      significado:
        'rama de la electrónica que emplea señales continuas para representar magnitudes físicas variables. ',
    },
    {
      termino: 'Electrónica digital',
      significado:
        'rama de la electrónica que trabaja con señales discretas representadas por valores binarios (0 y 1). ',
    },
    {
      termino: 'Familia lógica',
      significado:
        'conjunto de circuitos integrados clasificados según la tecnología empleada en su fabricación. ',
    },
    {
      termino: '<em>Fan In</em>',
      significado:
        'cantidad máxima de entradas que puede tener una compuerta lógica. ',
    },
    {
      termino: '<em>Fan Out</em>',
      significado:
        'número máximo de cargas que una compuerta puede manejar en su salida sin afectar su operación. ',
    },
    {
      termino: 'Margen de ruido',
      significado:
        'límite de tensión de ruido aceptable sin alterar el estado lógico de una salida. ',
    },
    {
      termino: 'Tensión de umbral',
      significado:
        'voltaje en el que una compuerta cambia de un estado lógico a otro (0 a 1 o viceversa). ',
    },
    {
      termino: 'TTL',
      significado:
        'familia lógica basada en la tecnología <em>transistor-transistor logic</em>, conocida por su velocidad. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Carretero, F. J., Ferrero, J. A., Sánchez Infantes, P., & Valero, F. J. (2009). <em>Electrónica: Electricidad y electrónica</em>. ',
      link: '',
    },
    {
      referencia:
        'González, J. (2002). <em>Circuitos y sistemas digitales<7em>. Universidad Pontificia de Salamanca en Madrid. ',
      link: '',
    },
    {
      referencia:
        'Universidad Nacional Virtual. <em>Tabla de características de familias lógicas<7em>. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Magda Melissa Rodríguez Celis',
          cargo: 'Experto temático',
          centro:
            'Centro de Desarrollo Agroempresarial - Regional Cundinamarca',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
