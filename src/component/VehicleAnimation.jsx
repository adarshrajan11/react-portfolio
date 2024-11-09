import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger, MotionPathPlugin } from 'gsap/all'
import vehicleImg from '../assets/plane.png' // Import a vehicle image

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

const VehicleAnimation = () => {
  const vehicleRef = useRef(null)

  useEffect(() => {
    // Advanced animation using a curved path, rotation, and scaling
    gsap.to(vehicleRef.current, {
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: window.innerWidth / 2, y: -100 }, // Curve to the middle of the screen
          { x: window.innerWidth, y: 0 },
        ],
        curviness: 1.5,
        autoRotate: true,
      },
      scale: 1.2,
      duration: 2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: vehicleRef.current,
        start: "top center", // Start animation as it enters the center of the viewport
        end: "bottom top", // End when leaving the viewport
        scrub: true,
      },
    })
  }, [])

  return (
    <div className="scroll-container">
      <div className="content">
        {/* Background parallax elements */}
        <div className="background-layer-1" />
        <div className="background-layer-2" />
        {/* Main Content */}
        <div className="main-content"> {/* Add your main content here */} </div>
      </div>
      <img
        ref={vehicleRef}
        src={vehicleImg}
        alt="vehicle"
        style={{
          position: "fixed",
          bottom: "10px",
          left: "0",
          width: "100px",
          height: "auto",
          zIndex: "1000"
        }}
      />
    </div>
  )
}

export default VehicleAnimation
