import {
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
  Gallery7,
  Gallery8,
} from "../ReUsable/Images";
import SectionHeader from "../ReUsable/SectionHeader";

const images = [
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
  Gallery7,
  Gallery8,
];

const Gallery = () => {
  return (
    <div className="px-4 md:px-8 lg:px-20 py-8">
      <SectionHeader title="Gallery" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {images.map((img, index) => (
          <div key={index} className="w-full">
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full  object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
