import { useState } from "react";
import { NewYearModal } from "./components/newYearModal/NewYearModal";

export const HomePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  }
  
  const handleCloseModal = () => {
    setModalOpen(false);
  }

  const [year, setYear] = useState(new Date().getFullYear());

  const handleUpdateYear = () => {
    setYear(year + 1);
  }

  return (
    <div>
      <button onClick={handleModalOpen}>
       Click Here
      </button>
      <h1>Happy {year}</h1>
      {isModalOpen && (
        <NewYearModal
          year={year}
          onUpdateYear={handleUpdateYear}
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}