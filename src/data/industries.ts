import {
  Building,
  Landmark,
  Cog,
  Hospital,
  School,
  type LucideIcon,
} from "lucide-react";
import realEstateImg from "@/assets/industries/real-estate.jpg";
import governmentImg from "@/assets/industries/government.jpg";
import infrastructureImg from "@/assets/industries/infrastructure.jpg";
import hospitalityImg from "@/assets/industries/hospitality.jpg";
import educationImg from "@/assets/industries/education.jpg";

export type Industry = {
  slug: string;
  icon: LucideIcon;
  image: string;
  shortTitle: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  accent: "electric" | "gold";
  challenges: { title: string; desc: string }[];
  capabilities: string[];
  outcomes: string[];
};

export const industries: Industry[] = [
  {
    slug: "real-estate-development",
    icon: Building,
    image: realEstateImg,
    shortTitle: "Real Estate Development",
    title: "Real Estate Development",
    description:
      "Technology solutions designed to support the planning, construction, and operation of large-scale real estate developments and mixed-use communities.",
    longDescription:
      "iTechs integrates intelligent infrastructure systems that allow developers and operators to monitor, secure, and manage entire developments from centralized platforms.",
    tags: ["Secure", "Connected", "Operationally Efficient Communities"],
    accent: "gold",
    challenges: [
      {
        title: "Compound Security Systems",
        desc: "Including perimeter surveillance, access control gates, and license plate recognition for residents and visitors",
      },
      {
        title: "Smart Building Infrastructure",
        desc: "integrating CCTV, fire alarms, access control, and building management systems.",
      },
      {
        title: "Centralized Command Centers",
        desc: "For monitoring multiple buildings or communities from a single operations room.",
      },
      {
        title: "Community Wi-Fi Networks",
        desc: "Providing reliable connectivity across residential compounds and public areas.",
      },
      {
        title: "Smart Parking Systems",
        desc: "Allowing real-time parking monitoring and automated access.",
      },
      {
        title: "Digital Signage & Information Displays",
        desc: "Across malls, business districts, and shared spaces.",
      },
    ],
    capabilities: [
      "Integrated security and access control across communities",
      "Smart building management and IoT platforms",
      "Structured cabling and enterprise-grade networks",
      "Command centers for community operations",
      "Digital signage and resident engagement systems",
    ],
    outcomes: [
      "Higher asset value and tenant satisfaction",
      "Lower operational and energy costs",
      "Single operational view across the development",
    ],
  },
  {
    slug: "government-smart-cities",
    icon: Landmark,
    image: governmentImg,
    shortTitle: "Government & Smart Cities",
    title: "Government & Smart Cities",
    description:
      "Technology platforms designed to support government agencies and smart city programs with secure, scalable, and citizen-centric digital infrastructure.",
    longDescription:
      "iTechs deploys integrated systems that provide real-time visibility into city operations, allowing authorities to monitor infrastructure, coordinate responses, and improve service delivery.",
    tags: ["Safer", "Smarter", "Efficient Urban Environments"],
    accent: "electric",
    challenges: [
      {
        title: "City Surveillance Platforms",
        desc: "Integrating thousands of cameras across urban environments.",
      },
      {
        title: "Command & Control Centers",
        desc: "Used by municipalities to monitor traffic, public safety, and city infrastructure.",
      },
      {
        title: "Smart Lighting Systems",
        desc: "That automatically adjust based on traffic and environmental conditions.",
      },
      {
        title: "IoT Sensor Networks",
        desc: "For monitoring air quality, environmental conditions, and infrastructure performance.",
      },
      {
        title: "Smart Traffic Monitoring Systems",
        desc: "For congestion management and traffic analysis.",
      },
      {
        title: "Emergency Response Coordination Systems ",
        desc: "Enable authorities to manage incidents through centralized dashboards.",
      },
    ],
    capabilities: [
      "Citywide surveillance and facial recognition",
      "Integrated command and control centers",
      "Smart lighting, parking, and environmental monitoring",
      "Sovereign data centers and cybersecurity",
      "Government-grade networks and connectivity",
    ],
    outcomes: [
      "Improved citizen safety and services",
      "Measurable sustainability and efficiency gains",
      "Resilient, future-ready public infrastructure",
    ],
  },
  {
    slug: "infrastructure-contractors",
    icon: Cog,
    image: infrastructureImg,
    shortTitle: "Infrastructure & Contractors",
    title: "Infrastructure & Contractors",
    description:
      "Technology integration solutions designed to support contractors and infrastructure developers through every phase of complex construction projects.",
    longDescription:
      "iTechs works alongside contractors and engineering firms to integrate technology infrastructure within complex developments such as airports, transportation hubs, utilities, and large public facilities.",
    tags: ["Securely", "Efficiently", "Full operational visibility"],
    accent: "gold",
    challenges: [
      {
        title: "Integrated Security Systems",
        desc: "Across transportation hubs, infrastructure facilities, and public buildings.",
      },
      {
        title: "Command & Control Rooms",
        desc: "Used to monitor operations and infrastructure performance.",
      },
      {
        title: "Network Infrastructure Deployment",
        desc: "Including fiber networks, wireless coverage, and data communication systems.",
      },
      {
        title: "Video Surveillance for Large Sites",
        desc: "Covering construction areas, operational zones, and public spaces.",
      },
      {
        title: "Public Address and Emergency Communication Systems",
        desc: "Across infrastructure facilities.",
      },
      {
        title: "Operational Monitoring Platforms ",
        desc: "Allow operators to track facility performance in real time.",
      },
    ],
    capabilities: [
      "Design, supply, install, and commission (DSIC) services",
      "Structured cabling and ELV infrastructure",
      "Security, AV, and BMS integration",
      "Data center and network deployment",
      "Testing, commissioning, and handover",
    ],
    outcomes: [
      "On-time, on-spec project delivery",
      "Reduced rework and integration risk",
      "Trusted long-term technology partner",
    ],
  },
  {
    slug: "hospitality-tourism",
    icon: Hospital,
    image: hospitalityImg,
    shortTitle: "Hospitality & Tourism",
    title: "Hospitality & Tourism",
    description:
      "Technology systems designed to improve guest experience, operational efficiency, and facility management across hotels, resorts, and tourism destinations.",
    longDescription:
      "iTechs integrates smart hospitality technologies that allow hotel operators to manage guest services, building systems, and security through unified platforms.",
    tags: ["Modern", "Connected guest experiences", "Operational efficiency"],
    accent: "electric",
    challenges: [
      {
        title: "Smart Room Control Systems",
        desc: "Allowing guests to control lighting, temperature, and services through integrated interfaces.",
      },
      {
        title: "Hotel Security Systems",
        desc: "Including access control, CCTV, and perimeter monitoring.",
      },
      {
        title: "IPTV and Guest Entertainment Platforms",
        desc: "Providing digital entertainment and information services in rooms.",
      },
      {
        title: "Conference and Event AV Systems",
        desc: "Supporting meetings, events, and hospitality venues.",
      },
      {
        title: "Digital Signage Systems",
        desc: "For guest communication across hotels and resorts.",
      },
      {
        title: "Network Infrastructure & Wi-Fi",
        desc: "Delivering reliable connectivity across guest rooms and public spaces.",
      },
    ],
    capabilities: [
      "Hotel-grade Wi-Fi and structured cabling",
      "Integrated security, CCTV, and access control",
      "AV, digital signage, and conferencing systems",
      "Building management and IoT integration",
      "IPTV and guest-facing technology platforms",
    ],
    outcomes: [
      "Higher guest satisfaction and reviews",
      "Streamlined operations and lower costs",
      "Brand-compliant, future-proof properties",
    ],
  },
  {
    slug: "education-smart-campuses",
    icon: School,
    image: educationImg,
    shortTitle: "Education & Smart Campuses",
    title: "Education & Smart Campuses",
    description:
      "Integrated campus technologies designed to support modern educational environments, hybrid learning, and secure, connected student experiences.",
    longDescription:
      "iTechs provides solutions that enable universities and schools to create safe, digitally enabled campuses that support both academic and operational needs.",
    tags: ["Smart Campuses", "Hybrid Learning", "Campus Security"],
    accent: "gold",
    challenges: [
      {
        title: "Campus Security Systems",
        desc: "Including surveillance, access control, and visitor management.",
      },
      {
        title: "Smart Classroom AV Systems",
        desc: "Enabling digital learning, hybrid teaching, and collaboration.",
      },
      {
        title: "Campus Wi-Fi Infrastructure",
        desc: "Providing reliable connectivity across lecture halls, dormitories, and public areas.",
      },
      {
        title: "Command & Control Rooms",
        desc: "For campus security and operations monitoring.",
      },
      {
        title: "Digital Signage Platforms",
        desc: "Used for announcements, campus information, and events.",
      },
      {
        title: "Emergency Notification Systems",
        desc: "Ensuring rapid communication during campus incidents.",
      },
    ],
    capabilities: [
      "Campus-wide wireless and structured networks",
      "Smart classrooms and lecture capture AV",
      "Integrated security and access control",
      "Digital signage and wayfinding",
      "Data center and cybersecurity for academia",
    ],
    outcomes: [
      "Enhanced learning and teaching experience",
      "Safer, more efficient campus operations",
      "Scalable foundation for digital education",
    ],
  },
];

export const getIndustryBySlug = (slug: string) =>
  industries.find((i) => i.slug === slug);
