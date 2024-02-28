import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CreateForm(props) {
    
    const [ formData, setFormData ] = useState({
        title: '',
        body: ''
    })
    const navigateTo = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await props.createBlog(formData, props.token)
            // tba after show page is done
            navigateTo(`/blog/${data._id}`)
        } catch (error) {
            console.error(error)
        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create a New Blog Post, {props.user.name}</h2>
            <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange}/>
            <input type="text" name="body" placeholder="Body" value={formData.body} onChange={handleChange}/>
            <input type="submit" value="Create Blog"/>
        </form>
    )
}