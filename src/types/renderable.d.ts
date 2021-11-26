export interface Renderable {
  children: (element: JSX.Element) => JSX.Element | JSX.Element[];
}
