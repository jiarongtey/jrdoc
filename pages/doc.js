import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import SideBar from "../components/sidebar2";

export default function Documentation() {
  return (
    <div
      className="flex justify-center w-10/12 pb-20
    "
    >
      {" "}
      <Head>
        <title>JR - Getting Started</title>
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
        <h1 className="text-5xl font-medium mb-5">Introduce of Art of Code</h1>
        <div className="mb-5">
          <p className="mb-3">Welcome to the Art of code Documentation</p>
          <p className="mb-3">
            This documentation will guiding you to write maintainable and simple
            but strong codes.
          </p>
          <p className="mb-3">
            We provide a simple documentation for developer experience to take
            care of the hard / complicated things.
          </p>
          <p className="mb-3">
            If you have questions about anything related to art of code
            documentation, you are always welcome to ask our community on GitHub
            Discussions.
          </p>
        </div>
        <h2 className="text-4xl font-normal mb-4">Overview of concepts</h2>
        <p className="mb-2">
          If you are already using Art of code, learn more about the core
          concepts that power it:
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div className="card shadow-lg hover:shadow-gray-600	">
            <Link href="/doc/oop">
              <a>
                <div className="card-body">
                  <h2 className="card-title">Start from the basic</h2>
                  <p>The basic concept of the documentation</p>
                </div>
              </a>
            </Link>
          </div>
          <div className="card shadow-lg">
            <div className="card-body">
              <h2 className="card-title">Patterns</h2>
              <p>
                The design pattern is a general repeatable solution to a
                commonly occurring problem in software design
              </p>
            </div>
          </div>
          <div className="card shadow-lg">
            <div className="card-body">
              <h2 className="card-title">Data structure</h2>
              <p>To have a better ideas to solve problems</p>
            </div>
          </div>
          <div className="card shadow-lg">
            <div className="card-body">
              <h2 className="card-title">React</h2>
              <p>A front-end javascript library </p>
            </div>
          </div>
          <div className="card shadow-lg">
            <div className="card-body">
              <h2 className="card-title">Nodejs</h2>
              <p>A back-end javascript library </p>
            </div>
          </div>
          <div className="card shadow-lg">
            <div className="card-body">
              <h2 className="card-title">ES6 Javascript</h2>
              <p>To replace multiple complex code to few lines of code </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
