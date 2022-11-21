import data from '../../data/data.json';
import { useState } from 'react';
import Button from '../button/Button';
import Modal from '../modal/Modal';

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function setSchool(id) {
    setModalData(id);
  }

  return (
    <>
      {isOpen &&
        data.map(({ id, name, content, location }) => {
          if (modalData === id) {
            return (
              <Modal
                key={id}
                onModalOpen={toggleModal}
                isOpen={isOpen}
                name={name}
                content={content}
                location={location}
              />
            );
          }
        })}
      <section className="h-full pt-12 md:pt-48 md:mt-0 md:h-screen flex flex-col justify-center text-center  lg:flex-row md:justify-center md:items-center 2xl:px-96 xl:px-72 lg:px-24 md:px-24 px-8 ">
        <div>
          <h1 className="xl:text-6xl text-4xl font-bold mb-7">
            Polska Szkoła Języka i Kultury w{' '}
            <span className="bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100%">
              Bristolu
            </span>
          </h1>
          <p className="text-lg xl:text-2xl mb-7 py-4 md:px-8 ">
            Naszą misją jest, aby uczniowie poznali i pielęgnowali polskie
            tradycje i obyczaje, stając się ambasadorami kultury polskiej na
            świecie.
          </p>
          {data.map(({ id, className, name }) => {
            return (
              <span key={id}>
                <Button
                  id={id}
                  onModalData={setSchool}
                  onModalOpen={toggleModal}
                  className={className}
                >
                  {name}
                </Button>
              </span>
            );
          })}
        </div>
      </section>
    </>
  );
}
