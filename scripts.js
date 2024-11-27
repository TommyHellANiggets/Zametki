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
  });
  

document.addEventListener("DOMContentLoaded", function() {
const settingsButton = document.querySelector('.notes__link.settings');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.modal-settings__close');

settingsButton.addEventListener('click', function() {
    overlay.style.display = 'flex'; 
});

closeButton.addEventListener('click', function() {
    overlay.style.display = 'none'; 
});

overlay.addEventListener('click', function(event) {
    if (event.target === overlay) {
    overlay.style.display = 'none'; 
    }
});
});
  