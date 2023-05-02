const products = [{
    id: 1,
    category: "Tarjetas-de-video",
    brand: "Placa de Video ASUS Nvidia Geforce RTX 4080 ROG STRIX 16GB GDDR6X",
    description: "Descripción de la tarjeta gráfica 1",
    price: 15000,
    image: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/90YV0IC0-M0AA00_600.jpg",
    cuota: "6 Cuotas Sin interes",
  },
  {
    id: 2,
    category: "Tarjetas-de-video",
    brand: "Placa de Video AMD RADEON Gigabyte RX 7900 XT Gaming Oc 20GB GDDR6",
    description: "Descripción de la tarjeta gráfica 2",
    price: 12000,
    image: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/90YV0II0-M0AA00_600.jpg",
    cuota: "6 Cuotas Sin interes",
  },
  {
    id: 3,
    category: "Tarjetas-de-video",
    brand: "Placa de Video Asus Nvidia Geforce Rtx 4070 Ti Rog Strix 12gb Oc Gddr6x",
    description: "Descripción de la tarjeta gráfica 3",
    price: 20000,
    image: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/GV-R79XTGAMING-OC-20GD_600.jpg",
    cuota: "6 Cuotas Sin interes",
  },
  {
    id: 4,
    category: "Procesador",
    brand: "Procesador Intel I9-12900k 5.1ghz 30mb s.1700",
    description: "Descripción del procesador Intel Core i9-12900K",
    price: 59999,
    image: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/BX8071512900K_600.jpg",
    cuota: "6 Cuotas Sin Interés",
  },
  {
    id: 5,
    category: "Procesador",
    brand: "Procesador Intel I9-11900K 5.3Ghz 16Mb S.1200",
    description: "Descripción del procesador 1",
    price: 70000,
    image: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/BX8070811900K_600.jpg",
    cuota: "6 Cuotas Sin interes",
  },
  {
    id: 6,
    category: "Procesador",
    brand: "Procesador AMD Ryzen 9 7900 5.4 Ghz AM5",
    description: "Descripción del procesador AMD Ryzen 9 5950X",
    price: 77999,
    image: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/100-100000590BOX_600.jpg",
    cuota: "12 Cuotas Sin Interés",
  },
  {
    id: 7,
    category: "MotherBoard",
    brand: "Motherboard Asus ROG STRIX B550-F GAMING",
    description: "Descripción de la motherboard ASUS ROG MAXIMUS XIII HERO",
    price: 69999,
    image: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/90MB14S0-MVAAY0_600.jpg",
    cuota: "12 Cuotas Sin Interés",
  },
  {
    id: 8,
    category: "MotherBoard",
    brand: "Motherboard Gigabyte X570S AORUS Elite AX AM4",
    description: "Descripción de la motherboard GIGABYTE Z690 AORUS ELITE DDR4",
    price: 42999,
    image: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/X570S-AORUS-ELITE-AX_600.jpg",
    cuota: "12 Cuotas Sin Interés",
  },
  {
    id: 9,
    category: "MotherBoard",
    brand: "Motherboard Asrock Z590 Steel Legend Wifi 6e 1200 Z690 AORUS ULTRA",
    description: "Descripción de la motherboard 2",
    price: 60000,
    image: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/90-MXBFK0-A0UAYZ_600.jpg",
    cuota: "6 Cuotas Sin interes",
  },
  {
    id: 10,
    category: "Memoria-Ram",
    brand: "Memoria Ram Corsair Dominator Platinum RGB White 16GB (2X8GB)  3600 Mhz DDR4",
    description: "Descripción de la memoria RAM 1",
    price: 25000,
    image: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/CMT16GX4M2C3600C18W_600.jpg",
    cuota: "6 Cuotas Sin interes",
  },
  {
    id: 11,
    category: "Memoria-Ram",
    brand: "Memoria Ram Patriot VENOM 16GB (2x8GB) 5600 Mhz DDR5",
    description: "Descripción de la memoria RAM 2",
    price: 22000,
    image: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/PVV516G560C40K_600.jpg",
    cuota: "6 Cuotas Sin interes",
  },
  {
    id: 12,
    category: "Memoria-Ram",
    brand: "Memoria Ram Adata XPG Lancer Black RGB 16GB 5200 Mhz DDR5",
    description: "Descripción de la memoria RAM Corsair Vengeance RGB PRO DDR4 32GB (2x16GB) 3600MHz C18",
    price: 31999,
    image: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/AX5U5200C3816G-CLARBK_600.jpg",
    cuota: "12 Cuotas Sin Interés",
  },
  {
    id: 13,
    category: "Fuentes",
    brand: "EVGA 1000 GQ, 80+ GOLD 1000W, Semi Modular",
    description: "Descripción de la fuente de alimentación 1",
    price: 25000,
    image: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/210-GQ-1000-V1_600.jpg",
    cuota: "6 Cuotas Sin interes",
  },
  {
    id: 14,
    category: "Fuentes",
    brand: "Corsair CX Series CX650M 650W 80 PLUS BRONZE Haswell Ready Modular Power Supply",
    description: "Descripción de la fuente de alimentación 2",
    price: 12000,
    image: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/CP-9020103-WW_600.jpg",
    cuota: "6 Cuotas Sin interes",
  },
  {
    id: 15,
    category: "Fuentes",
    brand: "Fuente 1200W Corsair HX1200 80 PLUS Platinum Modular - No Incluye Cable Power",
    description: "Descripción de la fuente de alimentación 3",
    price: 18000,
    image: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/CP-9020140-NA_600.jpg",
    cuota: "6 Cuotas Sin interes",
  },
];

export default products

// const formattedProducts = products.map((product) => {
//   return {
//     ...product,
//     price: product.price.toLocaleString(),
//   };
// });



export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 500)
  })
}

export const getProductsByCategory = (id) => {
  return new Promise((resolve) => {
  setTimeout(() => {
  const filteredProducts = products.filter((item)=> item.category === id)
  resolve(filteredProducts)
  }, 500)
  })
  }