interface dataProps {
  clickFilter: any;
  clickFilterItem: any;
  data: any;
}
const FilterComponent = ({ clickFilter, clickFilterItem, data }: dataProps) => {
  return (
    <div
      className={`filterItems ${clickFilter === data.title ? "active" : ""}`} // 조건부 클래스 추가
      onClick={() => {
        clickFilterItem(data.title);
      }}
    >
      <img src={data.src.src} alt="image" />
      <div>{data.title}</div>
    </div>
  );
};
export default FilterComponent;
