import CreateTodo from "@/Components/Modal/CreateTodo";
import UpdateTodo from "@/Components/UpdateTodo";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Todolist({ auth, message, todoLists }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Todolist
                </h2>
            }
        >
            <Head title="Todolist" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {message && (
                        <div
                            className="bg-[#2cb67d] text-sm mb-3 text-white rounded-md p-4"
                            role="alert"
                        >
                            <span className="font-bold">Success</span> {message}
                        </div>
                    )}
                    <div className="bg-white p-6 overflow-hidden shadow-sm sm:rounded-lg">
                        {/* <button className="bg-neutral-700 hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded">
                            Create
                        </button> */}
                        <CreateTodo />
                        <div className="flex flex-col mt-5">
                            <div className="-m-1.5 overflow-x-auto">
                                <div className="p-1.5 min-w-full inline-block align-middle">
                                    <div className="overflow-hidden">
                                        <table className="min-w-full divide-y divide-gray-200 ">
                                            <thead>
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                                    >
                                                        NO
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                                    >
                                                        Name
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                                    >
                                                        Is Done
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                                                    >
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 ">
                                                {todoLists.map(
                                                    (todoList, index) => (
                                                        <tr key={todoList.id}>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                                                                {1 + index}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                                                {todoList.name}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                                                <UpdateTodo
                                                                    todoList={
                                                                        todoList
                                                                    }
                                                                />
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                                <a
                                                                    className="text-blue-500 hover:text-blue-700"
                                                                    href="#"
                                                                >
                                                                    Delete
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
