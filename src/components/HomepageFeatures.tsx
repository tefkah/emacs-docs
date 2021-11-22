/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "GNU Emacs Manual",
    image: "/img/Emacs-logo.svg",
    description: (
      <>An extensible, customizable, free/libre text editor — and more.</>
    ),
  },
  {
    title: "Elisp Manual",
    image: "/img/favicon.svg",
    description: (
      <>
        LISP... for Emacs! Complete, authoritative reference for extending and
        programming Emacs.
      </>
    ),
  },
  {
    title: "Org-Mode manual",
    image: "/img/org-mode-unicorn.svg",
    description: (
      <>
        A GNU Emacs major mode for keeping notes, authoring documents,
        computational notebooks, literate programming, maintaining to-do lists,
        planning projects, and more — in a fast and effective plain text system.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
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
  );
}
