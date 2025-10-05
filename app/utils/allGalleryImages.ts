export function getAllGalleryImages() {
  function largeSmallWithSameName(name: string) {
    return {
      srcLarge: `gallery/large/${name}`,
      srcSmall: `gallery/small/${name}`,
    }
  }
  return [
    {
      ...largeSmallWithSameName("IMG_20251005_185038195~2.jpg"),
      alt: "gal1",
      description: "Прототип для исследования эргономики и сборки электронной части (вид 1)",
    },
    {
      ...largeSmallWithSameName("IMG_20251005_185220116~2.jpg"),
      alt: "gal2",
      description: "Прототип для исследования эргономики и сборки электронной части (вид 2)",
    },
    {
      ...largeSmallWithSameName("IMG_20251005_185348411.jpg"),
      alt: "gal3",
      description: "Прототип для исследования эргономики и сборки электронной части (вид 3)",
    },
    {
      ...largeSmallWithSameName("IMG_20251005_185511059~2.jpg"),
      alt: "gal4",
      description: "Прототип для исследования эргономики и сборки электронной части (вид 4)",
    },
    {
      ...largeSmallWithSameName("IMG_20251005_185534227.jpg"),
      alt: "gal5",
      description: "Прототип для исследования эргономики и сборки электронной части (вид 5)",
    },
    {
      ...largeSmallWithSameName("S1000042.jpg"),
      alt: "gal6",
      description: "Прототип пассивного хамбакера. Оптимизирован под печать и легкую сборку. Вся коммутация выполнена на печатной плате",
    },
    {
      ...largeSmallWithSameName("IMG_20250818_235451000.jpg"),
      alt: "gal7",
      description: "Печатаем деку",
    },
    {
      ...largeSmallWithSameName("IMG_20251005_220303502.jpg"),
      alt: "gal8",
      description: "Прототипы активных хамбакеров (близких по конструкции к EMG) на быстросьемном креплении",
    },
    {
      ...largeSmallWithSameName("IMG_20251005_220543073.jpg"),
      alt: "gal9",
      description: "Печатные платы для коммутации звукоснимателей и быстросьемного крепления",
    },
    {
      ...largeSmallWithSameName("5237888698702491981_121.jpg"),
      alt: "gal10",
      description: "Сборка деки модели А из напечатанных компонентов",
    },
    {
      ...largeSmallWithSameName("5237888698702491982_121.jpg"),
      alt: "gal11",
      description: "Печатные платы для коммутации звукоснимателей и быстросьемного крепления (2)",
    },
    {
      ...largeSmallWithSameName("5237888698702491983_121.jpg"),
      alt: "gal12",
      description: "Макеты звукоснимателей на быстросьемном магнитном креплении",
    },
    {
      ...largeSmallWithSameName("5237888698702491990_121.jpg"),
      alt: "gal13",
      description: "Процесс идет...",
    },
    {
      ...largeSmallWithSameName("IMG_20250808_132705408.jpg"),
      alt: "gal14",
      description: "Печатные платы для коммутации звукоснимателей и быстросьемного крепления (3)",
    },
    {
      ...largeSmallWithSameName("sjnmxoklas.jpg"),
      alt: "gal24",
      description: "Пробная постобработка (шлифовка, шпатлевка, грунтовка, покраска) деки",
    },
    {
      ...largeSmallWithSameName("IMG_20251005_215443406~2.jpg"),
      alt: "gal15",
      description: "Механика намоточного станка собрана",
    },
    {
      ...largeSmallWithSameName("Screenshot 2025-08-08 124602.jpg"),
      alt: "gal16",
      description: "Разработка модели А (1)",
    },
    {
      ...largeSmallWithSameName("Screenshot 2025-08-08 124858.jpg"),
      alt: "gal17",
      description: "Разработка модели А (2)",
    },
    {
      ...largeSmallWithSameName("Screenshot 2025-08-08 124801.jpg"),
      alt: "gal18",
      description: "Разработка модели А (3)",
    },
    {
      ...largeSmallWithSameName("Screenshot 2025-08-08 124858.jpg"),
      alt: "gal19",
      description: "Разработка модели А (4)",
    },
    {
      ...largeSmallWithSameName("Screenshot 2025-08-08 125335.jpg"),
      alt: "gal20",
      description: "Разработка намотчика (1)",
    },
    {
      ...largeSmallWithSameName("Screenshot 2025-08-08 125346.jpg"),
      alt: "gal21",
      description: "Разработка намотчика (2)",
    },
    {
      ...largeSmallWithSameName("Screenshot 2025-08-08 134111.jpg"),
      alt: "gal22",
      description: "Разработка звукоснимателей в процессе (1)",
    },
    {
      ...largeSmallWithSameName("Screenshot 2025-08-08 134225.jpg"),
      alt: "gal23",
      description: "Разработка звукоснимателей в процессе (2)",
    },
    {
      ...largeSmallWithSameName("Screenshot 2025-08-08 133335.jpg"),
      alt: "gal24",
      description: "Подготовка деки модели А к печати (1)",
    },
    {
      ...largeSmallWithSameName("Screenshot 2025-08-08 135854.jpg"),
      alt: "gal25",
      description: "Подготовка деки модели А к печати (2)",
    },
    {
      ...largeSmallWithSameName("Screenshot 2025-08-08 140042.jpg"),
      alt: "gal26",
      description: "Подготовка грифа модели А к печати (3)",
    },
  ]
}
