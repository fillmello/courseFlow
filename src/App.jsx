import { useEffect, useState } from 'react'
import { CardMateria } from './CardMateria.jsx'

export function App() {
  const [materias, setMaterias] = useState([])

  useEffect(() => {
    fetch('/db/db.json')
      .then(res => res.json())
      .then(data => setMaterias(data.materias))
  }, [])

  return (
    <div>
      <div>
        {materias.map(materia => (
          <CardMateria
            key={materia.id}
            CardMateriaTitulo={materia.nome}
            CardMateriaTexto={materia.descricao}
          />
        ))}
      </div>
    </div>
  )
}