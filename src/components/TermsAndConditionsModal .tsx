import { FC, useState } from "react";

export const TermsAndConditionsModal: FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const termsAndConditionsContent = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed justo vel lectus tincidunt fermentum in a urna.
    Vestibulum eu nisi at nisl fringilla dapibus a non turpis. Nullam vel eros nec tortor ullamcorper bibendum.
    Fusce in nunc convallis, commodo sapien eu, vestibulum tellus. Sed consectetur, eros ac scelerisque tincidunt,
    velit tellus tincidunt sapien, id tristique purus nunc vel est.
    
    Duis laoreet justo ut dictum gravida. Vivamus a eros et libero auctor fringilla id ut turpis.
    Aliquam non nisl vel tortor hendrerit volutpat. Ut vel ligula ullamcorper, egestas arcu ut, gravida nisi.
    Integer in libero vel justo condimentum sollicitudin.
    
    Morbi et nunc ac nulla efficitur condimentum. Sed semper purus nec urna hendrerit, a malesuada mi vestibulum.
    Proin consectetur odio in eros pharetra, sed suscipit risus tristique. Sed eu eleifend quam, eu cursus elit.
    `;

  return (
    <>
      <button className="text-blue-500 hover:underline" onClick={openModal}>
        Ver Términos y Condiciones
      </button>
      {modalIsOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {termsAndConditionsContent}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
