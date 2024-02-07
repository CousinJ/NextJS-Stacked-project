export default function Page({ params }: { params: { slug: string} }) {
//now you can query for the data of the current user and the slug is the index of the productData array.
//iterate to get the correct data for the page.

//you will need to create a new dynamic route for teh projects listed on the search bars. it will be similar to this
// the difference will be the id. the id will be the obejct id unique string. it will also not open if it is private.
//and edit functions will be gone.
const placeholderCode = "import React from 'react'; "
    
    return(
    
    <div className="w-full flex flex-col items center p-8 ">


<div className="mockup-code w-full h-auto ">
  <div className="w-full flex h-32">
      <h2></h2>
  </div>
 
  <div className="w-full flex h-64 ">
      {}
  </div>
</div>

<div>My Post: {params.slug}</div>

<div className="mockup-code w-full h-auto">
  <pre data-prefix="$"><code>{placeholderCode}</code></pre>
</div>


    </div>
    ) 
  }
  