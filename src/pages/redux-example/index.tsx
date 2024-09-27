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
  const { data, error, isFetching } = useGetUsersQuery(null);
  const counter = useAppSelector((state) => state.counterReducer.counter);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

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
          <ExampleUserItem users={data} />
        </div>
      </section>
    </DefaultLayout>
  );
}
