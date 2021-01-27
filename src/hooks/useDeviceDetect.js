import React, {useState,useEffect} from 'react'

const useDeviceDetect = () => {
  const [isMobile, setMobile] = useState(false)
  
  useEffect(() => {
    console.log(`user's device is : ${window.navigator.userAgent}`)
    const userAgent = typeof navigator === "undefined"? "": navigator.userAgent;
    console.log(`user's device is : ${userAgent}`)
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    )
    setMobile(mobile)
  }, [])
  return {isMobile}
}

export default useDeviceDetect
