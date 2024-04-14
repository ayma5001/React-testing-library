import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "./components/login/Login";
import SimpleExample from "./components/SimpleExample/SimpleExample";

//Test for simple example

test("renders learn react link", () => {
  render(<SimpleExample />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders 3 list items", () => {
  render(<SimpleExample />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems.length).toBe(3);
});

test("renders title", () => {
  render(<SimpleExample />);
  const title = screen.getByTestId("mytestid");
  expect(title).toBeInTheDocument();
});

test("sum should be 6", () => {
  render(<SimpleExample />);
  const sum = screen.getByTitle("sum");
  expect(sum.textContent).toEqual("6");
});

//Test for Login Page


jest.mock("axios", () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: { id: 1, name: "John" },
    }),
  },
}));


test("username input should be rendred in the document", () => {
  render(<Login />);
  const usernameInputEl = screen.getByRole("textbox");
  expect(usernameInputEl).toBeInTheDocument();
});

test("password input should be rendred in the document", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText("password");
  expect(passwordInputEl).toBeInTheDocument();
});

test("Button should be rendred in the documents", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument();
});

test("usename input should be empty", () => {
  render(<Login />);
  const usernameInputEl = screen.getByPlaceholderText("username");
  expect(usernameInputEl.value).toBe("");
});

test("password input should be empty", () => {
  render(<Login />);
  const passwordInputEl = screen.getByTestId("passwordInput");
  expect(passwordInputEl.value).toBe("");
});

test("button should be disabled", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeDisabled();
});

test("Loading shoud not be rendreing", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).not.toHaveTextContent(/please wait/i);
});

test("error message should not be rendered", () => {
  render(<Login />);
  const errorEl = screen.getByTestId("error");
  expect(errorEl).not.toBeVisible();
});

test("username input should change", () => {
  render(<Login />);

  const testValue = "test";
  const usernameInputEl = screen.getByPlaceholderText("username");
  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  expect(usernameInputEl.value).toBe(testValue);
});

test("password input should be change", () => {
  render(<Login />);

  const testValue = "test";
  const passwordInputEl = screen.getByPlaceholderText("password");
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  expect(passwordInputEl.value).toBe(testValue);
});

test("Button should not be disabled when inputs exist", () => {
  render(<Login />);

  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const testValue = "test";
  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  const ButtonEl = screen.getByRole("button");
  expect(ButtonEl).not.toBeDisabled();
});

test("loading should be rendered when click", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  expect(buttonEl).toHaveTextContent(/please wait/i);
});

// test("loading should not be rendreing after fetching", async () => {
//   render(<Login />);
//   const buttonEl = screen.getByRole("button");
//   const usernameInputEl = screen.getByPlaceholderText(/username/i);
//   const passwordInputEl = screen.getByPlaceholderText(/password/i);

//   const testValue = "test";

//   fireEvent.change(usernameInputEl, { target: { value: testValue } });
//   fireEvent.change(passwordInputEl, { target: { value: testValue } });
//   fireEvent.click(buttonEl);

//   await waitFor(() => expect(buttonEl).not.toHaveTextContent(/please wait/i));
// });

test("loading should not be rendered after fetching", async () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  await waitFor(() => expect(buttonEl).not.toHaveTextContent(/please wait/i));
});



test ("user should be rendered after fetching", async()=> {
  render(<Login/>)

  const buttonEl = screen.getByRole("button")
  const usernameInputEl = screen.getByPlaceholderText("username")
  const passwordInputEl = screen.getByPlaceholderText("password")

  const testValue = "test"


  fireEvent.change(usernameInputEl , {target: {value:testValue }})
  fireEvent.change(passwordInputEl , {target: {value:testValue }})*
  fireEvent.click(buttonEl)


  const userItem = await screen.findByText("John")
  expect(userItem).toBeInTheDocument()

})



