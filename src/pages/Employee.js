import { Link } from 'react-router-dom'
import './Employee.css'

export default function Employee() {
  return (
    <section>
      <h1 className="employeeTitle">Current Employees</h1>
      <Link className="homeBtn" to="/">Home</Link>
    </section>
  )
}
