import { motion } from "framer-motion";

export default function Business() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 2,
      }}
      className="m-20"
    >
      {" "}
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Company</th>
            <th>Description</th>
            <th>Progression</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Axar Sdn Bhd</td>
            <td>Web development company</td>
            <td>
              {" "}
              <progress
                className="progress progress-secondary"
                value="20"
                max="100"
              ></progress>
            </td>{" "}
          </tr>
          <tr>
            <th>2</th>
            <td>Ching Chong fengshui crystal sdn bhd</td>
            <td>Reselling crystal and fengshui elements</td>
            <td>
              {" "}
              <progress
                className="progress progress-secondary"
                value="80"
                max="100"
              ></progress>
            </td>{" "}
          </tr>
          <tr>
            <th>3</th>
            <td>Sneaker Sneaker Me</td>
            <td>Sneaker reseller company</td>
            <td>
              {" "}
              <progress
                className="progress progress-secondary"
                value="100"
                max="100"
              ></progress>
            </td>{" "}
          </tr>
          <tr>
            <th>4</th>
            <td>Axar Mobile Sdn Bhd</td>
            <td>Seconday hand phone company</td>
            <td>
              {" "}
              <progress
                className="progress progress-secondary"
                value="50"
                max="100"
              ></progress>
            </td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  );
}
