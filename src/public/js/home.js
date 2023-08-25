const socket = io()

const table = document.getElementById('tableBody')

socket.emit('loadProducts')

socket.on('products', (products) => {
    products.forEach(element => {
        table.innerHTML += `<tr>
        <td>${element.nombre}</td>
        <td>${element.description}</td>
        <td>${element.categoria}</td>
        <td>${element.precio}</td>
        <td>${element.color}</td>
        <td>${element.stock}</td>
        <td>${element.code}</td>
      </tr>`
    });
})

/* const table = document.getElementById('tableBody')

fetch('http://localhost:4000/api/products')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error de red: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Almacenar los datos en una variable
    data.forEach(element => {
      table.innerHTML += `<tr>
      <td>${element.nombre}</td>
      <td>${element.description}</td>
      <td>${element.categoria}</td>
      <td>${element.precio}</td>
      <td>${element.color}</td>
      <td>${element.stock}</td>
      <td>${element.code}</td>
    </tr>`
  })
  })
  .catch(error => {
    console.error('Error:', error);
  }); */