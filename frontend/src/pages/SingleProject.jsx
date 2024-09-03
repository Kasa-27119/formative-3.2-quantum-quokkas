import React from 'react'
import { ArrowLeftShort } from 'react-bootstrap-icons'

const SingleProject = () => {
  return (
    <>
        {/* single page */}
        <div id='single-project-container'>

            {/* top container */}
            <div id='single-top-container'>
                <ArrowLeftShort className='back-arrow'/>
                <h1>Project Name</h1>
            </div>

            {/* content container */}
            <div className='single-content-container'>
                {/* project image */}
                <div className='img-container'></div>

                {/* project text */}
                <div className='single-text-container'>
                    <h2>Project Author</h2>
                    <h3>Created At:</h3>

                    <div className='description-container'>
                        <p className='body-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat turpis pulvinar tristique fermentum. Vestibulum vestibulum, nisl quis imperdiet interdum, augue purus tristique erat, eu tristique nunc risus sed dui. Maecenas sollicitudin efficitur lorem, eget pretium leo lobortis id. Pellentesque nulla nibh, aliquam vitae consectetur non, mattis et massa. Morbi vitae elit gravida, ultrices dolor et, rhoncus turpis.</p>
                        <p className='body-text'>Quisque porta hendrerit massa, nec gravida mauris vulputate eget. Sed vel enim sit amet erat facilisis sagittis. Sed at aliquam quam. Etiam in sem a orci commodo dignissim. Nullam interdum, lacus eu pulvinar finibus, elit odio placerat eros, in facilisis mauris odio vel nunc. Nulla eget faucibus ex. Nunc feugiat sit amet libero quis mollis.</p>
                    </div>
                </div>
            </div>
        </div>

        
    </>
  )
}

export default SingleProject
