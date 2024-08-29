import { useEffect, useState } from 'react'
import axios from 'axios'

// component imports
import ProjectDetails from '../components/ProjectDetails';

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
                            <ProjectDetails key={project._id} project={project}/>
                        )
                    }
                })) : (workouts && workout.map((workout) => {
                    return (
                        <ProjectDetails key={project._id} project={project}/>
                    )
                }))}
            </div>
      
        </div>
    )
}

export default Home
