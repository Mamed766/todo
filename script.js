const inp = document.querySelector(".inp");
const addBtn = document.querySelector(".add__button");
const list = document.querySelector(".list");
const err = document.querySelector(".err");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (inp.value.trim() === "") {
    err.textContent = "BOS DEYER GIRE GILMERSEN!";
    return;
  } else {
    err.textContent = "";
  }

  let listItem = document.createElement("li");
  let spanEl = document.createElement("span");
  spanEl.textContent = inp.value;
  listItem.innerHTML = ` 

  <div class="wrapp">
  <div>
  <span> 
  ${spanEl.innerText}
</span>
  </div>

  <div>
  <i class="fa-solid fa-trash"></i> <i class="fa-solid fa-pen-to-square"></i> 

  </div>
  </div>
  
  `;

  list.append(listItem);

  inp.value = "";
});

list.addEventListener("click", (e) => {
  e.preventDefault();
  const message = "Are you sure delete ?";

  if (e.target.classList.contains("fa-trash") && confirm(message)) {
    e.target.closest("li").remove();
  } else if (e.target.classList.contains("fa-pen-to-square")) {
    let updatedValue = window.prompt();
    if (updatedValue !== null && updatedValue.trim() !== "") {
      e.target.closest(".wrapp").querySelector("span").textContent =
        updatedValue;
    }
  }
});
