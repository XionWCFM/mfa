import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@xionwcfm/xds/button";
import { Checkbox } from "@xionwcfm/xds/checkbox";
import { Flex } from "@xionwcfm/xds/flex";
import { List, Row, Text2Row } from "@xionwcfm/xds/list";
import { Paragraph } from "@xionwcfm/xds/paragraph";
import { TodoItem, useDeleteTodo, useTodo, useToggleTodo } from "../hooks/use-todo";

export const TodoList = () => {
  const todos = useTodo();
  const toggleTodo = useToggleTodo();
  const deleteTodo = useDeleteTodo();

  return (
    <List>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} onToggle={() => toggleTodo(todo.id)} onDelete={() => deleteTodo(todo.id)} />
      ))}
    </List>
  );
};

const Todo = <T extends Pick<TodoItem, "title" | "isDone">>(
  props: T & { onToggle?: () => void; onDelete?: () => void },
) => {
  const { title, isDone, onToggle, onDelete } = props;
  return (
    <Row
      left={<Checkbox checked={isDone} onCheckedChange={onToggle} />}
      right={
        <Button variant={"ghostIcon"} size={"icon"} onClick={onDelete}>
          <TrashIcon />
        </Button>
      }
    >
      <Paragraph className=" flex-grow" size={"6"} color={"neutral-700"} weight={"medium"}>
        {title}
      </Paragraph>
    </Row>
  );
};
