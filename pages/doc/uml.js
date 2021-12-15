import Head from "next/head";
import SideBar from "../../components/sidebar";
import Image from "next/image";
import { motion } from "framer-motion";
export default function UML() {
  return (
    <div
      className="flex justify-center w-10/12 pb-20
    "
    >
      {" "}
      <Head>
        <title>JR - UML</title>
        <meta name="description" content="JR" />
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <SideBar parent="artofcode" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
        }}
        className="w-2/3 mt-10 ml-5 "
      >
        <h1 className="text-5xl font-medium">UML</h1>
        <p className="mt-5"></p>
        <div
          tabIndex="0"
          className="collapse w-full border rounded-box border-base-100 collapse-arrow collapse-open "
        >
          <div className="collapse-title text-xl font-medium">Defination</div>
          <div className="collapse-content mb-5">
            <p>
              The Unified Modeling Language (UML) was created to forge a common,
              semantically and syntactically rich visual modeling language for
              the architecture, design, and implementation of complex software
              systems both structurally and behaviorally. UML has applications
              beyond software development, such as process flow in
              manufacturing.
            </p>
          </div>
          <Image
            className="rounded-lg"
            alt="single-responsiblity"
            src="/umldef.png"
            width={668}
            height={384}
          />
        </div>
        <h2 className="text-4xl font-normal my-5">Inheritance</h2>
        <Image
          className="rounded-lg"
          alt="single-responsiblity"
          src="/inheritance.png"
          width={668}
          height={384}
        />

        <h2 className="text-4xl font-normal my-5">Composition</h2>
        <Image
          className="rounded-lg"
          alt="single-responsiblity"
          src="/composition.png"
          width={668}
          height={384}
        />
        <h2 className="text-4xl font-normal my-5">Dependency</h2>
        <Image
          className="rounded-lg"
          alt="single-responsiblity"
          src="/dependency.png"
          width={668}
          height={384}
        />
      </motion.div>
    </div>
  );
}
