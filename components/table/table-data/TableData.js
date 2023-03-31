export default function TableData({ children }) {
  return (
    <td className="bg-white whitespace-nowrap border-r px-2 py-4 font-medium dark:border-neutral-500">
      {children}
    </td>
  );
}
