import { useState } from "react";
import Details from "./Details";
import FormSlide1 from "./FormSlide1";
import FormSlide2 from "./FormSlide2";
import FormSlide3 from "./FormSlide3";
import ProgressBar from "./ProgressBar";
import "./styles.css";

export default function App() {
  //Add a progress bar also
  const [page, setPage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [details, setDetails] = useState({});
  const changePage = () => {
    setPage(page + 1);
    console.log(details);
    setProgress(progress + 1);
  };

  return (
    <div>
      <ProgressBar progress={progress} />
      {page === 0 ? (
        <FormSlide1 helper={[page, setPage, details, setDetails, changePage]} />
      ) : page === 1 ? (
        <FormSlide2 helper={[page, setPage, details, setDetails, changePage]} />
      ) : page === 2 ? (
        <FormSlide3 helper={[page, setPage, details, setDetails, changePage]} />
      ) : (
        <Details details={details} page={page} />
      )}
    </div>
  );
}
