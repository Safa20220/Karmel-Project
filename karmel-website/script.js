// نظام تكامل كرمل+ - الموقع الأساسي
class KarmelWebsite {
  constructor() {
    this.data = this.loadData();
    this.init();
  }

  // تحميل البيانات من لوحة التحكم
  loadData() {
    const savedData = localStorage.getItem('karmelData');
    if (savedData) {
      return JSON.parse(savedData);
    }
    
    // البيانات الافتراضية إذا لم تكن موجودة
    return {
      hero: {
        title: "ودّع الإجراءات اليدوية وابدأ التحول الرقمي مع كرمل+",
        desc1: "نقدّم حلولاً ذكية تسرّع إدارة أعمالك وتزيد من دقتها وكفاءتها.",
        desc2: "اختر كرمل+ لتجربة احترافية تسهّل عليك كل خطوة نحو المستقبل.",
        image: "images/i14.png"
      },
      about: {
        title: "كرمل: حلول برمجية ذكية بثقة واحتراف",
        description: "نحن في كرمل فريق متخصص في تطوير البرمجيات وتصميم الحلول الرقمية الذكية التي تواكب متطلبات السوق وتواجه التحديات بثقة. نضم مطورين، مصممين، ومهندسي برمجيات يعملون بشغف واحد: تحويل الأفكار إلى حلول تقنية فعّالة. نبدأ بتحليل دقيق لاحتياجات العميل، وننفذ بعناية واحتراف، مع التزام كامل في كل مرحلة من مراحل المشروع — من التخطيط إلى الإطلاق وما بعده. نحرص على أن تكون تجربة التعاون معنا سلسة، مهنية، ومبنية على نتائج حقيقية وثقة تدوم."
      },
      vmv: {
        mission: "نبتكر حلولاً تقنية تصنع الفرق ونرافقك في كل خطوة من الفكرة حتى الإنجاز.",
        vision: "أن نصبح العلامة التقنية الأولى في القدس ونقود التحول الرقمي بابتكار حقيقي.",
        values: "الثقة، الشغف، الإبداع، والعمل بروح الفريق لتحقيق النجاح المشترك."
      },
      partners: [
        { id: 1, name: "019", type: "شركة اتصالات", logo: "images/i1.png" },
        { id: 2, name: "Hallo 015", type: "شركة اتصالات", logo: "images/i2.png" },
        { id: 3, name: "Tranzilla", type: "بوابة دفع", logo: "images/i3.png" },
        { id: 4, name: "freeRadius", type: "سيرفر راديوس", logo: "images/i4.png" },
        { id: 5, name: "ريووحيت online", type: "برنامج محاسبة", logo: "images/i5.png" },
        { id: 6, name: "Priority", type: "برنامج ERP", logo: "images/i6.png" },
        { id: 7, name: "Golan", type: "شركة اتصالات", logo: "images/i7.png" },
        { id: 8, name: "Cellcom", type: "شركة اتصالات", logo: "images/i8.png" },
        { id: 9, name: "We4g", type: "شركة اتصالات", logo: "images/i9.png" },
        { id: 10, name: "Pelephone", type: "شركة اتصالات", logo: "images/i10.png" },
        { id: 11, name: "Partner", type: "شركة اتصالات", logo: "images/i11.png" },
        { id: 12, name: "Hot", type: "شركة اتصالات", logo: "images/i12.png" },
        { id: 13, name: "OpenOLT", type: "واجهة OLT", logo: "images/i13.png" }
      ],
      services: [
        { id: 1, name: "نظام إدارة العملاء (CRM)", icon: "🗂️" },
        { id: 2, name: "دعم فني", icon: "🛠️" },
        { id: 3, name: "استشارة تقنية", icon: "💡" },
        { id: 4, name: "تكامل الأنظمة", icon: "🔗" },
        { id: 5, name: "تدريب الموظفين", icon: "🎓" }
      ],
      feedback: [
        {
          id: 1,
          name: "محمد عوض",
          company: "شركة حلول القدس",
          text: "كرمل حولوا فكرتي إلى منتج ناجح بسرعة واحترافية. فريق متعاون وملتزم بالتفاصيل!",
          image: "images/image2.webp",

          rating: 5
        },
        {
          id: 2,
          name: "سارة منصور",
          company: "تطبيق تعلّم",
          text: "أفضل تجربة تطوير مررت بها. التواصل سريع والدعم مستمر حتى بعد التسليم.",
          image: "images/image.png",

          rating: 5
        },
        {
          id: 3,
          name: "أحمد خليل",
          company: "مؤسسة التقنية المتقدمة",
          text: "مستوى احترافي عالي جداً. النتائج تجاوزت توقعاتنا بكثير. أنصح بالتعامل مع كرمل+ بكل ثقة.",
          image: "images/image1.png",

          rating: 5
        }
      ],
      contact: {
        phone: "+972 58-630-0009",
        email: "support@karmelplus.com",
        address: "شعفاط، القدس"
      },
      social: {
        github: "https://github.com",
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      }
    };
  }

  // تهيئة الموقع
  init() {
    this.updateContent();
    this.setupEventListeners();
    this.initAnimations();
    this.initPolicyModals();
    this.initWhyKarmelSection();
    this.initWhyKarmelCTA();
    this.initEnhancedModals();
    this.initAdvancedWhyKarmel();
    this.checkForUpdates();
    this.initMobileOptimizations();
    this.initFeedbackSection();
    this.addFeedbackRatings();
    this.optimizeFeedbackPerformance();
    this.enhanceFeedbackUX();
    this.initAdditionalModalHandlers();
  }

  // تحديث المحتوى من البيانات
  updateContent() {
    this.updateHeroSection();
    this.updateAboutSection();
    this.updateVMVSection();
    this.updatePartnersSection();
    this.updateServicesSection();
    this.updateFeedbackSection();
    this.updateContactSection();
    this.updateSocialLinks();
  }

  // تحديث قسم Hero
  updateHeroSection() {
    const heroTitle = document.querySelector('.hero-main-title');
    const heroDesc1 = document.querySelector('.hero-main-desc');
    const heroDesc2 = document.querySelectorAll('.hero-main-desc')[1];
    const heroImage = document.querySelector('.hero-side-img');

    if (heroTitle) heroTitle.textContent = this.data.hero.title;
    if (heroDesc1) heroDesc1.textContent = this.data.hero.desc1;
    if (heroDesc2) heroDesc2.textContent = this.data.hero.desc2;
    if (heroImage) heroImage.src = this.data.hero.image;
  }

  // تحديث قسم من نحن
  updateAboutSection() {
    const aboutTitle = document.querySelector('#about h2');
    const aboutDesc = document.querySelector('#about p');

    if (aboutTitle) aboutTitle.textContent = this.data.about.title;
    if (aboutDesc) aboutDesc.textContent = this.data.about.description;
  }

  // تحديث قسم الرؤية والمهمة والقيم
  updateVMVSection() {
    const missionText = document.querySelector('.mission-card .infographic-card-desc .ar');
    const visionText = document.querySelector('.vision-card .infographic-card-desc .ar');
    const valuesText = document.querySelector('.values-card .infographic-card-desc .ar');

    if (missionText) missionText.textContent = this.data.vmv.mission;
    if (visionText) visionText.textContent = this.data.vmv.vision;
    if (valuesText) valuesText.textContent = this.data.vmv.values;
  }

  // تحديث قسم الشركاء
  updatePartnersSection() {
    const partnersTrack = document.querySelector('.partners-track');
    if (!partnersTrack) return;

    partnersTrack.innerHTML = '';
    
    this.data.partners.forEach(partner => {
      const partnerItem = document.createElement('div');
      partnerItem.className = 'partner-item';
      partnerItem.innerHTML = `
        <img src="${partner.logo}" alt="${partner.name}">
        <div class="partner-name">${partner.name}</div>
        <div class="partner-type">${partner.type}</div>
      `;
      partnersTrack.appendChild(partnerItem);
    });
  }

  // تحديث قسم الخدمات
  updateServicesSection() {
    const servicesList = document.querySelector('.services-modern-list');
    if (!servicesList) return;

    // إزالة العناصر الموجودة (باستثناء SVG)
    const existingItems = servicesList.querySelectorAll('.service-modern-item');
    existingItems.forEach(item => item.remove());

    // إضافة الخدمات الجديدة
    this.data.services.forEach(service => {
      const serviceItem = document.createElement('div');
      serviceItem.className = 'service-modern-item';
      serviceItem.innerHTML = `
        <div class="service-modern-circle"><span>${service.icon}</span></div>
        <div class="service-modern-label">${service.name}</div>
      `;
      servicesList.insertBefore(serviceItem, servicesList.querySelector('.services-modern-svg'));
    });
  }

  // تحديث قسم آراء العملاء
  updateFeedbackSection() {
    const feedbackList = document.querySelector('.feedback-list');
    if (!feedbackList) return;

    feedbackList.innerHTML = '';
    
    this.data.feedback.forEach(feedback => {
      const feedbackItem = document.createElement('div');
      feedbackItem.className = 'feedback-item';
      feedbackItem.style.cssText = 'display: flex; align-items: flex-start; gap: 1.2em;';
      feedbackItem.innerHTML = `
        <img src="${feedback.image}" alt="${feedback.name}" class="feedback-avatar" style="width:64px; height:64px; border-radius:50%; box-shadow:0 2px 8px rgba(124,58,237,0.10); flex-shrink:0;">
        <div style="flex:1;">
          <div class="feedback-text" style="font-size: 1.08rem; color: #333; background: #fff; border-radius: 14px; box-shadow: 0 2px 12px 0 rgba(124,58,237,0.07); padding: 1.2em 1em; margin-bottom: 0.5em;">
            <span class="ar">"${feedback.text}"</span>
            <span class="en" style="display:none;">"${feedback.text}"</span>
          </div>
          <div class="feedback-author">
            <span class="ar">${feedback.name} - ${feedback.company}</span>
            <span class="en" style="display:none;">${feedback.name} - ${feedback.company}</span>
          </div>
        </div>
      `;
      feedbackList.appendChild(feedbackItem);
    });
  }

  // تحديث قسم التواصل
  updateContactSection() {
    const phoneElement = document.querySelector('.contact-list li:first-child span');
    const emailElement = document.querySelector('.contact-list li:nth-child(2) a');
    const addressElement = document.querySelector('.contact-list li:last-child');

    if (phoneElement) phoneElement.textContent = this.data.contact.phone;
    if (emailElement) {
      emailElement.href = `mailto:${this.data.contact.email}`;
      emailElement.textContent = this.data.contact.email;
    }
    if (addressElement) addressElement.innerHTML = `<i class="fa fa-map-marker-alt"></i> ${this.data.contact.address}`;
  }

  // تحديث روابط التواصل الاجتماعي
  updateSocialLinks() {
    const githubLink = document.querySelector('a[aria-label="GitHub"]');
    const facebookLink = document.querySelector('a[aria-label="Facebook"]');
    const instagramLink = document.querySelector('a[aria-label="Instagram"]');
    const linkedinLink = document.querySelector('a[aria-label="LinkedIn"]');

    if (githubLink) githubLink.href = this.data.social.github;
    if (facebookLink) facebookLink.href = this.data.social.facebook;
    if (instagramLink) instagramLink.href = this.data.social.instagram;
    if (linkedinLink) linkedinLink.href = this.data.social.linkedin;
  }

  // إعداد مستمعي الأحداث
  setupEventListeners() {
    // التنقل في القائمة
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        this.scrollToSection(targetId);
        this.updateActiveNavLink(link);
      });
    });

    // النقر على اللوجو للعودة للصفحة الرئيسية
    const logoLink = document.querySelector('.logo-link');
    if (logoLink) {
      logoLink.addEventListener('click', (e) => {
        e.preventDefault();
        this.scrollToSection('home');
        // إزالة الفئة النشطة من جميع الروابط وإضافتها للرئيسية
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
        });
        const homeLink = document.querySelector('.nav-link[href="#home"]');
        if (homeLink) {
          homeLink.classList.add('active');
        }
      });
    }



    // القائمة المتحركة للموبايل - سيتم التعامل معها في initMobileMenu

    // نموذج التواصل
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleContactForm();
      });
    }

    // مراقبة التمرير للتنقل النشط
    window.addEventListener('scroll', () => {
      this.updateActiveNavOnScroll();
    });
  }

  // التمرير إلى قسم معين
  scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = document.querySelector('.main-header').offsetHeight;
      let targetPosition;
      
      // إذا كان القسم هو الصفحة الرئيسية، نذهب إلى أعلى الصفحة
      if (sectionId === 'home') {
        targetPosition = 0;
      } else {
        targetPosition = section.offsetTop - headerHeight - 20;
      }
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }

  // تحديث الرابط النشط في القائمة
  updateActiveNavLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
    });
    activeLink.classList.add('active');
  }

  // تحديث الرابط النشط أثناء التمرير
  updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const headerHeight = document.querySelector('.main-header').offsetHeight;

    let current = '';
    
    // إذا كنا في أعلى الصفحة، نحدد الصفحة الرئيسية كنشطة
    if (window.pageYOffset < 100) {
      current = 'home';
    } else {
      sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionHeight = section.offsetHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });
    }

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }



  // معالجة نموذج التواصل
  handleContactForm() {
    const form = document.querySelector('.contact-form');
    const formData = new FormData(form);
    const name = formData.get('name') || form.querySelector('input[type="text"]').value;
    const email = formData.get('email') || form.querySelector('input[type="email"]').value;
    const message = formData.get('message') || form.querySelector('textarea').value;

    // حفظ الرسالة في لوحة التحكم
    this.saveContactMessage(name, email, message);
    
    // إظهار رسالة نجاح
    this.showNotification('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.', 'success');
    
    // إعادة تعيين النموذج
    form.reset();
  }

  // حفظ رسالة التواصل
  saveContactMessage(name, email, message) {
    const contactMessages = JSON.parse(localStorage.getItem('karmelContactMessages') || '[]');
    const newMessage = {
      id: Date.now(),
      name: name,
      email: email,
      message: message,
      date: new Date().toISOString()
    };
    
    contactMessages.push(newMessage);
    localStorage.setItem('karmelContactMessages', JSON.stringify(contactMessages));
  }

  // إظهار إشعار
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      left: 20px;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      color: white;
      font-weight: 600;
      z-index: 3000;
      animation: slideInRight 0.3s ease;
    `;
    
    if (type === 'success') {
      notification.style.background = '#10b981';
    } else if (type === 'error') {
      notification.style.background = '#ef4444';
    } else {
      notification.style.background = '#7c3aed';
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }

  // تهيئة الرسوم المتحركة
  initAnimations() {
    // إضافة CSS للرسوم المتحركة
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideInRight {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      .fade-in-up {
        opacity: 0;
        transform: translateY(30px);
        animation: fadeInUp 0.8s ease forwards;
      }
      
      @keyframes fadeInUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .fade-in-section {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.8s ease;
      }
      
      .fade-in-section.visible {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);

    // مراقبة العناصر للرسوم المتحركة
    this.observeElements();
  }

  // مراقبة العناصر للرسوم المتحركة
  observeElements() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('.fade-in-section').forEach(el => {
      observer.observe(el);
    });
  }

  // فحص التحديثات
  checkForUpdates() {
    // فحص التحديثات كل 30 ثانية
    setInterval(() => {
      const newData = localStorage.getItem('karmelData');
      if (newData && newData !== JSON.stringify(this.data)) {
        this.data = JSON.parse(newData);
        this.updateContent();
        console.log('تم تحديث المحتوى من لوحة التحكم');
      }
    }, 30000);
  }

  // تحديث البيانات من ملف JSON
  updateFromFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const updateData = JSON.parse(e.target.result);
        if (updateData.data) {
          this.data = updateData.data;
          localStorage.setItem('karmelData', JSON.stringify(this.data));
          this.updateContent();
          this.showNotification('تم تحديث المحتوى بنجاح!', 'success');
        }
      } catch (error) {
        this.showNotification('خطأ في قراءة ملف التحديث', 'error');
      }
    };
    reader.readAsText(file);
  }

  // ===== MODERN PRIVACY POLICY & TERMS MODALS =====
  initPolicyModals() {
    // ربط روابط السياسة والشروط
    const privacyLink = document.getElementById('privacyPolicyLink');
    const termsLink = document.getElementById('termsLink');
    
    if (privacyLink) {
      privacyLink.addEventListener('click', (e) => {
        e.preventDefault();
        this.showPrivacyPolicy();
      });
    }
    
    if (termsLink) {
      termsLink.addEventListener('click', (e) => {
        e.preventDefault();
        this.showTerms();
      });
    }
    
    // ربط أزرار الإغلاق
    const closeButtons = document.querySelectorAll('.policy-close');
    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        this.closePolicyModal();
      });
    });
    
    // إغلاق النافذة عند النقر خارجها
    const modals = document.querySelectorAll('.policy-modal');
    modals.forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          this.closePolicyModal();
        }
      });
    });
    
    // إغلاق النافذة بمفتاح Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closePolicyModal();
      }
    });
    
    // تحسين تجربة المستخدم
    this.enhanceModalUX();
  }

  showPrivacyPolicy() {
    const modal = document.getElementById('privacyModal');
    if (modal) {
      modal.style.display = 'flex';
      modal.style.opacity = '0';
      document.body.style.overflow = 'hidden';
      
      // إضافة تأثير الظهور
      setTimeout(() => {
        modal.style.opacity = '1';
        modal.classList.add('modal-active');
      }, 10);
      
      this.logEvent('privacy_policy_opened');
    } else {
      console.error('Privacy modal not found');
    }
  }

  showTerms() {
    const modal = document.getElementById('termsModal');
    if (modal) {
      modal.style.display = 'flex';
      modal.style.opacity = '0';
      document.body.style.overflow = 'hidden';
      
      // إضافة تأثير الظهور
      setTimeout(() => {
        modal.style.opacity = '1';
        modal.classList.add('modal-active');
      }, 10);
      
      this.logEvent('terms_conditions_opened');
    } else {
      console.error('Terms modal not found');
    }
  }

  closePolicyModal() {
    const modals = document.querySelectorAll('.policy-modal');
    modals.forEach(modal => {
      if (modal.classList.contains('modal-active') || modal.style.display === 'flex') {
        modal.style.opacity = '0';
        modal.classList.remove('modal-active');
        
        setTimeout(() => {
          modal.style.display = 'none';
          document.body.style.overflow = 'auto';
        }, 300);
      }
    });
  }

  logEvent(eventName) {
    console.log(`Event: ${eventName} - ${new Date().toISOString()}`);
  }

  enhanceModalUX() {
    // تأثير التمرير على الخلفية
    const modalBodies = document.querySelectorAll('.policy-modal-body');
    modalBodies.forEach(body => {
      body.addEventListener('scroll', () => {
        const scrollTop = body.scrollTop;
        const maxScroll = body.scrollHeight - body.clientHeight;
        const scrollPercent = scrollTop / maxScroll;
        
        // تغيير لون الخلفية بناءً على التمرير
        body.style.background = `linear-gradient(135deg, 
          rgba(248, 250, 255, ${1 - scrollPercent * 0.1}) 0%, 
          rgba(240, 248, 255, ${1 - scrollPercent * 0.1}) 100%)`;
      });
    });
    
    // تأثيرات على الروابط
    const policyLinks = document.querySelectorAll('.policy-content a');
    policyLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-2px)';
        link.style.boxShadow = '0 4px 12px rgba(124, 58, 237, 0.3)';
      });
      
      link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0)';
        link.style.boxShadow = 'none';
      });
    });
  }

  // ===== MODERN WHY KARMEL SECTION =====
  initWhyKarmelSection() {
    this.initWhyKarmelAnimations();
    this.initWhyKarmelInteractions();
    this.initWhyKarmelStats();
    this.initWhyKarmelParallax();
    this.initWhyKarmelCTA();
  }

  initWhyKarmelAnimations() {
    // استخدام Intersection Observer للتحريك عند الظهور
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // تأخير متسلسل للبطاقات
          setTimeout(() => {
            entry.target.classList.add('aos-animate');
            entry.target.classList.add('card-animated');
          }, index * 200);
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '0px 0px -50px 0px'
    });

    const cards = document.querySelectorAll('.why-karmel-card');
    cards.forEach(card => {
      observer.observe(card);
    });
  }

  initWhyKarmelInteractions() {
    const cards = document.querySelectorAll('.why-karmel-card');
    
    cards.forEach(card => {
      // تأثيرات عند التمرير
      card.addEventListener('mouseenter', () => {
        this.animateCardHover(card, true);
        this.addGlowEffect(card);
      });
      
      card.addEventListener('mouseleave', () => {
        this.animateCardHover(card, false);
        this.removeGlowEffect(card);
      });
      
      // تأثير النقر
      card.addEventListener('click', () => {
        this.animateCardClick(card);
      });
    });
  }

  animateCardHover(card, isHovering) {
    const icon = card.querySelector('.why-karmel-icon');
    const title = card.querySelector('.why-karmel-title');
    const desc = card.querySelector('.why-karmel-desc');
    
    if (isHovering) {
      card.style.transform = 'translateY(-15px) scale(1.02)';
      card.style.boxShadow = '0 25px 50px rgba(124, 58, 237, 0.2)';
      
      if (icon) {
        icon.style.transform = 'scale(1.15) rotate(8deg)';
      }
      
      if (title) {
        title.style.color = '#7c3aed';
      }
      
      if (desc) {
        desc.style.color = '#555';
      }
    } else {
      card.style.transform = 'translateY(0) scale(1)';
      card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
      
      if (icon) {
        icon.style.transform = 'scale(1) rotate(0deg)';
      }
      
      if (title) {
        title.style.color = '#333';
      }
      
      if (desc) {
        desc.style.color = '#666';
      }
    }
  }

  animateCardClick(card) {
    // تأثير النقر
    card.style.transform = 'scale(0.98)';
    setTimeout(() => {
      card.style.transform = 'scale(1)';
    }, 150);
    
    // إضافة تأثير النبض
    card.style.animation = 'pulse 0.6s ease';
    setTimeout(() => {
      card.style.animation = '';
    }, 600);
  }

  addGlowEffect(card) {
    // إضافة تأثير التوهج الديناميكي
    const glow = document.createElement('div');
    glow.className = 'dynamic-glow';
    glow.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 120px;
      height: 120px;
      background: radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 0;
      animation: glowPulse 2s ease-in-out infinite;
    `;
    
    card.appendChild(glow);
    
    // إضافة CSS للتحريك
    if (!document.querySelector('#glow-animation')) {
      const style = document.createElement('style');
      style.id = 'glow-animation';
      style.textContent = `
        @keyframes glowPulse {
          0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
        }
        
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  removeGlowEffect(card) {
    const glow = card.querySelector('.dynamic-glow');
    if (glow) {
      glow.remove();
    }
  }

  initWhyKarmelStats() {
    // مراقبة الأرقام الإحصائية
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateStatNumber(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
      observer.observe(stat);
    });
  }

  animateStatNumber(element) {
    const finalValue = element.textContent;
    const isPercentage = finalValue.includes('%');
    const isPlus = finalValue.includes('+');
    
    // استخراج الرقم
    const number = parseInt(finalValue.replace(/[^0-9]/g, ''));
    
    if (isNaN(number)) return;
    
    let currentValue = 0;
    const increment = number / 50; // 50 خطوة للتحريك
    const stepTime = 30; // 30ms لكل خطوة
    
    const timer = setInterval(() => {
      currentValue += increment;
      
      if (currentValue >= number) {
        currentValue = number;
        clearInterval(timer);
        element.classList.add('animated');
      }
      
      const displayValue = Math.floor(currentValue);
      
      if (isPercentage) {
        element.textContent = displayValue + '%';
      } else if (isPlus) {
        element.textContent = displayValue + '+';
      } else {
        element.textContent = displayValue;
      }
    }, stepTime);
  }

  initWhyKarmelParallax() {
    const shapes = document.querySelectorAll('.shape');
    const ctaSection = document.querySelector('.why-karmel-cta');
    
    if (!ctaSection) return;
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.2);
        shape.style.transform = `translateY(${rate * speed}px) rotate(${rate * 0.1}deg)`;
      });
    });
  }

  initWhyKarmelCTA() {
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
      ctaButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.animateCTAButton(ctaButton);
        
        // التمرير إلى قسم التواصل
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    }
  }

  animateCTAButton(button) {
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = 'scale(1)';
    }, 150);
    
    // إضافة تأثير النبض
    button.style.animation = 'pulse 0.6s ease';
    setTimeout(() => {
      button.style.animation = '';
    }, 600);
  }

  // ===== ENHANCED MODAL FEATURES =====
  initEnhancedModals() {
    // إضافة تأثيرات متقدمة للنوافذ المنبثقة
    this.addModalAnimations();
    this.addModalKeyboardSupport();
    this.addModalAccessibility();
  }

  addModalAnimations() {
    const modals = document.querySelectorAll('.policy-modal');
    
    modals.forEach(modal => {
      // تأثير الظهور التدريجي
      modal.addEventListener('transitionend', () => {
        if (modal.classList.contains('modal-active')) {
          const content = modal.querySelector('.policy-modal-content');
          if (content) {
            content.style.animation = 'modalContentSlide 0.6s ease-out';
          }
        }
      });
    });
    
    // إضافة CSS للتحريك
    if (!document.querySelector('#modal-animations')) {
      const style = document.createElement('style');
      style.id = 'modal-animations';
      style.textContent = `
        @keyframes modalContentSlide {
          from {
            opacity: 0;
            transform: translate(-50%, -60%) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
        
        .policy-modal-content {
          animation: modalContentSlide 0.6s ease-out;
        }
        
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  addModalKeyboardSupport() {
    // دعم لوحة المفاتيح للنوافذ المنبثقة
    document.addEventListener('keydown', (e) => {
      const activeModal = document.querySelector('.policy-modal.modal-active');
      
      if (activeModal) {
        switch (e.key) {
          case 'Escape':
            this.closePolicyModal();
            break;
          case 'Tab':
            // منع الخروج من النافذة المنبثقة
            const focusableElements = activeModal.querySelectorAll(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
              }
            }
            break;
        }
      }
    });
  }

  addModalAccessibility() {
    // تحسين إمكانية الوصول
    const modals = document.querySelectorAll('.policy-modal');
    
    modals.forEach(modal => {
      // إضافة ARIA attributes
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('aria-labelledby', 'modal-title');
      
      // إضافة focus trap
      const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    });
  }

  // ===== ADVANCED WHY KARMEL FEATURES =====
  initAdvancedWhyKarmel() {
    this.addWhyKarmelScrollEffects();
    this.addWhyKarmelHoverEffects();
    this.addWhyKarmelPerformanceOptimization();
  }

  addWhyKarmelScrollEffects() {
    // تأثيرات التمرير المتقدمة
    const section = document.querySelector('.why-karmel-section');
    if (!section) return;
    
    window.addEventListener('scroll', () => {
      const rect = section.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      
      // تأثير parallax للخلفية
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        section.style.transform = `translateY(${progress * 20}px)`;
      }
      
      // تأثير الظهور التدريجي للعناصر
      const cards = section.querySelectorAll('.why-karmel-card');
      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        if (cardRect.top < window.innerHeight * 0.8) {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }
      });
    });
  }

  addWhyKarmelHoverEffects() {
    // تأثيرات التمرير المتقدمة
    const cards = document.querySelectorAll('.why-karmel-card');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', (event) => {
        // إضافة تأثير التموج
        this.createRippleEffect(card, event);
        
        // تحريك العناصر الأخرى
        cards.forEach(otherCard => {
          if (otherCard !== card) {
            otherCard.style.transform = 'scale(0.95)';
            otherCard.style.filter = 'blur(1px)';
          }
        });
      });
      
      card.addEventListener('mouseleave', () => {
        // إعادة العناصر الأخرى
        cards.forEach(otherCard => {
          otherCard.style.transform = 'scale(1)';
          otherCard.style.filter = 'blur(0)';
        });
      });
    });
  }

  createRippleEffect(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, transparent 70%);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s ease-out;
      pointer-events: none;
      z-index: 1;
    `;
    
    element.appendChild(ripple);
    
    // إضافة CSS للتحريك إذا لم يكن موجوداً
    if (!document.querySelector('#ripple-animation')) {
      const style = document.createElement('style');
      style.id = 'ripple-animation';
      style.textContent = `
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  addWhyKarmelPerformanceOptimization() {
    // تحسين الأداء
    let ticking = false;
    
    const updateOnScroll = () => {
      // تحديث العناصر المرئية فقط
      const visibleCards = document.querySelectorAll('.why-karmel-card');
      visibleCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          card.style.willChange = 'transform';
        } else {
          card.style.willChange = 'auto';
        }
      });
      
      ticking = false;
    };
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateOnScroll);
        ticking = true;
      }
    });
  }

  // تحسينات شاملة للجوال
  initMobileOptimizations() {
    console.log('Initializing mobile optimizations...');
    this.initMobileMenu();
    this.initTouchOptimizations();
    this.initMobileScroll();
    this.initMobileForms();
    this.initMobileImages();
    this.initMobilePerformance();
    console.log('Mobile optimizations initialized');
  }

  // تهيئة القائمة المتحركة للجوال
  initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navList = document.getElementById('navList');
    const headerNav = document.querySelector('.header-nav');
    
    console.log('Initializing mobile menu...');
    console.log('Mobile menu elements:', { mobileMenuToggle, navList });
    
    // إنشاء overlay إذا لم يكن موجوداً
    let overlay = document.querySelector('.mobile-menu-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'mobile-menu-overlay';
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 998;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
      `;
      document.body.appendChild(overlay);
      console.log('Overlay created');
    }

    if (mobileMenuToggle && navList) {
      console.log('Mobile menu elements found, adding event listeners...');
      
      // إزالة أي event listeners سابقة
      mobileMenuToggle.removeEventListener('click', mobileMenuToggle._clickHandler);
      
      // إنشاء handler جديد
      mobileMenuToggle._clickHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Mobile menu toggle clicked');
        
        const isActive = navList.classList.contains('active');
        console.log('Current state:', isActive);
        
        navList.classList.toggle('active');
        headerNav.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');

        const newState = navList.classList.contains('active');
        console.log('New state:', newState);
        
        if (newState) {
          overlay.style.opacity = '1';
          overlay.style.visibility = 'visible';
          document.body.style.overflow = 'hidden';
          console.log('Menu opened');
        } else {
          overlay.style.opacity = '0';
          overlay.style.visibility = 'hidden';
          document.body.style.overflow = '';
          console.log('Menu closed');
        }
      };
      
      mobileMenuToggle.addEventListener('click', mobileMenuToggle._clickHandler);

      // إغلاق القائمة عند النقر على الخلفية
      overlay.addEventListener('click', () => {
        console.log('Overlay clicked, closing menu');
        navList.classList.remove('active');
        headerNav.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
        document.body.style.overflow = '';
      });

      // إغلاق القائمة عند النقر على أي رابط
      const navLinks = navList.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          console.log('Nav link clicked, closing menu');
          navList.classList.remove('active');
          headerNav.classList.remove('active');
          mobileMenuToggle.classList.remove('active');
          overlay.style.opacity = '0';
          overlay.style.visibility = 'hidden';
          document.body.style.overflow = '';
        });
      });
      
      console.log('Mobile menu event listeners added successfully');
    } else {
      console.log('Mobile menu elements not found:', { mobileMenuToggle, navList });
    }
  }

  // تحسينات التفاعل باللمس
  initTouchOptimizations() {
    // تحسين الأزرار لللمس
    const buttons = document.querySelectorAll('.hero-main-btn, .contact-light-btn, .cta-button');
    buttons.forEach(button => {
      button.addEventListener('touchstart', (e) => {
        e.preventDefault();
        button.style.transform = 'scale(0.95)';
      });

      button.addEventListener('touchend', () => {
        button.style.transform = 'scale(1)';
      });
    });

    // تحسين البطاقات لللمس
    const cards = document.querySelectorAll('.service-fresh-card, .service-glass-card, .why-karmel-card');
    cards.forEach(card => {
      card.addEventListener('touchstart', (e) => {
        e.preventDefault();
        card.style.transform = 'scale(0.98)';
      });

      card.addEventListener('touchend', () => {
        card.style.transform = 'scale(1)';
      });
    });
  }

  // تحسين التمرير للجوال
  initMobileScroll() {
    let isScrolling = false;
    let scrollTimeout;

    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;
        document.body.classList.add('is-scrolling');
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        document.body.classList.remove('is-scrolling');
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // تحسين التمرير السلس
    const smoothScrollTo = (target) => {
      const headerHeight = document.querySelector('.main-header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    };

    // تطبيق التمرير السلس على جميع الروابط الداخلية
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        
        if (target) {
          e.preventDefault();
          smoothScrollTo(target);
        }
      });
    });
  }

  // تحسين النماذج للجوال
  initMobileForms() {
    const formInputs = document.querySelectorAll('.contact-light-form input, .contact-light-form textarea');
    
    formInputs.forEach(input => {
      // منع التكبير في iOS
      input.addEventListener('focus', () => {
        input.style.fontSize = '16px';
      });

      // تحسين تجربة الإدخال
      input.addEventListener('input', () => {
        if (input.value.length > 0) {
          input.classList.add('has-content');
        } else {
          input.classList.remove('has-content');
        }
      });

      // تحسين التمرير عند التركيز
      input.addEventListener('focus', () => {
        setTimeout(() => {
          input.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
      });
    });

    // تحسين النموذج للجوال
    const contactForm = document.querySelector('.contact-light-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // إظهار مؤشر التحميل
        const submitBtn = contactForm.querySelector('.contact-light-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'جاري الإرسال...';
        submitBtn.disabled = true;

        // محاكاة إرسال النموذج
        setTimeout(() => {
          submitBtn.textContent = 'تم الإرسال بنجاح!';
          submitBtn.style.background = '#4CAF50';
          
          setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
            contactForm.reset();
          }, 2000);
        }, 1500);
      });
    }
  }

  // تحسين الصور للجوال
  initMobileImages() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
      // تحميل الصور بشكل تدريجي
      if (img.dataset.src) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              observer.unobserve(img);
            }
          });
        });
        
        observer.observe(img);
      }

      // تحسين عرض الصور
      img.addEventListener('load', () => {
        img.classList.add('loaded');
      });

      // معالجة أخطاء تحميل الصور
      img.addEventListener('error', () => {
        img.style.display = 'none';
      });
    });
  }

  // تحسينات الأداء للجوال
  initMobilePerformance() {
    // تحسين الرسوم المتحركة للجوال
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      document.body.classList.add('reduced-motion');
    }

    // تحسين التمرير
    let ticking = false;
    const updateOnScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // تحديث العناصر المرئية فقط
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', updateOnScroll, { passive: true });

    // تحسين تحميل الصفحة
    window.addEventListener('load', () => {
      document.body.classList.add('page-loaded');
    });

    // تحسين استهلاك البطارية
    let isVisible = true;
    document.addEventListener('visibilitychange', () => {
      isVisible = !document.hidden;
      
      if (!isVisible) {
        // إيقاف الرسوم المتحركة عند عدم رؤية الصفحة
        document.body.classList.add('page-hidden');
      } else {
        document.body.classList.remove('page-hidden');
      }
    });
  }

  // تهيئة قسم آراء العملاء
  initFeedbackSection() {
    this.setupFeedbackAnimations();
    this.setupFeedbackInteractions();
    this.initFeedbackScrollEffects();
  }

  // إعداد التأثيرات الحركية لقسم آراء العملاء
  setupFeedbackAnimations() {
    const feedbackItems = document.querySelectorAll('.feedback-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-visible');
          this.animateFeedbackItem(entry.target);
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '0px 0px -50px 0px'
    });

    feedbackItems.forEach(item => {
      observer.observe(item);
    });
  }

  // تأثير حركي لعنصر آراء العملاء
  animateFeedbackItem(item) {
    const avatar = item.querySelector('.feedback-avatar');
    const text = item.querySelector('.feedback-text');
    
    if (avatar) {
      avatar.style.animation = 'feedbackAvatarPop 0.6s ease forwards';
    }
    
    if (text) {
      text.style.animation = 'feedbackTextSlide 0.8s ease forwards';
    }
  }

  // إعداد التفاعلات لقسم آراء العملاء
  setupFeedbackInteractions() {
    const feedbackItems = document.querySelectorAll('.feedback-item');
    
    feedbackItems.forEach(item => {
      // تأثير عند التمرير
      item.addEventListener('mouseenter', () => {
        this.addFeedbackHoverEffect(item);
      });
      
      item.addEventListener('mouseleave', () => {
        this.removeFeedbackHoverEffect(item);
      });
      
      // تأثير عند النقر
      item.addEventListener('click', (e) => {
        if (!e.target.closest('a')) {
          this.addFeedbackClickEffect(item);
        }
      });
      
      // دعم لوحة المفاتيح
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.addFeedbackClickEffect(item);
        }
      });
    });
  }

  // تأثير التمرير على عنصر آراء العملاء
  addFeedbackHoverEffect(item) {
    item.style.transform = 'translateY(-8px) scale(1.02)';
    item.style.boxShadow = '0 20px 60px rgba(124, 58, 237, 0.2)';
    
    const avatar = item.querySelector('.feedback-avatar');
    if (avatar) {
      avatar.style.transform = 'scale(1.15) rotate(5deg)';
    }
  }

  // إزالة تأثير التمرير
  removeFeedbackHoverEffect(item) {
    item.style.transform = '';
    item.style.boxShadow = '';
    
    const avatar = item.querySelector('.feedback-avatar');
    if (avatar) {
      avatar.style.transform = '';
    }
  }

  // تأثير النقر على عنصر آراء العملاء
  addFeedbackClickEffect(item) {
    item.style.transform = 'scale(0.98)';
    item.style.transition = 'transform 0.1s ease';
    
    setTimeout(() => {
      item.style.transform = '';
      item.style.transition = '';
    }, 100);
    
    // إضافة تأثير التموج
    this.createFeedbackRipple(item);
  }

  // إنشاء تأثير التموج
  createFeedbackRipple(item) {
    const ripple = document.createElement('div');
    ripple.className = 'feedback-ripple';
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(124, 58, 237, 0.3);
      transform: scale(0);
      animation: feedbackRipple 0.6s linear;
      pointer-events: none;
      top: 50%;
      left: 50%;
      width: 100px;
      height: 100px;
      margin: -50px 0 0 -50px;
    `;
    
    item.style.position = 'relative';
    item.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  // تأثيرات التمرير لقسم آراء العملاء
  initFeedbackScrollEffects() {
    const feedbackSection = document.querySelector('.feedback-section');
    if (!feedbackSection) return;
    
    const handleScroll = () => {
      const rect = feedbackSection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible) {
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / rect.height));
        this.updateFeedbackScrollProgress(progress);
      }
    };
    
    window.addEventListener('scroll', this.throttle(handleScroll, 16));
    handleScroll(); // تشغيل مرة واحدة عند التحميل
  }

  // تحديث تقدم التمرير
  updateFeedbackScrollProgress(progress) {
    const feedbackItems = document.querySelectorAll('.feedback-item');
    
    feedbackItems.forEach((item, index) => {
      const delay = index * 0.1;
      const itemProgress = Math.max(0, Math.min(1, (progress - delay) * 2));
      
      if (itemProgress > 0) {
        item.style.opacity = itemProgress;
        item.style.transform = `translateY(${20 * (1 - itemProgress)}px)`;
      }
    });
  }

  // دالة مساعدة للتحكم في معدل التحديث
  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }

  // تحسين تجربة المستخدم لقسم آراء العملاء
  enhanceFeedbackUX() {
    // إضافة تأثيرات صوتية (اختيارية)
    this.addFeedbackSoundEffects();
    
    // إضافة تأثيرات بصرية إضافية
    this.addFeedbackVisualEffects();
    
    // تحسين التفاعل مع لوحة المفاتيح
    this.enhanceFeedbackKeyboardSupport();
  }

  // إضافة تأثيرات صوتية
  addFeedbackSoundEffects() {
    const feedbackItems = document.querySelectorAll('.feedback-item');
    
    feedbackItems.forEach(item => {
      item.addEventListener('click', () => {
        // يمكن إضافة صوت هنا إذا كان مطلوباً
        this.playFeedbackSound();
      });
    });
  }

  // تشغيل صوت التأثير
  playFeedbackSound() {
    // يمكن إضافة كود تشغيل الصوت هنا
    // مثال: new Audio('feedback-click.mp3').play();
  }

  // إضافة تأثيرات بصرية إضافية
  addFeedbackVisualEffects() {
    const feedbackItems = document.querySelectorAll('.feedback-item');
    
    feedbackItems.forEach((item, index) => {
      // إضافة تأثير التوهج عند التمرير
      item.addEventListener('mouseenter', () => {
        this.addGlowEffectToFeedback(item);
      });
      
      item.addEventListener('mouseleave', () => {
        this.removeGlowEffectFromFeedback(item);
      });
      
      // إضافة تأثير النبض عند التحميل
      setTimeout(() => {
        item.classList.add('pulse-on-load');
      }, index * 200);
    });
  }

  // إضافة تأثير التوهج
  addGlowEffectToFeedback(item) {
    item.style.boxShadow = '0 0 30px rgba(124, 58, 237, 0.3)';
    item.style.borderColor = '#7c3aed';
  }

  // إزالة تأثير التوهج
  removeGlowEffectFromFeedback(item) {
    item.style.boxShadow = '';
    item.style.borderColor = '';
  }

  // تحسين دعم لوحة المفاتيح
  enhanceFeedbackKeyboardSupport() {
    const feedbackItems = document.querySelectorAll('.feedback-item');
    
    feedbackItems.forEach(item => {
      item.setAttribute('tabindex', '0');
      item.setAttribute('role', 'button');
      item.setAttribute('aria-label', 'رأي العميل - اضغط للتفاعل');
      
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.triggerFeedbackInteraction(item);
        }
      });
    });
  }

  // تفعيل التفاعل مع آراء العملاء
  triggerFeedbackInteraction(item) {
    // إضافة تأثير النقر
    item.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
      item.style.transform = '';
    }, 150);
    
    // يمكن إضافة المزيد من التفاعلات هنا
    this.showFeedbackDetails(item);
  }

  // عرض تفاصيل إضافية للرأي
  showFeedbackDetails(item) {
    const authorName = item.querySelector('.feedback-author-name')?.textContent;
    const company = item.querySelector('.feedback-author-company')?.textContent;
    const text = item.querySelector('.feedback-text')?.textContent;
    
    // يمكن إضافة نافذة منبثقة أو تفاصيل إضافية هنا
    console.log(`تفاصيل رأي ${authorName} من ${company}: ${text}`);
  }

  // تحسين الأداء لقسم آراء العملاء
  optimizeFeedbackPerformance() {
    // استخدام Intersection Observer للتحميل الكسول
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        }
      });
    });
    
    // مراقبة الصور
    document.querySelectorAll('.feedback-avatar[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
    
    // تحسين التمرير
    this.throttleFeedbackScroll();
  }

  // تحسين أداء التمرير
  throttleFeedbackScroll() {
    let ticking = false;
    
    const updateFeedbackOnScroll = () => {
      const feedbackItems = document.querySelectorAll('.feedback-item');
      
      feedbackItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          item.classList.add('in-viewport');
        } else {
          item.classList.remove('in-viewport');
        }
      });
      
      ticking = false;
    };
    
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateFeedbackOnScroll);
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', requestTick, { passive: true });
  }

  // إضافة تقييمات النجوم
  addFeedbackRatings() {
    const feedbackItems = document.querySelectorAll('.feedback-item');
    
    feedbackItems.forEach(item => {
      const rating = item.dataset.rating || 5;
      const ratingContainer = item.querySelector('.feedback-rating');
      
      if (ratingContainer) {
        ratingContainer.innerHTML = '';
        for (let i = 0; i < 5; i++) {
          const star = document.createElement('span');
          star.className = 'feedback-star';
          star.innerHTML = i < rating ? '★' : '☆';
          star.style.animationDelay = `${i * 0.1}s`;
          ratingContainer.appendChild(star);
        }
      }
    });
  }

  // تحديث قسم آراء العملاء من البيانات
  updateFeedbackSection() {
    const feedbackList = document.querySelector('.feedback-list');
    if (!feedbackList || !this.data.feedback) return;
    
    feedbackList.innerHTML = '';
    
    this.data.feedback.forEach((feedback, index) => {
      const feedbackItem = this.createFeedbackItem(feedback, index);
      feedbackList.appendChild(feedbackItem);
    });
    
    // إعادة تهيئة التأثيرات
    this.initFeedbackSection();
  }

  // إنشاء عنصر آراء العملاء
  createFeedbackItem(feedback, index) {
    const item = document.createElement('div');
    item.className = 'feedback-item';
    item.dataset.rating = feedback.rating || 5;
    item.style.animationDelay = `${index * 0.2}s`;
    
    item.innerHTML = `
      <div class="feedback-item-header">
        <img src="${feedback.image}" alt="${feedback.name}" class="feedback-avatar" data-src="${feedback.image}">
        <div class="feedback-author-info">
          <div class="feedback-author-name">${feedback.name}</div>
          <div class="feedback-author-company">${feedback.company}</div>
        </div>
      </div>
      <div class="feedback-text">${feedback.text}</div>
      <div class="feedback-rating"></div>
    `;
    
    return item;
  }

  // تهيئة إضافية للنوافذ المنبثقة
  initAdditionalModalHandlers() {
    // إضافة مستمعي الأحداث للروابط بعد تحميل الصفحة
    setTimeout(() => {
      const privacyLink = document.getElementById('privacyPolicyLink');
      const termsLink = document.getElementById('termsLink');
      
      if (privacyLink) {
        privacyLink.onclick = (e) => {
          e.preventDefault();
          this.showPrivacyPolicy();
        };
      }
      
      if (termsLink) {
        termsLink.onclick = (e) => {
          e.preventDefault();
          this.showTerms();
        };
      }
      
      // إضافة مستمعي الأحداث لأزرار الإغلاق
      const closeButtons = document.querySelectorAll('.policy-close');
      closeButtons.forEach(button => {
        button.onclick = () => {
          this.closePolicyModal();
        };
      });
      
      // إغلاق النافذة عند النقر خارجها
      const modals = document.querySelectorAll('.policy-modal');
      modals.forEach(modal => {
        modal.onclick = (e) => {
          if (e.target === modal) {
            this.closePolicyModal();
          }
        };
      });
      
    }, 100);
  }
}

// تهيئة الموقع عند تحميل الصفحة
let karmelWebsite;
document.addEventListener('DOMContentLoaded', () => {
  karmelWebsite = new KarmelWebsite();
});

// دالة مساعدة لتحميل ملف التحديث
function loadUpdateFile() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (file && karmelWebsite) {
      karmelWebsite.updateFromFile(file);
    }
  };
  input.click();
}

// إضافة زر تحديث مخفي للمطورين
if (window.location.search.includes('dev=true')) {
  const updateBtn = document.createElement('button');
  updateBtn.textContent = 'تحديث من ملف';
  updateBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #7c3aed;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    z-index: 1000;
  `;
  updateBtn.onclick = loadUpdateFile;
  document.body.appendChild(updateBtn);
}



document.addEventListener("DOMContentLoaded", function() {
  const contactSection = document.querySelector('.contact-section');

  function checkContactSection() {
    const rect = contactSection.getBoundingClientRect();
    // إذا كان القسم ظاهرًا بنسبة 40% على الأقل
    if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
      contactSection.classList.add('visible');
    } else {
      contactSection.classList.remove('visible');
    }
  }

  // عند الضغط على رابط تواصل معنا في القائمة
  document.querySelectorAll('a[href="#contact"]').forEach(link => {
    link.addEventListener('click', function(e) {
      setTimeout(() => {
        contactSection.classList.add('visible');
      }, 300);
    });
  });

  window.addEventListener('scroll', checkContactSection);
  checkContactSection(); // للتفعيل إذا كان ظاهرًا من البداية
});

document.addEventListener("DOMContentLoaded", function() {
  const servicesSection = document.querySelector('.services-modern-wave');
  const servicesTitle = document.querySelector('.services-modern-title');
  const serviceItems = document.querySelectorAll('.service-modern-item');
  function bounceAll() {
    servicesTitle.classList.remove('bounce');
    void servicesTitle.offsetWidth;
    servicesTitle.classList.add('bounce');
    serviceItems.forEach(item => {
      item.classList.remove('bounce');
      void item.offsetWidth;
      item.classList.add('bounce');
    });
  }
  function checkServicesSection() {
    const rect = servicesSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
      servicesSection.classList.add('animated');
      bounceAll();
    } else {
      servicesSection.classList.remove('animated');
    }
  }
  document.querySelectorAll('a[href=\"#services\"]').forEach(link => {
    link.addEventListener('click', function(e) {
      setTimeout(() => {
        servicesSection.classList.add('animated');
        bounceAll();
      }, 300);
    });
  });
  window.addEventListener('scroll', checkServicesSection);
  checkServicesSection();
});

document.addEventListener("DOMContentLoaded", function() {
  const aboutSection = document.querySelector('#about');
  const aboutTitle = document.querySelector('.about-section-title');
  function bounceAbout() {
    aboutTitle.classList.remove('bounce');
    void aboutTitle.offsetWidth;
    aboutTitle.classList.add('bounce');
  }
  function checkAboutSection() {
    const rect = aboutSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
      bounceAbout();
    }
  }
  document.querySelectorAll('a[href="#about"]').forEach(link => {
    link.addEventListener('click', function(e) {
      setTimeout(bounceAbout, 300);
    });
  });
  window.addEventListener('scroll', checkAboutSection);
});

