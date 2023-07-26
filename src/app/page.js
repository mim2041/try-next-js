import image1 from "@/assets/nature1.jpg";
// import image2 from "@/assets/nature2.avif";
import Image from 'next/image'

const HomePage =() => {
  return (
    <main>
      <h1>This is home</h1>
      <Image 
      width={600} 
      height={381.5} 
      src={image1} 
      placeholder="blur" alt=""/>
      {/* <Image width={"600px"} src="/nature1.jpg" blurDataURL="" alt=""/> */}
      {/* <Image width={600} height={400} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlYK9Wv7779j7HoCkD1GrGli-mmm4bgJobz3FlN7wH&s"
      placeholder="blur" blurDataUrl="" alt=""/> */}
    </main>
  )
}

export default  HomePage;