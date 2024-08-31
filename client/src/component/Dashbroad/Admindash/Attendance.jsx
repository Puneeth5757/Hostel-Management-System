import { useState, useEffect } from 'react';
import emailjs from "@emailjs/browser";

const Attendance = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/attendance/users');
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Failed to fetch students', error);
      }
    };

    fetchStudents();
  }, []);

  const markAttendance = async (studentId, status) => {
    try {
      const response = await fetch('http://localhost:3000/api/attendance/attendances', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ studentId, status }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message || 'Failed to mark attendance');
        return;
      }

      const data = await response.json();
      alert(`Attendance marked as ${status} for student: ${data.studentName}`);

      if (status === 'Absent') {
        sendEmail(data.studentName, data.studentEmail);
      }
    } catch (error) {
      alert('Failed to mark attendance');
    }
  };

  const sendEmail = (studentName, ) => {
    const templateParams = {
      to_name: studentName,
      from_name: 'Hostel Management',
      message: `Dear ${studentName},\n\nYou have been marked as absent today.\n\nBest regards,\nHostel Management`,
    };

    emailjs.send(
      'service_l1240n9', 
      'template_uf08857',
      templateParams,
      'YpNGo6nYz5JkfaLhU'
    ).then(
      (result) => {
        console.log('SUCCESS!', result.text);
      },
      (error) => {
        console.error('FAILED...', error.text);
      }
    );
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Student Attendance</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.fname}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={() => markAttendance(student._id, 'Present')}
                >
                  Present
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => markAttendance(student._id, 'Absent')}
                >
                  Absent
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
















































// import { useState,useEffect } from 'react';

// const Attendance = () => {

//   const [students, setStudents] = useState([]);
//   // const [message, setMessage] = useState('');

//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/api/attendance/users');
//         const data = await response.json();
//         setStudents(data);
//       } catch (error) {
//         console.error('Failed to fetch students', error);
//       }
//     };

//     fetchStudents();
//   }, []);

//   const markAttendance = async (studentId, status) => {
//     try {
//       const response = await fetch('http://localhost:3000/api/attendance/attendances', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ studentId, status }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         alert(errorData.message || 'Failed to mark attendance');
//         return;
//       }

//       const data = await response.json();
      
//       alert(`Attendance marked as ${status} for student: ${data.studentName}`);
//     } catch (error) {
//       alert('Failed to mark attendance');
//     }
//   };
 
//   return (
//     <div className="container mt-5">
//     <h2 className="mb-4">Student Attendance</h2>
//     <table className="table table-striped table-hover">
//       <thead >
//         <tr>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Phone</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {students.map((student) => (
//           <tr key={student._id}>
//             <td>{student.fname}</td>
//             <td>{student.email}</td>
//             <td>{student.phone}</td>
//             <td>
//               <button
//                 className="btn btn-primary btn-sm mr-2"
//                 onClick={() => markAttendance(student._id, 'Present')}
//               >
//                 Present
//               </button>
//               <button
//                 className="btn btn-danger btn-sm"
//                 onClick={() => markAttendance(student._id, 'Absent')}
//               >
//                 Absent
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//     {/* {message && <p>{message}</p>} */}
//   </div>
//   );
// };

// export default Attendance