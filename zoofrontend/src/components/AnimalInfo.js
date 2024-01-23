import React from 'react';

// Erweiterte Daten für die Tierinformationen
const animals = [
  { animalType: "Löwe", description: "Der majestätische Löwe, bekannt als der 'König der Tiere', ist ein Symbol für Stärke und Mut. Löwen leben in der afrikanischen Savanne und sind für ihre beeindruckende Mähne und ihr kraftvolles Brüllen bekannt.", image: "/animals/loewe.png" },
  { animalType: "Elefant", description: "Elefanten, die größten Landtiere der Welt, sind für ihre Intelligenz, ihr soziales Verhalten und ihren markanten langen Rüssel bekannt. Sie spielen eine wichtige Rolle in ihrem Ökosystem, indem sie Wege für andere Tiere in dichten Wäldern bahnen.", image: "/animals/elefant.png" },
  { animalType: "Giraffe", description: "Giraffen sind die höchsten Tiere der Welt und berühmt für ihren langen Hals und ihre einzigartigen Fleckenmuster. Sie ernähren sich hauptsächlich von den Blättern hoher Bäume, die für andere Tiere unerreichbar sind.", image: "./animals/giraffe.png" },
  { animalType: "Pinguin", description: "Pinguine sind charismatische Vögel, die nicht fliegen können, aber ausgezeichnete Schwimmer sind. Sie leben hauptsächlich in der Antarktis und sind bekannt für ihre soziale Struktur und ihr spielerisches Verhalten im Wasser.", image: "/animals/pinguin.png" },
  { animalType: "Koala", description: "Koalas sind ein ikonisches Symbol Australiens. Diese baumlebenden Beuteltiere verbringen den Großteil ihres Lebens mit Schlafen und Fressen von Eukalyptusblättern, die eine wichtige Energiequelle für sie darstellen.", image: "/animals/koala.png" },
  { animalType: "Tiger", description: "Tiger sind die größten Katzenarten der Welt, bekannt für ihr charakteristisches orangefarbenes Fell mit schwarzen Streifen. Jeder Tiger hat ein einzigartiges Streifenmuster, ähnlich wie menschliche Fingerabdrücke.", image: "/animals/tiger.png" },
];

const AnimalInfo = () => {
  return (
    <div className="container mt-5">
      <h1>Entdecke unsere Tiere</h1>
      <div className="row">
        {animals.map((animal, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img src={animal.image} className="card-img-top" alt={animal.animalType} />
              <div className="card-body">
                <h5 className="card-title">{animal.animalType}</h5>
                <p className="card-text">{animal.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimalInfo;
