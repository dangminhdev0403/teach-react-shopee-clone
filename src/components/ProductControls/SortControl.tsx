interface SortItem {
  id: string;
  value: string;
}

interface SortControlProps {
  sorts: SortItem[];
  selectedSort: string;
  onSelectSort: (id: string) => void;
}

const SortControl = ({
  sorts,
  selectedSort,
  onSelectSort,
}: SortControlProps) => (
  <div className="flex items-center">
    <span>Sắp xếp theo</span>
    {sorts.map((item) => (
      <button
        key={item.id}
        className={`ml-3 border px-3.5 py-2 ${
          selectedSort === item.id ? "bg-orange-300" : "bg-white"
        }`}
        onClick={() => onSelectSort(item.id)}
      >
        {item.value}
      </button>
    ))}
  </div>
);

export default SortControl;
