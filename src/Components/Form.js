import './Form.css'
import { Modal } from 'tim-jnmodal-react'
import states from '../data/states'

export default function Form() {
  return (
    <section className="formContent">
      <h2 className="formTitle">Create Employee</h2>
      <form className="form">
        <div className="formUpperPart">
          <label>
            First Name
            <input type="text" name="firstname" required />
          </label>
          <label>
            Last Name
            <input type="text" name="lastname" required />
          </label>
          <label>
            Date of Birth
            <input type="date" name="dateOfBirth" required />
          </label>
          <label>
            Start Date
            <input type="date" name="startDate" required />
          </label>
        </div>
        <div className="fieldset">
          <label>
            Street
            <input type="text" name="street" required />
          </label>
          <label>
            City
            <input type="text" name="city" required />
          </label>
          <label>
            State
            <select>
              {states.map((state, index) => {
                return (
                  <option key={index} value={state.name}>
                    {state.name}
                  </option>
                )
              })}
            </select>
          </label>
          <label>
            Zip Code
            <input type="text" name="zipCode" required />
          </label>
        </div>
        <label>
          Department
          <select>
            <option defaultValue="sales">Sales</option>
            <option value="marketing">Marketing</option>
            <option value="engineering">Engineering</option>
            <option value="humanResources">Human Resources</option>
            <option value="legal">Legal</option>
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
