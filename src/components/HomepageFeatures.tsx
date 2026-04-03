import React from 'react'
import clsx from 'clsx'
import styles from './HomepageFeatures.module.css'
import Link from '@docusaurus/Link'

type FeatureItem = {
  title: string
  shortTitle?: string
  image: string
  description: React.ReactNode
  link?: string
}

const FeatureList: FeatureItem[] = [
  {
    title: 'GNU Emacs Manual',
    shortTitle: 'Emacs Manual',
    image: '/img/Emacs-logo.svg',
    description: <>An extensible, customizable, free/libre text editor -- and more.</>,
    link: 'docs/emacs/The-Emacs-Editor',
  },
  {
    title: 'GNU Elisp Reference Manual',
    shortTitle: 'Elisp Manual',
    image: '/img/e.svg',
    link: 'docs/elisp/Emacs-Lisp',
    description: <>Authoritative reference for extending and programming Emacs.</>,
  },
  {
    title: 'Org Manual',
    image: '/img/org-mode-unicorn.svg',
    link: 'docs/org/The-Org-Manual',
    description: <>Organize your life in plain text.</>,
  },
  {
    title: 'AUCTeX Manual',
    image: '/img/auctex-logo.png',
    link: 'docs/auctex/Top',
    description: <>A sophisticated LaTeX editing system.</>,
  },
  {
    title: 'Magit Manual',
    image: '/img/magit-logo.png',
    link: 'docs/magit/Magit-User-Manual',
    description: <>A Git porcelain inside Emacs.</>,
  },
]

function Feature({ title, shortTitle, image, link, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div
        className="feature-card"
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
      >
        <div>
          <div className="text--center">
            <img className={styles.featureSvg} alt={title} src={image} />
          </div>

          <div className="text--center padding-horiz--md">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>

        <div className="text--center">
          <div className={styles.buttons} style={{ marginTop: 'auto' }}>
            <Link className="button button--secondary button--lg" to={link}>
              {shortTitle || title}
            </Link>
          </div>
        </div>

        {link && (
          <Link
            to={link}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              zIndex: 10,
              opacity: 0,
            }}
            aria-hidden="true"
            tabIndex={-1}
          />
        )}
      </div>
    </div>
  )
}

export default function HomepageFeatures(): React.ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row row--no-gutters">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
