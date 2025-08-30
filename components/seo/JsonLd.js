export default function JsonLd({ data }) {
  if (!data) return null;
  const json = Array.isArray(data) ? data : [data];
  return json.map((entry, idx) => (
    <script
      key={idx}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
    />
  ));
}
