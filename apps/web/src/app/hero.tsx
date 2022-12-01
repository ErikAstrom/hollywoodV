export default function Hero(data) {

    const { title = "", description = "", background = "", image = {}, video = ''  } = data.data;

return (
    <section className="h-[80vh]">
        <div className="h-full flex items-center justify-center flex-col">
           <h1 className="text-headingOne">{title}</h1>
          <p className="text-body">{description}</p>
        </div>
    </section>
)
}