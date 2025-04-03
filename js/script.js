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
      "professionText": "I am a", // Static text
      "professionTypes": [         // Typed text (dynamic)
        "Full-Stack Web Developer",
        "Front-End Programmer",
        "Web Developer",
        "AI Engineer",
        "Machine Learning Engineer",
        "Front-End Programmer"
      ],
      "description": "I am a software engineering student at ENSIAS, Rabat, Morocco, specializing in full-stack web development.",
      "name": "Elgarch Youssef",
      "birthdate": "Aug 14, 2002",
      "age": "22",
      "github": "github.com/yousef-elgarch1",
      "email": "youssefelgarch92@gmail.com",
      "education": "Software Junior Engineer",
      "phone": "+212 641-881911",
      "city": "Rabat, Morocco",
      "freelance": "Available",
      "hireMe": "Hire Me",
      "viewCV": "View CV"
    },
    "about": {
      "title": "About",
      "content": "I am an aspiring software engineer with a Bachelor's and Master's degree in Software Engineering from ENSIAS, Rabat, Morocco. Currently, I am seeking an internship opportunity to apply my problem-solving skills and technical expertise in full-stack development, machine learning, and web application building."
    },
    "services": {
      "title": "Services",
      "items": [
        "Web Application Development",
        "Clean Code",
        "High Fidelity Interfaces",
        "Responsive Websites",
        "SEO",
        "Animations"
      ]
    },
    "portfolio": {
      "title": "Portfolio",
      "recentProjects": "My Recent Projects:"
    },
    "contact": {
      "title": "Contact",
      "content": "Any questions? I am at your disposal"
    },
    "education": {
      "title": "Education",
      "timeline": [
        {
          "date": "Sept. 2023 - Present",
          "title": "Engineering Degree in Software Engineering",
          "location": "ENSIAS, Rabat, Morocco"
        },
        {
          "date": "Sept. 2021 - June 2023",
          "title": "Preparatory Classes (Mathematics and Physics)",
          "location": "CPGE, Moulay Youssef, Rabat, Morocco"
        }
      ]
    },
    "experience": {
      "title": "Experience",
      "timeline": [
        {
          "date": "Aug. 2024 - Sept. 2024",
          "title": "AI Engineer Intern",
          "location": "IAMAI, Dubai, UAE"
        },
        {
          "date": "July 2024 - Aug. 2024",
          "title": "Full-Stack Developer Intern",
          "location": "REDAL, Rabat, Morocco"
        }
      ]
    },
    "nav": {
      "home": "Home",
      "about": "About",
      "technologies": "Technologies",
      "services": "Services",
      "portfolio": "Portfolio",
      "contact": "Contacts"
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
      "professionText": "Je suis un", // Static text
      "professionTypes": [         // Typed text (dynamic)
        "Développeur Web Full-Stack",
        "Développeur Front-End",
        "Développeur Web",
        "Ingénieur en IA",
        "Ingénieur en Machine Learning"
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
        "Développement d'Applications Web",
        "Code Propre",
        "Interfaces de Haute Fidélité",
        "Sites Web Responsives",
        "SEO",
        "Animations"
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
      "contact": "Contacts"
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
      "professionText": "我是一名", // Static text
      "professionTypes": [         // Typed text (dynamic)
        "全栈开发人员",
        "前端程序员",
        "Web开发人员",
        "AI工程师",
        "机器学习工程师"
      ],
      "description": "我是在ENSIAS，摩洛哥拉巴特的计算机工程学生，专注于全栈Web开发。",
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
        "Web应用开发",
        "干净的代码",
        "高保真界面",
        "响应式网站",
        "SEO",
        "动画"
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
          "title": "软件工程工程学位",
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
      "contact": "联系方式"
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
      "professionText": "私は", // Static text
      "professionTypes": [         // Typed text (dynamic)
        "フルスタックWeb開発者",
        "フロントエンドプログラマー",
        "Web開発者",
        "AIエンジニア",
        "機械学習エンジニア"
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
        "Webアプリケーション開発",
        "クリーンコード",
        "高精度インターフェース",
        "レスポンシブWebサイト",
        "SEO",
        "アニメーション"
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
  const serviceItems = document.querySelectorAll('.service-item h4');
  for (let i = 0; i < serviceItems.length; i++) {
    serviceItems[i].textContent = translations[lang].services.items[i];
  }
// Update Sidebar Text
document.querySelector('.aside .nav li:nth-child(1) .nav-text').textContent = translations[lang].nav.home;
document.querySelector('.aside .nav li:nth-child(2) .nav-text').textContent = translations[lang].nav.about;
document.querySelector('.aside .nav li:nth-child(3) .nav-text').textContent = translations[lang].nav.technologies;
document.querySelector('.aside .nav li:nth-child(4) .nav-text').textContent = translations[lang].nav.services;
document.querySelector('.aside .nav li:nth-child(5) .nav-text').textContent = translations[lang].nav.portfolio;
document.querySelector('.aside .nav li:nth-child(6) .nav-text').textContent = translations[lang].nav.contact;

  
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
  const educationTimeline = document.querySelector('.about .education .timeline');
  const educationItems = translations[lang].education.timeline;
  educationTimeline.innerHTML = educationItems.map(item => `
    <div class="timeline-item">
      <div class="circle-dot"></div>
      <h3 class="timeline-date"><em class="fa fa-calendar"></em> ${item.date}</h3>
      <h4 class="timeline-title">${item.title}</h4>
      <p class="timeline-text">${item.location}</p>
    </div>
  `).join('');

  // Experience Timeline
  const experienceTimeline = document.querySelector('.about .experience .timeline');
  const experienceItems = translations[lang].experience.timeline;
  experienceTimeline.innerHTML = experienceItems.map(item => `
    <div class="timeline-item">
      <div class="circle-dot"></div>
      <h3 class="timeline-date"><em class="fa fa-calendar"></em> ${item.date}</h3>
      <h4 class="timeline-title">${item.title}</h4>
      <p class="timeline-text">${item.location}</p>
    </div>
  `).join('');
}

  

// Listen for language change
document.getElementById('language-selector').addEventListener('change', function(event) {
  const selectedLang = event.target.value;
  changeLanguage(selectedLang);
});

// Set default language to English
changeLanguage('en');
