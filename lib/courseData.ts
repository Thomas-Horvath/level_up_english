// lib/courseData.ts
export type Lesson = {
  id: string;
  title: string;
  duration: string;
  description: string;
  exampleSentences: string[];
};

export type Module = {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
};

export type Course = {
  id: string;
  title: string;
  slogan: string;
  level: string;
  price: number;
  currency: string;
  shortDescription: string;
  whatYouLearn: string[];
  modules: Module[];
};

export const course: Course = {
  id: "levelup-english-b1b2",
  title: "LevelUp English – B1 → B2 angol tanfolyam",
  slogan: "Speak with confidence. Think in English.",
  level: "B1 → B2",
  price: 25900, // Ft
  currency: "HUF",
  shortDescription:
    "Beszédcentrikus online kurzus, amely segít megérteni és természetesen használni az angolt.",
  whatYouLearn: [
    "Magabiztos bemutatkozás és hétköznapi beszélgetések",
    "Természetes brit és amerikai kifejezések",
    "Gyakori nyelvtani szerkezetek valós kontextusban",
    "A hallott szöveg értése autentikus példákon keresztül"
  ],
  modules: [
    {
      id: "mod-1",
      title: "Bemutatkozás és Small Talk",
      description:
        "Alap kommunikációs helyzetek, ahol azonnal használhatod az angolt.",
      lessons: [
        {
          id: "l-1",
          title: "Natural Self-Introductions",
          duration: "18 perc",
          description: "Tipikus kifejezések és mondatok — angolul.",
          exampleSentences: [
            "Hi, I'm Thomas. Nice to meet you!",
            "I've been learning English for about two years.",
            "I work as a software developer in Hungary."
          ]
        }
      ]
    }
  ]
};

