personalData = {
    name: "Tapas Rout",
    website: "AsicBytes",
    current_year: new Date().getFullYear(),
    title: "Doctoral Researcher",
    organization: "IIT Bhubaneswar",
    profilePicture: "https://media.licdn.com/dms/image/v2/D5603AQGSQlfl9vWxmA/profile-displayphoto-shrink_200_200/B56ZUhmNU1GQAY-/0/1740025419686?e=1748476800&v=beta&t=iEb2U8gKpBaYEGyzHsygi8O_mDM5Sh5BtgJyUdIXq7s",
    interests: [
        "High-Performance Computing",
        "ASIC/FPGA Design",
        "Computer Vision",
        "Artificial Intelligence"
    ],
    socialLinks: {
        website: "https://asicbytes.github.io",
        linkedin: "#",
        github: "#",
        googleScholar: "#",
        email: "your.email@example.com",
    }
}


personalData.projectData = [
    {
        category: "web",
        icon: "web",
        iconBg: "bg-blue-50 dark:bg-blue-900",
        iconColor: "text-primary",
        projects: [
            {
                icon: "web",
                iconBg: "bg-blue-50 dark:bg-blue-900",
                iconColor: "text-primary",
                title: "React Dashboard Application",
                status: "Completed",
                statusBg: "bg-primary",
                description: "A responsive admin dashboard with data visualization and user management"
            },
            // more web projects...
        ]
    },
    {
        category: "mobile",
        icon: "smartphone",
        iconBg: "bg-green-50 dark:bg-green-900",
        iconColor: "text-green-600 dark:text-green-400",
        projects: [
            {
                title: "Flutter E-Commerce App",
                status: "In Progress",
                statusBg: "bg-amber-500",
                description: "Cross-platform mobile application with Firebase backend and payment integration"
            },
            // more mobile projects...
        ]
    },
    {
        category: "design",
        icon: "brush",
        iconBg: "bg-purple-50 dark:bg-purple-900",
        iconColor: "text-purple-600 dark:text-purple-400",
        projects: [
            {
                title: "Brand Identity System",
                status: "Completed",
                statusBg: "bg-primary",
                description: "Complete visual identity including logo, color palette, and usage guidelines"
            },
            // more design projects...
        ]
    }
]


personalData.educationData = [
    {
        degree: "PhD in SoC Design",
        institution: "IIT Bhubaneswar",
        period: "Jan 2025 - Dec 2029",
        logo: "https://via.placeholder.com/50",
        description: "Focusing on advanced System-on-Chip architectures for low-power and high-performance computing..."
    },
    {
        degree: "B.Tech in ECE",
        institution: "XYZ University",
        period: "Aug 2012 - May 2016",
        logo: "https://via.placeholder.com/50",
        description: "Specialized in VLSI design with a focus on digital and mixed-signal circuits..."
    }
]

personalData.experienceData = [
    {
        position: "Junior Research Fellow",
        company: "IIT Bhubaneswar",
        period: "Apr 2024 - Apr 2025",
        logo: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
        description: "Conducting research on optimized System-on-Chip (SoC) architectures for low-power applications..."
    },
    {
        position: "Summer Intern",
        company: "XYZ Company",
        period: "May 2024 - Jul 2024",
        logo: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
        description: "Worked on the development of high-speed communication protocols for embedded systems..."
    }
]


personalData.publicationData = [
    {
        "authors": ["Aarav Sharma", "Tapas Rout", "Kunal Reddy", "Neha Bansal"],
        "title": "Advanced SoC Architectures for Low-Power AI Applications",
        "venue": "IEEE Transactions on Very Large Scale Integration (VLSI) Systems",
        "year": 2025,
        "award": "some award",
        "links": {
            "paper": "https://example.com/paper1",
            "github": "https://github.com/asicbytes/soc-ai-lowpower",
            "presentation": "https://example.com/presentation1"
        }
    },
    {
        "authors": ["Yashwant Pillai", "Pooja Saxena", "Abhishek Menon", "Shruti Ghosh"],
        "title": "Energy-Efficient FPGA Designs for Edge Computing",
        "venue": "ACM/IEEE International Symposium on Low Power Electronics and Design (ISLPED)",
        "year": 2024,
        "award": "",
        "links": {
            "paper": "https://example.com/paper2",
            "github": "https://github.com/asicbytes/fpga-edge-computing"
        }
    },
    {
        "authors": ["Yashwant Pillai", "Pooja Saxena", "Abhishek Menon", "Shruti Ghosh"],
        "title": "Novel Interconnect Technologies for Next-Generation SoCs",
        "venue": "Design, Automation & Test in Europe Conference & Exhibition (DATE)",
        "year": 2024,
        "award": "",
        "links": {
            "paper": "https://example.com/paper3"
        }
    },
    {
        "authors": ["Yashwant Pillai", "Pooja Saxena", "Abhishek Menon", "Shruti Ghosh"],
        "title": "Optimization Techniques for Energy-Efficient SoC Designs in IoT Applications",
        "venue": "IEEE Internet of Things Journal",
        "year": 2023,
        "award": "",
        "links": {
            "paper": "https://example.com/paper4",
            "github": "https://github.com/asicbytes/iot-soc-optimization"
        }
    }
]


personalData.tutorialData = [
    {
      category: "programming",
      icon: "code",
      iconColor: "text-primary dark:text-blue-400",
      tutorials: [
        {
          icon: "code",
          iconColor: "text-primary dark:text-blue-400",
          title: "Python Video Tutorial Series: From Basics to Advanced",
          description: "Learn Python programming from scratch with practical examples and exercises",
          url: "tutorials/python-basics.html",
          tags: "python,basics,advanced"
        },
        {
          icon: "code",
          iconColor: "text-primary dark:text-blue-400",
          title: "Verilog Tutorial and An Introduction to FPGA",
          description: "Master Verilog HDL and learn how to implement designs on FPGAs",
          url: "tutorials/verilog-fpga.html",
          tags: "verilog,fpga,hardware"
        },
        {
          icon: "code",
          iconColor: "text-primary dark:text-blue-400",
          title: "A Quick Introduction to C Programming",
          description: "Essential C programming concepts for hardware engineers",
          url: "tutorials/c-programming.html",
          tags: "c,programming,basics"
        }
      ]
    },
    {
      category: "hardware",
      icon: "memory",
      iconColor: "text-green-600 dark:text-green-400",
      tutorials: [
        {
          icon: "memory",
          iconColor: "text-green-600 dark:text-green-400",
          title: "ASIC Design Flow: From RTL to GDS",
          description: "Complete guide to the ASIC design process from specification to tape-out",
          url: "tutorials/asic-design.html",
          tags: "asic,rtl,gds,design"
        }
      ]
    },
    {
      category: "architecture",
      icon: "developer_board",
      iconColor: "text-purple-600 dark:text-purple-400",
      tutorials: [
        {
          icon: "developer_board",
          iconColor: "text-purple-600 dark:text-purple-400",
          title: "RISC-V Architecture Fundamentals",
          description: "Understanding the open-source RISC-V instruction set architecture",
          url: "tutorials/risc-v-basics.html",
          tags: "risc-v,architecture,cpu"
        }
      ]
    },
    {
      category: "ml-hardware",
      icon: "psychology",
      iconColor: "text-red-600 dark:text-red-400",
      tutorials: [
        {
          icon: "psychology",
          iconColor: "text-red-600 dark:text-red-400",
          title: "Implementing Neural Networks on FPGAs",
          description: "Step-by-step guide to deploying neural networks on FPGA hardware",
          url: "tutorials/nn-fpga.html",
          tags: "neural-networks,fpga,ml,ai"
        }
      ]
    }
  ];
  

personalData.projects = [
    {
      title: "RISC-V Based Processor Design",
      description: "Designed and implemented a 5-stage pipelined RISC-V processor with branch prediction and cache memory on FPGA",
      category: "hardware",
      status: "completed",
      technologies: ["Verilog", "FPGA", "RISC-V", "Computer Architecture"],
      link: "https://github.com/username/riscv-processor"
    },
    {
      title: "Machine Learning Hardware Accelerator",
      description: "Developed a custom hardware accelerator for convolutional neural networks with 5x performance improvement over CPU implementations",
      category: "ml",
      status: "completed",
      technologies: ["SystemVerilog", "ASIC", "Machine Learning", "Neural Networks"],
      link: "https://github.com/username/ml-accelerator"
    },
    {
      title: "Low-Power IoT Sensor Node",
      description: "Created an ultra-low power sensor node for environmental monitoring with 6-month battery life",
      category: "hardware",
      status: "in-progress",
      technologies: ["Embedded C", "ARM Cortex-M0", "PCB Design", "IoT"],
      link: null
    },
    {
      title: "Python Framework for Hardware Verification",
      description: "Built a Python-based verification framework for ASIC designs that reduced verification time by 40%",
      category: "software",
      status: "completed",
      technologies: ["Python", "SystemVerilog", "UVM", "Verification"],
      link: "https://github.com/username/hw-verify"
    },
    {
      title: "FPGA-Based Image Processing System",
      description: "Implemented real-time image processing algorithms on FPGA with HDMI input/output capability",
      category: "fpga",
      status: "completed",
      technologies: ["VHDL", "FPGA", "Image Processing", "Computer Vision"],
      link: "https://github.com/username/fpga-image-proc"
    },
    {
      title: "Approximate Computing for Neural Networks",
      description: "Researched and implemented approximate computing techniques for neural network inference, achieving 3x energy efficiency",
      category: "ml",
      status: "in-progress",
      technologies: ["C++", "TensorFlow", "FPGA", "Approximate Computing"],
      link: null
    },
    {
      title: "Open-Source EDA Tool Development",
      description: "Contributing to open-source EDA tools for analog circuit design and simulation",
      category: "software",
      status: "in-progress",
      technologies: ["C++", "Python", "Circuit Design", "EDA"],
      link: "https://github.com/username/open-eda"
    },
    {
      title: "Custom CPU Core for Edge AI",
      description: "Designing a specialized CPU core optimized for edge AI applications with custom instructions",
      category: "hardware",
      status: "planned",
      technologies: ["SystemVerilog", "ASIC", "Computer Architecture", "AI"],
      link: null
    }
  ];