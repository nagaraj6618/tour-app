import React ,{useState}from 'react'
import { BASE_URL } from '../../utils/config'
import './UploadComponent.css'
import { useParams } from 'react-router-dom'
const UpdateComponent = () => {
   const {id} = useParams()

   const [selectedFile, setSelectedFile] = useState(null)
   const [formDatas, setFormDatas] = useState({
      title: '',
      city: '',
      distance: '',
      price: '',
      maxGroupSize: '',
      address: '',
      desc: '',
      photo: ''
   });

   const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0])

   }
   const handleChange = (e) => {
      const { name, value, } = e.target;
      setFormDatas((prevData) => ({
         ...prevData,
         [name]: value,
      }));

   }

   const handleSubmit = async (event) => {

      formDatas.photo = '/tour-images/' + selectedFile.name
      event.preventDefault();
      if (!selectedFile) {
         alert('Select a file, and then upload')
      }

      const formData = new FormData()
      formData.append('file', selectedFile)


      try {
         const response = await fetch(`${BASE_URL}/tours/upload/image`, {
            method: 'POST',
            credentials: 'include',
            body: formData,
         })


         const responseData = await fetch(`${BASE_URL}/tours/${id}`, {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',

            },
            credentials: 'include',
            body: JSON.stringify(formDatas)
         })
         if (responseData.status === 200 || response.status===200) {
            alert(`File upload and update was successfull`)
              window.location.href='/tours'
         }
         else {
            alert(`File upload was not successfull`)
           
            //   window.location.href='/'
         }
      }
      catch (error) {
         console.log('Error while uploading the file', error)
      }



   }
   return (
      <div className='containers'>
         <form className='form-container' onSubmit={handleSubmit}>
            <div>

               <input type='text'
                  name='title'
                  placeholder='Enter the Title'
                  value={formDatas.title}
                  onChange={handleChange}
                  required
               />
            </div>
            <div>

               <input type='text'
                  name='city'
                  placeholder='Enter the City'
                  value={formDatas.city}
                  onChange={handleChange}
                  required
               />
            </div>

            <div>
               <input type='number'
                  name='distance'
                  value={formDatas.distance}
                  onChange={handleChange}
                  placeholder='Enter the Distance'
                  required
               />
            </div>
            <div>
               <input type='number'
                  name='price'
                  value={formDatas.price}
                  onChange={handleChange}
                  placeholder='Enter the Price'
                  required
               />
            </div>
            <div>
               <input type='number'
                  name='maxGroupSize'
                  value={formDatas.maxGroupSize}
                  onChange={handleChange}
                  placeholder='Maximum Group Size'
                  required
               />
            </div>
            <div>
               <label>Featured</label>
               <select
                  name='featured'
                  value={formDatas.featured}
                  onChange={handleChange}
                  required
               >
                  <option value={true}>True</option>
                  <option value={false}>False</option>
               </select>
            </div>
            <div>
               <input type='file'

                  onChange={handleFileChange}
               />
            </div>
            <div>
               <textarea type='text'
                  name='address'
                  value={formDatas.address}
                  onChange={handleChange}
                  placeholder='Enter the Address'
                  required
               />
            </div>
            <div>
               <textarea type='text'
                  name='desc'
                  value={formDatas.desc}
                  onChange={handleChange}
                  placeholder='Enter the description'
                  required
               />
            </div>
            <div>
               <button type='submit'>submit</button>
            </div>
         </form>

      </div>
   )
}

export default UpdateComponent