import { useEffect, useState } from 'react'
import { CardMateria } from './components/CardMateria.jsx'
import {Heading} from './components/Heading.tsx'

export function App(){
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/materias')
    .then(materia => materia.json())
    .then(data => setMaterias(data))
  }, [])


  return(
    <>
      <div className='CardMateria'>
        {materias.map(materia => 
          <CardMateria 
            id={materia.id}
            CardMateriaTitulo={materia.titulo}
            CardMateriaDescricao={materia.descricao}>
          </CardMateria>)}
      </div>
    </>
  )
}