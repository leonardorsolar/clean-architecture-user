import axios from "axios";

describe("express", () => {
  test("Deve testar a criação do usuário - signup", async () => {
    //given - dado que
    const input = {
      id: "1",
      firstName: "Miguel",
      lastName: "Solar",
      email: "miguel@gmail.com",
      password: "123456",
      age: "8",
    };
    //when - quando acontecer algo

    const response = await axios.post("http://localhost:3000/signup", input);
    const output = response.data;
    //then - então faça isso
    //expect(() => axios.post("http://localhost:3000/signup", input)).rejects.toThrow(new Error("Request failed with status code 500"));
    expect(output.firstName).toBe("Miguel");
  });

  test("Deve retornar um erro caso não insira um passwrd com mais de 5 caracteres", async () => {
    //given - dado que
    const input = {
      id: "1",
      firstName: "Miguel",
      lastName: "Solar",
      email: "miguel@gmail.com",
      password: "1234",
      age: "8",
    };
    //when - quando acontecer algo
    try {
      const response = await axios.post("http://localhost:3000/signup", input);
      const output = response.data;
      //then - então faça isso
      //expect(output.firstName).toBe("Miguel");
    } catch (error) {
      //then - então faça isso
      expect(() => axios.post("http://localhost:3000/signup", input)).rejects.toThrow(new Error("Request failed with status code 500"));
    }
  });
});
