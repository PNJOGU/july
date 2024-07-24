import React from 'react'
import { addReview } from '@/actions/addReview'
function Review() {
  return (
    <main>
      <form className='reviewform' action={addReview}>
        <div>
          <label>Name</label>
          <input type='text' name='name' required />
        </div>
        <div>
          <label>Email</label>
          <input type='email' name='email' required />
        </div>
        <div>
          <label>Title</label>
          <input type='text' name='title' required />
        </div>
        <div>
          <label>Comment</label>
          <textarea name='content' required />
        </div>
        <button>Submit</button>
      </form>
    </main>
  )
}

export default Review