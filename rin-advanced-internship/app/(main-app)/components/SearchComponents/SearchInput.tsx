
interface SearchInputProps{
    value: string;
    onChange: (value: string) => void;
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <input
      type="text"
      placeholder="Search for books"
      className="search__input h-10 min-w-[340px] w-full px-4 outline-none
                             border-[#e1e7ea] border-2 rounded-lg text-[#042330]
                             text-sm "
                             value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
