export default function FormSlide1(props) {
  const [page, setPage, details, setDetails, changePage] = props.helper;

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Gender"
          required={true}
          onChange={(e) => {
            setDetails({
              ...details,
              gender: e.target.value
            });
          }}
        />
        <input
          type="Maritial Status"
          placeholder="Email"
          required={true}
          onChange={(e) => {
            setDetails({
              ...details,
              maritial: e.target.value
            });
          }}
        />
        <button type="submit" onClick={changePage}>
          Next
        </button>
      </form>
    </div>
  );
}
