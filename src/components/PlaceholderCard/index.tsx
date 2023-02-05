import placeHolderImg from "../../assets/placeholder.jpg";

export default function PlaceHolderCardMovie() {
  return (
    <div className="animate-pulse h-80">
      <figure className="w-40 rounded-xl overflow-hidden ">
        <img src={placeHolderImg} className="w-full h-56 object-cover" />
      </figure>
      <div className="flex flex-col gap-2 mt-3 h-16 justify-center">
        <div className="h-2 bg-slate-200 rounded w-4/6"></div>
        <div className="h-2 bg-slate-200 rounded w-4/6"></div>
        <div className="h-2 bg-slate-200 rounded w-2/5"></div>
      </div>
    </div>
  );
}
