interface dataProps {
  data: any;
}

const ShowRoom = ({ data }: dataProps) => {
  return (
    <div className="items-Box">
      <img src={data.src[0].src} />
      <div className="title">{data.name}</div>
      <div>{data.region}</div>
      <div className="price">₩{data.price[2].total.toLocaleString()}/박</div>
    </div>
  );
};
export default ShowRoom;
