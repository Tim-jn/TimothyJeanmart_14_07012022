import { Link } from 'react-router-dom'
import DataTable from '../Components/DataTable'
import './Employee.css'

export default function Employee() {
  return (
    <section>
      <h1 className="employeeTitle">Current Employees</h1>
      <DataTable />
      <Link className="homeBtn" to="/">
        Home
      </Link>
    </section>
  )
}
