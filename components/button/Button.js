export default function Button({
  id,
  children,
  className,
  onModalOpen,
  onModalData,
}) {
  return (
    <>
      <button
        onClick={() => {
          onModalOpen(), onModalData(id);
        }}
        className={className}
      >
        {children}
      </button>
    </>
  );
}
