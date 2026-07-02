import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "fa" | "ps" | "en";

export const LANGS: { code: Lang; label: string; native: string; dir: "rtl" | "ltr" }[] = [
  { code: "fa", label: "Dari", native: "دری", dir: "rtl" },
  { code: "ps", label: "Pashto", native: "پښتو", dir: "rtl" },
  { code: "en", label: "English", native: "English", dir: "ltr" },
];

type Dict = Record<string, string>;

const dict: Record<Lang, Dict> = {
  fa: {
    "brand.name": "شام کابل",
    "brand.tagline": "طعم اصیل افغانستان",
    "nav.home": "خانه",
    "nav.menu": "منو",
    "nav.about": "درباره ما",
    "nav.gallery": "گالری",
    "nav.reservation": "رزرو میز",
    "nav.contact": "تماس",
    "cta.order": "سفارش آنلاین",
    "cta.reserve": "رزرو میز",
    "cta.explore": "مشاهده منو",
    "cta.viewAll": "مشاهده همه",
    "cta.send": "ارسال پیام",
    "cta.book": "تایید رزرو",
    "hero.eyebrow": "رستوران شام کابل",
    "hero.title": "طعمی که خاطره می‌سازد",
    "hero.subtitle": "غذاهای اصیل افغانی با دستان استادان آشپزی، در فضایی گرم و به‌یادماندنی در قلب کابل.",
    "featured.eyebrow": "غذاهای ویژه",
    "featured.title": "انتخاب‌های سرآشپز",
    "featured.subtitle": "برگزیده‌ای از محبوب‌ترین غذاهای ما، آماده شده با بهترین مواد اولیه.",
    "about.eyebrow": "درباره ما",
    "about.title": "میراث آشپزی افغانستان",
    "about.body": "شام کابل حاصل عشق ما به غذای اصیل افغانی است. از قابلی پلو کابل تا کباب و مانتو، هر غذا با احترام به سنت و ذوق مدرن سرو می‌شود.",
    "why.title": "چرا شام کابل؟",
    "why.fresh.title": "مواد اولیه تازه",
    "why.fresh.body": "هر روز از بازارهای محلی، فقط بهترین‌ها.",
    "why.chef.title": "سرآشپزهای مجرب",
    "why.chef.body": "چند دهه تجربه در آشپزی سنتی افغانی.",
    "why.ambience.title": "فضای دلنشین",
    "why.ambience.body": "چایخانه‌های اصیل، نور گرم و سرویس صمیمی.",
    "why.delivery.title": "سفارش سریع",
    "why.delivery.body": "تحویل به موقع در سراسر کابل.",
    "reserve.title": "رزرو میز",
    "reserve.subtitle": "میز خود را برای یک شب فراموش‌نشدنی رزرو کنید.",
    "form.name": "نام",
    "form.phone": "شماره تماس",
    "form.email": "ایمیل",
    "form.date": "تاریخ",
    "form.time": "زمان",
    "form.guests": "تعداد مهمانان",
    "form.seating": "نوع میز",
    "form.seating.indoor": "داخل سالن",
    "form.seating.outdoor": "فضای باز",
    "form.seating.vip": "میز ویژه",
    "form.notes": "درخواست ویژه",
    "form.message": "پیام شما",
    "form.subject": "موضوع",
    "form.submitted": "درخواست شما دریافت شد. به زودی تماس می‌گیریم.",
    "contact.title": "با ما در تماس باشید",
    "contact.subtitle": "برای سفارش، رزرو یا هر پرسشی، در خدمت شما هستیم.",
    "contact.address": "کابل، افغانستان",
    "contact.hours": "همه روزه ۱۱ صبح تا ۱۱ شب",
    "gallery.title": "گالری",
    "gallery.subtitle": "لحظاتی از فضا و غذاهای ما.",
    "menu.title": "منوی ما",
    "menu.subtitle": "غذاهای اصیل افغانی، دلچسب و به‌یادماندنی.",
    "menu.search": "جستجوی غذا…",
    "menu.all": "همه",
    "menu.popular": "محبوب",
    "menu.new": "جدید",
    "menu.veg": "گیاهی",
    "menu.spicy": "تند",
    "menu.min": "دقیقه",
    "menu.addCart": "افزودن",
    "menu.empty": "غذایی مطابق جستجو یافت نشد.",
    "footer.rights": "کلیه حقوق محفوظ است.",
    "footer.quick": "پیوندها",
    "footer.contact": "تماس",
    "footer.follow": "ما را دنبال کنید",
    "cat.all": "همه",
    "cat.starters": "پیش‌غذا",
    "cat.mains": "غذای اصلی",
    "cat.bbq": "کباب",
    "cat.desserts": "دسر",
    "cat.drinks": "نوشیدنی",
  },
  ps: {
    "brand.name": "د کابل شام",
    "brand.tagline": "د افغانستان اصلي خوند",
    "nav.home": "کور",
    "nav.menu": "مینو",
    "nav.about": "زموږ په اړه",
    "nav.gallery": "ګالري",
    "nav.reservation": "د میز ریزرف",
    "nav.contact": "اړیکه",
    "cta.order": "آنلاین سپارښت",
    "cta.reserve": "د میز ریزرف",
    "cta.explore": "مینو وګورئ",
    "cta.viewAll": "ټول وګورئ",
    "cta.send": "پیغام واستوئ",
    "cta.book": "ریزرف تایید کړئ",
    "hero.eyebrow": "د کابل شام رستورانت",
    "hero.title": "هغه خوند چې یاد پاتې کیږي",
    "hero.subtitle": "د کابل په زړه کې د افغاني اصلي خوړو تجربه، د تجربه لرونکو پخلي کاره وسیله.",
    "featured.eyebrow": "ځانګړي خواړه",
    "featured.title": "د پخلي کار غوره انتخاب",
    "featured.subtitle": "زموږ د خلکو تر ټولو خواښه خواړه، تر ټولو غوره اجزاوو سره.",
    "about.eyebrow": "زموږ په اړه",
    "about.title": "د افغانستان د پخلي میراث",
    "about.body": "د کابل شام زموږ د اصلي افغاني خوړو مینې پایله ده. له قابلي څخه تر کباب او منتو پورې، هر خواړه د دود په درنښت تیار شوي.",
    "why.title": "ولې د کابل شام؟",
    "why.fresh.title": "تازه اجزا",
    "why.fresh.body": "هره ورځ له ځایي بازارونو، یوازې غوره.",
    "why.chef.title": "تجربه لرونکي پخلي کار",
    "why.chef.body": "په دودیز افغاني پخلي کې لسیزې تجربه.",
    "why.ambience.title": "خوندور فضا",
    "why.ambience.body": "اصلي چایخانې، ګرم رڼا او مینه ناکه خدمت.",
    "why.delivery.title": "چټک سپارښت",
    "why.delivery.body": "د کابل په ټول ښار کې په وخت رسول.",
    "reserve.title": "د میز ریزرف",
    "reserve.subtitle": "د یوې هېرېدونې نه شپې لپاره خپل میز خوندي کړئ.",
    "form.name": "نوم",
    "form.phone": "د تماس شمېره",
    "form.email": "بریښنالیک",
    "form.date": "نېټه",
    "form.time": "وخت",
    "form.guests": "د مېلمنو شمېر",
    "form.seating": "د کښېناستلو ډول",
    "form.seating.indoor": "د تالار دننه",
    "form.seating.outdoor": "بهرنی ځای",
    "form.seating.vip": "ځانګړی میز",
    "form.notes": "ځانګړې غوښتنه",
    "form.message": "ستاسو پیغام",
    "form.subject": "موضوع",
    "form.submitted": "ستاسو غوښتنه ترلاسه شوه. ډېر ژر به مو ورسره اړیکه ونیسو.",
    "contact.title": "زموږ سره په اړیکه کې اوسئ",
    "contact.subtitle": "د سپارښت، ریزرف یا هرې پوښتنې لپاره ستاسو په خدمت کې یو.",
    "contact.address": "کابل، افغانستان",
    "contact.hours": "هره ورځ سهار ۱۱ څخه ماښام ۱۱ پورې",
    "gallery.title": "ګالري",
    "gallery.subtitle": "زموږ د فضا او خواړو څو شېبې.",
    "menu.title": "زموږ مینو",
    "menu.subtitle": "اصلي افغاني خواړه، خوندور او د یادولو وړ.",
    "menu.search": "د خوړو لټون…",
    "menu.all": "ټول",
    "menu.popular": "خواښه",
    "menu.new": "نوی",
    "menu.veg": "سبزیجاتي",
    "menu.spicy": "تیز",
    "menu.min": "دقیقې",
    "menu.addCart": "زیاتول",
    "menu.empty": "د لټون سره سم خواړه ونه موندل شول.",
    "footer.rights": "ټول حقوق خوندي دي.",
    "footer.quick": "لینکونه",
    "footer.contact": "اړیکه",
    "footer.follow": "موږ تعقیب کړئ",
    "cat.all": "ټول",
    "cat.starters": "لومړني خواړه",
    "cat.mains": "اصلي خواړه",
    "cat.bbq": "کباب",
    "cat.desserts": "خواږه",
    "cat.drinks": "څښاک",
  },
  en: {
    "brand.name": "Shaam Kabul",
    "brand.tagline": "The authentic taste of Afghanistan",
    "nav.home": "Home",
    "nav.menu": "Menu",
    "nav.about": "About",
    "nav.gallery": "Gallery",
    "nav.reservation": "Reserve",
    "nav.contact": "Contact",
    "cta.order": "Order Online",
    "cta.reserve": "Reserve a Table",
    "cta.explore": "Explore Menu",
    "cta.viewAll": "View all",
    "cta.send": "Send message",
    "cta.book": "Confirm reservation",
    "hero.eyebrow": "Shaam Kabul Restaurant",
    "hero.title": "A taste worth remembering",
    "hero.subtitle": "Authentic Afghan cuisine, crafted by master chefs in the warm heart of Kabul.",
    "featured.eyebrow": "Signature Dishes",
    "featured.title": "Chef's selection",
    "featured.subtitle": "A curated tasting of our most loved plates, made with the finest ingredients.",
    "about.eyebrow": "Our Story",
    "about.title": "A legacy of Afghan cooking",
    "about.body": "Shaam Kabul is a love letter to authentic Afghan cuisine. From Kabuli Pulao to charcoal kebabs and mantu, every dish is prepared with respect for tradition and a modern touch.",
    "why.title": "Why Shaam Kabul",
    "why.fresh.title": "Fresh ingredients",
    "why.fresh.body": "Sourced daily from local markets — nothing but the best.",
    "why.chef.title": "Master chefs",
    "why.chef.body": "Decades of experience in traditional Afghan cooking.",
    "why.ambience.title": "Warm ambience",
    "why.ambience.body": "Authentic tea houses, warm light and genuine hospitality.",
    "why.delivery.title": "Fast delivery",
    "why.delivery.body": "On-time delivery across Kabul.",
    "reserve.title": "Reserve a table",
    "reserve.subtitle": "Secure your table for an unforgettable evening.",
    "form.name": "Name",
    "form.phone": "Phone",
    "form.email": "Email",
    "form.date": "Date",
    "form.time": "Time",
    "form.guests": "Guests",
    "form.seating": "Seating",
    "form.seating.indoor": "Indoor",
    "form.seating.outdoor": "Outdoor",
    "form.seating.vip": "VIP",
    "form.notes": "Special request",
    "form.message": "Your message",
    "form.subject": "Subject",
    "form.submitted": "We received your request. We'll be in touch shortly.",
    "contact.title": "Get in touch",
    "contact.subtitle": "For orders, reservations or any question — we're here.",
    "contact.address": "Kabul, Afghanistan",
    "contact.hours": "Every day · 11:00 AM – 11:00 PM",
    "gallery.title": "Gallery",
    "gallery.subtitle": "Moments from our space and our kitchen.",
    "menu.title": "Our menu",
    "menu.subtitle": "Authentic Afghan cuisine, delicious and memorable.",
    "menu.search": "Search dishes…",
    "menu.all": "All",
    "menu.popular": "Popular",
    "menu.new": "New",
    "menu.veg": "Vegetarian",
    "menu.spicy": "Spicy",
    "menu.min": "min",
    "menu.addCart": "Add",
    "menu.empty": "No dishes match your search.",
    "footer.rights": "All rights reserved.",
    "footer.quick": "Quick links",
    "footer.contact": "Contact",
    "footer.follow": "Follow us",
    "cat.all": "All",
    "cat.starters": "Starters",
    "cat.mains": "Mains",
    "cat.bbq": "Kebabs",
    "cat.desserts": "Desserts",
    "cat.drinks": "Drinks",
  },
};

type I18nContextValue = {
  lang: Lang;
  dir: "rtl" | "ltr";
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "shaam-lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fa");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved && (saved === "fa" || saved === "ps" || saved === "en")) {
        setLangState(saved);
      }
    } catch {}
  }, []);

  const dir = LANGS.find((l) => l.code === lang)!.dir;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const value = useMemo<I18nContextValue>(
    () => ({
      lang,
      dir,
      setLang: (l) => {
        setLangState(l);
        try {
          localStorage.setItem(STORAGE_KEY, l);
        } catch {}
      },
      t: (key) => dict[lang][key] ?? dict.en[key] ?? key,
    }),
    [lang, dir],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}