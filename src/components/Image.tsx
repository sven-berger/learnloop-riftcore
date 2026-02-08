interface ImageProps {
  file?: string;
  onClick?: () => void;
}

export default function Image({ file, onClick }: ImageProps) {
  return (
    <div className="lg:mb-5 lg:w-96 lg:h-96 md:w-48 h:48 bg-gray-100 lg:flex lg:items-center lg:justify-center rounded-xl">
      <img
        src={file}
        alt=""
        onClick={onClick}
        className="
     w-full h-full object-cover object-top
     rounded-xl
    transition-transform duration-300
    hover:scale-105 my-10
  "
      />
    </div>
  );
}
