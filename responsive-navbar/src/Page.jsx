import React from 'react'
import Background from '../Components/Background'
import Foreground from '../Components/Foreground'
const Page = () => {
  return (
    <div className='main relative w-full h-full '>
      <Background/>
      <Foreground/>
    </div>
  )
}

export default Page

// 1. the sibling components/ elements belong to the same stacking context ( i.e we can compare the z index values), the component belonging to different parent component have the different stacing context.

// 2. The sibling components(having same stacking context) whome z index is not defined are stacked according to the order of code in which they are WritableStreamDefaultController. The one which is written below in the code will stack above the other one.

// 3. the component with -ve z index comes behind the parent component, if we want to make parent component below and -ve z-index component above, then make parent relative positioned with z-index 0.

// 4. The fixed positioned components are POSITIONED relative to the viewport.