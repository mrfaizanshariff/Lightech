export interface Project {
    id: string;
    title: string;
    category: string;
    image: string;
    location: string;
    client:string;
    year?: number;
    service?:string;
    featured?:boolean;
  }
import C001 from '../public/assets/C001.jpg'
import CO001 from '../public/assets/CO001.jpg'
import P001 from '../public/assets/P001.jpg'
import P002 from '../public/assets/P002.jpg'
import P003 from '../public/assets/P003.jpg'
import P007 from '../public/assets/P007.jpg'
import PR001 from '../public/assets/PR001.jpg'
import R001 from '../public/assets/R001.jpg'
import RT001 from '../public/assets/RT001.jpg'
import T001 from '../public/assets/T001.jpg'
import T002 from '../public/assets/T002.jpg'
import H001 from '../public/assets/H001.jpg'
import H002 from '../public/assets/H002.jpg'
import H003 from '../public/assets/H003.jpg'
import H004 from '../public/assets/H004.jpg'
import H005 from '../public/assets/H005.jpg'
import E001 from '../public/assets/E001.jpg'
import E002 from '../public/assets/E002.jpg'
import E003 from '../public/assets/E003.jpg'
import E004 from '../public/assets/E004.jpg'
import G001 from '../public/assets/G001.jpg'
import G002 from '../public/assets/G002.jpg'
import G003 from '../public/assets/G003.jpg'
import G004 from '../public/assets/G004.jpg'
import G005 from '../public/assets/G005.jpg'
import G006 from '../public/assets/G006.jpg'
import G007 from '../public/assets/G007.jpg'
import G012 from '../public/assets/G012.jpg'
import G013 from '../public/assets/G013_KingSalmanTunnels.jpg'
import G014 from '../public/assets/G014_AirportCity.jpg'
import G015 from '../public/assets/G015_ministryOfFinance.jpg'
export const projects:Project[]=[
    {
      "category": "Governmental Projects",
      "id": "G001",
      "image": G001.src,
      "title": "Nujuma Ritz-Carlton Hotel The St. Regis",
      "client": "Red Sea Global",
      "service": "Supply of Internal & External Lighting Fixtures",
      "location": "Ummahat Islands, Red Sea",
      featured:true
    },
    {
      "category": "Governmental Projects",
      "id": "G012",
      "image": G012.src,
      "title": "The St. Regis",
      "client": " Red Sea Golbal",
      "service": "Supply of Internal & External Lighting Fixtures",
      "location": "Ummahat Islands, Red Sea",
      "featured":true
    },
    {
      "category": "Governmental Projects",
      "id": "G003",
      "image": G003.src,
      "title": "Desert Rock",
      "client": "Red Sea Global",
      "service": "Supply of Indoor Lighting Fittings",
      "location": "Red Sea",
      featured:true
    },
    {
      "category": "Governmental Projects",
      "id": "G002",
      "image": G002.src,
      "title": "NEOM Sindalah Island",
      "client": "NEOM",
      "service": "Supply of Internal Lighting Fittings",
      "location": "Neom",
      featured:true
    },
    
    {
      "category": "Governmental Projects",
      "id": "G004",
      "image": G004.src,
      "title": "Riyadh Metro Project",
      "client": "Riyadh Development Authority",
      "service": "Supply of Stations Lighting",
      "location": "Riyadh",
      featured:true
    },
    {
      "category": "Governmental Projects",
      "id": "G005",
      "image": G005.src,
      "title": "Saudi Arabia Railways - SAR",
      "client": "Saudi Arabia Railways",
      "service": "Supply of Standard & Custom Made Lighting Fixtures For Main Stations",
      "location": "Western Regions",
      featured:true

    },
    {
      "category": "Governmental Projects",
      "id": "G006",
      "image": G006.src,
      "title": "Alinma Stadium King Abdullah Sports City",
      "client": "ARAMCO",
      "service": "Supply of Façade & Sports Lighting Fittings",
      "location": "Jeddah",
      featured:true

    },
    {
      "category": "Governmental Projects",
      "id": "G007",
      "image": G007.src,
      "title": "Quba Mosque",
      "client": "Amana Almadinah",
      "service": "Supply of Façade Lighting Fittings",
      "location": "Al Madinah Al Munawwarah",
      featured:true

    },
   
    {
      "category": "Governmental Projects",
      "id": "G009",
      "image": G013.src,
      "title": "King Salman Tunnels",
      "client": "King Salman Park Foundation",
      "service": "Supply of Tunnel, Street & Landscape Light Fittings",
      "location": "Riyadh",
      // featured:true

    },
     {
      "category": "Hotels Projects",
      "id": "H005",
      "image":H005.src,
      "title": "JODP Phase 2",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Makkah Al Mukarramah",
      featured:true
    },
     {
      "category": "Governmental Projects",
      "id": "G008",
      "image": G015.src,
      "title": "Ministry of Finance",
      "client": "Ministry of Finance",
      "service": "Supply of Landscape Lighting",
      "location": "Riyadh",
      // featured:true
    },
    {
      "category": "Governmental Projects",
      "id": "G010",
      "image": G014.src,
      "title": "King Abdulaziz International Airport",
      "client": "General Authority of Civil Aviation (GACA)",
      "service": "Supply of Indoor & Outdoor Lighting Fittings",
      "location": "Jeddah",
      // featured:true

    },
    {
      "category": "Governmental Projects",
      "id": "G011",
      "image": "",
      "title": "King Abdullah Petroleum Studies & Research Center Residential Community - KAPSARC RC",
      "client": "ARAMCO",
      "service": "Design & Supply of Internal & External Lighting Fittings First Platinum LEED Certified Project in MENA",
      "location": "Riyadh",
      // featured:true

    },
    
    {
      "category": "Educational Projects",
      "id": "E001",
      "image": E001.src,
      "title": "Princess Nourah University - PNU",
      "client": "Princess Nourah Bint Abdulrahman University",
      "service": "Supply of Internal & External Lighting Fittings",
      "location": "Riyadh",
      featured:true
    },
    {
      "category": "Educational Projects",
      "id": "E002",
      "image": E002.src,
      "title": "King Abdullah Petroleum Studies & Research Center - KAPSARC ICONIC",
      "client": "King Abdullah Petroleum Studies and Research Center (KAPSARC)",
      "service": "Design & Supply of High End Custom Made Internal & External Lighting Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Educational Projects",
      "id": "E003",
      "image": E003.src,
      "title": "King Abdullah Foundation - Convention Center",
      "client": "King Abdullah Foundation",
      "service": "Supply of Internal & External Lighting Fittings",
      "location": ""
    },
    {
      "category": "Educational Projects",
      "id": "E004",
      "image": E004.src,
      "title": "King Abdulaziz Center for World Culture",
      "client": "ARAMCO",
      "service": "Supply of Internal Lighting Fittings",
      "location": "Dhahran"
    },
    {
      "category": "Towers Projects",
      "id": "T001",
      "image": T001.src,
      "title": "Golden Tower",
      "client": "Golden Tower",
      "service": "Supply of Façade Lighting Fittings",
      "location": "Jeddah",
      featured:true
    },
    {
      "category": "Towers Projects",
      "id": "T002",
      "image": T002.src,
      "title": "The Public Investment Fund Tower - PIF",
      "client": "PIF",
      "service": "Supply of Indoor & Façade Lighting Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Hotels Projects",
      "id": "H001",
      "image": H001.src,
      "title": "Mandarin Oriental Al Faisaliah",
      "client": "Mandarin Oriental Al Faisaliah",
      "service": "Supply of Indoor Lighting & Lighting Control System",
      "location": "Riyadh"
    },
    {
      "category": "Hotels Projects",
      "id": "H002",
      "image":H002.src,
      "title": "Aqua Raffles",
      "client": "Aqua Raffles Hotel",
      "service": "Supply of Indoor & Outdoor Lighting Fittings",
      "location": "Jeddah",
      featured:true
    },
    {
      "category": "Hotels Projects",
      "id": "H003",
      "image": H003.src,
      "title": "Marriott Hotel",
      "client": "DUR",
      "service": "Supply of Indoor & Outdoor lighting Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Hotels Projects",
      "id": "H004",
      "image": H004.src,
      "title": "Hilton Hotel",
      "client": "Hilton",
      "service": "Supply of Indoor & Outdoor lighting Fittings",
      "location": "Riyadh"
    },
   
    {
      "category": "Hotels Projects",
      "id": "H006",
      "image": "",
      "title": "JODP Phase 3 - Address Hotel",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Makkah Al Mukarramah"
    },
    {
      "category": "Hotels Projects",
      "id": "H007",
      "image": "",
      "title": "JODP Phase 3 - DoubleTree by Hilton",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Makkah Al Mukarramah"
    },
    {
      "category": "Hotels Projects",
      "id": "H008",
      "image": "",
      "title": "JODP Phase 4 - The Alana Hotel",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Makkah Al Mukarramah"
    },
    {
      "category": "Hotels Projects",
      "id": "H009",
      "image": "",
      "title": "JODP Phase 4 - H Hotel",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Makkah Al Mukarramah"
    },
    {
      "category": "Hotels Projects",
      "id": "H010",
      "image": "",
      "title": "JODP Phase 4 - Alana Royal",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Makkah Al Mukarramah"
    },
    {
      "category": "Hotels Projects",
      "id": "H011",
      "image": "",
      "title": "Rotana Hotel",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Hotels Projects",
      "id": "H012",
      "image": "",
      "title": "MARRIOTT Hotel",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Hotels Projects",
      "id": "H013",
      "image": "",
      "title": "Half Moon Bay Resort",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Dammam"
    },
    {
      "category": "Hotels Projects",
      "id": "H014",
      "image": "",
      "title": "Intercontinental Hotel (Extension)",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Khobar"
    },
    {
      "category": "Hotels Projects",
      "id": "H015",
      "image": "",
      "title": "Fairmont Hotel",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Hotels Projects",
      "id": "H016",
      "image": "",
      "title": "Sheraton Hotel",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Makkah"
    },
    {
      "category": "Hotels Projects",
      "id": "H017",
      "image": "",
      "title": "Copthorn Hotel",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Makkah"
    },
    {
      "category": "Hotels Projects",
      "id": "H018",
      "image": "",
      "title": "MILLENNIUM Hotel",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Makkah"
    },
    {
      "category": "Hotels Projects",
      "id": "H019",
      "image": "",
      "title": "MAAD Towers",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Makkah"
    },
    {
      "category": "Hotels Projects",
      "id": "H020",
      "image": "",
      "title": "RADISSON BLU Hotel",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Projects",
      "id": "P001",
      "image": P001.src,
      "title": "King Salman Social Center - KSSC",
      "client": "King Salman Social Center",
      "service": "Supply of Internal Lighting Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Projects",
      "id": "P002",
      "image": P002.src,
      "title": "Andalusia Hospital",
      "client": "Andalusia Health",
      "service": "Supply of Architectural, Decorative & Facade Lighting Fixtures",
      "location": "Jeddah"
    },
    {
      "category": "Projects",
      "id": "P003",
      "image": P003.src,
      "title": "Riyadh Bank",
      "client": "Riyadh Bank",
      "service": "Supply of Indoor Lighting Fixtures",
      "location": "Riyadh"
    },
    {
      "category": "Projects",
      "id": "P004",
      "image": "",
      "title": "Swailem Tower Riyadh",
      "client": "Alswailem",
      "service": "Supply of Façade Lighting Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Projects",
      "id": "P005",
      "image": "",
      "title": "The Avenue, Al Rashed Mall Dhahran",
      "client": "Al Rashed Mall",
      "service": "Supply of Internal Lighting Fittings",
      "location": "Dhahran"
    },
    {
      "category": "Projects",
      "id": "P006",
      "image": "",
      "title": "Cosefan",
      "client": "Cosefan",
      "service": "Supply of Indoor & Decorative Lighting Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Projects",
      "id": "P007",
      "image": P007.src,
      "title": "Bentley Showroom",
      "client": "Bentley Co",
      "service": "Supply of Indoor Lighting Fittings",
      "location": "Riyadh",
      featured:true
    },
    {
      "category": "Projects",
      "id": "P008",
      "image": "",
      "title": "Yunbu Export Refinery",
      "client": "ARAMCO",
      "service": "Supply of Industrial Lighting",
      "location": "Yunbu"
    },
    {
      "category": "Restaurants",
      "id": "R001",
      "image": R001.src,
      "title": "La Duree Riyadh",
      "client": "Le Duree",
      "service": "Supply of Decorative Lighting Fittings",
      "location": "Riyadh",
      featured:true
    },
    {
      "category": "Restaurants",
      "id": "R002",
      "image": "",
      "title": "Waraqat Café",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Restaurants",
      "id": "R003",
      "image": "",
      "title": "77 Restaurant",
      "client": "",
      "service": "",
      "location": "Jeddah"
    },
    {
      "category": "Restaurants",
      "id": "R004",
      "image": "",
      "title": "French Café",
      "client": "",
      "service": "",
      "location": "Khobar"
    },
    {
      "category": "Restaurants",
      "id": "R005",
      "image": "",
      "title": "Le Café",
      "client": "",
      "service": "",
      "location": "Jubail"
    },
    {
      "category": "Restaurants",
      "id": "R006",
      "image": "",
      "title": "Casper & Gambini's",
      "client": "",
      "service": "",
      "location": "Jeddah"
    },
    {
      "category": "Restaurants",
      "id": "R007",
      "image": "",
      "title": "Wooden Bakery",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Restaurants",
      "id": "R008",
      "image": "",
      "title": "La Duree",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Restaurants",
      "id": "R009",
      "image": "",
      "title": "Shababik",
      "client": "",
      "service": "",
      "location": "Jeddah"
    },
    {
      "category": "Car Showrooms",
      "id": "C001",
      "image": C001.src,
      "title": "Al Naghi",
      "client": "NAGHI Motors LLC",
      "service": "Supply of Indoor Lighting Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Car Showrooms",
      "id": "C002",
      "image": "",
      "title": "Infinity Showroom",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Car Showrooms",
      "id": "C003",
      "image": "",
      "title": "Infinity Showroom",
      "client": "",
      "service": "",
      "location": "Khobar"
    },
    {
      "category": "Car Showrooms",
      "id": "C004",
      "image": "",
      "title": "Jaguar & Landrover Showroom",
      "client": "",
      "service": "",
      "location": "Jeddah"
    },
    {
      "category": "Car Showrooms",
      "id": "C005",
      "image": "",
      "title": "Volkswagen Showroom",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Car Showrooms",
      "id": "C006",
      "image": "",
      "title": "Bally Showroom",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Car Showrooms",
      "id": "C007",
      "image": "",
      "title": "Faisaliah Apple Showroom",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Car Showrooms",
      "id": "C008",
      "image": "",
      "title": "Electro Showroom",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Retail Outlets",
      "id": "RT001",
      "image": RT001.src,
      "title": "Riyadh International Exhibition Center",
      "client": "RICEC",
      "service": "Supply of Indoor & Outdoor Lighting Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Retail Outlets",
      "id": "RT002",
      "image": "",
      "title": "The Avenue, Al Rashed Mall",
      "client": "",
      "service": "",
      "location": "Dhahran"
    },
    {
      "category": "Retail Outlets",
      "id": "RT003",
      "image": "",
      "title": "Al Noor Mall",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Retail Outlets",
      "id": "RT004",
      "image": "",
      "title": "Mall of Arabia",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Retail Outlets",
      "id": "RT005",
      "image": "",
      "title": "Galleria Mall",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Retail Outlets",
      "id": "RT006",
      "image": "",
      "title": "Panda Supermarkets",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Retail Outlets",
      "id": "RT007",
      "image": "",
      "title": "Centria Mall",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Retail Outlets",
      "id": "RT008",
      "image": "",
      "title": "Polo Ralph Lauren",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Retail Outlets",
      "id": "RT009",
      "image": "",
      "title": "Polo Ralph Lauren",
      "client": "",
      "service": "",
      "location": "Jeddah"
    },
    {
      "category": "Corporate",
      "id": "CO001",
      "image": CO001.src,
      "title": "El Seif Head Office",
      "client": "El-Seif Engineering Contracting",
      "service": "Supply of Internal & External Lighting Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Corporate",
      "id": "CO002",
      "image": "",
      "title": "KAFD Parcels",
      "client": "",
      "service": "",
      "location": ""
    },
    {
      "category": "Corporate",
      "id": "CO003",
      "image": "",
      "title": "Lulwa Tower",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Corporate",
      "id": "CO004",
      "image": "",
      "title": "Kazakhstan Embassy Diplomatic Quarter",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Corporate",
      "id": "CO005",
      "image": "",
      "title": "Aramco North Park",
      "client": "",
      "service": "",
      "location": "Dhahran"
    },
    {
      "category": "Corporate",
      "id": "CO006",
      "image": "",
      "title": "Al Ajou Head Office Building",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Corporate",
      "id": "CO007",
      "image": "",
      "title": "SALAMA Commercial Complex",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Corporate",
      "id": "CO008",
      "image": "",
      "title": "Al Safwa Commercial & Office Center Building",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Corporate",
      "id": "CO009",
      "image": "",
      "title": "IT Future Center Kettaneh HQ",
      "client": "",
      "service": "",
      "location": "Khobar"
    },
    {
      "category": "Corporate",
      "id": "CO010",
      "image": "",
      "title": "Rawabi HQ",
      "client": "",
      "service": "",
      "location": "Khobar"
    },
    {
      "category": "Private Residence",
      "id": "PR001",
      "image": PR001.src,
      "title": "Al Rajhi Palace",
      "client": "Dr. Abdulrahman Al Rajhi",
      "service": "Supply of Internal & External Lighting Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Private Residence",
      "id": "PR002",
      "image": "",
      "title": "BSS Private Residence",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Private Residence",
      "id": "PR003",
      "image": "",
      "title": "Kologhassi Villa",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Private Residence",
      "id": "PR004",
      "image": "",
      "title": "MES Villa",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Private Residence",
      "id": "PR005",
      "image": "",
      "title": "EB Residence",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Private Residence",
      "id": "PR006",
      "image": "",
      "title": "AT Villa",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Private Residence",
      "id": "PR007",
      "image": "",
      "title": "MT Villa",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Private Residence",
      "id": "PR008",
      "image": "",
      "title": "AAF Beach House",
      "client": "",
      "service": "",
      "location": "Azziziyah"
    },
    {
      "category": "Private Residence",
      "id": "PR009",
      "image": "",
      "title": "Riyadh Residence",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Private Residence",
      "id": "PR010",
      "image": "",
      "title": "VIP Palace",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Private Residence",
      "id": "PR011",
      "image": "",
      "title": "MAJ Palace",
      "client": "",
      "service": "",
      "location": "Jeddah"
    },
    {
      "category": "Private Residence",
      "id": "PR012",
      "image": "",
      "title": "AAF Khobar Villa",
      "client": "",
      "service": "",
      "location": "Khobar"
    },
    {
      "category": "Private Residence",
      "id": "PR013",
      "image": "",
      "title": "Hossa Palace",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Private Residence",
      "id": "PR014",
      "image": "",
      "title": "Noura Palace",
      "client": "",
      "service": "",
      "location": "Jeddah"
    },
    {
      "category": "Private Residence",
      "id": "PR015",
      "image": "",
      "title": "Reema Palace",
      "client": "",
      "service": "",
      "location": "Riyadh"
    },
    {
      "category": "Hotels Projects",
      "id": "H021",
      "image": "",
      "title": "Al Bustan Compound",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Hotels Projects",
      "id": "H022",
      "image": "",
      "title": "Samriyah Farm",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Riyadh"
    },
    {
      "category": "Hotels Projects",
      "id": "H023",
      "image": "",
      "title": "Nofa Equestrian Resort",
      "client": "Jabal Omar Development Co",
      "service": "Supply of Internal & External Light Fittings",
      "location": "Riyadh"
    }
  ]