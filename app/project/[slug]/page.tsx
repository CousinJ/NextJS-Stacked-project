import { GetProjectPageData } from "@/app/actions"
import FeatureUI from "@/app/components/FeatureUI"
import ProjectInfoPanel from "@/app/components/ProjectInfoPanel"
export default async function Page({ params }: { params: { slug: string} }) {
// get data for each page by using the slug as a parameter for a server action
//the slug is the object id of the project.
const currentProjectData = await GetProjectPageData(params.slug)
//this component will be a server component and the input forms to create features and tsks will be client



const placeholderCode = "import React from 'react'; "
    
    return(
    
    <div className="w-full flex flex-col items center p-8 ">
        {/* project information panel */}
        <ProjectInfoPanel data={currentProjectData}/>
        {/* project body */}
        <div className="w-full h-auto flex flex-wrap">
        <FeatureUI></FeatureUI>
        <FeatureUI></FeatureUI>
        </div>
        {/* footer */}
        
{currentProjectData.project_info.name}
{currentProjectData.project_info.description}
<div></div>

    </div>
    ) 
  }
  