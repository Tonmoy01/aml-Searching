const Cards = () => {
  const cardData = [
    {
      id: '01',
      title: 'Input Data',
      description: 'Begin by entering the required customer information into our secure AML search platform. Our system is designed to handle various data inputs seamlessly, ensuring a smooth user experience.'
    },
    {
      id: '02',
      title: 'Automated Screening',
      description: 'Our platform conducts thorough searches across global databases and watchlists, including sanctions lists, PEP lists, and adverse media, ensuring comprehensive coverage.'
    },
    {
      id: '03',
      title: 'Risk Assessment',
      description: 'Once the search is complete, our system generates a detailed risk assessment report. This report highlights potential risks and flags any matches, helping you make informed compliance decisions.'
    },
  ];

  return (
    <div className="flex gap-4">
      {cardData.map(item => (
        <div key={item.id} className="w-full p-8 bg-white shadow-md rounded-3xl md:w-1/3">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-8">
              <span className="text-lg font-bold text-black underline font-sarala text-[46px]">{item.id}</span>
              <span className="text-sm font-bold text-black font-sarala text-[24px]">{item.title}:</span>
              <p className="text-[#333] text-lg font-jakarta">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
