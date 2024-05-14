import { FaStar } from "react-icons/fa";
import Image from "next/image";

const BookList = () => {
  return (
    <div>
      <div className="">
        <h3 className="text-2xl font-semibold mb-3">Best Seller</h3>
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/4 mr-4">
            <Image
              src="/feat-book.jpg"
              alt="Best Seller"
              layout="responsive"
              width={200}
              height={250}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          <div className="w-full md:w-2/3 lg:w-3/4">
            <h2>250+ Killer JavaScript One-Liners</h2>
            <div className="flex mt-2">
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
            <div className="flex mt-4">
              <a
                href="/amazon-link"
                className="flex items-center justify-center text-white bg-blue-500 hover:bg-blue-600 font-semibold py-2 px-4 rounded-lg transition-colors duration-300 mr-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy on Amazon
              </a>
              <a
                href="/gumroad-link"
                className="flex items-center justify-center text-white bg-green-500 hover:bg-green-600 font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy on Gumroad
              </a>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-semibold mb-3">Featured</h3>
      <div className="grid grid-cols-3 gap-4">
        {/* First Book */}
        <div>
          <Image
            src="/50-javascript.jpg"
            alt="Book 1"
            layout="responsive"
            width={200}
            height={250}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        {/* Second Book */}
        <div>
          <Image
            src="/50-python.jpg"
            alt="Book 2"
            layout="responsive"
            width={200}
            height={250}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        {/* Third Book */}
        <div>
          <Image
            src="/50-c-sharp.jpg"
            alt="Book 3"
            layout="responsive"
            width={200}
            height={250}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default BookList;
