document.addEventListener('DOMContentLoaded', function() {
  const rotators = document.querySelectorAll('.rotator');
  
  rotators.forEach(rotator => {
    const cases = rotator.querySelectorAll('.rotator__case');
    
    if (cases.length === 0) return;
    
    let currentIndex = Array.from(cases).findIndex(el => el.classList.contains('rotator__case_active'));
    if (currentIndex === -1) currentIndex = 0;
    
    applyStyles(cases[currentIndex]);
    
    function applyStyles(element) {
      const color = element.dataset.color || 'black';
      element.style.color = color;
    }
    
    function rotate() {
      cases[currentIndex].classList.remove('rotator__case_active');
      
      currentIndex = (currentIndex + 1) % cases.length;
      
      const newActiveCase = cases[currentIndex];
      newActiveCase.classList.add('rotator__case_active');
      
      applyStyles(newActiveCase);
      
      const speed = parseInt(newActiveCase.dataset.speed) || 1000;
      
      setTimeout(rotate, speed);
    }
    
    const initialSpeed = parseInt(cases[currentIndex].dataset.speed) || 1000;
    setTimeout(rotate, initialSpeed);
  });
});