export type Partner = {
  name: string;
  category: string;
  image: string;
};

export const partnerCategories: { title: string; description: string; partners: Partner[] }[] = [
  {
    title: "Audio Visual & Collaboration",
    description:
      "Premium AV, collaboration, and digital signage platforms for modern workplaces and venues.",
    partners: [
      {
        name: "Barco",
        category: "Audio Visual & Collaboration",
        image: "/partners/partner-1.svg",
      },
      {
        name: "Crestron",
        category: "Audio Visual & Collaboration",
        image: "/partners/partner-2.svg",
      },
      {
        name: "LG",
        category: "Audio Visual & Collaboration",
        image: "/partners/partner-3.svg",
      },
      {
        name: "Logitech",
        category: "Audio Visual & Collaboration",
        image: "/partners/partner-4.svg",
      },
      {
        name: "Poly",
        category: "Audio Visual & Collaboration",
        image: "/partners/partner-5.svg",
      },
      {
        name: "Samsung",
        category: "Audio Visual & Collaboration",
        image: "/partners/partner-6.svg",
      },
    ],
  },
  {
    title: "Cybersecurity",
    description:
      "Industry-leading cybersecurity platforms protecting digital infrastructure and critical systems.",
    partners: [
      {
        name: "Check Point",
        category: "Cybersecurity",
        image: "/partners/partner-7.svg",
      },
      {
        name: "Fortinet",
        category: "Cybersecurity",
        image: "/partners/partner-8.svg",
      },
      {
        name: "Palo Alto Networks",
        category: "Cybersecurity",
        image: "/partners/partner-9.svg",
      },
      {
        name: "Trend Micro",
        category: "Cybersecurity",
        image: "/partners/partner-10.svg",
      },
    ],
  },
  {
    title: "Data Center & Compute",
    description:
      "Mission-critical data center, server, storage, and power infrastructure platforms.",
    partners: [
      {
        name: "Dell Technologies",
        category: "Data Center & Compute",
        image: "/partners/partner-11.svg",
      },
      {
        name: "Eaton",
        category: "Data Center & Compute",
        image: "/partners/partner-12.svg",
      },
      {
        name: "HPE",
        category: "Data Center & Compute",
        image: "/partners/partner-13.svg",
      },
      {
        name: "Lenovo",
        category: "Data Center & Compute",
        image: "/partners/partner-14.svg",
      },
      {
        name: "Schneider Electric",
        category: "Data Center & Compute",
        image: "/partners/partner-15.svg",
      },
      {
        name: "Vertiv",
        category: "Data Center & Compute",
        image: "/partners/partner-16.svg",
      },
    ],
  },
  {
    title: "Networking & Infrastructure",
    description:
      "Enterprise-grade networking, wireless, and SD-WAN platforms powering connected environments.",
    partners: [
      {
        name: "Aruba",
        category: "Networking & Infrastructure",
        image: "/partners/partner-17.svg",
      },
      {
        name: "Cisco",
        category: "Networking & Infrastructure",
        image: "/partners/partner-18.svg",
      },
      {
        name: "CommScope",
        category: "Networking & Infrastructure",
        image: "/partners/partner-19.svg",
      },
      {
        name: "Extreme Networks",
        category: "Networking & Infrastructure",
        image: "/partners/partner-20.svg",
      },
      {
        name: "Juniper Networks",
        category: "Networking & Infrastructure",
        image: "/partners/partner-21.svg",
      },
      {
        name: "Panduit",
        category: "Networking & Infrastructure",
        image: "/partners/partner-22.svg",
      },
    ],
  },

  {
    title: "Security & Surveillance",
    description:
      "Advanced video surveillance, access control, and integrated physical security technologies.",
    partners: [
      {
        name: "Axis Communications",
        category: "Security & Surveillance",
        image: "/partners/partner-23.svg",
      },
      {
        name: "Bosch",
        category: "Security & Surveillance",
        image: "/partners/partner-24.svg",
      },
      {
        name: "Dahua",
        category: "Security & Surveillance",
        image: "/partners/partner-25.svg",
      },
      {
        name: "Genetec",
        category: "Security & Surveillance",
        image: "/partners/partner-26.svg",
      },
      {
        name: "Hikvision",
        category: "Security & Surveillance",
        image: "/partners/partner-27.svg",
      },
      {
        name: "Milestone",
        category: "Security & Surveillance",
        image: "/partners/partner-28.svg",
      },
    ],
  },
  {
    title: "Smart Buildings & IoT",
    description:
      "Intelligent building automation, IoT, and smart infrastructure technology providers.",
    partners: [
      {
        name: "ABB",
        category: "Smart Buildings & IoT",
        image: "/partners/partner-29.svg",
      },
      {
        name: "Honeywell",
        category: "Smart Buildings & IoT",
        image: "/partners/partner-30.svg",
      },
      {
        name: "Johnson Controls",
        category: "Smart Buildings & IoT",
        image: "/partners/partner-31.svg",
      },
      {
        name: "Siemens",
        category: "Smart Buildings & IoT",
        image: "/partners/partner-32.svg",
      },
    ],
  },
];
