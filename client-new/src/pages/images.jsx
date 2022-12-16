import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { imageUpload } from '../apis/apis';

const Images = () => {
    const [imge, setImage] = useState([])

   const sendImagefile = async(e) =>{
    setImage(e.target.files[0]);
   }

   const adduserData = async(e) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append("photo",imge)
        const data = await imageUpload(formData)
        console.log(data);
    }

  return (
<Form>
    <Form.Group className='mb-3'>
        <Form.Label>Upload Image</Form.Label>
        <Form.Control type='file' name='photo' onChange={sendImagefile}/>
    </Form.Group>
    <Button variant='primary' type='submit' onClick={adduserData}>
        Submit
    </Button>
</Form>
  )
}

export default Images