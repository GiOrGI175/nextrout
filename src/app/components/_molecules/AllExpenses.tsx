'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Delete from '../_atoms/Delete';
import UpdateExpense from './UpdateExpense';
import useSetTrue from '@/app/hooks/show';

const AllExpenses = () => {
  const toggleOverlay = useSetTrue((state) => state.toggleOverlay);
  const toggleUpdate = useSetTrue((state) => state.toggleUpdate);

  type ExpenseT = {
    category: string;
    name: string;
    price: number;
    _id: string;
    _v: number;
  };

  const [expenses, setExpenses] = useState<ExpenseT[] | []>([]);
  const [expense, setExpense] = useState<ExpenseT | {}>({});

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3001/expenses');
      const data = res.data;

      console.log(res);

      setExpenses(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdate = async (id: string) => {
    const res = await axios.get(`http://localhost:3001/expenses/${id}`);
    setExpense(res.data);
  };

  return (
    <div className='w-full mt-[80px] flex flex-wrap justify-center items-center gap-[20px]'>
      {expenses.map((item, index) => (
        <div
          key={item._id}
          className='w-[250px] h-[250px] px-[15px] py-[15px] bg-[#FFFFFF99] shadow-sm rounded-[20px] flex flex-col justify-around'
        >
          <div className='py-[20px] !pt-[0px] flex flex-col justify-around h-full font-semibold text-[18px] leading-[24px]  text-[#252432]'>
            <p>category: {item.category}</p>
            <p>name: {item.name}</p>
            <p>price: {item.price}</p>
          </div>
          <div className='flex justify-between gap-[5px]'>
            <button
              className='w-full bg-[#4E47FF] p-[15px] rounded-[8px] font-semibold text-[16px] leading-[24px] text-black'
              onClick={() => {
                toggleOverlay();
                toggleUpdate();
                handleUpdate(item._id);
              }}
            >
              Update
            </button>
            <>
              <Delete />
            </>
          </div>
        </div>
      ))}

      <>
        <UpdateExpense expense={expense} />
      </>
    </div>
  );
};

export default AllExpenses;
