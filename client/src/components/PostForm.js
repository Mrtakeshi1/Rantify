import React, { useState } from 'react'

const initInputs = {
  title: "",
  description: "",
}

export default function PostForm(props){
  const [inputs, setInputs] = useState(initInputs)
  const { addPost } = props

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    addPost(inputs)
    setInputs(initInputs)
  }

  const { title, description } = inputs
  return (
    <form className="post-form-container" onSubmit={handleSubmit}>
    <h3>New Post</h3>
    <input 
        type='text'
        name='title'
        value={title}
        onChange= {handleChange}
        placeholder="Title"

    />

    <textarea 
        type='text'
        name="description"
        value={description}
        onChange= {handleChange}
        rows = '20'
        placeholder="description"
    />

    <button>Post</button>
</form>
  )
}