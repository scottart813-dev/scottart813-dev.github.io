import avatarImg from './assets/images/designer_avatar_pic_1783758912037.jpg';
import avatarWavingImg from './assets/images/regenerated_image_1783777599719.png';
import brandingImg from './assets/images/branding_mockup_design_1783758926724.jpg';
import typographyImg from './assets/images/swiss_typography_poster_1783758937853.jpg';
import conceptImg from './assets/images/digital_concept_art_1783758949586.jpg';
import uiuxImg from './assets/images/ui_ux_portfolio_1783758960447.jpg';

import { Project, ServiceItem } from './types';

export const AVATAR_IMAGE = avatarImg;
export const AVATAR_WAVING_IMAGE = avatarWavingImg;

export const PROJECTS: Project[] = [
  {
    id: 'proj-branding',
    title: 'Aethera Stationery & Identity',
    category: 'branding',
    categoryLabel: 'Brand Identity',
    description: 'A premium visual identity system, custom high-contrast logomarks, and physical corporate stationery designed for a boutique perfume brand.',
    longDescription: 'The Aethera brand identity was developed to embody refined luxury and tactile authenticity. Drawing inspiration from classical alchemical forms, we crafted a sleek geometric logomark paired with high-contrast, modern serif typography. The color palette centers around deep carbon black, delicate natural beige, and metallic debossing. Every detail, from the textured cotton fiber paper stock to the blind letterpress elements, communicates premium craftsmanship.',
    client: 'Aethera Fragrances Ltd.',
    year: '2025',
    image: brandingImg,
    tags: ['Brand Strategy', 'Graphic Design', 'Corporate Identity', 'Packaging Design'],
    colorPalette: ['#0A0A0A', '#EFECE6', '#C4B59F', '#7F725F'],
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'InDesign', 'Dimension'],
    role: 'Lead Visual Designer'
  },
  {
    id: 'proj-typography',
    title: 'Neue Helvetica: Swiss Modernism',
    category: 'editorial',
    categoryLabel: 'Poster & Editorial',
    description: 'An avant-garde typographical and layout exploration applying Swiss design principles, grid alignment, and asymmetrical primary geometries.',
    longDescription: 'This poster series was designed for the International Typographic Biennale. It explores the tense balance between structured structural grid lines and freeform organic geometries. By combining clean, bold letterforms with primary red, cobalt, and cadmium-yellow elements, the compositions focus heavily on micro-typography, optical tracking adjustments, and active negative white spaces. The layouts represent a raw, contemporary evolution of classic mid-century Swiss modernism.',
    client: 'Zurich Design Academy',
    year: '2026',
    image: typographyImg,
    tags: ['Poster Art', 'Swiss Grid System', 'Typography Design', 'Visual Hierarchy'],
    colorPalette: ['#FFFFFF', '#D92525', '#1D4ED8', '#F59E0B'],
    tools: ['Adobe Illustrator', 'InDesign', 'FontLab'],
    role: 'Art Director & Designer'
  },
  {
    id: 'proj-concept',
    title: 'Neo-Techo: Neon Cyber Cityscape',
    category: 'concept',
    categoryLabel: 'Digital Art & Concept',
    description: 'Immersive, cinematic concept art painting depicting an atmospheric cyberpunk street drenched in neon reflections, synthetic rain, and holographic advertising.',
    longDescription: 'Created as key art for a high-budget futuristic sci-fi game, this environment illustration captures the high-tech, low-life core of a nocturnal metropolis. The painting technique merges rich, texturized digital brushwork with photo-bashing and detailed lighting overlays. Particular emphasis was placed on creating realistic atmospheric haze, glass light refractions, and wet road reflections under high-intensity turquoise and magenta holographic street emissions.',
    client: 'Helix Interactive Studios',
    year: '2025',
    image: conceptImg,
    tags: ['Concept Art', 'Digital Painting', 'Environment Design', 'Lighting Illustration'],
    colorPalette: ['#030712', '#06B6D4', '#EC4899', '#3B0764'],
    tools: ['Adobe Photoshop', 'Corel Painter', 'Blender', 'Wacom Cintiq'],
    role: 'Principal Concept Artist'
  },
  {
    id: 'proj-uiux',
    title: 'Orbital Analytics Platform Workspace',
    category: 'uiux',
    categoryLabel: 'UI/UX & Interactive',
    description: 'A clean, high-fidelity dark-themed analytics and data dashboard, built with futuristic data charting elements and crisp, modular UI grids.',
    longDescription: 'Orbital is a premium visual workspace designed for high-frequency trading and aerospace telemetry monitoring. The project involved complete user research, interactive wireframing, and creating a robust, reusable component design system. The final interface utilizes highly optimized layouts that prevent eye strain during long nocturnal sessions, custom SVGs for complex charts, elegant micro-interactions, and visual hierarchy optimized for maximum information density.',
    client: 'Orbital Telemetry Systems',
    year: '2026',
    image: uiuxImg,
    tags: ['Product Design', 'UI/UX Architecture', 'Interactive Design', 'Data Visualization'],
    colorPalette: ['#09090B', '#1E1B4B', '#22C55E', '#38BDF8'],
    tools: ['Figma', 'Adobe Illustrator', 'After Effects', 'Tailwind CSS'],
    role: 'Lead Product Designer'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-branding',
    name: 'Brand Identity Design',
    description: 'Complete visual systems, custom typography, letterpress business stationery, brand standards books, and vector logos.',
    basePrice: 1800,
    estimatedDays: 14
  },
  {
    id: 'srv-editorial',
    name: 'Poster & Editorial Layout',
    description: 'High-contrast promotional poster series, typographic layouts, premium magazine grid structures, and artwork prints.',
    basePrice: 950,
    estimatedDays: 7
  },
  {
    id: 'srv-concept',
    name: 'Digital Concept Art & Key Art',
    description: 'Immersive sci-fi and fantasy environment concept paintings, visual key art, digital assets, and high-fidelity product illustrations.',
    basePrice: 1500,
    estimatedDays: 10
  },
  {
    id: 'srv-uiux',
    name: 'UI/UX Dashboard & Product Design',
    description: 'Sleek dark-mode dashboards, interactive wireframes, custom web landing page interfaces, and complete mobile design systems.',
    basePrice: 2400,
    estimatedDays: 18
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery & Moodboards',
    description: 'We initiate the collaboration with a deep briefing session, understanding your product philosophy, design objectives, and target audience, translating them into cohesive visual moodboards.'
  },
  {
    step: '02',
    title: 'Geometric Exploration',
    description: 'We construct wireframes, typographic studies, and structural grid layouts. We iterate broadly with sketches, digital drafts, and conceptual drafts to find the strongest artistic foundation.'
  },
  {
    step: '03',
    title: 'Refinement & Rendering',
    description: 'The chosen design path is meticulously rendered, fine-tuning details like optical letter-spacing, digital lighting reflections, responsive color harmony, and precise geometry.'
  },
  {
    step: '04',
    title: 'Delivery & Spec Book',
    description: 'We bundle all ready-to-use vector assets, high-res layouts, color swatches, guidelines, and typography specimens, fully prepped for developers, publishers, or print houses.'
  }
];
