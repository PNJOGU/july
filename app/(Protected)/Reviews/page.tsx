'use client'
import React, { ChangeEvent, useState } from 'react'

type TReview = {
  name:string,
  review:string
}
function Review() {
  const [formData,setFormdata] = useState<TReview>({
    name:'',
    review:'',
  })

  const handleFormChange = (e:ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const {name,value} = e.target;
    setFormdata({...formData,[name]:value});
  }
  return (
    <section>
        <form className='formReview'>
            <h2>Client review</h2>
            <div>
              <label>Name:</label>
              <input type='text' value={formData.name} name='name' onChange={handleFormChange} placeholder='Your name'/>
            </div>
            <div>
              <label>Review:</label>
              <input type='text' value={formData.review} name='review' onChange={handleFormChange} placeholder='Your review comment'/>
            </div>
            <button>Submit review</button>
        </form>
    </section>
  )
}

export default Review