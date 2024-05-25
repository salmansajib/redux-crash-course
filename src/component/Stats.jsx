/* eslint-disable react/prop-types */
function States({ totalCount }) {
  return (
    <div className=' p-4 h-40 flex flex-col items-center justify-center space-y-5 bg-white rounded shadow text-2xl font-semibold '>
      Total Count: {totalCount}
    </div>
  );
}

export default States;
