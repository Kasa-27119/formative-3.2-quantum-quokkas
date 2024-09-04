import { useEffect, useState } from 'react'
import axios from 'axios'
import { useProjectsContext } from '../hooks/useProjectContext'
import { Binoculars } from 'react-bootstrap-icons'
import{ EmojiSmile } from 'react-bootstrap-icons'

// component imports
import ProjectDetails from '../components/ProjectDetails';
import ProjectForm from '../components/ProjectForm';

/** CONTENTS OF HOME.JSX
 * Imports of pages and links (1-2)
 * Home Functionality (11 - *)
 * Filter between My projects and All Projects component () 27 - 33 )
 */

// Start of Home Functionaility
const Home = () => {
    const { projects, dispatch } = useProjectsContext()
    const [ myProjects, setMyProjects ] = useState(null)

    
    useEffect(() => {
        const fetchProjects = async () => {
            const response = await axios.get(`http://localhost:4000/api/projects/`);
            if (response.status === 200) {
                dispatch({type: 'SET_PROJECTS', payload: response.data})
            }

        }

        fetchProjects();
    }, [])

    // Filter My projects
    const handleMyProjects = () => {
        setMyProjects(true)
    }

    // Filter All Projects
    const handleAllProjects = () => {
        setMyProjects(null)
    }

    // Component to Display and Filter Projects
    return (
        <div className='home'> 
            <div className='home-about'>
                <h1><span className='h1-2402'>2402</span> Web and UX Portfolio App</h1>
                <div className='home-about-img-container'>
                    <div className='home-about-img'></div>
                </div>
                
                <div className='home-about-description'>
                    <p>
                        <span className='home-about-description-highlight'>About us as 2402 Web and UX class and our work! </span>
                        We are full of talented desginers and coders and created a platform for people to share and appreciate each others work. We can be so hard on ourselves and even if we don't think what we have done is any good sharing it allows for improvement, inspiration and conquering that imposter syndrome. We know everyone knows what that is. THERE IS NO SUCH THING AS PERFECT <EmojiSmile className='about-icons'/>
                    </p>
                    <p>
                        This Portfolio Website was coded and designed by Abbie, Kristen and Mere. In this website you can sign up, log in, post portfolio projects, view other posts from other users and also edit and delete your own posts.  
                        <span className='home-about-description-highlight'> P.S Take a closer look at the photo hehe <Binoculars className='about-icons'/></span>
                    </p>
                </div>
            </div>
            <ProjectForm></ProjectForm>
            <div className='projects'>
                <button onClick={handleMyProjects} className='filter-button'>
                    My Projects
                </button>
                <button onClick={handleAllProjects} className='filter-button'>
                    All Projects
                </button>
                {myProjects ? (projects && projects.map((project) => {
                    const user = JSON.parse(localStorage.getItem('user'))
                    const user_id = user.email
                    if (project.user_id === user_id) {
                        return (
                            <ProjectDetails key={project._id} project={project} />
                        )
                    }
                })) : (projects && projects.map((project) => {
                    return (
                        <ProjectDetails key={project._id} project={project} />
                    )
                }))}
            </div>
      
        </div>
    )
}

export default Home
