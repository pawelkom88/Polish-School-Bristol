import FocusLock from 'react-focus-lock';
import Map from '../map/Map';

export default function Modal({
  onModalOpen,
  isOpen,
  name,
  content,
  location,
}) {
  return (
    <>
      {isOpen && (
        <FocusLock>
          <div
            onClick={onModalOpen}
            className="relative z-10"
            aria-labelledby="School details"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-gray-900 bg-opacity-40 transition-opacity"></div>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                <div
                  onClick={(e) => {
                    // do not close modal if anything inside modal content is clicked
                    e.stopPropagation();
                  }}
                  className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-screen sm:w-full max-w-4xl"
                >
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-12 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3
                          className="text-3xl md:text-5xl font-medium leading-6 text-gray-900 mb-8"
                          id="modal-title"
                        >
                          {name}
                        </h3>
                        <div className="mt-2">
                          <p className="text-md text-gray-900 leading-7 mb-8">
                            {content}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Map location={location} />
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      onClick={onModalOpen}
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Zamknij
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FocusLock>
      )}
    </>
  );
}
