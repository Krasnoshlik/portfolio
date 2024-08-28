import React from 'react';
import { projects } from '../../../../data/projects';
import ProjectCard from '../ui/project-card';

export default function ProjectsSection() {
  return (
    <section className=' mt-[74px]'>
        <div className=' flex items-center gap-5'>
          <h3 className=' font-medium text-[32px] text-white'> <span className=' text-normal-purple'>#</span>projects</h3>
          <span className=' block w-full h-[1.5px] bg-normal-purple'></span>
        </div>

        <div className=' flex gap-5 my-5 mt-20'>
          {
            projects.map((e, i) => {
              return (
                <ProjectCard key={i} project={e}/>
              )
            })
          }
        </div>
    </section>
  )
}
