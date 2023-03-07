import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { showById } from "../func/funciones";

const Item = () => {
  const [itemW, setItemW] = useState(null);
  const params = useParams();

  useEffect(() => {
    showById(params.id, setItemW);
  }, []);

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>id</th>
            <th>cityid</th>
            <th>validdateutc</th>
            <th>winddirectioncardinal</th>
            <th>probabilityofprecip</th>
            <th>relativehumidity</th>
            <th>name</th>
            <th>dateInsert</th>
            <th>longitud</th>
            <th>state</th>
            <th>lastreporttime</th>
            <th>skydescriptionlong</th>
            <th>stateabbr</th>
            <th>tempc</th>
            <th>latitude</th>
            <th>iconcode</th>
            <th>windspeedkm</th>
          </tr>
        </thead>
        <tbody>
          {itemW != null
            ? itemW.map((index) => {
                return (
                  <tr key={index._id}>
                    <td>{index._id}</td>
                    <td>{index.cityid}</td>
                    <td>{index.validdateutc}</td>
                    <td>{index.winddirectioncardinal}</td>
                    <td>{index.probabilityofprecip}</td>
                    <td>{index.relativehumidity}</td>
                    <td>{index.name}</td>
                    <td>{index.dateInsert}</td>
                    <td>{index.longitude}</td>
                    <td>{index.state}</td>
                    <td>{index.lastreporttime}</td>
                    <td>{index.skydescriptionlong}</td>
                    <td>{index.stateabbr}</td>
                    <td>{index.tempc}</td>
                    <td>{index.latitude}</td>
                    <td>{index.iconcode}</td>
                    <td>{index.windspeedkm}</td>
                  </tr>
                );
              })
            : "no hay elementos"}
        </tbody>
      </table>
    </>
  );
};

export default Item;
