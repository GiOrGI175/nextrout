'use client';

import useSetTrue from '@/app/hooks/show';
import axios from 'axios';
import { useEffect, useState } from 'react';

type ExpenseT = {
  category: string;
  name: string;
  price: number;
  _id?: string;
  _v?: number;
};

type ExpenseProps = {
  expense: ExpenseT | null;
};

const UpdateExpense = ({ expense }: ExpenseProps) => {
  const showUpdate = useSetTrue((state) => state.showUpdate);
  const toggleUpdate = useSetTrue((state) => state.toggleUpdate);
  const toggleOverlay = useSetTrue((state) => state.toggleOverlay);

  const [formData, setFormData] = useState({
    category: expense?.category || '',
    name: expense?.name || '',
    price: expense?.price || 0,
  });

  useEffect(() => {
    if (expense) {
      setFormData({
        category: expense.category || '',
        name: expense.name || '',
        price: expense.price || 0,
      });
    }
  }, [expense]);

  console.log(formData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!expense?._id) return;

    console.log('Updated expense:', formData);

    const res = await axios.put(
      `http://localhost:3001/expenses/${expense._id}`,
      {
        ...formData,
      }
    );
  };

  return (
    <div
      className={`absolute  max-w-[560px] w-full h-[462px] rounded-[12px] p-[32px] bg-white  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 duration-500
        ${
          showUpdate ? 'block  opacity-[1]' : 'hidden  opacity-0'
        }    max-ss:max-w-[335px]   max-ss:h-fit`}
    >
      <div>
        <div className='flex justify-between mb-[20px]'>
          <h4 className='font-publicSans font-bold text-[32px] leading-[38px] text-[#201F24]  max-ss:text-[20px]   '>
            Update Expense
          </h4>
          <button
            onClick={() => {
              toggleOverlay();
              toggleUpdate();
            }}
          >
            Close
          </button>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col mb-[16px]'>
            <label className='mb-[4px] font-publicSans font-bold text-[12px] leading-[18px] text-[#696868]'>
              Categoty
            </label>
            <input
              onChange={handleChange}
              value={formData.category}
              name='category'
              type='text'
              className='w-full h-[45px]  px-[20px] py-[14px] border-[1px] border-[#98908B] rounded-[8px]'
            />
          </div>
          <div className='flex flex-col mb-[16px]'>
            <label className='mb-[4px] font-publicSans font-bold text-[12px] leading-[18px] text-[#696868]'>
              Name
            </label>
            <input
              onChange={handleChange}
              value={formData.name}
              name='name'
              type='text'
              className='w-full h-[45px] px-[20px] py-[14px] border-[1px] border-[#98908B] rounded-[8px]'
            />
          </div>
          <div className='flex flex-col mb-[16px]'>
            <label className='mb-[4px] font-publicSans font-bold text-[12px] leading-[18px] text-[#696868]'>
              Price
            </label>
            <input
              onChange={handleChange}
              value={formData.price}
              type='number'
              name='price'
              placeholder='$'
              className='w-full h-[45px] px-[20px] py-[14px] border-[1px] border-[#98908B] rounded-[8px]'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-[#4E47FF] p-[15px] rounded-[8px] font-semibold text-[16px] leading-[24px] text-black'
            onClick={() => {
              toggleOverlay();
              toggleUpdate();
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <></>
    </div>
  );
};

export default UpdateExpense;
