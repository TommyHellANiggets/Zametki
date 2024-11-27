document.addEventListener('DOMContentLoaded', () => {
const buttons = document.querySelectorAll('.notes__link.folder');
const noteBar = document.querySelector('.notes__bar');
const sidebar = document.querySelector('.notes__sidebar');
const searchbar = document.querySelector('.notes__search-input');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        noteBar.classList.add('block');
        sidebar.classList.add('white-bg');
        searchbar.classList.add('lighter-bg');
    });
});
});


document.addEventListener("DOMContentLoaded", () => {
  const dropdownBtn = document.querySelector(".modal-settings__dropdown-btn");
  const dropdownList = document.querySelector(".modal-settings__dropdown-list");
  const dropdownItems = document.querySelectorAll(".modal-settings__dropdown-item");

  let currentTheme = "light"; 
  applyTheme(currentTheme);
  updateDropdownButton(currentTheme);
  updateActiveDropdownItem(currentTheme);

  dropdownBtn.addEventListener("click", () => {
    const isOpen = dropdownList.hasAttribute("hidden");
    if (isOpen) {
      dropdownList.removeAttribute("hidden");
      dropdownBtn.setAttribute("aria-expanded", "true");
    } else {
      dropdownList.setAttribute("hidden", "");
      dropdownBtn.setAttribute("aria-expanded", "false");
    }
  });

  dropdownItems.forEach((item) => {
    item.addEventListener("click", () => {
      currentTheme = item.dataset.value; 
      updateDropdownButton(currentTheme); 
      applyTheme(currentTheme); 
      updateActiveDropdownItem(currentTheme);
      dropdownList.setAttribute("hidden", ""); 
      dropdownBtn.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (e) => {
    if (!dropdownBtn.contains(e.target) && !dropdownList.contains(e.target)) {
      dropdownList.setAttribute("hidden", "");
      dropdownBtn.setAttribute("aria-expanded", "false");
    }
  });

  function updateDropdownButton(theme) {
    const selectedText = theme === "dark" ? "Тёмная" : "Светлая";
    dropdownBtn.innerHTML = `${selectedText}<span class="modal-settings__dropdown-icon">▼</span>`;
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }

  function updateActiveDropdownItem(theme) {
    dropdownItems.forEach((item) => {
      if (item.dataset.value === theme) {
        item.classList.add("theme-active");
      } else {
        item.classList.remove("theme-active");
      }
    });
  }
});


  document.addEventListener("DOMContentLoaded", function() {
    const settingsButton = document.querySelector('.notes__link.settings');
    const addTagButton = document.querySelector('.notes__container-button');
    const overlay = document.querySelector('.overlay');
    const closeButtons = document.querySelectorAll('.modal-settings__close');

    const modalSettings = document.querySelector('.modal-settings');
    const modalTag = document.querySelector('.modal-tag');
    const tagCloseButtons = document.querySelectorAll('.modal-tag__cansel, .modal-tag__send');

    function showModal(modal) {
        hideModals();
        overlay.style.display = 'flex';
        modal.style.display = 'block';
    }

    function hideModals() {
        overlay.style.display = 'none';
        modalSettings.style.display = 'none';
        modalTag.style.display = 'none';
    }

    settingsButton.addEventListener('click', function(event) {
        event.stopPropagation(); 
        showModal(modalSettings);
    });

    addTagButton.addEventListener('click', function(event) {
        event.stopPropagation(); 
        showModal(modalTag);
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', hideModals);
    });

    tagCloseButtons.forEach(button => {
        button.addEventListener('click', hideModals);
    });

    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            hideModals();
        }
    });
});


document.querySelector('.edit-button').addEventListener('click', () => {
  const editElement = document.querySelector('.edit');
  const viewElement = document.querySelector('.view');
  const mainsideElement = document.querySelector('.mainside');
  
  if (editElement && viewElement) {
      editElement.style.display = 'block';
      viewElement.style.display = 'none';
      mainsideElement.style.display = 'none';
  }
});


document.querySelector('.confirm-button').addEventListener('click', () => {
  const editElement = document.querySelector('.edit');
  const viewElement = document.querySelector('.view');
  const mainsideElement = document.querySelector('.mainside');
  
  if (editElement && viewElement) {
      editElement.style.display = 'none';
      viewElement.style.display = 'block';
      mainsideElement.style.display = 'block';
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const notesBar = document.querySelector('.notes__bar'); 
  const notesItems = notesBar ? notesBar.querySelectorAll('.notes__list > .notes__item') : []; 

  const notesEmpty = document.querySelector('.notes__empty');
  const notescontainer = document.querySelector('.notes__container');

  notesItems.forEach(item => {
    const notesItemHeader = item.querySelector('.notes__item-header');

    if (notesItemHeader) {
      notesItemHeader.addEventListener('click', function() {
        if (notesEmpty) notesEmpty.style.display = 'none';
        if (notescontainer) notescontainer.style.display = 'block';

        notesItems.forEach(otherItem => {
          if (otherItem === item) {
            otherItem.classList.add('active'); 
            otherItem.classList.remove('deactive'); 
          } else {
            otherItem.classList.add('deactive');
            otherItem.classList.remove('active'); 
          }
        });
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.notes__header-button__another');
  const aside = document.querySelector('.mainside');

  button.addEventListener('click', () => {
    if (getComputedStyle(aside).display === 'none') {
      aside.style.display = 'block';
    } else {
      aside.style.display = 'none';
    }

    button.classList.toggle('rotated');
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const menuButtons = document.querySelectorAll('.notes__item-menu');
  let activeBox = null;

  menuButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.stopPropagation(); 

      const currentBox = button.closest('.notes__item').querySelector('.notes__box');

      if (activeBox && activeBox !== currentBox) {
        activeBox.style.display = 'none';
      }

      if (currentBox.style.display === 'flex') {
        currentBox.style.display = 'none';
        activeBox = null;
      } else {
        currentBox.style.display = 'flex';
        activeBox = currentBox;
      }
    });
  });

  document.addEventListener('click', () => {
    if (activeBox) {
      activeBox.style.display = 'none';
      activeBox = null;
    }
  });
});
