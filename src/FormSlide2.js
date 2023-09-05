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
          placeholder="Phone no."
          required={true}
          onChange={(e) => {
            setDetails({
              ...details,
              phone: e.target.value
            });
          }}
        />
        <input
          type="text"
          placeholder="Address"
          required={true}
          onChange={(e) => {
            setDetails({
              ...details,
              address: e.target.value
            });
          }}
        />
        <input
          type="text"
          placeholder="Age"
          required={true}
          onChange={(e) => {
            setDetails({
              ...details,
              age: e.target.value
            });
          }}
        />
        <button type="submit" onClick={changePage}>
          Submit
        </button>
      </form>
    </div>
  );
}
