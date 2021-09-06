import Button from "./Button";
function Suggestions({ img, name, caption }) {
  return (
    <section className='flex justify-between items-center mb-3'>
      <div className='flex items-center justify-between space-x-3'>
        {img}
        <div>
          <h2 className='font-semibold text-sm hover:underline cursor-pointer'>
            {name}
          </h2>
          <p className='text-gray-400 text-xs'>{caption}</p>
        </div>
      </div>
      <Button button='Follow' />
    </section>
  );
}

export default Suggestions;
