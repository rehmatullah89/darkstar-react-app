import './loading.css';
const Loading = () => {
  return (
    <div className="box">
      <div className="skeleton">
        <div className="skeleton-left flex1">
          <div className="square"></div>
        </div>
        <div className="skeleton-right flex2">
          <div className="line"></div>
          <div className="line h8 w75"></div>
          <div className="line  w25"></div>
        </div>
      </div>
    </div>
  );
};
export default Loading;
