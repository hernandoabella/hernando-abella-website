import { BsFillGiftFill } from "react-icons/bs";

const BonusBtn = () => {
  // Función para descargar los archivos PDF
  const downloadFiles = () => {
    const files = [
      "/files/120-Advanced-Javascript-Interview-Questions.pdf",
      "/files/150-Python-Pattern-Programs.pdf",
      "/files/250-Killer-JS One-Liners.pdf",
      "/files/50-Concepts-Every-Java-Developer-Should-Know.pdf",
      "/files/SQL-Cookbook.pdf",
    ];

    // Filtra archivos vacíos o undefined
    const validFiles = files.filter((file) => file);

    validFiles.forEach((file) => {
      const link = document.createElement("a");
      const fileName = file.split("/").pop() || "download"; // Nombre del archivo, con valor por defecto
      link.href = file;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <div className="flex items-center gap-6 justify-center">
      <div className="flex items-center justify-center" onClick={downloadFiles}>
        <div className="relative group">
          <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

            <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
              <div className="relative z-10 flex items-center space-x-2">
                <span>Get Bonus Books!</span>
                <BsFillGiftFill className="transition-transform duration-500 group-hover:translate-x-1"/>
              </div>
            </span>
          </button>
        </div>
      </div>

      <a href="https://www.amazon.com/s?k=hernando+abella&i=digital-text&__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=25MA841G5DY4U&sprefix=hernando+abell%2Cdigital-text%2C138&ref=nb_sb_noss_2" target="_blank">
        <div
          className="flex items-center justify-center"
        >
          <div className="relative group">
            <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

              <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                <div className="relative z-10 flex items-center space-x-2">
                  <span>More Books</span>

                  <svg
                    className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                    data-slot="icon"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </span>
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BonusBtn;
