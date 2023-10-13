import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

const baseURL = 'http://localhost:5010/producto'

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [post, setPost] = React.useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get(
          'http://localhost:5010/producto',
          {
            headers: {
              'Accept-version': '1.0.0',
            }
          }
        );
        console.log(res.data);
        setData(res.data[0]);
      } catch (error) {
        setError("Error");
      }
    };

    fetchData();
  }, [setData]);


 

  
  function createPost() {
    Axios
      .post(baseURL, {
        nombre: "",
        precio: "",
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return data


  return (
    <div>
      <h1>Producto</h1>
      {data ? (
        <div>
          <h2>{data.nombre}</h2>
          <p>Precio: ${data.precio}</p>
          <p>Descripción: {data.descripcion}</p>
        </div>
      ) : (
        <p>Cargan pero en la consola</p>
      )}
      <div>
        agregar
      </div>
        <div>
        <button onClick={createPost}>enviar</button>
        </div>


    </div>
  );
};

export default App;
