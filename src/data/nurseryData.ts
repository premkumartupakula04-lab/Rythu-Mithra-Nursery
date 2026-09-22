import { ChilliVariety, FarmerItem, ProcessStep, GalleryItem } from '../types';

// All core website photography below comes from the user's supplied photos.
import nursery1 from '../assets/real/nursery_01.jpg';
import nursery2 from '../assets/real/nursery_02.jpg';
import owner1 from '../assets/real/owner_01.jpg';
import owner2 from '../assets/real/owner_02.jpg';
import v2282 from '../assets/real/variety_2282.jpg';
import v1191 from '../assets/real/variety_1191.jpg';
import v2433 from '../assets/real/variety_2433.jpg';
import v1298 from '../assets/real/variety_1298.jpg';
import v0728 from '../assets/real/variety_0728.jpg';
import farmer1 from '../assets/real/farmer_01.jpg';
import farmer2 from '../assets/real/farmer_02.jpg';
import farmer3 from '../assets/real/farmer_03.jpg';
import farmer4 from '../assets/real/farmer_04.jpg';
import farmer5 from '../assets/real/farmer_05.jpg';
import farmer6 from '../assets/real/farmer_06.jpg';
import farmer8 from '../assets/real/farmer_08.jpg';
import farmer9 from '../assets/real/farmer_09.jpg';
import farmerGroup from '../assets/real/farmer_group.jpg';

export const BUSINESS_INFO = {
  name: 'RYTHU MITHRA NURSERY',
  type: 'Chilli Seedling Nursery / Mirapa Naru Nursery',
  owner: 'Khakmuri Venkata Reddy',
  location: 'Chandrapalem Mandal, Andhra Pradesh, India',
  phone: '9949247738',
  phoneFormatted: '+91 99492 47738',
  phoneTel: 'tel:9949247738',
  whatsappUrl: 'https://wa.me/919949247738',
  experience: '10+ years of experience in the nursery field',
  supplyArea: 'Andhra Pradesh & Telangana',
  mainProduct: 'Quality chilli seedlings / Mirapa Naru',
  heroHeading: 'Quality Chilli Seedlings for Farmers',
  tagline: 'Healthy Plants • High Production • Happy Farmers',
  additionalHeroText:
    'Rythu Mithra Nursery supplies chilli seedlings to farmers across Andhra Pradesh and Telangana.',
  aboutText:
    'Rythu Mithra Nursery is a chilli seedling nursery serving farming communities in Andhra Pradesh and Telangana. The nursery focuses on healthy chilli seedlings and farmer-oriented service.',
  fieldSectionText:
    'Real nursery and field photographs are shown throughout this website to present the work and crops supplied through Rythu Mithra Nursery.',
  expertSpeaker: {
    name: 'Meera Hussain',
    designation: 'Senior Area Manager – Sakata Seeds',
    introText: 'My name is Meera Hussain, and I work as a Senior Area Manager at Sakata Seeds.',
  },
};

export const IMAGES = {
  heroBg: nursery1,
  ownerPortrait: owner1,
  ownerInspecting: owner2,
  nurseryTrays: nursery2,
  nurseryStructure: nursery1,
  sakataManager: farmer2,
};

export const CHILLI_VARIETIES: ChilliVariety[] = [
  {
    id: '2282',
    name: '2282',
    category: 'Chilli Variety',
    image: v2282,
    shortDescription: 'A field-tested chilli crop reference shown in the supplied 2282 field photograph, with long green fruits and red fruits at maturity.',
    highlights: ['Hot chilli crop', 'Long, slender fruit appearance', 'Green-to-red maturity visible', 'Ask nursery for current batch details'],
  },
  {
    id: '1191',
    name: 'HY-1191',
    category: 'Chilli Variety',
    image: v1191,
    shortDescription: 'HY-1191 is shown in the supplied Cropwell field photographs with long chilli fruits and a strong fruit-bearing crop appearance.',
    highlights: ['Hot chilli crop', 'Long fruit appearance', 'Green and red stages visible', 'Ask nursery for current batch details'],
  },
  {
    id: '2433',
    name: '2433',
    category: 'Chilli Variety',
    image: v2433,
    shortDescription: '2433 is presented using the supplied Cropwell field photograph, showing a dense chilli crop with long green and red fruits.',
    highlights: ['Hot chilli crop', 'Dense field crop appearance', 'Long green/red fruits', 'Ask nursery for current batch details'],
  },
  {
    id: '1298',
    name: '1298',
    category: 'Chilli Variety',
    image: v1298,
    shortDescription: '1298 is shown in the supplied field photograph with a heavy visible fruit set and red chilli harvest stage.',
    highlights: ['Hot chilli crop', 'Heavy visible fruit set', 'Red maturity stage shown', 'Ask nursery for current batch details'],
  },
  {
    id: '0728',
    name: '0728',
    category: 'Chilli Variety',
    image: v0728,
    shortDescription: '0728 is shown with the supplied Sakata field/nursery reference, including young plants and the Red Hot 0728 crop label.',
    highlights: ['Hot chilli crop', 'Sakata 0728 reference', 'Seedling and field context', 'Ask nursery for current batch details'],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'SEED',
    subtitle: 'Seed Selection',
    description: 'Seeds are prepared for nursery raising.',
    image: v0728,
    iconName: 'Sprout',
  },
  {
    number: '02',
    title: 'GROWING',
    subtitle: 'Nursery Growing',
    description: 'Young chilli plants are raised inside the nursery shade structure.',
    image: nursery2,
    iconName: 'SunMedium',
  },
  {
    number: '03',
    title: 'QUALITY CHECK',
    subtitle: 'Plant Inspection',
    description: 'Plants are checked before they are supplied to farmers.',
    image: owner2,
    iconName: 'ShieldCheck',
  },
  {
    number: '04',
    title: 'READY SEEDLINGS',
    subtitle: 'Ready for Farmers',
    description: 'Healthy chilli seedlings are prepared for field planting.',
    image: nursery1,
    iconName: 'Truck',
  },
];

export const FARMERS_LIST: FarmerItem[] = [
  { id: 'farmer-1', image: farmer1, alt: 'Farmers inspecting a chilli field', locationTag: 'Field', cropStage: 'Chilli Crop' },
  { id: 'farmer-2', image: farmer2, alt: 'Farmer in a 2282 chilli field', locationTag: 'Field', cropStage: '2282 Crop' },
  { id: 'farmer-3', image: farmer3, alt: 'Farmer inspecting HY-1191 chilli plants', locationTag: 'Field', cropStage: 'HY-1191 Crop' },
  { id: 'farmer-4', image: farmer4, alt: 'Farmer in a 2433 chilli field', locationTag: 'Field', cropStage: '2433 Crop' },
  { id: 'farmer-5', image: farmer5, alt: 'Farmer showing 1298 chilli crop', locationTag: 'Field', cropStage: '1298 Crop' },
  { id: 'farmer-6', image: farmer6, alt: 'Farmer with HY-1191 chilli crop', locationTag: 'Field', cropStage: 'HY-1191 Crop' },
  { id: 'farmer-8', image: farmer8, alt: 'Farmer working in chilli field', locationTag: 'Field', cropStage: 'Chilli Crop' },
  { id: 'farmer-9', image: farmer9, alt: 'Farmer in a chilli field', locationTag: 'Field', cropStage: '0728 Crop' },
  { id: 'farmer-group', image: farmerGroup, alt: 'Farmers and field team discussing chilli crop', locationTag: 'Field Visit', cropStage: 'Farmer Field Visit' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'gal-1', title: 'Rythu Mithra Nursery', category: 'NURSERY', image: nursery1, alt: 'Rythu Mithra nursery shade structure', caption: 'Real nursery photograph supplied by the owner.' },
  { id: 'gal-2', title: 'Seedling Nursery', category: 'NURSERY', image: nursery2, alt: 'Chilli seedlings in nursery', caption: 'Real chilli seedling nursery photograph.' },
  { id: 'gal-3', title: 'Nursery Owner', category: 'NURSERY', image: owner1, alt: 'Rythu Mithra Nursery owner', caption: 'Real owner photograph supplied for the website.' },
  { id: 'gal-4', title: '2282', category: 'CHILLI VARIETIES', image: v2282, alt: '2282 chilli crop', caption: 'Supplied 2282 field photograph.' },
  { id: 'gal-5', title: 'HY-1191', category: 'CHILLI VARIETIES', image: v1191, alt: 'HY-1191 chilli crop', caption: 'Supplied HY-1191 crop photograph.' },
  { id: 'gal-6', title: '2433', category: 'CHILLI VARIETIES', image: v2433, alt: '2433 chilli crop', caption: 'Supplied 2433 crop photograph.' },
  { id: 'gal-7', title: '1298', category: 'CHILLI VARIETIES', image: v1298, alt: '1298 chilli crop', caption: 'Supplied 1298 crop photograph.' },
  { id: 'gal-8', title: '0728', category: 'CHILLI VARIETIES', image: v0728, alt: '0728 chilli crop', caption: 'Supplied 0728 field photograph.' },
  { id: 'gal-9', title: 'Farmers in Field', category: 'FARMERS', image: farmer1, alt: 'Farmers in chilli field', caption: 'Real farmer photograph supplied by the user.' },
  { id: 'gal-10', title: 'Chilli Field', category: 'FIELDS', image: farmer2, alt: 'Chilli field', caption: 'Real field photograph supplied by the user.' },
  { id: 'gal-11', title: 'HY-1191 Farmer', category: 'FARMERS', image: farmer3, alt: 'Farmer with HY-1191 crop', caption: 'Real farmer photograph.' },
  { id: 'gal-12', title: '2433 Farmer', category: 'FARMERS', image: farmer4, alt: 'Farmer with 2433 crop', caption: 'Real farmer photograph.' },
  { id: 'gal-13', title: '1298 Farmer', category: 'FARMERS', image: farmer5, alt: 'Farmer with 1298 crop', caption: 'Real farmer photograph.' },
  { id: 'gal-14', title: 'Farmer Field Visit', category: 'FARMERS', image: farmerGroup, alt: 'Farmers and field team discussing chilli crop', caption: 'User-supplied field visit photograph.' },
  { id: 'gal-15', title: 'Chilli Crop', category: 'FIELDS', image: farmer8, alt: 'Chilli crop', caption: 'Real chilli crop photograph supplied by the user.' },
];
