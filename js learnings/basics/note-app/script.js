/* ── State ── */
let notes = []; // all notes (newest first)
let currentPage = 0; // which "page" of 3 we're viewing
const PAGE_SIZE = 3;

/* ── DOM refs ── */
const btnOpenModal = document.getElementById("btnOpenModal");
const btnCloseModal = document.getElementById("btnCloseModal");
const modalOverlay = document.getElementById("modalOverlay");
const btnCreate = document.getElementById("btnCreate");

const noteTitle = document.getElementById("noteTitle");
const noteBody = document.getElementById("noteBody");
const noteTodo = document.getElementById("noteTodo");
const notePriority = document.getElementById("notePriority");
const noteImage = document.getElementById("noteImage");
const previewImg = document.getElementById("previewImg");
const imagePreview = document.getElementById("imagePreview");
const removeImg = document.getElementById("removeImg");

const notesViewport = document.getElementById("notesViewport");
const notesStage = document.getElementById("notesStage");
const notesNav = document.getElementById("notesNav");
const emptyState = document.getElementById("emptyState");
const noteCountLabel = document.getElementById("note-count-label");
const scrollHint = document.getElementById("scrollHint");
const totalCountEl = document.getElementById("totalCount");

let selectedImageData = null;

/* ── Modal open / close ── */
btnOpenModal.addEventListener("click", () => {
  modalOverlay.classList.add("active");
  noteTitle.focus();
});
btnCloseModal.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

function closeModal() {
  modalOverlay.classList.remove("active");
  resetForm();
}

function resetForm() {
  noteTitle.value = "";
  noteBody.value = "";
  noteTodo.value = "";
  notePriority.value = "medium";
  document
    .querySelectorAll(".tag-pill")
    .forEach((p) => p.classList.remove("selected"));
  document.querySelector(".tag-pill.medium").classList.add("selected");
  selectedImageData = null;
  imagePreview.style.display = "none";
  previewImg.src = "";
}

/* ── Priority pills ── */
document.getElementById("priorityGroup").addEventListener("click", (e) => {
  const pill = e.target.closest(".tag-pill");
  if (!pill) return;
  document
    .querySelectorAll(".tag-pill")
    .forEach((p) => p.classList.remove("selected"));
  pill.classList.add("selected");
  notePriority.value = pill.dataset.val;
});
// default select medium on load
document.querySelector(".tag-pill.medium").classList.add("selected");

/* ── Image upload ── */
noteImage.addEventListener("change", () => {
  const file = noteImage.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    selectedImageData = e.target.result;
    previewImg.src = selectedImageData;
    imagePreview.style.display = "block";
  };
  reader.readAsDataURL(file);
});

removeImg.addEventListener("click", () => {
  selectedImageData = null;
  previewImg.src = "";
  imagePreview.style.display = "none";
  noteImage.value = "";
});

/* ── Create note ── */
btnCreate.addEventListener("click", () => {
  const title = noteTitle.value.trim();
  if (!title) {
    noteTitle.focus();
    shake(noteTitle);
    return;
  }

  const note = {
    id: Date.now(),
    title,
    body: noteBody.value.trim(),
    todo: noteTodo.value.trim(),
    todoDone: false,
    priority: notePriority.value,
    image: selectedImageData,
    date: new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
  };

  notes.unshift(note); // newest first
  currentPage = 0;
  closeModal();
  renderNotes();
});

/* ── Shake animation for empty input ── */
function shake(el) {
  el.style.transition = "border-color 0.2s";
  el.style.borderColor = "var(--cherry)";
  setTimeout(() => {
    el.style.borderColor = "";
  }, 600);
}

/* ── Render ── */
function renderNotes() {
  const total = notes.length;
  const totalPages = Math.ceil(total / PAGE_SIZE);

  // update header label
  noteCountLabel.textContent =
    total === 0
      ? "0 notes · tap + to begin"
      : `${total} note${total > 1 ? "s" : ""}`;

  if (total === 0) {
    emptyState.style.display = "block";
    notesViewport.style.display = "none";
    notesNav.style.display = "none";
    scrollHint.style.display = "none";
    return;
  }

  emptyState.style.display = "none";
  notesViewport.style.display = "block";

  // clamp page
  if (currentPage >= totalPages) currentPage = totalPages - 1;
  if (currentPage < 0) currentPage = 0;

  // slice to page
  const start = currentPage * PAGE_SIZE;
  const pageNotes = notes.slice(start, start + PAGE_SIZE);

  // build cards
  notesStage.innerHTML = "";
  pageNotes.forEach((note, localIdx) => {
    const globalIdx = start + localIdx;
    notesStage.appendChild(buildCard(note, globalIdx));
  });

  // nav dots
  if (totalPages > 1) {
    notesNav.style.display = "flex";
    notesNav.innerHTML = "";
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement("button");
      dot.className = "nav-dot" + (i === currentPage ? " active" : "");
      dot.setAttribute("aria-label", `Page ${i + 1}`);
      dot.addEventListener("click", () => {
        currentPage = i;
        renderNotes();
      });
      notesNav.appendChild(dot);
    }
    scrollHint.style.display = "block";
    totalCountEl.textContent = total;
  } else {
    notesNav.style.display = "none";
    scrollHint.style.display = "none";
  }
}

/* ── Build a note card ── */
function buildCard(note, globalIdx) {
  const card = document.createElement("div");
  card.className = `note-card priority-${note.priority}`;
  card.dataset.id = note.id;

  const priorityLabel = {
    low: "Low",
    medium: "Medium",
    high: "High",
    urgent: "Urgent",
  }[note.priority];
  const badgeClass = `badge-${note.priority}`;

  const imgHtml = note.image
    ? `<div class="note-image"><img src="${note.image}" alt="Note image" /></div>`
    : "";

  const todoHtml = note.todo
    ? `<div class="note-checkbox ${note.todoDone ? "done" : ""}" data-id="${note.id}">
         <div class="custom-check"></div>
         <span class="check-label">${escHtml(note.todo)}</span>
       </div>`
    : "";

  const bodyHtml = note.body
    ? `<p class="note-body">${escHtml(note.body)}</p>`
    : "";

  card.innerHTML = `
    <div class="note-top">
      <div class="note-title">${escHtml(note.title)}</div>
      <div class="note-actions">
        <button class="icon-btn btn-up" title="Move up" data-idx="${globalIdx}">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 11V3M3 7l4-4 4 4" stroke="currentColor" stroke-width="1.8"
              stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button class="icon-btn btn-down" title="Move down" data-idx="${globalIdx}">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 3V11M11 7l-4 4-4-4" stroke="currentColor" stroke-width="1.8"
              stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button class="icon-btn btn-del" title="Delete" data-id="${note.id}">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 4h10M5 4V2.5A.5.5 0 015.5 2h3a.5.5 0 01.5.5V4
                     M5.5 6.5v4M8.5 6.5v4
                     M3 4l.6 7.5a.5.5 0 00.5.5h5.8a.5.5 0 00.5-.5L11 4"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
    ${imgHtml}
    ${bodyHtml}
    ${todoHtml}
    <div class="note-footer">
      <span class="note-date">📅 ${note.date}</span>
      <span class="priority-badge ${badgeClass}">${priorityLabel}</span>
    </div>
  `;

  /* Events */
  card
    .querySelector(".btn-up")
    .addEventListener("click", () => moveNote(globalIdx, -1));
  card
    .querySelector(".btn-down")
    .addEventListener("click", () => moveNote(globalIdx, +1));
  card
    .querySelector(".btn-del")
    .addEventListener("click", () => deleteNote(note.id));
  if (note.todo) {
    card
      .querySelector(".note-checkbox")
      .addEventListener("click", () => toggleTodo(note.id));
  }

  return card;
}

/* ── Move note up / down ── */
function moveNote(idx, dir) {
  const newIdx = idx + dir;
  if (newIdx < 0 || newIdx >= notes.length) return;
  [notes[idx], notes[newIdx]] = [notes[newIdx], notes[idx]];
  currentPage = Math.floor(newIdx / PAGE_SIZE);
  renderNotes();
}

/* ── Delete note ── */
function deleteNote(id) {
  notes = notes.filter((n) => n.id !== id);
  const totalPages = Math.ceil(notes.length / PAGE_SIZE);
  if (currentPage >= totalPages && currentPage > 0)
    currentPage = totalPages - 1;
  renderNotes();
}

/* ── Toggle todo done ── */
function toggleTodo(id) {
  const note = notes.find((n) => n.id === id);
  if (note) {
    note.todoDone = !note.todoDone;
    renderNotes();
  }
}

/* ── Escape HTML ── */
function escHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ── Init ── */
renderNotes();
