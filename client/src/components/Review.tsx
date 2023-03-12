import React,{useState} from 'react'
import axios from '../config/axios'

interface Reviews{
    movieName?:string|undefined,
    movieReview?:string|undefined,
}

const Review = () => {
    const [formdata,setFormData]=useState<Reviews>({movieName:'',movieReview:''});
    
    const submitData=(e:any)=>{
        e.preventDefault();
        FormSubmit(formdata)

    }

    const FormSubmit=async(data:Reviews)=>{
        try {
            const response = await axios.post(`create`,data);
            if(response.status==201){
                setFormData({...formdata, movieName:'', movieReview:''});
            }

        }catch(err) {
            console.log(err);
        }
    }

  return (
    <>
    <div className='innerContainer'>
            <form action="">
              <div className='input'>
                <label htmlFor="MovieName">Movie Name</label>
                <input type="text" placeholder='Movie Name' name='MovieName' id='MovieName' value={formdata.movieName}
                onChange={(e)=>{setFormData({...formdata,movieName:e.target.value})}}/>
              </div>
              <div className='input'>
                <label htmlFor="Review">Review</label>
                <input type="text" placeholder='Review' name='Review' id='Review'
                value={formdata.movieReview}
                onChange={(e)=>{setFormData({...formdata,movieReview:e.target.value})}}/>
              </div>
              <div className='btn'>
                <button onClick={submitData}>Submit</button>
              </div>
            </form>
        </div>
    </>
  )
}

export default Review