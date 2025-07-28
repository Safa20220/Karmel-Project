// Site Updater - تحديث الموقع الأساسي بالبيانات من الداشبورد
console.log('site-updater.js تم تحميله بنجاح!');

// دالة تحديث قسم "لماذا كرمل+" في الموقع الأساسي
function updateWhyKarmelSection() {
    const siteData = JSON.parse(localStorage.getItem('karmelSiteData'));
  if (!siteData || !siteData.whyKarmel) {
    console.log('لا توجد بيانات لقسم "لماذا كرمل+"');
      return;
    }

  console.log('تحديث قسم "لماذا كرمل+"...');

  // تحديث العنوان الرئيسي
  const titleElement = document.querySelector('.why-karmel-header .section-title-main .ar');
  if (titleElement) {
    titleElement.textContent = siteData.whyKarmel.title;
  }

  // تحديث الوصف الفرعي
  const subtitleElement = document.querySelector('.why-karmel-subtitle .ar');
  if (subtitleElement) {
    subtitleElement.textContent = siteData.whyKarmel.subtitle;
  }

  // تحديث البطاقات
  const cards = document.querySelectorAll('.why-karmel-card');
  siteData.whyKarmel.cards.forEach((cardData, index) => {
    if (cards[index]) {
      const card = cards[index];
      
      // تحديث الأيقونة
      const iconElement = card.querySelector('.why-karmel-icon i');
      if (iconElement) {
        iconElement.className = cardData.icon;
      }
      
      // تحديث العنوان
      const titleElement = card.querySelector('.why-karmel-title .ar');
      if (titleElement) {
        titleElement.textContent = cardData.title;
      }
      
      // تحديث الوصف
      const descElement = card.querySelector('.why-karmel-desc .ar');
      if (descElement) {
        descElement.textContent = cardData.desc;
      }
      
      // تحديث الإحصائية
      const statNumberElement = card.querySelector('.stat-number');
      if (statNumberElement) {
        statNumberElement.textContent = cardData.stat;
      }
      
      const statLabelElement = card.querySelector('.stat-label');
      if (statLabelElement) {
        statLabelElement.textContent = cardData.statText;
      }
    }
  });
}

// دالة تحديث سياسة الخصوصية
function updatePrivacyPolicy() {
  const siteData = JSON.parse(localStorage.getItem('karmelSiteData'));
  if (!siteData || !siteData.policies || !siteData.policies.privacy) {
    console.log('لا توجد بيانات لسياسة الخصوصية');
    return;
  }
  
  console.log('تحديث سياسة الخصوصية...');

  const privacy = siteData.policies.privacy;
  
  // تحديث العنوان
  const titleElements = document.querySelectorAll('#privacyModal .policy-modal-header h3 .ar');
  titleElements.forEach(element => {
    element.textContent = privacy.title;
  });

  // تحديث المحتوى
  const modalBody = document.querySelector('#privacyModal .policy-modal-body');
  if (modalBody) {
    modalBody.innerHTML = `
      <div class="policy-content">
        <h4><span class="ar">مقدمة</span><span class="en" style="display:none;">Introduction</span></h4>
        <p><span class="ar">${privacy.intro}</span><span class="en" style="display:none;">Introduction text</span></p>
        
        <h4><span class="ar">المعلومات التي نجمعها</span><span class="en" style="display:none;">Information We Collect</span></h4>
        <p><span class="ar">${privacy.infoCollected.split('\n').join('<br>')}</span><span class="en" style="display:none;">Information collected</span></p>
        
        <h4><span class="ar">كيفية استخدام المعلومات</span><span class="en" style="display:none;">How We Use Information</span></h4>
        <p><span class="ar">${privacy.infoUsage.split('\n').join('<br>')}</span><span class="en" style="display:none;">Information usage</span></p>
        
        <h4><span class="ar">حماية المعلومات</span><span class="en" style="display:none;">Information Protection</span></h4>
        <p><span class="ar">${privacy.protection.split('\n').join('<br>')}</span><span class="en" style="display:none;">Information protection</span></p>
        
        <h4><span class="ar">مشاركة المعلومات</span><span class="en" style="display:none;">Information Sharing</span></h4>
        <p><span class="ar">${privacy.sharing.split('\n').join('<br>')}</span><span class="en" style="display:none;">Information sharing</span></p>
        
        <h4><span class="ar">حقوقك</span><span class="en" style="display:none;">Your Rights</span></h4>
        <p><span class="ar">${privacy.rights.split('\n').join('<br>')}</span><span class="en" style="display:none;">Your rights</span></p>
        
        <h4><span class="ar">التحديثات</span><span class="en" style="display:none;">Updates</span></h4>
        <p><span class="ar">${privacy.updates}</span><span class="en" style="display:none;">Updates</span></p>
        
        <div class="contact-highlight">
          <p><span class="ar"><strong>التواصل معنا:</strong> إذا كان لديك أي أسئلة حول سياسة الخصوصية، يمكنك التواصل معنا عبر:</span><span class="en" style="display:none;">Contact us</span></p>
          <p><span class="ar">📧 البريد الإلكتروني: <em>support@karmelplus.com</em></span><span class="en" style="display:none;">Email</span></p>
          <p><span class="ar">📞 الهاتف: <em>+972 58-630-0009</em></span><span class="en" style="display:none;">Phone</span></p>
        </div>
      </div>
    `;
  }
}

// دالة تحديث الشروط والأحكام
function updateTermsAndConditions() {
  const siteData = JSON.parse(localStorage.getItem('karmelSiteData'));
  if (!siteData || !siteData.policies || !siteData.policies.terms) {
    console.log('لا توجد بيانات للشروط والأحكام');
    return;
  }
  
  console.log('تحديث الشروط والأحكام...');

  const terms = siteData.policies.terms;
  
  // تحديث العنوان
  const titleElements = document.querySelectorAll('#termsModal .policy-modal-header h3 .ar');
  titleElements.forEach(element => {
    element.textContent = terms.title;
  });

  // تحديث المحتوى
  const modalBody = document.querySelector('#termsModal .policy-modal-body');
  if (modalBody) {
    modalBody.innerHTML = `
      <div class="policy-content">
        <h4><span class="ar">قبول الشروط</span><span class="en" style="display:none;">Acceptance of Terms</span></h4>
        <p><span class="ar">${terms.acceptance}</span><span class="en" style="display:none;">Acceptance</span></p>
        
        <h4><span class="ar">الخدمات المقدمة</span><span class="en" style="display:none;">Services Provided</span></h4>
        <p><span class="ar">${terms.services.split('\n').join('<br>')}</span><span class="en" style="display:none;">Services</span></p>
        
        <h4><span class="ar">التزاماتنا</span><span class="en" style="display:none;">Our Commitments</span></h4>
        <p><span class="ar">${terms.commitments.split('\n').join('<br>')}</span><span class="en" style="display:none;">Commitments</span></p>
        
        <h4><span class="ar">المدفوعات والرسوم</span><span class="en" style="display:none;">Payments and Fees</span></h4>
        <p><span class="ar">${terms.payments.split('\n').join('<br>')}</span><span class="en" style="display:none;">Payments</span></p>
        
        <h4><span class="ar">الملكية الفكرية</span><span class="en" style="display:none;">Intellectual Property</span></h4>
        <p><span class="ar">${terms.intellectual.split('\n').join('<br>')}</span><span class="en" style="display:none;">Intellectual property</span></p>
        
        <h4><span class="ar">السرية وحماية البيانات</span><span class="en" style="display:none;">Confidentiality and Data Protection</span></h4>
        <p><span class="ar">${terms.confidentiality.split('\n').join('<br>')}</span><span class="en" style="display:none;">Confidentiality</span></p>
        
        <h4><span class="ar">المسؤولية والضمانات</span><span class="en" style="display:none;">Liability and Warranties</span></h4>
        <p><span class="ar">${terms.liability.split('\n').join('<br>')}</span><span class="en" style="display:none;">Liability</span></p>
        
        <h4><span class="ar">إنهاء الخدمة</span><span class="en" style="display:none;">Service Termination</span></h4>
        <p><span class="ar">${terms.termination.split('\n').join('<br>')}</span><span class="en" style="display:none;">Termination</span></p>
        
        <h4><span class="ar">القانون المطبق وحل النزاعات</span><span class="en" style="display:none;">Applicable Law and Dispute Resolution</span></h4>
        <p><span class="ar">${terms.law.split('\n').join('<br>')}</span><span class="en" style="display:none;">Law</span></p>
        
        <div class="contact-highlight">
          <p><span class="ar"><strong>للاستفسارات حول هذه الشروط:</strong></span><span class="en" style="display:none;">For inquiries</span></p>
          <p><span class="ar">📧 البريد الإلكتروني: <em>support@karmelplus.com</em></span><span class="en" style="display:none;">Email</span></p>
          <p><span class="ar">📞 الهاتف: <em>+972 58-630-0009</em></span><span class="en" style="display:none;">Phone</span></p>
        </div>
      </div>
    `;
  }
}

// دالة تحديث قسم الصفحة الرئيسية (Hero)
function updateHeroSection() {
  const siteData = JSON.parse(localStorage.getItem('karmelSiteData'));
  if (!siteData || !siteData.hero) {
    console.log('لا توجد بيانات لقسم الصفحة الرئيسية');
    return;
  }
  
  console.log('تحديث قسم الصفحة الرئيسية...', siteData.hero);
  
  // تحديث العنوان الرئيسي
  const heroTitle = document.querySelector('.hero-main-title');
  console.log('العنوان الرئيسي:', heroTitle);
  if (heroTitle) {
    heroTitle.textContent = siteData.hero.title;
    console.log('تم تحديث العنوان الرئيسي');
  }
  
  // تحديث الوصف الأول
  const heroDesc1 = document.querySelector('.hero-main-desc');
  console.log('الوصف الأول:', heroDesc1);
  if (heroDesc1) {
    heroDesc1.textContent = siteData.hero.desc1;
    console.log('تم تحديث الوصف الأول');
  }
  
  // تحديث الوصف الثاني
  const heroDesc2 = document.querySelectorAll('.hero-main-desc')[1];
  console.log('الوصف الثاني:', heroDesc2);
  if (heroDesc2) {
    heroDesc2.textContent = siteData.hero.desc2;
    console.log('تم تحديث الوصف الثاني');
  }
  
  // تحديث زر الاتصال
  const heroButton = document.querySelector('.hero-main-btn');
  console.log('زر الاتصال:', heroButton);
  if (heroButton) {
    heroButton.textContent = siteData.hero.button;
    console.log('تم تحديث زر الاتصال');
  }
  
  // تحديث الصورة
  const heroImage = document.querySelector('.hero-side-img');
  console.log('صورة Hero:', heroImage);
  if (heroImage && siteData.hero.image) {
    heroImage.src = siteData.hero.image;
    console.log('تم تحديث صورة Hero');
  }
}

// دالة تحديث قسم الشركاء
function updatePartnersSection() {
  const siteData = JSON.parse(localStorage.getItem('karmelSiteData'));
  if (!siteData || !siteData.partners) {
    console.log('لا توجد بيانات للشركاء');
    return;
  }
  
  console.log('تحديث قسم الشركاء...');
  
  // تحديث قائمة الشركاء
  const partnersContainer = document.querySelector('.partners-track');
  if (partnersContainer) {
    partnersContainer.innerHTML = '';
    siteData.partners.forEach(partner => {
    const partnerItem = document.createElement('div');
    partnerItem.className = 'partner-item';
    partnerItem.innerHTML = `
      <img src="${partner.image}" alt="${partner.name}">
      <div class="partner-name">${partner.name}</div>
      <div class="partner-type">${partner.type}</div>
    `;
      partnersContainer.appendChild(partnerItem);
    });
  }
}

// دالة تحديث قسم آراء العملاء
function updateFeedbackSection() {
  const siteData = JSON.parse(localStorage.getItem('karmelSiteData'));
  if (!siteData || !siteData.feedback) {
    console.log('لا توجد بيانات لآراء العملاء');
    return;
  }
  
  console.log('تحديث قسم آراء العملاء...');
  
  // تحديث قائمة آراء العملاء
  const feedbackContainer = document.querySelector('.feedback-list');
  if (feedbackContainer) {
    feedbackContainer.innerHTML = '';
    siteData.feedback.forEach(feedback => {
    const feedbackItem = document.createElement('div');
    feedbackItem.className = 'feedback-item';
      feedbackItem.setAttribute('data-rating', '5');
    feedbackItem.innerHTML = `
        <div class="feedback-item-header">
          <img src="${feedback.avatar}" alt="${feedback.name}" class="feedback-avatar" data-src="${feedback.avatar}">
          <div class="feedback-author-info">
            <div class="feedback-author-name">${feedback.name}</div>
            <div class="feedback-author-company">${feedback.company}</div>
          </div>
        </div>
        <div class="feedback-text">
          <span class="ar">"${feedback.text}"</span>
          <span class="en" style="display:none;">"${feedback.text}"</span>
        </div>
        <div class="feedback-rating"></div>
        <div class="feedback-date">${feedback.date}</div>
      `;
      feedbackContainer.appendChild(feedbackItem);
    });
  }
}

// دالة تحديث قسم التواصل
function updateContactSection() {
  const siteData = JSON.parse(localStorage.getItem('karmelSiteData'));
  if (!siteData || !siteData.contact) {
    console.log('لا توجد بيانات لقسم التواصل');
    return;
  }
  
  console.log('تحديث قسم التواصل...');
  
  // تحديث الهاتف
  const contactPhone = document.querySelector('.contact-list li:first-child span');
  if (contactPhone) {
    contactPhone.textContent = siteData.contact.phone;
  }
  
  // تحديث البريد الإلكتروني
  const contactEmail = document.querySelector('.contact-list li:nth-child(2) a');
  if (contactEmail) {
    contactEmail.textContent = siteData.contact.email;
    contactEmail.href = `mailto:${siteData.contact.email}`;
  }
  
  // تحديث العنوان
  const contactAddress = document.querySelector('.contact-list li:last-child');
  if (contactAddress) {
    contactAddress.innerHTML = `<i class="fa fa-map-marker-alt"></i> ${siteData.contact.address}`;
  }
  
  // تحديث الخريطة
  const contactMap = document.querySelector('.contact-map iframe');
  if (contactMap && siteData.contact.map) {
    contactMap.src = siteData.contact.map;
  }
}

// دالة تحديث قسم "من نحن"
function updateAboutSection() {
  const siteData = JSON.parse(localStorage.getItem('karmelSiteData'));
  if (!siteData || !siteData.about) {
    console.log('لا توجد بيانات لقسم "من نحن"');
    return;
  }
  
  console.log('تحديث قسم "من نحن"...');
  
  // تحديث العنوان
  const aboutTitle = document.querySelector('.about-section-title');
  if (aboutTitle) {
    aboutTitle.textContent = siteData.about.title;
  }
  
  // تحديث الوصف
  const aboutDesc = document.querySelector('.about-modern-desc p');
  if (aboutDesc) {
    aboutDesc.textContent = siteData.about.description;
  }
}

// دالة تحديث قسم الرؤية والمهمة والقيم
function updateVisionSection() {
  const siteData = JSON.parse(localStorage.getItem('karmelSiteData'));
  if (!siteData || !siteData.vision) {
    console.log('لا توجد بيانات للرؤية والمهمة والقيم');
    return;
  }
  
  console.log('تحديث قسم الرؤية والمهمة والقيم...');
  
  // تحديث المهمة
  const missionText = document.querySelector('.mission-card .infographic-card-desc .ar');
  if (missionText) {
    missionText.textContent = siteData.vision.mission.text;
  }
  
  const missionIcon = document.querySelector('.mission-card .infographic-icon');
  if (missionIcon) {
    if (siteData.vision.mission.icon.startsWith('fas ')) {
      missionIcon.innerHTML = `<i class="${siteData.vision.mission.icon}"></i>`;
    } else {
      missionIcon.innerHTML = `<span>${siteData.vision.mission.icon}</span>`;
    }
  }
  
  // تحديث الرؤية
  const visionText = document.querySelector('.vision-card .infographic-card-desc .ar');
  if (visionText) {
    visionText.textContent = siteData.vision.vision.text;
  }
  
  const visionIcon = document.querySelector('.vision-card .infographic-icon');
  if (visionIcon) {
    if (siteData.vision.vision.icon.startsWith('fas ')) {
      visionIcon.innerHTML = `<i class="${siteData.vision.vision.icon}"></i>`;
    } else {
      visionIcon.innerHTML = `<span>${siteData.vision.vision.icon}</span>`;
    }
  }
  
  // تحديث القيم
  const valuesText = document.querySelector('.values-card .infographic-card-desc .ar');
  if (valuesText) {
    valuesText.textContent = siteData.vision.values.text;
  }
  
  const valuesIcon = document.querySelector('.values-card .infographic-icon');
  if (valuesIcon) {
    if (siteData.vision.values.icon.startsWith('fas ')) {
      valuesIcon.innerHTML = `<i class="${siteData.vision.values.icon}"></i>`;
    } else {
      valuesIcon.innerHTML = `<span>${siteData.vision.values.icon}</span>`;
    }
  }
}

// دالة تحديث قسم الخدمات
function updateServicesSection() {
  const siteData = JSON.parse(localStorage.getItem('karmelSiteData'));
  if (!siteData || !siteData.services) {
    console.log('لا توجد بيانات للخدمات');
    return;
  }
  
  console.log('تحديث قسم الخدمات...');
  
  // تحديث قائمة الخدمات
  const servicesContainer = document.querySelector('.services-modern-list');
  if (servicesContainer) {
    // إزالة الخدمات الموجودة (باستثناء SVG)
    const existingServices = servicesContainer.querySelectorAll('.service-modern-item');
    existingServices.forEach(service => service.remove());
    
    // إضافة الخدمات الجديدة
    siteData.services.forEach(service => {
      const serviceItem = document.createElement('div');
      serviceItem.className = 'service-modern-item';
      serviceItem.innerHTML = `
        <div class="service-modern-circle">
          ${service.icon.startsWith('fas ') ? `<i class="${service.icon}"></i>` : `<span>${service.icon}</span>`}
        </div>
        <div class="service-modern-label">${service.name}</div>
      `;
      servicesContainer.insertBefore(serviceItem, servicesContainer.querySelector('.services-modern-svg'));
    });
  }
}

// دالة تحديث جميع الأقسام
function updateAllSections() {
  console.log('بدء تحديث جميع الأقسام...');
  try {
    updateHeroSection();
    updateWhyKarmelSection();
    updatePrivacyPolicy();
    updateTermsAndConditions();
    updateServicesSection();
    updateVisionSection();
    updateAboutSection();
    updateContactSection();
    updatePartnersSection();
    updateFeedbackSection();
    console.log('تم تحديث جميع الأقسام بنجاح!');
  } catch (error) {
    console.error('خطأ في تحديث الأقسام:', error);
  }
}

// دالة فحص التحديثات
function checkForUpdates() {
  const lastUpdate = localStorage.getItem('lastSiteUpdate');
  const forceUpdate = localStorage.getItem('forceUpdate');
  
  console.log('فحص التحديثات...', { lastUpdate, forceUpdate });
  
  if (forceUpdate || (lastUpdate && Date.now() - parseInt(lastUpdate) < 5000)) {
    // تحديث حديث، قم بتحديث الموقع
    console.log('تم اكتشاف تحديث جديد، جاري تحديث الموقع...');
    updateAllSections();
    localStorage.removeItem('forceUpdate');
    localStorage.setItem('lastSiteUpdate', Date.now().toString());
    console.log('تم تحديث الموقع بنجاح!');
  } else {
    console.log('لا توجد تحديثات جديدة');
  }
}

// تشغيل فحص التحديثات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
  console.log('site-updater.js: DOMContentLoaded - بدء فحص التحديثات...');
  // فحص التحديثات بعد تحميل الصفحة
  setTimeout(checkForUpdates, 1000);
  
  // فحص التحديثات كل 5 ثوانٍ
  setInterval(checkForUpdates, 5000);
  console.log('site-updater.js: تم إعداد فحص التحديثات');
});

// دالة اختبار التحديث
function testUpdate() {
  console.log('اختبار التحديث...');
  const siteData = JSON.parse(localStorage.getItem('karmelSiteData'));
  console.log('بيانات الموقع:', siteData);
  
  if (!siteData) {
    console.log('لا توجد بيانات في localStorage');
    return;
  }
  
  console.log('بدء تحديث جميع الأقسام...');
  updateAllSections();
  console.log('انتهى اختبار التحديث');
}

// تصدير الدوال للاستخدام الخارجي
window.siteUpdater = {
  updateWhyKarmelSection,
  updatePrivacyPolicy,
  updateTermsAndConditions,
  updateServicesSection,
  updateVisionSection,
  updateAboutSection,
  updateContactSection,
  updateHeroSection,
  updatePartnersSection,
  updateFeedbackSection,
  updateAllSections,
  checkForUpdates,
  testUpdate
}; 