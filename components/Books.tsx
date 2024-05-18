import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

const BookList = () => {
  return (
    <div>
      <div className="">
        <h3 className="text-2xl font-semibold mb-3">Best Seller</h3>
        <div className="flex flex-col md:flex-row md:items-center mb-4 gap-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4"
          >
            <Image
              src="/feat-book.jpg"
              alt="Best Seller"
              layout="responsive"
              width={200}
              height={250}
              objectFit="cover"
              className="rounded-lg w-full md:w-auto"
            />
          </motion.div>

          <div className="w-full md:w-2/3 lg:w-3/4">
            <h2 className="text-2xl font-extrabold dark:text-white">
              250+ Killer JavaScript One-Liners
            </h2>
            <div className="flex mt-2 gap-">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
            </div>
            <p className="flex-grow pt-5">
              💡This book is your passport to mastering the intricacies of
              JavaScript. Inside, discover a collection of powerful, concise
              code snippets that will transform the way you write and think
              about JavaScript.
            </p>
            <div className="mt-4">
              <a
                href="/amazon-link"
                className="block w-full md:inline-block md:w-auto text-center text-white bg-blue-500 hover:bg-blue-600 font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300 mb-2 md:mb-0 md:mr-2 items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-amazon mr-2"></i> Buy on Amazon
              </a>
              <a
                href="/gumroad-link"
                className="block w-full md:inline-block md:w-auto text-center text-white bg-green-500 hover:bg-green-600 font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300 items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-gumroad mr-2"></i> Buy on Gumroad
              </a>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-semibold mb-3">Featured</h3>
      <div className="grid grid-cols-3 gap-4">
        {/* First Book */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/50-javascript.jpg"
            alt="Book 1"
            layout="responsive"
            width={200}
            height={250}
            objectFit="cover"
            className="rounded-lg"
          />
        </motion.div>
        {/* Second Book */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/50-python.jpg"
            alt="Book 2"
            layout="responsive"
            width={200}
            height={250}
            objectFit="cover"
            className="rounded-lg"
          />
        </motion.div>
        {/* Third Book */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/50-c-sharp.jpg"
            alt="Book 3"
            layout="responsive"
            width={200}
            height={250}
            objectFit="cover"
            className="rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default BookList;
