import Cards from "./Cards";

function HowItWorks() {
  return (
    <div className="m-5 rounded-3xl bg-secondaryColor">
      <div className="max-w-[1410px] mx-auto">
        <h1 className="font-medium text-center text-black text-[48px] pt-10 pb-4">How It Works</h1>
        <div className="pb-14">
          <Cards />
        </div>
      </div>
    </div>
  );
}
export default HowItWorks;