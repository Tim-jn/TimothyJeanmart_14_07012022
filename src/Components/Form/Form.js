import './Form.css'
import { Modal } from 'tim-jnmodal-react'
import states from '../../data/states'
import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase.config'

export default function Form() {
  const employeeRef = collection(db, 'Employee')

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [startDate, setStartDate] = useState('')
  const [department, setDepartment] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')

  const createEmployee = async (e) => {
    e.preventDefault()
    await addDoc(employeeRef, {
      firstname: firstname,
      lastname: lastname,
      startDate: startDate,
      department: department,
      dateOfBirth: dateOfBirth,
      street: street,
      city: city,
      state: state,
      zipCode: zipCode,
    })
  }

  return (
    <section className="formContent">
      <h2 className="formTitle">Create Employee</h2>
      <form className="form" onSubmit={createEmployee}>
        <div className="formUpperPart">
          <label className="formLabel">
            First Name
            <input
              className="formInput"
              type="text"
              name="firstname"
              onChange={(e) => {
                setFirstname(e.target.value)
              }}
              required
            />
          </label>
          <label className="formLabel">
            Last Name
            <input
              className="formInput"
              type="text"
              name="lastname"
              onChange={(e) => {
                setLastname(e.target.value)
              }}
              required
            />
          </label>
          <label className="formLabel">
            Date of Birth
            <input
              className="formInput"
              type="date"
              name="dateOfBirth"
              onChange={(e) => {
                setDateOfBirth(e.target.value)
              }}
              required
            />
          </label>
          <label className="formLabel">
            Start Date
            <input
              className="formInput"
              type="date"
              name="startDate"
              onChange={(e) => {
                setStartDate(e.target.value)
              }}
              required
            />
          </label>
        </div>
        <div className="fieldset">
          <label className="formLabel">
            Street
            <input
              className="formInput"
              type="text"
              name="street"
              onChange={(e) => {
                setStreet(e.target.value)
              }}
              required
            />
          </label>
          <label className="formLabel">
            City
            <input
              className="formInput"
              type="text"
              name="city"
              onChange={(e) => {
                setCity(e.target.value)
              }}
              required
            />
          </label>
          <label className="formLabel">
            State
            <select
              className="formSelect"
              onChange={(e) => {
                setState(e.target.value)
              }}
              required
            >
              <option value=""></option>
              {states.map((state, index) => {
                return (
                  <option key={index} value={state.abbreviation}>
                    {state.name}
                  </option>
                )
              })}
            </select>
          </label>
          <label className="formLabel">
            Zip Code
            <input
              className="formInput"
              type="text"
              name="zipCode"
              onChange={(e) => {
                setZipCode(e.target.value)
              }}
              required
            />
          </label>
        </div>
        <label className="formLabel">
          Department
          <select
            className="formSelect"
            onChange={(e) => {
              setDepartment(e.target.value)
            }}
            required
          >
            <option value=""></option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Legal">Legal</option>
          </select>
        </label>
        <Modal
          type="submit"
          openBtn="Save"
          modalText="Employee Created !"
          modalBtn="Close"
        />
      </form>
    </section>
  )
}
