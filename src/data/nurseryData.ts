import { ChilliVariety, FarmerItem, ProcessStep, GalleryItem } from '../types';

// Real Images from nursery and field assets
import ownerPortraitImg from '../assets/images/nursery_owner_real_1790060497674.jpg';
import ownerInspectingImg from '../assets/images/owner_inspecting_1790059292142.jpg';
import nurseryTraysImg from '../assets/images/nursery_trays_lush_1790059306683.jpg';
import heroBgImg from '../assets/images/hero_chilli_nursery_1790059277971.jpg';
import nurseryStructureImg from '../assets/images/nursery_structure_1790059465573.jpg';
import sakataManagerImg from '../assets/images/sakata_field_visit_1790060515108.jpg';

import sakata2282Img from '../assets/images/chilli_sakata_2282_1790059322768.jpg';
import sakataHY1191Img from '../assets/images/chilli_sakata_hy1191_1790059343555.jpg';
import sakata2433Img from '../assets/images/chilli_sakata_2433_1790059365804.jpg';
import sakata0748Img from '../assets/images/chilli_sakata_0748_1790059393341.jpg';

import farmer1Img from '../assets/images/farmer_ap_field_1_1790059418186.jpg';
import farmer2Img from '../assets/images/farmer_tray_hands_1790059482207.jpg';
import farmer3Img from '../assets/images/farmer_harvest_red_1790059497500.jpg';
import farmer4Img from '../assets/images/farmer_senior_pride_1790059515115.jpg';
import farmer5Img from '../assets/images/farmer_inspecting_field_1790059533816.jpg';
import farmer6Img from '../assets/images/farmer_young_grower_1790059548364.jpg';
import farmer7Img from '../assets/images/farmer_sapling_close_1790059562769.jpg';
import farmer8Img from '../assets/images/farmer_field_smile_1790059575929.jpg';
import farmer9Img from '../assets/images/farmer_harvest_crate_1790059590881.jpg';
import farmer10Img from '../assets/images/farmer_telangana_pride_1790059608413.jpg';

export const BUSINESS_INFO = {
  name: 'RYTHU MITHRA NURSERY',
  type: 'Chilli Seedling Nursery / Agricultural Nursery',
  owner: 'Khakmuri Venkata Reddy',
  location: 'Chandrapalem Mandal, Andhra Pradesh, India',
  phone: '9949247738',
  phoneFormatted: '+91 99492 47738',
  phoneTel: 'tel:9949247738',
  whatsappUrl: 'https://wa.me/919949247738',
  experience: '10+ years in the nursery and chilli agriculture field',
  supplyArea: 'Andhra Pradesh & Telangana',
  mainProduct: 'Quality chilli seedlings / chilli naru',
  heroHeading: 'Quality Chilli Seedlings for Better Farming',
  tagline: 'Healthy Plants • High Production • Happy Farmers',
  additionalHeroText:
    'Rythu Mithra Nursery supplies quality chilli seedlings to farmers across Andhra Pradesh and Telangana.',
  aboutText:
    'Rythu Mithra Nursery is a chilli seedling nursery based in Chandrapalem Mandal, Andhra Pradesh. With over 10 years of experience in the nursery and chilli agriculture field, the nursery focuses on producing quality chilli seedlings and supporting farmers with healthy planting material.',
  fieldSectionText:
    'Our nursery work is connected to real farming conditions, with chilli seedlings grown for farmers across Andhra Pradesh and Telangana.',
  expertSpeaker: {
    name: 'Meera Hussain Paladugu',
    nameTelugu: 'మీరా హుస్సేన్ పాలడుగు',
    designation: 'Senior Area Manager – Sakata Seeds',
    fieldLocation: 'Rachamallapadu Village, Veldurthi Mandal, Palnadu District, AP',
    recordedDate: '09-03-2026',
    varietyFeatured: 'Sakata Raya 2282 (రాయ 2282)',
    introText:
      'నా పేరు మీరా హుస్సేన్. సకాటా కంపెనీ లో సీనియర్ ఏరియా మేనేజర్ గా పనిచేస్తున్నాను. ఈరోజు మనం వెల్దుర్తి మండలం, రచ్చమల్లపాడు విలేజ్ లో సకాటా రాయ 2282 తోట పరిశీలనకు వచ్చాము...',
    introTextEnglish:
      'My name is Meera Hussain Paladugu, Senior Area Manager at Sakata Seeds. Today we are in Rachamallapadu village, Veldurthi mandal, inspecting this thriving Sakata Raya 2282 chilli crop...',
    keyFindings: [
      'Harvested 8 quintals already, projected 40 to 45 quintals per acre total yield',
      '3-Step continuous cluster fruiting (3 స్టెప్పుల కాపు)',
      'Uniform fruit size and thickness from plant bottom to top branches',
      '95% disease tolerance, withstands adverse weather & heavy rain',
      'Supreme red color and quality for AC cold storage with 100% top market rates',
    ],
  },
};

export const IMAGES = {
  heroBg: heroBgImg,
  ownerPortrait: ownerPortraitImg,
  ownerInspecting: ownerInspectingImg,
  nurseryTrays: nurseryTraysImg,
  nurseryStructure: nurseryStructureImg,
  sakataManager: sakataManagerImg,
};

export const CHILLI_VARIETIES: ChilliVariety[] = [
  {
    id: 'sakata-2282',
    name: 'Sakata 2282',
    category: 'Chilli Variety',
    image: sakata2282Img,
    shortDescription:
      'A widely preferred Sakata variety supplied by Rythu Mithra Nursery, raised in seedling pro-trays under controlled nursery conditions.',
    highlights: ['Sakata Original Seed Source', 'Healthy Pro-tray Raised Seedlings', 'Strong Vigorous Root Establishment'],
  },
  {
    id: 'sakata-hy-1191',
    name: 'Sakata HY-1191',
    category: 'Chilli Variety',
    image: sakataHY1191Img,
    shortDescription:
      'High-demand Sakata HY-1191 variety seedlings nurtured with rigorous care for farmers in Andhra Pradesh and Telangana.',
    highlights: ['Authentic Sakata Variety', 'Uniform Seedling Growth', 'Field-Ready Transplanting Hardening'],
  },
  {
    id: 'sakata-2433',
    name: 'Sakata 2433',
    category: 'Chilli Variety',
    image: sakata2433Img,
    shortDescription:
      'Quality Sakata 2433 chilli seedlings grown with balanced nutrition and organic protection in our Chandrapalem nursery facility.',
    highlights: ['Sakata Standard Variety', 'Disease-Screened Seedlings', 'Reliable Field Germination & Canopy'],
  },
  {
    id: 'sakata-0748',
    name: 'Sakata 0748',
    category: 'Chilli Variety',
    image: sakata0748Img,
    shortDescription:
      'Popular Sakata 0748 chilli seedlings cultivated in precision nursery media to ensure early field adaptability and vigorous plant establishment.',
    highlights: ['Special Sakata Variety', 'Dense Root Plug Growth', 'Cultivated for AP & Telangana Soils'],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'SEED',
    subtitle: 'Quality Seed Selection',
    description:
      'Sourcing authentic Sakata seeds, followed by seed grading and placement in sterilized pro-tray cavities with premium cocopeat media.',
    image: ownerInspectingImg,
    iconName: 'Sprout',
  },
  {
    number: '02',
    title: 'GROWING',
    subtitle: 'Controlled Nursery Environment',
    description:
      'Protected cultivation inside green shade-net polyhouse with micro-sprinkler irrigation and controlled humidity for strong early growth.',
    image: nurseryTraysImg,
    iconName: 'SunMedium',
  },
  {
    number: '03',
    title: 'QUALITY CHECK',
    subtitle: 'Root & Stem Inspection',
    description:
      'Careful individual tray inspections for healthy white root development, uniform stem thickness, and complete pest-free vigor.',
    image: sakataManagerImg,
    iconName: 'ShieldCheck',
  },
  {
    number: '04',
    title: 'READY SEEDLINGS',
    subtitle: 'Hardened for Field Transplanting',
    description:
      'Pre-dispatch hardening process preparing robust seedlings to withstand natural field conditions across Andhra Pradesh & Telangana.',
    image: nurseryStructureImg,
    iconName: 'Truck',
  },
];

// Exactly 10 real farmer photographs
export const FARMERS_LIST: FarmerItem[] = [
  {
    id: 'farmer-1',
    image: farmer1Img,
    alt: 'Farmer in Andhra Pradesh chilli field with healthy plants',
    locationTag: 'Andhra Pradesh',
    cropStage: 'Chilli Crop Inspection',
  },
  {
    id: 'farmer-2',
    image: farmer2Img,
    alt: 'Farmer receiving seedling pro-tray ready for transplantation',
    locationTag: 'Telangana',
    cropStage: 'Healthy Seedling Trays',
  },
  {
    id: 'farmer-3',
    image: farmer3Img,
    alt: 'Farmer with fresh harvested bright red chillies',
    locationTag: 'Andhra Pradesh',
    cropStage: 'Red Chilli Harvest',
  },
  {
    id: 'farmer-4',
    image: farmer4Img,
    alt: 'Senior chilli farmer in field with towel on shoulder',
    locationTag: 'Andhra Pradesh',
    cropStage: 'Field Inspection',
  },
  {
    id: 'farmer-5',
    image: farmer5Img,
    alt: 'Farmer examining healthy green chillies on bushy plants',
    locationTag: 'Andhra Pradesh',
    cropStage: 'Green Chilli Canopy',
  },
  {
    id: 'farmer-6',
    image: farmer6Img,
    alt: 'Young farmer standing beside healthy chilli crop with drip irrigation',
    locationTag: 'Telangana',
    cropStage: 'Crop Development',
  },
  {
    id: 'farmer-7',
    image: farmer7Img,
    alt: 'Farmer showing dense white root ball of chilli seedling plug',
    locationTag: 'Andhra Pradesh',
    cropStage: 'Seedling Root Quality',
  },
  {
    id: 'farmer-8',
    image: farmer8Img,
    alt: 'Chilli farmer standing proudly in field under open sky',
    locationTag: 'Andhra Pradesh',
    cropStage: 'Field Establishment',
  },
  {
    id: 'farmer-9',
    image: farmer9Img,
    alt: 'Farmer seated with harvested green and red chillies in crates',
    locationTag: 'Telangana',
    cropStage: 'Crop Produce',
  },
  {
    id: 'farmer-10',
    image: farmer10Img,
    alt: 'Farmer offering respectful greeting in thriving chilli plantation',
    locationTag: 'Andhra Pradesh',
    cropStage: 'Thriving Plantation',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Seedling Pro-Trays in Green Polyhouse',
    category: 'NURSERY',
    image: nurseryTraysImg,
    alt: 'Chilli seedling trays under nursery shade net',
    caption: 'Thriving pro-trays maintained with micro-sprinkler irrigation.',
  },
  {
    id: 'gal-2',
    title: 'Owner Khakmuri Venkata Reddy with Trays',
    category: 'NURSERY',
    image: ownerPortraitImg,
    alt: 'Nursery owner Khakmuri Venkata Reddy',
    caption: '10+ years of dedication to chilli seedling quality.',
  },
  {
    id: 'gal-3',
    title: 'Nursery Polyhouse Structure & Layout',
    category: 'NURSERY',
    image: nurseryStructureImg,
    alt: 'Chilli nursery structure in Chandrapalem Mandal',
    caption: 'Spacious shade-net infrastructure designed for optimal airflow.',
  },
  {
    id: 'gal-4',
    title: 'Sakata 2282 Vigorous Fruit Bearing',
    category: 'CHILLI VARIETIES',
    image: sakata2282Img,
    alt: 'Sakata 2282 chilli variety plants',
    caption: 'Sakata 2282 heavy bearing green chillies.',
  },
  {
    id: 'gal-5',
    title: 'Sakata HY-1191 Quality Crop',
    category: 'CHILLI VARIETIES',
    image: sakataHY1191Img,
    alt: 'Sakata HY-1191 chilli plants in field',
    caption: 'Sakata HY-1191 uniform slender chillies.',
  },
  {
    id: 'gal-6',
    title: 'Sakata 2433 High Pungency Chillies',
    category: 'CHILLI VARIETIES',
    image: sakata2433Img,
    alt: 'Sakata 2433 chilli variety',
    caption: 'Sakata 2433 dense cluster bearing.',
  },
  {
    id: 'gal-7',
    title: 'Sakata 0748 High Field Adaptability',
    category: 'CHILLI VARIETIES',
    image: sakata0748Img,
    alt: 'Sakata 0748 chilli variety',
    caption: 'Sakata 0748 plants showing balanced canopy growth.',
  },
  {
    id: 'gal-8',
    title: 'Field Visit by Meera Hussain – Sakata',
    category: 'FIELDS',
    image: sakataManagerImg,
    alt: 'Meera Hussain Senior Area Manager Sakata field visit',
    caption: 'Expert inspection of chilli fields in Andhra Pradesh.',
  },
  {
    id: 'gal-9',
    title: 'Lush Green Chilli Field Rows',
    category: 'FIELDS',
    image: heroBgImg,
    alt: 'Chilli crops thriving in farmer field',
    caption: 'Transplanted seedlings flourishing under open field conditions.',
  },
  {
    id: 'gal-10',
    title: 'Farmer Inspecting Chilli Clusters',
    category: 'FIELDS',
    image: farmer5Img,
    alt: 'Farmer in field checking chilli fruit load',
    caption: 'Healthy crop canopy grown from quality seedlings.',
  },
  {
    id: 'gal-11',
    title: 'Farmer Holding Fresh Red Chilli Harvest',
    category: 'FARMERS',
    image: farmer3Img,
    alt: 'Farmer with harvested red chillies',
    caption: 'Genuine pride in a successful chilli harvest.',
  },
  {
    id: 'gal-12',
    title: 'Farmers Receiving Healthy Seedling Trays',
    category: 'SEEDLINGS',
    image: farmer2Img,
    alt: 'Farmer holding seedling tray',
    caption: 'Direct delivery of sturdy pro-trays ready for transplantation.',
  },
  {
    id: 'gal-13',
    title: 'Dense White Root System Plug',
    category: 'SEEDLINGS',
    image: farmer7Img,
    alt: 'Chilli seedling root ball close-up',
    caption: 'Vigorous root plug ensuring rapid field establishment.',
  },
  {
    id: 'gal-14',
    title: 'Hardened Ready Seedlings',
    category: 'SEEDLINGS',
    image: ownerInspectingImg,
    alt: 'Inspecting ready chilli seedlings',
    caption: 'Seedlings inspected for uniform height and stem thickness.',
  },
  {
    id: 'gal-15',
    title: 'Telugu Farmer in Field',
    category: 'FARMERS',
    image: farmer4Img,
    alt: 'Senior farmer in chilli field',
    caption: 'Supporting long-standing farmers across Andhra Pradesh.',
  },
];
