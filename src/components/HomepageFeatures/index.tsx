import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import config from '@site/docusaurus.config';


type FeatureItem = {
  title: string;
 description: ReactNode;
  img: string;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Get started',
    img: './img/index/Start.png',
    description: (
      <>
        Welcome to Daiana docs. get started faster by learn some basic
      </>
    ),
    link: 'intro'
  },
  {
    title: 'Agents',
    img: './img/index/agent.png',
    description: (
      <>
        Welcome to Daiana docs. get started faster by learn some basic
      </>
    ),
    link: 'intro'
  },
  {
    title: 'Knowledge bases',
    img: './img/index/knowledge.png',
    description: (
      <>
        Welcome to Daiana docs. get started faster by learn some basic
      </>
    ),
    link: 'intro'
  },
  {
    title: 'Integrations',
    img: './img/index/integrations.png',
    description: (
      <>
        Welcome to Daiana docs. get started faster by learn some basic
      </>
    ),
    link: 'intro'
  },
  {
    title: 'Reports and dashboards',
    img: './img/index/reports.png',
    description: (
      <>
        Welcome to Daiana docs. get started faster by learn some basic
      </>
    ),
    link: 'intro'
  },
  {
    title: 'History',
    img: './img/index/history.png',
    description: (
      <>
        Welcome to Daiana docs. get started faster by learn some basic
      </>
    ),
    link: 'intro'
  },

];

function Feature({title, description, img, link}: FeatureItem) {
  const versionPath = config.presets[0][1].docs.versions.current.path;
  
  return (
    <div className={clsx('col col--4')}>
      
      <div className="text--center">
        <Link to={`/docs/${versionPath}/${link}`} className={styles.indexCards}>
          <img src={img} alt="" />
        </Link>
      </div>
      <div className="padding-horiz--md">
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
      <div className='name'>
        <h3>Explore by topics </h3>
      </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
            
          ))}


        </div>
      </div>
    </section>
  );
}
