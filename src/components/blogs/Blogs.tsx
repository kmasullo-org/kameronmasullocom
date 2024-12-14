import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import './blogs.css';

const Blogs = () => {

    const [blogs, setBlogs] = useState<any[]>([]);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = () => {
        const url = encodeURIComponent('https://medium.com/feed/kameron-masullo-music');
        fetch(`https://api.rss2json.com/v1/api.json?rss_url=${url}`)
            .then(res => res.json())
            .then(res => setBlogs(res.items))
    }

    const extractImageFromContent = (content: string): string => {
        const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
        return imgMatch ? imgMatch[1] : '';
    };

    return (
        <div className={'blogs component-parent'}>
            <h2>Blogs</h2>
            <div className={'flex-row flex-justify-center'}>
            { blogs?.map((blog: any) => (
                <Link key={`blog-${blog.title}`} className={'no-dec-link'} to={blog.link} target="_blank" rel="noopener noreferrer">
                    <div className={'blog-card'}>
                        <img src={extractImageFromContent(blog.content)} alt={'blog-image'} className={'blog-image'}/>
                        <h4>{blog.title}</h4>
                    </div>
                </Link>
            ))}
            </div>
        </div>
    );
}

export default Blogs;