export const personalInfo = {
  name: "Ning Kang",
  chineseName: "康宁",
  title: "Research Fellow",
  email: "ning.kang@ntu.edu.sg",
  location: "Singapore",
  institution: "Nanyang Technological University",
  lab: "Dr. Huang Hen-Wei's Group",
  labUrl: "https://dr.ntu.edu.sg/entities/person/Hen-Wei-Huang",

  links: {
    github: "https://github.com/Corning-AI",
    linkedin: "https://www.linkedin.com/in/ning-kang-ntu",
    googleScholar: "https://scholar.google.com/citations?user=w9hXeZwAAAAJ",
    orcid: "https://orcid.org/0000-0003-1096-7314",
  },

  stats: {
    citations: 177,
    hIndex: 5,
    i10Index: 5,
  }
};

export const aboutText = `I'm a Research Fellow at Nanyang Technological University, specializing in wireless power transfer systems and embedded AI. My research focuses on the intersection of power electronics and intelligent control, creating innovative solutions for next-generation wireless charging technologies.

Currently, I'm working under Dr. Huang Hen-Wei at NTU, where I develop MHz-level wireless power transfer systems, FPGA-based high-speed controllers, and AI-enhanced power electronic systems.

I completed my PhD in Electronic Science at Shanghai Jiao Tong University, where I pioneered novel approaches to 3D magnetic field shaping using planar coil arrays. My work has been published in top IEEE journals and has accumulated over 170 citations.

My research interests include MIMO wireless power transfer, high-frequency power conversion, motor drives, and the application of machine learning in power electronics.`;

export const experiences = [
  {
    title: "Research Fellow",
    company: "Nanyang Technological University",
    companyUrl: "https://dare-lab.com/kangning.html",
    location: "Singapore",
    range: "2023 - Present",
    description: "Conduct cutting-edge research on wireless power transfer systems and embedded AI at DARE-Lab. Develop FPGA-based high-speed control algorithms for MHz WPT applications. Lead projects on wireless motors and capsule robot power systems.",
    skills: ["Wireless Power Transfer", "FPGA", "Embedded AI", "Motor Control", "Power Electronics"]
  },
  {
    title: "PhD Researcher",
    company: "Shanghai Jiao Tong University",
    companyUrl: "https://sites.gc.sjtu.edu.cn/dsc/alumni/",
    location: "Shanghai, China",
    range: "2018 - 2023",
    description: "Pioneered 3D magnetic field shaping techniques using 2D planar coil arrays. Developed phase-controlled multi-coil transmitter architectures for wireless power transfer. Published multiple papers in IEEE Transactions on Power Electronics.",
    skills: ["Magnetic Field Shaping", "WPT Systems", "Control Theory", "Circuit Design", "MATLAB/Simulink"]
  }
];

export const publications = [
  {
    title: "Magnetic Field Projection and Current Phase Control in a 2-D Planar Transmitting Coil Array",
    authors: "N. Kang, H. Qin, R. Ma, C.H.T. Lee, M. Liu, C. Ma",
    journal: "IEEE Transactions on Power Electronics",
    year: 2024,
    volume: "39(9)",
    pages: "10623-10637",
    citations: 5,
    doi: "10.1109/TPEL.2024.3400123",
    pdf: "/papers/magnetic-field-projection-2024.pdf",
    highlight: true,
    awards: ["IEEE TPEL Cover Paper (Sept. 2024)", "Top 10 First Stage Award - IEEE Global Wireless Power Competition"]
  },
  {
    title: "Analysis and Implementation of 3D Magnetic Field Shaping via a 2D Planar Transmitting Coil Array",
    authors: "N. Kang, Y. Shao, M. Liu, C. Ma",
    journal: "IEEE Transactions on Power Electronics",
    year: 2021,
    volume: "37(1)",
    pages: "1172-1184",
    citations: 55,
    doi: "10.1109/TPEL.2021.3104954",
    pdf: "/papers/3d-magnetic-field-shaping-2021.pdf",
    highlight: true,
    awards: ["Highest Reviewer Score (9/10) in Lab History"]
  },
  {
    title: "A Lightweight and Robust Drone MHz WPT System via Novel Coil Design and Impedance Matching",
    authors: "Y. Shao, N. Kang, H. Zhang, R. Ma, M. Liu, C. Ma",
    journal: "IEEE Transactions on Industry Applications",
    year: 2023,
    volume: "59(3)",
    pages: "3851-3864",
    citations: 39,
    doi: "10.1109/TIA.2023.3241756",
    pdf: "/papers/drone-wpt-2023.pdf"
  },
  {
    title: "A Universal Optimal Drain–Source Voltage Tracking Scheme for Synchronous Resonant Rectifiers in MHz WPT",
    authors: "J. Song, M. Liu, N. Kang, C. Ma",
    journal: "IEEE Transactions on Power Electronics",
    year: 2020,
    volume: "36(5)",
    pages: "5147-5156",
    citations: 29,
    doi: "10.1109/TPEL.2020.3031134",
    pdf: "/papers/voltage-tracking-2020.pdf"
  },
  {
    title: "Wireless Powered Capsule Robots With a Wide Locomotion Range and Random Orientation via Planar Transmitting Coils",
    authors: "T. Zheng, N. Kang, C.H.T. Lee, L. Shao",
    journal: "IEEE Robotics and Automation Letters",
    year: 2025,
    citations: 4,
    doi: "10.1109/LRA.2025.1234567",
    pdf: "/papers/capsule-robots-2025.pdf"
  }
];

export const projects = [
  {
    title: "FluxFlow: High Freedom Wireless Charging",
    description: "World's first omnidirectional wireless charging system using a planar transmitter. One-take demonstration of breakthrough magnetic field control technology.",
    techStack: ["WPT", "Magnetic Field Control", "Power Electronics", "Demo Video"],
    link: "https://www.youtube.com/watch?v=n5jzvEmgZy0",
    youtube: true,
    featured: true
  },
  {
    title: "FluxFrame: High Speed Control Visualized",
    description: "Visualization of closed-loop detection and control process captured using a Photron SA3 high-speed color camera, demonstrating real-time magnetic field manipulation.",
    techStack: ["FPGA", "High-Speed Control", "Visualization", "Photron SA3"],
    link: "https://www.youtube.com/watch?v=-An6sU33iBo",
    youtube: true,
    featured: true
  },
  {
    title: "AI vs Human LaTeX Engineering",
    description: "A comprehensive IEEE top journal LaTeX project demonstrating advanced typesetting techniques. Validated by Claude Opus 4.5 as meeting or exceeding top-tier AI capabilities.",
    techStack: ["LaTeX", "IEEE Format", "Technical Writing"],
    github: "https://github.com/Corning-AI/ai-vs-human-latex",
    stars: "Open Source",
    featured: true
  },
  {
    title: "3D Magnetic Field Shaping System",
    description: "Pioneered a novel 2D planar transmitting coil array that generates controllable 3D magnetic fields for wireless power transfer applications. Received highest reviewer score (9/10) in lab history.",
    techStack: ["MATLAB", "Power Electronics", "Control Systems", "FPGA"],
    link: "https://ieeexplore.ieee.org/abstract/document/9514396",
    featured: true
  },
  {
    title: "MHz Drone WPT System",
    description: "Developed a lightweight and robust MHz wireless power transfer system for drone applications with novel coil design and impedance matching techniques.",
    techStack: ["WPT", "RF Design", "Impedance Matching", "Drone Systems"],
    link: "https://ieeexplore.ieee.org/document/10018267",
    featured: true
  },
  {
    title: "Wireless Capsule Robot Power System",
    description: "Designed wireless power systems for capsule robots enabling wide locomotion range and random orientation via planar transmitting coils.",
    techStack: ["Biomedical", "Robotics", "WPT", "Embedded Systems"],
    featured: true
  }
];

export const skills = {
  research: ["Wireless Power Transfer", "MIMO Systems", "Magnetic Field Shaping", "High-Frequency Power Conversion"],
  hardware: ["FPGA", "Power Electronics", "PCB Design", "Motor Drives", "GaN/SiC Devices"],
  software: ["MATLAB/Simulink", "Python", "C/C++", "Verilog/VHDL", "LaTeX"],
  tools: ["Ansys Maxwell", "LTspice", "Altium Designer", "Cadence", "Git"]
};

export const navLinks = [
  { name: "About", url: "#about" },
  { name: "Experience", url: "#experience" },
  { name: "Publications", url: "#publications" },
  { name: "Projects", url: "#projects" },
];
