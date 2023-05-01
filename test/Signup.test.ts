import Signup from "../src/application/Signup";
import UserRepositoryMemory from "../src/infra/UserRepositoryMemory";

describe("signup", () => {
  test.skip("Deve fazer o signup", async () => {
    //given - dado que
    const userRepository = new UserRepositoryMemory();
    const signup = new Signup(userRepository);
    const input = {
      firstName: "Miguel",
      lastName: "Solar",
      email: "miguel@gmail.com",
      password: "123456",
      //token: "1234567890",
      age: "8",
    };
    //when - quando acontecer algo
    const output = await signup.execute(input);
    //then - então faça isso
    expect(output.email).toBe("miguel@gmail.com");
    //expect(output.token).toBe("1234567890");
  });

  // test("Não Deve fazer o signup se o nome for inválido", async () => {
  //   //given - dado que
  //   const userRepository = new UserRepositoryMemory();
  //   const signup = new Signup(userRepository);
  //   const input = {
  //     firstName: "Mi",
  //     lastName: "Solar",
  //     email: "miguel@gmail.com",
  //     password: "123456",
  //     //token: "1234567890",
  //     age: "8",
  //   };
  //   //when - quando acontecer algo
  //   // const output = await signup.execute(input);
  //   // console.log(output);
  //   //then - então faça isso
  //   expect(() => signup.execute(input)).toThrowError(new Error("O nome tem que ter mais de 3 caracter"));

  // });
});
