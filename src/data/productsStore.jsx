const products = [
  {
    id: 1,
    title: "Mahat",
    category: "Arquitectura residencial",
    image: "/assets/3.jpg",
    image2: "/assets/11.jpg",
    description: 'En nuestro proyecto de reforma de cocina, transformamos por completo el espacio. Introdujimos un diseño interior moderno y funcional, aprovechando cada rincón para maximizar la eficiencia y el estilo. La cuidadosa selección de iluminación ha agregado una atmósfera acogedora, resaltando la belleza de cada detalle.',
    year: '2022',
    location: 'Punta del Este, Maldonado',
    state: 'Construido'
  },
  {
    id: 2,
    title: "Perdomo",
    category: "Arquitectura residencial",
    image: "/assets/7.jpg",
    image2: "/assets/4_.jpg",
    description: 'Nuestra experiencia en reformas de cocinas se refleja en este proyecto centrado en optimizar los espacios de almacenamiento. Implementamos soluciones inteligentes y estilizadas, mejorando la organización y aportando una estética elegante. El resultado es una cocina que equilibra funcionalidad y diseño de manera armoniosa.',
    year: '2023',
    location: 'Carrasco, Montevideo',
    state: 'En construccion'
  },
  {
    id: 3,
    title: "Carmelo",
    category: "Arquitectura residencial",
    image: "/assets/55.jpg",
    image2: "/assets/5_.jpg",
    description: 'Con nuestro enfoque integral, transformamos una casa en una obra maestra. Desde el diseño arquitectónico hasta la selección de cada elemento de diseño interior, cada detalle fue cuidadosamente considerado. El resultado es un hogar que refleja la visión única de nuestros clientes y unifica la arquitectura con el diseño interior.',
    year: '2021',
    location: 'Carmelo, Colonia',
    state: 'Construido'
  },
  {
    id: 4,
    title: "El Pinar",
    category: "Arquitectura residencial",
    image: "/assets/4.jpg",
    image2: "/assets/4.jpg",
    description: 'En este proyecto, creamos una casa que se integra perfectamente con la naturaleza circundante. Utilizamos materiales sostenibles y estrategias de diseño paisajístico para lograr una fusión armoniosa con el entorno. La casa se convirtió en un santuario rodeado de vegetación, ofreciendo una experiencia única de conexión con la naturaleza.',
    year: '2021',
    location: 'El Pinar, Canelones',
    state: 'Anteproyecto'
  },
  {
    id: 5,
    title: "La Casita",
    category: "Arquitectura residencial",
    image: "/assets/5.jpg",
    image2: "/assets/2_.jpg",
    description: 'En esta reforma de cocina, logramos integrar tres ambientes distintos. Desde la zona de cocción hasta el espacio de entretenimiento, cada área se optimizó para su función específica, creando un entorno versátil y acogedor. El proyecto ha transformado la cocina en un lugar central de la casa.',
    year: '2022',
    location: 'Punta del Este, Maldonado',
    state: 'Construido'
  },
  {
    id: 6,
    title: "Punta Negra",
    category: "Arquitectura residencial",
    image: "/assets/6.jpg",
    image2: "/assets/3_.jpg",
    description: 'En nuestra construcción de esta casa frente al mar, cada detalle se planificó para aprovechar las impresionantes vistas al océano. Las amplias ventanas y las terrazas ofrecen panorámicas inigualables del mar. El resultado es un hogar que combina la elegancia arquitectónica con la majestuosidad del horizonte marino.',
    year: '2022',
    location: 'Punta Negra, Maldonado',
    state: 'En construccion'
  },
]

const productsUpperCase = products.map(product => ({
  ...product,
  title: product.title.toUpperCase()
}));

  export default productsUpperCase 