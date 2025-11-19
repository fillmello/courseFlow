import { useEffect, useState } from 'react'
import { CardMateria } from './components/CardMateria.tsx'
import { HoverCardDemo } from './components/ui/HoverCardDemo' // fixed wrong extension .txs -> .tsx (import can omit extension)
import './styles/theme.css'

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

export function App(){
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/materias')
    .then(materia => materia.json())
    .then(data => setMaterias(data))
  }, [])


  return(
    <>
      <div className='CardMateria flex flex-col sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {materias.map(materia => (
          <HoverCard key={materia.id}>
            <HoverCardTrigger asChild>
              <div>
                <CardMateria 
                  CardMateriaTitulo={materia.titulo}
                  cargaHoraria={materia.cargaHoraria}
                  CardMateriaDescricao={materia.descricao}
                />
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="text-sm">
              Carga horária: <span className="font-medium">{materia.cargaHoraria}h</span>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </>
  )
}