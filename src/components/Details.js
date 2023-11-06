import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import blogs from "../data/blogs.js"
import "./Details.css"

export default function Details(){
    const[title,setTitle] = useState("")
    const[image,setImage] = useState("")
    const[content,setContent] = useState("")
    const[author,setAuthor] =useState("")
    const {id} = useParams()
    useEffect(()=>{
        const result = blogs.find((item)=>item.id === parseInt(id))
        setTitle(result.title)
        setImage(result.image_url)
        setContent(result.content)
        setAuthor(result.author)
        // eslint-disable-next-line
    },[])
    return( 
        <div className="container">
            <h2 className="title">
                Blog : {title}
            </h2>
            <img src={image} alt={title} className="blog-img"/>
            <div className="blog-detail">
                <strong>Anthor : {author}</strong>
                <p>{content}</p>
            </div>
        </div>
    )
}