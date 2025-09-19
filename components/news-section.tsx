const newsData = [
  {
    id: "aca-ypf-villa-del-dique-invita-alojamientos",
    title: "ACA YPF Villa del Dique invita a los alojamientos a compartir su disponibilidad",
    excerpt:
      "La estación, un punto de referencia para quienes llegan a nuestra localidad. AM CELTA CONCESIONARIO OFICIAL DE ACA YPF invita a los alojamientos de la localidad a acercar sus datos de contacto y disponibilidad.",
    image: "/images/portada-articulo-iniciativa-aca-ypf-am-celta.webp",
    date: "2025-09-20",
    displayDate: "20 de septiembre de 2025",
    slug: "aca-ypf-villa-del-dique-invita-alojamientos",
  },
  {
    id: "bomberos-voluntarios-nuevo-sitio-web",
    title: "Los Bomberos Voluntarios de Villa del Dique presentan su nuevo sitio web",
    excerpt:
      "Un espacio digital para informar, conectar y recibir el apoyo de la comunidad. La institución lanzó oficialmente su plataforma web con información sobre su historia, cuerpo activo y formas de colaborar.",
    image: "/images/bomberos-voluntarios-vdd-4.jpg",
    date: "2025-09-19",
    displayDate: "19 de septiembre de 2025",
    slug: "bomberos-voluntarios-nuevo-sitio-web",
  },
  {
    id: "villa-del-dique-perla-calamuchita",
    title: "Villa del Dique: la perla de Calamuchita",
    excerpt:
      "Un rincón serrano donde la naturaleza, la historia y las tradiciones se encuentran. Descubre todo lo que hace especial a Villa del Dique, desde su fundación hasta sus atractivos turísticos.",
    image: "/images/portada-villa-del-dique-perla-de-calamuchita.webp",
    date: "2025-09-18",
    displayDate: "18 de septiembre de 2025",
    slug: "villa-del-dique-perla-calamuchita",
  },
  {
    id: "dia-del-profesor",
    title: "Día del Profesor: Celebrando a quienes inspiran con su enseñanza",
    excerpt:
      "Una fecha para reconocer la vocación, el esfuerzo y la guía de nuestros educadores. Desde Villa del Dique Digital saludamos a todos los docentes en su día.",
    image: "/images/feliz-dia-del-profesor.jpg",
    date: "2025-09-17",
    displayDate: "17 de septiembre de 2025",
    slug: "dia-del-profesor",
  },
  {
    id: "dia-del-psicopedagogo",
    title: "Día del Psicopedagogo: acompañando el aprendizaje y el desarrollo",
    excerpt:
      "Reconocimiento a los profesionales que integran la educación y la salud. Hoy 17 de septiembre en Argentina se conmemora el Día del Psicopedagogo.",
    image: "/images/dia-de-psicopedadogo.jpeg",
    date: "2025-09-17",
    displayDate: "17 de septiembre de 2025",
    slug: "dia-del-psicopedagogo",
  },
  {
    id: "dia-derechos-estudiantes-secundarios",
    title: "16 de septiembre: Día de los Derechos de los Estudiantes Secundarios",
    excerpt:
      "Cada 16 de septiembre, Argentina recuerda La Noche de los Lápices y reafirma el compromiso con la defensa de los derechos estudiantiles, la educación y la democracia.",
    image: "/images/portada-dia-derechos-estudiantes.webp",
    date: "2025-09-16",
    displayDate: "16 de septiembre de 2025",
    slug: "dia-derechos-estudiantes-secundarios",
  },
  {
    id: "dia-internacional-democracia",
    title: "15 de septiembre: Día Internacional de la Democracia",
    excerpt:
      "Cada 15 de septiembre el mundo conmemora el Día Internacional de la Democracia. En Villa del Dique reflexionamos sobre la importancia de fortalecer los valores democráticos en nuestras comunidades.",
    image: "/images/portada-dia-de-la-democracia.jpg",
    date: "2025-09-15",
    displayDate: "15 de septiembre de 2025",
    slug: "dia-internacional-democracia",
  },
  {
    id: "dia-mundial-linfoma",
    title: "15 de septiembre: Día Mundial de la Concientización sobre el Linfoma",
    excerpt:
      "Una fecha para visibilizar y sensibilizar a la población sobre este tipo de cáncer hematológico. Información sobre síntomas, detección temprana y recursos disponibles.",
    image: "/images/portada-dia-mundial-linfoma.jpg",
    date: "2025-09-15",
    displayDate: "15 de septiembre de 2025",
    slug: "dia-mundial-linfoma",
  },
  {
    id: "mega-feria-villa-del-dique",
    title: "Villa del Dique vive su primera Mega Feria en el Centro Cultural Pato Carret",
    excerpt:
      "Este domingo se inaugura la primera edición de la Mega Feria, un evento que reúne a emprendedores, artesanos y propuestas de moda circular en un mismo espacio pensado para toda la familia.",
    image: "/images/portada-mega-feria.jpg",
    date: "2025-09-14",
    displayDate: "14 de septiembre de 2025",
    slug: "mega-feria-villa-del-dique",
  },
  {
    id: "desafio-cerro-lago",
    title: "Rumbo al 6° Desafío Cerro y Lago: todo listo para vivir la previa en Villa del Dique",
    excerpt:
      "La pasión por el ciclismo de montaña vuelve a encenderse en la región con la llegada de la 6° edición del Desafío Cerro y Lago, una competencia que ya se ha convertido en un clásico esperado por deportistas y amantes del MTB de todo el país.",
    image: "/images/portada-desafio-cerro-lago.jpg",
    date: "2025-09-13",
    displayDate: "13 de septiembre de 2025",
    slug: "desafio-cerro-lago",
  },
  {
    id: "inauguracion-polo-cultural-asociacion",
    title: "Villa del Dique celebra la inauguración de su nuevo Polo Cultural",
    excerpt:
      "La comunidad de Villa del Dique vivió una noche histórica con la inauguración del Polo Cultural, conformado por la renovada Casa de la Cultura y el Anfiteatro Municipal.",
    image: "/images/portada-inaguacion-polo-asociacion.webp",
    date: "2025-09-12",
    displayDate: "12 de septiembre de 2025",
    slug: "inauguracion-polo-cultural-asociacion",
  },
  {
    id: "entrevista-bomberos-voluntarios",
    title: "Bomberos Voluntarios de Villa del Dique: Vocación, Riesgo y Compromiso Comunitario",
    excerpt:
      "Entrevista exclusiva con los Bomberos Voluntarios de Villa del Dique sobre su labor incansable y dedicación a la comunidad.",
    image: "/images/portada-bomberos-voluntarios.webp",
    date: "2025-09-11",
    displayDate: "11 de septiembre de 2025",
    slug: "entrevista-bomberos-voluntarios",
  },
  {
    id: "emprender-villa-del-dique",
    title: "Emprender en el Paraíso: Historias que laten en Villa del Dique",
    excerpt:
      "Descubre las historias de emprendedores locales: Rincón Natural, Namaskar Movimiento, Parrilla & Restaurante Iowa y el evento de boxeo que unió a toda la comunidad.",
    image: "/images/emprender-villa-del-dique.webp",
    date: "2025-09-09",
    displayDate: "9 de septiembre de 2025",
    slug: "emprender-villa-del-dique",
  },
  {
    id: "campana-prevencion-incendios",
    title: "Campaña de Prevención de Incendios en Villa del Dique",
    excerpt:
      "Un descuido puede terminar en tragedia. Súmate a las acciones de prevención de incendios y cuidemos entre todos nuestro entorno.",
    image: "/images/no-al-fuego.jpg",
    date: "2025-09-09",
    slug: "campana-prevencion-incendios",
  },
]
