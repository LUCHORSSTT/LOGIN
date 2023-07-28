document.getElementById("registroForm").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const nacimiento = document.getElementById("nacimiento").value;

    // Aquí puedes hacer cualquier otra validación necesaria

    const nuevoUsuario = {
      nombre,
      apellido,
      email,
      nacimiento,
    };

    // Aquí puedes hacer lo que desees con el objeto nuevoUsuario, como guardarlo en una base de datos, etc.
    console.log(nuevoUsuario);
    alert("Registro exitoso!");
    document.getElementById("registroForm").reset(); // Para limpiar el formulario después del registro
  } catch (error) {
    console.error("Error en el registro:", error);
    alert("Hubo un error en el registro. Por favor, inténtalo de nuevo.");
  }
});
