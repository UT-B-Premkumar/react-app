import React from 'react'

function Count({Count}) {
    console.log("Counter log" ,{Count});
    
  return (
    <div>
      {Count}
    </div>
  )
}

export default React.memo(Count)
