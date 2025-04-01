import Image from "next/image";
import defaultImg from "../../../public/Default profile.jpg";

type Props = {
  src?: string;
  alt: string;
  size?: number; // New prop to set dynamic size
  extraClass?: string;
  isLoading?: boolean;
};

export default function ProfilePic({
  src,
  alt,
  size = 100,
  extraClass = "",
  isLoading = false,
}: Props) {
  return (
    <div
      className={`relative flex justify-center items-center`}
      style={{ width: size, height: size }}
    >
      {/* 🖼 Profile Picture */}
      {!isLoading && (
        <Image
          className="rounded-full shadow-lg"
          src={src || defaultImg}
          alt={alt}
          width={size}
          height={size}
        />
      )}

      {/* 🔄 Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex justify-center items-center">
          {/* 🟡 Skeleton Loader */}
          <div className="w-full h-full rounded-full bg-gray-300 animate-pulse absolute"></div>

          {/* 🔵 Spinning Ring */}
          <div className="absolute w-full h-full rounded-full border-4 border-transparent border-t-blue-300 border-b-blue-500 animate-spin"></div>
        </div>
      )}
    </div>
  );
}
