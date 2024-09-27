import { screen, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";

import ReduxExamplePage from ".";

import { store } from "@/store";

beforeEach(() => {
  jest.clearAllMocks();
});
describe("redux-example", () => {
  it("Should render redux-example index", async () => {
    renderWithContext(<ReduxExamplePage />);
    await waitFor(() => {
      expect(screen.getByText("Redux Example")).toBeInTheDocument();
    });
  });
});

function renderWithContext(children: React.ReactElement) {
  render(<Provider store={store}>{children}</Provider>);
}
