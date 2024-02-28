// 리셋 CSS
var resetCss = document.createElement('link');
resetCss.href = 'https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css';
resetCss.rel = 'stylesheet';
document.head.appendChild(resetCss);

// 파비콘
var favicon = document.createElement('link');
favicon.rel = 'shortcut icon';
favicon.href = '/img/favi/favicon.ico';
document.head.appendChild(favicon);

var appleIcon = document.createElement('link');
appleIcon.rel = 'apple-touch-icon';
appleIcon.sizes = '180x180';
appleIcon.href = '/img/favi/apple-icon-180x180.png';
document.head.appendChild(appleIcon);

var iconPng = document.createElement('link');
iconPng.rel = 'icon';
iconPng.type = 'image/png';
iconPng.sizes = '192x192';
iconPng.href = '/img/favi/android-icon-192x192.png';
document.head.appendChild(iconPng);

var manifest = document.createElement('link');
manifest.rel = 'manifest';
manifest.href = '/img/favi/manifest.json';
document.head.appendChild(manifest);

// Meta tag for theme-color
var metaThemeColor = document.createElement('meta');
metaThemeColor.name = 'theme-color';
metaThemeColor.content = '#ffffff';
document.head.appendChild(metaThemeColor);

// 구글 아이콘
var googleIcon = document.createElement('link');
googleIcon.href =
  'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
googleIcon.rel = 'stylesheet';
document.head.appendChild(googleIcon);

// 폰트 사전 연결
var preconnectGoogleFonts = document.createElement('link');
preconnectGoogleFonts.rel = 'preconnect';
preconnectGoogleFonts.href = 'https://fonts.googleapis.com';
document.head.appendChild(preconnectGoogleFonts);

var preconnectGstatic = document.createElement('link');
preconnectGstatic.rel = 'preconnect';
preconnectGstatic.href = 'https://fonts.gstatic.com';
preconnectGstatic.crossOrigin = 'anonymous';
document.head.appendChild(preconnectGstatic);

// 구글 폰트
var googleFonts = document.createElement('link');
googleFonts.href =
  'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;700&family=Roboto:wght@100;300;400;500;700&display=swap';
googleFonts.rel = 'stylesheet';
document.head.appendChild(googleFonts);

// Swiper's CSS
var swiperCss = document.createElement('link');
swiperCss.href = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css';
swiperCss.rel = 'stylesheet';
document.head.appendChild(swiperCss);

document.addEventListener('DOMContentLoaded', function () {
  // GSAP
  var gsapJs = document.createElement('script');
  gsapJs.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
  document.body.appendChild(gsapJs);

  var scrollTriggerJs = document.createElement('script');
  scrollTriggerJs.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
  document.body.appendChild(scrollTriggerJs);
});
