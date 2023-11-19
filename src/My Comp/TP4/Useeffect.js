// Useeffect.js
import React, { useEffect, useState } from 'react';
import './Useeffect.css'; // Importez le fichier CSS

export default function Useeffect() {
  // Déclaration de l'état pour l'URL de l'image
  const [srcim, setsrcim] = useState();

  useEffect(() => {
    // Appel à l'API "Lorem Picsum" pour obtenir une image aléatoire
    fetch('https://picsum.photos/800/400') // Vous pouvez ajuster la taille de l'image en modifiant les paramètres dans l'URL
      .then((response) => {
        // Notez que nous n'appelons pas response.json() ici, car l'API "Lorem Picsum" renvoie l'image directement
        setsrcim(response.url);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="useeffect-container">
      {srcim && <img src={srcim} alt="Nature" />} {/* Vérification si srcim est défini avant d'afficher l'image */}
    </div>
  );
}
