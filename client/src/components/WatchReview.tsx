import React,{useEffect,useState} from 'react'
import axios from '../config/axios'

interface Review{
    id?:number
    movieName?:string
    movieReview?:string
}

const WatchReview = () => {
const [data,setData]=useState([])
const [formdata,setFormData]=useState<Review>({movieName:'',movieReview:''});

useEffect(()=>{
    const getD=async()=>{
        try {
            const response=await axios.get('getdata');
            setData(response.data.data)    
        }catch(err:any){console.log(err)}
    }
    getD()
},[data])

    
const deleteData=async(movieN:string|undefined)=>{
    try{
        console.log(movieN)
        if (movieN !== undefined) {
            const response=await axios.delete(`deletedata/${movieN}`);
            console.log("working axios",movieN,response)
        }
        console.log("working outerside")
    }
    catch(err:any) { console.log(err.message)}
}

const inputEdit=async(reviewNam:string|undefined)=>{
        try{
            formdata.movieName=reviewNam;
            const response=await axios.put(`updatedata`,formdata)
            if(response?.status==201){
                setFormData({...formdata, movieName:'', movieReview:''});
            }
        }catch(err:any) { console.log(err.message) }
}


  return (
    <>
        <table className='table'>
            <thead className='tab-head'>
                <th>id</th>
                <th>Movie Name</th>
                <th>Movie Review</th>
                <th>Update Field</th>
                <th>Update</th>
                <th>Delete</th>
            </thead>
            <tbody className='tab-body'>
                
                 {data.map((element:Review, index) => {
                    return (
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td ><p>{element.movieName}</p></td>
                        <td>{element.movieReview}</td>
                        <td><input type="text" placeholder='Movie Review' value={formdata.movieReview} onChange={(e)=>{setFormData({...formdata,movieReview:e.target.value})}}/></td>
                        <td><button onClick={(e)=>{
                            e.preventDefault();
                            inputEdit(element.movieName)}}>Update</button></td>
                        <td><button onClick={(e)=>{
                            e.preventDefault();
                            deleteData(element.movieName)}}>Delete</button></td>
                      </tr>
                    );
                  })}
                
            </tbody>
        </table>
    </>
  )
}

export default WatchReview