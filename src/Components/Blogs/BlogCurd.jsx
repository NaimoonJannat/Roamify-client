import { useNavigate } from "react-router-dom"


const BlogCurd = ({blog}) => {
    const navigate = useNavigate();
    const {id, image, name, date, description} = blog || {}
    
const handleClick = (id) =>{
    navigate(`/blog-details/${id}`)
}
    return (
        <div>
            <div onClick={()=>handleClick(id)} className="max-w-sm mx-auto group  dark:bg-gray-50">
                <img className="object-cover w-full rounded h-44 dark:bg-gray-500" src={image} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold ">{name}</h3>
                    <span className="text-xs dark:text-gray-600">{date}</span>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogCurd