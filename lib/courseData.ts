// lib/contentData.ts

/* =========================
   TÍPUSOK
========================= */

export type Brand = {
  name: string;
  tagline: string;
};

export type Teacher = {
  name: string;
  title: string;
  shortBio: string;
  highlights: string[];
};

export type Hero = {
  headline: string;
  subheadline: string;
  description: string;
  badges: string[];
  primaryCta: {
    label: string;
    target: "booking";
  };
  secondaryCta: {
    label: string;
    target: "packages";
  };
};

export type Package = {
  id: "starter" | "advanced" | "intensive";
  name: string;
  subtitle: string;
  recommended: boolean;
  lessonsPerWeek: number;
  lessonLengthMinutes: number;
  features: string[];
  cta: {
    label: string;
    target: "booking";
  };
};

export type ContentData = {
  brand: Brand;
  teacher: Teacher;
  hero: Hero;
  packages: Package[];
};

/* =========================
   ADATOK
========================= */

export const contentData: ContentData = {
  brand: {
    name: "LevelUp English",
    tagline: "Beszélj magabiztosan"
  },

  teacher: {
    name: "Green Emma",
    title: "Online angoltanár",
    shortBio:
      "Beszédközpontú, gyakorlatias angolórák brit kiejtéssel. Abban segítek, hogy merj megszólalni, és használd is, amit már tudsz.",
    highlights: [
      "Beszédközpontú órák",
      "Brit kiejtés és hallásértés",
      "Személyre szabott tanulási terv"
    ]
  },

  hero: {
    headline: "Szintet lépnél angolból?",
    subheadline: "Kezdj el magabiztosan beszélni.",
    description:
      "Gyakorlatias, beszédközpontú online órák Green Emma nyelvtanárral. Valós helyzetek, tiszta visszajelzés, stressz nélkül.",
    badges: [
      "4,9/5 értékelés",
      "120+ tanuló",
      "Beszéd + hallásértés fókusz"
    ],
    primaryCta: {
      label: "Időpontot kérek (15 perc ingyen)",
      target: "booking"
    },
    secondaryCta: {
      label: "Megnézem a csomagokat",
      target: "packages"
    }
  },

  packages: [
    {
      id: "starter",
      name: "START",
      subtitle: "Stabil alapok",
      recommended: false,
      lessonsPerWeek: 1,
      lessonLengthMinutes: 60,
      features: [
        "Heti 1× 60 perc online óra",
        "Beszédindító témák",
        "Alap kiejtési javítás",
        "Rövid, irányított házi feladat"
      ],
      cta: {
        label: "Ez érdekel",
        target: "booking"
      }
    },
    {
      id: "advanced",
      name: "HALADÓ",
      subtitle: "Gyors fejlődés",
      recommended: true,
      lessonsPerWeek: 2,
      lessonLengthMinutes: 60,
      features: [
        "Heti 2× 60 perc online óra",
        "Több élő beszéd és szerepjáték",
        "Tematikus szókincsépítés",
        "Rendszeres visszajelzés"
      ],
      cta: {
        label: "Ez érdekel",
        target: "booking"
      }
    },
    {
      id: "intensive",
      name: "INTENZÍV",
      subtitle: "Komoly célokra",
      recommended: false,
      lessonsPerWeek: 3,
      lessonLengthMinutes: 60,
      features: [
        "Heti 3× 60 perc online óra",
        "Interjú- és prezentációs felkészítés",
        "Üzleti vagy általános angol",
        "Extra támogatás két óra között"
      ],
      cta: {
        label: "Ez érdekel",
        target: "booking"
      }
    }
  ]
};
