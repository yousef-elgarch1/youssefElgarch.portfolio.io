/* ========================= Typing Animation ========================= */
let typed = new Typed(".typing", {
  strings: [
    "",
    "Front-End Programmer",
    "Web Developer",
    "AI Engineer",
    "Machine Learning Engineer",
    "Front-End Programmer",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

 

/* ========================= Aside ========================= */
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
        //allSection[j].classList.add("back-section")
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

// Function to toggle technology list visibility
function toggleTechList(domain) {
  // Get the corresponding technology list by domain
  const techList = document.querySelector(`.${domain}-tech-list`);
  
  // Toggle the visibility
  if (techList.classList.contains('hidden')) {
    techList.classList.remove('hidden');
  } else {
    techList.classList.add('hidden');
  }
}

 


document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  //console.log(sectionIndex)
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}





const translations = {
  "en": {
    "home": {
      "hello": "Hello, my name is",
      "professionText": "I am a", 
      "professionTypes": [ 
  "Data Engineer",
  "AI/ML Engineer", 
  "Cloud Engineer",
  "Software Engineer",
  "DevOps Engineer",
  "Full-Stack Developer",
  "Backend Developer",
  "Data Scientist",
  "Cloud Solutions Architect", 
  "Machine Learning Engineer",
  "Python Developer",
  "Big Data Engineer",
  "Infrastructure Engineer",
  "Software Development Engineer",
  "Data Analytics Engineer",
  "AI Software Developer",
  "Cloud DevOps Engineer",
  "Enterprise Software Engineer",
  "Data Pipeline Engineer",
  "MLOps Engineer"
],
      "description": "3rd-year ENSIAS student transforming real-world Human Challenges into scalable Tech Solutions through Data Science and Software Engineering. Available for end-of-study internships.",
      "name": "Elgarch Youssef",
      "birthdate": "Aug 14, 2002",
      "age": "22",
      "github": "github.com/yousef-elgarch1",
      "email": "youssefelgarch92@gmail.com",
      "education": "Software Junior Engineer",
      "phone": "+212 641-881911",
      "city": "Rabat, Morocco",
      "freelance": "Available",
      "hireMe": "View My Projects",
      "viewCV": "View My Projects"
    },
    "about": {
      "title": "About",
      "content": "I am an aspiring software engineer with a Bachelor's and Master's degree in Software Engineering from ENSIAS, Rabat, Morocco. Currently, I am seeking an internship opportunity to apply my problem-solving skills and technical expertise in full-stack development, machine learning, and web application building."
    },
    "services": {
      "title": "Services",
       "items": [
    "Cloud Development & Management",
    "DevOps Automation",
    "AI & Machine Learning",
    "Data Science & Analytics",
    "Web Application & API Development",
    "SEO & Web Optimization",
    "Interactive Animations"
  ],
  "descriptions": [
    "I develop and manage scalable cloud infrastructure to deploy, monitor, and optimize cloud-based applications.",
    "I automate and streamline the software development lifecycle, integrating CI/CD pipelines to ensure reliable software delivery.",
    "I build intelligent systems and predictive models using AI and ML techniques, helping businesses make data-driven decisions.",
    "I analyze complex datasets, extracting actionable insights using data mining, statistical models, and ML algorithms to help businesses optimize operations.",
    "I design and develop full-stack web applications and RESTful APIs, ensuring performance, scalability, and security in every stage of development.",
    "I implement SEO strategies and optimize web applications for speed and performance, ensuring higher visibility and better user engagement.",
    "I create engaging animations and interactive elements that enhance the user experience, making your application feel modern and dynamic."
  ]
    },
    "portfolio": {
  "title": "Portfolio",
  "recentProjects": "Featured Projects",
  "filters": {
    "all": "All Projects",
    "ai-ml": "AI/ML",
    "data-engineering": "Data Engineering", 
    "full-stack": "Full-Stack",
    "enterprise": "Enterprise"
  }
},
    "contact": {
      "title": "Contact",
      "content": "Any questions? I am at your disposal"
    },
    "education": {
  "title": "Education",
  "timeline": [
    {
      "date": "Sept. 2023 - June. 2026",
      "title": "Engineering Degree in Software Engineering",
      "location": "ENSIAS, Rabat, Morocco",
      "institution": "ENSIAS",
      "logo": "images/ensias.jfif"
    },
    {
      "date": "Sept. 2021 - June 2023",
      "title": "Preparatory Classes (Mathematics and Physics)",
      "location": "CPGE, Moulay Youssef, Rabat, Morocco",
      "institution": "CPGE",
      "logo": "images/mly.jfif"
    }
  ]
},
    "experience": {
  "title": "Experience",
  "timeline": [
    {
      "date": "Aug. 2024 - Sept. 2024",
      "title": "AI Engineer Intern",
      "location": "IAMAI, Dubai, UAE",
      "company": "IAMAI",
      "logo": "images/logos/iamai.webp",
    },
    {
      "date": "July 2024 - Aug. 2024", 
      "title": "Full-Stack Developer Intern",
      "location": "REDAL, Rabat, Morocco",
      "company": "REDAL",
      "logo": "images/logos/redal.webp",
    }
  ]
},
    "nav": {
      "home": "Home",
      "about": "About",
      "technologies": "Technologies",
      "services": "Services",
      "portfolio": "Portfolio",
      "contact": "Contacts",
      "blog": "Blog",
      
    },
    "techno": {
      "web": "Web Development",
      "database": "Databases",
      "ai": "Artificial Intelligence (AI)",
      "devops": "DevOps",
      "mobile": "Mobile Development",
      "cloud": "Cloud Computing"
    }
  },
  
  "fr": {
    "home": {
      "hello": "Bonjour, je m'appelle",
      "professionText": "Je suis un",
      "professionTypes": [
        "Développeur Junior",
        "Développeur Logiciel",
        "Spécialiste Support IT",
        "Analyste IT",
        "Développeur Web",
        "Développeur Front-End",
        "Administrateur Systèmes Junior",
        "Analyste de Données Junior",
        "Développeur Base de Données",
        "Testeur Assurance Qualité (QA)",
        "Consultant IT Junior",
        "Développeur Cloud Junior",
        "Ingénieur Cloud",
        "Stagiaire DevOps",
        "Développeur Business Intelligence Junior"
      ],
      "description": "Je suis étudiant en génie logiciel à l'ENSIAS, Rabat, Maroc, spécialisé en développement web full-stack.",
      "name": "Elgarch Youssef",
      "birthdate": "14 août 2002",
      "age": "22",
      "github": "github.com/yousef-elgarch1",
      "email": "youssefelgarch92@gmail.com",
      "education": "Ingénieur Junior en Logiciel",
      "phone": "+212 641-881911",
      "city": "Rabat, Maroc",
      "freelance": "Disponible",
      "hireMe": "Engagez-moi",
      "viewCV": "Voir le CV"
    },
    "about": {
      "title": "À propos",
      "content": "Je suis un ingénieur logiciel en herbe avec une licence et un master en génie logiciel de l'ENSIAS, Rabat, Maroc. Actuellement, je recherche une opportunité de stage pour appliquer mes compétences en résolution de problèmes et mes connaissances techniques dans le développement full-stack, l'apprentissage automatique et la création d'applications web."
    },
    "services": {
      "title": "Services",
      "items": [
      "Développement et gestion du Cloud",
      "Automatisation DevOps",
      "IA et Machine Learning",
      "Science des données et analytique",
      "Développement d'applications web et API",
      "SEO et optimisation web",
      "Animations interactives"
    ],
    "descriptions": [
      "Je développe et gère une infrastructure cloud évolutive pour déployer, surveiller et optimiser les applications cloud.",
      "J'automatise et rationalise le cycle de vie du développement logiciel, intégrant des pipelines CI/CD pour assurer une livraison fiable du logiciel.",
      "Je construis des systèmes intelligents et des modèles prédictifs en utilisant des techniques d'IA et de ML, aidant les entreprises à prendre des décisions basées sur les données.",
      "J'analyse des ensembles de données complexes, extrayant des informations exploitables à l'aide de l'exploration de données, de modèles statistiques et d'algorithmes de ML pour aider les entreprises à optimiser leurs opérations.",
      "Je conçois et développe des applications web full-stack et des API RESTful, garantissant la performance, l'évolutivité et la sécurité à chaque étape du développement.",
      "J'implémente des stratégies SEO et optimise les applications web pour la vitesse et les performances, assurant une meilleure visibilité et un meilleur engagement des utilisateurs.",
      "Je crée des animations engageantes et des éléments interactifs qui améliorent l'expérience utilisateur, rendant votre application moderne et dynamique."
    ]
    },
    "portfolio": {
      "title": "Portfolio",
      "recentProjects": "Mes Projets Récents:"
    },
    "contact": {
      "title": "Contact",
      "content": "Des questions? Je suis à votre disposition"
    },
    "education": {
      "title": "Éducation",
      "timeline": [
        {
          "date": "Sept. 2023 - Présent",
          "title": "Diplôme d'Ingénieur en Génie Logiciel",
          "location": "ENSIAS, Rabat, Maroc"
        },
        {
          "date": "Sept. 2021 - Juin 2023",
          "title": "Classes Préparatoires (Mathématiques et Physique)",
          "location": "CPGE, Moulay Youssef, Rabat, Maroc"
        }
      ]
    },
    "experience": {
      "title": "Expérience",
      "timeline": [
        {
          "date": "Août 2024 - Sept. 2024",
          "title": "Stagiaire Ingénieur IA",
          "location": "IAMAI, Dubaï, Émirats Arabes Unis"
        },
        {
          "date": "Juillet 2024 - Août 2024",
          "title": "Stagiaire Développeur Full-Stack",
          "location": "REDAL, Rabat, Maroc"
        }
      ]
    },
    "nav": {
      "home": "Accueil",
      "about": "À propos",
      "technologies": "Technologies",
      "services": "Services",
      "portfolio": "Portfolio",
      "contact": "Contacts",
      "blog": "Blog",
    },
    "techno": {
      "web": "Développement Web",
      "database": "Bases de données",
      "ai": "Intelligence Artificielle (IA)",
      "devops": "DevOps",
      "mobile": "Développement Mobile",
      "cloud": "Informatique en Nuage"
    }
  },
  "zh": {
    "home": {
      "hello": "你好，我的名字是",
      "professionText": "我是一名", 
      "professionTypes": [
        "初级开发人员",
        "软件开发人员",
        "IT支持专家",
        "IT分析师",
        "Web开发人员",
        "前端开发人员",
        "初级系统管理员",
        "初级数据分析师",
        "数据库开发人员",
        "质量保证（QA）测试员",
        "初级IT顾问",
        "初级云开发人员",
        "云工程师",
        "DevOps实习生",
        "初级商业智能开发人员"
      ],
      "description": "我是在摩洛哥拉巴特ENSIAS的计算机工程学生，专注于全栈Web开发。",
      "name": "Elgarch Youssef",
      "birthdate": "2002年8月14日",
      "age": "22",
      "github": "github.com/yousef-elgarch1",
      "email": "youssefelgarch92@gmail.com",
      "education": "软件工程初级工程师",
      "phone": "+212 641-881911",
      "city": "摩洛哥拉巴特",
      "freelance": "可用",
      "hireMe": "聘请我",
      "viewCV": "查看简历"
    },
    "about": {
      "title": "关于",
      "content": "我是一名有抱负的软件工程师，拥有ENSIAS，摩洛哥拉巴特的计算机软件工程学士和硕士学位。"
    },
    "services": {
      "title": "服务",
      "items": [
      "云开发与管理",
      "DevOps自动化",
      "人工智能与机器学习",
      "数据科学与分析",
      "Web应用开发与API",
      "SEO与Web优化",
      "互动动画"
    ],
    "descriptions": [
      "我开发并管理可扩展的云基础设施，以部署、监控和优化基于云的应用程序。",
      "我自动化并简化软件开发生命周期，整合CI/CD管道，确保软件交付的可靠性。",
      "我使用人工智能和机器学习技术构建智能系统和预测模型，帮助企业做出数据驱动的决策。",
      "我分析复杂的数据集，通过数据挖掘、统计模型和机器学习算法提取可操作的见解，帮助企业优化运营。",
      "我设计并开发全栈Web应用和RESTful API，确保在开发的每个阶段都具有性能、可扩展性和安全性。",
      "我实施SEO策略并优化Web应用程序的速度和性能，确保更高的可见性和更好的用户互动。",
      "我创建引人入胜的动画和互动元素，提升用户体验，使您的应用程序更具现代感和活力。"
    ]
    },
    "portfolio": {
      "title": "作品集",
      "recentProjects": "我的最新项目:"
    },
    "contact": {
      "title": "联系",
      "content": "有问题吗？我愿意为您解答"
    },
    "education": {
      "title": "教育",
      "timeline": [
        {
          "date": "2023年9月 - 现在",
          "title": "软件工程学位",
          "location": "ENSIAS，摩洛哥拉巴特"
        },
        {
          "date": "2021年9月 - 2023年6月",
          "title": "预科课程（数学与物理）",
          "location": "CPGE，穆莱尤瑟夫，摩洛哥拉巴特"
        }
      ]
    },
    "experience": {
      "title": "经验",
      "timeline": [
        {
          "date": "2024年8月 - 2024年9月",
          "title": "AI工程师实习生",
          "location": "IAMAI，迪拜，阿联酋"
        },
        {
          "date": "2024年7月 - 2024年8月",
          "title": "全栈开发实习生",
          "location": "REDAL，摩洛哥拉巴特"
        }
      ]
    },
    "nav": {
      "home": "主页",
      "about": "关于",
      "technologies": "技术",
      "services": "服务",
      "portfolio": "作品集",
      "contact": "联系方式",
      "blog": "Blog",
    },
    "techno": {
      "web": "Web开发",
      "database": "数据库",
      "ai": "人工智能 (AI)",
      "devops": "DevOps",
      "mobile": "移动开发",
      "cloud": "云计算"
    }
  },

  "ja": {
    "home": {
      "hello": "こんにちは、私の名前は",
      "professionText": "私は", 
      "professionTypes": [
        "ジュニア開発者",
        "ソフトウェア開発者",
        "ITサポートスペシャリスト",
        "ITアナリスト",
        "Web開発者",
        "フロントエンド開発者",
        "ジュニアシステム管理者",
        "ジュニアデータアナリスト",
        "データベース開発者",
        "品質保証（QA）テスター",
        "ジュニアITコンサルタント",
        "ジュニアクラウド開発者",
        "クラウドエンジニア",
        "DevOpsインターン",
        "ジュニアビジネスインテリジェンス開発者"
      ],
      "description": "私はENSIAS、ラバト、モロッコでソフトウェア工学の学生で、フルスタックWeb開発を専門としています。",
      "name": "Elgarch Youssef",
      "birthdate": "2002年8月14日",
      "age": "22",
      "github": "github.com/yousef-elgarch1",
      "email": "youssefelgarch92@gmail.com",
      "education": "ソフトウェアジュニアエンジニア",
      "phone": "+212 641-881911",
      "city": "モロッコラバト",
      "freelance": "利用可能",
      "hireMe": "私を雇う",
      "viewCV": "CVを見る"
    },
    "about": {
      "title": "自己紹介",
      "content": "私はENSIAS、ラバト、モロッコでソフトウェア工学の学士号と修士号を持つ将来のソフトウェアエンジニアです。"
    },
    "services": {
      "title": "サービス",
      "items": [
      "クラウド開発と管理",
      "DevOps自動化",
      "AIおよび機械学習",
      "データサイエンスおよび分析",
      "WebアプリケーションとAPI開発",
      "SEOとWeb最適化",
      "インタラクティブアニメーション"
    ],
    "descriptions": [
      "クラウドベースのアプリケーションを展開、監視、最適化するために、スケーラブルなクラウドインフラを開発・管理します。",
      "CI/CDパイプラインを統合して、ソフトウェア開発ライフサイクルを自動化し、信頼性のあるソフトウェアの納品を実現します。",
      "AIおよびML技術を使用してインテリジェントなシステムと予測モデルを構築し、企業がデータに基づいた意思決定を行えるよう支援します。",
      "データマイニング、統計モデル、MLアルゴリズムを使用して複雑なデータセットを分析し、企業が運用を最適化できるよう支援します。",
      "フルスタックWebアプリケーションとRESTful APIを設計・開発し、開発の各段階でパフォーマンス、スケーラビリティ、セキュリティを確保します。",
      "SEO戦略を実施し、Webアプリケーションの速度とパフォーマンスを最適化して、可視性を高め、ユーザーのエンゲージメントを向上させます。",
      "ユーザーエクスペリエンスを向上させ、アプリケーションを現代的でダイナミックに感じさせる魅力的なアニメーションとインタラクティブな要素を作成します。"
    ]
    },
    "portfolio": {
      "title": "ポートフォリオ",
      "recentProjects": "私の最近のプロジェクト:"
    },
    "contact": {
      "title": "連絡先",
      "content": "質問がありますか？喜んでお答えします"
    },
    "education": {
      "title": "教育",
      "timeline": [
        {
          "date": "2023年9月 - 現在",
          "title": "ソフトウェア工学学位",
          "location": "ENSIAS、ラバト、モロッコ"
        },
        {
          "date": "2021年9月 - 2023年6月",
          "title": "予備クラス（数学と物理）",
          "location": "CPGE、ムレ・ユースフ、ラバト、モロッコ"
        }
      ]
    },
    "experience": {
      "title": "経験",
      "timeline": [
        {
          "date": "2024年8月 - 2024年9月",
          "title": "AIエンジニアインターン",
          "location": "IAMAI、ドバイ、UAE"
        },
        {
          "date": "2024年7月 - 2024年8月",
          "title": "フルスタック開発インターン",
          "location": "REDAL、ラバト、モロッコ"
        }
      ]
    },
    "nav": {
      "home": "ホーム",
      "about": "自己紹介",
      "technologies": "技術",
      "services": "サービス",
      "portfolio": "ポートフォリオ",
      "contact": "お問い合わせ"
    },
    "techno": {
      "web": "Web開発",
      "database": "データベース",
      "ai": "人工知能 (AI)",
      "devops": "DevOps",
      "mobile": "モバイル開発",
      "cloud": "クラウドコンピューティング"
    }
  } 

};







function changeLanguage(lang) {
  // Home Section
  document.querySelector('.home .hello').innerHTML = translations[lang].home.hello + ' <span class="name">' + translations[lang].home.name + '</span>';
  
  // Update the static profession part (e.g., "I am a", "Je suis un")
  const professionText = document.querySelector('.home .my-profession .static-profession');
  if (professionText) {
    professionText.textContent = translations[lang].home.professionText;
  }

  // Update the dynamic typing part
  const professionElement = document.querySelector('.home .my-profession .typing');
  if (professionElement) {
    professionElement.textContent = translations[lang].home.professionTypes[0]; // Set the first typed word
  }

  // Reinitialize the typing animation after updating the text
  typed.destroy();  // Destroy the previous instance of Typed.js
  typed = new Typed(".typing", {
    strings: translations[lang].home.professionTypes,  // Use the updated profession types
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // Update description in the home section
  document.querySelector('.home .description').textContent = translations[lang].home.description;

  // About Section
  document.querySelector('.about .section-title h2').textContent = translations[lang].about.title;
  document.querySelector('.about .about-content .about-text p').textContent = translations[lang].about.content;
   // Update the "View CV" button
  const viewCV = document.querySelector('.home .btn');
  if (viewCV) {
    viewCV.textContent = translations[lang].home.viewCV;
  }

  // Personal Info in About Section
  const personalInfoItems = document.querySelectorAll('.about .personal-info .info-item p');
  const personalInfoKeys = ["birthdate", "age", "github", "email", "education", "phone", "city", "freelance"];
  personalInfoItems.forEach((item, index) => {
    item.innerHTML = `${item.innerHTML.split(":")[0]}: <span>${translations[lang].home[personalInfoKeys[index]]}</span>`;
  });
// Services Section
document.querySelector('.service .section-title h2').textContent = translations[lang].services.title;

// Update service titles
const serviceItems = document.querySelectorAll('.service-item h4');
for (let i = 0; i < serviceItems.length; i++) {
  serviceItems[i].textContent = translations[lang].services.items[i];
}

// Update service descriptions
const serviceDescriptions = document.querySelectorAll('.service-item p');
for (let i = 0; i < serviceDescriptions.length; i++) {
  serviceDescriptions[i].textContent = translations[lang].services.descriptions[i];
}

// Update Sidebar Text
document.querySelector('.aside .nav li:nth-child(1) .nav-text').textContent = translations[lang].nav.home;
document.querySelector('.aside .nav li:nth-child(2) .nav-text').textContent = translations[lang].nav.about;
document.querySelector('.aside .nav li:nth-child(3) .nav-text').textContent = translations[lang].nav.technologies;
document.querySelector('.aside .nav li:nth-child(4) .nav-text').textContent = translations[lang].nav.services;
document.querySelector('.aside .nav li:nth-child(5) .nav-text').textContent = translations[lang].nav.portfolio;
document.querySelector('.aside .nav li:nth-child(6) .nav-text').textContent = translations[lang].nav.blog;
document.querySelector('.aside .nav li:nth-child(7) .nav-text').textContent = translations[lang].nav.contact;

  
  // Technologies Section
  document.querySelector('.techno .techno-item:nth-child(1) h4').textContent = translations[lang].techno.web;
  document.querySelector('.techno .techno-item:nth-child(2) h4').textContent = translations[lang].techno.database;
  document.querySelector('.techno .techno-item:nth-child(3) h4').textContent = translations[lang].techno.ai;
  document.querySelector('.techno .techno-item:nth-child(4) h4').textContent = translations[lang].techno.devops;
  document.querySelector('.techno .techno-item:nth-child(5) h4').textContent = translations[lang].techno.mobile;
  document.querySelector('.techno .techno-item:nth-child(6) h4').textContent = translations[lang].techno.cloud;


  // Portfolio Section
  document.querySelector('.portfolio .section-title h2').textContent = translations[lang].portfolio.title;
  document.querySelector('.portfolio .portfolio-heading h2').textContent = translations[lang].portfolio.recentProjects;

  // Contact Section
  document.querySelector('.contact .section-title h2').textContent = translations[lang].contact.title;
  document.querySelector('.contact .contact-title').textContent = translations[lang].contact.content;

  // Education Timeline
// Education Timeline
const educationTimeline = document.querySelector('.about .education .timeline');
const educationItems = translations[lang].education.timeline;
educationTimeline.innerHTML = educationItems.map(item => `
  <div class="timeline-item">
    <div class="circle-dot"></div>
    <div class="institution-header">
      <img src="${item.logo}" alt="${item.institution}" class="institution-logo">
      <div class="timeline-content">
        <h3 class="timeline-date"><em class="fa fa-calendar"></em> ${item.date}</h3>
        <h4 class="timeline-title">${item.title}</h4>
        <p class="timeline-text">${item.location}</p>
      </div>
    </div>
  </div>
`).join('');

// Experience Timeline
const experienceTimeline = document.querySelector('.about .experience .timeline');
const experienceItems = translations[lang].experience.timeline;
experienceTimeline.innerHTML = experienceItems.map(item => `
  <div class="timeline-item">
    <div class="circle-dot"></div>
    <div class="institution-header">
      <img src="${item.logo}" alt="${item.company}" class="institution-logo">
      <div class="timeline-content">
        <h3 class="timeline-date"><em class="fa fa-calendar"></em> ${item.date}</h3>
        <h4 class="timeline-title">${item.title}</h4>
        <p class="timeline-text">${item.location}</p>
      </div>
    </div>
  </div>
`).join('');
}

/* ========================= Blog Section Functionality ========================= */
document.addEventListener('DOMContentLoaded', function() {
  initBlogSection();
});

function initBlogSection() {
  // Blog filter functionality
  const blogFilterBtns = document.querySelectorAll('.blog-filter-btn');
  const blogItems = document.querySelectorAll('.blog-item');
  
  blogFilterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active from all buttons
      blogFilterBtns.forEach(button => button.classList.remove('active'));
      // Add active to clicked button
      this.classList.add('active');
      
      const filterValue = this.getAttribute('data-filter');
      
      blogItems.forEach(item => {
        const itemCategories = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategories.includes(filterValue)) {
          item.classList.remove('hide');
        } else {
          item.classList.add('hide');
        }
      });
    });
  });
  
  // Blog search functionality
  const searchInput = document.querySelector('.blog-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      
      blogItems.forEach(item => {
        const title = item.querySelector('.blog-title a').textContent.toLowerCase();
        const excerpt = item.querySelector('.blog-excerpt').textContent.toLowerCase();
        const tags = Array.from(item.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase()).join(' ');
        
        const matches = title.includes(searchTerm) || 
                       excerpt.includes(searchTerm) || 
                       tags.includes(searchTerm);
        
        if (matches || searchTerm === '') {
          item.classList.remove('hide');
        } else {
          item.classList.add('hide');
        }
      });
    });
  }
  
  // Load more functionality
  const loadMoreBtn = document.querySelector('.load-more-btn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
      // This would typically load more articles from a server
      // For now, we'll just show a message
      this.textContent = 'More articles coming soon!';
      this.disabled = true;
    });
  }
}

/* ========================= Blog Modal Functionality ========================= */
function openBlogModal(articleId) {
  const modal = document.getElementById('blogModal');
  const modalBody = document.getElementById('blogModalBody');
  
  // Get article content based on ID
  const articleContent = getBlogArticleContent(articleId);
  modalBody.innerHTML = articleContent;
  
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent background scroll
}

// Close modal functionality
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('blogModal');
  const closeBtn = document.querySelector('.blog-modal-close');
  
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  }
  
  // Close modal when clicking outside
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});

/* ========================= Blog Article Content ========================= */
function getBlogArticleContent(articleId) {
  const articles = {
    'diabetecare': `
      <h1>Building DiabeteCare: How I Achieved 94% Accuracy in Medical AI</h1>
      
      <div class="article-meta">
        <span class="article-date">October 15, 2024</span>
        <span class="article-category">Project Deep Dive</span>
        <span class="reading-time">8 min read</span>
      </div>
      
      <h2>The Challenge</h2>
      <p>Diabetic retinopathy is one of the leading causes of blindness worldwide, affecting millions of people with diabetes. Early detection is crucial for preventing vision loss, but requires specialized ophthalmological expertise that isn't always available, especially in rural areas.</p>
      
      <p>This is where AI can make a real difference. My goal was to build a system that could analyze retinal images and detect signs of diabetic retinopathy with clinical-grade accuracy.</p>
      
      <h2>Technical Approach</h2>
      <p>I designed a convolutional neural network (CNN) architecture specifically optimized for medical image analysis. The key decisions were:</p>
      
      <ul>
        <li><strong>Data Pipeline:</strong> Processed over 10,000 medical images with careful preprocessing</li>
        <li><strong>Architecture:</strong> Custom CNN with attention mechanisms for feature extraction</li>
        <li><strong>Training Strategy:</strong> Transfer learning with domain-specific fine-tuning</li>
        <li><strong>Validation:</strong> Rigorous cross-validation with medical expert review</li>
      </ul>
      
      <h2>Key Technical Challenges</h2>
      <h3>1. Data Quality and Preprocessing</h3>
      <p>Medical images require extremely careful preprocessing. I implemented:</p>
      <pre><code>
# Image preprocessing pipeline
def preprocess_retinal_image(image_path):
    image = cv2.imread(image_path)
    # Normalize contrast and brightness
    image = cv2.createCLAHE(clipLimit=2.0).apply(image)
    # Resize to standard dimensions
    image = cv2.resize(image, (512, 512))
    # Normalize pixel values
    image = image / 255.0
    return image
      </code></pre>
      
      <h3>2. Model Architecture</h3>
      <p>The CNN architecture was designed with medical imaging in mind:</p>
      <pre><code>
# Simplified model architecture
model = Sequential([
    Conv2D(32, (3, 3), activation='relu', input_shape=(512, 512, 3)),
    BatchNormalization(),
    MaxPooling2D(2, 2),
    # ... additional layers
    GlobalAveragePooling2D(),
    Dense(128, activation='relu'),
    Dropout(0.5),
    Dense(5, activation='softmax')  # 5 severity levels
])
      </code></pre>
      
      <h2>Results and Impact</h2>
      <p>After extensive training and validation, the model achieved:</p>
      <ul>
        <li><strong>94% accuracy</strong> on the test dataset</li>
        <li><strong>92% sensitivity</strong> for detecting severe cases</li>
        <li><strong>96% specificity</strong> to avoid false positives</li>
        <li><strong>Sub-second inference time</strong> for real-time screening</li>
      </ul>
      
      <h2>Lessons Learned</h2>
      <p>This project taught me the importance of:</p>
      <ul>
        <li>Domain expertise collaboration (working with medical professionals)</li>
        <li>Ethical AI considerations in healthcare</li>
        <li>Rigorous validation for safety-critical applications</li>
        <li>The balance between model complexity and interpretability</li>
      </ul>
      
      <h2>Future Improvements</h2>
      <p>Next steps for this project include:</p>
      <ul>
        <li>Expanding to other retinal conditions</li>
        <li>Implementing explainable AI features</li>
        <li>Mobile app development for field deployment</li>
        <li>Integration with electronic health records</li>
      </ul>
      
      <p><em>This project represents my commitment to using AI for social good. Technology should serve humanity, and healthcare is one of the most impactful areas where we can make a difference.</em></p>
    `,
    
    'iamai-experience': `
      <h1>Enterprise AI at IAMAI Dubai: Lessons from Building Production Systems</h1>
      
      <div class="article-meta">
        <span class="article-date">September 28, 2024</span>
        <span class="article-category">Learning Journey</span>
        <span class="reading-time">6 min read</span>
      </div>
      
      <p>My internship at IAMAI in Dubai was a transformative experience that taught me what it really means to build AI systems at enterprise scale. Here's what I learned about architecting platforms that process thousands of workflows daily...</p>
      
      <h2>The Challenge: Enterprise AI Integration</h2>
      <p>IAMAI needed a platform that could integrate 25+ different enterprise tools and automate complex workflows. The system had to be reliable, scalable, and intelligent enough to handle diverse business processes.</p>
      
      <h2>Technical Architecture</h2>
      <p>We built a distributed system using:</p>
      <ul>
        <li><strong>Python backend</strong> with async processing</li>
        <li><strong>LangChain</strong> for AI agent orchestration</li>
        <li><strong>MongoDB</strong> with 15+ collections for data persistence</li>
        <li><strong>JWT authentication</strong> for enterprise security</li>
        <li><strong>Real-time notifications</strong> for workflow updates</li>
      </ul>
      
      <h2>Achieving 99.2% Reliability</h2>
      <p>The key to our reliability was:</p>
      <ul>
        <li>Comprehensive error handling and retry mechanisms</li>
        <li>Circuit breaker patterns for external API calls</li>
        <li>Distributed logging and monitoring</li>
        <li>Graceful degradation for non-critical services</li>
      </ul>
      
      <h2>Scaling to 10,000+ Daily Workflows</h2>
      <p>Performance optimization included:</p>
      <ul>
        <li>Asynchronous processing with worker queues</li>
        <li>Database indexing and query optimization</li>
        <li>Caching strategies for frequently accessed data</li>
        <li>Load balancing across multiple instances</li>
      </ul>
      
      <h2>Key Takeaways</h2>
      <p>This experience taught me that enterprise AI is fundamentally different from academic projects. It's not just about algorithms - it's about reliability, security, integration, and user experience at scale.</p>
    `,
    
    // Add more articles here...
  };
  
  return articles[articleId] || '<p>Article content coming soon...</p>';
}

/* ========================= Social Sharing ========================= */
function shareOnLinkedIn(articleTitle, articleUrl) {
  const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}&title=${encodeURIComponent(articleTitle)}`;
  window.open(url, '_blank', 'width=600,height=400');
}

function shareOnTwitter(articleTitle, articleUrl) {
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(articleTitle)}&url=${encodeURIComponent(articleUrl)}`;
  window.open(url, '_blank', 'width=600,height=400');
}

// Add social sharing to blog items
document.addEventListener('DOMContentLoaded', function() {
  const linkedinBtns = document.querySelectorAll('.share-linkedin');
  const twitterBtns = document.querySelectorAll('.share-twitter');
  
  linkedinBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const articleTitle = this.closest('.blog-item').querySelector('.blog-title a').textContent;
      const articleUrl = window.location.href + '#blog';
      shareOnLinkedIn(articleTitle, articleUrl);
    });
  });
  
  twitterBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const articleTitle = this.closest('.blog-item').querySelector('.blog-title a').textContent;
      const articleUrl = window.location.href + '#blog';
      shareOnTwitter(articleTitle, articleUrl);
    });
  });
});


/* ========================= Portfolio Filter ========================= */
const filterItems = document.querySelectorAll('.filter-item');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterItems.forEach(item => {
  item.addEventListener('click', function() {
    // Remove active class from all filter items
    filterItems.forEach(filter => filter.classList.remove('active'));
    // Add active class to clicked item
    this.classList.add('active');
    
    const filterValue = this.getAttribute('data-filter');
    
    portfolioItems.forEach(portfolioItem => {
      if(filterValue === 'all' || portfolioItem.getAttribute('data-category') === filterValue) {
        portfolioItem.classList.remove('hide');
      } else {
        portfolioItem.classList.add('hide');
      }
    });
  });
});

/* ========================= Project Modal ========================= */
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close');

function openProjectModal(projectId) {
  const projectData = getProjectData(projectId);
  modalBody.innerHTML = generateModalContent(projectData);
  modal.style.display = 'block';
}

closeModal.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

function getProjectData(projectId) {
  const projects = {
    'diabetecare': {
      title: 'DiabeteCare - AI Medical Diagnosis',
      problem: 'Early detection of diabetic retinopathy is crucial but requires specialized expertise',
      solution: 'AI-powered screening system with automated image analysis',
      features: [
        'Deep learning CNN architecture',
        'Automated image preprocessing pipeline', 
        '94% diagnostic accuracy achieved',
        'Real-time medical image analysis'
      ],
      technologies: ['TensorFlow', 'OpenCV', 'Python', 'Medical AI'],
      impact: '94% accuracy, 10,000+ medical images processed',
      github: 'https://github.com/yousef-elgarch1/diabetecare'
    },
    'market-intelligence': {
      title: 'Real-Time Crypto Market Intelligence',
      problem: 'Traders need real-time market sentiment analysis for better decisions',
      solution: 'Production-grade data pipeline with sentiment analysis and predictions',
      features: [
        'Apache Kafka data streaming',
        'Apache Airflow ETL orchestration',
        'Real-time sentiment analysis',
        'MLflow model deployment'
      ],
      technologies: ['Kafka', 'Airflow', 'Python', 'Docker', 'PostgreSQL'],
      impact: '10,000+ daily data points, Real-time processing',
      github: 'https://github.com/yousef-elgarch1/crypto-intelligence'
    }
    // Add more projects...
  };
  
  return projects[projectId];
}

function generateModalContent(project) {
  return `
    <h2>${project.title}</h2>
    
    <div class="modal-section">
      <h3>Problem</h3>
      <p>${project.problem}</p>
    </div>
    
    <div class="modal-section">
      <h3>Solution</h3>
      <p>${project.solution}</p>
    </div>
    
    <div class="modal-section">
      <h3>Key Features</h3>
      <ul>
        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
    </div>
    
    <div class="modal-section">
      <h3>Technologies</h3>
      <div class="tech-stack">
        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
    </div>
    
    <div class="modal-section">
      <h3>Impact & Results</h3>
      <p>${project.impact}</p>
    </div>
    
    ${project.github ? `
    <div class="modal-actions">
      <a href="${project.github}" class="btn" target="_blank">View on GitHub</a>
    </div>
    ` : ''}
  `;
}

/* ========================= Enhanced Technologies Filter ========================= */
document.addEventListener('DOMContentLoaded', function() {
  const techFilterBtns = document.querySelectorAll('.tech-filter-btn');
  const techCards = document.querySelectorAll('.tech-card');
  
  console.log('Enhanced filter initialized with', techFilterBtns.length, 'buttons and', techCards.length, 'cards');
  
  // Add click event to each filter button
  techFilterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      console.log('Filter clicked:', this.getAttribute('data-filter'));
      
      // Remove active class from all buttons
      techFilterBtns.forEach(button => button.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      const filterValue = this.getAttribute('data-filter');
      let visibleCount = 0;
      
      // Filter tech cards with animation
      techCards.forEach((card, index) => {
        const cardCategories = card.getAttribute('data-category') || '';
        
        setTimeout(() => {
          if (filterValue === 'all' || cardCategories.includes(filterValue)) {
            card.classList.remove('hide');
            visibleCount++;
          } else {
            card.classList.add('hide');
          }
        }, index * 50); // Staggered animation
      });
      
      // Update filter button text with count
      setTimeout(() => {
        if (filterValue !== 'all') {
          this.textContent = this.textContent.split(' (')[0] + ` (${visibleCount})`;
        }
      }, techCards.length * 50 + 100);
    });
  });
  
  // Add search functionality
  addTechSearch();
  
  // Add skill level stats
  updateSkillStats();
});

/* ========================= Technology Search ========================= */
function addTechSearch() {
  // Create search input if it doesn't exist
  const filterContainer = document.querySelector('.tech-filter');
  if (!document.querySelector('.tech-search')) {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.className = 'tech-search';
    searchInput.placeholder = 'Search technologies...';
    searchInput.style.cssText = `
      margin: 10px;
      padding: 8px 15px;
      border: 1px solid var(--bg-black-50);
      border-radius: 20px;
      outline: none;
      font-size: 14px;
      width: 200px;
    `;
    
    filterContainer.appendChild(searchInput);
    
    // Add search functionality
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      const techCards = document.querySelectorAll('.tech-card');
      
      techCards.forEach(card => {
        const techName = card.querySelector('h4').textContent.toLowerCase();
        const techCategory = card.querySelector('.tech-category').textContent.toLowerCase();
        const techDescription = card.querySelector('.tech-description').textContent.toLowerCase();
        
        const matches = techName.includes(searchTerm) || 
                       techCategory.includes(searchTerm) || 
                       techDescription.includes(searchTerm);
        
        if (matches || searchTerm === '') {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
      
      // Reset active filter when searching
      if (searchTerm !== '') {
        document.querySelectorAll('.tech-filter-btn').forEach(btn => {
          btn.classList.remove('active');
        });
      }
    });
  }
}

/* ========================= Skill Level Statistics ========================= */
function updateSkillStats() {
  const techCards = document.querySelectorAll('.tech-card');
  const skillCounts = {
    expert: 0,
    advanced: 0,
    intermediate: 0,
    learning: 0
  };
  
  techCards.forEach(card => {
    const skillLevel = card.querySelector('.tech-level');
    if (skillLevel) {
      const level = skillLevel.textContent.toLowerCase();
      if (skillCounts.hasOwnProperty(level)) {
        skillCounts[level]++;
      }
    }
  });
  
  // Add stats to the section title
  const sectionTitle = document.querySelector('.techno .section-title h2');
  if (sectionTitle && !sectionTitle.querySelector('.skill-stats')) {
    const statsHTML = `
      <div class="skill-stats" style="font-size: 14px; color: var(--text-black-700); margin-top: 10px; font-weight: 400;">
        <span style="margin: 0 15px;">
          <span style="color: #28a745; font-weight: 600;">${skillCounts.expert}</span> Expert
        </span>
        <span style="margin: 0 15px;">
          <span style="color: var(--skin-color); font-weight: 600;">${skillCounts.advanced}</span> Advanced
        </span>
        <span style="margin: 0 15px;">
          <span style="color: #ffc107; font-weight: 600;">${skillCounts.intermediate}</span> Intermediate
        </span>
        ${skillCounts.learning > 0 ? `
        <span style="margin: 0 15px;">
          <span style="color: #6c757d; font-weight: 600;">${skillCounts.learning}</span> Learning
        </span>
        ` : ''}
      </div>
    `;
    sectionTitle.insertAdjacentHTML('afterend', statsHTML);
  }
}

/* ========================= Progress Bar Animation on Scroll ========================= */
const observerOptions = {
  threshold: 0.3,
  rootMargin: '0px 0px -50px 0px'
};

const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll('.progress-bar');
      progressBars.forEach((bar, index) => {
        const finalWidth = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
          bar.style.transition = 'width 1.5s ease-out';
          bar.style.width = finalWidth;
        }, index * 100);
      });
    }
  });
}, observerOptions);

// Observe all tech cards for animation
document.querySelectorAll('.tech-card').forEach(card => {
  progressObserver.observe(card);
});

/* ========================= Technology Card Interactions ========================= */
document.addEventListener('DOMContentLoaded', function() {
  const techCards = document.querySelectorAll('.tech-card');
  
  techCards.forEach(card => {
    // Add click to expand functionality
    card.addEventListener('click', function() {
      const description = this.querySelector('.tech-description');
      const isExpanded = this.classList.contains('expanded');
      
      if (isExpanded) {
        description.style.maxHeight = '3em';
        this.classList.remove('expanded');
      } else {
        description.style.maxHeight = 'none';
        this.classList.add('expanded');
      }
    });
    
    // Add hover sound effect (optional)
    card.addEventListener('mouseenter', function() {
      // You can add subtle sound effects here if desired
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      if (!this.classList.contains('expanded')) {
        this.style.transform = 'translateY(0) scale(1)';
      }
    });
  });
});



/* ========================= EmailJS Contact Form ========================= */
// Initialize EmailJS
(function() {
  emailjs.init("X36T6z7gIE9XnBL9b"); // You'll get this from EmailJS
})();

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const submitBtn = document.getElementById('submit-btn');
  const formStatus = document.getElementById('form-status');
  
  // Show loading state
  submitBtn.classList.add('loading');
  submitBtn.disabled = true;
  showFormStatus('loading', 'Sending message...');
  
  // Send email using EmailJS
  emailjs.sendForm('service_dmqf97f', 'template_jdolhun', this)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      showFormStatus('success', 'Message sent successfully! I\'ll get back to you soon.');
      document.getElementById('contact-form').reset();
    }, function(error) {
      console.log('FAILED...', error);
      showFormStatus('error', 'Failed to send message. Please try again or contact me directly.');
    })
    .finally(function() {
      // Remove loading state
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
    });
});

function showFormStatus(type, message) {
  const formStatus = document.getElementById('form-status');
  formStatus.className = `form-status ${type}`;
  formStatus.textContent = message;
  formStatus.style.display = 'block';
  
  // Auto hide after 5 seconds for success/error
  if (type !== 'loading') {
    setTimeout(() => {
      formStatus.style.display = 'none';
    }, 5000);
  }
}

// Listen for language change
document.getElementById('language-selector').addEventListener('change', function(event) {
  const selectedLang = event.target.value;
  changeLanguage(selectedLang);
});

// Set default language to English
changeLanguage('en');
