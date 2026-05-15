export const asset = (fileName) => `${import.meta.env.BASE_URL}images/${fileName}`;

export const images = {
  logo: asset('Dintu_Logo.png'),
  logoAlt: asset('Dintu_Logo2.png'),
  hero: asset('Civil-Construction.jpg'),
  civil: asset('Civil-Construction.jpg'),
  concrete: asset('concrete-pouring-construction-team.png.jpeg'),
  about: asset('Dintu-Construction-and-Trading-6.jpeg'),
  structural: asset('Structural-Steel-and-Engineering.jpg'),
  hdpe: asset('hdpe-pipe-welding-site.png.jpeg'),
  plastic: asset('plastic-welding-fabrication-workshop.png.jpeg'),
  inspection: asset('industrial-equipment-inspection.png.jpeg'),
  leakInspection: asset('industrial-leak-detection-inspection.png.jpeg'),
  weldTesting: asset('pipeline-weld-inspection-testing.png.jpeg'),
  cleaning: asset('industrial-sandblasting-at-height.png.jpeg'),
  hydro: asset('water-tank-high-pressure-cleaning.png.jpeg'),
  rail: asset('industrial-rail-cutting-welding.png.jpeg'),
  map: asset('StaticMapService.GetMapImage'),
};

export const clientLogos = [
  { name: 'Anglo American', image: asset('Anglo.png') },
  { name: 'Implats', image: asset('implats.png') },
  { name: 'Sibanye-Stillwater', image: asset('sibanye.png') },
  { name: 'Samancor', image: asset('Samancor.jpg') },
  { name: 'Rand Water', image: asset('rand-water.jpg') },
  { name: 'Magalies Water', image: asset('magalies-water.png') },
  { name: 'Rustenburg Local Municipality', image: asset('Rustenburg-trust.png') },
  { name: 'Department of Mineral Resources and Energy', image: asset('department-of-MRE.jpg') },
];
