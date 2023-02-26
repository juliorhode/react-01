import { render, screen } from "@testing-library/react";
import { Items } from "../../src/components/Items";

describe("Priebas en Items", () => {
  const titulo = "Saitama";
  const url = "http://one-punch.com/saitama.jpg";

  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<Items titulo={titulo} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar la imagen con el url y el alt indicado", () => {
    render(<Items titulo={titulo} url={url} />);
    screen.debug();
    // tratar de tomar la imagen y asegurarme que el url  sea el mismo que tenemos aqui
    console.log("src:", screen.getByRole("img").src);
    console.log("alt:", screen.getByRole("img").alt);

    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(titulo);

    // Forma mas elegante
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(titulo);
  });

  test("debe de mostrar el titulo en el componente", () => {
    render(<Items titulo={titulo} url={url} />);
    expect(screen.getByText(titulo)).toBeTruthy();
  });
});
