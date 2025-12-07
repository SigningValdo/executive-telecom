interface ChannelTagProps {
  name: string;
}

export default function ChannelTag({ name }: ChannelTagProps) {
  return (
    <span className="px-5 py-2 bg-[#68696D] text-white rounded-full text-xs md:text-lg lg:text-2xl font-bold">
      {name}
    </span>
  );
}
