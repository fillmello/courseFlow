import styles from './CardMateria.module.css';

type CardMateriaProps = {
    id: number;
    CardMateriaTitulo: string;
    CardMateriaDescricao: string;
    children: React.ReactNode; // premite que children receba um componente, number, string, etc    
}

export function CardMateria(props: CardMateriaProps) {
    
    return(
        <>
        <div>
            <a href="#" className="block max-w-sm p-6 border-box bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl p-0 font-bold tracking-tight text-gray-900 dark:text-white">{props.CardMateriaTitulo}</h5>
            <p className="font-normal p-0 text-gray-700 dark:text-gray-400">{props.CardMateriaDescricao}</p>
            </a>
        </div>
 
        </>
    )
}