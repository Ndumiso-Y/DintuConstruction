import { images } from './assets';

export const services = [
  {
    id: 'civil-infrastructure',
    title: 'Civil & Infrastructure',
    shortTitle: 'Civil Works',
    image: images.civil,
    alt: 'Civil construction work on a prepared site',
    summary:
      'Civil construction and infrastructure support for mining, municipal, commercial, and industrial environments.',
    services: ['Civil construction', 'Roads', 'Earthworks', 'Drainage', 'Concrete works'],
  },
  {
    id: 'engineering-fabrication',
    title: 'Engineering & Fabrication',
    shortTitle: 'Fabrication',
    image: images.structural,
    alt: 'Structural steel fabrication and engineering work',
    summary:
      'Practical steel, pipeline, and plastic welding support for site works, maintenance, and project delivery.',
    services: ['Structural steel', 'Pipeline fabrication', 'Plastic welding'],
  },
  {
    id: 'testing-inspection',
    title: 'Testing & Inspection',
    shortTitle: 'Testing',
    image: images.inspection,
    alt: 'Industrial equipment inspection and technical testing',
    summary:
      'Specialised testing and inspection support to help teams understand material condition and project risk.',
    services: ['Non-Destructive Testing / NDT', 'Destructive Testing', 'Specialised testing'],
  },
  {
    id: 'industrial-support',
    title: 'Industrial Support',
    shortTitle: 'Industrial',
    image: images.cleaning,
    alt: 'Industrial cleaning and sandblasting at height',
    summary:
      'Specialised industrial cleaning services for facilities, tanks, process areas, and difficult access environments.',
    services: ['Specialised Industrial Cleaning', 'Hydro blasting', 'Jet rodding'],
  },
  {
    id: 'consulting',
    title: 'Engineering & Project Consulting',
    shortTitle: 'Consulting',
    image: images.weldTesting,
    alt: 'Pipeline weld inspection and project testing support',
    summary:
      'Project costing, SHEQ, engineering analysis, and advisory support for better planning and execution.',
    services: ['Project costing', 'SHEQ support', 'Engineering analysis', 'Project advisory'],
  },
];

export const industries = [
  'Mining operations',
  'Municipal infrastructure',
  'Water and utilities',
  'Industrial plants',
  'Commercial construction',
  'Public sector procurement',
];
