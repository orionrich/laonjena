
const hamburger = document.querySelector('.mobile_btn');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('active');
  sidebar.classList.toggle('active');
     // 오버레이 표시 또는 숨기기
     if (sidebar.classList.contains('active')) {
        overlay.style.display = 'block';
    } else {
        overlay.style.display = 'none';
    }

});

document.addEventListener('DOMContentLoaded', () => {

    var swiper = new Swiper(".best_swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            767: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1279: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          },
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
      });

});

import product1Image from './img/product1.png';
import product2Image from './img/product2.png';
import product3Image from './img/product3.png';
import product4Image from './img/product4.png';
import product5Image from './img/product5.png';
import product6Image from './img/product6.png';
import product7Image from './img/product7.png';
import product8Image from './img/product8.png';
import product9Image from './img/product9.png';
import product10Image from './img/product10.png';
import product11Image from './img/product11.png';
import product12Image from './img/product12.png';
import product13Image from './img/product13.png';
import product14Image from './img/product14.png';
import product15Image from './img/product15.png';
import product16Image from './img/product16.png';

const btn1 = document.querySelector('.new');
const btn2 = document.querySelector('.season');
const productContainer = document.querySelector('.product_flex');

// 초기에 신상품 버튼을 선택된 상태로 설정
btn1.classList.add('selected');



// 초기에 존재하는 템플릿 제품 카드 제거
const initialProduct = document.querySelector('.products');
if (initialProduct) {
    initialProduct.remove();
}

const products10 = [
    { img: product1Image, title: '여성 변형플리츠 옆트임 롱기장 큐롯', desc: '우아하게 떨어지는 변형 플리츠 디자인이 특징 세련된 옆트임으로 여성스러운 라인을 강조합니다.',salePrice: '29,000',originalPrice: '42,000',link: 'javascript:void(0);'   },
    { img: product2Image, title: '여성 져지 플레어 큐롯', desc: '편안한 져지 소재 다리 라인을 우아하게 연출하며, 다양한 탑과 쉽게 매치할 수 있습니다.',salePrice: '34,000',originalPrice: '52,000',link: 'javascript:void(0);'},
    { img: product3Image, title: '트리밍 데님 플리츠 랩 스커트 - 블루', desc: '세련된 트리밍 디테일과 데님 소재의 조화로 독특한 스타일을 자랑합니다. ',salePrice: '29,000',originalPrice: '42,000',link: 'javascript:void(0);'},
    { img: product4Image, title: '퍼플 카라 타이 밴딩 원피스', desc: ' 눈에 띄는 퍼플 컬러와 클래식한 카라 디테일이 특징입니다.',salePrice: '59,000',originalPrice: '70,000' ,link:'javascript:void(0);'},
    { img: product5Image, title: '핑크 집업 플레어 원피스', desc: '상큼한 핑크 컬러에 집업 디자인이 돋보이는 여성스러운 플레어 원피스입니다.',salePrice: '15,000',originalPrice: '31,000',link:'javascript:void(0);' },
    { img: product6Image, title: '써지컬스틸 스틱 체인 목걸이', desc: '내구성 있는 써지컬스틸로 만들어진, 세련된 스틱 디자인의 체인 목걸이입니다.',salePrice: '29,000',originalPrice: '42,000',link:'javascript:void(0);' },
    { img: product7Image, title: '피스마크 심볼 브레이슬릿-아이보리', desc: '아이보리 컬러에 평화의 심볼이 특징인 고급 브레이슬릿입니다.',salePrice: '19,000',originalPrice: '24,000',link:'javascript:void(0);' },
    { img: product8Image, title: '링바 레이어드 슬림 가죽팔찌', desc: '링 디테일이 돋보이는 레이어드 스타일의 슬림한 가죽 팔찌입니다.',salePrice: '15,000',originalPrice: '21,000',link:'javascript:void(0);' },
    
];

const products20 = [
    { img: product9Image, title: '23FW 까나쥬 퀼팅 스커트', desc: '23년 가을/겨울 컬렉션의 까나쥬 브랜드 특유의 따뜻한 퀼팅 디테일이 특징인 스커트입니다.',salePrice: '69,000',originalPrice: '82,000',link:'javascript:void(0);' },
    { img: product10Image, title: '로맨틱 플리츠 체크 스커트 - 브라운', desc: '로맨틱한 무드의 플리츠 디테일과 체크 패턴이 조화로운 브라운 컬러 스커트입니다.',salePrice: '24,000',originalPrice: '30,000',link:'javascript:void(0);' },
    { img: product11Image, title: '우먼즈 데님 미디 스커트 [워시드 블랙]', desc: '여성을 위한 워시드 블랙 컬러의 데님 미디 스커트로, 빈티지한 무드가 돋보입니다.',salePrice: '21,000',originalPrice: '25,000',link:'javascript:void(0);' },
    { img: product12Image, title: '사이드 배색 니트 스커트', desc: '사이드에 세련된 배색 디테일이 포인트인 니트 소재의 스커트입니다.',salePrice: '21,000',originalPrice: '25,000',link:'javascript:void(0);' },
    { img: product13Image, title: '하프 문 백_2컬러', desc: '반달 모양의 독특한 디자인과 두 가지 컬러 옵션이 특징인 스타일리시한 백입니다.',salePrice: '129,000',originalPrice: '142,000',link:'javascript:void(0);' },
    { img: product14Image, title: '비건가죽 램번트 숄더백', desc: '동물친화적인 비건 가죽으로 제작된, 램번트 텍스처의 고급스러운 숄더백입니다.',salePrice: '59,000',originalPrice: '92,000',link:'javascript:void(0);' },
    { img: product15Image, title: '리프 클로버 브로치 실버', desc: '클로버 모양의 세련된 디자인과 은색 소재가 돋보이는 우아한 브로치입니다.',salePrice: '19,000',originalPrice: '22,000',link:'javascript:void(0);' },
    { img: product16Image, title: '오디너리 베이직 다이아몬드 커플 반지(플랫 슬림)', desc: '심플한 디자인의 플랫 슬림 형태에 섬세한 다이아몬드가 장식된 커플을 위한 우아한 반지입니다.',salePrice: '29,000',originalPrice: '42,000',link:'javascript:void(0);' },
];
// 페이지가 로드되었을 때 바로 '신상품' 데이터를 표시
displayProducts(products10);


btn1.addEventListener('click', function() {
    btn1.classList.add('selected');
    btn2.classList.remove('selected');
    displayProducts(products10);
});

btn2.addEventListener('click', function() {
    btn2.classList.add('selected');
    btn1.classList.remove('selected');
    displayProducts(products20);
});

function displayProducts(products) {
    let display = '';
    products.forEach(product => {
        display += `
        <a href="${product.link}" class="product-link">
            <div class="product">
                <img src="${product.img}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p>${product.desc}</p>
                <div class="sale">${product.salePrice}
                    <span>원</span>
                    <span class="price">${product.originalPrice}</span>
                </div>
            </div>
        </a>
        `;
    });
    productContainer.innerHTML = display;
}





