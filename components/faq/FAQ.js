import React from 'react'
import FaqAnswer from '../faq-answer/FaqAnswer'

export default function FAQ() {
  return (
    <section className="bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h4 className="text-4xl font-semibold text-white">
          Najczesciej zadawane pytania
        </h4>
        <hr className="my-6 dark:border-gray-700" />
        <FaqAnswer title="Nasze placowki">
          <p className="font-bold">Prowadzimy 2 placowki w Bristolu: </p>
          <br />
          <p>Bristol Oasis Academy, Bank Leaze BS11 0SN</p>
          <br />
          <button class="dark:bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Pokaz na mapie
          </button>
          <br />
          <p>Holy Cross Primary School, Dean Ln, Bedminster, BS3 1DB,</p>
          <br />
          <button class="dark:bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Pokaz na mapie
          </button>
          <br />
        </FaqAnswer>
        <hr className="my-8 border-gray-200 dark:border-gray-700" />
        <FaqAnswer title="Question !">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum
          quae. Harum officiis reprehenderit ex quia ducimus minima id provident
          molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.
        </FaqAnswer>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />
        <FaqAnswer title="Question !">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum
          quae. Harum officiis reprehenderit ex quia ducimus minima id provident
          molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.
        </FaqAnswer>
        <hr className="my-8 border-gray-200 dark:border-gray-700" />
        <FaqAnswer title="Question !">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum
          quae. Harum officiis reprehenderit ex quia ducimus minima id provident
          molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.
        </FaqAnswer>
        <hr className="my-8 border-gray-200 dark:border-gray-700" />
      </div>
    </section>
  )
}
