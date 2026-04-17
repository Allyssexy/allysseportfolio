import { Project, Experience, Category } from './types';
import storybookCover from "./assets/Bookcover1.jpg";
import page1 from "./assets/P1.jpg";
import page2 from "./assets/P2.jpg";
import page3 from "./assets/P3.jpg";
import page4 from "./assets/P4.jpg";
import page5 from "./assets/P5.jpg";
import page6 from "./assets/P6.jpg";
import page7 from "./assets/P7.jpg";
import page8 from "./assets/P8.jpg";
import page9 from "./assets/P9.jpg";
import page10 from "./assets/P10.jpg";
import page11 from "./assets/P11.jpg";
import page12 from "./assets/P12.jpg";
import page13 from "./assets/P13.jpg";
import page14 from "./assets/P14.jpg";
import page15 from "./assets/P15.jpg";
import Magazine1 from "./assets/Magazine 1.jpg";
import Magazine2 from "./assets/Magazine 2.jpg";
import Magazine3 from "./assets/Magazine 3.jpg";
import Magazine4 from "./assets/Magazine 4.jpg";
import Magazine5 from "./assets/Magazine 5.jpg";
import Magazine6 from "./assets/Magazine 6.jpg";
import Magazine7 from "./assets/Magazine 7.jpg";
import Magazine8 from "./assets/Magazine 8.jpg";
import Magazine9 from "./assets/Magazine 9.jpg";
import Magazine10 from "./assets/Magazine 10.jpg";
import Magazine11 from "./assets/Magazine 11.jpg";
import Magazine12 from "./assets/Magazine 12.jpg";
import Magazine13 from "./assets/Magazine 13.jpg";
import Magazine14 from "./assets/Magazine 14.jpg";
import Nature1 from "./assets/Nature1.jpg";
import Nature2 from "./assets/Nature2.jpg";
import Nature3 from "./assets/Nature3.jpg";
import Nature4 from "./assets/Nature4.jpg";
import Nature5 from "./assets/Nature5.jpg";
import OpeningTitle from "./assets/OpeningTitle.mp4";
import BauhausThumbnail from "./assets/Bauhaus.png";
import Petronaspractice from "./assets/Petronas.png";
import Petronasvideo from "./assets/Petronas.mp4";
import Mahjong1 from "./assets/Mahjong1.jpg";
import Mahjong2 from "./assets/Mahjong2.jpg";
import Mahjong3 from "./assets/Mahjong3.jpg";
import Mahjong4 from "./assets/Mahjong4.jpg";
import Mahjong5 from "./assets/Mahjong5.jpg";
import Mahjong6 from "./assets/Mahjong6.jpg";
import Mahjong7 from "./assets/Mahjong7.jpg";
import Zerowaste1 from "./assets/Zerowaste1.jpg";
import Zerowaste2 from "./assets/Zerowaste2.jpg";
import Zerowaste3 from "./assets/Zerowaste3.jpg";
import Zerowaste4 from "./assets/Zerowaste4.jpg";
import Platetoplanetlogo from "./assets/Platetoplanet.png";
import Voiceforthevoicelesslogo from "./assets/VoiceforthevoicelessLogo.png";
import Voiceforthevoiceless1 from "./assets/Voiceforthevoiceless1.jpg";
import Voiceforthevoiceless2 from "./assets/Voiceforthevoiceless2.jpg";
import Voiceforthevoiceless3 from "./assets/Voiceforthevoiceless3.jpg";
import Voiceforthevoiceless4 from "./assets/Voiceforthevoiceless4.jpg";
import Voiceforthevoiceless5 from "./assets/Voiceforthevoiceless5.jpg";
import Voiceforthevoiceless6 from "./assets/Voiceforthevoiceless6.jpg";
import Voiceforthevoiceless7 from "./assets/Voiceforthevoiceless7.jpg";
import Night1 from "./assets/Night1.jpg";
import Night2 from "./assets/Night2.jpg";
import Night3 from "./assets/Night3.jpg";
import Night4 from "./assets/Night4.jpg";
import Night5 from "./assets/Night5.jpg";
import Doveinfographic from "./assets/Dove.jpg";
import DRP from "./assets/DRP.png";
import Burger from "./assets/Burger.mp4";
import Burgerthumbnail from "./assets/Burgerthumbnail.png";


export const CATEGORIES: Category[] = ['All', 'Graphic Design', 'Photography', 'Motion Graphics', 'Web Design'];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Storybook Design- Buah Tangan',
    category: 'Graphic Design',
    description: 'A minimalist branding project for an organic skincare line.',
    tools: ['Adobe Illustrator', 'Procreate'],
    concept: 'A playful children’s storybook exploring friendship and kindness through soft, warm visuals.',
    link: 'https://www.behance.net/gallery/234776161/Buah-Tangan-Storybook' ,
    image: storybookCover,
    gallery: [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15]
  },
  {
    id: '2',
    title: 'Magazine Design',
    category: 'Graphic Design',
    tools: ['In Design', 'Adobe Illustrator','Photoshop'],
    concept: 'This magazine design explores diverse editorial layouts within a cuisine theme, using recipe content to experiment with grids, typography, and visual flow.',
    image: Magazine1,
    gallery: [Magazine2, Magazine3, Magazine4, Magazine5, Magazine6, Magazine7, Magazine8, Magazine9, Magazine10, Magazine11, Magazine12, Magazine13, Magazine14 ]
  },
  {
    id: '3',
    title: 'Nature',
    category: 'Photography',
    tools: ['Canon EOS 1500D',],
    concept: 'A nature photography project capturing birds in their natural environment, presented without heavy editing to preserve authenticity.',
    image: Nature5,
   gallery: [Nature1, Nature2, Nature3, Nature4]
  },

    {
  id: '4',
  title: 'Opening Title- Bauhaus',
  category: 'Motion Graphics',
  tools: ['Adobe Illustrator', 'CapCut'],
  concept: 'The opening title is designed in Bauhaus style, using geometric shapes and minimal composition.',
  image:BauhausThumbnail,
  gallery: [
    { type: "video", src: OpeningTitle }
  ]
},
  {
    id: '5',
    title: 'Typography Experiment',
    category: 'Motion Graphics',
    tools: ['Capcut'],
    concept: 'A practice motion graphic video inspired by a Petronas fuel launch, created to explore typography and text animation.',
    link: 'https://www.behance.net/gallery/214314073/Fuel-Your-Journey-Now' ,
    image:Petronaspractice,
  gallery: [
    { type: "video", src: Petronasvideo}
  ]
  },
  {
    id: '6',
    title: 'Mahjong Cultural Merchandise Design',
    category: 'Graphic Design',
    tools: ['Adobe Illustrator', 'Photoshop'],
    concept: 'This project aims to promote Chinese mahjong globally while preserving its cultural heritage through merchandise design.',
    image: Mahjong3,
    gallery: [Mahjong1,Mahjong2, Mahjong4,Mahjong5,Mahjong6,Mahjong7]
  },
{
    id: '7',
    title: 'Zero Waste Dining Habits- Web Design',
    category: 'Web Design',
    tools: ['Bracket'],
    concept: 'A web design project promoting zero waste dining through simple, user-friendly and informative design.',
    image: Platetoplanetlogo,
    gallery: [Zerowaste1, Zerowaste2, Zerowaste3, Zerowaste4]
  },
{
    id: '8',
    title: 'Voice For The Voiceless- Web Design',
    category: 'Web Design',
    tools: ['Adobe Dreamweaver'],
    concept: 'A website design raising awareness about animal cruelty and encouraging action through education and a reporting feature.',
    image: Voiceforthevoicelesslogo,
    gallery: [Voiceforthevoiceless1, Voiceforthevoiceless2, Voiceforthevoiceless3, Voiceforthevoiceless4, Voiceforthevoiceless5, Voiceforthevoiceless6, Voiceforthevoiceless7]
  },

{
    id: '9',
    title: 'Night & Color',
    category: 'Photography',
    tools: ['Canon EOS 1500D'],
    concept: 'A night photography project exploring color and light in low-light environments.',
    image: Night1,
    gallery: [Night2, Night3, Night4, Night5]
  },

{
    id: '10',
    title: 'Dove Shampoo Research Infographic',
    category: 'Graphic Design',
    tools: ['Adobe Illustrator'],
    concept: 'This infographic was developed based on research I conducted, translating data into a clear visual format.',
    image:Doveinfographic 
  },

{
    id: '11',
    title: 'Design Reflective Practice Infographic',
    category: 'Graphic Design',
    tools: ['Adobe Illustrator'],
    concept: 'An infographic designed with a pixelated aesthetic to visualize my FYP journey and study process.',
    image:DRP 
  },

{
    id: '12',
    title: 'Motion Graphic Design',
    category: 'Motion Graphics',
    tools: ['Adobe After Effects'],
    concept: 'A motion graphic study inspired by the Filet-O-Fish, using playful motion and typography to create a 15-second concept.',
    link:'https://www.behance.net/gallery/244834585/Catch-The-Burger' ,
   image:Burgerthumbnail,
  gallery: [
    { type: "video", src: Burger }
  ]
  },

];

export const EXPERIENCES: Experience[] = [
  {
    period: '2023 - Present',
    title: 'Bachelor Honours of Graphic Design & Multimedia',
    company: 'UTAR, Sungai Long',
    description: 'Continuously developing my skills in graphic design, motion graphics, and web design through academic projects and hands-on practice. Exploring typography, layout, and visual storytelling while improving problem-solving and design thinking throughout my studies'
  }
];