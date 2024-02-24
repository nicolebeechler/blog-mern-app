import {useState, useEffect} from 'react'
import CreateForm from '../../components/CreateForm/CreateForm'
import Blogs from '../../components/Blogs/Blogs'

export default function HomePage (props){
    const [blogs, setBlogs] = useState([])
    const [showCreate, setShowCreate] = useState(false)
    // blogs
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
               const data = await props.getAllBlogs()
               setBlogs(data) 
            } catch (error) {
                console.error(error)
            }
        }
        fetchBlogs()
    }, [])
    // checking the token & user in localStorage
    useEffect(() => {
        if(localStorage.token && !props.token){
            props.setToken(localStorage.getItem('token'))
            setShowCreate(true)
        }
        if(localStorage.token && localStorage.user && !props.user){
            props.setUser(JSON.parse(localStorage.getItem('user')))
        }
    }, [])

    return(
        <div>
            <h1>Welcome to the Liberty Blog</h1>
            { showCreate? <CreateForm/> : <></> }
            { blogs.length? <Blogs blogs={blogs}/> : 'Waiting for blog writers...' }
        </div>
    )
}