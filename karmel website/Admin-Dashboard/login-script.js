// كود JavaScript لصفحة تسجيل الدخول
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.getElementById('passwordToggle');
    const loginBtn = document.getElementById('loginBtn');
    const loginMessage = document.getElementById('loginMessage');
    const rememberMe = document.getElementById('rememberMe');

    // إظهار/إخفاء كلمة المرور
    passwordToggle.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        const eyeIcon = this.querySelector('.eye-icon');
        if (type === 'text') {
            eyeIcon.textContent = '🙈';
        } else {
            eyeIcon.textContent = '👁️';
        }
    });

    // معالجة تسجيل الدخول
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        
        // التحقق من البيانات
        if (!username || !password) {
            showMessage('يرجى ملء جميع الحقول المطلوبة', 'error');
            return;
        }
        
        // إظهار حالة التحميل
        loginBtn.classList.add('loading');
        loginBtn.disabled = true;
        
        // محاكاة عملية تسجيل الدخول
        setTimeout(() => {
            // بيانات تسجيل الدخول الافتراضية (في التطبيق الحقيقي ستكون من قاعدة البيانات)
            const validUsername = 'admin';
            const validPassword = 'admin123';
            
            if (username === validUsername && password === validPassword) {
                // حفظ حالة "تذكرني"
                if (rememberMe.checked) {
                    localStorage.setItem('rememberMe', 'true');
                    localStorage.setItem('username', username);
                } else {
                    localStorage.removeItem('rememberMe');
                    localStorage.removeItem('username');
                }
                // حفظ حالة تسجيل الدخول
                sessionStorage.setItem('isLoggedIn', 'true');
                // التوجيه مباشرة إلى لوحة التحكم بدون رسالة
                window.location.href = 'dashboard.html';
            } else {
                showMessage('اسم المستخدم أو كلمة المرور غير صحيحة', 'error');
                loginBtn.classList.remove('loading');
                loginBtn.disabled = false;
            }
        }, 1500);
    });

    // عرض الرسائل
    function showMessage(message, type) {
        loginMessage.textContent = message;
        loginMessage.className = `login-message ${type}`;
        loginMessage.style.display = 'block';
        
        // إخفاء الرسالة بعد 5 ثوانٍ
        setTimeout(() => {
            loginMessage.style.display = 'none';
        }, 5000);
    }

    // استرجاع بيانات "تذكرني" عند تحميل الصفحة
    if (localStorage.getItem('rememberMe') === 'true') {
        const savedUsername = localStorage.getItem('username');
        if (savedUsername) {
            usernameInput.value = savedUsername;
            rememberMe.checked = true;
        }
    }

    // تحسين تجربة المستخدم - التركيز التلقائي
    usernameInput.focus();

    // إضافة تأثيرات بصرية للحقول
    [usernameInput, passwordInput].forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // التحقق من وجود قيمة عند التحميل
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });

    // منع إعادة إرسال النموذج
    let isSubmitting = false;
    loginForm.addEventListener('submit', function(e) {
        if (isSubmitting) {
            e.preventDefault();
            return;
        }
        isSubmitting = true;
        
        setTimeout(() => {
            isSubmitting = false;
        }, 3000);
    });

    // إضافة تأثيرات للشكل المتحرك
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        shape.style.animationDelay = `${index * 0.5}s`;
    });

    // تحسين الأداء - إيقاف الرسوم المتحركة عند عدم التركيز
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            shapes.forEach(shape => shape.style.animationPlayState = 'paused');
        } else {
            shapes.forEach(shape => shape.style.animationPlayState = 'running');
        }
    });
}); 