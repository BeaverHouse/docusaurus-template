import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Translate, { translate } from "@docusaurus/Translate";
import React from "react";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

// Set your content
const sub1Title = "한국어 템플릿";
const sub1Desc = "이 템플릿의 기본 언어는 한국어입니다.";
const sub2Title = "기본 설정";
const sub2Desc = "폴더 구조, 다국어 등이 이미 설정되어 있습니다.";

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      id: "subject-1",
      message: sub1Title,
      description: "Title for subject 1",
    }),
    // Set your image file
    Svg: require("@site/static/img/korea.svg").default,
    description: <Translate id="subject-description-1">{sub1Desc}</Translate>,
  },
  {
    title: translate({
      id: "subject-2",
      message: sub2Title,
      description: "Title for subject 2",
    }),
    // Set your image file
    Svg: require("@site/static/img/template.svg").default,
    description: <Translate id="subject-description-2">{sub2Desc}</Translate>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div style={{ margin: "0 auto" }} className={clsx("col col--4")}>
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
