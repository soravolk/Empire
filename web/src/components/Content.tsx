interface ContentProps {
  subcategory: number | null;
  contents: {
    id: number;
    cycle_id: number;
    subcategory_id: number;
    content_id: number;
    name: string;
  }[];
}

const Content: React.FC<ContentProps> = ({ subcategory, contents }) => {
  const displayItems = contents.filter(
    (item) => item.subcategory_id === subcategory
  );
  return (
    <div>
      <div className="flex flex-col items-center space-y-4 shadow mx-5 p-4">
        <h3 className="font-bold mb-2">Cycle 1</h3>
        <ul className="list-inside list-disc space-y-3">
          {displayItems.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
        <button className="items-center justify-center bg-blue-500 text-white rounded-full h-12 w-12">
          +
        </button>
      </div>
    </div>
  );
};

export default Content;
