import { renderWithUser } from "@/mocks/wrapper";
import http from "@internal/http";
import { useSuspenseQuery } from "@tanstack/react-query";
import { screen, waitFor } from "@testing-library/dom";

const Component = () => {
  const { data } = useSuspenseQuery<{ id: string; firstName: string; lastName: string }>({
    queryKey: ["user"],
    queryFn: () => http.get("https://example.com/user"),
  });

  return <div>{data?.firstName}</div>;
};
describe("MSW Test", () => {
  it("MSW working", async () => {
    renderWithUser(<Component />);
    await waitFor(() => {
      expect(screen.getByText("John")).toBeInTheDocument();
    });
  });
});
