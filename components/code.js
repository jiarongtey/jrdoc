export default function Code(props) {
  const { codes } = props; // Array
  return (
    <div className="mockup-code mt-5 text-sm">
      {codes.map((c, i) => (
        <pre data-prefix={i + 1} key={i}>
          <code>{c}</code>
        </pre>
      ))}
    </div>
  );
}
