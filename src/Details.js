export default function Details(props) {
  console.log("Details", props);

  return (
    <div>
      <h1>Details</h1>
      <h3>Name : {props.details.name}</h3>
      <h3>Email : {props.details.email}</h3>
      <h3>Phone no. : {props.details.phone}</h3>
      <h3>Address : {props.details.address}</h3>
      <h3>Age : {props.details.age}</h3>
    </div>
  );
}
