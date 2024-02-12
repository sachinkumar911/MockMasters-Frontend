import ShowBar from "./ShowBar";


const Right = () => {

  return (
    <>
      <div className="flex flex-col w-1/4 h-full border-solid border-2 border-black ">
        <div className=" bg-white flex flex-col w-full h-full px-3 py-8">
          <ShowBar></ShowBar>
        </div>
      </div>
    </>
  );
};

export default Right;
