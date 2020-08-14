import React, { useState } from 'react'
import { connect } from 'react-redux';
import { postNewSmurf } from '../components/actions/smurfActions'

const initialFormValues = {
        name: '',
        age: '',
        height: ''
}

 const Form = (props) => {
     const [form, setForm] = useState(initialFormValues)
    
     const handleChange = (e) => {
         setForm({
             ...form,
             [e.target.name]: e.target.value
         })

     }

     const handleSubmit = (e) => {
         e.preventDefault()
        //  const newSmurf = {
        //      name: form.name,
        //      age: form.age,
        //      height: form.height
        //  }
         props.postNewSmurf(form)
         setForm(initialFormValues)
     }
     
    return (
        <form onSubmit={handleSubmit}>
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
                    name='age'
                    type='number'
                    />
            </label>

            <label>Height&nbsp;
                <input 
                    value={form.height}
                    onChange={handleChange}
                    name='height'
                    type='text'
                    />
            </label>
            <button>Add Smurf</button>
        </form>
    )
}

export default connect(null, {postNewSmurf})(Form)

