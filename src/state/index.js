import { createGlobalState } from 'react-hooks-global-state'

export const initialState = {
  firstname: '',
  lastname: '',
  startDate: '',
  department: '',
  dateOfBirth: '',
  street: '',
  city: '',
  state: '',
  zipCode: '',
}

const { useGlobalState } = createGlobalState(initialState)

export { useGlobalState }
