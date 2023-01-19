import Card from "./shared/Card";

export const Services = ({ section }) => {

    const {
        label = "",
        title = "",
        cardArray = []
      } = section;

  return (
    <section className="md:spacing">
        <div className="px-[32px] py-[80px] md:py-0 md:px-0 flex flex-col">
        <span className="text-center md:text-left text-body font-bold">{label}</span>
        <h2 className="text-center md:text-left text-headingThree">
            {title}
        </h2>
        </div>
        <div className="w-full flex flex-col md:grid md:grid-cols-3 md:gap-[41px]">
        {cardArray.map((card, i)=> {
            return <Card card={card} bgIndex={i} key={i}/> 
        })}
        </div>
    </section>
  );
};

export default Services;
