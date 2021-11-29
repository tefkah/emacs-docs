import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import HomepageFeatures from '../components/HomepageFeatures'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container padding-top--lg padding-bottom--lg">
        <div className="row">
          <div
            className="col"
            style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}
          >
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle" style={{ textAlign: 'left' }}>
              {siteConfig.tagline}
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/emacs/The-Emacs-Editor"
              >
                Get Started with Emacs!️
              </Link>
            </div>
          </div>

          <div className="col">
            <img
              className={styles.featureSvg}
              alt="Ellie the owl"
              src={'img/ellie-no-bg.svg'}
              height="100%"
              style={{ paddingTop: '20px' }}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The modern documentation website Emacs deserves."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
