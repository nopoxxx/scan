export const whyUsData = [
  {
    image: require("./images/why_us_1.png"),
    children: "Высокая и оперативная скорость обработки заявки",
  },
  {
    image: require("./images/why_us_2.png"),
    children:
      "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос",
  },
  {
    image: require("./images/why_us_3.png"),
    children:
      "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству",
  },
];

export const tarrifsData = [
  {
    children: "Beginner",
    image: require("./images/beginner.png"),
    color: "#ffb64f",
    dark: false,
    subtitle: "Для небольшого исследования",
    price: 799,
    fullprice: 1200,
    installments: 150,
    advantages: [
      "Безлимитная история запросов",
      "Безопасная сделка",
      "Поддержка 24/7",
    ],
  },
  {
    children: "Pro",
    image: require("./images/pro.png"),
    color: "#7ce3e1",
    dark: false,
    subtitle: "Для небольшого исследования",
    price: 1299,
    fullprice: 2600,
    installments: 279,
    advantages: [
      "Все пункты тарифа Beginner",
      "Экспорт истории",
      "Рекомендации по приоритетам",
    ],
  },
  {
    children: "Business",
    image: require("./images/business.png"),
    color: "#000000",
    dark: true,
    subtitle: "Для корпоративных клиентов",
    price: 2379,
    fullprice: 3700,
    installments: null,
    advantages: [
      "Все пункты тарифа Pro",
      "Безлимитное количество запросов",
      "Приоритетная поддержка",
    ],
  },
];

export const LoginViaMethods = [
  {
    name: "google",
    image: require("./images/google.png"),
    link: "/",
  },
  {
    name: "facebook",
    image: require("./images/facebook.png"),
    link: "/",
  },
  {
    name: "yandex",
    image: require("./images/yandex.png"),
    link: "/",
  },
];
