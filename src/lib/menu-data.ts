import kebab from "@/assets/dish-kebab.jpg";
import mantu from "@/assets/dish-mantu.jpg";
import bolani from "@/assets/dish-bolani.jpg";
import chapli from "@/assets/dish-chapli.jpg";
import firni from "@/assets/dish-firni.jpg";
import tea from "@/assets/dish-tea.jpg";
import kabuli from "@/assets/hero-kabuli.jpg";

export type Category = "starters" | "mains" | "bbq" | "desserts" | "drinks";

export type Dish = {
  id: string;
  category: Category;
  image: string;
  price: number;
  prepMin: number;
  spicy?: 0 | 1 | 2 | 3;
  vegetarian?: boolean;
  popular?: boolean;
  isNew?: boolean;
  name: Record<"fa" | "ps" | "en", string>;
  desc: Record<"fa" | "ps" | "en", string>;
};

export const MENU: Dish[] = [
  {
    id: "kabuli-pulao",
    category: "mains",
    image: kabuli,
    price: 450,
    prepMin: 25,
    popular: true,
    name: { fa: "قابلی پلو کابل", ps: "کابلي پلاو", en: "Kabuli Pulao" },
    desc: {
      fa: "برنج زعفرانی با گوشت گوسفند، هویج کاراملی و کشمش — غذای ملی افغانستان.",
      ps: "د زعفرانو وريجې د پسه غوښې، رنګه ګاجرو او کشمشو سره — د افغانستان ملي خواړه.",
      en: "Saffron rice with tender lamb, caramelized carrots and raisins — Afghanistan's national dish.",
    },
  },
  {
    id: "lamb-kebab",
    category: "bbq",
    image: kebab,
    price: 380,
    prepMin: 20,
    spicy: 1,
    popular: true,
    name: { fa: "کباب گوسفند", ps: "د پسه کباب", en: "Charcoal Lamb Kebab" },
    desc: {
      fa: "تکه‌های نرم گوسفند مزه‌دار شده و پخته روی زغال چوب.",
      ps: "د پسه نرمې ټوټې، په لرګي سکاره پخې شوې.",
      en: "Marinated lamb cubes grilled to perfection over open charcoal.",
    },
  },
  {
    id: "mantu",
    category: "mains",
    image: mantu,
    price: 320,
    prepMin: 30,
    name: { fa: "منتو", ps: "منتو", en: "Mantu Dumplings" },
    desc: {
      fa: "دامپلینگ‌های خانگی با گوشت چرخ‌کرده، سس ماست و نخود.",
      ps: "کورنۍ دامپلینګ د غوښې، ماستو سس او نخودو سره.",
      en: "House-made dumplings with spiced beef, yogurt sauce and split peas.",
    },
  },
  {
    id: "bolani",
    category: "starters",
    image: bolani,
    price: 180,
    prepMin: 15,
    vegetarian: true,
    isNew: true,
    name: { fa: "بولانی سبزی", ps: "د سبو بولاني", en: "Herb Bolani" },
    desc: {
      fa: "نان تازه پر شده با سبزیجات معطر، سرو با ماست خانگی.",
      ps: "تازه ډوډۍ چې د معطرو سبو څخه ډکه شوې، د کورنۍ ماستو سره.",
      en: "Fresh flatbread stuffed with fragrant herbs, served with house yogurt.",
    },
  },
  {
    id: "chapli",
    category: "bbq",
    image: chapli,
    price: 340,
    prepMin: 20,
    spicy: 2,
    name: { fa: "چپلی کباب", ps: "چپلي کباب", en: "Chapli Kebab" },
    desc: {
      fa: "کباب گرد و ادویه‌ای، همراه نان تازه و سبزیجات.",
      ps: "ګرد او مصالحه لرونکی کباب، د تازه ډوډۍ او سبزیجاتو سره.",
      en: "Traditional spiced beef patties, served with warm naan and greens.",
    },
  },
  {
    id: "firni",
    category: "desserts",
    image: firni,
    price: 150,
    prepMin: 10,
    vegetarian: true,
    popular: true,
    name: { fa: "فرنی زعفرانی", ps: "زعفرانه فرني", en: "Saffron Firni" },
    desc: {
      fa: "دسر شیری خنک با زعفران، پسته و گلبرگ گل رز.",
      ps: "د شیدو یخ خواږه د زعفرانو، پستې او د ګلاب د پاڼو سره.",
      en: "Chilled milk pudding with saffron, pistachios and rose petals.",
    },
  },
  {
    id: "cardamom-tea",
    category: "drinks",
    image: tea,
    price: 80,
    prepMin: 5,
    vegetarian: true,
    isNew: true,
    name: { fa: "چای هل", ps: "د هیل چای", en: "Cardamom Chai" },
    desc: {
      fa: "چای معطر با هل سبز، سرو در فنجان سنتی.",
      ps: "د شنه هیل معطر چای، په دودیز فنجان کې.",
      en: "Fragrant green cardamom tea, served in a traditional glass.",
    },
  },
];

export const CATEGORIES: { id: "all" | Category; key: string }[] = [
  { id: "all", key: "cat.all" },
  { id: "starters", key: "cat.starters" },
  { id: "mains", key: "cat.mains" },
  { id: "bbq", key: "cat.bbq" },
  { id: "desserts", key: "cat.desserts" },
  { id: "drinks", key: "cat.drinks" },
];