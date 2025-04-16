import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Puede ayudarte con tus ventas',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Información de productos
        Cotizaciones y propuestas.
        Asistencia en el proceso de compra y venta.
      </>
    ),
  },
  {
    title: 'Colabora con la gestión de tus Recursos Humanos',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Políticas internas y beneficios
        Formularios y documentos internos
        Automatización de preguntas frecuentes
      </>
    ),
  },
  {
    title: 'Y en el servicio al Cliente',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        EAtención al cliente 24/7
        Soporte postventa
        Gestión de quejas y reclamaciones
        Resolución de problemas comunes
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
            
          ))}


        </div>
      </div>
    </section>
  );
}
