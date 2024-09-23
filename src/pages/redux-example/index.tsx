"use client";

import { Button } from "@nextui-org/button";
import { useDispatch } from "react-redux";

import { ExampleUserItem } from "./components/ExampleUserItem";

import { title } from "@/common/components/primitives";
import DefaultLayout from "@/layouts/default";
import { useAppSelector } from "@/store/hooks";
import { decrement, increment } from "@/store/slices/counterSlice";
import { useGetUsersQuery } from "@/store/services/userApi";

export default function ReduxExamplePage() {
  // const { data, error, isFetching, ...rest } = useGetUsersQuery(null);
  const counter = useAppSelector((state) => state.counterReducer.counter);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  let {data, error, isFetching, ...rest} = {data: {}, error: false, isFetching: true}
  fetch('https://jsonplaceholder.typicode.com/users/').then( data2 => {
    data2.json().then(data3 => {
      console.log(data3);
      data = data3
      error = false
      isFetching = false 
    })
  })

  console.log(rest);

  if (isFetching) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Throw error exception</p>;
  }

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Redux Example</h1>
          <h3>{counter}</h3>
          <div>
            <Button onClick={handleIncrement}>Increment</Button>
            <Button onClick={handleDecrement}>Decrement</Button>
          </div>
          {data?.map((user) => <ExampleUserItem key={user.id} user={user} />)}
        </div>
      </section>
    </DefaultLayout>
  );
}
