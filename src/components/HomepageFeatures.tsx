/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react'
import clsx from 'clsx'
import styles from './HomepageFeatures.module.css'
import Link from '@docusaurus/Link'

type FeatureItem = {
  title: string
  image: string
  description: JSX.Element
  link?: string
}

const FeatureList: FeatureItem[] = [
  {
    title: 'GNU Emacs Manual',
    image: '/img/Emacs-logo.svg',
    description: <>An extensible, customizable, free/libre text editor — and more.</>,
    link: 'docs/emacs/The-Emacs-Editor',
  },
  {
    title: 'Elisp Manual',
    image: '/img/favicon.svg',
    link: 'docs/elisp/Emacs-Lisp',
    description: (
      <>LISP... for Emacs! Complete, authoritative reference for extending and programming Emacs.</>
    ),
  },
  {
    title: 'Org-Mode manual',
    image: '/img/org-mode-unicorn.svg',
    link: 'docs/org/The-Org-Manual',
    description: <>Organize your life in plain text.</>,
  },
]

function Feature({ title, image, description, link }: FeatureItem) {
  return (
    <div className={clsx('col col--4')} style={{}}>
      <div
        className="feature-card"
        // style={{
        //   position: 'relative',
        //   paddingTop: '20px',
        //   borderRadius: '20px',
        //   borderColor: 'lightgray',
        //   borderStyle: 'solid',
        //   borderWidth: '2px',
        //   height: '100%',
        // }}
      >
        <div className="text--center">
          <img className={styles.featureSvg} alt={title} src={image} />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="text--center">
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to={link}>
              {` Read ${title}`}
            </Link>
          </div>
        </div>
        {link && (
          <a
            href={link}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              textDecoration: 'none',
              zIndex: '10',
              backgroundColor: '#FFF',
              opacity: 0,
              filter: 'alpha(opacity=1)',
            }}
          ></a>
        )}
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
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
  )
}
