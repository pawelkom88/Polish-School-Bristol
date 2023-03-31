export default function TableHeading({ children, styles = '' }) {
  return (
    <th scope="col" className={`px-4 dark:border-neutral-500 ${styles}`}>
      {children}
    </th>
  );
}
