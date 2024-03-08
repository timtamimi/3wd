import dataset from "./master.json";

const ERROR_STRING = "error.error.error";

export function parseDate(date: Date): string {
  const dateAsFormattedString = date.toISOString().split("T")[0];
  const returnableValueFromDataset =
    dataset[dateAsFormattedString as keyof typeof dataset];
  return returnableValueFromDataset || ERROR_STRING;
}

const getKeyByValue = (obj: Object, value: any): string =>
  Object.keys(obj).find((key) => obj[key as keyof typeof obj] === value) ||
  "error";

export function parseString(inputString: string): Date {
  const value = getKeyByValue(dataset, inputString);
  return new Date(value);
}
