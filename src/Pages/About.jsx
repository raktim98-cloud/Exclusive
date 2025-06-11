import SideImage from ".././assets/Image/About_Side_image.jpg"
import Counter from "../Components/Counter"
function About() {
  return (
    <section className="py-25 relative">
      <div className="w-[705px] h-[609px] absolute right-0 top-0 translate-y-[143px] pl-[75px]">
        <img className="h-full w-full object-cover" src={SideImage} alt="image" />
      </div>
      <div className="container">
        <div className="grid grid-cols-[525px_1fr] py-[200px]">
          <div>
            <h2 className="font-display text-[54px] leading-[64px] tracking-[6%] font-semibold">Our Story</h2>
          <p className="pt-10 pb-6 text-[16px] leading-[26px]">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
          <p className="text-[16px] leading-[26px]">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
          </div>
        </div>
        <Counter/>
      </div>
    </section>
  )
}

export default About