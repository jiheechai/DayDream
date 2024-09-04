interface dataProps {
  data: any;
}

const ShowRoom = ({ data }: dataProps) => {
  return (
    <div className="itemBox">
      <img src={data.src[0].src} />
      <div>{data.name}</div>
      <div>{data.region}</div>
      <div>1박 {data.price[2].total.toLocaleString()}원</div>
    </div>
  );
};
export default ShowRoom;
