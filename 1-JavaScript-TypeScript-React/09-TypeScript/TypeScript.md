# typescript

### 1. **TypeScript Nedir?**

TypeScript, JavaScript’in üzerine eklenen bir dil olup, statik tip denetimi ve gelişmiş özellikler sunar. TypeScript, JavaScript kodlarını derler ve bunları geçerli JavaScript’e dönüştürür. Bu, daha güvenli ve hatasız bir geliştirme süreci sağlar.

- TypeScript’in en büyük farkı, değişkenlere, fonksiyonlara, nesnelere ve parametrelere **tip** atayabilmenizdir.

```tsx
let name: string = "Ali";  // name değişkeni sadece string tipinde olabilir.
let age: number = 30;      // age değişkeni sadece number tipinde olabilir.
```

---

### 2. **Temel Tipler (Primitive Types)**

TypeScript, temel JavaScript tiplerini destekler, ancak bunlara tip belirtmek mümkündür.

```tsx
let isActive: boolean = true;   // Boolean tipinde
let count: number = 42;         // Sayısal tipte
let name: string = "John";      // Metin (string) tipinde
```

**Array Tipi:**

```tsx
let numbers: number[] = [1, 2, 3];  // Sayı dizisi
let fruits: string[] = ["apple", "banana", "orange"];  // String dizisi
```

---

### 3. **Objeler ve Tipler**

TypeScript'te nesnelerin tipini belirlemek, veri tutarlılığını artırır. Nesne tiplerini tanımlamak için **interface** veya **type** kullanılabilir.

**interface Kullanımı:**

```tsx
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "Ali",
  age: 30,
};
```

**type Kullanımı:**

```tsx
type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: "Ali",
  age: 30,
};
```

---

### 4. **Fonksiyonlar (Functions)**

Fonksiyonların parametre tiplerini ve dönüş değerlerini belirtmek TypeScript ile mümkündür. Bu, yazılımsal hataların erken tespiti için önemlidir.

**Fonksiyon Parametre Tipi:**

```tsx
function greet(name: string): string {
  return "Hello, " + name;
}

greet("Ali");  // Geçerli
greet(123);    // Hata! Parametre tipi string olmalı
```

**Optional Parametreler:**

```tsx
function greet(name: string, age?: number): string {
  return age ? `Hello ${name}, you are ${age} years old.` : `Hello ${name}`;
}

greet("Ali");          // Geçerli
greet("Ali", 30);      // Geçerli
```

**Fonksiyon Dönüş Tipi:**

```tsx
function add(a: number, b: number): number {
  return a + b;
}

add(5, 10);  // Geçerli
add("5", 10);  // Hata! a parametresi number olmalı
```

---

### 5. **Union Tipleri**

Bir değişkenin birden fazla tipte olabilmesi için **union** tipleri kullanılır. Bu, birden fazla veri tipini tek bir değişkende kabul edebilmek için yararlıdır.

```tsx
let value: string | number;

value = "Hello";
value = 42;
```

---

### 6. **Generics**

TypeScript'te **generics** kullanarak fonksiyonları ve sınıfları, tip bağımsız hale getirebiliriz. Bu sayede kodunuzu daha esnek ve yeniden kullanılabilir yapabilirsiniz.

**Generic Fonksiyon:**

```tsx
function identity<T>(arg: T): T {
  return arg;
}

let result = identity("hello");  // result tipi string olacak
let numberResult = identity(42);  // numberResult tipi number olacak
```

**Generic Sınıf:**

```tsx
class Box<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const stringBox = new Box<string>("Hello");
console.log(stringBox.getValue());  // "Hello"
```

---

### 7. **Type Assertions (Tip Beyanı)**

Bazen, TypeScript’in tip sistemine göre belirli bir tip belirlemek isteyebilirsiniz. Bunun için **type assertions** kullanılır. TypeScript’e bir değerin belirli bir tipe ait olduğunu söyleyebilirsiniz.

```tsx
let someValue: any = "Hello World!";
let strLength: number = (someValue as string).length;  // "Hello World!" ifadesinin uzunluğu
```

---

### 8. **Enums (Sıralı Tipler)**

**Enum** tipi, sabit değerlerin bir listesini oluşturmanıza yardımcı olur. Bu, belirli bir veri kümesine sınırlama getirmek için idealdir.

```tsx
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

let move: Direction = Direction.Up;  // move değeri sadece UP, DOWN, LEFT veya RIGHT olabilir.
```

---

### 9. **Class ve TypeScript**

TypeScript, JavaScript'teki **class** yapısını daha güvenli hale getirir. TypeScript'te class içerisinde tip tanımlamaları yapabiliriz.

```tsx
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, ${this.name}`;
  }
}

const person = new Person("Ali", 30);
console.log(person.greet());  // "Hello, Ali"
```

---

### 10. **Dekoratörler (Decorators)**

TypeScript, sınıf üyelerine yönelik ek işlevsellik eklemek için **decorators** kullanabilir. Bu özellik, özellikle Angular gibi frameworklerde yaygın olarak kullanılır.

```tsx
function Log(target: any, key: string) {
  console.log(`Property ${key} was accessed`);
}

class Person {
  @Log
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person("Ali");  // "Property name was accessed" yazılır
```

---

### 11. **Modüller (Modules)**

TypeScript'te kodunuzu modüller haline getirebilirsiniz. `export` ve `import` ile modüller arasındaki bağımlılığı yönetebilirsiniz.

**export ile dışa aktarma:**

```tsx
export const greet = (name: string) => {
  return `Hello, ${name}`;
};
```

**import ile içeri aktarma:**

```tsx
import { greet } from './greet';

console.log(greet("Ali"));
```