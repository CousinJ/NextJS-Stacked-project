import { GetProjectPageData } from "@/app/actions"
import FeatureUI from "@/app/components/FeatureUI"
import ProjectInfoPanel from "@/app/components/ProjectInfoPanel"
export default async function Page({ params }: { params: { slug: string} }) {

interface FeatureItem {
    name: string,
    description: string,
    tasks: object[]
}

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
        {/* mapp here to iterate through projectcontent.features */}
        {currentProjectData.project_content.features.map((item: FeatureItem, index: number) => (<FeatureUI projectId={params.slug} key={index} feature_index={index} data={item}  />))}
        </div>

        {/* footer */}
<div></div>



    </div>
    ) 
  }
  