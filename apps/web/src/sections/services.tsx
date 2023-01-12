import Card from "./shared/Card";

export const Services = ({ section }) => {

    const {
        label = "",
        title = "",
        cardArray = []
      } = section;

  return (
    <section className="spacing flex flex-col">
        <span className="text-body font-bold">{label}</span>
        <h2 className="text-headingThree mb-[100px]">
            {title}
        </h2>
        <div className="w-full flex flex-row justify-between">
        {cardArray.map((card, i)=> {
            return <Card card={card} bgIndex={i} key={i}/> 
        })}
        </div>
    </section>
  );
};

export default Services;
