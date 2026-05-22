function formatDate(date: Date): string {
  const pad = (num: number): string => String(num).padStart(2, "0");

  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(
    date.getHours()
  )}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

export function withTimestamp(
  _target: unknown,
  _propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value;

  descriptor.value = function (message: string): void {
    const messageWithTimestamp = `[${formatDate(new Date())}] ${message}`;
    originalMethod.call(this, messageWithTimestamp);
  };

  return descriptor;
}

export function uppercase(
  _target: unknown,
  _propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value;

  descriptor.value = function (message: string): void {
    originalMethod.call(this, message.toUpperCase());
  };

  return descriptor;
}