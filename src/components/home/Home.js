import React , {useEffect}from 'react'

function Home() {
    useEffect(()=>
    {
        console.log("hello")
    },[])
  
    return (
        <div>
            <p>home</p>
        </div>
    )
}

export default Home
