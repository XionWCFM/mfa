import { http } from "@repo/http";
import { renderWithUser } from "@repo/test-utils";
import { useSuspenseQuery } from "@tanstack/react-query";
import { screen, waitFor } from "@testing-library/dom";

const Component = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["user"],
    queryFn: () => http.get<{ firstName: string }>("https://example.com/user"),
  });

  return <div>{data?.data?.firstName}</div>;
};
describe("MSW Test", () => {
  it("MSW working", async () => {
    renderWithUser(<Component />);
    await waitFor(() => {
      expect(screen.getByText("John")).toBeInTheDocument();
    });
  });
});
