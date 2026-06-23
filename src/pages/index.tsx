import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const APP_URL = 'https://aipa.aoneahsan.com';
const PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.aoneahsan.aipa';

type Feature = {
  title: string;
  body: string;
};

const FEATURES: Feature[] = [
  {
    title: 'Plan and stay organized',
    body: 'Tasks, quick notes, a rich-text editor, daily and weekly planners, goals, projects, reminders, a smart calendar, and a Pomodoro timer — all in one place.',
  },
  {
    title: 'AI on your own key',
    body: 'AI Brain, chat, a writing assistant, translation, and an image/SVG generator run on a Google Gemini key you supply. No developer-funded LLM — you stay in control of cost and data.',
  },
  {
    title: 'Track money and health',
    body: 'An expense tracker and budget planner, a savings tracker, plus mood, meditation, sleep, water, and exercise logging to keep finances and well-being in view.',
  },
  {
    title: 'Learn and collaborate',
    body: 'Flashcards and study mode, a quiz creator, a vocabulary builder, a personal wiki, code snippets, polls, a whiteboard, and a speed-reading trainer.',
  },
  {
    title: 'Handy utilities',
    body: 'PDF annotation, a cloud file manager, QR codes, a currency converter, time-zone tools, event countdowns, and a gratitude journal — small tools you reach for daily.',
  },
  {
    title: 'Private by design',
    body: 'Your data lives under your own account on the Firebase free tier; device-local settings use on-device storage. Sign in with Google and sync across web, Android, and iOS.',
  },
];

function HomepageHeader(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroTagline}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" href={APP_URL}>
            Open the App
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/getting-started/quick-start"
          >
            Quick Start
          </Link>
          <Link className="button button--outline button--lg" href={PLAY_URL}>
            Get it on Google Play
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.featuresWrap}>
      <div className="container">
        <h2 className={styles.sectionTitle}>40+ tools in one app</h2>
        <p className={styles.sectionSubtitle}>
          AI Personal Assistant (AIPA) bundles productivity, AI, finance,
          health, learning, and utility tools into a single private workspace
          for web, Android, and iOS.
        </p>
        <div className="row">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="col col--4"
              style={{ marginBottom: '1.5rem' }}
            >
              <div className={styles.featureCard}>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureBody}>{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AuthorStrip(): ReactNode {
  return (
    <section className={styles.authorStrip}>
      <div className="container">
        <p>
          Built and maintained by{' '}
          <Link href="https://aoneahsan.com">Ahsan Mahmood</Link> (Zaions) —{' '}
          <Link href="https://linkedin.com/in/aoneahsan">LinkedIn</Link> ·{' '}
          <Link href="https://github.com/aoneahsan">GitHub</Link> ·{' '}
          <Link to="/about-the-author">About</Link>
        </p>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — 40+ productivity & AI tools in one app`}
      description="Documentation for AI Personal Assistant (AIPA): tasks, notes, planners, habits, AI chat and writing, finance and health trackers, flashcards, file utilities, and more — for web, Android, and iOS. AI runs on your own free Google Gemini key."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <AuthorStrip />
      </main>
    </Layout>
  );
}
