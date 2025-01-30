export function initializeSlider(nextButton, prevButton, paginationContainer, sliderWrapper, itemsPerPage) {
  let currentIndex = 0;
  const totalPages = Math.ceil(sliderWrapper.children.length / itemsPerPage);
  
  
  
  function updateSliderPosition() {
    const cards = sliderWrapper.querySelectorAll('.slider-card');
    cards.forEach((card, index) => {
      card.classList.remove('active');
      if (index >= currentIndex * itemsPerPage && index < (currentIndex + 1) * itemsPerPage) {
        card.classList.add('active');
      }
    });

    const paginationButtons = paginationContainer.querySelectorAll('button');
    paginationButtons.forEach((button, index) => {
      button.classList.toggle('active', index === currentIndex);
    });

  }

  function createPagination() {
    for (let i = 0; i < totalPages; i++) {
      const button = document.createElement('button');
      button.className = 'w-3 h-3 z-10 bg-white rounded-full m-1 cursor-pointer hover:bg-gray-300 active:bg-blue-500';
      button.addEventListener('click', () => {
        currentIndex = i;
        updateSliderPosition();
        updateActiveButton();
      });
      paginationContainer.appendChild(button);
    }
    updateActiveButton();
  }

  function updateActiveButton() {
    const buttons = paginationContainer.querySelectorAll('button');
    buttons.forEach((button, index) => {
      if (index === currentIndex) {
        button.classList.add('bg-blue-500');
        button.classList.remove('bg-white');
      } else {
        button.classList.remove('bg-blue-500');
        button.classList.add('bg-white');
      }
    });
  }

  nextButton.addEventListener('click', () => {
    if (currentIndex < totalPages - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSliderPosition();
    updateActiveButton();
  });

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalPages - 1;
    }
    updateSliderPosition();
    updateActiveButton();
  });

  // Inicializamos la posición del slider y creamos la paginación
  updateSliderPosition();
  createPagination();
}