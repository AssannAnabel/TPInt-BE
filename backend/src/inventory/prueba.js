async function deleteResourceById(id) {
    const url = `http://localhost:3030/inventory/${id}`;
  
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json', // Ajusta los encabezados según tus necesidades
        },
      });
  
      if (!response.ok) {
        // Si la respuesta no es exitosa (código de estado diferente de 200), maneja el error aquí
        throw new Error(`Error al eliminar el recurso (Código de estado: ${response.status})`);
      }
  
      // Si la eliminación fue exitosa, puedes manejarlo aquí
      console.log('Recurso eliminado con éxito');
    } catch (error) {
      // Maneja cualquier error que pueda ocurrir durante la solicitud
      console.error('Error al realizar la solicitud DELETE:', error.message);
    }
  }
  
  // Llama a la función para eliminar un recurso específico por su ID
  const resourceIdToDelete = 42; // Reemplaza con el ID que deseas eliminar
  deleteResourceById(resourceIdToDelete);