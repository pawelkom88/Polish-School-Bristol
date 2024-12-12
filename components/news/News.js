export default function News({ index, details }) {
  return (
    <>
      <p>
        <b>{index}</b>. {details.intro}
      </p>
      <ul className="my-6 text-left text-pretty">
        <li>
          Nazwa zadania publicznego:{' '}
          <strong className="block md:inline">{details.title}</strong>
        </li>
        <hr className="my-1" />
        <li>
          Kwota dotacji w 2024 r. :{' '}
          <strong className="block md:inline">
            {details.amount}
            PLN
          </strong>
        </li>
        <hr className="my-1" />
        <li>
          Całkowita wartość zadania publicznego:{' '}
          <strong className="block md:inline">{details.fullAmount} PLN</strong>
        </li>
        <hr className="my-1" />
        <li>
          Data podpisania umowy:{' '}
          <strong className="block md:inline">{details.signDate} r.</strong>
        </li>
        <hr className="my-1" />
      </ul>
      <p>{details.description} </p>
    </>
  );
}
