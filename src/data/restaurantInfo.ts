export interface RestaurantInfo {
  name: string;
  nameEn: string;
  tagline: string;
  subTagline: string;
  whatsapp: string;
  whatsappFormatted: string;
  phone1: string;
  phone2: string;
  logo: string;
  address: string;
  addressDetails: string;
  mapsUrl: string;
  workingHours: string;
}

const BASE = import.meta.env.BASE_URL || '/';

export const RESTAURANT_INFO: RestaurantInfo = {
  name: "بروستد مشوار بترولي",
  nameEn: "Meshwar Petroli Broasted",
  tagline: "اتصل قبل أن تصل",
  subTagline: "أشهى بروستد مقرمش، مشويات طازجة على الفحم، وشاورما وفطائر وعصائر طبيعية على أصولها في حي الأنوار بالدمام",
  whatsapp: "966567360034",
  whatsappFormatted: "056 736 0034",
  phone1: "0567360034",
  phone2: "0567360034",
  logo: `${BASE}assets/images/logo.webp`,
  address: "حي الأنوار - طريق الدمام الرياض السريع - الدمام",
  addressDetails: "الدمام، حي الأنوار، طريق الدمام - الرياض السريع",
  mapsUrl: "https://maps.app.goo.gl/bxLtT4624H5xkdq76",
  workingHours: "يومياً من الساعة 10 صباحاً إلى الساعة 5 صباحاً",
};
