// Dashboard Script - Karmel+ Admin Panel

// البيانات الأساسية للموقع
let siteData = {
  hero: {
    title: "ودّع الإجراءات اليدوية وابدأ التحول الرقمي مع كرمل+",
    desc1: "نقدّم حلولاً ذكية تسرّع إدارة أعمالك وتزيد من دقتها وكفاءتها.",
    desc2: "اختر كرمل+ لتجربة احترافية تسهّل عليك كل خطوة نحو المستقبل.",
    button: "تواصل معنا",
    image: "../images/i14.png"
  },
  about: {
    title: "كرمل: حلول برمجية ذكية بثقة واحتراف",
    description: "نحن في كرمل فريق متخصص في تطوير البرمجيات وتصميم الحلول الرقمية الذكية التي تواكب متطلبات السوق وتواجه التحديات بثقة. نضم مطورين، مصممين، ومهندسي برمجيات يعملون بشغف واحد: تحويل الأفكار إلى حلول تقنية فعّالة. نبدأ بتحليل دقيق لاحتياجات العميل، وننفذ بعناية واحتراف، مع التزام كامل في كل مرحلة من مراحل المشروع — من التخطيط إلى الإطلاق وما بعده. نحرص على أن تكون تجربة التعاون معنا سلسة، مهنية، ومبنية على نتائج حقيقية وثقة تدوم."
  },
  partners: [
    { name: "019", type: "شركة اتصالات", image: "../images/i1.png" },
    { name: "Hallo 015", type: "شركة اتصالات", image: "../images/i2.png" },
    { name: "Tranzilla", type: "بوابة دفع", image: "../images/i3.png" },
    { name: "freeRadius", type: "سيرفر راديوس", image: "../images/i4.png" },
    { name: "ريووحيت online", type: "برنامج محاسبة", image: "../images/i5.png" },
    { name: "Priority", type: "برنامج ERP", image: "../images/i6.png" },
    { name: "Golan", type: "شركة اتصالات", image: "../images/i7.png" },
    { name: "Cellcom", type: "شركة اتصالات", image: "../images/i8.png" },
    { name: "We4g", type: "شركة اتصالات", image: "../images/i9.png" },
    { name: "Pelephone", type: "شركة اتصالات", image: "../images/i10.png" },
    { name: "Partner", type: "شركة اتصالات", image: "../images/i11.png" },
    { name: "Hot", type: "شركة اتصالات", image: "../images/i12.png" },
    { name: "OpenOLT", type: "واجهة OLT", image: "../images/i13.png" }
  ],
  vision: {
    mission: { text: "نبتكر حلولاً تقنية تصنع الفرق ونرافقك في كل خطوة من الفكرة حتى الإنجاز.", icon: "🎯" },
    vision: { text: "أن نصبح العلامة التقنية الأولى في القدس ونقود التحول الرقمي بابتكار حقيقي.", icon: "🌟" },
    values: { text: "الثقة، الشغف، الإبداع، والعمل بروح الفريق لتحقيق النجاح المشترك.", icon: "💎" }
  },
  services: [
    { name: "نظام إدارة العملاء (CRM)", icon: "🗂️" },
    { name: "دعم فني", icon: "🛠️" },
    { name: "استشارة تقنية", icon: "💡" },
    { name: "تكامل الأنظمة", icon: "🔗" },
    { name: "تدريب الموظفين", icon: "🎓" }
  ],
  contact: {
    phone: "+972 58-630-0009",
    email: "support@karmelplus.com",
    address: "شعفاط، القدس",
    map: "https://www.google.com/maps?q=Jerusalem%2C%20Shuafat&output=embed"
  },
  whyKarmel: {
    title: "لماذا كرمل+؟",
    subtitle: "اكتشف الأسباب التي تجعلنا الخيار الأمثل لتحويل أفكارك إلى واقع رقمي متميز",
    cards: [
      {
        icon: "fas fa-rocket",
        title: "سرعة في التنفيذ",
        desc: "نحول أفكارك إلى واقع رقمي بسرعة قياسية مع الحفاظ على أعلى معايير الجودة والاحترافية. نستخدم أحدث التقنيات وأفضل الممارسات لضمان التسليم في الوقت المحدد.",
        stat: "50%",
        statText: "أسرع من المنافسين"
      },
      {
        icon: "fas fa-shield-alt",
        title: "أمان وموثوقية",
        desc: "نضمن أمان بياناتك ومشاريعك مع أحدث تقنيات الحماية والنسخ الاحتياطي التلقائي. نطبق معايير الأمان العالمية لحماية معلوماتك.",
        stat: "99.9%",
        statText: "معدل الأمان"
      },
      {
        icon: "fas fa-users",
        title: "فريق محترف",
        desc: "فريق من المطورين المحترفين ذوي الخبرة العالية في أحدث التقنيات وأفضل الممارسات. خبرة تزيد عن 10 سنوات في مجال التطوير.",
        stat: "10+",
        statText: "سنوات خبرة"
      },
      {
        icon: "fas fa-headset",
        title: "دعم مستمر",
        desc: "نقدم دعم فني مستمر وخدمة عملاء متميزة قبل وأثناء وبعد تسليم المشروع. فريق دعم متاح على مدار الساعة.",
        stat: "24/7",
        statText: "دعم متواصل"
      }
    ]
  },
  policies: {
    privacy: {
      title: "سياسة الخصوصية",
      intro: "نحن في شركة كرمل+ نلتزم بحماية خصوصية زوارنا وعملائنا الكرام. تشرح هذه السياسة الشاملة كيفية جمع واستخدام وحماية المعلومات الشخصية التي تقدمها لنا.",
      infoCollected: "نجمع المعلومات التي تقدمها لنا مباشرة مثل:\n• الاسم الكامل ومعلومات الاتصال\n• البريد الإلكتروني ورقم الهاتف\n• معلومات الشركة أو المؤسسة\n• تفاصيل المشروع والخدمات المطلوبة",
      infoUsage: "نستخدم المعلومات التي نجمعها للأغراض التالية:\n• تقديم خدماتنا المتميزة والرد على استفساراتك\n• تحسين تجربتك معنا وتطوير خدماتنا\n• إرسال التحديثات والعروض الخاصة\n• ضمان الأمان والامتثال للقوانين",
      protection: "نطبق أحدث إجراءات الأمان لحماية معلوماتك الشخصية:\n• تشفير البيانات باستخدام تقنيات SSL متقدمة\n• حماية من الوصول غير المصرح به\n• نسخ احتياطية منتظمة وآمنة\n• مراقبة مستمرة للأنظمة الأمنية",
      sharing: "نلتزم بعدم مشاركة معلوماتك الشخصية مع أطراف ثالثة إلا في الحالات التالية:\n• بموافقتك الصريحة والكتابية\n• عندما يقتضي القانون ذلك\n• لحماية حقوقنا أو حقوق الآخرين",
      rights: "لديك الحقوق التالية فيما يتعلق بمعلوماتك الشخصية:\n• الوصول إلى معلوماتك وتحديثها\n• حذف معلوماتك عند الطلب\n• الاعتراض على معالجة معلوماتك\n• نقل معلوماتك إلى مزود خدمة آخر",
      updates: "قد نحدث هذه السياسة من وقت لآخر لتعكس التغييرات في ممارساتنا أو اللوائح القانونية. سنقوم بإشعارك بأي تغييرات جوهرية عبر البريد الإلكتروني أو إشعار على موقعنا."
    },
    terms: {
      title: "الشروط والأحكام",
      acceptance: "باستخدام خدمات كرمل+، فإنك توافق على هذه الشروط والأحكام الشاملة. إذا كنت لا توافق على أي جزء منها، يرجى عدم استخدام خدماتنا.",
      services: "نقدم مجموعة شاملة من الخدمات التقنية المتقدمة:\n• تطوير البرمجيات والمواقع الإلكترونية\n• تطوير التطبيقات المحمولة والويب\n• تصميم واجهات المستخدم (UI/UX)\n• تكامل الأنظمة والخدمات السحابية\n• الدعم الفني والصيانة",
      commitments: "نلتزم بتقديم خدمات عالية الجودة مع:\n• الالتزام بالمواصفات المتفق عليها\n• التسليم في الوقت المحدد\n• الدعم الفني المستمر\n• الشفافية في جميع مراحل المشروع",
      payments: "يتم تحديد أسعار خدماتنا مسبقاً وتوضيحها في العروض المقدمة:\n• الدفع المسبق بنسبة 50% عند بدء المشروع\n• الدفع النهائي عند تسليم المشروع\n• الدفع عبر وسائل آمنة ومقبولة\n• فواتير واضحة ومفصلة",
      intellectual: "نحترم حقوق الملكية الفكرية ونضمن:\n• انتقال جميع حقوق المشروع للعميل بعد الدفع النهائي\n• الاحتفاظ بحقوقنا في التقنيات والأدوات المستخدمة\n• عدم استخدام محتوى العميل لأغراض أخرى\n• حماية سرية المعلومات والبيانات",
      confidentiality: "نلتزم بحماية سرية معلومات العميل من خلال:\n• عدم مشاركة المعلومات مع أطراف ثالثة\n• تطبيق إجراءات أمنية صارمة\n• توقيع اتفاقيات السرية مع الموظفين\n• حماية البيانات وفقاً للقوانين المعمول بها",
      liability: "نلتزم بتقديم خدمات عالية الجودة مع ضمانات محدودة:\n• ضمان عمل المشروع وفقاً للمواصفات المتفق عليها\n• دعم فني مجاني لمدة 3 أشهر بعد التسليم\n• مسؤولية محدودة بقيمة المشروع المتفق عليها\n• عدم ضمان عدم وجود أخطاء برمجية",
      termination: "يمكن إنهاء الخدمة من قبل أي من الطرفين:\n• بإشعار مسبق كتابي لمدة 30 يوماً\n• في حالة عدم الالتزام بالشروط\n• تسوية المدفوعات والالتزامات المتبقية\n• تسليم العمل المنجز حتى تاريخ الإنهاء",
      law: "تخضع هذه الشروط لقانون فلسطين ويتم حل النزاعات من خلال:\n• المحادثات الودية والتفاوض المباشر\n• الوساطة من قبل طرف محايد\n• المحاكم المختصة في فلسطين"
    }
  }
};

// التحقق من تسجيل الدخول
function checkAuth() {
  console.log('checkAuth تم استدعاؤها');
  const isLoggedIn = sessionStorage.getItem('adminLoggedIn');
  if (isLoggedIn !== 'true') {
    console.log('المستخدم غير مسجل دخول، إعادة توجيه إلى صفحة تسجيل الدخول');
    window.location.href = 'login.html';
  } else {
    console.log('المستخدم مسجل دخول بنجاح');
  }
}

// تحميل البيانات عند بدء التطبيق
function initializeDashboard() {
  console.log('initializeDashboard تم استدعاؤها');
  checkAuth();
  loadSiteData();
  updateStats();
  loadPartners();
  loadServices();
  setupEventListeners();
  console.log('تم تهيئة الداشبورد بنجاح');
}

// تحميل بيانات الموقع من localStorage أو استخدام البيانات الافتراضية
function loadSiteData() {
  console.log('loadSiteData تم استدعاؤها');
  const savedData = localStorage.getItem('karmelSiteData');
  if (savedData) {
    siteData = JSON.parse(savedData);
    console.log('تم تحميل البيانات من localStorage');
  } else {
    console.log('لا توجد بيانات محفوظة، استخدام البيانات الافتراضية');
  }
  
  // تحميل البيانات في النماذج
  document.getElementById('heroTitle').value = siteData.hero.title;
  document.getElementById('heroDesc1').value = siteData.hero.desc1;
  document.getElementById('heroDesc2').value = siteData.hero.desc2;
  document.getElementById('heroButton').value = siteData.hero.button;
  document.getElementById('heroImagePreview').src = siteData.hero.image;
  
  document.getElementById('aboutTitle').value = siteData.about.title;
  document.getElementById('aboutDesc').value = siteData.about.description;
  
  document.getElementById('missionText').value = siteData.vision.mission.text;
  document.getElementById('missionIcon').value = siteData.vision.mission.icon;
  document.getElementById('visionText').value = siteData.vision.vision.text;
  document.getElementById('visionIcon').value = siteData.vision.vision.icon;
  document.getElementById('valuesText').value = siteData.vision.values.text;
  document.getElementById('valuesIcon').value = siteData.vision.values.icon;
  
  document.getElementById('contactPhone').value = siteData.contact.phone;
  document.getElementById('contactEmail').value = siteData.contact.email;
  document.getElementById('contactAddress').value = siteData.contact.address;
  document.getElementById('contactMap').value = siteData.contact.map;
  
  console.log('تم تحميل جميع البيانات في النماذج');
}

// حفظ البيانات في localStorage
function saveSiteData() {
  console.log('saveSiteData تم استدعاؤها');
  console.log('البيانات التي سيتم حفظها:', siteData);
  localStorage.setItem('karmelSiteData', JSON.stringify(siteData));
  localStorage.setItem('lastSiteUpdate', new Date().getTime().toString());
  console.log('تم حفظ البيانات في localStorage');
  
  // التحقق من أن البيانات تم حفظها بشكل صحيح
  const savedData = localStorage.getItem('karmelSiteData');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    console.log('البيانات المحفوظة:', parsedData);
  }
}

// دالة تحديث الموقع الأساسي
function updateMainSiteContent(section = null) {
  console.log('updateMainSiteContent تم استدعاؤها مع القسم:', section);
  
  if (window.siteUpdater) {
    console.log('siteUpdater متاح');
    if (section) {
      // تحديث قسم محدد
      console.log('تحديث قسم محدد:', section);
      switch(section) {
        case 'hero':
          window.siteUpdater.updateHeroSection();
          break;
        case 'whyKarmel':
          window.siteUpdater.updateWhyKarmelSection();
          break;
        case 'policies':
          window.siteUpdater.updatePrivacyPolicy();
          window.siteUpdater.updateTermsAndConditions();
          break;
        case 'services':
          window.siteUpdater.updateServicesSection();
          break;
        case 'vision':
          window.siteUpdater.updateVisionSection();
          break;
        case 'about':
          console.log('استدعاء updateAboutSection...');
          window.siteUpdater.updateAboutSection();
          console.log('تم استدعاء updateAboutSection');
          break;
        case 'contact':
          window.siteUpdater.updateContactSection();
          break;
        case 'partners':
          window.siteUpdater.updatePartnersSection();
          break;
        default:
          window.siteUpdater.updateAllSections();
      }
    } else {
      // تحديث جميع الأقسام
      console.log('تحديث جميع الأقسام');
      window.siteUpdater.updateAllSections();
    }
  } else {
    console.error('siteUpdater غير متاح!');
  }
  
  // إرسال إشعار للموقع الأساسي بالتحديث
  localStorage.setItem('forceUpdate', new Date().getTime().toString());
  console.log('تم إرسال إشعار تحديث للموقع الأساسي');
}

// دالة اختبار التحديث
function testSiteUpdate() {
  console.log('اختبار التحديث من الداشبورد...');
  if (window.siteUpdater) {
    window.siteUpdater.testUpdate();
    showNotification('تم اختبار التحديث، راجع الكونسول للتفاصيل', 'info');
  } else {
    console.error('siteUpdater غير متاح');
    showNotification('خطأ: siteUpdater غير متاح', 'error');
  }
}

// دالة إظهار الإشعارات
function showNotification(message, type = 'info') {
  // إنشاء عنصر الإشعار
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    z-index: 10000;
    max-width: 300px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `;
  
  // تحديد اللون حسب النوع
  switch(type) {
    case 'success':
      notification.style.backgroundColor = '#10b981';
      break;
    case 'error':
      notification.style.backgroundColor = '#ef4444';
      break;
    case 'warning':
      notification.style.backgroundColor = '#f59e0b';
      break;
    default:
      notification.style.backgroundColor = '#3b82f6';
  }
  
  notification.textContent = message;
  document.body.appendChild(notification);
  
  // إظهار الإشعار
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // إخفاء الإشعار بعد 3 ثوانٍ
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// دالة تحديث الموقع الأساسي
function updateMainSite() {
  console.log('تحديث الموقع الأساسي...');
  updateMainSiteContent();
  showNotification('تم إرسال طلب تحديث للموقع الأساسي', 'success');
}

// تحديث الإحصائيات
function updateStats() {
  console.log('updateStats تم استدعاؤها');
  document.getElementById('partnersCount').textContent = siteData.partners.length;
  document.getElementById('servicesCount').textContent = siteData.services.length;
  document.getElementById('visionCount').textContent = Object.keys(siteData.vision).length;
  console.log('تم تحديث الإحصائيات');
}

// إعداد مستمعي الأحداث
function setupEventListeners() {
  console.log('setupEventListeners تم استدعاؤها');
  // التنقل بين الأقسام
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const section = this.getAttribute('data-section');
      showSection(section);
    });
  });
  
  // تسجيل الخروج
  document.getElementById('logoutBtn').addEventListener('click', logout);
  
  // معاينة الصور
  document.getElementById('heroImage').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('heroImagePreview').src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
  
  // إغلاق النوافذ المنبثقة
  document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
      const modal = this.closest('.modal');
      modal.style.display = 'none';
    });
  });
  
  // إغلاق النوافذ المنبثقة عند النقر خارجها
  window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
    }
  });
  
  console.log('تم إعداد جميع مستمعي الأحداث');
}

// إظهار قسم معين
function showSection(sectionId) {
  console.log('showSection تم استدعاؤها مع القسم:', sectionId);
  // إخفاء جميع الأقسام
  document.querySelectorAll('.dashboard-section').forEach(section => {
    section.classList.remove('active');
  });
  
  // إزالة الفئة النشطة من جميع الروابط
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  
  // إظهار القسم المطلوب
  document.getElementById(sectionId).classList.add('active');
  
  // إضافة الفئة النشطة للرابط
  document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
  
  console.log('تم إظهار القسم:', sectionId);
}

// تحديث قسم Hero
function updateHero() {
  console.log('updateHero تم استدعاؤها');
  showLoading();
  
  siteData.hero.title = document.getElementById('heroTitle').value;
  siteData.hero.desc1 = document.getElementById('heroDesc1').value;
  siteData.hero.desc2 = document.getElementById('heroDesc2').value;
  siteData.hero.button = document.getElementById('heroButton').value;
  
  console.log('بيانات Hero المحدثة:', siteData.hero);
  
  const imageFile = document.getElementById('heroImage').files[0];
  if (imageFile) {
    const reader = new FileReader();
    reader.onload = function(e) {
      siteData.hero.image = e.target.result;
      saveSiteData();
        updateMainSiteContent('hero');
      hideLoading();
      showSuccessMessage('تم تحديث الصفحة الرئيسية بنجاح!');
    };
    reader.readAsDataURL(imageFile);
  } else {
    saveSiteData();
    updateMainSiteContent('hero');
    hideLoading();
    showSuccessMessage('تم تحديث الصفحة الرئيسية بنجاح!');
  }
}

// إعادة تعيين قسم Hero
function resetHero() {
  document.getElementById('heroTitle').value = siteData.hero.title;
  document.getElementById('heroDesc1').value = siteData.hero.desc1;
  document.getElementById('heroDesc2').value = siteData.hero.desc2;
  document.getElementById('heroButton').value = siteData.hero.button;
  document.getElementById('heroImagePreview').src = siteData.hero.image;
  showMessage('تم إعادة تعيين البيانات', 'warning');
}

// تحديث قسم About
function updateAbout() {
  console.log('بدء تحديث قسم "من نحن"...');
  showLoading();
  // جمع البيانات من النموذج
  const newTitle = document.getElementById('aboutTitle').value;
  const newDesc = document.getElementById('aboutDesc').value;
  console.log('البيانات الجديدة:', { title: newTitle, desc: newDesc });
  // تحديث البيانات
  siteData.about.title = newTitle;
  siteData.about.description = newDesc;
  // حفظ البيانات
  saveSiteData();
  // تحديث الموقع الأساسي
  updateMainSiteContent('about');
  hideLoading();
  showSuccessMessage('تم تحديث قسم "من نحن" بنجاح!');
  console.log('انتهى تحديث قسم "من نحن"');
}

// إعادة تعيين قسم About
function resetAbout() {
  document.getElementById('aboutTitle').value = siteData.about.title;
  document.getElementById('aboutDesc').value = siteData.about.description;
  showMessage('تم إعادة تعيين البيانات', 'warning');
}

// تحديث قسم Vision
function updateVision() {
  showLoading();
  siteData.vision.mission.text = document.getElementById('missionText').value;
  siteData.vision.mission.icon = document.getElementById('missionIcon').value;
  siteData.vision.vision.text = document.getElementById('visionText').value;
  siteData.vision.vision.icon = document.getElementById('visionIcon').value;
  siteData.vision.values.text = document.getElementById('valuesText').value;
  siteData.vision.values.icon = document.getElementById('valuesIcon').value;
  saveSiteData();
    updateMainSiteContent('vision');
  hideLoading();
  showSuccessMessage('تم تحديث الرؤية والمهمة والقيم بنجاح!');
}

// إعادة تعيين قسم Vision
function resetVision() {
  document.getElementById('missionText').value = siteData.vision.mission.text;
  document.getElementById('missionIcon').value = siteData.vision.mission.icon;
  document.getElementById('visionText').value = siteData.vision.vision.text;
  document.getElementById('visionIcon').value = siteData.vision.vision.icon;
  document.getElementById('valuesText').value = siteData.vision.values.text;
  document.getElementById('valuesIcon').value = siteData.vision.values.icon;
  showMessage('تم إعادة تعيين البيانات', 'warning');
}

// تحديث معلومات التواصل
function updateContact() {
  showLoading();
  siteData.contact.phone = document.getElementById('contactPhone').value;
  siteData.contact.email = document.getElementById('contactEmail').value;
  siteData.contact.address = document.getElementById('contactAddress').value;
  siteData.contact.map = document.getElementById('contactMap').value;
  saveSiteData();
    updateMainSiteContent('contact');
  hideLoading();
  showSuccessMessage('تم تحديث معلومات التواصل بنجاح!');
}

// إعادة تعيين معلومات التواصل
function resetContact() {
  document.getElementById('contactPhone').value = siteData.contact.phone;
  document.getElementById('contactEmail').value = siteData.contact.email;
  document.getElementById('contactAddress').value = siteData.contact.address;
  document.getElementById('contactMap').value = siteData.contact.map;
  showMessage('تم إعادة تعيين البيانات', 'warning');
}

// تحميل الشركاء
function loadPartners() {
  console.log('loadPartners تم استدعاؤها');
  const grid = document.getElementById('partnersGrid');
  grid.innerHTML = '';
  
  siteData.partners.forEach((partner, index) => {
    const card = createPartnerCard(partner, index);
    grid.appendChild(card);
  });
  console.log('تم تحميل الشركاء:', siteData.partners.length);
}

// إنشاء بطاقة شريك
function createPartnerCard(partner, index) {
  const card = document.createElement('div');
  card.className = 'partner-card';
  card.innerHTML = `
    <img src="${partner.image}" alt="${partner.name}" class="partner-image">
    <div class="partner-name">${partner.name}</div>
    <div class="partner-type">${partner.type}</div>
    <div class="partner-actions">
      <button class="btn btn-secondary btn-small" onclick="editPartner(${index})">
        <i class="fas fa-edit"></i>
        تعديل
      </button>
      <button class="btn btn-danger btn-small" onclick="deletePartner(${index})">
        <i class="fas fa-trash"></i>
        حذف
      </button>
    </div>
  `;
  return card;
}

// إضافة شريك جديد
function addPartner() {
  const name = document.getElementById('newPartnerName').value;
  const type = document.getElementById('newPartnerType').value;
  const imageFile = document.getElementById('newPartnerImage').files[0];
  
  if (!name || !type) {
    showMessage('يرجى ملء جميع الحقول المطلوبة', 'error');
    return;
  }
  
  if (imageFile) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const newPartner = {
        name: name,
        type: type,
        image: e.target.result
      };
      siteData.partners.push(newPartner);
      saveSiteData();
    updateMainSiteContent('partners');
      loadPartners();
      updateStats();
      closeModal('addPartnerModal');
      showMessage('تم إضافة الشريك بنجاح!', 'success');
    };
    reader.readAsDataURL(imageFile);
  } else {
    const newPartner = {
      name: name,
      type: type,
      image: '../images/i1.png' // صورة افتراضية
    };
    siteData.partners.push(newPartner);
    saveSiteData();
    updateMainSiteContent('partners');
    loadPartners();
    updateStats();
    closeModal('addPartnerModal');
    showMessage('تم إضافة الشريك بنجاح!', 'success');
  }
}

// حذف شريك
function deletePartner(index) {
  if (confirm('هل أنت متأكد من حذف هذا الشريك؟')) {
    siteData.partners.splice(index, 1);
    saveSiteData();
    updateMainSiteContent('partners');
    loadPartners();
    updateStats();
    showMessage('تم حذف الشريك بنجاح!', 'success');
  }
}

// تحميل الخدمات
function loadServices() {
  console.log('loadServices تم استدعاؤها');
  const grid = document.getElementById('servicesGrid');
  grid.innerHTML = '';
  
  siteData.services.forEach((service, index) => {
    const card = createServiceCard(service, index);
    grid.appendChild(card);
  });
  console.log('تم تحميل الخدمات:', siteData.services.length);
}

// إنشاء بطاقة خدمة
function createServiceCard(service, index) {
  const card = document.createElement('div');
  card.className = 'service-card';
  card.innerHTML = `
    <div class="service-icon">${service.icon}</div>
    <div class="service-name">${service.name}</div>
    <div class="partner-actions">
      <button class="btn btn-secondary btn-small" onclick="editService(${index})">
        <i class="fas fa-edit"></i>
        تعديل
      </button>
      <button class="btn btn-danger btn-small" onclick="deleteService(${index})">
        <i class="fas fa-trash"></i>
        حذف
      </button>
    </div>
  `;
  return card;
}

// إضافة خدمة جديدة
function addService() {
  const name = document.getElementById('newServiceName').value;
  const icon = document.getElementById('newServiceIcon').value;
  
  if (!name || !icon) {
    showMessage('يرجى ملء جميع الحقول المطلوبة', 'error');
    return;
  }
  
  const newService = { name: name, icon: icon };
  siteData.services.push(newService);
  saveSiteData();
    updateMainSiteContent('services');
  loadServices();
  updateStats();
  closeModal('addServiceModal');
  showMessage('تم إضافة الخدمة بنجاح!', 'success');
}

// حذف خدمة
function deleteService(index) {
  if (confirm('هل أنت متأكد من حذف هذه الخدمة؟')) {
    siteData.services.splice(index, 1);
    saveSiteData();
      updateMainSiteContent('services');
    loadServices();
    updateStats();
    showMessage('تم حذف الخدمة بنجاح!', 'success');
  }
}

// تعديل خدمة
function editService(index) {
  const service = siteData.services[index];
  document.getElementById('editServiceIndex').value = index;
  document.getElementById('editServiceName').value = service.name;
  document.getElementById('editServiceIcon').value = service.icon;
  
  document.getElementById('editServiceModal').style.display = 'block';
}

// تحديث خدمة
function updateService() {
  const index = parseInt(document.getElementById('editServiceIndex').value);
  const name = document.getElementById('editServiceName').value;
  const icon = document.getElementById('editServiceIcon').value;
  
  if (!name || !icon) {
    showMessage('يرجى ملء جميع الحقول المطلوبة', 'error');
    return;
  }
  
      siteData.services[index] = { name: name, icon: icon };
    saveSiteData();
    updateMainSiteContent('services');
    loadServices();
    closeModal('editServiceModal');
    showMessage('تم تحديث الخدمة بنجاح!', 'success');
}

// إظهار النوافذ المنبثقة
function showAddPartnerModal() {
  document.getElementById('addPartnerModal').style.display = 'block';
  clearModalForm('addPartnerModal');
}

function showAddServiceModal() {
  document.getElementById('addServiceModal').style.display = 'block';
  clearModalForm('addServiceModal');
}

// إغلاق النوافذ المنبثقة
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// مسح نماذج النوافذ المنبثقة
function clearModalForm(modalId) {
  const modal = document.getElementById(modalId);
  const inputs = modal.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.value = '';
  });
}

// إظهار الرسائل
function showMessage(message, type = 'success') {
  console.log('showMessage:', message, type);
  const container = document.getElementById('messageContainer');
  const messageElement = document.createElement('div');
  messageElement.className = `message ${type}`;
  messageElement.textContent = message;
  
  container.appendChild(messageElement);
  
  // إزالة الرسالة بعد 5 ثوانٍ
  setTimeout(() => {
    messageElement.remove();
  }, 5000);
}

// إظهار/إخفاء overlay التحميل
function showLoading() {
  document.getElementById('loadingOverlay').style.display = 'flex';
}

function hideLoading() {
  document.getElementById('loadingOverlay').style.display = 'none';
}

// إظهار رسالة نجاح مع رسوم متحركة
function showSuccessMessage(message) {
  console.log('showSuccessMessage:', message);
  showMessage(message, 'success');
  
  // إضافة تأثير بصري إضافي
  const successIcon = document.createElement('div');
  successIcon.innerHTML = `
    <svg class="success-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
      <circle class="success-checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
      <path class="success-checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
    </svg>
  `;
  
  document.body.appendChild(successIcon);
  
  setTimeout(() => {
    successIcon.remove();
  }, 2000);
}

// تسجيل الخروج
function logout() {
  if (confirm('هل أنت متأكد من تسجيل الخروج؟')) {
    sessionStorage.removeItem('adminLoggedIn');
    sessionStorage.removeItem('adminUsername');
    window.location.href = 'login.html';
  }
}

// تحديث الموقع الأساسي
function updateMainSite() {
  try {
    showLoading();
    
    // حفظ البيانات مع طابع زمني
    saveSiteData();
    
    // إرسال إشعار للموقع الأساسي بالتحديث
    localStorage.setItem('forceUpdate', new Date().getTime().toString());
    
    // فتح الموقع الأساسي في نافذة جديدة
    const mainSiteUrl = window.location.origin + '/index.html';
    window.open(mainSiteUrl, '_blank');
    
    hideLoading();
    showSuccessMessage('تم تحديث الموقع الأساسي بنجاح! تم فتح الموقع في نافذة جديدة.');
  } catch (error) {
    hideLoading();
    showMessage('حدث خطأ في تحديث الموقع الأساسي', 'error');
    console.error('خطأ في تحديث الموقع:', error);
  }
}

// تحميل التطبيق عند اكتمال تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
  console.log('dashboard-script.js: DOMContentLoaded تم استدعاؤها');
  initializeDashboard();
  
  // اختبار قسم آراء العملاء
  console.log('dashboard-script.js: تم تحميل الداش بورد بنجاح');
  console.log('dashboard-script.js: عدد آراء العملاء:', siteData.feedback.length);
  
  // التأكد من تحميل آراء العملاء
  setTimeout(() => {
    const feedbackList = document.getElementById('feedbackList');
    if (feedbackList) {
      console.log('dashboard-script.js: عنصر feedbackList موجود');
      loadFeedback();
    } else {
      console.error('dashboard-script.js: عنصر feedbackList غير موجود');
    }
  }, 1000);
  
  console.log('dashboard-script.js: تم إكمال تحميل الداشبورد');
});

// دوال قسم "لماذا كرمل+"
function loadWhyKarmelData() {
  console.log('loadWhyKarmelData تم استدعاؤها');
  if (!siteData.whyKarmel) {
    console.log('لا توجد بيانات لقسم "لماذا كرمل+"');
    return;
  }
  
  document.getElementById('whyKarmelTitle').value = siteData.whyKarmel.title;
  document.getElementById('whyKarmelSubtitle').value = siteData.whyKarmel.subtitle;
  
  // تحميل بيانات البطاقات
  for (let i = 0; i < 4; i++) {
    const card = siteData.whyKarmel.cards[i];
    if (card) {
      document.getElementById(`whyKarmelIcon${i+1}`).value = card.icon;
      document.getElementById(`whyKarmelCardTitle${i+1}`).value = card.title;
      document.getElementById(`whyKarmelCardDesc${i+1}`).value = card.desc;
      document.getElementById(`whyKarmelStat${i+1}`).value = card.stat;
      document.getElementById(`whyKarmelStatText${i+1}`).value = card.statText;
    }
  }
  console.log('تم تحميل بيانات قسم "لماذا كرمل+"');
}

function updateWhyKarmel() {
  showLoading();
  
  if (!siteData.whyKarmel) {
    siteData.whyKarmel = {
      title: "",
      subtitle: "",
      cards: []
    };
  }
  
  siteData.whyKarmel.title = document.getElementById('whyKarmelTitle').value;
  siteData.whyKarmel.subtitle = document.getElementById('whyKarmelSubtitle').value;
  
  // تحديث بيانات البطاقات
  siteData.whyKarmel.cards = [];
  for (let i = 0; i < 4; i++) {
    siteData.whyKarmel.cards.push({
      icon: document.getElementById(`whyKarmelIcon${i+1}`).value,
      title: document.getElementById(`whyKarmelCardTitle${i+1}`).value,
      desc: document.getElementById(`whyKarmelCardDesc${i+1}`).value,
      stat: document.getElementById(`whyKarmelStat${i+1}`).value,
      statText: document.getElementById(`whyKarmelStatText${i+1}`).value
    });
  }
  
  saveSiteData();
  updateMainSiteContent('whyKarmel');
  
  hideLoading();
  showSuccessMessage('تم تحديث قسم "لماذا كرمل+" بنجاح!');
}

function resetWhyKarmel() {
  loadWhyKarmelData();
  showMessage('تم إعادة تعيين البيانات', 'warning');
}

// دوال قسم السياسات
function loadPoliciesData() {
  console.log('loadPoliciesData تم استدعاؤها');
  if (!siteData.policies) {
    console.log('لا توجد بيانات لقسم السياسات');
    return;
  }
  
  // تحميل بيانات سياسة الخصوصية
  if (siteData.policies.privacy) {
    document.getElementById('privacyTitle').value = siteData.policies.privacy.title;
    document.getElementById('privacyIntro').value = siteData.policies.privacy.intro;
    document.getElementById('privacyInfoCollected').value = siteData.policies.privacy.infoCollected;
    document.getElementById('privacyInfoUsage').value = siteData.policies.privacy.infoUsage;
    document.getElementById('privacyProtection').value = siteData.policies.privacy.protection;
    document.getElementById('privacySharing').value = siteData.policies.privacy.sharing;
    document.getElementById('privacyRights').value = siteData.policies.privacy.rights;
    document.getElementById('privacyUpdates').value = siteData.policies.privacy.updates;
  }
  
  // تحميل بيانات الشروط والأحكام
  if (siteData.policies.terms) {
    document.getElementById('termsTitle').value = siteData.policies.terms.title;
    document.getElementById('termsAcceptance').value = siteData.policies.terms.acceptance;
    document.getElementById('termsServices').value = siteData.policies.terms.services;
    document.getElementById('termsCommitments').value = siteData.policies.terms.commitments;
    document.getElementById('termsPayments').value = siteData.policies.terms.payments;
    document.getElementById('termsIntellectual').value = siteData.policies.terms.intellectual;
    document.getElementById('termsConfidentiality').value = siteData.policies.terms.confidentiality;
    document.getElementById('termsLiability').value = siteData.policies.terms.liability;
    document.getElementById('termsTermination').value = siteData.policies.terms.termination;
    document.getElementById('termsLaw').value = siteData.policies.terms.law;
  }
  console.log('تم تحميل بيانات قسم السياسات');
}

function updatePolicies() {
  showLoading();
  
  if (!siteData.policies) {
    siteData.policies = {
      privacy: {},
      terms: {}
    };
  }
  
  // تحديث بيانات سياسة الخصوصية
  siteData.policies.privacy = {
    title: document.getElementById('privacyTitle').value,
    intro: document.getElementById('privacyIntro').value,
    infoCollected: document.getElementById('privacyInfoCollected').value,
    infoUsage: document.getElementById('privacyInfoUsage').value,
    protection: document.getElementById('privacyProtection').value,
    sharing: document.getElementById('privacySharing').value,
    rights: document.getElementById('privacyRights').value,
    updates: document.getElementById('privacyUpdates').value
  };
  
  // تحديث بيانات الشروط والأحكام
  siteData.policies.terms = {
    title: document.getElementById('termsTitle').value,
    acceptance: document.getElementById('termsAcceptance').value,
    services: document.getElementById('termsServices').value,
    commitments: document.getElementById('termsCommitments').value,
    payments: document.getElementById('termsPayments').value,
    intellectual: document.getElementById('termsIntellectual').value,
    confidentiality: document.getElementById('termsConfidentiality').value,
    liability: document.getElementById('termsLiability').value,
    termination: document.getElementById('termsTermination').value,
    law: document.getElementById('termsLaw').value
  };
  
  saveSiteData();
  updateMainSiteContent('policies');
  
  hideLoading();
  showSuccessMessage('تم تحديث السياسات بنجاح!');
}

function resetPolicies() {
  loadPoliciesData();
  showMessage('تم إعادة تعيين البيانات', 'warning');
}

// دالة إظهار تبويب السياسة
function showPolicyTab(tabName) {
  // إخفاء جميع المحتويات
  document.querySelectorAll('.policy-content').forEach(content => {
    content.classList.remove('active');
  });
  
  // إزالة الفئة النشطة من جميع التبويبات
  document.querySelectorAll('.policy-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // إظهار المحتوى المطلوب
  document.getElementById(`${tabName}-policy`).classList.add('active');
  
  // إضافة الفئة النشطة للتبويب
  event.target.classList.add('active');
}

// تحديث دالة loadSiteData لتشمل الأقسام الجديدة
function loadSiteData() {
  const savedData = localStorage.getItem('karmelSiteData');
  if (savedData) {
    siteData = JSON.parse(savedData);
  }
  
  // تحميل البيانات في النماذج
  document.getElementById('heroTitle').value = siteData.hero.title;
  document.getElementById('heroDesc1').value = siteData.hero.desc1;
  document.getElementById('heroDesc2').value = siteData.hero.desc2;
  document.getElementById('heroButton').value = siteData.hero.button;
  document.getElementById('heroImagePreview').src = siteData.hero.image;
  
  document.getElementById('aboutTitle').value = siteData.about.title;
  document.getElementById('aboutDesc').value = siteData.about.description;
  
  document.getElementById('missionText').value = siteData.vision.mission.text;
  document.getElementById('missionIcon').value = siteData.vision.mission.icon;
  document.getElementById('visionText').value = siteData.vision.vision.text;
  document.getElementById('visionIcon').value = siteData.vision.vision.icon;
  document.getElementById('valuesText').value = siteData.vision.values.text;
  document.getElementById('valuesIcon').value = siteData.vision.values.icon;
  
  document.getElementById('contactPhone').value = siteData.contact.phone;
  document.getElementById('contactEmail').value = siteData.contact.email;
  document.getElementById('contactAddress').value = siteData.contact.address;
  document.getElementById('contactMap').value = siteData.contact.map;
  
  // تحميل بيانات الأقسام الجديدة
  loadWhyKarmelData();
  loadPoliciesData();
  console.log('تم تحميل جميع البيانات في النماذج (loadSiteData الثانية)');
}

// Icon Picker System
let currentIconTarget = null;
let selectedIconClass = null;

// قائمة الأيقونات المصنفة
const iconCategories = {
  all: [
    // أيقونات FontAwesome
    { class: 'fas fa-rocket', name: 'صاروخ', category: 'success' },
    { class: 'fas fa-shield-alt', name: 'درع', category: 'security' },
    { class: 'fas fa-users', name: 'أشخاص', category: 'business' },
    { class: 'fas fa-headset', name: 'سماعات', category: 'communication' },
    { class: 'fas fa-lightbulb', name: 'فكرة', category: 'success' },
    { class: 'fas fa-cog', name: 'ترس', category: 'technology' },
    { class: 'fas fa-chart-line', name: 'رسم بياني', category: 'business' },
    { class: 'fas fa-trophy', name: 'كأس', category: 'success' },
    { class: 'fas fa-star', name: 'نجمة', category: 'success' },
    { class: 'fas fa-heart', name: 'قلب', category: 'success' },
    { class: 'fas fa-gem', name: 'جوهرة', category: 'success' },
    { class: 'fas fa-fire', name: 'نار', category: 'success' },
    { class: 'fas fa-bolt', name: 'برق', category: 'technology' },
    { class: 'fas fa-wifi', name: 'واي فاي', category: 'technology' },
    { class: 'fas fa-mobile-alt', name: 'هاتف', category: 'technology' },
    { class: 'fas fa-laptop', name: 'لابتوب', category: 'technology' },
    { class: 'fas fa-database', name: 'قاعدة بيانات', category: 'technology' },
    { class: 'fas fa-cloud', name: 'سحابة', category: 'technology' },
    { class: 'fas fa-lock', name: 'قفل', category: 'security' },
    { class: 'fas fa-key', name: 'مفتاح', category: 'security' },
    { class: 'fas fa-eye', name: 'عين', category: 'security' },
    { class: 'fas fa-fingerprint', name: 'بصمة', category: 'security' },
    { class: 'fas fa-phone', name: 'هاتف', category: 'communication' },
    { class: 'fas fa-envelope', name: 'ظرف', category: 'communication' },
    { class: 'fas fa-comments', name: 'تعليقات', category: 'communication' },
    { class: 'fas fa-video', name: 'فيديو', category: 'communication' },
    { class: 'fas fa-briefcase', name: 'حقيبة', category: 'business' },
    { class: 'fas fa-building', name: 'مبنى', category: 'business' },
    { class: 'fas fa-handshake', name: 'مصافحة', category: 'business' },
    { class: 'fas fa-coins', name: 'عملات', category: 'business' },
    { class: 'fas fa-award', name: 'جائزة', category: 'success' },
    { class: 'fas fa-medal', name: 'ميدالية', category: 'success' },
    { class: 'fas fa-thumbs-up', name: 'إعجاب', category: 'success' },
    { class: 'fas fa-check-circle', name: 'صح', category: 'success' },
    { class: 'fas fa-clock', name: 'ساعة', category: 'business' },
    { class: 'fas fa-calendar', name: 'تقويم', category: 'business' },
    { class: 'fas fa-map-marker-alt', name: 'موقع', category: 'business' },
    { class: 'fas fa-globe', name: 'كرة أرضية', category: 'business' },
    { class: 'fas fa-palette', name: 'لوحة ألوان', category: 'technology' },
    { class: 'fas fa-paint-brush', name: 'فرشاة', category: 'technology' },
    { class: 'fas fa-code', name: 'كود', category: 'technology' },
    { class: 'fas fa-bug', name: 'حشرة', category: 'technology' },
    { class: 'fas fa-tools', name: 'أدوات', category: 'technology' },
    { class: 'fas fa-wrench', name: 'مفتاح', category: 'technology' },
    { class: 'fas fa-screwdriver', name: 'مفك', category: 'technology' },
    { class: 'fas fa-hammer', name: 'مطرقة', category: 'technology' },
    { class: 'fas fa-truck', name: 'شاحنة', category: 'business' },
    { class: 'fas fa-ship', name: 'سفينة', category: 'business' },
    { class: 'fas fa-plane', name: 'طائرة', category: 'business' },
    { class: 'fas fa-car', name: 'سيارة', category: 'business' },
    { class: 'fas fa-bicycle', name: 'دراجة', category: 'business' },
    { class: 'fas fa-walking', name: 'مشي', category: 'business' },
    { class: 'fas fa-running', name: 'ركض', category: 'business' },
    { class: 'fas fa-dumbbell', name: 'دمبل', category: 'business' },
    { class: 'fas fa-futbol', name: 'كرة قدم', category: 'business' },
    { class: 'fas fa-basketball-ball', name: 'كرة سلة', category: 'business' },
    { class: 'fas fa-volleyball-ball', name: 'كرة طائرة', category: 'business' },
    { class: 'fas fa-table-tennis', name: 'تنس طاولة', category: 'business' },
    { class: 'fas fa-chess', name: 'شطرنج', category: 'business' },
    { class: 'fas fa-puzzle-piece', name: 'لغز', category: 'business' },
    { class: 'fas fa-gamepad', name: 'جويستك', category: 'business' },
    { class: 'fas fa-dice', name: 'نرد', category: 'business' },
    { class: 'fas fa-music', name: 'موسيقى', category: 'business' },
    { class: 'fas fa-film', name: 'فيلم', category: 'business' },
    { class: 'fas fa-camera', name: 'كاميرا', category: 'business' },
    { class: 'fas fa-image', name: 'صورة', category: 'business' },
    { class: 'fas fa-microphone', name: 'ميكروفون', category: 'business' },
    { class: 'fas fa-volume-up', name: 'صوت', category: 'business' },
    { class: 'fas fa-headphones', name: 'سماعات', category: 'business' },
    { class: 'fas fa-radio', name: 'راديو', category: 'business' },
    { class: 'fas fa-tv', name: 'تلفاز', category: 'business' },
    { class: 'fas fa-print', name: 'طباعة', category: 'business' },
    { class: 'fas fa-scanner', name: 'ماسح', category: 'business' },
    { class: 'fas fa-fax', name: 'فاكس', category: 'business' },
    { class: 'fas fa-calculator', name: 'آلة حاسبة', category: 'business' },
    { class: 'fas fa-chart-bar', name: 'رسم بياني', category: 'business' },
    { class: 'fas fa-chart-pie', name: 'رسم دائري', category: 'business' },
    { class: 'fas fa-chart-area', name: 'رسم مساحي', category: 'business' },
    { class: 'fas fa-percentage', name: 'نسبة مئوية', category: 'business' },
    { class: 'fas fa-infinity', name: 'لانهاية', category: 'business' },
    { class: 'fas fa-equals', name: 'يساوي', category: 'business' },
    { class: 'fas fa-plus', name: 'زائد', category: 'business' },
    { class: 'fas fa-minus', name: 'ناقص', category: 'business' },
    { class: 'fas fa-times', name: 'ضرب', category: 'business' },
    { class: 'fas fa-divide', name: 'قسمة', category: 'business' },
    { class: 'fas fa-square-root-alt', name: 'جذر تربيعي', category: 'business' },
    { class: 'fas fa-superscript', name: 'أس', category: 'business' },
    { class: 'fas fa-subscript', name: 'أس سفلي', category: 'business' },
    { class: 'fas fa-integral', name: 'تكامل', category: 'business' },
    { class: 'fas fa-sigma', name: 'سيجما', category: 'business' },
    { class: 'fas fa-omega', name: 'أوميغا', category: 'business' },
    { class: 'fas fa-alpha', name: 'ألفا', category: 'business' },
    { class: 'fas fa-beta', name: 'بيتا', category: 'business' },
    { class: 'fas fa-gamma', name: 'غاما', category: 'business' },
    { class: 'fas fa-delta', name: 'دلتا', category: 'business' },
    { class: 'fas fa-theta', name: 'ثيتا', category: 'business' },
    { class: 'fas fa-lambda', name: 'لامبدا', category: 'business' },
    { class: 'fas fa-pi', name: 'باي', category: 'business' },
    { class: 'fas fa-phi', name: 'فاي', category: 'business' },
    { class: 'fas fa-psi', name: 'بسي', category: 'business' },
    { class: 'fas fa-xi', name: 'كسي', category: 'business' },
    { class: 'fas fa-zeta', name: 'زيتا', category: 'business' },
    { class: 'fas fa-eta', name: 'إيتا', category: 'business' },
    { class: 'fas fa-iota', name: 'أيوتا', category: 'business' },
    { class: 'fas fa-kappa', name: 'كابا', category: 'business' },
    { class: 'fas fa-mu', name: 'مو', category: 'business' },
    { class: 'fas fa-nu', name: 'نو', category: 'business' },
    { class: 'fas fa-omicron', name: 'أوميكرون', category: 'business' },
    { class: 'fas fa-rho', name: 'رو', category: 'business' },
    { class: 'fas fa-tau', name: 'تاو', category: 'business' },
    { class: 'fas fa-upsilon', name: 'أبسيلون', category: 'business' },
    { class: 'fas fa-chi', name: 'تشي', category: 'business' },
    { class: 'fas fa-epsilon', name: 'إبسيلون', category: 'business' },
    
    // أيقونات الإيموجي
    { class: '🎯', name: 'هدف', category: 'success' },
    { class: '🌟', name: 'نجمة متوهجة', category: 'success' },
    { class: '💎', name: 'جوهرة', category: 'success' },
    { class: '🚀', name: 'صاروخ', category: 'success' },
    { class: '⭐', name: 'نجمة', category: 'success' },
    { class: '❤️', name: 'قلب أحمر', category: 'success' },
    { class: '🔥', name: 'نار', category: 'success' },
    { class: '⚡', name: 'برق', category: 'technology' },
    { class: '💡', name: 'فكرة', category: 'success' },
    { class: '🏆', name: 'كأس', category: 'success' },
    { class: '🎖️', name: 'ميدالية', category: 'success' },
    { class: '👍', name: 'إعجاب', category: 'success' },
    { class: '✅', name: 'صح', category: 'success' },
    { class: '🛡️', name: 'درع', category: 'security' },
    { class: '🔒', name: 'قفل', category: 'security' },
    { class: '🔑', name: 'مفتاح', category: 'security' },
    { class: '👁️', name: 'عين', category: 'security' },
    { class: '👥', name: 'أشخاص', category: 'business' },
    { class: '🎧', name: 'سماعات', category: 'communication' },
    { class: '📞', name: 'هاتف', category: 'communication' },
    { class: '✉️', name: 'ظرف', category: 'communication' },
    { class: '💬', name: 'تعليقات', category: 'communication' },
    { class: '📹', name: 'فيديو', category: 'communication' },
    { class: '💼', name: 'حقيبة', category: 'business' },
    { class: '🏢', name: 'مبنى', category: 'business' },
    { class: '🤝', name: 'مصافحة', category: 'business' },
    { class: '💰', name: 'عملات', category: 'business' },
    { class: '📊', name: 'رسم بياني', category: 'business' },
    { class: '📈', name: 'رسم بياني صاعد', category: 'business' },
    { class: '📉', name: 'رسم بياني هابط', category: 'business' },
    { class: '⏰', name: 'ساعة', category: 'business' },
    { class: '📅', name: 'تقويم', category: 'business' },
    { class: '📍', name: 'موقع', category: 'business' },
    { class: '🌍', name: 'كرة أرضية', category: 'business' },
    { class: '🎨', name: 'لوحة ألوان', category: 'technology' },
    { class: '🖌️', name: 'فرشاة', category: 'technology' },
    { class: '💻', name: 'لابتوب', category: 'technology' },
    { class: '📱', name: 'هاتف ذكي', category: 'technology' },
    { class: '☁️', name: 'سحابة', category: 'technology' },
    { class: '🔧', name: 'أدوات', category: 'technology' },
    { class: '⚙️', name: 'ترس', category: 'technology' },
    { class: '🔨', name: 'مطرقة', category: 'technology' },
    { class: '🚛', name: 'شاحنة', category: 'business' },
    { class: '🚢', name: 'سفينة', category: 'business' },
    { class: '✈️', name: 'طائرة', category: 'business' },
    { class: '🚗', name: 'سيارة', category: 'business' },
    { class: '🚲', name: 'دراجة', category: 'business' },
    { class: '🏃', name: 'ركض', category: 'business' },
    { class: '⚽', name: 'كرة قدم', category: 'business' },
    { class: '🏀', name: 'كرة سلة', category: 'business' },
    { class: '🏐', name: 'كرة طائرة', category: 'business' },
    { class: '🎵', name: 'موسيقى', category: 'business' },
    { class: '🎬', name: 'فيلم', category: 'business' },
    { class: '📷', name: 'كاميرا', category: 'business' },
    { class: '🎤', name: 'ميكروفون', category: 'business' },
    { class: '🔊', name: 'صوت', category: 'business' },
    { class: '📺', name: 'تلفاز', category: 'business' },
    { class: '🖨️', name: 'طابعة', category: 'business' },
    { class: '🧮', name: 'آلة حاسبة', category: 'business' },
    { class: '📊', name: 'رسم بياني', category: 'business' },
    { class: '📈', name: 'رسم بياني صاعد', category: 'business' },
    { class: '📉', name: 'رسم بياني هابط', category: 'business' },
    { class: '💯', name: '100 نقطة', category: 'success' },
    { class: '♾️', name: 'لانهاية', category: 'business' },
    { class: '➕', name: 'زائد', category: 'business' },
    { class: '➖', name: 'ناقص', category: 'business' },
    { class: '✖️', name: 'ضرب', category: 'business' },
    { class: '➗', name: 'قسمة', category: 'business' },
    { class: '√', name: 'جذر تربيعي', category: 'business' },
    { class: '²', name: 'أس 2', category: 'business' },
    { class: '³', name: 'أس 3', category: 'business' },
    { class: '∫', name: 'تكامل', category: 'business' },
    { class: '∑', name: 'سيجما', category: 'business' },
    { class: 'Ω', name: 'أوميغا', category: 'business' },
    { class: 'α', name: 'ألفا', category: 'business' },
    { class: 'β', name: 'بيتا', category: 'business' },
    { class: 'γ', name: 'غاما', category: 'business' },
    { class: 'δ', name: 'دلتا', category: 'business' },
    { class: 'θ', name: 'ثيتا', category: 'business' },
    { class: 'λ', name: 'لامبدا', category: 'business' },
    { class: 'π', name: 'باي', category: 'business' },
    { class: 'φ', name: 'فاي', category: 'business' },
    { class: 'ψ', name: 'بسي', category: 'business' },
    { class: 'ξ', name: 'كسي', category: 'business' },
    { class: 'ζ', name: 'زيتا', category: 'business' },
    { class: 'η', name: 'إيتا', category: 'business' },
    { class: 'ι', name: 'أيوتا', category: 'business' },
    { class: 'κ', name: 'كابا', category: 'business' },
    { class: 'μ', name: 'مو', category: 'business' },
    { class: 'ν', name: 'نو', category: 'business' },
    { class: 'ο', name: 'أوميكرون', category: 'business' },
    { class: 'ρ', name: 'رو', category: 'business' },
    { class: 'τ', name: 'تاو', category: 'business' },
    { class: 'υ', name: 'أبسيلون', category: 'business' },
    { class: 'χ', name: 'تشي', category: 'business' },
    { class: 'ε', name: 'إبسيلون', category: 'business' }
  ]
};

// تصنيف الأيقونات حسب الفئات
iconCategories.business = iconCategories.all.filter(icon => icon.category === 'business');
iconCategories.technology = iconCategories.all.filter(icon => icon.category === 'technology');
iconCategories.communication = iconCategories.all.filter(icon => icon.category === 'communication');
iconCategories.security = iconCategories.all.filter(icon => icon.category === 'security');
iconCategories.success = iconCategories.all.filter(icon => icon.category === 'success');
iconCategories.emoji = iconCategories.all.filter(icon => !icon.class.startsWith('fas '));

// فتح نافذة اختيار الأيقونات
function openIconPicker(targetId) {
  currentIconTarget = targetId;
  selectedIconClass = document.getElementById(targetId).value;
  
  // تحميل الأيقونات
  loadIcons('all');
  
  // إظهار النافذة
  document.getElementById('iconPickerModal').style.display = 'block';
  
  // إضافة مستمع للبحث
  document.getElementById('iconSearch').addEventListener('input', function(e) {
    searchIcons(e.target.value);
  });
}

// إغلاق نافذة اختيار الأيقونات
function closeIconPicker() {
  document.getElementById('iconPickerModal').style.display = 'none';
  currentIconTarget = null;
  selectedIconClass = null;
}

// تحميل الأيقونات حسب الفئة
function loadIcons(category) {
  const iconsGrid = document.getElementById('iconsGrid');
  const icons = category === 'all' ? iconCategories.all : iconCategories[category];
  
  iconsGrid.innerHTML = '';
  
  icons.forEach(icon => {
    const iconItem = document.createElement('div');
    iconItem.className = 'icon-item';
    if (icon.class === selectedIconClass) {
      iconItem.classList.add('selected');
    }
    
    // التحقق من نوع الأيقونة (FontAwesome أم إيموجي)
    const isEmoji = !icon.class.startsWith('fas ');
    
    iconItem.innerHTML = `
      ${isEmoji ? `<span style="font-size: 2rem;">${icon.class}</span>` : `<i class="${icon.class}"></i>`}
      <span>${icon.name}</span>
    `;
    
    iconItem.addEventListener('click', function() {
      // إزالة التحديد من جميع الأيقونات
      document.querySelectorAll('.icon-item').forEach(item => {
        item.classList.remove('selected');
      });
      
      // تحديد الأيقونة المختارة
      this.classList.add('selected');
      selectedIconClass = icon.class;
    });
    
    iconsGrid.appendChild(iconItem);
  });
  
  // تحديث التبويبات النشطة
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
}

// تصفية الأيقونات حسب الفئة
function filterIcons(category) {
  loadIcons(category);
}

// البحث في الأيقونات
function searchIcons(query) {
  const iconsGrid = document.getElementById('iconsGrid');
  const filteredIcons = iconCategories.all.filter(icon => 
    icon.name.includes(query) || icon.class.includes(query)
  );
  
  iconsGrid.innerHTML = '';
  
  filteredIcons.forEach(icon => {
    const iconItem = document.createElement('div');
    iconItem.className = 'icon-item';
    if (icon.class === selectedIconClass) {
      iconItem.classList.add('selected');
    }
    
    // التحقق من نوع الأيقونة (FontAwesome أم إيموجي)
    const isEmoji = !icon.class.startsWith('fas ');
    
    iconItem.innerHTML = `
      ${isEmoji ? `<span style="font-size: 2rem;">${icon.class}</span>` : `<i class="${icon.class}"></i>`}
      <span>${icon.name}</span>
    `;
    
    iconItem.addEventListener('click', function() {
      document.querySelectorAll('.icon-item').forEach(item => {
        item.classList.remove('selected');
      });
      this.classList.add('selected');
      selectedIconClass = icon.class;
    });
    
    iconsGrid.appendChild(iconItem);
  });
}

// تأكيد اختيار الأيقونة
function confirmIconSelection() {
  if (currentIconTarget && selectedIconClass) {
    document.getElementById(currentIconTarget).value = selectedIconClass;
    closeIconPicker();
    showMessage('تم اختيار الأيقونة بنجاح!', 'success');
  } else {
    showMessage('يرجى اختيار أيقونة', 'warning');
  }
}

// تعديل شريك
function editPartner(index) {
  const partner = siteData.partners[index];
  if (!partner) return;
  // تعبئة الحقول
  document.getElementById('newPartnerName').value = partner.name;
  document.getElementById('newPartnerType').value = partner.type;
  // لا نملأ الصورة لأنها input file
  // تغيير عنوان النافذة
  document.querySelector('#addPartnerModal .modal-header h3').textContent = 'تعديل الشريك';
  // تغيير زر الإضافة إلى تحديث
  const addBtn = document.querySelector('#addPartnerModal .modal-footer .btn.btn-primary');
  addBtn.textContent = 'تحديث';
  // إزالة أي حدث سابق
  addBtn.onclick = null;
  // عند الضغط على تحديث
  addBtn.onclick = function() {
    const name = document.getElementById('newPartnerName').value;
    const type = document.getElementById('newPartnerType').value;
    const imageFile = document.getElementById('newPartnerImage').files[0];
    if (!name || !type) {
      showMessage('يرجى ملء جميع الحقول المطلوبة', 'error');
      return;
    }
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = function(e) {
        partner.name = name;
        partner.type = type;
        partner.image = e.target.result;
        saveSiteData();
        updateMainSiteContent('partners');
        loadPartners();
        closeModal('addPartnerModal');
        showMessage('تم تحديث الشريك بنجاح!', 'success');
      };
      reader.readAsDataURL(imageFile);
    } else {
      partner.name = name;
      partner.type = type;
      // الصورة تبقى كما هي
      saveSiteData();
      updateMainSiteContent('partners');
      loadPartners();
      closeModal('addPartnerModal');
      showMessage('تم تحديث الشريك بنجاح!', 'success');
    }
  };
  // عرض النافذة
  document.getElementById('addPartnerModal').style.display = 'block';
}