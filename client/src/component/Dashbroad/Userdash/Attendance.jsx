import  { useContext, useEffect, useState } from 'react';
import { LoginContext } from "../../../component/LandingSite/Auth/ContextProvider/Context";


const Attendance = () => {

  const { logindata,} = useContext(LoginContext);
  // console.log(logindata)
  const studentId = logindata ? logindata.ValidUserOne._id : "";
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [message, setMessage] = useState('');
  

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/attendance/attendances/${studentId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch attendance records');
        }
        const data = await response.json();
        setAttendanceRecords(data);
      } catch (error) {
        console.error(error);
        setMessage('Failed to load attendance records');
      }
    };

    fetchAttendance();
  }, [studentId]);
  return (
    <div className='text-center'>
    <h2>My Attendance</h2>
    {message && <p>{message}</p>}
    <table className='container text-center'>
      <thead >
        <tr>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {attendanceRecords.map((record) => (
          <tr key={record._id}>
            <td>{new Date(record.date).toLocaleDateString()}</td>
            <td>{record.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Attendance