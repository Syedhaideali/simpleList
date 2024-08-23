// import React from 'react';

// const StudentsList = () => {
//   const students = [
//     { rollNo: 44401, name: "syed hassan ali", fatherName: "syed mohammad ali" },
//     { rollNo: 54301, name: "syed haider ali", fatherName: " syed khalid ali" },
//     { rollNo: 32901, name: "syed furqan ali", fatherName: "syed answar ali" },
//   ];

//   return (
//     <div>
//       <h2>Students List</h2>
//       <table border="1" cellPadding="10" cellSpacing="0">
//         <thead>
//           <tr>
//             <th>Roll No</th>
//             <th>Name</th>
//             <th>Father Name</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student, index) => (
//             <tr key={index}>
//               <td>{student.rollNo}</td>
//               <td>{student.name}</td>
//               <td>{student.fatherName}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StudentsList;








import React from 'react';

const StudentsList = () => {
  const students = [
    { rollNo: 44401, name: "Syed Hassan Ali", fatherName: "Syed Mohammad Ali", Religion:"Islam" ,Age: "20"},
    { rollNo: 54301, name: "Syed Haider Ali", fatherName: "Syed Khalid Ali",Religion:"Islam", Age:"55"},
    { rollNo: 32901, name: "Syed Furqan Ali", fatherName: "Syed Answar Ali", Religion:"Islam", Age:"39"  },

  ];

  const rowColors = ['lightblue', 'lightgreen', 'lightcoral'];

  return (
    <div>
      <h2>Students List</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Father Name</th>
            <th>Age</th>
            <th>Religion</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} style={{ backgroundColor: rowColors[index % rowColors.length] }}>
              <td>{student.rollNo}</td>
              <td>{student.name}</td>
              <td>{student.fatherName}</td>
              <td>{student.Age}</td>
              <td>{student.Religion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsList;

