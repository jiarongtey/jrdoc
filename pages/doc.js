import Code from "../components/code";
import Head from "next/head";
import Image from "next/image";

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
      <div className="w-1/5 mt-10">
        <span className="font-thin text-gray-500">ESSENTIAL</span>
        <ul className="mt-5">
          <li className="mb-3">
            <span className="font-medium text-gray-500">{"▼ "}</span> Art of
            code
          </li>
          <li className="mb-3">
            <span className="font-medium text-gray-500">{"| "}</span>
            Object Oriented Programming
          </li>
          <li className="mb-3">
            <span className="font-medium text-gray-500">{"| "}</span>
            Principles{" "}
          </li>
          <li className="mb-3">
            <span className="font-medium text-gray-500">{"| "}</span>
            UML{" "}
          </li>
          <li className="mb-3">
            <span className="font-medium text-gray-500">{"► "}</span> Patterns
          </li>{" "}
          <li className="mb-3">
            <span className="font-medium text-gray-500">{"► "}</span> Data
            Structure code
          </li>{" "}
          <li className="mb-3">
            <span className="font-medium text-gray-500">{"► "}</span> React
          </li>{" "}
          <li className="mb-3">
            <span className="font-medium text-gray-500">{"► "}</span> Node.js
          </li>{" "}
          <li className="mb-3">
            <span className="font-medium text-gray-500">{"► "}</span> ES6
            Javascript
          </li>{" "}
        </ul>
      </div>
      <div className="w-2/3 mt-10 ml-5 ">
        <h1 className="text-5xl font-medium mb-5">Art of Code</h1>
        <h2 className="text-4xl font-medium mb-5">Getting Start</h2>
        <div className="mb-5">
          <p className="">Welcome to the Next.js documentation!</p>
          <p>
            {" "}
            If you are new to Next.js we recommend that you start with the learn
            course.{" "}
          </p>
          <p>
            The interactive course with quizzes will guide you through
            everything you need to know to use Next.js.
          </p>
          <p>
            If you have questions about anything related to Next.js, you're
            always welcome to ask our community on GitHub Discussions.
          </p>
        </div>

        <Image
          className="rounded-lg shadow"
          alt="pictures"
          src="/sun-tzu-statue.jpg"
          height={200}
          width={350}
        />
      </div>
    </div>
  );
}
