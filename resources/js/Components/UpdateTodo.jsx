import React from "react";
import { useState } from "react";
import { useForm } from "@inertiajs/react";

const UpdateTodo = ({ todoList }) => {
    console.log(todoList);
    const [isDone, setIsDone] = useState(0);

    const { data, setData, put } = useForm({
        is_done: todoList.is_done || 0,
    });

    const handleClick = () => {
        setIsDone(isDone ? 0 : 1);
    };

    const submitHandler = (e) => {
        try {
            e.preventDefault();
            put(route("todolist.update", todoList.id), {
                onSuccess: (e) => console.log(e),
                onError: (e) => console.log(e),
            });
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    // function submit(e) {
    //     e.preventDefault();
    //     setData("is_done", isDone);
    //     console.log(data);
    //     put(route("todolist.update", todoList.id));
    // }

    return (
        <form onSubmit={submitHandler}>
            <button
                type="submit"
                className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-neutral-700 text-white"
                onClick={handleClick}
                onChange={handleChange}
                value={todoList.is_done}
            >
                {todoList.is_done ? "True" : "False"}
            </button>
        </form>
    );
};

export default UpdateTodo;
