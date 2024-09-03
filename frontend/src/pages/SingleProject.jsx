import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeftShort } from 'react-bootstrap-icons'
import { formatDistanceToNow } from 'date-fns'

const baseURL = import.meta.env.VITE_API_BASE_URL

const SingleProject = () => {
    const navigate = useNavigate();

    // state for a single project
    const [project, setProject] = useState(null);

    // loading state
    const [loading, setLoading] = useState(true);

    // get id from url
    const { id } = useParams();

    // useEffect
    useEffect(() => {
        axios.get(`${baseURL}/api/projects/${id}`)
            .then((res) => {
                console.log(res.data);
                setProject(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [id]);

    // Return loading spinner or content
    if (loading) {
        return <div>Loading...</div>;
    }

    // Return content once project is loaded
    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <>
            {/* single page */}
            <div id='single-project-container'>
                {/* top container */}
                <div id='single-top-container'>
                    <ArrowLeftShort className='back-arrow' onClick={() => { navigate(-1) }} />
                    <h1>{project.name}</h1>
                </div>

                {/* content container */}
                <div className='single-content-container'>
                    {/* project image */}
                    <div className='img-container'>
                        <img className='single-project-image' src={`${baseURL}/public/uploads/${project.image}`} alt={project.name} />
                    </div>

                    {/* project text */}
                    <div className='single-text-container'>
                        <h2>By {project.author}</h2>
                        <a href={project.url} target='_blank'>{project.url}</a>
                        <h3>Created At: {formatDistanceToNow(new Date(project.createdAt), { includeSeconds: true, addSuffix: true })}</h3>

                        <div className='description-container'>
                            <p className='body-text'>
                                {project.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProject;

