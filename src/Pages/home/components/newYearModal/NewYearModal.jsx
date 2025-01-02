// Okay this one is a little bit of both the challenge that you did

// Make a page with a button that says "click me". and an h1 that says "Happy 2024" 

// On click the button should show a modal. The modal should have two buttons in it. Update Year, and Cancel. You should be able to click outside to hide the modal, click an x in the upper right corner to hide the modal or click either button.

// When you click Update year, the year should say Happy 2025

export const NewYearModal = ({ year, onUpdateYear, onClose }) => {
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal')) {
      onClose();
    }
  };

  return (
    <div className="modal relative p-4 w-full max-w-2xl max-h-full" aria-labelledby="modal-title" role="dialog" aria-modal="true" onClick={handleOutsideClick}>
      <div className="modal-content relative bg-white rounded-lg shadow dark:bg-gray-700">
        <h1 className="p-4 md:p-5 space-y-4">
          Happy New Year Modal
        </h1>
        <div className="modal-footer flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button onClick={onUpdateYear} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update year</button>
          <button onClick={onClose} className="py-2.5 px-5 ml-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancel</button>
        </div>
      </div>
    </div>
  );
};
