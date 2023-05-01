import UserRepositoryMemory from "../src/infra/UserRepositoryMemory";

describe("UserRepository", () => {
  test("Deve criar um repositorio em memória", async () => {
    //given - dado que
    const userRepos = new UserRepositoryMemory();
    const input = {
      email: "miguel@gmail.com",
      password: "123456",
    };
    //when - quando acontecer algo
    const output = await userRepos.save(input);
    //then - então faça isso
    expect(output.email).toBe("miguel@gmail.com");
  });
});
