 document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const errorMessage = document.getElementById('errorMessage');
      const successMessage = document.getElementById('successMessage');
      const loginBtn = document.getElementById('loginBtn');
      const btnText = loginBtn.querySelector('.btn-text');
      
    
      errorMessage.style.display = 'none';
      successMessage.style.display = 'none';
      
 
      loginBtn.classList.add('loading');
      btnText.textContent = 'جاري التحقق من البيانات...';
      
      // محاكاة التحقق من البيانات
      setTimeout(() => {
        // بيانات تسجيل الدخول الافتراضية
        const validUsername = 'admin';
        const validPassword = 'karmel123';
        
        if (username === validUsername && password === validPassword) {
          // عرض رسالة النجاح
          successMessage.textContent = '✅ تم تسجيل الدخول بنجاح!';
          successMessage.style.display = 'block';
          
          // تغيير حالة الزر
          loginBtn.classList.remove('loading');
          loginBtn.classList.add('success');
          btnText.textContent = 'تم تسجيل الدخول بنجاح!';
          
          // حفظ حالة تسجيل الدخول
          sessionStorage.setItem('adminLoggedIn', 'true');
          sessionStorage.setItem('adminUsername', username);
          

          setTimeout(() => {
            window.location.href = 'dashboard.html';
          }, 2000);
        } else {
          // عرض رسالة الخطأ
          errorMessage.textContent = '❌ اسم المستخدم أو كلمة المرور غير صحيحة';
          errorMessage.style.display = 'block';
          
          // تغيير حالة الزر
          loginBtn.classList.remove('loading');
          loginBtn.classList.add('error');
          btnText.textContent = 'فشل تسجيل الدخول';
          
          // هز الحقول
          document.getElementById('username').style.animation = 'shake 0.6s ease-in-out';
          document.getElementById('password').style.animation = 'shake 0.6s ease-in-out';
          
          setTimeout(() => {
            document.getElementById('username').style.animation = '';
            document.getElementById('password').style.animation = '';
          }, 600);
          
          // إعادة تعيين الزر بعد 3 ثوانٍ
          setTimeout(() => {
            loginBtn.classList.remove('error');
            btnText.textContent = 'دخول إلى لوحة التحكم';
          }, 3000);
        }
      }, 2000);
    });
    
    // التحقق من حالة تسجيل الدخول عند تحميل الصفحة
    window.addEventListener('load', function() {
      const isLoggedIn = sessionStorage.getItem('adminLoggedIn');
      if (isLoggedIn === 'true') {
        window.location.href = 'dashboard.html';
      }
    });

    // تأثيرات إضافية للحقول
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'translateY(-3px)';
      });
      
      input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'translateY(0)';
      });

      // تأثير الكتابة
      input.addEventListener('input', function() {
        if (this.value.length > 0) {
          this.style.borderColor = 'var(--accent-primary)';
        } else {
          this.style.borderColor = 'var(--border-color)';
        }
      });
    });

const passwordToggle = document.getElementById('passwordToggle');
const passwordInput = document.getElementById('password');

// عند الضغط فقط، تتغير الأيقونة
passwordToggle.addEventListener('click', function () {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    this.innerHTML = '<i class="fi fi-ss-eye"></i>';
    this.classList.add('active');
  } else {
    passwordInput.type = 'password';
    this.innerHTML = '<i class="fi fi-sr-eye-crossed"></i>';
    this.classList.remove('active');
  }
});

// عند تحميل الصفحة، تأكد أن الحالة تبدأ بشكل صحيح (كلمة المرور مخفية + أيقونة مخفية)
window.addEventListener('DOMContentLoaded', () => {
  passwordInput.type = 'password';
  passwordToggle.innerHTML = '<i class="fi fi-sr-eye-crossed"></i>';
  passwordToggle.classList.remove('active');
});


