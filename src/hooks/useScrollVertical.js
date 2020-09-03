import {useState, useEffect} from 'react';  

const useScrollVertical = () => {  
  //Set up a state variable and  
  // store the initial value of window.scrollY  
  const [scrollY, setScrollY] = useState(window.scrollY);  

  //Set up a handler to update our state variable  
  //on scroll events  
  const onScrollHandler = () => {  
    setScrollY(window.scrollY);  
  }  

  //call useEffect to listen to component mount & unmount  
  useEffect(() => {  
    //Add a javascript event listener to the window  
    //to listen to scroll events  
    window.addEventListener('scroll', onScrollHandler);  

    //Return a function to run on unmount  
    return () => {  
      //Don't forget to remove any event listeners on unmount!  
      window.removeEventListener('scroll', onScrollHandler);  
    }  
  }, [scrollY]);  

  //Finally return the value of interest  
  return scrollY;  
}  

export default useScrollVertical;  