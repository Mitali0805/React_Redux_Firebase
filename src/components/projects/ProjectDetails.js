import React from 'react'
import { useParams } from 'react-router-dom';

function ProjectDetails() {
    const {id} = useParams();
    return (
        <div className='container project-details'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'>Project Title - {id}</span>
                    <p>Sunt cillum pariatur sit sit officia et fugiat non ullamco.</p>
                </div>
                <div className='card-action grey lighten-4 grey-text'>
                    <div>Posted by The Mitali</div>
                    <div>8th October, 6.47pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails