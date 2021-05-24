export function Condition(condition: boolean, then: string, otherwise: string): string {
  return condition ? then : otherwise;
}
