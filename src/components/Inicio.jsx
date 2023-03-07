import { mostrarEstados } from "../func/funciones";
import React, { useEffect, useState } from "react";

const Inicio = () => {
  const [elementos, setElementos] = useState(null);

  useEffect(() => {
    mostrarEstados(setElementos);
  }, []);

  return (
    <>
      <main className="table">
        <section className="table__header">
          <h1>Clima</h1>
        </section>
        <section className="table__body">
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>cityid</th>
                <th>name</th>
                <th>state</th>
                <th>probabilityofprecip</th>
                <th>relativehumidity</th>
                <th>lastreporttime</th>
                <th>llueve</th>
              </tr>
            </thead>
            <tbody>
              {elementos != null
                ? elementos.map((index) => {
                    return (
                      <tr key={index._id}>
                        <a href={`/item/${index._id}`}>{index._id}</a>

                        <td>{index.cityid}</td>
                        <td>{index.name}</td>
                        <td>{index.state}</td>
                        <td>{index.probabilityofprecip}</td>
                        <td>{index.relativehumidity}</td>
                        <td>
                          {index.lastreporttime.slice(0, 4) +
                            "/" +
                            index.lastreporttime.slice(4, 6) +
                            "/" +
                            index.lastreporttime.slice(6, 8)}
                        </td>
                        <td>
                          {index.relativehumidity > 50 ||
                          index.probabilityofprecip > 60
                            ? "Si"
                            : "No"}
                        </td>
                      </tr>
                    );
                  })
                : "no hay elementos"}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
};

export default Inicio;
