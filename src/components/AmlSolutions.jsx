import amlSolutions from "../assets/aml-object.png";

const AmlSolutions = () => {
  return (
    <div className="max-w-[1390px] mx-auto font-jakarta">
      <div className="flex items-center justify-center py-44">
        {/* Left */}
        <div className="w-full">
          <img src={amlSolutions} alt="" />
        </div>

        {/* Right */}
        <div className="w-full space-y-9">
          <h3 className="text-black text-[48px] font-medium">Our AML Solutions</h3>
          <p>In today's complex regulatory landscape, staying compliant with Anti-Money Laundering (AML) requirements is essential. At [Your Company Name], we provide advanced AML search solutions to help you identify and mitigate risks efficiently. Our cutting-edge screening tools deliver accurate, timely results, protecting your business from financial crime. With customizable search parameters and real-time monitoring, our platform offers the insights you need to maintain compliance & safeguard your reputation. Trust us for reliable AML solutions that keep you ahead.</p>
        </div>
      </div>
    </div>
  );
};
export default AmlSolutions;