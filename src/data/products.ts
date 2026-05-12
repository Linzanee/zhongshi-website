export interface Product {
  id: string;
  name: string;
  nameEn: string;
  model: string;
  category: string;
  description: string;
  descriptionEn: string;
  fullDescription: string;
  fullDescriptionEn: string;
  image: string;
  features: string[];
  featuresEn: string[];
  specs: Record<string, string>;
  specsEn: Record<string, string>;
}

export const products: Product[] = [
  {
    id: 'eco-e215ls',
    name: '液冷储能一体柜',
    nameEn: 'Liquid Cooled ESS Cabinet',
    model: 'ECO-E215LS',
    category: 'liquid-cooled',
    description: '采用先进的单柜液冷热管理方案，柜内电芯温差小于3℃，进一步提升系统成组一致性，延长电芯使用寿命。',
    descriptionEn: 'Advanced single-cabinet liquid cooling thermal management solution with cell temperature difference less than 3℃, improving system consistency and extending battery life.',
    fullDescription: '该款液冷储能一体柜采用先进的单柜液冷热管理方案，柜内电芯温差小于3℃，进一步提升系统成组一致性，从而延长电芯使用寿命。一体机模块化的设计使得并机方案更加灵活，适用于工商业储能、光储充一体化等多种应用场景。',
    fullDescriptionEn: 'This liquid cooled ESS cabinet adopts advanced single-cabinet liquid cooling thermal management solution. The cell temperature difference is less than 3℃, which further improves system consistency and extends battery life. The modular design makes parallel connection more flexible, suitable for industrial and commercial energy storage, solar-storage-charging integration and other applications.',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&q=80',
    features: [
      '先进的单柜液冷热管理方案',
      '柜内电芯温差小于3℃',
      '提升系统成组一致性',
      '延长电芯使用寿命',
      '模块化设计，并机灵活',
      '适用于多种应用场景'
    ],
    featuresEn: [
      'Advanced single-cabinet liquid cooling solution',
      'Cell temperature difference less than 3℃',
      'Improved system consistency',
      'Extended battery life',
      'Modular design for flexible parallel connection',
      'Suitable for various applications'
    ],
    specs: {
      '额定容量': '215kWh',
      '额定功率': '100kW',
      '工作电压': '600-850V',
      '防护等级': 'IP55',
      '冷却方式': '液冷',
      '工作温度': '-20℃~50℃'
    },
    specsEn: {
      'Rated Capacity': '215kWh',
      'Rated Power': '100kW',
      'Operating Voltage': '600-850V',
      'Protection Level': 'IP55',
      'Cooling Method': 'Liquid Cooled',
      'Operating Temp': '-20℃~50℃'
    }
  },
  {
    id: 'eco-e233ls',
    name: '液冷储能一体柜',
    nameEn: 'Liquid Cooled ESS Cabinet',
    model: 'ECO-E233LS/E261LS',
    category: 'liquid-cooled',
    description: '采用先进的单柜独立液冷控制方案和均温控制策略，电芯温差小于3℃，进一步提高电芯温度一致性。',
    descriptionEn: 'Advanced independent single-cabinet liquid cooling control with uniform temperature strategy, cell temperature difference less than 3℃, improving temperature consistency.',
    fullDescription: '该系列产品采用先进的单柜独立液冷控制方案和均温控制策略，电芯温差小于3℃，进一步提高电芯温度一致性，延长电芯寿命。模块化设计使得并机方案更加灵活，且具有更高的能量密度和更优的散热性能。',
    fullDescriptionEn: 'This series adopts advanced independent single-cabinet liquid cooling control and uniform temperature strategy. Cell temperature difference is less than 3℃, improving temperature consistency and extending battery life. Modular design enables flexible parallel connection with higher energy density and better heat dissipation.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    features: [
      '单柜独立液冷控制方案',
      '均温控制策略',
      '电芯温差小于3℃',
      '提高电芯温度一致性',
      '高能量密度设计',
      '优异的散热性能'
    ],
    featuresEn: [
      'Independent single-cabinet liquid cooling',
      'Uniform temperature control strategy',
      'Cell temperature difference less than 3℃',
      'Improved temperature consistency',
      'High energy density design',
      'Excellent heat dissipation'
    ],
    specs: {
      '额定容量': '233/261kWh',
      '额定功率': '125kW',
      '工作电压': '600-850V',
      '防护等级': 'IP55',
      '冷却方式': '液冷',
      '工作温度': '-20℃~50℃'
    },
    specsEn: {
      'Rated Capacity': '233/261kWh',
      'Rated Power': '125kW',
      'Operating Voltage': '600-850V',
      'Protection Level': 'IP55',
      'Cooling Method': 'Liquid Cooled',
      'Operating Temp': '-20℃~50℃'
    }
  },
  {
    id: 'air-cooled-100kw',
    name: '风冷储能一体柜',
    nameEn: 'Air Cooled ESS Cabinet',
    model: 'ECO-A100',
    category: 'air-cooled',
    description: '采用智能风冷散热系统，结构紧凑，安装便捷，适用于中小型工商业储能场景。',
    descriptionEn: 'Intelligent air cooling system with compact structure and easy installation, suitable for small and medium industrial energy storage.',
    fullDescription: '风冷储能一体柜采用智能风冷散热系统，通过精确的风道设计和温控策略，确保电芯工作在最佳温度范围。产品结构紧凑，安装便捷，维护简单，是中小型工商业储能场景的理想选择。',
    fullDescriptionEn: 'This air cooled ESS cabinet adopts intelligent air cooling system with precise air duct design and temperature control strategy to ensure optimal cell operating temperature. Compact structure, easy installation and simple maintenance make it ideal for small and medium industrial energy storage.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    features: [
      '智能风冷散热系统',
      '精确的风道设计',
      '结构紧凑，安装便捷',
      '维护简单',
      '适用于中小型工商业场景',
      '性价比高'
    ],
    featuresEn: [
      'Intelligent air cooling system',
      'Precise air duct design',
      'Compact structure, easy installation',
      'Simple maintenance',
      'Suitable for small/medium industrial use',
      'High cost performance'
    ],
    specs: {
      '额定容量': '100kWh',
      '额定功率': '50kW',
      '工作电压': '400-700V',
      '防护等级': 'IP54',
      '冷却方式': '风冷',
      '工作温度': '-10℃~45℃'
    },
    specsEn: {
      'Rated Capacity': '100kWh',
      'Rated Power': '50kW',
      'Operating Voltage': '400-700V',
      'Protection Level': 'IP54',
      'Cooling Method': 'Air Cooled',
      'Operating Temp': '-10℃~45℃'
    }
  },
  {
    id: 'solar-storage-150kw',
    name: '风冷光储一体柜',
    nameEn: 'Air Cooled Solar ESS Cabinet',
    model: 'ECO-S150',
    category: 'air-solar',
    description: '集成光伏逆变与储能功能于一体，实现光储一体化，提高能源利用效率。',
    descriptionEn: 'Integrated PV inverter and energy storage in one cabinet, achieving solar-storage integration and improving energy efficiency.',
    fullDescription: '风冷光储一体柜集成光伏逆变与储能功能于一体，支持多种工作模式，可实现光储一体化运行。产品具有高效的能量转换效率，支持并网和离网运行，适用于光储充电站、分布式光伏配储等场景。',
    fullDescriptionEn: 'This air cooled solar ESS cabinet integrates PV inverter and energy storage, supporting multiple operating modes for solar-storage integration. High conversion efficiency with grid-connected and off-grid operation, suitable for solar-storage charging stations and distributed PV storage.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    features: [
      '光伏逆变与储能一体化',
      '支持多种工作模式',
      '高效的能量转换效率',
      '支持并网和离网运行',
      '适用于光储充电站',
      '智能能量管理'
    ],
    featuresEn: [
      'Integrated PV inverter and storage',
      'Multiple operating modes',
      'High energy conversion efficiency',
      'Grid-connected and off-grid support',
      'Suitable for solar-storage stations',
      'Intelligent energy management'
    ],
    specs: {
      '额定容量': '150kWh',
      '光伏功率': '100kW',
      '储能功率': '75kW',
      '工作电压': '400-800V',
      '防护等级': 'IP54',
      '冷却方式': '风冷'
    },
    specsEn: {
      'Rated Capacity': '150kWh',
      'PV Power': '100kW',
      'Storage Power': '75kW',
      'Operating Voltage': '400-800V',
      'Protection Level': 'IP54',
      'Cooling Method': 'Air Cooled'
    }
  },
  {
    id: 'container-1mwh',
    name: '电池集装箱',
    nameEn: 'Battery Container',
    model: 'ECO-C1M',
    category: 'container',
    description: '大容量储能集装箱解决方案，适用于电网侧储能、大型工商业储能项目。',
    descriptionEn: 'Large capacity energy storage container solution for grid-side storage and large industrial projects.',
    fullDescription: '电池集装箱是大容量储能系统的集成解决方案，将电池系统、BMS、PCS、温控系统、消防系统等集成于标准集装箱内。产品具有容量大、部署快、可靠性高等特点，适用于电网侧储能、大型工商业储能、新能源配储等项目。',
    fullDescriptionEn: 'Battery container is an integrated large-scale energy storage solution, combining battery system, BMS, PCS, thermal management and fire protection in a standard container. Large capacity, fast deployment and high reliability for grid-side storage, large industrial projects and renewable energy storage.',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a782?w=800&q=80',
    features: [
      '大容量储能解决方案',
      '系统集成度高',
      '部署快速便捷',
      '高可靠性设计',
      '完善的消防系统',
      '适用于大型储能项目'
    ],
    featuresEn: [
      'Large capacity storage solution',
      'High system integration',
      'Fast and easy deployment',
      'High reliability design',
      'Complete fire protection system',
      'Suitable for large-scale projects'
    ],
    specs: {
      '额定容量': '1MWh/2MWh/3MWh',
      '额定功率': '500kW/1MW',
      '工作电压': '1000-1500V',
      '防护等级': 'IP55',
      '冷却方式': '液冷',
      '集装箱规格': '20尺/40尺'
    },
    specsEn: {
      'Rated Capacity': '1MWh/2MWh/3MWh',
      'Rated Power': '500kW/1MW',
      'Operating Voltage': '1000-1500V',
      'Protection Level': 'IP55',
      'Cooling Method': 'Liquid Cooled',
      'Container Spec': '20ft/40ft'
    }
  },
  {
    id: 'pcs-500kw',
    name: '变流升压一体机',
    nameEn: 'PCS & Transformer Unit',
    model: 'ECO-P500',
    category: 'pcs',
    description: '集成储能变流器与升压变压器于一体，减少系统占地，降低系统成本。',
    descriptionEn: 'Integrated PCS and step-up transformer in one unit, reducing footprint and system cost.',
    fullDescription: '变流升压一体机集成储能变流器（PCS）与升压变压器于一体，可直接将直流电转换为高压交流电并网。产品设计紧凑，减少了系统占地面积，降低了系统成本和安装复杂度，适用于大型储能电站和工商业储能项目。',
    fullDescriptionEn: 'This PCS and transformer unit integrates power conversion system and step-up transformer, directly converting DC to high-voltage AC for grid connection. Compact design reduces footprint, system cost and installation complexity for large storage plants and industrial projects.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    features: [
      'PCS与变压器一体化',
      '减少系统占地面积',
      '降低系统成本',
      '简化安装流程',
      '高效率能量转换',
      '完善的保护功能'
    ],
    featuresEn: [
      'Integrated PCS and transformer',
      'Reduced system footprint',
      'Lower system cost',
      'Simplified installation',
      'High efficiency conversion',
      'Complete protection functions'
    ],
    specs: {
      '额定功率': '500kW/1MW/2MW',
      '直流电压': '600-1500V',
      '交流电压': '10kV/35kV',
      '转换效率': '≥98.5%',
      '防护等级': 'IP54',
      '冷却方式': '风冷/液冷'
    },
    specsEn: {
      'Rated Power': '500kW/1MW/2MW',
      'DC Voltage': '600-1500V',
      'AC Voltage': '10kV/35kV',
      'Efficiency': '≥98.5%',
      'Protection Level': 'IP54',
      'Cooling Method': 'Air/Liquid Cooled'
    }
  },
  {
    id: 'pack-280ah',
    name: 'PACK电池模组',
    nameEn: 'Battery Pack Module',
    model: 'ECO-PACK280',
    category: 'pack',
    description: '高能量密度磷酸铁锂电池模组，具有优异的安全性能和长循环寿命。',
    descriptionEn: 'High energy density LiFePO4 battery module with excellent safety and long cycle life.',
    fullDescription: 'PACK电池模组采用高能量密度磷酸铁锂电芯，通过科学的成组设计和严格的生产工艺，确保模组具有优异的安全性能和长循环寿命。模组具有标准化接口，便于系统集成，可广泛应用于各类储能系统。',
    fullDescriptionEn: 'Battery pack module uses high energy density LiFePO4 cells with scientific grouping design and strict manufacturing process, ensuring excellent safety and long cycle life. Standardized interfaces facilitate system integration for various energy storage applications.',
    image: 'https://images.unsplash.com/photo-1555664424-778a69022365?w=800&q=80',
    features: [
      '高能量密度设计',
      '磷酸铁锂化学体系',
      '优异的安全性能',
      '长循环寿命',
      '标准化接口',
      '便于系统集成'
    ],
    featuresEn: [
      'High energy density design',
      'LiFePO4 chemistry',
      'Excellent safety performance',
      'Long cycle life',
      'Standardized interfaces',
      'Easy system integration'
    ],
    specs: {
      '电芯容量': '280Ah',
      '模组电压': '48V/96V',
      '模组容量': '13.4kWh/26.9kWh',
      '循环寿命': '≥6000次',
      '工作温度': '-20℃~55℃',
      '防护等级': 'IP67'
    },
    specsEn: {
      'Cell Capacity': '280Ah',
      'Module Voltage': '48V/96V',
      'Module Capacity': '13.4kWh/26.9kWh',
      'Cycle Life': '≥6000 cycles',
      'Operating Temp': '-20℃~55℃',
      'Protection Level': 'IP67'
    }
  },
  {
    id: 'bms-master',
    name: 'BMS储能电池管理系统',
    nameEn: 'BMS Battery Management System',
    model: 'ECO-BMS',
    category: 'bms',
    description: '三级架构BMS系统，实现电池全生命周期管理，保障系统安全运行。',
    descriptionEn: 'Three-tier BMS architecture for full lifecycle battery management and safe system operation.',
    fullDescription: 'BMS储能电池管理系统采用三级架构设计（BMU-BCU-BMS），实现对电池全生命周期的精细化管理。系统具有完善的保护功能、精准的SOC/SOH估算、智能的均衡管理，可有效延长电池寿命，保障系统安全运行。',
    fullDescriptionEn: 'BMS adopts three-tier architecture (BMU-BCU-BMS) for refined full lifecycle battery management. Complete protection functions, accurate SOC/SOH estimation and intelligent balancing effectively extend battery life and ensure safe operation.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    features: [
      '三级架构设计',
      '全生命周期管理',
      '完善的保护功能',
      '精准的SOC/SOH估算',
      '智能均衡管理',
      '多重安全保护'
    ],
    featuresEn: [
      'Three-tier architecture',
      'Full lifecycle management',
      'Complete protection functions',
      'Accurate SOC/SOH estimation',
      'Intelligent balancing',
      'Multi-layer safety protection'
    ],
    specs: {
      '管理架构': '三级（BMU-BCU-BMS）',
      '电压采集精度': '±5mV',
      '温度采集精度': '±2℃',
      '均衡方式': '主动+被动',
      '通信接口': 'CAN/RS485/Ethernet',
      '响应时间': '<100ms'
    },
    specsEn: {
      'Architecture': 'Three-tier (BMU-BCU-BMS)',
      'Voltage Accuracy': '±5mV',
      'Temperature Accuracy': '±2℃',
      'Balancing': 'Active + Passive',
      'Communication': 'CAN/RS485/Ethernet',
      'Response Time': '<100ms'
    }
  },
  {
    id: 'pcs-module-125kw',
    name: 'PCS储能变流器',
    nameEn: 'PCS Power Conversion System',
    model: 'ECO-PCS125',
    category: 'pcs-module',
    description: '模块化储能变流器，支持多机并联，适用于工商业储能系统。',
    descriptionEn: 'Modular power conversion system supporting parallel operation for industrial energy storage.',
    fullDescription: 'PCS储能变流器采用模块化设计，支持多机并联运行，可灵活配置系统功率。产品具有高效率、高功率因数、低谐波等特点，支持并网、离网、并离网切换等多种工作模式，适用于工商业储能、微电网等应用场景。',
    fullDescriptionEn: 'PCS adopts modular design supporting parallel operation for flexible power configuration. High efficiency, high power factor and low harmonics with grid-connected, off-grid and switching modes for industrial storage and microgrid applications.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    features: [
      '模块化设计',
      '支持多机并联',
      '高效率能量转换',
      '多种工作模式',
      '高功率因数',
      '低谐波输出'
    ],
    featuresEn: [
      'Modular design',
      'Parallel operation support',
      'High efficiency conversion',
      'Multiple operating modes',
      'High power factor',
      'Low harmonic output'
    ],
    specs: {
      '额定功率': '125kW/250kW',
      '直流电压': '600-1000V',
      '交流电压': '400V',
      '转换效率': '≥98%',
      '功率因数': '≥0.99',
      '冷却方式': '风冷'
    },
    specsEn: {
      'Rated Power': '125kW/250kW',
      'DC Voltage': '600-1000V',
      'AC Voltage': '400V',
      'Efficiency': '≥98%',
      'Power Factor': '≥0.99',
      'Cooling Method': 'Air Cooled'
    }
  },
  {
    id: 'ems-pro',
    name: 'EMS储能能量管理系统',
    nameEn: 'EMS Energy Management System',
    model: 'ECO-EMS',
    category: 'ems',
    description: '智能能量管理系统，实现储能系统的优化调度和经济运行。',
    descriptionEn: 'Intelligent energy management system for optimized scheduling and economic operation.',
    fullDescription: 'EMS储能能量管理系统是储能系统的智能大脑，通过对储能系统的实时监控、数据分析和智能调度，实现储能系统的优化运行。系统支持多种运行策略，可根据电价、负荷、新能源发电等因素自动优化充放电策略，实现储能系统的经济运行。',
    fullDescriptionEn: 'EMS is the intelligent brain of energy storage system, enabling optimized operation through real-time monitoring, data analysis and intelligent scheduling. Multiple strategies automatically optimize charging/discharging based on electricity prices, load and renewable generation for economic operation.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    features: [
      '实时监控与数据分析',
      '智能调度策略',
      '多种运行模式',
      '电价优化管理',
      '负荷预测',
      '远程监控运维'
    ],
    featuresEn: [
      'Real-time monitoring and analysis',
      'Intelligent scheduling strategy',
      'Multiple operating modes',
      'Electricity price optimization',
      'Load forecasting',
      'Remote monitoring'
    ],
    specs: {
      '监控规模': '不限',
      '数据存储': '≥3年',
      '响应时间': '<1s',
      '通信协议': 'Modbus/IEC104/OPC UA',
      '接入方式': '本地/云端',
      '支持平台': 'Web/APP'
    },
    specsEn: {
      'Monitoring Scale': 'Unlimited',
      'Data Storage': '≥3 years',
      'Response Time': '<1s',
      'Protocols': 'Modbus/IEC104/OPC UA',
      'Access': 'Local/Cloud',
      'Platforms': 'Web/APP'
    }
  }
];
