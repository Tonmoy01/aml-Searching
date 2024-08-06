import SliderCards from "./SliderCards";

const Slider = () => {
  return (
    <div className="max-w-[1410px] mx-auto px-4 md:px-8 pb-20 md:pb-32">
      <h1 className="font-medium text-center md:text-left text-black text-2xl md:text-4xl lg:text-[48px] pt-10 pb-4">
        What Our Users Say
      </h1>
      <div className="pb-14">
        <SliderCards />
      </div>
    </div>
  );
};

export default Slider;
