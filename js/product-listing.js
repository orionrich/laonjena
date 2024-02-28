// 버튼을 선택
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

// 버튼 클릭 이벤트 리스너를 추가
btn1.addEventListener('click', function () {
  btn1.classList.add('active');
  btn2.classList.remove('active');
});

btn2.addEventListener('click', function () {
  btn2.classList.add('active');
  btn1.classList.remove('active');
});
