import React,{useEffect,useState} from 'react'
import axios from '../config/axios'
import { rmSync } from 'fs'

interface Review{
    id?:number
    movieName?:string
    movieReview?:string

}

const WatchReview = () => {
const [data,setData]=useState([])

useEffect(()=>{
    const getD=async()=>{
        try {
            const response=await axios.get('getdata');
            setData(response.data.data)    
        }catch(err){console.log(err)}
    }
    getD()
},[data])

  return (
    <>
        <table className='table'>
            <thead className='tab-head'>
                <th>id</th>
                <th>Movie Name</th>
                <th>Movie Review</th>
            </thead>
            <tbody className='tab-body'>
                
                 {data.map((element:Review, index) => {
                    return (
                      <tr key={index}>
                        <td>{element.id}</td>
                        <td>{element.movieName}</td>
                        <td>{element.movieReview}</td>
                      </tr>
                    );
                  })}
                
            </tbody>
        </table>
    </>
  )
}

export default WatchReview