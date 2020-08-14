import React, { useState } from 'react'
import { connect } from 'react-redux';
import { postNewSmurf } from '../components/actions/smurfActions'

 const Form = (props) => {
     const [form, setForm] = useState({
         name: '',
         age: '',
         height: ''
     })
     console.log(props)

     const handleChange = (e) => {
         setForm({
             ...form,
             [e.target.name]: e.target.value
         })

     }

     const handleSubmit = (e) => {
         e.preventDefault()
         props.postNewSmurf(form)
     }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div>
                <h2>Add a smurf</h2>
            </div>
            <label>Name&nbsp;
                <input 
                    value={form.name}
                    onChange={handleChange}
                    name='name'
                    type='text'
                    />
            </label>

            <label>Age&nbsp;
                <input 
                    value={form.age}
                    onChange={handleChange}
                    name='name'
                    type='number'
                    />
            </label>

            <label>Height&nbsp;
                <input 
                    value={form.height}
                    onChange={handleChange}
                    name='name'
                    type='text'
                    />
            </label>
            <button>Add Smurf</button>
        </form>
    )
}

export default connect(null, {postNewSmurf})(Form)

