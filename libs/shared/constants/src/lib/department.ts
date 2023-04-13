export const DepartmentConstant = {
  SPY: "SPY",
  DM: "DM",
  ODOO: "ODOO",
} as const;

type ObjectValues<T> = T[keyof T];
export type DepartmentType = ObjectValues<typeof DepartmentConstant>
