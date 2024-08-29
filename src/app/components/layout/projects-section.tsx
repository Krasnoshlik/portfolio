import React from 'react';
import { projects } from '../../../../data/projects';
import ProjectCard from '../ui/project-card';
import SectionNameAndLine from '../ui/section-name-and-line';

export default function ProjectsSection() {
  return (
    <section className=' mt-[74px]' >
        <SectionNameAndLine text={'projects'}/>

        <div className=' flex flex-wrap justify-center gap-5 my-5 mt-20'>
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
