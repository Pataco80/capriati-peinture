import { useState, useEffect } from 'react'

const useScrollVertical = ({ scrolledValue }) => {
  //Set up a state variable and
  // store the initial value of window.scrollY
  const [scrolled] = useState(false)

  //Set up a handler to update our state variable
  //on scroll events
  const onScrollHandler = () => {
    const isScrolled = window.scrollY > scrolledValue
    if (isScrolled !== scrolled) {
      setScrolled(!scrolled)
    }
  }

  //call useEffect to listen to component mount & unmount
  useEffect(() => {
    //Add a javascript event listener to the window
    //to listen to scroll events
    document.addEventListener('scroll', onScrollHandler, { passive: true })
    return () => {
      document.removeEventListener('scroll', onScrollHandler)
    }
  }, [scrolled, onScrollHandler])

  //Finally return the value of interest
  return scrolled
}

export default useScrollVertical
