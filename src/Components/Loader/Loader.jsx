import "./Loader.css"
const Loader = () => {
    return (
<div  className="w-1/2 mx-auto flex justify-center items center">
<div className="wrapper">
  <div className="cloud">
    <div className="cloud_left"></div>
    <div className="cloud_right"></div>
  </div>
  <div className="rain">
    <div className="drop"></div>
    <div className="drop"></div>
    <div className="drop"></div>
    <div className="drop"></div>
    <div className="drop"></div>
  </div>
  <div className="surface">
    <div className="hit"></div>
    <div className="hit"></div>
    <div className="hit"></div>
    <div className="hit"></div>
    <div className="hit"></div>
  </div>
</div>
</div>
    );
};

export default Loader;