import {
  Avatar as AvatarCN,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

function Avatar({ radius = "full", src, alt = "", h = 8, w = 8 }) {
  return (
    <AvatarCN className={`h-${h} w-${w} rounded-${radius}`}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback className="rounded-lg">CN</AvatarFallback>
    </AvatarCN>
  );
}

export default Avatar;
