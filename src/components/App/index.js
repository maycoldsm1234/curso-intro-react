import React from "react";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { useTodos } from "./useTodos";
import { TodoForm } from "../TodoForm";
import { Modal } from "../Modal";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { ChangeAlert } from "../ChangeAlert";

function App() {
	const { states, stateUpdaters } = useTodos();

	const {
		loading,
		error,
		completedTodos,
		totalTodos,
		searchValue,
		searchedTodos,
		openModal,
	} = states;

	const {
		setSearchValue,
		completeTodo,
		deleteTodo,
		addTodo,
		setOpenModal,
		sincronizeTodos,
	} = stateUpdaters;

	return (
		<React.Fragment>
			<TodoHeader loading={loading}>
				<TodoCounter
					totalTodos={totalTodos}
					completedTodos={completedTodos}
				/>{" "}
				<TodoSearch
					searchValue={searchValue}
					setSearchValue={setSearchValue}
				/>{" "}
			</TodoHeader>{" "}
			<TodoList
				error={error}
				loading={loading}
				searchedTodos={searchedTodos}
				totalTodos={totalTodos}
				searchValue={searchValue}
				onError={() => <TodosError />}
				onLoading={() => <TodosLoading />}
				onEmptyTodos={() => <EmptyTodos />}
				onEmptySearch={(searchText) => (
					<p> No hay resultado para {searchText} </p>
				)}
				render={(todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				)}
			/>{" "}
			<ChangeAlert sincronize={sincronizeTodos} />{" "}
			{!!openModal && (
				<Modal>
					<TodoForm
						addTodo={addTodo}
						setOpenModal={setOpenModal}
					/>{" "}
				</Modal>
			)}{" "}
			<CreateTodoButton setOpenModal={setOpenModal} />{" "}
		</React.Fragment>
	);
}

export default App;
