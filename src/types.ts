export interface ChilliVariety {
  id: string;
  name: string;
  category: 'Chilli Variety';
  image: string;
  shortDescription: string;
  highlights: string[];
}

export interface FarmerItem {
  id: string;
  image: string;
  alt: string;
  locationTag?: string;
  cropStage?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'NURSERY' | 'CHILLI VARIETIES' | 'FIELDS' | 'FARMERS' | 'SEEDLINGS';
  image: string;
  alt: string;
  caption?: string;
}

export interface EnquiryData {
  fullName: string;
  phoneNumber: string;
  location: string;
  variety: string;
  quantity: string;
  message: string;
}
