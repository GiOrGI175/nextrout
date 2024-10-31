type CustomPostProps = {
  params: {
    id: string;
  };
};

const CustomPost: React.FC<CustomPostProps> = ({ params }) => {
  return (
    <div className='w-full flex flex-col justify-center items-center font-[Raleway]'>
      <div className='max-w-[1440px] w-full '>
        <div className='w-full mt-[148px] flex justify-center '>
          <h1 className=' max-w-[764px] w-full font-bold text-[73px] leading-[74px] text-center text-[#252432] '>
            your service number is: {params.id}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CustomPost;
