import { useEffect, useState } from 'react'
import axios from 'axios'
import { useProjectsContext } from '../hooks/useProjectContext'

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
                <h1>Main Header</h1>
                <div className='home-about-img'></div>
                <div className='home-about-description'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque beatae placeat numquam dolorem mollitia impedit, provident laudantium incidunt minus ad nisi magnam, labore facilis harum temporibus natus aliquam ducimus quae?
                    In non labore perferendis, inventore sapiente velit et dolores cupiditate minima dignissimos. Ullam unde officia quos laudantium veniam, quisquam, voluptatem eveniet, sunt consectetur ratione dolorum aliquid ducimus! Eaque, facilis optio?
                    Adipisci atque suscipit laboriosam, sit possimus, distinctio corrupti, minus alias nemo rerum id perferendis veniam. Consectetur, dolore fugiat. Excepturi, veniam. Suscipit dolores iste impedit ullam, hic quisquam animi obcaecati praesentium.
                    </p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque beatae placeat numquam dolorem mollitia impedit, provident laudantium incidunt minus ad nisi magnam, labore facilis harum temporibus natus aliquam ducimus quae?
                    In non labore perferendis, inventore sapiente velit et dolores cupiditate minima dignissimos. Ullam unde officia quos laudantium veniam, quisquam, voluptatem eveniet, sunt consectetur ratione dolorum aliquid ducimus! Eaque, facilis optio?
                    Adipisci atque suscipit laboriosam, sit possimus, distinctio corrupti, minus alias nemo rerum id perferendis veniam. Consectetur, dolore fugiat. Excepturi, veniam. Suscipit dolores iste impedit ullam, hic quisquam animi obcaecati praesentium.
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
                            <ProjectDetails key={project._id} project={project}/>
                        )
                    }
                })) : (projects && projects.map((project) => {
                    return (
                        <ProjectDetails key={project._id} project={project}/>
                    )
                }))}
            </div>
      
        </div>
    )
}

export default Home
