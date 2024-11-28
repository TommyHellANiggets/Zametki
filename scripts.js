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
    dropdownBtn.innerHTML = `${selectedText}<span class="modal-settings__dropdown-icon"><svg width="6" height="3" viewBox="0 0 6 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3L0.401924 0L5.59808 0L3 3Z" fill="currentColor"/>
</svg>
</span>`;
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
  const deleteNoteButtons = document.querySelectorAll('.notes__box-button__delete');
  const overlay = document.querySelector('.overlay');
  const closeButtons = document.querySelectorAll('.modal-settings__close');

  const modalSettings = document.querySelector('.modal-settings');
  const modalTag = document.querySelector('.modal-tag');
  const modalDelete = document.querySelector('.modal-delete');
  const tagCloseButtons = document.querySelectorAll('.modal-tag__cansel, .modal-tag__send');
  const deleteCloseButtons = document.querySelectorAll('.modal-delete__button');

  function showModal(modal) {
      hideModals();
      overlay.style.display = 'flex';
      modal.style.display = 'block';
  }

  function hideModals() {
      overlay.style.display = 'none';
      modalSettings.style.display = 'none';
      modalTag.style.display = 'none';
      modalDelete.style.display = 'none';
  }

  settingsButton.addEventListener('click', function(event) {
      event.stopPropagation();
      showModal(modalSettings);
  });

  addTagButton.addEventListener('click', function(event) {
      event.stopPropagation();
      showModal(modalTag);
  });

  deleteNoteButtons.forEach(button => {
      button.addEventListener('click', function(event) {
          event.stopPropagation();
          showModal(modalDelete);
      });
  });

  closeButtons.forEach(button => {
      button.addEventListener('click', hideModals);
  });

  tagCloseButtons.forEach(button => {
      button.addEventListener('click', hideModals);
  });

  deleteCloseButtons.forEach(button => {
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
  const notesContainer = document.querySelector('.notes__container');

  notesItems.forEach(item => {
    const notesItemHeader = item.querySelector('.notes__item-header');
    const notesItemToggle = item.classList.contains('notes__item-toggle') ? item : null;

    const activateNote = () => {
      if (notesEmpty) notesEmpty.style.display = 'none';
      if (notesContainer) notesContainer.style.display = 'block';

      notesItems.forEach(otherItem => {
        if (otherItem === item) {
          otherItem.classList.add('active');
          otherItem.classList.remove('deactive');
        } else {
          otherItem.classList.add('deactive');
          otherItem.classList.remove('active');
        }
      });
    };

    if (notesItemHeader) {
      notesItemHeader.addEventListener('click', activateNote);
    }

    if (notesItemToggle) {
      notesItemToggle.addEventListener('click', activateNote);
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

document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.querySelector(".notes__top-button");
  const foldersContainer = document.querySelector(".notes__folders");
  const notesList = foldersContainer.querySelector(".notes__list");
  const notesAdd = notesList.querySelector(".notes_add");
  const addInput = notesAdd.querySelector("input");
  const submitButton = notesAdd.querySelector(".notes_add-button");

  notesAdd.style.display = "none";

  addButton.addEventListener("click", () => {
    notesAdd.style.display = "flex";
    addInput.focus();
  });

  submitButton.addEventListener("click", () => {
    const folderName = addInput.value.trim();

    if (folderName) {
      const newListItem = document.createElement("li");
      newListItem.classList.add("notes__item");
      newListItem.innerHTML = `
        <button class="notes__link folder">
          <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.6" d="M1 14V3C1 1.89543 1.89543 1 3 1H7.59375C8.3704 1 9 1.6296 9 2.40625C9 3.1829 9.6296 3.8125 10.4062 3.8125H17C18.1046 3.8125 19 4.70793 19 5.8125V14C19 15.1046 18.1046 16 17 16H3C1.89543 16 1 15.1046 1 14Z" stroke="currentColor" stroke-width="1.5"/>
          </svg>
          ${folderName}
        </button>
      `;
      notesList.appendChild(newListItem);

      addInput.value = "";
      notesAdd.style.display = "none";
    } else {
      alert("Введите название папки!");
    }
  });
});
