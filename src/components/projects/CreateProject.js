import { useState } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'

const mapDispatchToProps = (dispatch) => {
   return {
    createProject : (project) => dispatch(createProject(project))
   }
}

function Createproject(props) {
    const [values, setValues] = useState({
        title: '',
        content: ''
    })
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.id]: e.target.value
        })
    }
    const { title, content } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
       props.createProject(values)
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className="white">
                <h5 className='grey-text text-darken-3'>Create Project</h5>
                <div className='input-field'>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={handleChange} value={title} />
                </div>
                <div className='input-field'>
                    <label htmlFor="content">Project Content</label>
                    <textarea id="content" className='materialize-textarea' onChange={handleChange} value={content}></textarea>
                </div>
                <div className='input-field'>
                    <button className='btn pink lighten-1 z-depth-0' type='submit'> Create</button>
                </div>
            </form>
        </div>
    )
}

export default connect (null, mapDispatchToProps) (Createproject)