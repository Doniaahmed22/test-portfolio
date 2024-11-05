// document.querySelectorAll('.video-container').forEach(container => {
//     const video = container.querySelector('.hover-video');

//     container.addEventListener('mouseover', () => {
//         video.play();
//     });

//     container.addEventListener('mouseout', () => {
//         video.pause();
//         video.currentTime = 0; // إعادة الفيديو إلى البداية
//     });
// });


// document.getElementById('toggleButton').addEventListener('click', function (event) {
//     event.preventDefault(); // لمنع إعادة تحميل الصفحة عند الضغط على الرابط
//     const projectDiv = document.getElementById('anotherProject');
//     const toggleButton = document.getElementById('toggleButton');

//     // التبديل بين الإظهار والإخفاء
//     if (projectDiv.style.display === "none") {
//         projectDiv.style.display = "block"; // يظهر الـ div
//         toggleButton.textContent = "Less Projects"; // تغيير النص
//     } else {
//         projectDiv.style.display = "none"; // يخفي الـ div
//         toggleButton.textContent = "More Projects"; // تغيير النص
//     }
// });


// // let lastScrollTop = 0; // المتغير لتخزين موضع التمرير الأخير
// // let isScrolling; // المتغير للتحكم في المؤقت
// // const navbar = document.querySelector('.navbar'); // اختيار عنصر شريط التنقل

// // window.addEventListener('scroll', function () {
// //     // تحقق من عرض النافذة
// //     if (window.innerWidth > 765) {
// //         // استخدام window.scrollY للحصول على موضع التمرير الحالي
// //         let currentScroll = window.scrollY;

// //         // إضافة/إزالة فئة "hidden" بناءً على اتجاه التمرير
// //         if (currentScroll > lastScrollTop) {
// //             // إذا كان التمرير للأسفل
// //             navbar.classList.add('hidden'); // إضافة الفئة hidden
// //         } else {
// //             // إذا كان التمرير للأعلى
// //             navbar.classList.remove('hidden'); // إزالة الفئة hidden
// //         }

// //         // تحديث lastScrollTop ليكون الموقف الحالي بعد استخدام if
// //         lastScrollTop = currentScroll;

// //         // إعادة تعيين المؤقت عند التمرير
// //         clearTimeout(isScrolling);

// //         // تعيين مؤقت بعد 200 مللي ثانية من توقف التمرير
// //         isScrolling = setTimeout(function () {
// //             navbar.classList.remove('hidden'); // إزالة الفئة hidden بعد توقف التمرير
// //         }, 800);
// //     } else {
// //         // إذا كانت الشاشة أصغر من 765 بكسل، تأكد من إزالة الفئة hidden
// //         navbar.classList.remove('hidden');
// //     }
// // });




// let lastScrollTop = 0; // المتغير لتخزين موضع التمرير الأخير
// let isScrolling; // المتغير للتحكم في المؤقت
// const navbar = document.querySelector('.navbar'); // اختيار عنصر شريط التنقل
// const navLinks = document.querySelectorAll('.nav-link'); // اختيار جميع الروابط في شريط التنقل

// window.addEventListener('scroll', function () {
//     // تحقق من عرض النافذة
//     if (window.innerWidth > 765) {
//         // استخدام window.scrollY للحصول على موضع التمرير الحالي
//         let currentScroll = window.scrollY;

//         // إضافة/إزالة فئة "hidden" بناءً على اتجاه التمرير
//         if (currentScroll > lastScrollTop) {
//             // إذا كان التمرير للأسفل
//             navbar.classList.add('hidden'); // إضافة الفئة hidden
//         } else {
//             // إذا كان التمرير للأعلى
//             navbar.classList.remove('hidden'); // إزالة الفئة hidden
//         }

//         // تحديث lastScrollTop ليكون الموقف الحالي بعد استخدام if
//         lastScrollTop = currentScroll;

//         // إعادة تعيين المؤقت عند التمرير
//         clearTimeout(isScrolling);

//         // تعيين مؤقت بعد 200 مللي ثانية من توقف التمرير
//         isScrolling = setTimeout(function () {
//             navbar.classList.remove('hidden'); // إزالة الفئة hidden بعد توقف التمرير
//         }, 800);
//     } else {
//         // إذا كانت الشاشة أصغر من 765 بكسل، تأكد من إزالة الفئة hidden
//         navbar.classList.remove('hidden');
//     }

//     // تغيير الحالة النشطة للروابط بناءً على موضع التمرير
//     navLinks.forEach(link => {
//         const section = document.querySelector(link.getAttribute('href')); // الحصول على القسم المستهدف

//         // تحقق مما إذا كانت هذه القسم مرئية في نافذة العرض
//         if (section.offsetTop <= currentScroll + 60 && section.offsetTop + section.offsetHeight > currentScroll + 60) {
//             // إذا كان القسم مرئيًا، أضف الفئة active
//             link.classList.add('active');
//         } else {
//             // خلاف ذلك، أزل الفئة active
//             link.classList.remove('active');
//         }
//     });
// });




// const navLinks2 = document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .nav-linkk');

//     // أضف حدث click لكل رابط
//     navLinks2.forEach(link => {
//         link.addEventListener('click', function(event) {
//             // إذا كان الرابط يحمل الفئة 'nav-linkk'
//             if (this.classList.contains('nav-linkk')) {
//                 // إزالة الفئة 'active' من جميع الروابط nav-link
//                 document.querySelectorAll('.navbar-nav .nav-link').forEach(navLink => {
//                     navLink.classList.remove('active');
//                 });

//                 // يمكنك إضافة أي أنماط أخرى للرابط هنا إذا كنت ترغب
//             } else {
//                 // إزالة الفئة 'active' من جميع الروابط nav-link
//                 navLinks2.forEach(l => {
//                     l.classList.remove('active');
//                 });

//                 // إضافة الفئة 'active' للرابط الذي تم الضغط عليه
//                 this.classList.add('active');
//             }

//             // احصل على الـ href الخاص بالرابط
//             const targetSection = this.getAttribute('href');

//             // اذهب إلى القسم المستهدف
//             document.querySelector(targetSection).scrollIntoView({
//                 behavior: 'smooth' // قم بتطبيق تمرير سلس
//             });

//             console.log(`You clicked on: ${this.textContent}`);
//         });
//     });

































document.querySelectorAll('.video-container').forEach(container => {
    const video = container.querySelector('.hover-video');

    container.addEventListener('mouseover', () => {
        video.play();
    });

    container.addEventListener('mouseout', () => {
        video.pause();
        video.currentTime = 0; // إعادة الفيديو إلى البداية
    });
});

document.getElementById('toggleButton').addEventListener('click', function (event) {
    event.preventDefault(); // لمنع إعادة تحميل الصفحة عند الضغط على الرابط
    const projectDiv = document.getElementById('anotherProject');
    const toggleButton = document.getElementById('toggleButton');

    // التبديل بين الإظهار والإخفاء
    if (projectDiv.style.display === "none") {
        projectDiv.style.display = "block"; // يظهر الـ div
        toggleButton.textContent = "Less Projects"; // تغيير النص
    } else {
        projectDiv.style.display = "none"; // يخفي الـ div
        toggleButton.textContent = "More Projects"; // تغيير النص
    }
});
let lastScrollTop = 0; // المتغير لتخزين موضع التمرير الأخير
let isScrolling; // المتغير للتحكم في المؤقت
const navbar = document.querySelector('.navbar'); // اختيار عنصر شريط التنقل
const navLinks = document.querySelectorAll('.nav-link'); // اختيار جميع الروابط في شريط التنقل

window.addEventListener('scroll', function () {
    if (window.innerWidth > 765) {
        let currentScroll = window.scrollY;

        // إضافة/إزالة فئة "hidden" بناءً على اتجاه التمرير
        if (currentScroll > lastScrollTop) {
            navbar.classList.add('hidden'); // إضافة الفئة hidden عند التمرير لأسفل
        } else {
            navbar.classList.remove('hidden'); // إزالة الفئة hidden عند التمرير لأعلى
        }

        lastScrollTop = currentScroll;

        clearTimeout(isScrolling);
        isScrolling = setTimeout(function () {
            navbar.classList.remove('hidden'); // إزالة الفئة hidden بعد توقف التمرير
        }, 800);
    } else {
        navbar.classList.remove('hidden'); // تأكد من إزالة الفئة hidden على الشاشات الصغيرة
    }

    // تغيير الحالة النشطة للروابط بناءً على موضع التمرير
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href')); // الحصول على القسم المستهدف
        const offset = 60; // القيمة التي تضيفها للتحقق من المسافة من الجزء العلوي

        // تحقق مما إذا كانت هذه القسم مرئية في نافذة العرض
        if (section.offsetTop <= currentScroll + offset && section.offsetTop + section.offsetHeight > currentScroll + offset) {
            link.classList.add('active'); // إضافة الفئة active إذا كان القسم مرئيًا
        } else {
            link.classList.remove('active'); // خلاف ذلك، أزل الفئة active
        }
    });
});


// اختيار جميع روابط التنقل
const navLinks2 = document.querySelectorAll('.navbar-nav .nav-link');

// إضافة حدث click لكل رابط
navLinks2.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // منع الرابط من إعادة تحميل الصفحة

        // إزالة الفئة 'active' من جميع الروابط nav-link
        navLinks2.forEach(l => l.classList.remove('active'));

        // إضافة الفئة 'active' للرابط الذي تم الضغط عليه
        this.classList.add('active');

        // احصل على الـ href الخاص بالرابط
        const targetSection = this.getAttribute('href');

        // اذهب إلى القسم المستهدف
        document.querySelector(targetSection).scrollIntoView({
            behavior: 'smooth' // قم بتطبيق تمرير سلس
        });

        console.log(`You clicked on: ${this.textContent}`);
    });
});



window.addEventListener('scroll', function () {
    if (window.innerWidth > 765) {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionBottom = rect.bottom;

            console.log("sectionTop  :  " + sectionTop);
            console.log("sectionBottom  :  " + sectionBottom);
            if (sectionTop <= 0 && sectionBottom >= 0) {
                const id = section.getAttribute('id');
                navLinks.forEach((link) => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
});




