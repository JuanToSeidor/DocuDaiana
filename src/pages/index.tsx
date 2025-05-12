import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Faq from '@site/src/components/faq';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import Translate from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <small>Get started now</small>
          <h1>Help Center</h1>
        <p className="hero__subtitle">
          {/* <Translate>
          {siteConfig.tagline}
          </Translate> */}

          Create virtual assistants powered by artificial intelligence, train them for areas such as sales, human resources or customer support, and get valuable insights directly from your dashboards.
        </p>
      

      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main className={styles.bgfull}>
        <HomepageFeatures />
      </main>
      <div className={styles.studio}>
          <img src="img/index/logoStudio.png" alt="" />
          <h2>Ship Faster with Studio</h2>
          
          <Link to="/docs/intro">
            <button className={styles.button}>
              Get Started
            </button>
          </Link>
      </div>

      <Faq />
    </Layout>


  );
}
