
import styles from './styles.module.css';

interface FaqItem {
    pregunta: string;
    respuesta: string;
}

export default function Faq() {
    const faqItems: FaqItem[] = [
        {
            pregunta: "¿Pregunta 1?",
            respuesta: "Respuesta detallada a la pregunta 1."
        },
        {
            pregunta: "¿Pregunta 2?",
            respuesta: "Respuesta detallada a la pregunta 2."
        },
        {
            pregunta: "¿Pregunta 3?",
            respuesta: "Respuesta detallada a la pregunta 3."
        }
    ];

    return (
        <div className={`${styles.faq} container`}>
            <div className='row'>
                <div className='col col--4'>
                    <h1>Frequently asked questions</h1>
                    <p>Welcome to FAQ section! we´ve compiled a list of commonly asked question to provide you with quick and informative answer.</p>
                    <p> If you want to explore all the questions, go to this link. Where you will find all the answers made by the users.</p>
                    
                </div>
                <div className='col'>
                {faqItems.map((item, index) => (
                <div key={index.toString()} className={styles.accordionItem}>
                    <div 
                        className={styles.accordionHeader}
                        onClick={() => {
                            const content = document.getElementById(`content-${index}`);
                            const arrow = document.getElementById(`arrow-${index}`);
                            if (content && arrow) {
                                content.style.display = content.style.display === 'none' ? 'block' : 'none';
                                arrow.style.transform = content.style.display === 'none' ? 'rotate(0deg)' : 'rotate(90deg)';
                            }
                        }}
                        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                    >
                       
                        <svg id={`arrow-${index}`}data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.66 11.93">
                            <path d="M6.43,5.5L1.22.21C.94-.07.49-.07.21.21-.07.49-.07.94.21,1.22l4.72,4.78L.22,10.71c-.28.28-.28.73,0,1.01.14.14.32.21.51.21s.37-.07.51-.21l5.21-5.21c.28-.28.28-.73,0-1.01h-.02Z"/>
                        </svg>
                        
                        <span>{item.pregunta}</span>
                    </div>
                    <div 
                        id={`content-${index}`}
                        className={styles.accordionContent}
                        style={{ 
                            display: 'none',
                            padding: '10px',
                            marginLeft: '20px'
                        }}
                    >
                        {item.respuesta}
                    </div>
                </div>
            ))}
                </div>
            </div>
        </div>
    );
}