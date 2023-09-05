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
          placeholder="Name"
          required={true}
          onChange={(e) => {
            setDetails({
              ...details,
              name: e.target.value
            });
          }}
        />
        <input
          type="email"
          placeholder="Email"
          required={true}
          onChange={(e) => {
            setDetails({
              ...details,
              email: e.target.value
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
