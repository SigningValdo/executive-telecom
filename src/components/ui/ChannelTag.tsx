interface ChannelTagProps {
  name: string;
}

export default function ChannelTag({ name }: ChannelTagProps) {
  return (
    <span className="px-5 py-2 bg-[#68696D] hover:bg-white border border-[#68696D] hover:border-primary text-white hover:text-primary rounded-[15px] cursor-pointer text-xs md:text-lg lg:text-2xl font-bold">
      {name}
    </span>
  );
}
