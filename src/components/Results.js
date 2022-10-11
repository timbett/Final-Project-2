import React from "react";

function Results({ results }) {
  console.log(results);
  const studentResult = results.map((student) => (
    <div>
      <tr>
        <th>Name</th>
        <th>Grade</th>
        <th>Remarks</th>
      </tr>
      <tr>
        <td>{student.name}</td>
        <td>{student.Grade}</td>
        <td>{student.message}</td>
      
      </tr>
    </div>
  ));

  return <div className="resultsCard">
    {studentResult}
  </div>;
}

export default Results;

