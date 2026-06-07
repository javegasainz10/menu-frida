// ============================================================
// PRODUCT DATA — Frida Vinos y Sabores
// Generated from listado_vinos.xlsx
// ============================================================

const PRODUCTS = [
  // ─────────────────────────────────────────────
  // VINOS TINTOS
  // ─────────────────────────────────────────────
  {
    id: "t-altos-la-ci-naga-vino-artesanal-2015",
    category: "tintos",
    bodega: "Altos La Ciénaga",
    name: "Altos La Ciénaga Vino Artesanal 2015",
    origin: "Colalao del Valle, Tucumán",
    description: "Blend de Shiraz, Malbec y Cabernet Sauvignon, intenso y con gran concentración. Vino de altura con 90 puntos Tim Atkin.",
    price: 12400,
    image: "fotos_botellas/Altos La Ciénaga Vino Artesanal 2015.webp"
  },
  {
    id: "t-the-thorn-reserva-malbec-2024",
    category: "tintos",
    bodega: "Amber Rose",
    name: "The Thorn Reserva Malbec 2024",
    origin: "Valle de Cafayate, Salta",
    description: "Malbec equilibrado con 4 meses en roble francés. Frutas del bosque y un toque especiado que lo vuelve elegante y fácil de disfrutar.",
    price: 13500,
    image: "fotos_botellas/The Thorn Reserva Malbec 2024.webp"
  },
  {
    id: "t-taimado-malbec-2023",
    category: "tintos",
    bodega: "Clos de los 7",
    name: "Taimado Malbec 2023",
    origin: "Vista Flores, Valle de Uco, Mendoza",
    description: "Malbec joven, fresco y frutado. Ligero, vibrante y muy fácil de tomar.",
    price: 11100,
    image: "fotos_botellas/Taimado Malbec 2023.webp"
  },
  {
    id: "t-taimado-baby-malbec-2024",
    category: "tintos",
    bodega: "Clos de los 7",
    name: "Taimado Baby Malbec 2024",
    origin: "Vista Flores, Valle de Uco, Mendoza",
    description: "Malbec joven y frutal, con un perfil fresco y amable. Ideal para quienes buscan un tinto suave.",
    price: 8300,
    image: "fotos_botellas/Taimado Baby Malbec 2024.webp"
  },
  {
    id: "t-taimado-merlot-2024",
    category: "tintos",
    bodega: "Clos de los 7",
    name: "Taimado Merlot 2024",
    origin: "Vista Flores, Valle de Uco, Mendoza",
    description: "Merlot ligero y fluido, con notas de frutos rojos y un toque herbal. Muy fácil de tomar.",
    price: 11100,
    image: "fotos_botellas/Taimado Merlot 2024.webp"
  },
  {
    id: "t-alma-de-rey-malbec-2019",
    category: "tintos",
    bodega: "Del Carmen",
    name: "Alma de Rey Malbec 2019",
    origin: "Calingasta, San Juan",
    description: "Malbec joven y expresivo, con fruta roja y un final suave. Perfecto para todos los días.",
    price: 8600,
    image: "fotos_botellas/Alma de Rey Malbec 2019.webp"
  },
  {
    id: "t-yeta-malbec-cabernet-sauvignon",
    category: "tintos",
    bodega: "Domingo Molina",
    name: "Yeta Malbec Cabernet Sauvignon",
    origin: "Valle Rupestre, Valles Calchaquíes, Salta",
    description: "95% Malbec 5% Cabernet Sauvignon. Blend potente y fresco, con fruta negra y un perfil típico del norte. Ideal para quienes buscan vinos con carácter.",
    price: 18000,
    image: "fotos_botellas/Yeta Malbec Cabernet Sauvignon.webp"
  },
  {
    id: "t-dos-cauces-malbec-2025",
    category: "tintos",
    bodega: "Finca Bandini",
    name: "Dos Cauces Malbec 2025",
    origin: "Las Compuertas, Luján de Cuyo, Mendoza",
    description: "Malbec fresco y frutal, redondo y equilibrado.  Con una crianza pensada para mantener la pureza de la fruta.",
    price: 11000,
    image: "fotos_botellas/Dos Cauces Malbec 2025.webp"
  },
  {
    id: "t-kuntur-cabernet-franc-reserva-2025",
    category: "tintos",
    bodega: "Finca Chaskañawi",
    name: "Kuntur Cabernet Franc Reserva 2025",
    origin: "Tolombón, Valle de Cafayate, Salta",
    description: "Crianza en barrica de roble. Solo 300 botellas. Posee notas a fruta negra, ciruela pasa y dulce de grosella. Vino con gran personalidad y sin llegar a ser muy astringente, resultando muy agradable al paladar.",
    price: 18000,
    image: "fotos_botellas/Kuntur Cabernet Franc Reserva 2025.webp"
  },
  {
    id: "t-kuntur-malbec-reserva-2025",
    category: "tintos",
    bodega: "Finca Chaskañawi",
    name: "Kuntur Malbec Reserva 2025",
    origin: "Tolombón, Valle de Cafayate, Salta",
    description: "Crianza en barrica de roble. Solo 300 botellas. Valorado por su suavidad, notas de frutos rojos y sutil toque de roble. Redondo y de baja astringencia, lo que lo hace muy fácil y agradable de beber.",
    price: 18000,
    image: "fotos_botellas/Kuntur Malbec Reserva 2025.webp"
  },
  {
    id: "t-kuntur-tannat-reserva-2024",
    category: "tintos",
    bodega: "Finca Chaskañawi",
    name: "Kuntur Tannat Reserva 2024",
    origin: "Tolombón, Valle de Cafayate, Salta",
    description: "Crianza en barrica de roble durante 11 meses. Solo 300 botellas. Destaca por ser una expresión de altura, ofreciendo una estructura firme y tánica característica de la cepa, pero con la elegancia y frescura propias del terroir norteño.",
    price: 18000,
    image: "fotos_botellas/Kuntur Tannat Reserva 2024.webp"
  },
  {
    id: "t-infernales-malbec-2023",
    category: "tintos",
    bodega: "Lavaque",
    name: "Infernales Malbec 2023",
    origin: "Valle de Cafayate, Salta",
    description: "Malbec con buena estructura y taninos suaves. Crianza en roble francés y huevos de concreto.",
    price: 19000,
    image: "fotos_botellas/Infernales Malbec 2023.webp"
  },
  {
    id: "t-cordero-con-piel-de-lobo-2025",
    category: "tintos",
    bodega: "Mosquita Muerta Wines",
    name: "Cordero con Piel de Lobo 2025",
    origin: "Mendoza",
    description: "Malbec joven, frutado y fresco. Muy fácil de tomar, ideal para todos los días.",
    price: 6200,
    image: "fotos_botellas/Cordero con Piel de Lobo 2025.webp"
  },
  {
    id: "t-naiara-malbec-reserva-2017",
    category: "tintos",
    bodega: "Naiara Wines",
    name: "Naiara Malbec Reserva 2017",
    origin: "Valle de Uco, Mendoza",
    description: "Malbec con paso por roble, cuerpo medio a alto y taninos sedosos. Complejo y equilibrado.",
    price: 13500,
    image: "fotos_botellas/Naiara Malbec Reserva 2017.webp"
  },
  {
    id: "t-pannunzio-reserva-malbec-2017",
    category: "tintos",
    bodega: "Pannunzio Wines",
    name: "Pannunzio Reserva Malbec 2017",
    origin: "Barancas, Maipú, Mendoza",
    description: "Cuerpo medio a estructurado, se caracteriza por su jugosidad y sabores frutales definidos. Generalmente criado en barricas de roble francés y americano, lo que aporta complejidad sin tapar la fruta.",
    price: 13700,
    image: "fotos_botellas/Pannunzio Reserva Malbec 2017.webp"
  },
  {
    id: "t-piloto-de-prueba-selecci-n-de-barricas-b",
    category: "tintos",
    bodega: "Piloto Wines",
    name: "Piloto de Prueba Selección de Barricas Blend 2020",
    origin: "Valles Calchaquíes, Salta",
    description: "50% Malbec 25% Cabernet Franc 25% Tannat. Ofrece una estructura tánica firme, frescura y aromas a frutos rojos, destacándose como un vino profundo y de gran carácter de altura.",
    price: 24300,
    image: "fotos_botellas/Piloto de Prueba Selección de Barricas Blend 2020.webp"
  },
  {
    id: "t-gualiama-malbec-2020",
    category: "tintos",
    bodega: "Salvador Figueroa",
    name: "Gualiama Malbec 2020",
    origin: "Valle de Cafayate,Salta",
    description: "Estacionado en barricas de roble francés. OAK AGED (con paso por madera). Se destaca por su intensidad y frutosidad madura.",
    price: 14800,
    image: "fotos_botellas/Gualiama Malbec 2020.webp"
  },
  {
    id: "t-prelatura-reserva-malbec-2017",
    category: "tintos",
    bodega: "Santa María de la Vid",
    name: "Prelatura Reserva Malbec 2017",
    origin: "Valles Calchaquíes, Catamarca",
    description: "Es un vino reconocido por su intensidad y equilibrio, típico de los Malbecs de guarda, con una muy buena relación precio-calidad. al menos 9-12 meses en barrica. taninos marcados pero equilibrados.",
    price: 11700,
    image: "fotos_botellas/Prelatura Reserva Malbec 2017.webp"
  },
  {
    id: "t-los-pasos-malbec-2020",
    category: "tintos",
    bodega: "Septima",
    name: "Los Pasos Malbec 2020",
    origin: "Agrelo, Mendoza",
    description: "Malbec joven, ligero y frutal. Suave y fresco, ideal para todos los días.",
    price: 7500,
    image: "fotos_botellas/Los Pasos Malbec 2020.webp"
  },
  {
    id: "t-a-pleno-sol-colecci-n-quinquela-2017-red",
    category: "tintos",
    bodega: "Valle de La Puerta",
    name: "A Pleno Sol Colección Quinquela 2017 Red Blend",
    origin: "Valle de Famatina, La Rioja",
    description: "50% Malbec 50% Bonarda. 12 meses en barrica de roble. Estructura equilibrada y taninos suaves, es un vino versátil. Este blend ha sumado reconocimientos internacionales.",
    price: 15800,
    image: "fotos_botellas/A Pleno Sol Colección Quinquela 2017 Red Blend.webp"
  },
  {
    id: "t-motivo-de-puerto-colecci-n-quinquela-201",
    category: "tintos",
    bodega: "Valle de La Puerta",
    name: "Motivo de Puerto Colección Quinquela 2018 Red Blend",
    origin: "Valle de Famatina, La Rioja",
    description: "50% Malbec 50% Cabernet Sauvignon. 12 meses en barrica de roble. La revista Wine Enthusiast le otorgó 90 puntos a la cosecha 2018, destacando su calidad y la excelente expresión del blend.",
    price: 15800,
    image: "fotos_botellas/Motivo de Puerto Colección Quinquela 2018 Red Blend.webp"
  },
  {
    id: "t-veleros-reunidos-colecci-n-quinquela-201",
    category: "tintos",
    bodega: "Valle de La Puerta",
    name: "Veleros Reunidos Colección Quinquela 2019 Red Blend",
    origin: "Valle de Famatina, La Rioja",
    description: "50% Malbec 50% Syrah. 12 meses en barrica de roble. Se destaca su entrada suave y fresca. Los taninos son dulces, redondos y amables, con un cuerpo medio y un final prolongado y equilibrado.",
    price: 15800,
    image: "fotos_botellas/Veleros Reunidos Colección Quinquela 2019 Red Blend.webp"
  },
  {
    id: "t-san-pedro-de-yacochuya-2020",
    category: "tintos",
    bodega: "Yacochuya",
    name: "San Pedro de Yacochuya 2020",
    origin: "Valle de Cafayate, Salta",
    description: "Es un blend dominado por Malbec con toque de Cabernet Sauvignon, con una crianza de 12 a 15 meses en barricas de roble francés. Entrada dulce, acidez equilibrada, gran cuerpo y volumen.",
    price: 23300,
    image: "fotos_botellas/San Pedro de Yacochuya 2020.webp"
  },
  // ─────────────────────────────────────────────
  // VINOS BLANCOS
  // ─────────────────────────────────────────────
  {
    id: "b-amalaya-blanco-de-corte-torrontes-riesli",
    category: "blancos",
    bodega: "Amalaya",
    name: "Amalaya Blanco de Corte Torrontes Riesling 2024",
    origin: "Cafayate, Salta",
    description: "85% Torrontés 15% Riesling. Entrada envolvente con una acidez equilibrada y un final fresco y mineral. Aromas florales combinados con notas de lichi, durazno y un toque cítrico.",
    price: 7500,
    image: "fotos_botellas/Amalaya Blanco de Corte Torrontes Riesling 2024.webp"
  },
  {
    id: "b-antropo-blanc-de-blancas-2023",
    category: "blancos",
    bodega: "Antropo",
    name: "Antropo Blanc de blancas 2023",
    origin: "Jujuy",
    description: "70% Torrontes 30% Chardonnay. Se valora el equilibrio logrado. El Chardonnay pasa 6 meses en barrica, aportando volumen, mientras que el Torrontés se elabora en acero inoxidable.",
    price: 16000,
    image: "fotos_botellas/Antropo Blanc de blancas 2023.webp"
  },
  {
    id: "b-taimado-chardonnay-reserva-2024",
    category: "blancos",
    bodega: "Clos de los 7",
    name: "Taimado Chardonnay Reserva 2024",
    origin: "Vista Flores, Valle de Uco, Mendoza",
    description: "Se destaca por su perfil fresco, su paso equilibrado por barrica y su acidez vibrante.  Es un vino seco y de cuerpo medio que equilibra muy bien la untuosidad de la crianza con una acidez marcada.",
    price: 13000,
    image: "fotos_botellas/Taimado Chardonnay Reserva 2024.webp"
  },
  {
    id: "b-taimado-torront-s-2024",
    category: "blancos",
    bodega: "Clos de los 7",
    name: "Taimado Torrontés 2024",
    origin: "Vista Flores, Valle de Uco, Mendoza",
    description: "Ofrece una expresión fresca, vibrante y muy equilibrada. Destaca por sus notas intensamente florales combinadas con matices cítricos y de frutas blancas con carozo.",
    price: 11500,
    image: "fotos_botellas/Taimado Torrontés 2024.webp"
  },
  {
    id: "b-expresion-dulce-de-altura-2022",
    category: "blancos",
    bodega: "Domingo Hermanos",
    name: "Expresion Dulce de altura 2022",
    origin: "Valles Calchaquíes, Salta",
    description: "Blend blanco Moscatel, Torrontes y Riesling. Destaca por su aroma frutal, notas florales y una acidez equilibrada. Elogiado principalmente por su equilibrio entre dulzor y acidez.",
    price: 8000,
    image: "fotos_botellas/Expresion Dulce de altura 2022.webp"
  },
  {
    id: "b-los-muros-blanc-de-blancs-2022",
    category: "blancos",
    bodega: "Finca Bandini",
    name: "Los Muros Blanc de Blancs 2022",
    origin: "Los Chacayes, Tunuyán, Mendoza",
    description: "Parcelas selectas. 25% Chardonnay 25% Gewurztraminer 25% Sauvignon Blanc 25% Viognier. Tonos dorados y verdosos, aromas a limón y pomelo, acidez equilibrada con un final complejo debido a su 25% de fermentación y crianza en barrica de roble francés.",
    price: 18500,
    image: "fotos_botellas/Los Muros Blanc de Blancs 2022.webp"
  },
  {
    id: "b-vallisto-gaucho-club-torrontes-2024",
    category: "blancos",
    bodega: "Lavaque",
    name: "Vallisto Gaucho Club Torrontes 2024",
    origin: "Valle de Cafayate, Salta",
    description: "Alta intensidad aromática.  Entrada fresca, frutal y vivaz. Ofrece una acidez cítrica refrescante y un final persistente.",
    price: 15500,
    image: "fotos_botellas/Vallisto Gaucho Club Torrontes 2024.webp"
  },
  {
    id: "b-viejas-blancas-vallisto-extremo-2024-ble",
    category: "blancos",
    bodega: "Lavaque",
    name: "Viejas Blancas Vallisto Extremo 2024 Blend",
    origin: "Valle de Cafayate, Salta",
    description: "Blend Sauvignon Blanc, Viognier y Chardonnay. Viñas más antiguas de uvas blancas. Sin filtrar para mantener estado puro y delicado.",
    price: 18000,
    image: "fotos_botellas/Viejas Blancas Vallisto Extremo 2024 Blend.webp"
  },
  {
    id: "b-cortaderas-torrontes-2023",
    category: "blancos",
    bodega: "Mazpre",
    name: "Cortaderas Torrontes 2023",
    origin: "Valles Calchaquíes, Catamarca",
    description: "Se destaca por su perfil aromático floral y fresco. Es un vino ligero, expresivo y muy refrescante en boca.",
    price: 10900,
    image: "fotos_botellas/Cortaderas Torrontes 2023.webp"
  },
  // ─────────────────────────────────────────────
  // VINOS ROSADOS
  // ─────────────────────────────────────────────
  {
    id: "r-amber-rose-rosado-2024",
    category: "rosados",
    bodega: "Amber Rose",
    name: "Amber Rose Rosado 2024",
    origin: "Cafayate, Salta",
    description: "Rosado de Malbec fermentado en huevos de hormigón. 4 meses crianza en barricas de acacias.",
    price: 12700,
    image: "fotos_botellas/Amber Rose Rosado 2024.webp"
  },
  {
    id: "r-rosado-de-malbec-2025",
    category: "rosados",
    bodega: "Mazpre",
    name: "Rosado de Malbec 2025",
    origin: "Valles Calchaquíes, Catamarca",
    description: "Solo 627 botellas. Rosado de corte seco con un perfil fresco y versátil. De color fresa intenso y aromas frutales.",
    price: 10000,
    image: "fotos_botellas/Rosado de Malbec 2025.webp"
  },
  {
    id: "r-taimado-rose-2025",
    category: "rosados",
    bodega: "Clos de los 7",
    name: "Taimado Rose 2025",
    origin: "Valle de Uco, Mendoza",
    description: "Fresco, vibrante y frutado. Notas a frutos rojos frescos como frutilla o frambuesa. Acidez equilibrada y entrada suave en boca.",
    price: 12000,
    image: "fotos_botellas/Taimado Rose 2025.webp"
  },
  {
    id: "r-cl-sico-rosado-2024",
    category: "rosados",
    bodega: "Chañarmuyo",
    name: "Clásico Rosado 2024",
    origin: "La Rioja",
    description: "Fresco y elegante. Corte de 50% Syrah y 50% Viognier. Buen balance y complejidad. Acidez equilibrada que lo hace muy agradable y de final persistente.",
    price: 10500,
    image: "fotos_botellas/Clásico Rosado 2024.webp"
  },
  {
    id: "r-malbec-ros-2023",
    category: "rosados",
    bodega: "Finca Bandini",
    name: "Malbec Rosé 2023",
    origin: "Las Compuertas, Luján de Cuyo, Mendoza",
    description: "Fresco y elegante. Se destaca la frescura de la uva, resalta por su color sutil, aromas a frutos rojos y flores, y un excelente equilibrio en boca.",
    price: 12500,
    image: "fotos_botellas/Malbec Rosé 2023.webp"
  },
  {
    id: "r-mar-de-vides-rosado-de-malbec-2025",
    category: "rosados",
    bodega: "Finca Chaskañawi",
    name: "Mar de Vides Rosado de Malbec 2025",
    origin: "Tolombón, Valle de Cafayate, Salta",
    description: "Crianza en barrica de roble. Solo 600 botellas. Frescura vibrante, acidez equilibrada y perfil aromático a frutos rojos.",
    price: 15000,
    image: "fotos_botellas/Mar de Vides Rosado de Malbec 2025.webp"
  },
  {
    id: "r-tierra-arida-rosado-dulce",
    category: "rosados",
    bodega: "Finca La Elvira",
    name: "Tierra Arida Rosado Dulce",
    origin: "Valles Calchaquíes, Salta",
    description: "Rosado de Malbec artesanal. Atractivos colores rosa frambuesa, aromas a frutos rojos, dulzor y frescura.",
    price: 10000,
    image: "fotos_botellas/Tierra Arida Rosado Dulce.webp"
  },
  // ─────────────────────────────────────────────
  // ESPECIALES
  // ─────────────────────────────────────────────
  {
    id: "e-antropo-clarete-2025",
    category: "especiales",
    bodega: "Antropo Wines",
    name: "Antropo Clarete 2025",
    origin: "Jujuy",
    description: "Syrah 80% Chardonnay 20%. Fresco y ligero. Destaca su perfil aromático frutal y su gran acidez natural.",
    price: 15200,
    image: "fotos_botellas/Antropo Clarete 2025.webp"
  },
  {
    id: "e-la-quebrada-moscato",
    category: "especiales",
    bodega: "Borbore",
    name: "La Quebrada Moscato",
    origin: "San Juan",
    description: "Es un vino dulce y generoso elaborado a partir de la uva Moscatel. Una bebida intensa, aromática y con el dulzor característico de la variedad de uva, pero con la particularidad de ofrecer un cuerpo más fuerte.",
    price: 6000,
    image: "fotos_botellas/La Quebrada Moscato.webp"
  },
  {
    id: "e-tierra-arida-mistela-clasico",
    category: "especiales",
    bodega: "Finca La Elvira",
    name: "Tierra Arida Mistela Clasico",
    origin: "Valles Calchaquíes, Salta",
    description: "Mistela artesanal. Se caracteriza por sus aromas a pasas de uva, higos negros y frutos maduros, ofreciendo una experiencia dulce y de gran persistencia.",
    price: 12000,
    image: "fotos_botellas/Tierra Arida Mistela Clasico.webp"
  },
  {
    id: "e-runa-craft-gin-london-dry",
    category: "especiales",
    bodega: "Runa",
    name: "Runa Craft Gin London Dry",
    origin: "Buenos Aires",
    description: "Original/Craft (con enebro, coriandro, jazmín, jengibre y canela). Más complejo, con notas cítricas, especiadas y florales.",
    price: 14000,
    image: "fotos_botellas/Runa Craft Gin London Dry.webp"
  },
  {
    id: "e-runa-craft-gin-ar-ndanos",
    category: "especiales",
    bodega: "Runa",
    name: "Runa Craft Gin Arándanos",
    origin: "Buenos Aires",
    description: "Frutal, equilibrado, con notas de frutos rojos y especias, cítricos y un toque dulce.",
    price: 15000,
    image: "fotos_botellas/Runa Craft Gin Arándanos.webp"
  },
  // ─────────────────────────────────────────────
  // ESPUMANTES
  // ─────────────────────────────────────────────
  {
    id: "e-anna-blanc-de-blancas-cava-brut",
    category: "espumantes",
    bodega: "Codorniu",
    name: "Anna Blanc de Blancas Cava Brut",
    origin: "España",
    description: "Método tradicional. 70% Chardonnay combinada con Parellada y Xarel-lo. Destaca su cremosidad, burbuja fina y una crianza de más de 15 meses en botella.",
    price: 19000,
    image: "fotos_botellas/Anna Blanc de Blancas Cava Brut.webp"
  },
  {
    id: "e-ars-collecta-blanc-de-blancs-reserva-202",
    category: "espumantes",
    bodega: "Codorniu",
    name: "Ars Collecta Blanc de Blancs Reserva 2021 Cava",
    origin: "España",
    description: "Reserva ecológico Brut. Genial vínculo de tres varietales excepcionales (Chardonnay, Xarel-lo y Parellada) procedentes de tres tierras y zonas climáticas diferentes.",
    price: 28000,
    image: "fotos_botellas/Ars Collecta Blanc de Blancs Reserva 2021 Cava.webp"
  },
  {
    id: "e-codorniu-zero",
    category: "espumantes",
    bodega: "Codorniu",
    name: "Codorniu Zero",
    origin: "España",
    description: "Free alcohol Uva Airen. Bebida carbonatada a base de vino desalcoholizado.",
    price: 15000,
    image: "fotos_botellas/Codorniu Zero.webp"
  },
  // ─────────────────────────────────────────────
  // OFERTA / PROMOCIONES
  // ─────────────────────────────────────────────
  {
    id: "o-altobelli-malbec",
    category: "ofertas",
    bodega: "Familia Altobelli",
    name: "Altobelli Malbec",
    origin: "Animaná, Salta",
    description: "Malbec joven de altura, muy frutado y expresivo, con un final vivaz y amable.",
    price: 6000,
    image: "fotos_botellas/Altobelli Malbec.webp"
  },
  {
    id: "o-acialba-cabernet-sauvignon",
    category: "ofertas",
    bodega: "Acialba",
    name: "Acialba Cabernet Sauvignon",
    origin: "Valles Calchaquíes, Catamarca",
    description: "Cabernet frutado y elegante, con buena estructura y un final equilibrado. Ideal para quienes buscan un tinto amable y expresivo.",
    price: 6000,
    image: "fotos_botellas/Acialba Cabernet Sauvignon.webp"
  },
  {
    id: "o-obra-reserva-cabernet-franc-2023",
    category: "ofertas",
    bodega: "Septima",
    name: "Obra Reserva Cabernet Franc 2023",
    origin: "Agrelo, Luján de Cuyo, Mendoza.",
    description: "Este Cabernet Franc mantiene el clásico carácter herbal y especiado de la variedad con perfil fresco y elegante. Pasa por un tiempo de crianza en barricas de roble.",
    price: 9000,
    image: "fotos_botellas/Obra Reserva Cabernet Franc 2023.webp"
  },
  {
    id: "o-obra-reserva-malbec-2023",
    category: "ofertas",
    bodega: "Septima",
    name: "Obra Reserva Malbec 2023",
    origin: "Agrelo, Luján de Cuyo, Mendoza.",
    description: "Excelente equilibrio entre fruta y madera. Paso por barricas de roble que aportan notas tostadas sutiles sin opacar la fruta. Es un vino fácil de beber pero con la complejidad justa de un reserva.",
    price: 9000,
    image: "fotos_botellas/Obra Reserva Malbec 2023.webp"
  },
  {
    id: "o-emblema-rosado-de-malbec-2024",
    category: "ofertas",
    bodega: "Septima",
    name: "Emblema Rosado de Malbec 2024",
    origin: "Agrelo, Luján de Cuyo, Mendoza.",
    description: "Destaca por su color salmón pálido y su perfil aromático a frutos rojos.  Entrada fresca, jugosa y frutada. Es redondo gracias al contacto con las borras finas que le otorgan una textura sedosa, con taninos leves y un final largo.",
    price: 7000,
    image: "fotos_botellas/Emblema Rosado de Malbec 2024.webp"
  },
  {
    id: "o-acialba-rosado-tard-o",
    category: "ofertas",
    bodega: "Acialba",
    name: "Acialba Rosado Tardío",
    origin: "Valles Calchaquíes, Catamarca",
    description: "Vino de aroma frutado y un dulzor que se vuelve intenso hacia el final. Características refrescantes y afrutadas.",
    price: 6500,
    image: "fotos_botellas/Acialba Rosado Tardío.webp"
  },
  {
    id: "o-caelum-chardonnay-2022",
    category: "ofertas",
    bodega: "Caelum",
    name: "Caelum Chardonnay 2022",
    origin: "Agrelo, Luján de Cuyo, Mendoza",
    description: "De color dorado con reflejos verdosos, presenta una nariz muy compleja que va de la lima a notas minerales pasando por frutas tropicales. Vino bien estructurado, fresco y complejo.",
    price: 13900,
    image: "fotos_botellas/Caelum Chardonnay 2022.webp"
  },
  {
    id: "o-caelum-fiano-2024",
    category: "ofertas",
    bodega: "Caelum",
    name: "Caelum Fiano 2024",
    origin: "Agrelo, Luján de Cuyo, Mendoza",
    description: "Vino con reflejos dorados y verdes. Presenta aromas a flores blancas, especias y expresiones de mineralidad. Bien estructurado con un final limpio y fresco.",
    price: 13900,
    image: "fotos_botellas/Caelum Fiano 2024.webp"
  },
  {
    id: "o-caelum-reserva-blend-blanco-2023",
    category: "ofertas",
    bodega: "Caelum",
    name: "Caelum Reserva Blend Blanco 2023",
    origin: "Agrelo, Luján de Cuyo, Mendoza",
    description: "50% Fiano 45% Chardonnay 5% Sauvignon Blanc. Aromas a flores blancas y notas minerales que combina elegancia y estructura. Vino amable y fresco.",
    price: 17900,
    image: "fotos_botellas/Caelum Reserva Blend Blanco 2023.webp"
  },
  {
    id: "o-coplero-torrontes-2023",
    category: "ofertas",
    bodega: "Alvaro Davalos",
    name: "Coplero Torrontes 2023",
    origin: "Valles Calchaquíes, Salta",
    description: "Destaca por su gran frescura y su perfil aromático muy floral. Presenta una entrada amable. Aunque por aroma parece dulce, es un vino seco, fresco y de acidez equilibrada.",
    price: 5000,
    image: "fotos_botellas/Coplero Torrontes 2023.webp"
  },
  {
    id: "o-altobelli-torrontes-tardio-2023",
    category: "ofertas",
    bodega: "Familia Altobelli",
    name: "Altobelli Torrontes Tardio 2023",
    origin: "Animaná, Salta",
    description: "Vino dulce y refrescante con una notable concentración de aromas frutales y florales propios de la cepa.",
    price: 10500,
    image: "fotos_botellas/Altobelli Torrontes Tardio 2023.webp"
  },
  {
    id: "o-finca-humanao-torrontes-375cc",
    category: "ofertas",
    bodega: "Humanao",
    name: "Finca Humanao Torrontes 375cc",
    origin: "Molinos, Salta",
    description: "Vino de cepas cultivadas en el Valle de Molinos, 2.230 mts. De altura, lo que le dan un sabor y aroma característico.",
    price: 3400,
    image: "fotos_botellas/Finca Humanao Torrontes 375cc.webp"
  },
  {
    id: "o-finca-humanao-malbec-375cc",
    category: "ofertas",
    bodega: "Humanao",
    name: "Finca Humanao Malbec 375cc",
    origin: "Molinos, Salta",
    description: "Malbec intenso y frutado, con taninos dulces y un final persistente.",
    price: 3400,
    image: "fotos_botellas/Finca Humanao Malbec 375cc.webp"
  },
  {
    id: "o-maria-handcraft-extra-brut",
    category: "ofertas",
    bodega: "Codorniu",
    name: "Maria Handcraft Extra Brut",
    origin: "Mendoza",
    description: "80% Chardonnay 20% Pinot Noir. Ofrece notas de manzana verde, levadura y una acidez elegante.",
    price: 10000,
    image: "fotos_botellas/Maria Handcraft Extra Brut.webp"
  },
  // ─────────────────────────────────────────────
  // GOURMET & HOGAR
  // ─────────────────────────────────────────────
  {
    id: "g-mermelada-naranja-con-malbec",
    category: "gourmet",
    bodega: "Ampin Sabores Salteños",
    name: "Mermelada Naranja con Malbec",
    origin: "Salta",
    description: "Wine Jam 250 gr. Una combinación artesanal de naranja y Malbec, con sabor intenso y equilibrado. Ideal para acompañar quesos, panes y postres.",
    price: 6200,
    image: "fotos_botellas/Mermelada Naranja con Malbec.jpg"
  },
  {
    id: "g-sumac",
    category: "gourmet",
    bodega: "Cocina Privada El Turco",
    name: "Sumac",
    origin: "Salta",
    description: "Condimento ácido y aromático, típico de la cocina árabe. Aporta frescura y un toque cítrico natural a carnes, ensaladas y vegetales. Condimentos de su cocina.",
    price: 6700,
    image: "fotos_botellas/Sumac.jpg"
  },
  {
    id: "g-baharat",
    category: "gourmet",
    bodega: "Cocina Privada El Turco",
    name: "Baharat",
    origin: "Salta",
    description: "Mezcla clásica de especias de Medio Oriente. Cálida, profunda y versátil para realzar carnes, guisos, arroces y vegetales. Condimentos de su cocina.",
    price: 5800,
    image: "fotos_botellas/Baharat.jpg"
  },
  {
    id: "g-pimenton",
    category: "gourmet",
    bodega: "Cocina Privada El Turco",
    name: "Pimentón",
    origin: "Salta",
    description: "Aroma intenso y color profundo. Ideal para realzar carnes, guisos, vegetales y preparaciones con un toque cálido y ahumado. Condimentos de su cocina.",
    price: 4600,
    image: "fotos_botellas/Pimentón.jpg"
  },
  {
    id: "g-cafe-turco",
    category: "gourmet",
    bodega: "Cocina Privada El Turco",
    name: "Café Turco",
    origin: "Salta",
    description: "Café molido muy fino, de sabor intenso y textura tradicional. Ideal para quienes disfrutan del ritual y el carácter del café turco auténtico.",
    price: 18000,
    image: "fotos_botellas/Café Turco.jpg"
  },
  {
    id: "g-cafe-turco-con-cardamomo",
    category: "gourmet",
    bodega: "Cocina Privada El Turco",
    name: "Café Turco con Cardamomo",
    origin: "Salta",
    description: "Café turco aromatizado con cardamomo. Fragante, especiado y elegante, una mezcla clásica de Medio Oriente.",
    price: 11100,
    image: "fotos_botellas/Café Turco con Cardamomo.jpg"
  },
  {
    id: "g-zaatar",
    category: "gourmet",
    bodega: "Cocina Privada El Turco",
    name: "Zaatar",
    origin: "Salta",
    description: "Mezcla de especias típica de Medio Oriente. Aporta notas herbales, cítricas y tostadas a panes, carnes, vegetales y dips. Condimentos de su cocina.",
    price: 6000,
    image: "fotos_botellas/Zaatar.jpg"
  },
  {
    id: "g-pimienta-negra",
    category: "gourmet",
    bodega: "Cocina Privada El Turco",
    name: "Pimienta Negra",
    origin: "Salta",
    description: "Pimienta negra molida fina, de aroma intenso y sabor picante equilibrado. Un básico indispensable para realzar cualquier preparación. Condimentos de su cocina.",
    price: 5500,
    image: "fotos_botellas/Pimienta Negra.jpg"
  },
  {
    id: "g-menta-libanesa",
    category: "gourmet",
    bodega: "Cocina Privada El Turco",
    name: "Menta Libanesa",
    origin: "Salta",
    description: "Hierba aromática y fresca, típica de la cocina del Líbano. Ideal para ensaladas, salsas, carnes y preparaciones que buscan un toque herbal más intenso y perfumado. Condimentos de su cocina.",
    price: 5600,
    image: "fotos_botellas/Menta Libanesa.jpg"
  },
  {
    id: "g-estante-vinoteca-de-pared",
    category: "gourmet",
    bodega: "Ariel Herrería",
    name: "Estante Vinoteca de pared",
    origin: "Salta",
    description: "Estante vertical de hierro cuadrado, minimalista y resistente, ideal para exhibir 4 botellas de vinos. Permite colocar las botellas de forma segura y elegante, sumando diseño y practicidad a cualquier ambiente.",
    price: 34000,
    image: "fotos_botellas/Estante Vinoteca de pared.jpg"
  }
];
