import SliderCards from "./SliderCards";

const Slider = () => {
  return (
    <div className="max-w-[1410px] mx-auto pb-32">
      <h1 className="font-medium text-start text-black text-[48px] pt-10 pb-4">What Our User’s Says</h1>
      <div className="pb-14">
        <SliderCards />
      </div>
    </div>
  );
};
export default Slider;