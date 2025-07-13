import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '成長意欲の高さ',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        IT業界に入ってから毎日少しずつ学習を続けており、UdemyやKindleでの学習、個人サーバーでの実践などを通じてスキルを磨いています。
        資格勉強にも力を入れており、現在は情報処理安全確保支援士試験の合格を目指して取り組んでいます。
      </>
    ),
  },
  {
    title: '自走力と挑戦心',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        指導がなくても主体的に動ける力があります。
        引継ぎが不十分な環境下でも業務を遂行し、新しい技術（例：JMeterやLiquibase）にも積極的に挑戦して成果を出してきました。
        実務で得た知見はドキュメント化して社内共有も行っています。
      </>
    ),
  },
  {
    title: '高いコミュニケーション力',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        チームメンバーとのこまめな情報共有や、自分のタスク以外にも関心を持って問題解決に貢献しています。
        リーダーとのやり取りでは選択肢を提示するなど、相手の判断を助ける工夫を意識しています。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
