const favoriteThings = document.querySelector(".favoriteThings")

const elFactory = (elType, attributesObj, txt) => {
  const newEl = document.createElement(elType)
  for (let attribute in attributesObj) {
    if (attribute === "classes") {
      const classesArray = attributesObj[attribute]
      classesArray.forEach(cls => {
        newEl.classList.add(cls)
      });
    }
    else {
      newEl[attribute] = attributesObj[attribute]
    }
  }
  newEl.textContent = txt || null
  return newEl
}

const nameFieldset = elFactory("fieldset")
const nameLabel = elFactory("label", { for: "faveName" }, "Name a Favorite Thing: ")
const nameInput = elFactory("input", { type: "text", id: "faveName", placeholder: "Enter the name of a thing", autofocus: null })
const storeFieldset = elFactory("fieldset")
const storeLabel = elFactory("label", { for: "store" }, "Where to Buy ")
const storeInput = elFactory("input", { type: "text", id: "store", placeholder: "Store Name" })
const saveBtn = elFactory("button", { id: "saveEntry" }, "Save to Wish List")

favoriteThings.appendChild(nameFieldset)
nameFieldset.appendChild(nameLabel)
nameFieldset.appendChild(nameInput)
favoriteThings.appendChild(storeFieldset)
storeFieldset.appendChild(storeLabel)
storeFieldset.appendChild(storeInput)
favoriteThings.appendChild(saveBtn)

saveBtn.addEventListener("click", () => {
  const thing = nameInput.value
  const location = storeInput.value
  if (thing === "" || location === "") {
    alert("Enter a thing and store")
    return
  } else {
    const newDiv = elFactory("div", {}, `I can purchase ${thing} at ${location}.`)
    favoriteThings.appendChild(newDiv)
    nameInput.value = null
    storeInput.value = null
    nameInput.focus()
  }
})

