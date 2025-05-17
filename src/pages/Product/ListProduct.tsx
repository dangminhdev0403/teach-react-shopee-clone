import { FilterSidebar } from "@components/ProductControls";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ItemProduct from "@pages/Product/ItemProduct";
import { filters, products, sorts } from "@utils/response";

const ListProduct = () => {
  return (
    <section className="grid h-full w-full bg-[#f5f5f5] py-6 lg:grid-cols-12 lg:px-20">
      <div className="lg:col-span-2">
        <FilterSidebar
          filters={filters}
          onClear={() => {}}
          title="Bộ lọc tìm kiếm"
        />
      </div>

      <div className="pl-2.5 lg:col-span-10">
        {/* Sort */}
        <div className="flex w-full justify-between gap-10 bg-gray-200 px-5 py-3.5 text-sm">
          <div className="flex items-center">
            <span>Sắp xếp theo</span>
            {sorts.map((item) => {
              return (
                <button
                  key={item.id}
                  className="ml-3 cursor-pointer bg-white px-3.5 py-2"
                >
                  {item.value}
                </button>
              );
            })}
          </div>
          <div className="hidden items-center justify-center lg:flex">
            <span className="text-amber-500">1</span>/9
            <div className="ml-3 flex gap-1">
              <button title="Previous" className="bg-white p-1.5 px-3">
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button title="Next" className="bg-white p-1.5 px-3">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>

        {/* List Product */}
        <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-5">
          {products.map((item) => (
            <ItemProduct key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListProduct;
