import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/features/greeting/greetingSlice';

const Greeting = () => {
  const { greeting, isLoading, error } = useSelector((store) => store.greeting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  return (
    <h1>{greeting.title}</h1>
  );
};
export default Greeting;
