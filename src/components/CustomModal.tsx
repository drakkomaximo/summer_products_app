import { FC, useState } from "react";

interface CustomModalProps {
  title: string;
  message: string;
}

export const CustomModal: FC<CustomModalProps> = ({ message, title }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <button
        className="text-gray-500 font-bold hover:text-gray-300 hover:underline"
        onClick={openModal}
      >
        {title}
      </button>
      {modalIsOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full md:w-auto my-6 mx-4 ">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                    {title}
                  </h3>
                </div>
                <div className="relative p-6 flex-auto max-h-[14rem] overflow-y-auto">
                  <p className="my-2 text-slate-500 text-base md:text-lg leading-relaxed">
                    {message}
                  </p>
                </div>
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm md:text-base outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
