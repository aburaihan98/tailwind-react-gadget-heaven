import BannerImage from "../../assets/banner.jpg";

export default function Banner() {
  return (
    <div className="w-[1062px] h-[563px] m-auto p-6 border rounded-3xl relative -top-56">
      <img
        className="w-full h-full rounded-3xl "
        src={BannerImage}
        alt="Banner Image"
      />
    </div>
  );
}
