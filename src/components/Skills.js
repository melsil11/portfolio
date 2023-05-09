import React from 'react'
// import {SiJavascript} from 'react-icons/di'
import {SiHtml5, SiJavascript, SiCss3, SiReact, SiMongodb, SiExpress, SiPython, SiDjango, SiBootstrap, SiGithub, SiPostgresql, SiNodedotjs} from 'react-icons/si'

const skills = () => {

    return (
        <div className='container-fluid' id='skills'>
            <SiJavascript size='50px' color='grey'/><span className='span'></span>
            <SiReact size='50px' color='grey'/> <span className='span'></span>
            <SiHtml5 size='50px' color='grey'/> <span className='span'></span>
            <SiMongodb size='50px' color='grey'/> <span className='span'></span>
            <SiCss3 size='50px' color='grey'/> <span className='span'></span>
            <SiExpress size='50px' color='grey'/> <span className='span'></span>
            <SiPython size='50px' color='grey'/> <span className='span'></span>
            <SiPostgresql size='50px' color='grey'/> <span className='span'></span>
            <SiBootstrap size='50px' color='grey'/> <span className='span'></span>
            <SiNodedotjs size='50px' color='grey'/> <span className='span'></span>
            <SiGithub size='50px' color='grey'/> <span className='span'></span>
            <SiDjango size='50px' color='grey'/> <span className='span'></span>
        </div>
    )

}

export default skills