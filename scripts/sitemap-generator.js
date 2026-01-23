const BASE_URL = 'https://lightech.com.sa';
const LANGS = ['en', 'ar'];

const urls = [];

/* Static pages */
const STATIC_PAGES = [
  '/',
  '/about/',
  '/services/',
  '/services/lighting/',
  '/services/wiringDevices/',
  '/services/controlSystems/',
  '/services/renewables/',
  '/projects/',
  '/contact/',
];

const Services = [
    {
        slug:'lighting'
    },
    {
        slug:'wiringDevices'
    },
    {
        slug:'controlSystems'
    },
    {
        slug:'renewables'
    },
    ]
const Projects= [
    {
      "category": "Governmental Projects",
      "id": "G001",
            "title": "Nujuma Ritz-Carlton Hotel The St. Regis",
      "client": "Red Sea Global",
      "service": "Supply of Internal & External Lighting Fixtures",
      "location": "Ummahat Islands, Red Sea",
      featured:true
    },
    {
      "category": "Governmental Projects",
      "id": "G012",
            "title": "The St. Regis",
      "client": " Red Sea Golbal",
      "service": "Supply of Internal & External Lighting Fixtures",
      "location": "Ummahat Islands, Red Sea",
      "featured":true
    },
    {
      "category": "Governmental Projects",
      "id": "G003",
            "title": "Desert Rock",
      "client": "Red Sea Global",
      "service": "Supply of Indoor Lighting Fittings",
      "location": "Red Sea",
      featured:true
    },
    {
      "category": "Governmental Projects",
      "id": "G002",
            "title": "NEOM Sindalah Island",
      "client": "NEOM",
      "service": "Supply of Internal Lighting Fittings",
      "location": "Neom",
      featured:true
    },
    
    {
      "category": "Governmental Projects",
      "id": "G004",
            "title": "Riyadh Metro Project",
      "client": "Riyadh Development Authority",
      "service": "Supply of Stations Lighting",
      "location": "Riyadh",
      featured:true
    },
    {
      "category": "Governmental Projects",
      "id": "G005",
            "title": "Saudi Arabia Railways - SAR",
      "client": "Saudi Arabia Railways",
      "service": "Supply of Standard & Custom Made Lighting Fixtures For Main Stations",
      "location": "Western Regions",
      featured:true

    },
    {
      "category": "Governmental Projects",
      "id": "G006",
            "title": "Alinma Stadium King Abdullah Sports City",
      "client": "ARAMCO",
      "service": "Supply of Façade & Sports Lighting Fittings",
      "location": "Jeddah",
      featured:true

    },
    {
      "category": "Governmental Projects",
      "id": "G007",
            "title": "Quba Mosque",
      "client": "Amana Almadinah",
      "service": "Supply of Façade Lighting Fittings",
      "location": "Al Madinah Al Munawwarah",
      featured:true

    },
   
    {
      "category": "Governmental Projects",
      "id": "G009",
            "title": "King Salman Tunnels",
      "client": "King Salman Park Foundation",
      "service": "Supply of Tunnel, Street & Landscape Light Fittings",
      "location": "Riyadh",
      // featured:true

    },
     {
      "category": "Hotels Projects",
      "id": "H005",
           "title": "JODP Phase 2",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Makkah Al Mukarramah",
      featured:true
    },
     {
      "category": "Governmental Projects",
      "id": "G008",
            "title": "Ministry of Finance",
      "client": "Ministry of Finance",
      "service": "Supply of Landscape Lighting",
      "location": "Riyadh",
      // featured:true
    },
    {
      "category": "Governmental Projects",
      "id": "G010",
            "title": "King Abdulaziz International Airport",
      "client": "General Authority of Civil Aviation (GACA)",
      "service": "Supply of Indoor & Outdoor Lighting Fittings",
      "location": "Jeddah",
      // featured:true

    },
    {
      "category": "Governmental Projects",
      "id": "G011",
            "title": "King Abdullah Petroleum Studies & Research Center Residential Community - KAPSARC RC",
      "client": "ARAMCO",
      "service": "Design & Supply of Internal & External Lighting Fittings First Platinum LEED Certified Project in MENA",
      "location": "Riyadh",
      // featured:true

    },
    
    {
      "category": "Educational Projects",
      "id": "E001",
            "title": "Princess Nourah University - PNU",
      "client": "Princess Nourah Bint Abdulrahman University",
      "service": "Supply of Internal & External Lighting Fittings",
      "location": "Riyadh",
      featured:true
    },
    {
      "category": "Educational Projects",
      "id": "E002",
            "title": "King Abdullah Petroleum Studies & Research Center - KAPSARC ICONIC",
      "client": "King Abdullah Petroleum Studies and Research Center (KAPSARC)",
      "service": "Design & Supply of High End Custom Made Internal & External Lighting Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Educational Projects",
      "id": "E003",
            "title": "King Abdullah Foundation - Convention Center",
      "client": "King Abdullah Foundation",
      "service": "Supply of Internal & External Lighting Fittings",
      "location": ""
    },
    {
      "category": "Educational Projects",
      "id": "E004",
            "title": "King Abdulaziz Center for World Culture",
      "client": "ARAMCO",
      "service": "Supply of Internal Lighting Fittings",
      "location": "Dhahran"
    },
    {
      "category": "Towers Projects",
      "id": "T001",
            "title": "Golden Tower",
      "client": "Golden Tower",
      "service": "Supply of Façade Lighting Fittings",
      "location": "Jeddah",
      featured:true
    },
    {
      "category": "Towers Projects",
      "id": "T002",
            "title": "The Public Investment Fund Tower - PIF",
      "client": "PIF",
      "service": "Supply of Indoor & Façade Lighting Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Hotels Projects",
      "id": "H001",
            "title": "Mandarin Oriental Al Faisaliah",
      "client": "Mandarin Oriental Al Faisaliah",
      "service": "Supply of Indoor Lighting & Lighting Control System",
      "location": "Riyadh"
    },
    {
      "category": "Hotels Projects",
      "id": "H002",
           "title": "Aqua Raffles",
      "client": "Aqua Raffles Hotel",
      "service": "Supply of Indoor & Outdoor Lighting Fittings",
      "location": "Jeddah",
      featured:true
    },
    {
      "category": "Hotels Projects",
      "id": "H003",
            "title": "Marriott Hotel",
      "client": "DUR",
      "service": "Supply of Indoor & Outdoor lighting Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Hotels Projects",
      "id": "H004",
            "title": "Hilton Hotel",
      "client": "Hilton",
      "service": "Supply of Indoor & Outdoor lighting Fittings",
      "location": "Riyadh"
    },
   
    {
      "category": "Hotels Projects",
      "id": "H006",
      "title": "JODP Phase 3 - Address Hotel",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Makkah Al Mukarramah"
    },
    {
      "category": "Hotels Projects",
      "id": "H007",
      "title": "JODP Phase 3 - DoubleTree by Hilton",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Makkah Al Mukarramah"
    },
    {
      "category": "Hotels Projects",
      "id": "H008",
      "title": "JODP Phase 4 - The Alana Hotel",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Makkah Al Mukarramah"
    },
    {
      "category": "Hotels Projects",
      "id": "H009",
      "title": "JODP Phase 4 - H Hotel",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Makkah Al Mukarramah"
    },
    {
      "category": "Hotels Projects",
      "id": "H010",
      "title": "JODP Phase 4 - Alana Royal",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Makkah Al Mukarramah"
    },
    {
      "category": "Hotels Projects",
      "id": "H011",
      "title": "Rotana Hotel",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Hotels Projects",
      "id": "H012",
      "title": "MARRIOTT Hotel",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Hotels Projects",
      "id": "H013",
      "title": "Half Moon Bay Resort",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Dammam"
    },
    {
      "category": "Hotels Projects",
      "id": "H014",
      "title": "Intercontinental Hotel (Extension)",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Khobar"
    },
    {
      "category": "Hotels Projects",
      "id": "H015",
      "title": "Fairmont Hotel",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Hotels Projects",
      "id": "H016",
      "title": "Sheraton Hotel",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Makkah"
    },
    {
      "category": "Hotels Projects",
      "id": "H017",
      "title": "Copthorn Hotel",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Makkah"
    },
    {
      "category": "Hotels Projects",
      "id": "H018",
      "title": "MILLENNIUM Hotel",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Makkah"
    },
    {
      "category": "Hotels Projects",
      "id": "H019",
            "title": "MAAD Towers",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Makkah"
    },
    {
      "category": "Hotels Projects",
      "id": "H020",
      "title": "RADISSON BLU Hotel",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Projects",
      "id": "P001",
            "title": "King Salman Social Center - KSSC",
      "client": "King Salman Social Center",
      "service": "Supply of Internal Lighting Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Projects",
      "id": "P002",
            "title": "Andalusia Hospital",
      "client": "Andalusia Health",
      "service": "Supply of Architectural, Decorative & Facade Lighting Fixtures",
      "location": "Jeddah"
    },
    {
      "category": "Projects",
      "id": "P003",
            "title": "Riyadh Bank",
      "client": "Riyadh Bank",
      "service": "Supply of Indoor Lighting Fixtures",
      "location": "Riyadh"
    },
    {
      "category": "Projects",
      "id": "P004",
            "title": "Swailem Tower Riyadh",
      "client": "Alswailem",
      "service": "Supply of Façade Lighting Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Projects",
      "id": "P005",
      "title": "The Avenue, Al Rashed Mall Dhahran",
      "client": "Al Rashed Mall",
      "service": "Supply of Internal Lighting Fittings",
      "location": "Dhahran"
    },
    {
      "category": "Projects",
      "id": "P006",
            "title": "Cosefan",
      "client": "Cosefan",
      "service": "Supply of Indoor & Decorative Lighting Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Projects",
      "id": "P007",
            "title": "Bentley Showroom",
      "client": "Bentley Co",
      "service": "Supply of Indoor Lighting Fittings",
      "location": "Riyadh",
      featured:true
    },
    {
      "category": "Projects",
      "id": "P008",
            "title": "Yunbu Export Refinery",
      "client": "ARAMCO",
      "service": "Supply of Industrial Lighting",
      "location": "Yunbu"
    },
    {
      "category": "Restaurants",
      "id": "R001",
            "title": "La Duree Riyadh",
      "client": "Le Duree",
      "service": "Supply of Decorative Lighting Fittings",
      "location": "Riyadh",
      featured:true
    },
    {
      "category": "Restaurants",
      "id": "R002",
      "title": "Waraqat Café",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Restaurants",
      "id": "R003",
      "title": "77 Restaurant",
      "client": "",
      "service": "",
      "location": "Jeddah"
    },
    {
      "category": "Restaurants",
      "id": "R004",
      "title": "French Café",
      "client": "",
      "service": "",
      "location": "Khobar"
    },
    {
      "category": "Restaurants",
      "id": "R005",
      "title": "Le Café",
      "client": "",
      "service": "",
      "location": "Jubail"
    },
    {
      "category": "Restaurants",
      "id": "R006",
      "title": "Casper & Gambini's",
      "client": "",
      "service": "",
      "location": "Jeddah"
    },
    {
      "category": "Restaurants",
      "id": "R007",
      "title": "Wooden Bakery",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Restaurants",
      "id": "R008",
      "title": "La Duree",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Restaurants",
      "id": "R009",
      "title": "Shababik",
      "client": "",
      "service": "",
      "location": "Jeddah"
    },
    {
      "category": "Car Showrooms",
      "id": "C001",
            "title": "Al Naghi",
      "client": "NAGHI Motors LLC",
      "service": "Supply of Indoor Lighting Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Car Showrooms",
      "id": "C002",
      "title": "Infinity Showroom",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Car Showrooms",
      "id": "C003",
      "title": "Infinity Showroom",
      "client": "",
      "service": "",
      "location": "Khobar"
    },
    {
      "category": "Car Showrooms",
      "id": "C004",
      "title": "Jaguar & Landrover Showroom",
      "client": "",
      "service": "",
      "location": "Jeddah"
    },
    {
      "category": "Car Showrooms",
      "id": "C005",
      "title": "Volkswagen Showroom",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Car Showrooms",
      "id": "C006",
      "title": "Bally Showroom",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Car Showrooms",
      "id": "C007",
      "title": "Faisaliah Apple Showroom",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Car Showrooms",
      "id": "C008",
      "title": "Electro Showroom",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Retail Outlets",
      "id": "RT001",
      
      "title": "Riyadh International Exhibition Center",
      "client": "RICEC",
      "service": "Supply of Indoor & Outdoor Lighting Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Retail Outlets",
      "id": "RT002",
      "title": "The Avenue, Al Rashed Mall",
      "client": "",
      "service": "",
      "location": "Dhahran"
    },
    {
      "category": "Retail Outlets",
      "id": "RT003",
      "title": "Al Noor Mall",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Retail Outlets",
      "id": "RT004",
      "title": "Mall of Arabia",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Retail Outlets",
      "id": "RT005",
      "title": "Galleria Mall",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Retail Outlets",
      "id": "RT006",
      "title": "Panda Supermarkets",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Retail Outlets",
      "id": "RT007",
      "title": "Centria Mall",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Retail Outlets",
      "id": "RT008",
      "title": "Polo Ralph Lauren",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Retail Outlets",
      "id": "RT009",
      "title": "Polo Ralph Lauren",
      "client": "",
      "service": "",
      "location": "Jeddah"
    },
    {
      "category": "Corporate",
      "id": "CO001",
      
      "title": "El Seif Head Office",
      "client": "El-Seif Engineering Contracting",
      "service": "Supply of Internal & External Lighting Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Corporate",
      "id": "CO002",
      "title": "KAFD Parcels",
      "client": "",
      "service": "",
      "location": ""
    },
    {
      "category": "Corporate",
      "id": "CO003",
      "title": "Lulwa Tower",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Corporate",
      "id": "CO004",
      "title": "Kazakhstan Embassy Diplomatic Quarter",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Corporate",
      "id": "CO005",
      "title": "Aramco North Park",
      "client": "",
      "service": "",
      "location": "Dhahran"
    },
    {
      "category": "Corporate",
      "id": "CO006",
      "title": "Al Ajou Head Office Building",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Corporate",
      "id": "CO007",
      "title": "SALAMA Commercial Complex",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Corporate",
      "id": "CO008",
      "title": "Al Safwa Commercial & Office Center Building",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Corporate",
      "id": "CO009",
      "title": "IT Future Center Kettaneh HQ",
      "client": "",
      "service": "",
      "location": "Khobar"
    },
    {
      "category": "Corporate",
      "id": "CO010",
      "title": "Rawabi HQ",
      "client": "",
      "service": "",
      "location": "Khobar"
    },
    {
      "category": "Private Residence",
      "id": "PR001",
      
      "title": "Al Rajhi Palace",
      "client": "Dr. Abdulrahman Al Rajhi",
      "service": "Supply of Internal & External Lighting Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Private Residence",
      "id": "PR002",
      "title": "BSS Private Residence",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Private Residence",
      "id": "PR003",
      "title": "Kologhassi Villa",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Private Residence",
      "id": "PR004",
      "title": "MES Villa",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Private Residence",
      "id": "PR005",
      "title": "EB Residence",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Private Residence",
      "id": "PR006",
      "title": "AT Villa",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Private Residence",
      "id": "PR007",
      "title": "MT Villa",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Private Residence",
      "id": "PR008",
      "title": "AAF Beach House",
      "client": "",
      "service": "",
      "location": "Azziziyah"
    },
    {
      "category": "Private Residence",
      "id": "PR009",
      "title": "Riyadh Residence",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Private Residence",
      "id": "PR010",
      "title": "VIP Palace",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Private Residence",
      "id": "PR011",
      "title": "MAJ Palace",
      "client": "",
      "service": "",
      "location": "Jeddah"
    },
    {
      "category": "Private Residence",
      "id": "PR012",
      "title": "AAF Khobar Villa",
      "client": "",
      "service": "",
      "location": "Khobar"
    },
    {
      "category": "Private Residence",
      "id": "PR013",
      "title": "Hossa Palace",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Private Residence",
      "id": "PR014",
      "title": "Noura Palace",
      "client": "",
      "service": "",
      "location": "Jeddah"
    },
    {
      "category": "Private Residence",
      "id": "PR015",
      "title": "Reema Palace",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Hotels Projects",
      "id": "H021",
      "title": "Al Bustan Compound",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Hotels Projects",
      "id": "H022",
      "title": "Samriyah Farm",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Hotels Projects",
      "id": "H023",
      "title": "Nofa Equestrian Resort",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Riyadh"
    }
    ];

STATIC_PAGES.forEach((page) => {
  urls.push(`
  <url>
    <loc>${BASE_URL}/en${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  `);

  urls.push(`
  <url>
    <loc>${BASE_URL}/ar${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
  `);
});

/* Project pages */
Projects.forEach((project) => {
  urls.push(`
  <url>
    <loc>${BASE_URL}/en/projects/${project.title.trim().toLowerCase().replace(/\s+/g, '-')}/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  `);

  urls.push(`
  <url>
    <loc>${BASE_URL}/ar/projects/${project.title.trim().toLowerCase().replace(/\s+/g, '-')}/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  `);
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;



console.log(sitemap)