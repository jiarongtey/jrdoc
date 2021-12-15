import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          JR - Simple And Powerful Documentation For Web Development
        </title>
        <meta name="description" content="JR" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
          }}
        >
          <h1 className={styles.title + " font-black  "}>Documentation for</h1>
          <motion.div
            animate={{
              color: [
                "hsl(0, 100, 50)",
                "hsl(-120, 100, 50)",
                "hsl(0, 100, 50)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <span className={styles.title + "  font-black"}>Art of code</span>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 2,
          }}
          className="w-5/12 shadow stats m-10"
        >
          <div className="stat place-items-center place-content-center">
            <div className="stat-title">Projects</div>
            <div className="stat-value">6</div>
            <div className="stat-desc">2019 - now</div>
          </div>
          <div className="stat place-items-center place-content-center">
            <div className="stat-title">Preffered language</div>
            <div className="stat-value text-accent">Javascript</div>
            <div className="stat-desc text-accent">↗︎ Java, Python</div>
          </div>
        </motion.div>
        <ul className="w-5/12 steps m-5 mb-10">
          <li className="step step-accent">Node.js</li>
          <li className="step step-accent">Next.js</li>
          <li className="step">DJango</li>
          <li className="step">Laravel</li>
        </ul>
        <div className="mockup-code w-5/12">
          <pre data-prefix="1">
            <code>{"public static void main(){"}</code>
          </pre>
          <pre data-prefix="2">
            <code>{"  while(true){"}</code>
          </pre>
          <pre data-prefix="3">
            <code>{"    eat();"}</code>
          </pre>
          <pre data-prefix="4">
            <code>{"    sleep();"}</code>
          </pre>
          <pre data-prefix="5">
            <code>{"    code();"}</code>
          </pre>
          <pre data-prefix="6">
            <code>{"  }"}</code>
          </pre>
          <pre data-prefix="7">
            <code>{"}"}</code>
          </pre>
          <pre data-prefix="3" className="bg-warning text-neutral">
            <code>Error! java.lang.tooHeavyException</code>
          </pre>
        </div>
      </main>
    </div>
  );
}
