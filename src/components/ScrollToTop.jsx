import { useEffect, useRef, useState } from "react";
import { IconButton } from "@chakra-ui/react";
import {ArrowUpIcon} from "@chakra-ui/icons";
import { gsap, ScrollTrigger } from "gsap/all";

function ScrollToTop(){
const [isVisible, setIsVisible] = useState(false)
const scrollButton = useRef()
useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
}, [])

useEffect(()=>{
    if(isVisible){
        gsap.to(scrollButton.current, {
            duration:0.5, opacity: 1, zindex: 100
        })
    }else{
        gsap.to(scrollButton.current, {
            duration:0.5, opacity: 0, zindex: -1
        })
    }
}, [isVisible])


const handleScroll = () => {
    if(window.scrollY>100) {setIsVisible(true)}else{setIsVisible(false)}
}

const handleClick = () => {
    window.scrollTo({ top:0, left: 0, behavior: 'smooth',});
    scrollButton.current.blur()
}

    return(<>
    <IconButton
    aria-label="scroll to top" 
    icon={<ArrowUpIcon/>}
    size="lg"
    colorScheme="purple"
    variant="ouline"
    border="5px solid"
    ref={scrollButton}
    onClick={handleClick}
    position="fixed"
    bottom="4rem"
    right="4rem"
    zindex="-1"
    opacity="0"></IconButton>
    </>)
}

export default ScrollToTop