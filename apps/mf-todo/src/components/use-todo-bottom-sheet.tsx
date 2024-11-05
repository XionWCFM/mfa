import { BottomSheet } from "@xionwcfm/xds/bottom-sheet";
import { Button } from "@xionwcfm/xds/button";
import { FixedBottom } from "@xionwcfm/xds/fixed-bottom";
import { Stack } from "@xionwcfm/xds/stack";
import { UnderlineInput } from "@xionwcfm/xds/underline-input";
import { overlay } from "overlay-kit";
import { useCallback, useState } from "react";
import { useCreateTodo, useTodo } from "../hooks/use-todo";

export const useTodoWriteBottomSheet = () => {
  const open = useCallback(() => {
    return overlay.open(({ isOpen, close, unmount }) => (
      <TodoWriteBottomSheet
        isOpen={isOpen}
        onClose={() => {
          close();
          setTimeout(unmount, 1000);
        }}
      />
    ));
  }, []);

  return { open };
};

const TodoWriteBottomSheet = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [title, setTitle] = useState("");
  const createTodo = useCreateTodo();
  return (
    <BottomSheet.Root open={isOpen} onOpenChange={onClose}>
      <BottomSheet.Portal>
        <BottomSheet.Overlay />
        <BottomSheet.Content
          title="새로운 할 일 추가"
          description="할 일을 추가해주세요"
          handle={<BottomSheet.Handle />}
        >
          <Stack gap={"32"} justify={"between"}>
            <UnderlineInput placeholder="할 일 입력하기" value={title} onChange={(e) => setTitle(e.target.value)} />
            <Button
              variant={"secondary"}
              size={"full"}
              w={"100%"}
              onClick={() => {
                createTodo(title);
                onClose();
              }}
            >
              입력하기
            </Button>
          </Stack>
        </BottomSheet.Content>
      </BottomSheet.Portal>
    </BottomSheet.Root>
  );
};
