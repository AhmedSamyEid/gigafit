const video = document.getElementById('myVideo');

// على سبيل المثال، يمكنك إضافة زر لإيقاف الفيديو وتشغيله
document.addEventListener('click', function() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

window.onscroll = function() {
  const navbar = document.querySelector('.navbar');
  if (window.pageYOffset > 50) {
    navbar.style.top = "0"; // يظهر الشريط عند التمرير لأسفل
  } else {
    navbar.style.top = "-110px"; // يختفي الشريط عند التمرير لأعلى
  }
}


// عند الضغط على زر Join Us يتم إظهار صفحة تسجيل الدخول
document.querySelector('.join,btn').addEventListener('click', function() {
  // إظهار نموذج تسجيل الدخول
  document.getElementById('loginForm').style.display = 'block';
});

// // إخفاء نموذج تسجيل الدخول عند الضغط على زر الإغلاق
// document.getElementById('closeLogin').addEventListener('click', function() {
//   document.getElementById('loginForm').style.display = 'none';
// });

// // عند الضغط على زر REGISTER يتم إظهار نموذج تسجيل الدخول
document.getElementById('registerBtn').addEventListener('click', function() {
  // إظهار نموذج تسجيل الدخول
  document.getElementById('loginForm').style.display = 'flex';
});

// إخفاء نموذج تسجيل الدخول عند الضغط على زر الإغلاق
// document.getElementById('closeLogin').addEventListener('click', function() {
//   document.getElementById('loginForm').style.display = 'none';
// });

const moveLeftIcon = document.getElementById('moveLeft');
const moveRightIcon = document.getElementById('moveRight');
const imageWrapper = document.getElementById('imageWrapper');

let currentIndex = 0;
const images = document.querySelectorAll('.moving-image');
const totalImages = images.length;
const imageWidth = images[0].offsetWidth; // عرض الصورة، ينبغي أن يتطابق مع عرض الحاوية

// وظيفة لتحديث موضع الصورة
function updateImagePosition() {
    const newPosition = -currentIndex * imageWidth;
    imageWrapper.style.transform = `translateX(${newPosition}px)`;
}

// وظيفة لتحريك الصورة إلى اليسار
function moveLeft() {
    if (currentIndex > 0) {
        currentIndex--;
        updateImagePosition();
    }
}

// وظيفة لتحريك الصورة إلى اليمين
function moveRight() {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
        updateImagePosition();
    }
}

// إضافة أحداث النقر للأيقونات
moveLeftIcon.addEventListener('click', moveLeft);
moveRightIcon.addEventListener('click', moveRight);

// تعيين الوضع الأولي
updateImagePosition();


function getImageDetails() {
  const images = document.querySelectorAll('.image44');
  const wrapper = document.querySelector('.image-wrapper44');
  const imageContainer = document.querySelector('.image-container44');
  const imageWidth = wrapper.offsetWidth; // عرض الـ container
  return { images, imageWidth, imageContainer };
}

const { imagess, imagesWidth, imageContainer } = getImageDetails();
let currentPosition = 0;

function updatePosition() {
  imageContainer.style.transform = `translateX(${currentPosition}px)`;
}

document.getElementById('angles-left').addEventListener('click', () => {
  currentPosition += imageWidth;  // تحرك لليسار
  if (currentPosition > 0) {
      currentPosition = -(images.length - 1) * imageWidth;  // العودة إلى نهاية الصور
  }
  updatePosition();
});

document.getElementById('angles-right').addEventListener('click', () => {
  currentPosition -= imageWidth;  // تحرك لليمين
  if (currentPosition < -(images.length - 1) * imageWidth) {
      currentPosition = 0;  // العودة إلى البداية
  }
  updatePosition();
});



const imageWrapper66 = document.getElementById('imageWrapper66');
  let isDragging = false;
  let startPos = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationID;
  let currentIndexx = 0;

  const image = document.querySelectorAll('.moving-image');
  const totalImage = images.length;

  // إضافة لمسات الهاتف
  imageWrapper66.addEventListener('touchstart', touchStart);
  imageWrapper66.addEventListener('touchmove', touchMove);
  imageWrapper66.addEventListener('touchend', touchEnd);

  function touchStart(e) {
    isDragging = true;
    startPos = getPositionX(e);
    animationID = requestAnimationFrame(animation);
    imageWrapper66.classList.add('grabbing');
  }

  function touchMove(e) {
    if (isDragging) {
      const currentPosition = getPositionX(e);
      currentTranslate = prevTranslate + currentPosition - startPos;
    }
  }

  function touchEnd() {
    cancelAnimationFrame(animationID);
    isDragging = false;

    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -100 && currentIndex < totalImages - 1) {
      currentIndex += 1;
    }

    if (movedBy > 100 && currentIndex > 0) {
      currentIndex -= 1;
    }

    setPositionByIndex();
    imageWrapper66.classList.remove('grabbing');
  }

  function getPositionX(event) {
    return event.touches[0].clientX;
  }

  function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
  }

  function setSliderPosition() {
    imageWrapper66.style.transform = `translateX(${currentTranslate}px)`;
  }

  function setPositionByIndex() {
    currentTranslate = currentIndex * -window.innerWidth;
    prevTranslate = currentTranslate;
    setSliderPosition();
  }