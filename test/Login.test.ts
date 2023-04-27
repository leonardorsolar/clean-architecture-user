describe("signup", () => {
  test("Deve fazer o Login", async () => {
    //given - dado que
    const login = new Login();
    const input = {
      email: "miguel@gmail.com",
      password: "123456",
    };
    //when - quando acontecer algo
    const output = await login.execute(input);
    //then - então faça isso
    expect(output.email).toBe("miguel@gmail.com");
  });
});
