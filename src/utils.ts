// type Top = "Tanker" | "Briuser";
// type Juggle = "Tanker" | "Briuser" | "Magic";
// type Mid = "Utility" | "Tanker" | "Briuser";
// type Ad = "AD";
// type Sup = "Utility" | "Healer";

// type LOL = {
//   top: string;
//   jug: string;
//   min: string;
//   ad: string;
//   sup: string;
// };
// // 1. keyof
// type Position = keyof LOL;

// // 2. 인덱스
// type topIndex = LOL["top"];

// // 3. 인덱스 시그니처
// type Test = { [key: string]: string };

// // 4.
// type test1 = {
//   [key in Mid]: string;
// };

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

// 1. Pick 뽑기
type A = Pick<User, "id" | "name">;

// 2. Omit 삭제
type B = Omit<User, "password">;

// 3. Partial
type C = Partial<User>;

type C1 = Partial<Pick<User, "name" | "email">>;

// 4. Required
type D = Required<Partial<User>>;

// 5. Record
type Member = "User" | "Admin" | "SuperAdmin";
type E = Partial<Record<Member, number | string>>;

type E1 = Partial<Record<keyof User, boolean>>;

// 6. Exclude 제외, Extract 뽑기
type F = Exclude<number | string | boolean, boolean>;
type G = Extract<number | string | boolean, boolean>;
