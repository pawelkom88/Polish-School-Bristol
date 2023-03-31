export default function Section({ children, title }) {
  return (
    <section className="w-full my-12">
      <h2 className="xl:text-5xl text-4xl text-center font-bold mb-7">
        {title}
      </h2>
      <article>{children}</article>
    </section>
  );
}
