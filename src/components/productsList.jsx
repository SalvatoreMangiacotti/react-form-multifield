const mediterraneanFruits = [
    {
        id: 1,
        titolo: "Arance",
        autore: "Autore 1",
        contenuto: "Ricche di vitamina C.",
        categoria: "Agrumi"
    },
    {
        id: 2,
        titolo: "Limoni",
        autore: "Autore 2",
        contenuto: "Ottimi per il succo.",
        categoria: "Agrumi"
    },
    {
        id: 3,
        titolo: "Mandarini",
        autore: "Autore 3",
        contenuto: "Dolci e succosi.",
        categoria: "Agrumi"
    },
    {
        id: 4,
        titolo: "Fichi",
        autore: "Autore 4",
        contenuto: "Deliziosi freschi o secchi.",
        categoria: "Frutta"
    },
    {
        id: 5,
        titolo: "Albicocche",
        autore: "Autore 5",
        contenuto: "Perfette per le marmellate.",
        categoria: "Frutta"
    },
    {
        id: 6,
        titolo: "Pesche",
        autore: "Autore 6",
        contenuto: "Succhino rinfrescante.",
        categoria: "Frutta"
    }
];


export default function fruitsList() {

    return (

        <ul className="products-list">

            {
                mediterraneanFruits.map((fruit) => (

                    <li key={fruit.id}>

                        <h2>{fruit.titolo}</h2>
                        <h3>{fruit.autore}</h3>
                        <p>{fruit.contenuto}</p>
                        <span>{fruit.categoria}</span>

                    </li>
                ))
            }

        </ul>

    )

}