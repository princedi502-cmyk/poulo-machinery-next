export interface MachineSpecItem {
  label: string;
  value: string;
  note?: string;
}

export interface MachineSpecCategory {
  category: string;
  items: MachineSpecItem[];
}

export interface LoomModel {
  id: string;
  name: string;
  tagline: string;
  type: 'air-jet' | 'water-jet';
  categoryName: string;
  heroImage: string;
  galleryImages: string[];
  overview: string[];
  keyBenefits: string[];
  configurationNotice: string;
  specCategories: MachineSpecCategory[];
  majorSystems: {
    name: string;
    description: string;
  }[];
}

export const PL920_AIR_JET_LOOM: LoomModel = {
  id: 'pl920',
  name: 'PL920 High-Speed Air Jet Loom',
  tagline: 'High-speed, energy-efficient air jet weaving system engineered for fine cotton, synthetic, and blended fabric production.',
  type: 'air-jet',
  categoryName: 'Air Jet Looms',
  heroImage: '/images/air-jet-loom-poulo-machinery-surat.webp',
  galleryImages: [
    '/images/air-jet-loom-poulo-machinery-surat.webp',
    '/images/air-jet-loom-speed-weaving-surat.webp',
    '/images/poulo-machinery-loom-1-surat.webp',
    '/images/poulo-machinery-loom-2-surat.webp',
  ],
  overview: [
    'The PL920 High-Speed Air Jet Loom is engineered for high-performance weaving with stable weft insertion, optimized airflow dynamics, and low vibration structure.',
    'Sourced from Qingdao Jinxin Hejia Machinery Co., Ltd. (China) and supplied by Poulo Machinery (Surat, Gujarat), the PL920 configuration can be customized according to specific yarn counts, fabric densities, and production output targets.',
    'It supports wide-ranging applications including fine shirting, denim, bottom weights, sheetings, and technical textiles.'
  ],
  keyBenefits: [
    'Optimized auxiliary main nozzle configuration for high-speed insertion stability and low air consumption',
    'Robust machine frame structure minimizing operational vibration at high RPM',
    'Flexible shedding options from cam motion to electronic dobby and jacquard head integrations',
    'Precise electronic let-off (ELO) and mechanical/electronic take-up (MTU/ETU) synchronization',
    'Reflective weft feeler and electric warp stop sensing for minimized fabric defects'
  ],
  configurationNotice: 'Note: Specifications and operational parameters vary by custom machine configuration, reed width, shedding motion, and target yarn/fabric specifications. Confirm final technical configuration before order placement.',
  specCategories: [
    {
      category: 'Dimensions & Capacity',
      items: [
        { label: 'Nominal Reed Widths', value: '190, 210, 230, 250, 280, 340, 360 cm' },
        { label: 'Useful Reed Width Reduction', value: 'Max 60 cm (for 190–250 cm); Max 80 cm (for 280 cm & above)' }
      ]
    },
    {
      category: 'Yarn & Weft Insertion',
      items: [
        { label: 'Short Staple Yarn Range', value: '100s to 5s (cotton, spun yarn)' },
        { label: 'Filament / Long Yarn Range', value: '50D to 900D (synthetic, filament)' },
        { label: 'Weft Color Selection', value: '2-color mixing, 2-color arbitrary, 4-color, or 6-color free selection' },
        { label: 'Weft Insertion System', value: 'Main and sub-nozzle combined insertion, profile reed, auxiliary main nozzle' },
        { label: 'Weft Sensing', value: 'Reflective optical weft feeler system' }
      ]
    },
    {
      category: 'Shedding & Pattern Control',
      items: [
        { label: 'Crank Shedding', value: 'Standard plain weave shedding options' },
        { label: 'Cam Shedding', value: 'Up to 8 heald frames' },
        { label: 'Dobby Shedding', value: 'Electronic dobby up to 16 heald frames' },
        { label: 'Electronic Jacquard', value: 'Options for 1536 / 2688 / 5120 / 6144 needle jacquard heads' }
      ]
    },
    {
      category: 'Let-off, Take-up & Motion Control',
      items: [
        { label: 'Let-off Motion', value: 'Electronic Let-off (ELO) with continuous tension control' },
        { label: 'Take-up Motion', value: 'Mechanical Take-up (MTU) standard; Electronic Take-up (ETU) optional' },
        { label: 'Weft Density Range', value: '6.6 to 80.5 picks/cm (15 to 204 picks/inch)' },
        { label: 'Stop Sensing & Display', value: 'Electric warp sensing system with digital stop-cause indication' }
      ]
    }
  ],
  majorSystems: [
    {
      name: 'High-Efficiency Air Nozzle System',
      description: 'Combines main nozzle acceleration with profile reed sub-nozzle relaying for high insertion velocity with minimized compressed air consumption.'
    },
    {
      name: 'Rigid Frame & Vibration Damping',
      description: 'Ultra-stiff side frames and box-type crossbeams engineered to absorb beat-up impact during high-speed continuous weaving.'
    },
    {
      name: 'Electronic Let-Off (ELO) & Tension Control',
      description: 'Dynamic load-cell sensing automatically adjusts warp tension from full to empty beam to ensure consistent fabric pick density.'
    },
    {
      name: 'Modular Shedding Integration',
      description: 'Seamlessly accommodates positive cam, electronic dobby, or high-capacity electronic jacquard systems depending on fabric complexity.'
    }
  ]
};

export const PL5810_WATER_JET_LOOM: LoomModel = {
  id: 'pl5810',
  name: 'PL5810 High-Speed Water Jet Loom',
  tagline: 'High-efficiency water jet weaving machine designed for hydrophobic synthetic filament, polyester, and nylon fabrics.',
  type: 'water-jet',
  categoryName: 'Water Jet Looms',
  heroImage: '/images/water-jet-loom-poulo-machinery-surat.webp',
  galleryImages: [
    '/images/water-jet-loom-poulo-machinery-surat.webp',
    '/images/water-jet-loom-synthetic-fabric-surat.webp',
    '/images/poulo-machinery-loom-3-surat.webp',
    '/images/poulo-machinery-loom-4-surat.webp',
  ],
  overview: [
    'The PL5810 High-Speed Water Jet Loom delivers excellent productivity for synthetic fabric weaving, including lining fabrics, taffeta, satin, umbrella cloth, and technical synthetic textiles.',
    'Manufactured by Qingdao Jinxin Hejia Machinery Co., Ltd. (China) and distributed by Poulo Machinery (Surat, Gujarat), the machine offers precise water jet pump dynamics and anti-corrosion components.',
    'Engineered to operate reliably up to 1100 RPM design maximum speed, depending on yarn quality, reed width, shedding motion, and factory configuration.'
  ],
  keyBenefits: [
    'Designed for high RPM continuous synthetic filament weaving with precise water jet pressure delivery',
    'Flexible weft selection from single jet to 1–6 jet electronic free selection',
    'High versatility supporting crank, cam, dobby, and jacquard shedding configurations',
    'Heavy-duty anti-corrosion stainless steel water channels, pump units, and drainage systems',
    'Comprehensive let-off and take-up options tailored to warp beam sizes and fabric density requirements'
  ],
  configurationNotice: 'Note: Specifications, installed motor power, and maximum operating speeds depend on machine width, fabric construction, and selected configuration. Final technical configuration must be confirmed prior to ordering.',
  specCategories: [
    {
      category: 'Dimensions & Speed',
      items: [
        { label: 'Optional Reed Width', value: '150 cm to 380 cm' },
        { label: 'Design Maximum Speed', value: 'Up to 1100 RPM (Actual operating speed depends on yarn, fabric structure, and configuration)' }
      ]
    },
    {
      category: 'Weft Insertion & Selection',
      items: [
        { label: 'Weft Insertion System', value: 'High-pressure water pump with ceramic plunger nozzle assembly' },
        { label: 'Weft Selection', value: 'Optional 1 to 6 jet electronic free weft selection' }
      ]
    },
    {
      category: 'Shedding Options',
      items: [
        { label: 'Shedding Mechanisms', value: 'Crank shedding, Cam shedding, Dobby shedding, and Jacquard options' }
      ]
    },
    {
      category: 'Weft Density & Motion Systems',
      items: [
        { label: 'Weft Density Range', value: '4 to 100 pieces/cm (Configuration dependent)' },
        { label: 'Let-off System', value: 'Mechanical or Electronic Let-off (ELO)' },
        { label: 'Take-up System', value: 'Mechanical or Electronic Take-up (ETU)' },
        { label: 'Motor Power Rating', value: 'Configuration dependent (1.5 kW – 7.5 kW range depending on width, pump count, and shedding setup)' }
      ]
    }
  ],
  majorSystems: [
    {
      name: 'High-Precision Water Pump Assembly',
      description: 'Features high-density ceramic plungers and wear-resistant nozzles to maintain uniform water jet pressure during continuous high-speed insertion.'
    },
    {
      name: 'Corrosion-Resistant Water Management',
      description: 'Stainless steel suction boxes, splash guards, and drainage troughs prevent moisture accumulation and extend machine longevity.'
    },
    {
      name: 'Anti-Vibration Box Frame',
      description: 'Enhanced structural mass distribution ensures low noise and minimal vibration during multi-pump or wide-width operation.'
    },
    {
      name: 'Multi-Jet Electronic Weft Selection',
      description: 'Allows multi-color or multi-yarn weaving with precise electronic timing synchronization between pump actuation and nozzle firing.'
    }
  ]
};

export const ALL_MODELS = [PL920_AIR_JET_LOOM, PL5810_WATER_JET_LOOM];

export function getModelById(id: string): LoomModel | undefined {
  return ALL_MODELS.find(m => m.id === id);
}

