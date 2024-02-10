
export default async function Page({ params }: { params: { slug: string} }) {



// get data for each page by using the slug as a parameter for a server action
//the slug is the object id of the project.

//this component will be a server component and the input forms to create features and tsks will be client




    
    return(<div>{params.slug}</div>) 
  }
  