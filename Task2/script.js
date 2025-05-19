function toggleFont() {
    const currentFont = getComputedStyle(document.body).getPropertyValue('font-family');
    if (currentFont.includes('Roboto Mono')) {
      document.body.style.fontFamily = 'var(--font-secondary)';
    } else {
      document.body.style.fontFamily = 'var(--font-primary)';
    }
  }
  
  function toggleTheme() {
    const currentBg = getComputedStyle(document.body).getPropertyValue('background-color');
    if (currentBg === 'rgb(244, 244, 244)') { 
      document.body.style.backgroundColor = 'var(--bg-dark)';
      document.body.style.color = 'var(--text-light)';
    } else {
      document.body.style.backgroundColor = 'var(--bg-light)';
      document.body.style.color = 'var(--text-dark)';
    }
  }
  