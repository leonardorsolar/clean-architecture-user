describe("UserRepository", () => {
  test("Deve criar um repositorio em memória", async () => {
    //given - dado que
    const userRepos = new UserRepository();
    const input = {
      email: "miguel@gmail.com",
      password: "123456",
    };
    //when - quando acontecer algo
    const output = await userRepos.execute(input);
    //then - então faça isso
    expect(output.email).toBe("miguel@gmail.com");
  });
});
