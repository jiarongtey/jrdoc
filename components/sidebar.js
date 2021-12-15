import Link from "next/link";

export default function SideBar(props) {
  const { parent } = props;

  if (parent == "artofcode") {
    return (
      <div className="w-1/5 mt-10">
        <span className="font-thin text-gray-500">ESSENTIAL</span>
        <ul className="mt-5">
          <Link href="/doc">
            <a>
              <li className="mb-3">
                <span className="font-medium text-gray-500">{"▼ "}</span> Art of
                code
              </li>
            </a>
          </Link>
          <Link href="/doc/oop">
            <a>
              {" "}
              <li className="mb-3">
                <span className="font-medium text-gray-500">{"| "}</span>
                Object Oriented Programming
              </li>
            </a>
          </Link>
          <Link href="/doc/principles">
            <a>
              <li className="mb-3">
                <span className="font-medium text-gray-500">{"| "}</span>
                Principles{" "}
              </li>
            </a>
          </Link>
          <Link href="/doc/uml">
            <a>
              <li className="mb-3">
                <span className="font-medium text-gray-500">{"| "}</span>
                UML{" "}
              </li>
            </a>
          </Link>
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
    );
  } else if (parent == "patterns") {
  } else if (parent == "datastructure") {
  } else if (parent == "react") {
  } else if (parent == "nodejs") {
  } else {
  }
}
