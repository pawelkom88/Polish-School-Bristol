export default function TableData({ children }) {
  return (
    <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
      {children}
    </td>
  );
}
