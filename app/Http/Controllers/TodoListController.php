<?php

namespace App\Http\Controllers;

use App\Http\Requests\TodoRequest;
use App\Models\TodoList;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TodoListController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Todolist', [
            'todoLists' => TodoList::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    // public function create()
    // {
    //     //
    // }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TodoRequest $request)
    {
        $data = $request->validated();

        TodoList::create($data);

        return redirect()->route('todolist.index')->with('message', 'Data added successfully');
    }

    /**
     * Display the specified resource.
     */
    // public function show(TodoList $todoList)
    // {
    //     //
    // }

    /**
     * Show the form for editing the specified resource.
     */
    // public function edit(TodoList $todoList)
    // {
    //     //
    // }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TodoList $todoList)
    {
        // dd($request->is_done);
        $todoList->update([
            'is_done' => $request->is_done
        ]);

        return redirect()->route('todolist.index')->with('message', 'Data updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TodoList $todoList)
    {
        //
    }
}
