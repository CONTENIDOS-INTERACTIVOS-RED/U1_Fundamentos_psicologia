<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Escuelas y teorías de la psicología'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .bg-full-width.bg-h87.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-auto(data-aos="zoom-in")
                img.img-a.img-t(src='@/assets/curso/temas/39.svg', alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0            
              .col(data-aos="fade-left").mb-3.mb-lg-0
                p.mb-0 Comprender las diferentes escuelas o teorías de la psicología, es esencial para explorar cómo ha evolucionado el estudio del ser humano. Cada enfoque ha aportado una perspectiva única sobre la mente, el comportamiento y los métodos de investigación.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Psicología estructuralista

    .row.mb-5
      .col-lg-8 
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/40.svg")
            .col-lg
              p.mb-0 La psicología estructuralista, establecida por Wilhelm Wundt, marcó el inicio formal de la psicología como ciencia experimental. En 1879, Wundt fundó el primer laboratorio de psicología en Leipzig, Alemania, donde se enfocó en el estudio de la conciencia humana descomponiéndola en sus partes más simples, como sensaciones, imágenes y sentimientos.         
        p(data-aos="fade-left") Utilizaba el método de la #[b introspección], donde los sujetos, previamente entrenados, observaban y describían sus experiencias internas ante ciertos estímulos. Este método fue pionero, aunque posteriormente criticado por su subjetividad y falta de replicabilidad. A continuación, se presentan los aspectos claves de esta perspectiva teórica:    
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/41.png", data-aos="zoom-in")   

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-figura(data-aos="fade-right")
          h5 Tabla 2. 
          span Aspectos claves del estructuralismo

        .tabla-a(data-aos="fade-left")
          table
            thead
              tr
                th Aspectos claves del estructuralismo
                th Descripción
            tbody
              tr
                td.text-bold Fundador
                td Wilhelm Wundt.

              tr
                td.text-bold Año y lugar claves
                td 1879, Leipzig (Alemania).

              tr
                td.text-bold Objeto de estudio
                td La conciencia humana y sus componentes.

              tr
                td.text-bold Método principal
                td #[b Introspección] sistemática

              tr
                td.text-bold Elementos mentales
                td Sensaciones, imágenes, sentimientos.

              tr
                td.text-bold Aportes
                td Fundamentos científicos de la psicología, desarrollo de técnicas de observación.

              tr
                td.text-bold Críticas 
                td Subjetividad, falta de validez científica, resultados variables.    

              tr
                td.text-bold Legado 
                td Inició el estudio empírico de la mente; no es vigente como terapia.

    p(data-aos="fade-left") A pesar de su declive, el estructuralismo fue clave para establecer la psicología como una disciplina empírica.                

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Psicología funcionalista

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/42.png", data-aos="zoom-in")        
      .col-lg-8
        p(data-aos="fade-left") En contraste con el estructuralismo, la psicología funcionalista, liderada por William James, se interesó por la utilidad de los procesos mentales. ¿Para qué sirven la memoria, la percepción o las emociones? Esta corriente, influida por el pensamiento evolutivo de Charles Darwin, buscaba entender cómo la mente ayuda a los individuos a adaptarse a su entorno.        
        .bg-color-4.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/43.svg")
            .col-lg
              p.mb-0 John Dewey, otro exponente, aplicó los principios funcionalistas en la educación, proponiendo un modelo centrado en la experiencia y la resolución de problemas.       
 
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-figura(data-aos="fade-right")
          h5 Tabla 3. 
          span Aspectos claves del funcionalismo

        .tabla-a(data-aos="fade-left")
          table
            thead
              tr
                th Aspectos claves del funcionalismo
                th Descripción
            tbody
              tr
                td.text-bold Principales exponentes 
                td William James, John Dewey.

              tr
                td.text-bold Obra destacada
                td “Principios de Psicología” (1890) – William James.

              tr
                td.text-bold Objeto de estudio
                td Función adaptativa de la mente y el comportamiento. 

              tr
                td.text-bold Métodos utilizados
                td Observación, estudio de la conducta en contexto.

              tr
                td.text-bold Influencia teórica
                td Teoría de la evolución de Darwin.

              tr
                td.text-bold Aplicaciones prácticas
                td Psicología educativa, terapias centradas en la adaptación.

              tr
                td.text-bold Críticas
                td Dificultad para delimitar conceptos, falta de métodos sistemáticos.

              tr
                td.text-bold Legado
                td Puente hacia el conductismo y la psicología cognitiva.

    p(data-aos="fade-left") El funcionalismo introdujo la idea de que la mente es un sistema en movimiento constante, orientado a la adaptación, y dejó una profunda huella en la psicología aplicada.                
                
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Psicoanálisis 

    .bg-color-8.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El #[b psicoanálisis], fundado por #[b Sigmund Freud], es una de las teorías más influyentes en la historia de la psicología. Su propuesta central es que #[b la mayor parte del comportamiento humano está determinada por fuerzas inconscientes], es decir, procesos mentales que operan fuera de la conciencia y que influyen en nuestras emociones, decisiones y relaciones sin que lo notemos.    
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img.img-a.img-t(src='@/assets/curso/temas/44.png', alt='')  

    .bg-full-width-1.bg-fondo-1.py-4
      .px-4.px-md-5
        h3(data-aos="fade-down") Estructura de la mente y la personalidad
        p(data-aos="fade-down") Freud planteó una visión estructurada, tanto de la #[b mente] como de la personalidad: la mente está dividida en #[b tres niveles]:

        .row.mb-5.align-items-center
          .col-lg-4
            figure
              img.img-a.img-t(src="@/assets/curso/temas/45.png", data-aos="zoom-in")  
          .col-lg-8
            .bg-color-7.p-3.text-white.mb-3(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/temas/46.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Consciente
                  p.mb-0 Que contiene lo que pensamos en el momento. 

            .bg-color-7.p-3.text-white.mb-3(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/temas/47.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Preconsciente
                  p.mb-0 Con recuerdos o pensamientos que podemos recuperar si les prestamos atención.

            .bg-color-7.p-3.text-white(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/temas/48.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Inconsciente
                  p.mb-0 El nivel más profundo, donde se alojan los deseos reprimidos, traumas e impulsos que condicionan nuestra conducta.                                  

    p(data-aos="fade-down") A su vez, propuso que la #[b personalidad humana], se organiza a través de tres instancias en permanente tensión:

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Ello (#[i id]) 
              p Es la parte más primitiva. Busca la satisfacción inmediata del placer, sin considerar la lógica ni la moral. Es totalmente inconsciente.          
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/49.png")     

          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Yo (#[i ego])
              p Es el mediador entre el ello, el superyó y la realidad. Opera de forma racional y consciente en su mayor parte.           
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/50.png") 

          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Superyó (#[i superego])
              p Representa la moral, las normas sociales y el ideal del yo. Juzga nuestras acciones y genera culpa o satisfacción.          
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/51.png")                                         

    p.mb-5(data-aos="fade-down") La interacción constante entre estas tres partes, genera #[b conflictos internos], que pueden manifestarse en síntomas, emociones o conductas problemáticas.

    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/52.png", data-aos="zoom-in")      
      .col-lg-8
        h3(data-aos="fade-down") Herramientas terapéuticas
        p(data-aos="fade-down") Freud desarrolló una serie de #[b técnicas para acceder al inconsciente], con el fin de ayudar al paciente a volver conscientes, sus conflictos reprimidos:
   
        .bg-color-11.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-12
              p.mb-0 #[b Asociación libre:] decir lo primero que viene a la mente sin censura.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-12
              p.mb-0 #[b Interpretación de los sueños:] explorar su contenido latente, es decir, lo que simbolizan inconscientemente.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-12
              p.mb-0 #[b Análisis de lapsus y actos fallidos:] errores aparentemente accidentales, que revelan deseos ocultos.
            
        .bg-color-13.p-4(data-aos="fade-left")
          p.mb-0 El objetivo terapéutico es #[b hacer consciente lo inconsciente], lo cual permite resolver tensiones internas y aliviar el malestar psíquico.


    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Conductismo 

    p.mb-5(data-aos="fade-down") El #[b conductismo] es una corriente psicológica que marcó un giro radical hacia el estudio del comportamiento observable, alejándose del análisis introspectivo de la mente. Fue encabezado por John B. Watson, quien en su manifiesto conductista de 1913, rechazó la introspección y propuso una psicología basada exclusivamente en la observación de la conducta.   

    .row.mb-5.justify-content-center
      .col-lg-10
        .bg-color-14(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src='@/assets/curso/temas/53.png', alt='')         
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") Watson afirmaba que el comportamiento humano era producto del aprendizaje, es decir, de la interacción con el ambiente. En su visión, todo comportamiento podía ser explicado a partir de estímulos y respuestas observables, eliminando la necesidad de estudiar los procesos mentales internos.
        .bg-color-8.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") B. F. Skinner, amplió el conductismo mediante el desarrollo del #[b condicionamiento operante], demostrando que las consecuencias de una conducta (refuerzo o castigo), influyen directamente en la probabilidad de que esta conducta se repita.   
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src='@/assets/curso/temas/54.png', alt='') 

        p.mb-5(data-aos="fade-down") A continuación, se presentan los aspectos claves de esta perspectiva teórica:  
   
        .titulo-figura(data-aos="fade-right")
          h5 Tabla 4. 
          span Aspectos claves del conductismo

        .tabla-a(data-aos="fade-left")
          table
            thead
              tr
                th Aspectos claves del conductismo
                th Descripción
            tbody
              tr
                td.text-bold Principales exponentes
                td John B. Watson, B.F. Skinner.

              tr
                td.text-bold Objeto de estudio
                td Conducta observable y medible.

              tr
                td.text-bold Métodos utilizados
                td Experimentación, condicionamiento clásico y operante.

              tr
                td.text-bold Conceptos centrales 
                td Estímulo-respuesta, refuerzo, castigo, modelado. 

              tr
                td.text-bold Aplicaciones 
                td Educación, modificación de conducta, terapia conductual. 

              tr
                td.text-bold Críticas 
                td Reduccionismo, ignora emociones, pensamientos y contexto.

              tr
                td.text-bold Legado 
                td Técnicas de modificación de conducta, influencia en psicología aplicada.

    #t_2_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.5] Psicología cognitivo-conductual (PCC) 

    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img.img-a.img-t(src='@/assets/curso/temas/55.png', alt='')         
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La #[b psicología cognitivo-conductual (PCC)], surge como respuesta a las limitaciones del conductismo. Integra los principios del aprendizaje con el estudio de los procesos mentales. Su postulado central es que los #[b pensamientos, emociones y comportamientos están interrelacionados], y que modificar los pensamientos disfuncionales, puede generar mejoras en la conducta y en el estado emocional. 

    p(data-aos="fade-down") Esta corriente combina el enfoque experimental del conductismo, con la exploración del mundo interno del sujeto, utilizando métodos estructurados y respaldados por evidencia científica.

    p(data-aos="fade-down") A continuación, se presentan los aspectos claves de esta perspectiva teórica: 

    .titulo-figura(data-aos="fade-right")
      h5 Tabla 5. 
      span Aspectos claves de la psicología cognitivo-conductual (PCC)

    .tabla-a.mb-5(data-aos="fade-left")
      table
        thead
          tr
            th Aspectos claves de la PCC
            th Descripción
        tbody
          tr
            td.text-bold Fundamento teórico
            td Interacción entre pensamiento, emoción y conducta.

          tr
            td.text-bold Terapias asociadas
            td Reestructuración cognitiva, terapia de exposición, tareas conductuales.

          tr
            td.text-bold Técnicas utilizadas
            td Identificación de pensamientos automáticos, entrenamiento en habilidades, resolución de problemas.

          tr
            td.text-bold Aplicaciones clínicas
            td Depresión, ansiedad, fobias, TOC, manejo del estrés, rendimiento personal.

          tr
            td.text-bold Objetivos terapéuticos
            td Modificar patrones de pensamiento disfuncional y mejorar habilidades de afrontamiento.

          tr
            td.text-bold Enfoque
            td Práctico, estructurado, orientado a objetivos.

          tr
            td.text-bold Evidencia científica
            td Alta eficacia comprobada en múltiples estudios clínicos.                                                                                             
    p.mb-5(data-aos="fade-down") La PCC destaca por su claridad, sistematización y eficacia, siendo una de las corrientes más utilizadas en la psicoterapia contemporánea.


    #t_2_6.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.6] Psicología humanista

    .row.mb-5
      .col-lg-8
        p.mb-4(data-aos="fade-left") La #[b psicología humanista] surgió en la década de 1950, como una tercera fuerza, en reacción al pesimismo del psicoanálisis y al mecanicismo del conductismo. Esta corriente pone el foco en la #[b experiencia subjetiva, la libertad, la dignidad humana y la autorrealización].         
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/56.svg")
            .col-lg
              p.mb-0 Dos de sus principales exponentes son Abraham Maslow y Carl Rogers. Maslow propuso la #[b jerarquía de necesidades], donde la autorrealización ocupa el nivel más alto. Rogers, por su parte, desarrolló la #[b terapia centrada en el cliente], basada en la empatía, la autenticidad y la aceptación incondicional del terapeuta.       
        p(data-aos="fade-left") A continuación, se presentan los aspectos claves de esta perspectiva teórica:
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/57.png", data-aos="zoom-in")   

    .titulo-figura(data-aos="fade-right")
      h5 Tabla 6. 
      span Aspectos claves de la psicología humanista

    .tabla-a.mb-5(data-aos="fade-left")
      table
        thead
          tr
            th Aspectos claves del humanismo
            th Descripción
        tbody
          tr
            td.text-bold Principales exponentes 
            td Abraham Maslow, Carl Rogers.

          tr
            td.text-bold Objeto de estudio
            td Potencial humano, crecimiento personal, experiencia subjetiva.

          tr
            td.text-bold Principios filosóficos
            td Dignidad, libertad, responsabilidad, naturaleza positiva del ser humano.

          tr
            td.text-bold Terapia centrada en el cliente
            td Relación terapéutica como catalizadora del cambio.

          tr
            td.text-bold Concepto clave 
            td Autorrealización.

          tr
            td.text-bold Aplicaciones
            td Psicoterapia, educación, desarrollo personal.

          tr
            td.text-bold Críticas
            td Subjetividad, falta de métodos científicos rigurosos.

          tr
            td.text-bold Legado
            td Visión positiva del ser humano, influencia en terapia y pedagogía.                                                                                   
    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/115607?page=3" target="_blank" rel="noopener noreferrer") Gavino Lázaro, A. (2016). Guía de ayuda al terapeuta cognitivo-conductual (2a ed.). Difusora Larousse - Ediciones Pirámide.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/47976?page=10" target="_blank" rel="noopener noreferrer") Ruiz Fernández, M. Á. (2012). Manual de técnicas de intervención cognitiva conductuales. Editorial Desclée de Brouwer. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.psicoactiva.com/blog/psicoanalisis-enfoque-psicoanalitico-la-psicologia/" target="_blank" rel="noopener noreferrer") Gerri, M. (2024) Psicoanálisis: Teoría Psicoanalítica de Freud, Fundamentos y Aplicaciones. PsicoActiva.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/live/S2zxNLmfxbA?si=nO_s4nJA_yXzfrAO" target="_blank" rel="noopener noreferrer") Fernando Pena. (2021). Terapia cognitivo conductual: qué es y para qué problemas es útil.  

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema1',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Fundamentos de psicología',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              'El movimiento del conductismo, representado por John B. Watson, se centró en:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La introspección y el análisis de sueños.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'El estudio del comportamiento observable y medible.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'La filosofía y la ética.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La evolución de la mente humana a través del tiempo.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: '¿Qué concepto introdujo B.F. Skinner en la psicología?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La teoría del inconsciente.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'El condicionamiento operante.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'La jerarquía de necesidades.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La teoría del aprendizaje social.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'Cuál de las siguientes afirmaciones describe mejor la teoría de Sigmund Freud sobre la personalidad?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Se divide en dos partes: el yo y el superyó.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Se compone de tres partes: el ello, el yo y el superyó.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Se basa únicamente en la experiencia consciente.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Es el resultado de la interacción social.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'Según el texto, ¿quién es considerado el "padre de la psicología"?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Sigmund Freud.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Wilhelm Wundt.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Aristóteles.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'John B. Watson',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál es el enfoque principal de la psicología como disciplina científica?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Estudiar la naturaleza del universo.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Analizar el comportamiento y los procesos mentales de los individuos.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Investigar las leyes de la física.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Explorar la historia de la humanidad.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
