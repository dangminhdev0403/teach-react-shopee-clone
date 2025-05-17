import CheckBoxFilter from "@components/Filter/CheckBoxFilter";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FilterSidebarProps {
  filters: {
    id: string;
    filter: {
      name: string;
      value: { id: string; value: string }[];
    };
  }[];

  onClear: () => void;
  title: string;
}

const FilterSidebar = ({ filters, onClear, title }: FilterSidebarProps) => (
  <div>
    <div className="mb-6 flex items-center gap-2">
      <FontAwesomeIcon icon={faFilter} style={{ color: "#4c4444" }} />
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    {filters.map((item) => (
      <CheckBoxFilter key={item.id} filterData={item.filter} />
    ))}
    <button
      className="mt-2 w-full cursor-pointer rounded bg-[#ee4d2d] py-1 text-white"
      onClick={onClear}
    >
      Xoá tất cả
    </button>
  </div>
);

export default FilterSidebar;
