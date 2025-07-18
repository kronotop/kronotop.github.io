import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Built for Horizontal Scalability',
    Svg: require('@site/static/img/kronotop-cluster.svg').default,
    description: (
      <>
        Kronotop is natively designed for sharding and horizontal scaling, 
        making it ideal for growing workloads without compromising performance or reliability.
      </>
    ),
  },
  {
    title: 'ACID Transactions',
    Svg: require('@site/static/img/kronotop-transactions.svg').default,
    description: (
      <>
        Relies on FoundationDB as a transactional metadata and indexing store, offering ACID 
        guarantees critical for consistency in documents.
      </>
    ),
  },
  {
    title: 'Document-Oriented Storage',
    Svg: require('@site/static/img/kronotop-bucket.svg').default,
    description: (
      <>
        Introduces Bucket — a specialized data structure for storing JSON-like documents with a familiar query language.
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
