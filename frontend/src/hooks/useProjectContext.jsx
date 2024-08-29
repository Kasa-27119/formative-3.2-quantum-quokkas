// Imports 
import { ProjectsContext } from '../context/ProjectContext'
import { useContext } from 'react'

/** CONTENTS IN USEPROJECTCONTEXT.JSX
 * imports (1-2)
 * useProjectsContext functionality (12-19)
 * 
 */

// useProjectsContext
export const useProjectsContext = () => {
    const context = useContext(ProjectsContext)

    if(!context) {
        throw Error('useProjectsContext hook must be used inside ProjectsContextProvider')
    }

    return context
}