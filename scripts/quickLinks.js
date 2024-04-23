const notesInput = document.getElementById("notes-input");

let savedNotes = localStorage.getItem("notes");
if (savedNotes) {
  notesInput.value = savedNotes;
}

function saveNotes() {
  localStorage.setItem("notes", notesInput.value);
}

notesInput.addEventListener("input", saveNotes);

const addLinkButton = document.getElementById("add-link-btn");
const linkForm = document.getElementById("link-form");
// const saveButton = document.getElementById("save-link-btn");
const quickNameInput = document.getElementById("quick-name");
const linkUrlInput = document.getElementById("link-url");
const saveLinkButton = document.getElementById("save-link-btn");
const cancelLinkButton = document.getElementById("add-cancel-icon");
const linkList = document.getElementById("link-list");

let links = [];

const formatLinkUrl = (url) => {
  if (!/^https?:\/\//i.test(url)) {
    return "http://" + url;
  }
  return url;
};

const addLink = (quickName, linkUrl, index = -1) => {
  const link = `<div class="link-item">
  <a href="${formatLinkUrl(
    linkUrl
  )}">${quickName}
  </a>
  <div class="btn-group editctrl-group">
  <button class="btn btn-clear edit-link-btn">
  <i class="material-icons" id="edit-icon">edit</i>
  </button>
  <button class="btn btn-clear delete-link-btn">
  <i class="material-icons" id="delete-icon">delete</i>
  </button>
  </div>
  </div>`;
  if (index > -1) {
    links[index] = link;
  } else {
    links.push(link);
  }
  linkList.innerHTML = links.join("");
};

addLinkButton.addEventListener("click", () => {
  if (linkForm.style.display === "none") {
    linkForm.style.display = "block";
    saveLinkButton.style.display = "block";
    document.getElementById("add-cancel-icon").innerText = "cancel";
  } else {
    quickNameInput.value = "";
    linkUrlInput.value = "";
    saveLinkButton.dataset.index = undefined;
    saveLinkButton.style.display="none";
    linkForm.style.display = "none";
    document.getElementById("add-cancel-icon").innerText = "add";
  }
  console.log("linkForm:", linkForm);
console.log("saveLinkButton:", saveLinkButton);
console.log("add-cancel-icon:", document.getElementById("add-cancel-icon"));
});


saveLinkButton.addEventListener("click", () => {
  const quickName = quickNameInput.value.trim();
  const linkUrl = linkUrlInput.value.trim();

  if (!quickName || !linkUrl) {
    alert("Please provide a name and link for your quick link.");
    return;
  }

  const index = saveLinkButton.dataset.index;
  addLink(quickName, linkUrl, index > -1 ? parseInt(index) : -1);
  document.getElementById("add-cancel-icon").innerText = "add";
  quickNameInput.value = "";
  linkUrlInput.value = "";
  saveLinkButton.dataset.index = undefined;
  linkForm.style.display = "none";
  saveLinkButton.style.display="none";
  addLinkButton.style.display = "inline";
  
  cancelLinkButton.style.display = "none";
});

linkList.addEventListener("click", (event) => {
    let deleteBtn = event.target.closest(".delete-link-btn");
    let editBtn = event.target.closest(".edit-link-btn");
  
    if (deleteBtn) {
      const linkItem = deleteBtn.closest(".link-item");
      const index = links.indexOf(linkItem.outerHTML);
      if (index > -1) {
        links.splice(index, 1);
        linkItem.remove();
      }
    } else if (editBtn) {
        // console.log("edit clicked");
      const linkItem = editBtn.closest(".link-item");
      const quickName = linkItem.querySelector("a").innerText;
      const linkUrl = linkItem.querySelector("a").getAttribute("href");
      quickNameInput.value = quickName;
      linkUrlInput.value = linkUrl;
      saveLinkButton.dataset.index = links.indexOf(linkItem.outerHTML);
  
      linkForm.style.display = "block";
      saveLinkButton.style.display="block";
      document.getElementById("add-cancel-icon").innerText = "cancel";
    }
  });
  
window.addEventListener("beforeunload", () => {
    localStorage.setItem("quickLinks", JSON.stringify(links));
    const savedData = localStorage.getItem("quickLinks");
    console.log("Saved Data:", savedData);
  });
  
  window.addEventListener("load", () => {
    const savedLinks = localStorage.getItem("quickLinks");
    if (savedLinks) {
      links = JSON.parse(savedLinks);
      linkList.innerHTML = links.join("");
    }
  });
  linkList.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      event.preventDefault();
      const linkUrl = event.target.getAttribute("href");
      window.location.href = linkUrl;
    }
  });