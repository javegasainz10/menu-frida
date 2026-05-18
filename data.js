// ============================================================
// PRODUCT DATA — Frida Vinos y Sabores
// ============================================================

const PRODUCTS = [
  // ─────────────────────────────────────────────
  // VINOS TINTOS
  // ─────────────────────────────────────────────
  {
    id: "t-altos-cienaga",
    category: "tintos",
    bodega: "Altos La Ciénaga",
    name: "Altos La Ciénaga Vino Artesanal 2015",
    origin: "Colalao del Valle, Tucumán",
    description: "Blend de Shiraz, Malbec y Cabernet Sauvignon, intenso y con gran concentración. Vino de altura con 90 puntos Tim Atkin.",
    price: 12400,
    image: "images/Altos La Ciénaga Vino Artesanal 2015.jpg"
  },
  {
    id: "t-amber-thorn",
    category: "tintos",
    bodega: "Amber Rose",
    name: "The Thorn Reserva Malbec 2024",
    origin: "Valle de Cafayate, Salta",
    description: "Malbec equilibrado con 4 meses en roble francés. Frutas del bosque y un toque especiado que lo vuelve elegante y fácil de disfrutar.",
    price: 13500,
    image: "images/The Thorn Reserva Malbec 2024.jpg"
  },
  {
    id: "t-antropo-blend",
    category: "tintos",
    bodega: "Antropo Wines",
    name: "Antropo Blend de Tintas 2024",
    origin: "Jujuy",
    description: "Blend Cabernet Franc y Cabernet Sauvignon de la Quebrada de Humahuaca, con crianza parcial en roble. Combina frescura y equilibrio. Notas de fruta roja y un toque de roble que aporta suavidad.",
    price: 16700,
    image: "images/Antropo Blend de Tintas 2024.jpg"
  },
  {
    id: "t-cordero-lobo",
    category: "tintos",
    bodega: "Clos de los 7",
    name: "Cordero con Piel de Lobo 2025",
    origin: "Valle de Uco, Mendoza",
    description: "Malbec fresco y frutado, ideal para disfrutar joven. Notas vibrantes de ciruela y cereza con un paso en boca redondo y amable.",
    price: 12000,
    image: "images/Cordero con Piel de Lobo 2025.jpg"
  },
  {
    id: "t-dos-cauces",
    category: "tintos",
    bodega: "Dos Cauces",
    name: "Dos Cauces Malbec 2025",
    origin: "Valles Calchaquíes, Salta",
    description: "Malbec joven con taninos dulces y fruta madura. Fácil de tomar, ideal para acompañar comidas del día a día.",
    price: 7000,
    image: "images/Dos Cauces Malbec 2025.jpg"
  },
  {
    id: "t-gualiama",
    category: "tintos",
    bodega: "Finca Bandini",
    name: "Gualiama Malbec 2020",
    origin: "Los Chacayes, Tunuyán, Mendoza",
    description: "Malbec de parcela seleccionada, con crianza en barrica francesa. Complejo, con taninos firmes y muy buena concentración. Ideal para guardar o disfrutar con platos con personalidad.",
    price: 20000,
    image: "images/Gualiama Malbec 2020.jpg"
  },
  {
    id: "t-infernales",
    category: "tintos",
    bodega: "Finca Chaskañawi",
    name: "Infernales Malbec 2023",
    origin: "Tolombón, Valle de Cafayate, Salta",
    description: "De color rojo rubí profundo, con matices violáceos. En nariz presenta notas de frutos rojos maduros como ciruela y cereza, acompañados de sutiles notas de chocolate y especias.",
    price: 16000,
    image: "images/Infernales Malbec 2023.jpg"
  },
  {
    id: "t-kuntur-cf",
    category: "tintos",
    bodega: "Kuntur Wines",
    name: "Kuntur Cabernet Franc Reserva 2025",
    origin: "Valles Calchaquíes",
    description: "Cabernet Franc de altura con crianza en roble. Notas herbales elegantes, fruta roja y especias dulces. Taninos firmes y un final largo.",
    price: 13000,
    image: "images/Kuntur Cabernet Franc Reserva 2025.jpg"
  },
  {
    id: "t-kuntur-malbec",
    category: "tintos",
    bodega: "Kuntur Wines",
    name: "Kuntur Malbec Reserva 2025",
    origin: "Valles Calchaquíes",
    description: "Malbec de altura con crianza en roble. Aromas de frutos negros, chocolate y un toque de vainilla. Taninos redondos y un final persistente.",
    price: 13000,
    image: "images/Kuntur Malbec Reserva 2025.jpg"
  },
  {
    id: "t-kuntur-tannat",
    category: "tintos",
    bodega: "Kuntur Wines",
    name: "Kuntur Tannat Reserva 2024",
    origin: "Valles Calchaquíes",
    description: "Tannat potente y expresivo, con taninos marcados. Notas de frutos negros, cuero y un largo final. Ideal para carnes a la brasa.",
    price: 13000,
    image: "images/Kuntur Tannat Reserva 2024.jpg"
  },
  {
    id: "t-alma-rey",
    category: "tintos",
    bodega: "Lavaque",
    name: "Alma de Rey Malbec 2019",
    origin: "Valle de Cafayate, Salta",
    description: "Malbec con crianza prolongada, con excelente concentración, taninos suaves y una complejidad notable. Notas de ciruela, tabaco y especias.",
    price: 16400,
    image: "images/Alma de Rey Malbec 2019.jpg"
  },
  {
    id: "t-los-pasos",
    category: "tintos",
    bodega: "Lavaque",
    name: "Los Pasos Malbec 2020",
    origin: "Valle de Cafayate, Salta",
    description: "De aroma intenso a fruta madura. Elegante en boca, con taninos pulidos y una acidez balanceada. Vino gastronómico muy versátil.",
    price: 11200,
    image: "images/Los Pasos Malbec 2020.jpg"
  },
  {
    id: "t-naiara",
    category: "tintos",
    bodega: "Naiara",
    name: "Naiara Malbec Reserva 2017",
    origin: "Valle de Cafayate, Salta",
    description: "Notas de guinda, ciruela, chocolate amargo y especias. Taninos pulidos. Un vino de autor de crianza prolongada y excelente persistencia.",
    price: 16900,
    image: "images/Naiara Malbec Reserva 2017.jpg"
  },
  {
    id: "t-pannunzio",
    category: "tintos",
    bodega: "Pannunzio",
    name: "Pannunzio Reserva Malbec 2017",
    origin: "Luján de Cuyo, Mendoza",
    description: "Malbec reserva con más de 12 meses en roble. Muy aromático, complejo, con cuerpo pleno y taninos elegantes. Un clásico de Mendoza.",
    price: 20000,
    image: "images/Pannunzio Reserva Malbec 2017.jpg"
  },
  {
    id: "t-piloto",
    category: "tintos",
    bodega: "Piloto de Prueba",
    name: "Piloto de Prueba Selección de Barricas Blend 2020",
    origin: "Mendoza",
    description: "Blend premium con selección de barricas, notas de frutos rojos y negros, vainilla y especias dulces. Vino complejo y elegante.",
    price: 24000,
    image: "images/Piloto de Prueba Selección de Barricas Blend 2020.jpg"
  },
  {
    id: "t-prelatura",
    category: "tintos",
    bodega: "Prelatura",
    name: "Prelatura Reserva Malbec 2017",
    origin: "Luján de Cuyo, Mendoza",
    description: "Malbec de viñedos antiguos, con gran concentración y estructura. Notas de frutos negros, tabaco, chocolate y especias. Final largo y persistente.",
    price: 22000,
    image: "images/Prelatura Reserva Malbec 2017.jpg"
  },
  {
    id: "t-quinquela-pleno",
    category: "tintos",
    bodega: "Colección Quinquela",
    name: "A Pleno Sol Colección Quinquela 2017 Red Blend",
    origin: "Mendoza",
    description: "Blend de tintas inspirado en el arte de Quinquela Martín. Vino con carácter y personalidad, frutos rojos maduros y roble sutil.",
    price: 22000,
    image: "images/A Pleno Sol Colección Quinquela 2017 Red Blend.jpg"
  },
  {
    id: "t-quinquela-motivo",
    category: "tintos",
    bodega: "Colección Quinquela",
    name: "Motivo de Puerto Colección Quinquela 2018 Red Blend",
    origin: "Mendoza",
    description: "Red blend de colección con personalidad única. Notas de especias, frutos maduros y un final complejo.",
    price: 22000,
    image: "images/Motivo de Puerto Colección Quinquela 2018 Red Blend.jpg"
  },
  {
    id: "t-quinquela-veleros",
    category: "tintos",
    bodega: "Colección Quinquela",
    name: "Veleros Reunidos Colección Quinquela 2019 Red Blend",
    origin: "Mendoza",
    description: "Red blend de colección artística. Vino expresivo, frutado, con notas de crianza y un paso en boca elegante.",
    price: 22000,
    image: "images/Veleros Reunidos Colección Quinquela 2019 Red Blend.jpg"
  },
  {
    id: "t-san-pedro",
    category: "tintos",
    bodega: "San Pedro de Yacochuya",
    name: "San Pedro de Yacochuya 2020",
    origin: "Yacochuya, Cafayate, Salta",
    description: "Vino icónico de Michel Rolland. Malbec de 2000 msnm, con enorme concentración, notas de fruta madura, especias, chocolate y un final eterno.",
    price: 47000,
    image: "images/San Pedro de Yacochuya 2020.jpg"
  },
  {
    id: "t-taimado-baby",
    category: "tintos",
    bodega: "Clos de los 7",
    name: "Taimado Baby Malbec 2024",
    origin: "Valle de Uco, Mendoza",
    description: "Malbec joven, fresco y frutado. Ideal para disfrutar en cualquier momento, sin complicaciones.",
    price: 6500,
    image: "images/Taimado Baby Malbec 2024.jpg"
  },
  {
    id: "t-taimado-malbec",
    category: "tintos",
    bodega: "Clos de los 7",
    name: "Taimado Malbec 2023",
    origin: "Valle de Uco, Mendoza",
    description: "Malbec con personalidad, notas de fruta madura, violetas y especias. Taninos amables y un final persistente.",
    price: 10000,
    image: "images/Taimado Malbec 2023.jpg"
  },
  {
    id: "t-taimado-merlot",
    category: "tintos",
    bodega: "Clos de los 7",
    name: "Taimado Merlot 2024",
    origin: "Valle de Uco, Mendoza",
    description: "Merlot fresco y frutado con notas de ciruela y cereza. Taninos sedosos y final amable.",
    price: 10000,
    image: "images/Taimado Merlot 2024.jpg"
  },
  {
    id: "t-yeta-mcs",
    category: "tintos",
    bodega: "Yeta",
    name: "Yeta Malbec Cabernet Sauvignon",
    origin: "Valles Calchaquíes, Salta",
    description: "Blend potente de Malbec y Cabernet Sauvignon con carácter norteño. Taninos firmes y fruta concentrada.",
    price: 8500,
    image: "images/Yeta Malbec Cabernet Sauvignon.jpg"
  },
  {
    id: "t-yeta-mm",
    category: "tintos",
    bodega: "Yeta",
    name: "Yeta Merlot Malbec 2018",
    origin: "Valles Calchaquíes, Salta",
    description: "Blend suave y equilibrado de Merlot y Malbec. Notas de ciruela, cereza madura y especias dulces.",
    price: 8500,
    image: "images/Yeta Merlot Malbec 2018.jpg"
  },
  {
    id: "t-yeta-tm",
    category: "tintos",
    bodega: "Yeta",
    name: "Yeta Tannat Malbec 2017",
    origin: "Valles Calchaquíes, Salta",
    description: "Blend de Tannat y Malbec con estructura marcada. Notas de frutos negros, especias y un final largo.",
    price: 8500,
    image: "images/Yeta Tannat Malbec 2017.jpg"
  },

  // ─────────────────────────────────────────────
  // VINOS BLANCOS
  // ─────────────────────────────────────────────
  {
    id: "b-amalaya",
    category: "blancos",
    bodega: "Amalaya",
    name: "Amalaya Blanco de Corte Torrontes Riesling 2024",
    origin: "Valles Calchaquíes, Salta",
    description: "Blend de Torrontés y Riesling. Aromático, fresco y floral. Notas cítricas y un final vibrante.",
    price: 8400,
    image: "images/Amalaya Blanco de Corte Torrontes Riesling 2024.jpg"
  },
  {
    id: "b-antropo-blanc",
    category: "blancos",
    bodega: "Antropo Wines",
    name: "Antropo Blanc de blancas 2023",
    origin: "Jujuy",
    description: "Chardonnay de la Quebrada de Humahuaca. Fresco, mineral y con buena acidez. Un blanco de altura con carácter único.",
    price: 15700,
    image: "images/Antropo Blanc de blancas 2023.jpg"
  },
  {
    id: "b-taimado-chard",
    category: "blancos",
    bodega: "Clos de los 7",
    name: "Taimado Chardonnay Reserva 2024",
    origin: "Valle de Uco, Mendoza",
    description: "Chardonnay con paso por barrica. Notas de fruta tropical, manteca y vainilla. Equilibrado y persistente.",
    price: 10000,
    image: "images/Taimado Chardonnay Reserva 2024.jpg"
  },
  {
    id: "b-taimado-torr",
    category: "blancos",
    bodega: "Clos de los 7",
    name: "Taimado Torrontés 2024",
    origin: "Valle de Uco, Mendoza",
    description: "Torrontés aromático y floral. Notas de rosa, jazmín y cítricos. Fresco y con acidez equilibrada.",
    price: 10000,
    image: "images/Taimado Torrontés 2024.jpg"
  },
  {
    id: "b-expresion-dulce",
    category: "blancos",
    bodega: "Domingo Hermanos",
    name: "Expresion Dulce de altura 2022",
    origin: "Valles Calchaquíes, Salta",
    description: "Blend blanco Moscatel, Torrontes y Riesling. Destaca por su aroma frutal, notas florales y una acidez equilibrada. Elogiado principalmente por su equilibrio entre dulzor y acidez.",
    price: 8000,
    image: "images/Expresion Dulce de altura 2022.jpg"
  },
  {
    id: "b-los-muros",
    category: "blancos",
    bodega: "Finca Bandini",
    name: "Los Muros Blanc de Blancs 2022",
    origin: "Los Chacayes, Tunuyán, Mendoza",
    description: "Parcelas selectas. 25% Chardonnay 25% Gewurztraminer 25% Sauvignon Blanc 25% Viognier. Tonos dorados y verdosos, aromas a limón y pomelo, acidez equilibrada con un final complejo debido a su 25% de fermentación y crianza en barrica de roble francés.",
    price: 18500,
    image: "images/Los Muros Blanc de Blancs 2022.jpg"
  },
  {
    id: "b-vallisto-gc",
    category: "blancos",
    bodega: "Lavaque",
    name: "Vallisto Gaucho Club Torrontes 2024",
    origin: "Valle de Cafayate, Salta",
    description: "Alta intensidad aromática. Entrada fresca, frutal y vivaz. Ofrece una acidez cítrica refrescante y un final persistente.",
    price: 15500,
    image: "images/Vallisto Gaucho Club Torrontes 2024.jpg"
  },
  {
    id: "b-viejas-blancas",
    category: "blancos",
    bodega: "Lavaque",
    name: "Viejas Blancas Vallisto Extremo 2024 Blend",
    origin: "Valle de Cafayate, Salta",
    description: "Blend Sauvignon Blanc, Viognier y Chardonnay. Viñas más antiguas de uvas blancas. Sin filtrar para mantener estado puro y delicado.",
    price: 18000,
    image: "images/Viejas Blancas Vallisto Extremo 2024 Blend.jpg"
  },
  {
    id: "b-cortaderas",
    category: "blancos",
    bodega: "Mazpre",
    name: "Cortaderas Torrontes 2023",
    origin: "Valles Calchaquíes, Catamarca",
    description: "Se destaca por su perfil aromático floral y fresco. Es un vino ligero, expresivo y muy refrescante en boca.",
    price: 10900,
    image: "images/Cortaderas Torrontes 2023.jpg"
  },

  // ─────────────────────────────────────────────
  // VINOS ROSADOS
  // ─────────────────────────────────────────────
  {
    id: "r-amber-rosado",
    category: "rosados",
    bodega: "Amber Rose",
    name: "Amber Rose Rosado 2024",
    origin: "Cafayate, Salta",
    description: "Rosado de Malbec fermentado en huevos de hormigón. 4 meses crianza en barricas de acacias.",
    price: 12700,
    image: "images/Amber Rose Rosado 2024.jpg"
  },
  {
    id: "r-mazpre-rosado",
    category: "rosados",
    bodega: "Mazpre",
    name: "Rosado de Malbec 2025",
    origin: "Valles Calchaquíes, Catamarca",
    description: "Solo 627 botellas. Rosado de corte seco con un perfil fresco y versátil. De color fresa intenso y aromas frutales.",
    price: 10000,
    image: "images/Malbec Rosé 2023.jpg"
  },
  {
    id: "r-taimado-rose",
    category: "rosados",
    bodega: "Clos de los 7",
    name: "Taimado Rose 2025",
    origin: "Valle de Uco, Mendoza",
    description: "Fresco, vibrante y frutado. Notas a frutos rojos frescos como frutilla o frambuesa. Acidez equilibrada y entrada suave en boca.",
    price: 12000,
    image: "images/Malbec Rosé 2023.jpg"
  },
  {
    id: "r-bandini-rose",
    category: "rosados",
    bodega: "Finca Bandini",
    name: "Malbec Rosé 2023",
    origin: "Las Compuertas, Luján de Cuyo, Mendoza",
    description: "Fresco y elegante. Se destaca la frescura de la uva, resalta por su color sutil, aromas a frutos rojos y flores, y un excelente equilibrio en boca.",
    price: 12500,
    image: "images/Malbec Rosé 2023.jpg"
  },
  {
    id: "r-mar-vides",
    category: "rosados",
    bodega: "Finca Chaskañawi",
    name: "Mar de Vides Rosado de Malbec 2025",
    origin: "Tolombón, Valle de Cafayate, Salta",
    description: "Crianza en barrica de roble. Solo 600 botellas. Frescura vibrante, acidez equilibrada y perfil aromático a frutos rojos.",
    price: 15000,
    image: "images/Mar de Vides Rosado de Malbec 2025.jpg"
  },

  // ─────────────────────────────────────────────
  // ESPECIALES (Clarete, Moscato, Mistela, Gin)
  // ─────────────────────────────────────────────
  {
    id: "e-antropo-clarete",
    category: "especiales",
    bodega: "Antropo Wines",
    name: "Antropo Clarete 2025",
    origin: "Jujuy",
    description: "Syrah 80% Chardonnay 20%. Fresco y ligero. Destaca su perfil aromático frutal y su gran acidez natural.",
    price: 15200,
    image: "images/Antropo Clarete 2025.jpg"
  },
  {
    id: "e-gin-london",
    category: "especiales",
    bodega: "Runa",
    name: "Runa Craft Gin London Dry",
    origin: "Buenos Aires",
    description: "Original/Craft (con enebro, coriandro, jazmín, jengibre y canela). Más complejo, con notas cítricas, especiadas y florales.",
    price: 14000,
    image: "images/Runa Craft Gin London Dry.jpg"
  },
  {
    id: "e-gin-arandanos",
    category: "especiales",
    bodega: "Runa",
    name: "Runa Craft Gin Arándanos",
    origin: "Buenos Aires",
    description: "Frutal, equilibrado, con notas de frutos rojos y especias, cítricos y un toque dulce.",
    price: 15000,
    image: "images/Runa Craft Gin Arándanos.jpg"
  },

  // ─────────────────────────────────────────────
  // ESPUMANTES
  // ─────────────────────────────────────────────
  {
    id: "esp-ars-collecta",
    category: "espumantes",
    bodega: "Codorniu",
    name: "Ars Collecta Blanc de Blancs Reserva 2021 Cava",
    origin: "España",
    description: "Reserva ecológico Brut. Genial vínculo de tres varietales excepcionales (Chardonnay, Xarel-lo y Parellada) procedentes de tres tierras y zonas climáticas diferentes.",
    price: 28000,
    image: "images/Ars Collecta Blanc de Blancs Reserva 2021 Cava.jpg"
  },

  // ─────────────────────────────────────────────
  // OFERTAS / PROMOCIONES
  // ─────────────────────────────────────────────
  {
    id: "o-acialba-cs",
    category: "ofertas",
    bodega: "Acialba",
    name: "Acialba Cabernet Sauvignon",
    origin: "Valles Calchaquíes, Catamarca",
    description: "Cabernet frutado y elegante, con buena estructura y un final equilibrado. Ideal para quienes buscan un tinto amable y expresivo.",
    price: 6000,
    image: "images/Acialba Cabernet Sauvignon.jpg"
  },
  {
    id: "o-obra-cf",
    category: "ofertas",
    bodega: "Septima",
    name: "Obra Reserva Cabernet Franc 2023",
    origin: "Agrelo, Luján de Cuyo, Mendoza",
    description: "Este Cabernet Franc mantiene el clásico carácter herbal y especiado de la variedad con perfil fresco y elegante. Pasa por un tiempo de crianza en barricas de roble.",
    price: 9000,
    image: "images/Obra Reserva Cabernet Franc 2023.jpg"
  },
  {
    id: "o-coplero",
    category: "ofertas",
    bodega: "Alvaro Davalos",
    name: "Coplero Torrontes 2023",
    origin: "Valles Calchaquíes, Salta",
    description: "Destaca por su gran frescura y su perfil aromático muy floral. Presenta una entrada amable. Aunque por aroma parece dulce, es un vino seco, fresco y de acidez equilibrada.",
    price: 5000,
    image: "images/Coplero Torrontes 2023.jpg"
  }
];
