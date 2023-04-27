describe("signup", () => {
  test("Deve fazer o signup", async () => {
    //given - dado que
    const signup = new Signup();
    const input = {
      firstName: "Miguel",
      lastName: "Solar",
      email: "miguel@gmail.com",
      password: "123456",
      age: "8",
    };
    //when - quando acontecer algo
    const output = await signup.execute(input);
    //then - então faça isso
    expect(output.email).toBe("miguel@gmail.com");
    expect(output.token).toBe("1234567890");
  });
});
