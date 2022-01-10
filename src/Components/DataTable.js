import './DataTable.css'
import { useState, useEffect } from 'react'
import { db } from '../firebase.config'
import { collection, getDocs } from 'firebase/firestore'

export default function DataTable() {
  const [employees, setEmployees] = useState([])
  const employeeRef = collection(db, 'Employee')

  useEffect(() => {
    const getEmployee = async () => {
      const data = await getDocs(employeeRef)
      setEmployees(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getEmployee()
  }, [employeeRef])

  return (
    <section className="dataTable">
      <div className="dataTableUpperPart">
        <div className="showEntries">
          Show{' '}
          <select className="showEntriesSelect">
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>{' '}
          entries
        </div>
        <div className="searchBar">
          <label className="searchBarLabel" htmlFor="search">
            Search :
          </label>
          <input className="searchBarInput" type="search" id="search"></input>
        </div>
      </div>
      <table className="employeeTable">
        <thead>
          <tr role="row">
            <th className="sorting" tabIndex={0}>
              First Name
            </th>
            <th className="sorting" tabIndex={0}>
              Last Name
            </th>
            <th className="sorting" tabIndex={0}>
              Start Date
            </th>
            <th className="sorting" tabIndex={0}>
              Department
            </th>
            <th className="sorting" tabIndex={0}>
              Date of Birth
            </th>
            <th className="sorting" tabIndex={0}>
              Street
            </th>
            <th className="sorting" tabIndex={0}>
              City
            </th>
            <th className="sorting" tabIndex={0}>
              State
            </th>
            <th className="sorting" tabIndex={0}>
              Zip Code
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => {
            return (
              <tr key={index} className="odd" role="row">
                <td>{employee.firstname}</td>
                <td>{employee.lastname}</td>
                <td>{employee.startDate}</td>
                <td>{employee.department}</td>
                <td>{employee.dateOfBirth}</td>
                <td>{employee.street}</td>
                <td>{employee.city}</td>
                <td>{employee.state}</td>
                <td>{employee.zipCode}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}
