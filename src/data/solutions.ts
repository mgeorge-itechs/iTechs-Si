import {
  Shield,
  Building2,
  ShieldHalf,
  Airplay,
  GlobeLock,
  HouseWifi,
  EthernetPort,
  Flame,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type Solution = {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  accent: "electric" | "gold";
  features: { title: string; desc: string }[];
  useCases: string[];
  outcomes: string[];
};

export const solutions: Solution[] = [
  {
    slug: "physical-security-systems",
    icon: ShieldCheck,
    shortTitle: "Physical Security",
    title: "Physical Security Systems",
    description:
      "Integrated physical security solutions including gates, road blockers, barriers, bollards, turnstiles, and perimeter protection systems designed to enhance access control, site security, and operational safety.",
    longDescription:
      "iTechs designs, deploys, and maintains integrated physical security infrastructures that control vehicle and pedestrian access while protecting facility perimeters. From automatic gates and road blockers to turnstiles and bollards, our solutions are engineered to enforce strict access policies, deter unauthorized entry, and ensure the safety of people and assets across commercial, industrial, and high-security environments.",
    tags: ["Gates & Barriers", "Perimeter Protection", "Access Control"],
    accent: "electric",
    features: [
      {
        title: "Gates & Barriers",
        desc: "Automatic gates, parking barriers, and access control barriers designed to regulate vehicle and pedestrian flow.",
      },
      {
        title: "Road Blockers",
        desc: "High-security road blockers and wedge barriers engineered to stop unauthorized vehicle access at critical entry points.",
      },
      {
        title: "Bollards",
        desc: "Fixed, retractable, and crash-rated security bollards designed to protect buildings, pedestrian zones, and infrastructure.",
      },
      {
        title: "Turnstiles",
        desc: "Pedestrian turnstiles and speed gates designed to manage access and monitor foot traffic in secure facilities.",
      },
      {
        title: "Perimeter Protection",
        desc: "Integrated perimeter security systems including fencing, detection sensors, and monitoring solutions to secure facility boundaries.",
      },
    ],
    useCases: [
      "Commercial and corporate campuses",
      "Government and diplomatic facilities",
      "Airports and transportation hubs",
      "Critical infrastructure and industrial sites",
    ],
    outcomes: [
      "Enhanced access control and site security",
      "Improved operational safety and traffic management",
      "Deterrence of unauthorized entry and vehicle threats",
    ],
  },
  {
    slug: "Fire & Water",
    icon: Flame,
    shortTitle: "Fire & Water",
    title: "Fire & Water",
    description:
      "End-to-end technology and infrastructure solutions integrating security, life safety, water systems, connectivity, and intelligence to support modern enterprises and connected environments.",
    longDescription:
      "iTechs Fire & Water division delivers solutions of physical security, fire alarm and firefighting systems, water treatment and management, network infrastructure, cybersecurity, audiovisual systems, command & control, and smart city platforms. By combining global technology partnerships with strong engineering expertise, we design, deploy, and maintain integrated systems that protect people and assets, enhance safety, optimize water resources, enable connectivity, and improve operational efficiency across commercial, industrial, residential, and public-sector environments.",
    tags: ["Fire Alarm Systems", "Fire Fighting Systems"],
    accent: "gold",
    features: [
      {
        title: "Fire Alarm Systems",
        desc: "Intelligent fire alarm systems providing early detection, rapid alerts, and reliable protection for commercial, residential, and industrial facilities.",
      },
      {
        title: "Fire Fighting Systems",
        desc: "Integrated fire fighting solutions including sprinklers, hydrants, pumps, and suppression systems designed for maximum safety and reliability.",
      },
    ],
    useCases: [
      "Commercial and residential buildings",
      "Industrial and manufacturing plants",
      "Hotels, hospitals, and educational institutions",
      "Data centers and critical infrastructure",
    ],
    outcomes: [
      "Early detection and faster response",
      "Regulatory compliance and safety certification",
      "Reduced property damage and operational downtime",
    ],
  },
  {
    slug: "security-solutions",
    icon: Shield,
    shortTitle: "Security Solutions",
    title: "Integrated Security Solutions",
    description:
      "Security solutions are designed to protect critical infrastructure, facilities, and urban environments through advanced surveillance, access control, and integrated monitoring systems.",
    longDescription:
      "The solutions enable organizations to maintain full visibility over operations, respond proactively to potential threats, and ensure the safety of assets, personnel, and infrastructure.",
    tags: ["Surveillance Systems", "Access Control", "Integrated Monitoring"],
    accent: "electric",
    features: [
      {
        title: "Video Surveillance Systems",
        desc: "Advanced CCTV and video analytics platforms that enable real-time monitoring and intelligent security management.",
      },
      {
        title: "Access Control Systems",
        desc: "Secure access management solutions designed to regulate and monitor entry across buildings, campuses, and critical infrastructure.",
      },
      {
        title: "Intrusion Detection Systems",
        desc: "Are designed to identify and respond to unauthorized activity across secured environments.",
      },
      {
        title: "Perimeter Security Systems",
        desc: "Are designed to monitor and secure facility boundaries and restricted areas.",
      },
      {
        title: "Public Address Systems",
        desc: "Are designed to broadcast announcements and emergency notifications across facilities.",
      },
      {
        title: "Intercom Systems",
        desc: "Integrated communication systems supporting secure interaction between internal and external facility access points",
      },
      {
        title: "Integrated Security Management Platforms",
        desc: "Centralized platforms enable the monitoring and control of multiple security systems from a unified interface.",
      },
    ],
    useCases: [
      "Government and defense facilities",
      "Banks and high-value financial sites",
      "Mixed-use real estate developments",
      "Critical national infrastructure",
    ],
    outcomes: [
      "Reduced incident response times",
      "Centralized security visibility",
      "Auditable compliance posture",
    ],
  },
  {
    slug: "smart-cities-iot",
    icon: Building2,
    shortTitle: "Smart Cities & IoT",
    title: "Smart Cities, IoT & Intelligent Infrastructure",
    description:
      "Smart city and IoT solutions enable governments and organizations to create connected environments that improve urban efficiency, sustainability, and quality of life.",
    longDescription:
      "Through advanced sensors, data platforms, and connected infrastructure, iTechs helps cities and organizations monitor, manage, and optimize urban services and infrastructure systems.",
    tags: [
      "Integrated Security Systems",
      "Smart Infrastructure",
      "IoT Solutions",
    ],
    accent: "gold",
    features: [
      {
        title: "Smart Lighting Systems",
        desc: "Connected lighting infrastructure designed to optimize energy usage and improve public safety.",
      },
      {
        title: "Smart Parking Solutions",
        desc: "Digital parking management systems are designed to reduce congestion and improve traffic flow.",
      },
      {
        title: "Smart Metering Systems",
        desc: "Advanced monitoring systems for water, electricity, and energy usage.",
      },
      {
        title: "Environmental Monitoring Systems",
        desc: "Sensors are designed to monitor environmental conditions such as air quality, noise levels, and temperature.",
      },
      {
        title: "IoT Platforms",
        desc: "Integrated platforms that collect and analyze data from connected devices to support intelligent decision-making.",
      },
      {
        title: "Asset Tracking Systems",
        desc: "Real-time tracking solutions designed to monitor and manage critical infrastructure and assets.",
      },
    ],
    useCases: [
      "New cities and master-planned communities",
      "Government smart-city programs",
      "Campus and industrial parks",
      "Real estate developers and FM operators",
    ],
    outcomes: [
      "Lower operating costs",
      "Higher occupant and citizen satisfaction",
      "Measurable sustainability gains",
    ],
  },
  {
    slug: "command-control",
    icon: ShieldHalf,
    shortTitle: "Command & Control",
    title: "Command & Control Systems",
    description:
      "Command and control solutions enable organizations to monitor complex systems and manage operations through centralized control environments.",
    longDescription:
      "These solutions provide real-time monitoring, predictive analytics, and integrated decision support capabilities that improve operational visibility and response efficiency.",
    tags: ["Control Rooms", "PSIM", "Operations Centers"],
    accent: "electric",
    features: [
      {
        title: "Operations Centers",
        desc: "Centralized control environments designed to manage large-scale infrastructure and operations.",
      },
      {
        title: "Video Wall Systems",
        desc: "Large-scale visualization platforms designed to display real-time operational data and monitoring dashboards.",
      },
      {
        title: "Integrated Monitoring Platforms",
        desc: "Software platforms that aggregate data from multiple systems and provide centralized operational oversight.",
      },
      {
        title: "Incident Response Systems",
        desc: "Tools designed to manage operational incidents and coordinate rapid response.",
      },
    ],
    useCases: [
      "Government command centers",
      "Utility and transportation operators",
      "Enterprise SOC and NOC facilities",
      "Mega-event and venue control rooms",
    ],
    outcomes: [
      "Faster, coordinated decisions",
      "Single pane of glass across silos",
      "Resilient round-the-clock operations",
    ],
  },
  {
    slug: "audio-visual",
    icon: Airplay,
    shortTitle: "Audio Visual Solutions",
    title: "Audio Visual Solutions",
    description:
      "Audiovisual solutions support collaboration, communication, and operational visibility across corporate environments, control rooms, and public spaces.",
    longDescription:
      "These systems combine advanced display technologies, collaboration tools, and digital content platforms to create engaging and functional environments.",
    tags: ["Collaboration", "AV Systems", "Display Technology"],
    accent: "gold",
    features: [
      {
        title: "Control Room AV Systems",
        desc: "Integrated display and visualization technologies designed for operational environments.",
      },
      {
        title: "Conference and Collaboration Systems",
        desc: "Audio and video conferencing solutions that support modern workplace collaboration.",
      },
      {
        title: "Digital Signage",
        desc: "Content display systems used for communication, advertising, and information sharing.",
      },
      {
        title: "Large Format Display Systems",
        desc: "High-resolution displays are used for control rooms, public environments, and enterprise communication.",
      },
    ],
    useCases: [
      "Corporate headquarters",
      "Hospitality and conference venues",
      "Government and educational institutions",
      "Retail and experiential spaces",
    ],
    outcomes: [
      "Consistent user experience",
      "Higher meeting and space utilization",
      "Centralized AV operations",
    ],
  },
  {
    slug: "cybersecurity",
    icon: GlobeLock,
    shortTitle: "Cybersecurity",
    title: "Cybersecurity",
    description:
      "Cybersecurity solutions protect digital infrastructure and critical systems against cyber threats and unauthorized access.",
    longDescription:
      "Through advanced security frameworks and monitoring technologies, iTechs helps organizations safeguard sensitive data and maintain secure digital operations.",
    tags: ["Network Security", "Endpoint Protection", "Security Monitoring"],
    accent: "electric",
    features: [
      {
        title: "Network Security",
        desc: "Infrastructure protection solutions designed to prevent unauthorized network access.",
      },
      {
        title: "Security Monitoring",
        desc: "Continuous monitoring systems designed to detect and respond to security threats.",
      },
      {
        title: "Threat Detection Systems",
        desc: "Advanced tools used to identify vulnerabilities and prevent cyber attacks.",
      },
      {
        title: "Infrastructure Security",
        desc: "Security frameworks designed to protect digital infrastructure and enterprise systems.",
      },
    ],
    useCases: [
      "Banking and financial services",
      "Government and public sector",
      "Critical infrastructure operators",
      "Large enterprises and conglomerates",
    ],
    outcomes: [
      "Reduced breach risk",
      "Regulatory compliance",
      "Continuous threat visibility",
    ],
  },
  {
    slug: "network-it-infrastructure",
    icon: EthernetPort,
    shortTitle: "Network & IT Infrastructure",
    title: "Network & IT Infrastructure",
    description:
      "Reliable network infrastructure is essential for enabling modern digital environments and supporting connected technologies.",
    longDescription:
      "iTechs designs and deploys scalable network architectures that support enterprise connectivity, data transmission, and digital operations.",
    tags: ["Network Solutions", "IT Infrastructure", "Connectivity"],
    accent: "gold",
    features: [
      {
        title: "Network Infrastructure Design",
        desc: "Enterprise network architecture and deployment.",
      },
      {
        title: "Wireless Connectivity",
        desc: "Campus-wide wireless network solutions.",
      },
      {
        title: "SD-WAN & Routing",
        desc: "Application-aware multi-site connectivity with built-in security.",
      },
      {
        title: "Network Management Systems",
        desc: "Tools used to monitor and manage network performance",
      },
      {
        title: "SD-WAN Solutions",
        desc: "Advanced networking systems designed to improve network performance and reliability.",
      },
    ],
    useCases: [
      "Multi-site corporate networks",
      "Hotels, hospitals, and campuses",
      "Government data networks",
      "Data center and cloud edge",
    ],
    outcomes: [
      "Predictable performance",
      "Lower total cost of ownership",
      "Scalable, future-ready foundation",
    ],
  },
  {
    slug: "data-center",
    icon: HouseWifi,
    shortTitle: "Data Center Solutions",
    title: "Data Center Solutions",
    description:
      "Data centers form the backbone of modern digital infrastructure, supporting mission-critical applications and services.",
    longDescription:
      "iTechs provides comprehensive data center solutions designed to support enterprise computing, cloud services, and secure data storage.",
    tags: [
      "Mission-Critical Facilities",
      "Power & Cooling",
      "Security & Monitoring",
    ],
    accent: "electric",
    features: [
      {
        title: "Data Center Infrastructure",
        desc: "Design and deployment of enterprise data center environments.",
      },
      {
        title: "Prefabricated Data Centers",
        desc: "Modular data center solutions designed for rapid deployment.",
      },
      {
        title: "Network Integration",
        desc: "High-performance networking systems for data center environments.",
      },
    ],
    useCases: [
      "Enterprise primary and DR data centers",
      "Government cloud and sovereign workloads",
      "Telco and hyperscale edge",
      "AI and HPC environments",
    ],
    outcomes: [
      "Tier-aligned reliability",
      "Optimized PUE and energy use",
      "Scalable capacity planning",
    ],
  },
];

export const getSolutionBySlug = (slug: string) =>
  solutions.find((s) => s.slug === slug);
