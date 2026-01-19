
import { ContentStrings, Language } from './types';

export const TRANSLATIONS: Record<Language, ContentStrings> = {
  ES: {
    nav: {
      team: 'El Alma',
      schedule: 'Clases Grupales',
      pricing: 'Precios',
      contact: 'Contacto',
    },
    hero: {
      title: 'ENTRENA SIN LÍMITES',
      subtitle: 'Premium Fitness en Villajoyosa. Maquinaria de vanguardia, energía hardcore y corazón humano.',
      cta1: 'EMPIEZA HOY',
      cta2: 'VER CLASES GRUPALES',
      statusOpen: 'ABIERTO AHORA',
      statusClosed: 'CERRADO ACTUALMENTE',
    },
    team: {
      title: 'EL ALMA DE IMFITNITY',
      subtitle: 'Conoce a Jesús y Paco, co-fundadores y trainers que llevarán tu entrenamiento al siguiente nivel.',
      jesus: 'Jesús - Co-fundador & Trainer',
      paco: 'Paco - Co-fundador & Trainer',
      description: 'Más que instructores, somos tu apoyo constante. En IMFITNITY, cada miembro es parte de nuestra familia.',
    },
    schedule: {
      title: 'CLASES GRUPALES',
      subtitle: 'Energia colectiva para resultados individuales.',
      days: {
        monday: 'Lunes',
        tuesday: 'Martes',
        wednesday: 'Miércoles',
        thursday: 'Jueves',
        friday: 'Viernes',
        saturday: 'Sábado',
      },
      classNames: {
        boxing: 'Boxeo',
        hiit: 'HIIT',
        spinning: 'Spinning',
        yoga: 'Yoga',
        zumba: 'Zumba',
        pilates: 'Pilates',
      }
    },
    pricing: {
      title: 'TARIFAS PREMIUM',
      subtitle: 'Flexibilidad total para locales y visitantes. Solo pago presencial.',
      options: {
        monthly: {
          name: 'Mensualidad Completa',
          price: '35€',
          features: ['Acceso Ilimitado', 'Clases Grupales Incluidas', 'Asesoramiento Inicial', 'Sin Matrícula'],
        },
        daily: {
          name: 'Entrada Diaria',
          price: '8€',
          features: ['Ideal para Turistas', 'Acceso a Sala de Musculación', 'Acceso a Zona Cardio', 'Vestuarios e Instalaciones'],
        },
        voucher: {
          name: 'Bono 10 Sesiones',
          price: '45€',
          features: ['Válido 3 Meses', 'Ideal para Expatriados', 'Sin Compromisos', 'Acceso a todo el Gimnasio'],
        },
      },
      cta: 'CONSULTAR EN RECEPCIÓN',
    },
    contact: {
      title: 'VEN A VERNOS',
      address: 'C. Constitució, 18, bajo, 03570 Villajoyosa',
      phone: '+34 664 01 35 21',
      hours: 'Horario: L-V 8:00-22:00 | S 9:00-13:30',
      followUs: 'SÍGUENOS',
    },
  },
  EN: {
    nav: {
      team: 'The Soul',
      schedule: 'Group Classes',
      pricing: 'Pricing',
      contact: 'Contact',
    },
    hero: {
      title: 'TRAIN WITHOUT LIMITS',
      subtitle: 'Premium Fitness in Villajoyosa. Top-tier equipment, hardcore energy, and a human heart.',
      cta1: 'START TODAY',
      cta2: 'SEE GROUP CLASSES',
      statusOpen: 'OPEN NOW',
      statusClosed: 'CLOSED NOW',
    },
    team: {
      title: 'THE SOUL OF IMFITNITY',
      subtitle: 'Meet Jesús and Paco, co-founders and trainers taking your training to the next level.',
      jesus: 'Jesús - Co-founder & Trainer',
      paco: 'Paco - Co-founder & Trainer',
      description: 'More than instructors, we are your constant support. At IMFITNITY, every member is family.',
    },
    schedule: {
      title: 'GROUP CLASSES',
      subtitle: 'Collective energy for individual results.',
      days: {
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
        saturday: 'Saturday',
      },
      classNames: {
        boxing: 'Boxing',
        hiit: 'HIIT',
        spinning: 'Spinning',
        yoga: 'Yoga',
        zumba: 'Zumba',
        pilates: 'Pilates',
      }
    },
    pricing: {
      title: 'PREMIUM RATES',
      subtitle: 'Total flexibility for locals and visitors. In-person payment only.',
      options: {
        monthly: {
          name: 'Full Membership',
          price: '35€',
          features: ['Unlimited Access', 'Group Classes Included', 'Initial Assessment', 'No Enrollment Fee'],
        },
        daily: {
          name: 'Day Pass',
          price: '8€',
          features: ['Perfect for Tourists', 'Full Weight Room Access', 'Cardio Zone Access', 'Clean Showers & Lockers'],
        },
        voucher: {
          name: '10-Session Voucher',
          price: '45€',
          features: ['Valid for 3 Months', 'Ideal for Expats', 'No Commitment', 'Full Gym Access'],
        },
      },
      cta: 'ENQUIRE AT RECEPTION',
    },
    contact: {
      title: 'VISIT US',
      address: 'C. Constitució, 18, Villajoyosa',
      phone: '+34 664 01 35 21',
      hours: 'Hours: M-F 8:00-22:00 | Sat 9:00-13:30',
      followUs: 'FOLLOW US',
    },
  },
  VA: {
    nav: {
      team: 'L\'Ànima',
      schedule: 'Classes Grupals',
      pricing: 'Preus',
      contact: 'Contacte',
    },
    hero: {
      title: 'ENTRENA SENSE LÍMITS',
      subtitle: 'Premium Fitness a la Vila Joiosa. Maquinària d\'avantguarda, energia hardcore i cor humà.',
      cta1: 'COMENÇA HUI',
      cta2: 'VEURE CLASSES GRUPALS',
      statusOpen: 'OBERT ARA',
      statusClosed: 'TANCAT ACTUALMENT',
    },
    team: {
      title: 'L\'ÀNIMA D\'IMFITNITY',
      subtitle: 'Coneix a Jesús i Paco, co-fundadors i trainers que portaran el teu entrenament al següent nivell.',
      jesus: 'Jesús - Co-fundador i Trainer',
      paco: 'Paco - Co-fundador i Trainer',
      description: 'Més que instructors, som el teu suport constant. A IMFITNITY, cada membre és part de la nostra família.',
    },
    schedule: {
      title: 'CLASSES GRUPALS',
      subtitle: 'Energia col·lectiva per a resultats individuals.',
      days: {
        monday: 'Dilluns',
        tuesday: 'Dimarts',
        wednesday: 'Dimecres',
        thursday: 'Dijous',
        friday: 'Divendres',
        saturday: 'Dissabte',
      },
      classNames: {
        boxing: 'Boxa',
        hiit: 'HIIT',
        spinning: 'Spinning',
        yoga: 'Ioga',
        zumba: 'Zumba',
        pilates: 'Pilates',
      }
    },
    pricing: {
      title: 'TARIFES PREMIUM',
      subtitle: 'Flexibilitat total per a locals i visitants. Només pagament presencial.',
      options: {
        monthly: {
          name: 'Mensualitat Completa',
          price: '35€',
          features: ['Accés Il·limitat', 'Classes Grupals Incloses', 'Assessorament Inicial', 'Sense Matrícula'],
        },
        daily: {
          name: 'Entrada Diària',
          price: '8€',
          features: ['Ideal per a Turistes', 'Accés a Sala de Musculació', 'Accés a Zona Cardio', 'Vestidors i Instal·lacions'],
        },
        voucher: {
          name: 'Bo 10 Sessions',
          price: '45€',
          features: ['Vàlid 3 Mesos', 'Ideal per a Expatriats', 'Sense Compromisos', 'Accés a tot el Gimnàs'],
        },
      },
      cta: 'CONSULTA A RECEPCIÓ',
    },
    contact: {
      title: 'VINA A VEURE\'NS',
      address: 'C. Constitució, 18, la Vila Joiosa',
      phone: '+34 664 01 35 21',
      hours: 'Horari: Dll-Dv 8:00-22:00 | Ds 9:00-13:30',
      followUs: 'SEGUEIX-NOS',
    },
  },
};
