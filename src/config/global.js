export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad:
      'Teorías y escuelas psicológicas a partir de sus principales exponentes. ',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Historia de la psicología ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Escuelas y teorías de la psicología',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Psicología estructuralista',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Psicología funcionalista',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Psicoanálisis',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Conductismo',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Psicología cognitivo-conductual (PCC)',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Psicología humanista',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Tortosa, F. (2006). <i>Historia de la psicología</i>. McGraw-Hill España.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/50294?page=23',
    },
    {
      referencia:
        'Sáiz, M. & Anguera, B. (2013). <i>Historia de la psicología</i>. Editorial UOC. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/56425?page=28',
    },
    {
      referencia:
        'Castro Tejerina, J. (2017). <i>Historia de la psicología</i>. Madrid, UNED - Universidad Nacional de Educación a Distancia. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/103058?page=99',
    },
    {
      referencia:
        'García, G. & Rivarola, P. (2016). <i>El psicoanálisis</i>. Editorial UOC. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/58477?page=41',
    },
    {
      referencia:
        'Cerda Beroíza, M. (2012). <i>Cielo azulado: psicología y psicoterapia humanista y transpersonal</i>. RIL editores. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/68232?page=16',
    },
  ],
  glosario: [
    {
      termino: 'Adaptación',
      significado:
        'Proceso mediante el cual los individuos ajustan su comportamiento y procesos mentales para responder a su entorno.',
    },
    {
      termino: 'Autorrealización',
      significado:
        'Proceso de alcanzar el máximo potencial personal, según la psicología humanista.',
    },
    {
      termino: 'Caja de Skinner',
      significado:
        'Dispositivo experimental utilizado por B.F. Skinner, para estudiar el comportamiento de animales, mediante el condicionamiento operante.',
    },
    {
      termino: 'Cognición',
      significado:
        'Procesos mentales que incluyen la percepción, memoria, atención y pensamiento.',
    },
    {
      termino: 'Condicionamiento clásico',
      significado:
        'Proceso mediante el cual un estímulo neutro se asocia con un estímulo incondicionado para provocar una respuesta condicionada.',
    },
    {
      termino: 'Condicionamiento operante',
      significado:
        'Proceso en el cual las consecuencias de una conducta influyen en la probabilidad de que esta se repita en el futuro.',
    },
    {
      termino: 'Conductismo',
      significado:
        'Corriente psicológica que se centra en el estudio del comportamiento observable, rechazando la introspección.',
    },
    {
      termino: 'Dualismo',
      significado:
        'Teoría que separa la mente del cuerpo, promovida por René Descartes.',
    },
    {
      termino: 'Emociones',
      significado:
        'Respuestas psicológicas y fisiológicas a estímulos que influyen en el comportamiento humano.',
    },
    {
      termino: 'Eudaimonía',
      significado:
        'Concepto relacionado con una vida plena y realizada, en el contexto de la psicología positiva.',
    },
    {
      termino: 'Introspección',
      significado:
        'Método de investigación que implica la auto-observación y reporte de experiencias internas.',
    },
    {
      termino: 'Refuerzo',
      significado:
        'Consecuencia que aumenta la probabilidad de que un comportamiento se repita.',
    },
    {
      termino: 'Relación terapéutica',
      significado:
        'Interacción entre el terapeuta y el cliente, fundamental para el proceso de cambio en psicología.',
    },
  ],
}
