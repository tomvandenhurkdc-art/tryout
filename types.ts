
export type Language = 'ES' | 'EN' | 'VA';

export interface ContentStrings {
  nav: {
    team: string;
    schedule: string;
    pricing: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    statusOpen: string;
    statusClosed: string;
  };
  team: {
    title: string;
    subtitle: string;
    jesus: string;
    paco: string;
    description: string;
  };
  schedule: {
    title: string;
    subtitle: string;
    days: {
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday: string;
    };
    classNames: {
      boxing: string;
      hiit: string;
      spinning: string;
      yoga: string;
      zumba: string;
      pilates: string;
    }
  };
  pricing: {
    title: string;
    subtitle: string;
    options: {
      monthly: {
        name: string;
        price: string;
        features: string[];
      };
      daily: {
        name: string;
        price: string;
        features: string[];
      };
      voucher: {
        name: string;
        price: string;
        features: string[];
      };
    };
    cta: string;
  };
  contact: {
    title: string;
    address: string;
    phone: string;
    hours: string;
    followUs: string;
  };
}
