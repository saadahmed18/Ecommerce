import IphoneImage from "../src/assets/images/iphone-image.webp";
export default function Hero() {
  return (
    <>
      <section className="bg-[#211C24] pt-16">
        <div className="container m-auto px-4 flex justify-center items-center flex-wrap md:justify-between md:flex-nowrap">
          <div>
            <span className="text-2xl text-[#909090] font-bold">Pro.Beyond.</span>
            <h1 className="text-6xl text-white">
              IPhone 14 <span>Pro</span>
            </h1>
            <p className="text-2xl text-[#909090] font-bold my-5">Created to change everything for the better. For everyone</p>
            <button className="w-[150px] text-white p-3 border-[1px] border-[#909090] border-solid rounded-md">Shop Now</button>
          </div>
          <div>
            <img src={IphoneImage} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
