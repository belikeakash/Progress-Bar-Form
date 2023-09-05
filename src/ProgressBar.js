export default function ProgressBar(props) {
  return (
    <>
      <input type="range" value={Math.ceil((props.progress * 100) / 3)} />
    </>
  );
}
