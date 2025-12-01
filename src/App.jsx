import "./App.css";
import { useState } from "react";

function App() {
  const [showJobs, setShowJobs] = useState(false);

  return (
    <>
      {showJobs ? <div>List of Jobs</div> : <div>No Jobs Available</div>}
      <button
        onClick={() => setShowJobs(!showJobs)}
        className=" bg-amber-200 border-2 rounded-2xl p-2"
      >
        {showJobs ? "Hide Jobs" : "Show Jobs"}
      </button>
    </>
  );
}

export default App;
