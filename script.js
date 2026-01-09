const imageUrlInput = document.getElementById("imageUrl");
const addImageBtn = document.getElementById("addImage");
const deleteImageBtn = document.getElementById("deleteImage");
const gallery = document.getElementById("gallery");

let selectedImage = null;

// Agregar imagen
addImageBtn.addEventListener("click", () => {
    const url = imageUrlInput.value.trim();

    if (url === "") return;

    try {
        new URL(url);
    } catch {
        return;
    }

    const img = document.createElement("img");
    img.src = url;
    img.classList.add("fade-in");

    // Seleccionar imagen
    img.addEventListener("click", () => {
        document.querySelectorAll(".gallery img").forEach(image => {
            image.classList.remove("selected");
        });
        img.classList.add("selected");
        selectedImage = img;
    });

    gallery.appendChild(img);
    imageUrlInput.value = "";
});


// Eliminar imagen seleccionada
deleteImageBtn.addEventListener("click", () => {
    if (selectedImage) {
        selectedImage.classList.add("fade-out");
        setTimeout(() => {
            selectedImage.remove();
            selectedImage = null;
        }, 500);
    }
});

// Evento input
imageUrlInput.addEventListener("input", () => {
    imageUrlInput.style.borderColor = "#2196f3";
});

// Evento teclado (Enter para agregar imagen)
imageUrlInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addImageBtn.click();
    }
});

// Atajo de teclado (Delete para eliminar)
document.addEventListener("keydown", (event) => {
    if (event.key === "Delete") {
        deleteImageBtn.click();
    }
});
