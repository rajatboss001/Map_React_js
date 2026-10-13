import CARD_DATA from "../../Utils/helper";
import Icons from "../common/icons";

const Homesection = () => {
  return (
    <section className="bg-black min-h-screen flex justify-center items-center px-5">
      <div className="container-hero max-w-319.75 w-full mx-auto py-10">
        <div className="row-hero grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {CARD_DATA.map((item, index) => (
            <div
              key={index}
              className="card group relative overflow-hidden max-w-76 w-full mx-auto py-7 px-5 flex flex-col items-center gap-4 border border-white/30 rounded-2xl bg-white/2 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] cursor-pointer"
            >
              <div className="absolute -top-10 -right-10 size-32 rounded-full bg-purple-600/40 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

              <div className="absolute -bottom-10 -left-10 size-32 rounded-full bg-purple-700/30 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

              <div className="relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                <Icons icon={item.image} />
              </div>
              <h1 className="relative z-10 text-white text-center font-normal text-2xl transition-colors duration-300 group-hover:text-purple-300">
                {item.Heading}
              </h1>
              <div className="relative z-10 h-1 w-8 rounded-full bg-purple-500 opacity-0 transition-all duration-500 group-hover:w-16 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Homesection;