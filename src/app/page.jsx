// Import any page From Component
"use client"
import Header from "./components/header/header"

import Cars from "./components/cars/cars"
import Rent from "./components/rent/rent"
import Blogs from "./components/blog/blogs"
import Aboutandcontactus from "./components/aboutandcontactus/aboutandcontactus"





export default function Home() {
  return (
   <>
        <Header></Header>
        <Cars></Cars>
        <Blogs></Blogs>
        <Rent></Rent>
        <Aboutandcontactus></Aboutandcontactus>
      
   </>
  )
}

