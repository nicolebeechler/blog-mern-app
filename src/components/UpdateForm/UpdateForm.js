export default function UpdateForm(props) {

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await props.updateBlog(formData, props.id, props.token)
            props.setBlog(data)
            props.setShowUpdate(false)
        } catch (error) {
            console.error(error)
        }
    }

    const handleChange = (e) => {
        props.setBlog({...props.blog, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Update Blog Below</h2>
            <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange}/>
            <input type="text" name="body" placeholder="Body" value={formData.body} onChange={handleChange}/>
            <input type="submit" value="Update Blog"/>
        </form>
    )
}