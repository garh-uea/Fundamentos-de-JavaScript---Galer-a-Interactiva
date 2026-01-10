const entradaUrlImagen = document.getElementById("urlImagen");
const botonAgregarImagen = document.getElementById("agregarImagen");
const botonEliminarImagen = document.getElementById("eliminarImagen");
const galeria = document.getElementById("galeria");

let imagenSeleccionada = null;

// Agregar imagen
botonAgregarImagen.addEventListener("click", () => {
    const url = entradaUrlImagen.value.trim();

    if (url === "") return;

    try {
        new URL(url);
    } catch {
        return;
    }

    const imagen = document.createElement("img");
    imagen.src = url;
    imagen.classList.add("fade-in");

    // Seleccionar imagen
    imagen.addEventListener("click", () => {
        document.querySelectorAll(".galeria img").forEach(img => {
            img.classList.remove("selected");
        });
        imagen.classList.add("selected");
        imagenSeleccionada = imagen;
    });

    galeria.appendChild(imagen);
    entradaUrlImagen.value = "";
});


// Eliminar imagen seleccionada
botonEliminarImagen.addEventListener("click", () => {
    if (imagenSeleccionada) {
        imagenSeleccionada.classList.add("fade-out");
        setTimeout(() => {
            imagenSeleccionada.remove();
            imagenSeleccionada = null;
        }, 500);
    }
});

// Evento input
entradaUrlImagen.addEventListener("input", () => {
    entradaUrlImagen.style.borderColor = "#2196f3";
});

// Evento teclado (Enter para agregar imagen)
entradaUrlImagen.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") {
        botonAgregarImagen.click();
    }
});

// Atajo de teclado (Delete para eliminar)
document.addEventListener("keydown", (evento) => {
    if (evento.key === "Delete") {
        botonEliminarImagen.click();
    }
});
