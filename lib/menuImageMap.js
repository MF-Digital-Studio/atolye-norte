const DEFAULT_MENU_IMAGE = "/images/refined-desserts.jpg";

const SLUG_IMAGE_MAP = {
  "susamli-kurabiye": "/images/gallery-1.jpg",
  "tahilli-mahlepli-kurabiye": "/images/gallery-2.jpg",
  "aycekirdekli-kurabiye": "/images/gallery-3.jpg",
  "cornflakesli-kurabiye": "/images/gallery-4.jpg",
  "bademli-datca-kurabiye": "/images/refined-desserts.jpg",
  "sekerpare-kurabiye": "/images/gallery-1.jpg",
  "kartopu-kurabiye": "/images/gallery-2.jpg",
  "cikolata-dolgulu-kurabiye": "/images/gallery-3.jpg",
  "sutrecel-dolgulu-kurabiye": "/images/gallery-4.jpg",
  "limon-dolgulu-kurabiye": "/images/refined-desserts.jpg",
  "karamel-dolgulu-kurabiye": "/images/gallery-1.jpg",
  "cilek-dolgulu-kurabiye": "/images/gallery-2.jpg",
  "chocolate-chip-cookie": "/images/gallery-3.jpg",
  "kahve-dolgulu-kurabiye": "/images/coffee-atmosphere.jpg",
  "red-velvet-pasta": "/images/signature-cakes.jpg",
  "sutlu-cikolatali-pasta": "/images/celebration.jpg",
  "fistik-drajeli-pasta": "/images/hero-cake.jpg",
  "seftalili-pasta": "/images/signature-cakes.jpg",
  "mangolu-pasta": "/images/celebration.jpg",
  "orman-meyveli-linzer": "/images/gallery-4.jpg",
  "muzlu-crunch-pasta": "/images/hero-cake.jpg",
  "limonlu-pasta": "/images/signature-cakes.jpg",
  "beyaz-cikolatali-cilekli-pasta": "/images/celebration.jpg",
  "sutlu-cikolatali-cilekli-pasta": "/images/hero-cake.jpg",
  "orman-meyveli-sutlu-cikolatali": "/images/signature-cakes.jpg",
  "kestaneli-pasta": "/images/celebration.jpg",
  "frambuazli-pasta": "/images/hero-cake.jpg",
  popstar: "/images/gallery-1.jpg",
  "orman-meyveli-rulo": "/images/gallery-2.jpg",
  "muzlu-karamelli-rulo": "/images/gallery-3.jpg",
  "limonlu-rulo": "/images/gallery-4.jpg",
  "cikolatali-cilekli-rulo": "/images/refined-desserts.jpg",
  "cilekli-paris-brest": "/images/gallery-2.jpg",
  "paris-brest": "/images/gallery-3.jpg",
  "klasik-ekler": "/images/gallery-4.jpg",
  "yaban-mersinli-ekler": "/images/refined-desserts.jpg",
  "yogun-cikolatali-ekler": "/images/gallery-1.jpg",
  "karamelli-ekler": "/images/gallery-2.jpg",
  "orman-meyveli-ekler": "/images/gallery-3.jpg",
  "lotuslu-ekler": "/images/gallery-4.jpg",
  "uc-cikolatali-tuzlu-tart": "/images/gallery-4.jpg",
  "karbonlu-yaban-mersinli-tart": "/images/gallery-1.jpg",
  "cikolatali-flan": "/images/gallery-2.jpg",
};

const imageRules = [
  {
    image: "/images/coffee-atmosphere.jpg",
    keywords: [
      "latte",
      "espresso",
      "americano",
      "cappuccino",
      "kahve",
      "coffee",
    ],
  },
  {
    image: "/images/signature-cakes.jpg",
    keywords: [
      "pasta",
      "cake",
      "red velvet",
      "frambuaz",
      "cilek",
      "çilek",
      "mango",
      "muz",
      "limon",
    ],
  },
  {
    image: "/images/refined-desserts.jpg",
    keywords: [
      "kurabiye",
      "cookie",
      "chip",
      "cornflakes",
      "datca",
      "datça",
      "sekerpare",
      "şekerpare",
    ],
  },
  {
    image: "/images/gallery-2.jpg",
    keywords: ["ekler", "paris brest", "brest", "profiterol"],
  },
  {
    image: "/images/gallery-3.jpg",
    keywords: ["rulo", "roll", "orman meyveli rulo", "muzlu karamelli"],
  },
  {
    image: "/images/gallery-4.jpg",
    keywords: ["tart", "flan", "linzer", "yaban mersinli"],
  },
  {
    image: "/images/celebration.jpg",
    keywords: ["kutlama", "celebration", "brigadeiro"],
  },
];

function normalizeText(value = "") {
  return value
    .toLocaleLowerCase("tr")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function getMenuProductImage(product) {
  const exactImage = SLUG_IMAGE_MAP[product?.id ?? ""];
  if (exactImage) {
    return exactImage;
  }

  const searchable = normalizeText(
    `${product?.name ?? ""} ${product?.id ?? ""} ${product?.category ?? ""}`,
  );

  const matchedRule = imageRules.find((rule) =>
    rule.keywords.some((keyword) =>
      searchable.includes(normalizeText(keyword)),
    ),
  );

  return matchedRule?.image ?? DEFAULT_MENU_IMAGE;
}

export { DEFAULT_MENU_IMAGE };
