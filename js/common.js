document.addEventListener('DOMContentLoaded', (event) => {
  const hamburger = document.querySelector('.mobile_btn');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    sidebar.classList.toggle('active');
    // 오버레이 표시 또는 숨기기
    if (sidebar.classList.contains('active')) {
      overlay.style.display = 'block';
    } else {
      overlay.style.display = 'none';
    }
  });

  document.querySelectorAll('.mobile-dropbtn').forEach((button) => {
    button.addEventListener('click', function () {
      // 드롭다운 컨텐츠 토글
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === 'flex') {
        dropdownContent.style.display = 'none';
      } else {
        dropdownContent.style.display = 'flex';
      }
    });
  });
});
