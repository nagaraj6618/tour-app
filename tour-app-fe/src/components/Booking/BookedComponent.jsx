import React ,{useEffect}from 'react'
import { BASE_URL } from '../../utils/config'
import useFetch from '../../hooks/useFetch'
const BookedComponent = () => {
  const response = useFetch(`${BASE_URL}/booking`)
  async function tourBooking() {
    
    const res = await fetch(`${BASE_URL}/booking`)
    const data = await res.json()
    console.log(response);
  }
  useEffect(()=>{
   tourBooking()
   
 },[])

  return (
    <div>BookedComponent</div>
  )
}

export default BookedComponent