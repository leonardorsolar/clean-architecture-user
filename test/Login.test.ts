import Login from "../src/application/Login";
import UserRepositoryMemory from "../src/infra/UserRepositoryMemory";

describe("signup", () => {
  test("Deve fazer o Login", async () => {
    //given - dado que
    const userRepos = new UserRepositoryMemory();
    const login = new Login(userRepos);
    const input = {
      email: "miguel@gmail.com",
      password: "123456",
    };
    const output = "";
    try {
      //when - quando acontecer algo
      const output = await login.execute(input);
      //then - então faça isso
      expect(output.email).toBe("miguel@gmail.com");
    } catch (error) {
      //then - então faça isso
      //console.log(output);
      // expect(error).rejects.toThrow(new Error(""));
      expect(() => login.execute(input)).rejects.toThrow(new Error("Email inválido"));
    }
  });
});
