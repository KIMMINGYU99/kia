type Beverage = "coffee" | "nonCoffee" | "ade" | "tea";
type Food = "bakery" | "cookie";

type Unit = {
  id: number;
  name: string;
};

type OperationTime = { open?: string; close?: string };
type Oper24Hour = Omit<OperationTime, keyof OperationTime>;
type RegularOperation = Required<OperationTime>;

type WithUnit<T> = Unit & T;
type Item = {
  price: number;
  stocks: number;
  category: Beverage | Food;
};
type Staff = {
  rank: "Manager" | "PartTime" | "Owner";
  wage: number;
};

type CafeItem = WithUnit<Item>;
type Empolyee = WithUnit<Staff>;

type Branch = {
  operation: Oper24Hour | RegularOperation;
  staffs: Empolyee[];
  menu: CafeItem[];
};

type Spot = WithUnit<Branch>;
