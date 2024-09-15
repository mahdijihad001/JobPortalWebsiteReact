import Category from "../Category/Category"
import Hero from "../Hero/Hero"
import Featured from "../JobFeatured/Featured"

export default function Home() {
  return (
    <div className="">
        <div>
          <Hero/>
          <Category/>
          <Featured/>
        </div>
    </div>
  )
}
