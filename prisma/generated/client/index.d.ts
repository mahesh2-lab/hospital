
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model Doctor
 * 
 */
export type Doctor = $Result.DefaultSelection<Prisma.$DoctorPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model OPDRecord
 * 
 */
export type OPDRecord = $Result.DefaultSelection<Prisma.$OPDRecordPayload>
/**
 * Model IPDAdmission
 * 
 */
export type IPDAdmission = $Result.DefaultSelection<Prisma.$IPDAdmissionPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model LabTest
 * 
 */
export type LabTest = $Result.DefaultSelection<Prisma.$LabTestPayload>
/**
 * Model Medicine
 * 
 */
export type Medicine = $Result.DefaultSelection<Prisma.$MedicinePayload>
/**
 * Model IssuedMedicine
 * 
 */
export type IssuedMedicine = $Result.DefaultSelection<Prisma.$IssuedMedicinePayload>
/**
 * Model Inventory
 * 
 */
export type Inventory = $Result.DefaultSelection<Prisma.$InventoryPayload>
/**
 * Model Billing
 * 
 */
export type Billing = $Result.DefaultSelection<Prisma.$BillingPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Patients
 * const patients = await prisma.patient.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Patients
   * const patients = await prisma.patient.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **Doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.DoctorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.oPDRecord`: Exposes CRUD operations for the **OPDRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OPDRecords
    * const oPDRecords = await prisma.oPDRecord.findMany()
    * ```
    */
  get oPDRecord(): Prisma.OPDRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.iPDAdmission`: Exposes CRUD operations for the **IPDAdmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IPDAdmissions
    * const iPDAdmissions = await prisma.iPDAdmission.findMany()
    * ```
    */
  get iPDAdmission(): Prisma.IPDAdmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.labTest`: Exposes CRUD operations for the **LabTest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LabTests
    * const labTests = await prisma.labTest.findMany()
    * ```
    */
  get labTest(): Prisma.LabTestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicine`: Exposes CRUD operations for the **Medicine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicines
    * const medicines = await prisma.medicine.findMany()
    * ```
    */
  get medicine(): Prisma.MedicineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.issuedMedicine`: Exposes CRUD operations for the **IssuedMedicine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IssuedMedicines
    * const issuedMedicines = await prisma.issuedMedicine.findMany()
    * ```
    */
  get issuedMedicine(): Prisma.IssuedMedicineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **Inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.InventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.billing`: Exposes CRUD operations for the **Billing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Billings
    * const billings = await prisma.billing.findMany()
    * ```
    */
  get billing(): Prisma.BillingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Patient: 'Patient',
    Doctor: 'Doctor',
    Appointment: 'Appointment',
    OPDRecord: 'OPDRecord',
    IPDAdmission: 'IPDAdmission',
    Room: 'Room',
    LabTest: 'LabTest',
    Medicine: 'Medicine',
    IssuedMedicine: 'IssuedMedicine',
    Inventory: 'Inventory',
    Billing: 'Billing',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "patient" | "doctor" | "appointment" | "oPDRecord" | "iPDAdmission" | "room" | "labTest" | "medicine" | "issuedMedicine" | "inventory" | "billing" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      Doctor: {
        payload: Prisma.$DoctorPayload<ExtArgs>
        fields: Prisma.DoctorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findFirst: {
            args: Prisma.DoctorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findMany: {
            args: Prisma.DoctorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          create: {
            args: Prisma.DoctorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          createMany: {
            args: Prisma.DoctorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          delete: {
            args: Prisma.DoctorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          update: {
            args: Prisma.DoctorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          deleteMany: {
            args: Prisma.DoctorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          upsert: {
            args: Prisma.DoctorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctor>
          }
          groupBy: {
            args: Prisma.DoctorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      OPDRecord: {
        payload: Prisma.$OPDRecordPayload<ExtArgs>
        fields: Prisma.OPDRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OPDRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OPDRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OPDRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OPDRecordPayload>
          }
          findFirst: {
            args: Prisma.OPDRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OPDRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OPDRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OPDRecordPayload>
          }
          findMany: {
            args: Prisma.OPDRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OPDRecordPayload>[]
          }
          create: {
            args: Prisma.OPDRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OPDRecordPayload>
          }
          createMany: {
            args: Prisma.OPDRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OPDRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OPDRecordPayload>[]
          }
          delete: {
            args: Prisma.OPDRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OPDRecordPayload>
          }
          update: {
            args: Prisma.OPDRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OPDRecordPayload>
          }
          deleteMany: {
            args: Prisma.OPDRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OPDRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OPDRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OPDRecordPayload>[]
          }
          upsert: {
            args: Prisma.OPDRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OPDRecordPayload>
          }
          aggregate: {
            args: Prisma.OPDRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOPDRecord>
          }
          groupBy: {
            args: Prisma.OPDRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<OPDRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.OPDRecordCountArgs<ExtArgs>
            result: $Utils.Optional<OPDRecordCountAggregateOutputType> | number
          }
        }
      }
      IPDAdmission: {
        payload: Prisma.$IPDAdmissionPayload<ExtArgs>
        fields: Prisma.IPDAdmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IPDAdmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPDAdmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IPDAdmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPDAdmissionPayload>
          }
          findFirst: {
            args: Prisma.IPDAdmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPDAdmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IPDAdmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPDAdmissionPayload>
          }
          findMany: {
            args: Prisma.IPDAdmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPDAdmissionPayload>[]
          }
          create: {
            args: Prisma.IPDAdmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPDAdmissionPayload>
          }
          createMany: {
            args: Prisma.IPDAdmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IPDAdmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPDAdmissionPayload>[]
          }
          delete: {
            args: Prisma.IPDAdmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPDAdmissionPayload>
          }
          update: {
            args: Prisma.IPDAdmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPDAdmissionPayload>
          }
          deleteMany: {
            args: Prisma.IPDAdmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IPDAdmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IPDAdmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPDAdmissionPayload>[]
          }
          upsert: {
            args: Prisma.IPDAdmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPDAdmissionPayload>
          }
          aggregate: {
            args: Prisma.IPDAdmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIPDAdmission>
          }
          groupBy: {
            args: Prisma.IPDAdmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<IPDAdmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.IPDAdmissionCountArgs<ExtArgs>
            result: $Utils.Optional<IPDAdmissionCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      LabTest: {
        payload: Prisma.$LabTestPayload<ExtArgs>
        fields: Prisma.LabTestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LabTestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LabTestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload>
          }
          findFirst: {
            args: Prisma.LabTestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LabTestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload>
          }
          findMany: {
            args: Prisma.LabTestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload>[]
          }
          create: {
            args: Prisma.LabTestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload>
          }
          createMany: {
            args: Prisma.LabTestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LabTestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload>[]
          }
          delete: {
            args: Prisma.LabTestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload>
          }
          update: {
            args: Prisma.LabTestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload>
          }
          deleteMany: {
            args: Prisma.LabTestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LabTestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LabTestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload>[]
          }
          upsert: {
            args: Prisma.LabTestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload>
          }
          aggregate: {
            args: Prisma.LabTestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLabTest>
          }
          groupBy: {
            args: Prisma.LabTestGroupByArgs<ExtArgs>
            result: $Utils.Optional<LabTestGroupByOutputType>[]
          }
          count: {
            args: Prisma.LabTestCountArgs<ExtArgs>
            result: $Utils.Optional<LabTestCountAggregateOutputType> | number
          }
        }
      }
      Medicine: {
        payload: Prisma.$MedicinePayload<ExtArgs>
        fields: Prisma.MedicineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          findFirst: {
            args: Prisma.MedicineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          findMany: {
            args: Prisma.MedicineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>[]
          }
          create: {
            args: Prisma.MedicineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          createMany: {
            args: Prisma.MedicineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>[]
          }
          delete: {
            args: Prisma.MedicineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          update: {
            args: Prisma.MedicineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          deleteMany: {
            args: Prisma.MedicineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>[]
          }
          upsert: {
            args: Prisma.MedicineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          aggregate: {
            args: Prisma.MedicineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicine>
          }
          groupBy: {
            args: Prisma.MedicineGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicineGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicineCountArgs<ExtArgs>
            result: $Utils.Optional<MedicineCountAggregateOutputType> | number
          }
        }
      }
      IssuedMedicine: {
        payload: Prisma.$IssuedMedicinePayload<ExtArgs>
        fields: Prisma.IssuedMedicineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IssuedMedicineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuedMedicinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IssuedMedicineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuedMedicinePayload>
          }
          findFirst: {
            args: Prisma.IssuedMedicineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuedMedicinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IssuedMedicineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuedMedicinePayload>
          }
          findMany: {
            args: Prisma.IssuedMedicineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuedMedicinePayload>[]
          }
          create: {
            args: Prisma.IssuedMedicineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuedMedicinePayload>
          }
          createMany: {
            args: Prisma.IssuedMedicineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IssuedMedicineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuedMedicinePayload>[]
          }
          delete: {
            args: Prisma.IssuedMedicineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuedMedicinePayload>
          }
          update: {
            args: Prisma.IssuedMedicineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuedMedicinePayload>
          }
          deleteMany: {
            args: Prisma.IssuedMedicineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IssuedMedicineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IssuedMedicineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuedMedicinePayload>[]
          }
          upsert: {
            args: Prisma.IssuedMedicineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuedMedicinePayload>
          }
          aggregate: {
            args: Prisma.IssuedMedicineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIssuedMedicine>
          }
          groupBy: {
            args: Prisma.IssuedMedicineGroupByArgs<ExtArgs>
            result: $Utils.Optional<IssuedMedicineGroupByOutputType>[]
          }
          count: {
            args: Prisma.IssuedMedicineCountArgs<ExtArgs>
            result: $Utils.Optional<IssuedMedicineCountAggregateOutputType> | number
          }
        }
      }
      Inventory: {
        payload: Prisma.$InventoryPayload<ExtArgs>
        fields: Prisma.InventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findFirst: {
            args: Prisma.InventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findMany: {
            args: Prisma.InventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          create: {
            args: Prisma.InventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          createMany: {
            args: Prisma.InventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          delete: {
            args: Prisma.InventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          update: {
            args: Prisma.InventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          deleteMany: {
            args: Prisma.InventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          upsert: {
            args: Prisma.InventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.InventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
          }
        }
      }
      Billing: {
        payload: Prisma.$BillingPayload<ExtArgs>
        fields: Prisma.BillingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingPayload>
          }
          findFirst: {
            args: Prisma.BillingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingPayload>
          }
          findMany: {
            args: Prisma.BillingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingPayload>[]
          }
          create: {
            args: Prisma.BillingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingPayload>
          }
          createMany: {
            args: Prisma.BillingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingPayload>[]
          }
          delete: {
            args: Prisma.BillingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingPayload>
          }
          update: {
            args: Prisma.BillingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingPayload>
          }
          deleteMany: {
            args: Prisma.BillingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BillingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingPayload>[]
          }
          upsert: {
            args: Prisma.BillingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingPayload>
          }
          aggregate: {
            args: Prisma.BillingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBilling>
          }
          groupBy: {
            args: Prisma.BillingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillingCountArgs<ExtArgs>
            result: $Utils.Optional<BillingCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    patient?: PatientOmit
    doctor?: DoctorOmit
    appointment?: AppointmentOmit
    oPDRecord?: OPDRecordOmit
    iPDAdmission?: IPDAdmissionOmit
    room?: RoomOmit
    labTest?: LabTestOmit
    medicine?: MedicineOmit
    issuedMedicine?: IssuedMedicineOmit
    inventory?: InventoryOmit
    billing?: BillingOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    appointments: number
    opdRecords: number
    ipdAdmissions: number
    issuedMedicines: number
    billings: number
    LabTest: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | PatientCountOutputTypeCountAppointmentsArgs
    opdRecords?: boolean | PatientCountOutputTypeCountOpdRecordsArgs
    ipdAdmissions?: boolean | PatientCountOutputTypeCountIpdAdmissionsArgs
    issuedMedicines?: boolean | PatientCountOutputTypeCountIssuedMedicinesArgs
    billings?: boolean | PatientCountOutputTypeCountBillingsArgs
    LabTest?: boolean | PatientCountOutputTypeCountLabTestArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountOpdRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OPDRecordWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountIpdAdmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IPDAdmissionWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountIssuedMedicinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssuedMedicineWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountBillingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillingWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountLabTestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabTestWhereInput
  }


  /**
   * Count Type DoctorCountOutputType
   */

  export type DoctorCountOutputType = {
    appointments: number
    opdRecords: number
    labTests: number
  }

  export type DoctorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | DoctorCountOutputTypeCountAppointmentsArgs
    opdRecords?: boolean | DoctorCountOutputTypeCountOpdRecordsArgs
    labTests?: boolean | DoctorCountOutputTypeCountLabTestsArgs
  }

  // Custom InputTypes
  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountOpdRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OPDRecordWhereInput
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountLabTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabTestWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    ipdAdmissions: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ipdAdmissions?: boolean | RoomCountOutputTypeCountIpdAdmissionsArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountIpdAdmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IPDAdmissionWhereInput
  }


  /**
   * Count Type MedicineCountOutputType
   */

  export type MedicineCountOutputType = {
    issuedMedicines: number
  }

  export type MedicineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issuedMedicines?: boolean | MedicineCountOutputTypeCountIssuedMedicinesArgs
  }

  // Custom InputTypes
  /**
   * MedicineCountOutputType without action
   */
  export type MedicineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineCountOutputType
     */
    select?: MedicineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicineCountOutputType without action
   */
  export type MedicineCountOutputTypeCountIssuedMedicinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssuedMedicineWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientAvgAggregateOutputType = {
    id: number | null
  }

  export type PatientSumAggregateOutputType = {
    id: number | null
  }

  export type PatientMinAggregateOutputType = {
    id: number | null
    name: string | null
    gender: string | null
    dob: Date | null
    contact: string | null
    allergies: string | null
    history: string | null
  }

  export type PatientMaxAggregateOutputType = {
    id: number | null
    name: string | null
    gender: string | null
    dob: Date | null
    contact: string | null
    allergies: string | null
    history: string | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    name: number
    gender: number
    dob: number
    contact: number
    allergies: number
    history: number
    _all: number
  }


  export type PatientAvgAggregateInputType = {
    id?: true
  }

  export type PatientSumAggregateInputType = {
    id?: true
  }

  export type PatientMinAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    dob?: true
    contact?: true
    allergies?: true
    history?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    dob?: true
    contact?: true
    allergies?: true
    history?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    dob?: true
    contact?: true
    allergies?: true
    history?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _avg?: PatientAvgAggregateInputType
    _sum?: PatientSumAggregateInputType
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: number
    name: string
    gender: string
    dob: Date
    contact: string
    allergies: string | null
    history: string | null
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gender?: boolean
    dob?: boolean
    contact?: boolean
    allergies?: boolean
    history?: boolean
    appointments?: boolean | Patient$appointmentsArgs<ExtArgs>
    opdRecords?: boolean | Patient$opdRecordsArgs<ExtArgs>
    ipdAdmissions?: boolean | Patient$ipdAdmissionsArgs<ExtArgs>
    issuedMedicines?: boolean | Patient$issuedMedicinesArgs<ExtArgs>
    billings?: boolean | Patient$billingsArgs<ExtArgs>
    LabTest?: boolean | Patient$LabTestArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gender?: boolean
    dob?: boolean
    contact?: boolean
    allergies?: boolean
    history?: boolean
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gender?: boolean
    dob?: boolean
    contact?: boolean
    allergies?: boolean
    history?: boolean
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    name?: boolean
    gender?: boolean
    dob?: boolean
    contact?: boolean
    allergies?: boolean
    history?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "gender" | "dob" | "contact" | "allergies" | "history", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | Patient$appointmentsArgs<ExtArgs>
    opdRecords?: boolean | Patient$opdRecordsArgs<ExtArgs>
    ipdAdmissions?: boolean | Patient$ipdAdmissionsArgs<ExtArgs>
    issuedMedicines?: boolean | Patient$issuedMedicinesArgs<ExtArgs>
    billings?: boolean | Patient$billingsArgs<ExtArgs>
    LabTest?: boolean | Patient$LabTestArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      opdRecords: Prisma.$OPDRecordPayload<ExtArgs>[]
      ipdAdmissions: Prisma.$IPDAdmissionPayload<ExtArgs>[]
      issuedMedicines: Prisma.$IssuedMedicinePayload<ExtArgs>[]
      billings: Prisma.$BillingPayload<ExtArgs>[]
      LabTest: Prisma.$LabTestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      gender: string
      dob: Date
      contact: string
      allergies: string | null
      history: string | null
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointments<T extends Patient$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    opdRecords<T extends Patient$opdRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$opdRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OPDRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ipdAdmissions<T extends Patient$ipdAdmissionsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$ipdAdmissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IPDAdmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    issuedMedicines<T extends Patient$issuedMedicinesArgs<ExtArgs> = {}>(args?: Subset<T, Patient$issuedMedicinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuedMedicinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    billings<T extends Patient$billingsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$billingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    LabTest<T extends Patient$LabTestArgs<ExtArgs> = {}>(args?: Subset<T, Patient$LabTestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'Int'>
    readonly name: FieldRef<"Patient", 'String'>
    readonly gender: FieldRef<"Patient", 'String'>
    readonly dob: FieldRef<"Patient", 'DateTime'>
    readonly contact: FieldRef<"Patient", 'String'>
    readonly allergies: FieldRef<"Patient", 'String'>
    readonly history: FieldRef<"Patient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.appointments
   */
  export type Patient$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Patient.opdRecords
   */
  export type Patient$opdRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPDRecord
     */
    select?: OPDRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OPDRecord
     */
    omit?: OPDRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OPDRecordInclude<ExtArgs> | null
    where?: OPDRecordWhereInput
    orderBy?: OPDRecordOrderByWithRelationInput | OPDRecordOrderByWithRelationInput[]
    cursor?: OPDRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OPDRecordScalarFieldEnum | OPDRecordScalarFieldEnum[]
  }

  /**
   * Patient.ipdAdmissions
   */
  export type Patient$ipdAdmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IPDAdmission
     */
    select?: IPDAdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IPDAdmission
     */
    omit?: IPDAdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IPDAdmissionInclude<ExtArgs> | null
    where?: IPDAdmissionWhereInput
    orderBy?: IPDAdmissionOrderByWithRelationInput | IPDAdmissionOrderByWithRelationInput[]
    cursor?: IPDAdmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IPDAdmissionScalarFieldEnum | IPDAdmissionScalarFieldEnum[]
  }

  /**
   * Patient.issuedMedicines
   */
  export type Patient$issuedMedicinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedMedicine
     */
    select?: IssuedMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedMedicine
     */
    omit?: IssuedMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedMedicineInclude<ExtArgs> | null
    where?: IssuedMedicineWhereInput
    orderBy?: IssuedMedicineOrderByWithRelationInput | IssuedMedicineOrderByWithRelationInput[]
    cursor?: IssuedMedicineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssuedMedicineScalarFieldEnum | IssuedMedicineScalarFieldEnum[]
  }

  /**
   * Patient.billings
   */
  export type Patient$billingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billing
     */
    omit?: BillingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInclude<ExtArgs> | null
    where?: BillingWhereInput
    orderBy?: BillingOrderByWithRelationInput | BillingOrderByWithRelationInput[]
    cursor?: BillingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillingScalarFieldEnum | BillingScalarFieldEnum[]
  }

  /**
   * Patient.LabTest
   */
  export type Patient$LabTestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    where?: LabTestWhereInput
    orderBy?: LabTestOrderByWithRelationInput | LabTestOrderByWithRelationInput[]
    cursor?: LabTestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LabTestScalarFieldEnum | LabTestScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model Doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorAvgAggregateOutputType = {
    id: number | null
  }

  export type DoctorSumAggregateOutputType = {
    id: number | null
  }

  export type DoctorMinAggregateOutputType = {
    id: number | null
    name: string | null
    department: string | null
    specialization: string | null
  }

  export type DoctorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    department: string | null
    specialization: string | null
  }

  export type DoctorCountAggregateOutputType = {
    id: number
    name: number
    department: number
    specialization: number
    _all: number
  }


  export type DoctorAvgAggregateInputType = {
    id?: true
  }

  export type DoctorSumAggregateInputType = {
    id?: true
  }

  export type DoctorMinAggregateInputType = {
    id?: true
    name?: true
    department?: true
    specialization?: true
  }

  export type DoctorMaxAggregateInputType = {
    id?: true
    name?: true
    department?: true
    specialization?: true
  }

  export type DoctorCountAggregateInputType = {
    id?: true
    name?: true
    department?: true
    specialization?: true
    _all?: true
  }

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctor to aggregate.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type DoctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorWhereInput
    orderBy?: DoctorOrderByWithAggregationInput | DoctorOrderByWithAggregationInput[]
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum
    having?: DoctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _avg?: DoctorAvgAggregateInputType
    _sum?: DoctorSumAggregateInputType
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }

  export type DoctorGroupByOutputType = {
    id: number
    name: string
    department: string
    specialization: string | null
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    department?: boolean
    specialization?: boolean
    appointments?: boolean | Doctor$appointmentsArgs<ExtArgs>
    opdRecords?: boolean | Doctor$opdRecordsArgs<ExtArgs>
    labTests?: boolean | Doctor$labTestsArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    department?: boolean
    specialization?: boolean
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    department?: boolean
    specialization?: boolean
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectScalar = {
    id?: boolean
    name?: boolean
    department?: boolean
    specialization?: boolean
  }

  export type DoctorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "department" | "specialization", ExtArgs["result"]["doctor"]>
  export type DoctorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | Doctor$appointmentsArgs<ExtArgs>
    opdRecords?: boolean | Doctor$opdRecordsArgs<ExtArgs>
    labTests?: boolean | Doctor$labTestsArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoctorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DoctorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DoctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doctor"
    objects: {
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      opdRecords: Prisma.$OPDRecordPayload<ExtArgs>[]
      labTests: Prisma.$LabTestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      department: string
      specialization: string | null
    }, ExtArgs["result"]["doctor"]>
    composites: {}
  }

  type DoctorGetPayload<S extends boolean | null | undefined | DoctorDefaultArgs> = $Result.GetResult<Prisma.$DoctorPayload, S>

  type DoctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorCountAggregateInputType | true
    }

  export interface DoctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doctor'], meta: { name: 'Doctor' } }
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {DoctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorFindUniqueArgs>(args: SelectSubset<T, DoctorFindUniqueArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doctor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorFindFirstArgs>(args?: SelectSubset<T, DoctorFindFirstArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorFindManyArgs>(args?: SelectSubset<T, DoctorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doctor.
     * @param {DoctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
     */
    create<T extends DoctorCreateArgs>(args: SelectSubset<T, DoctorCreateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doctors.
     * @param {DoctorCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorCreateManyArgs>(args?: SelectSubset<T, DoctorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doctors and returns the data saved in the database.
     * @param {DoctorCreateManyAndReturnArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doctor.
     * @param {DoctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
     */
    delete<T extends DoctorDeleteArgs>(args: SelectSubset<T, DoctorDeleteArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doctor.
     * @param {DoctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorUpdateArgs>(args: SelectSubset<T, DoctorUpdateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorDeleteManyArgs>(args?: SelectSubset<T, DoctorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorUpdateManyArgs>(args: SelectSubset<T, DoctorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors and returns the data updated in the database.
     * @param {DoctorUpdateManyAndReturnArgs} args - Arguments to update many Doctors.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoctorUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doctor.
     * @param {DoctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
     */
    upsert<T extends DoctorUpsertArgs>(args: SelectSubset<T, DoctorUpsertArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorCountArgs>(
      args?: Subset<T, DoctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorGroupByArgs['orderBy'] }
        : { orderBy?: DoctorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doctor model
   */
  readonly fields: DoctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointments<T extends Doctor$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    opdRecords<T extends Doctor$opdRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$opdRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OPDRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    labTests<T extends Doctor$labTestsArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$labTestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Doctor model
   */
  interface DoctorFieldRefs {
    readonly id: FieldRef<"Doctor", 'Int'>
    readonly name: FieldRef<"Doctor", 'String'>
    readonly department: FieldRef<"Doctor", 'String'>
    readonly specialization: FieldRef<"Doctor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Doctor findUnique
   */
  export type DoctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findUniqueOrThrow
   */
  export type DoctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findFirst
   */
  export type DoctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findFirstOrThrow
   */
  export type DoctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findMany
   */
  export type DoctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor create
   */
  export type DoctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to create a Doctor.
     */
    data: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
  }

  /**
   * Doctor createMany
   */
  export type DoctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
  }

  /**
   * Doctor createManyAndReturn
   */
  export type DoctorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
  }

  /**
   * Doctor update
   */
  export type DoctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to update a Doctor.
     */
    data: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
    /**
     * Choose, which Doctor to update.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor updateMany
   */
  export type DoctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
  }

  /**
   * Doctor updateManyAndReturn
   */
  export type DoctorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
  }

  /**
   * Doctor upsert
   */
  export type DoctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The filter to search for the Doctor to update in case it exists.
     */
    where: DoctorWhereUniqueInput
    /**
     * In case the Doctor found by the `where` argument doesn't exist, create a new Doctor with this data.
     */
    create: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
    /**
     * In case the Doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
  }

  /**
   * Doctor delete
   */
  export type DoctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter which Doctor to delete.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor deleteMany
   */
  export type DoctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctors to delete
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to delete.
     */
    limit?: number
  }

  /**
   * Doctor.appointments
   */
  export type Doctor$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Doctor.opdRecords
   */
  export type Doctor$opdRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPDRecord
     */
    select?: OPDRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OPDRecord
     */
    omit?: OPDRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OPDRecordInclude<ExtArgs> | null
    where?: OPDRecordWhereInput
    orderBy?: OPDRecordOrderByWithRelationInput | OPDRecordOrderByWithRelationInput[]
    cursor?: OPDRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OPDRecordScalarFieldEnum | OPDRecordScalarFieldEnum[]
  }

  /**
   * Doctor.labTests
   */
  export type Doctor$labTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    where?: LabTestWhereInput
    orderBy?: LabTestOrderByWithRelationInput | LabTestOrderByWithRelationInput[]
    cursor?: LabTestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LabTestScalarFieldEnum | LabTestScalarFieldEnum[]
  }

  /**
   * Doctor without action
   */
  export type DoctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
    date: Date | null
    status: string | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
    date: Date | null
    status: string | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    patientId: number
    doctorId: number
    date: number
    status: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
  }

  export type AppointmentSumAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    date?: true
    status?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    date?: true
    status?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    date?: true
    status?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: number
    patientId: number
    doctorId: number
    date: Date
    status: string
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    date?: boolean
    status?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    date?: boolean
    status?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    date?: boolean
    status?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    date?: boolean
    status?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "doctorId" | "date" | "status", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      doctor: Prisma.$DoctorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patientId: number
      doctorId: number
      date: Date
      status: string
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'Int'>
    readonly patientId: FieldRef<"Appointment", 'Int'>
    readonly doctorId: FieldRef<"Appointment", 'Int'>
    readonly date: FieldRef<"Appointment", 'DateTime'>
    readonly status: FieldRef<"Appointment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model OPDRecord
   */

  export type AggregateOPDRecord = {
    _count: OPDRecordCountAggregateOutputType | null
    _avg: OPDRecordAvgAggregateOutputType | null
    _sum: OPDRecordSumAggregateOutputType | null
    _min: OPDRecordMinAggregateOutputType | null
    _max: OPDRecordMaxAggregateOutputType | null
  }

  export type OPDRecordAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
  }

  export type OPDRecordSumAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
  }

  export type OPDRecordMinAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
    notes: string | null
    prescription: string | null
    date: Date | null
  }

  export type OPDRecordMaxAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
    notes: string | null
    prescription: string | null
    date: Date | null
  }

  export type OPDRecordCountAggregateOutputType = {
    id: number
    patientId: number
    doctorId: number
    notes: number
    prescription: number
    date: number
    _all: number
  }


  export type OPDRecordAvgAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
  }

  export type OPDRecordSumAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
  }

  export type OPDRecordMinAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    notes?: true
    prescription?: true
    date?: true
  }

  export type OPDRecordMaxAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    notes?: true
    prescription?: true
    date?: true
  }

  export type OPDRecordCountAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    notes?: true
    prescription?: true
    date?: true
    _all?: true
  }

  export type OPDRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OPDRecord to aggregate.
     */
    where?: OPDRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OPDRecords to fetch.
     */
    orderBy?: OPDRecordOrderByWithRelationInput | OPDRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OPDRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OPDRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OPDRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OPDRecords
    **/
    _count?: true | OPDRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OPDRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OPDRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OPDRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OPDRecordMaxAggregateInputType
  }

  export type GetOPDRecordAggregateType<T extends OPDRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateOPDRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOPDRecord[P]>
      : GetScalarType<T[P], AggregateOPDRecord[P]>
  }




  export type OPDRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OPDRecordWhereInput
    orderBy?: OPDRecordOrderByWithAggregationInput | OPDRecordOrderByWithAggregationInput[]
    by: OPDRecordScalarFieldEnum[] | OPDRecordScalarFieldEnum
    having?: OPDRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OPDRecordCountAggregateInputType | true
    _avg?: OPDRecordAvgAggregateInputType
    _sum?: OPDRecordSumAggregateInputType
    _min?: OPDRecordMinAggregateInputType
    _max?: OPDRecordMaxAggregateInputType
  }

  export type OPDRecordGroupByOutputType = {
    id: number
    patientId: number
    doctorId: number
    notes: string
    prescription: string
    date: Date
    _count: OPDRecordCountAggregateOutputType | null
    _avg: OPDRecordAvgAggregateOutputType | null
    _sum: OPDRecordSumAggregateOutputType | null
    _min: OPDRecordMinAggregateOutputType | null
    _max: OPDRecordMaxAggregateOutputType | null
  }

  type GetOPDRecordGroupByPayload<T extends OPDRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OPDRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OPDRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OPDRecordGroupByOutputType[P]>
            : GetScalarType<T[P], OPDRecordGroupByOutputType[P]>
        }
      >
    >


  export type OPDRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    notes?: boolean
    prescription?: boolean
    date?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oPDRecord"]>

  export type OPDRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    notes?: boolean
    prescription?: boolean
    date?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oPDRecord"]>

  export type OPDRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    notes?: boolean
    prescription?: boolean
    date?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oPDRecord"]>

  export type OPDRecordSelectScalar = {
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    notes?: boolean
    prescription?: boolean
    date?: boolean
  }

  export type OPDRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "doctorId" | "notes" | "prescription" | "date", ExtArgs["result"]["oPDRecord"]>
  export type OPDRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type OPDRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type OPDRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }

  export type $OPDRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OPDRecord"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      doctor: Prisma.$DoctorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patientId: number
      doctorId: number
      notes: string
      prescription: string
      date: Date
    }, ExtArgs["result"]["oPDRecord"]>
    composites: {}
  }

  type OPDRecordGetPayload<S extends boolean | null | undefined | OPDRecordDefaultArgs> = $Result.GetResult<Prisma.$OPDRecordPayload, S>

  type OPDRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OPDRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OPDRecordCountAggregateInputType | true
    }

  export interface OPDRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OPDRecord'], meta: { name: 'OPDRecord' } }
    /**
     * Find zero or one OPDRecord that matches the filter.
     * @param {OPDRecordFindUniqueArgs} args - Arguments to find a OPDRecord
     * @example
     * // Get one OPDRecord
     * const oPDRecord = await prisma.oPDRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OPDRecordFindUniqueArgs>(args: SelectSubset<T, OPDRecordFindUniqueArgs<ExtArgs>>): Prisma__OPDRecordClient<$Result.GetResult<Prisma.$OPDRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OPDRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OPDRecordFindUniqueOrThrowArgs} args - Arguments to find a OPDRecord
     * @example
     * // Get one OPDRecord
     * const oPDRecord = await prisma.oPDRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OPDRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, OPDRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OPDRecordClient<$Result.GetResult<Prisma.$OPDRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OPDRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OPDRecordFindFirstArgs} args - Arguments to find a OPDRecord
     * @example
     * // Get one OPDRecord
     * const oPDRecord = await prisma.oPDRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OPDRecordFindFirstArgs>(args?: SelectSubset<T, OPDRecordFindFirstArgs<ExtArgs>>): Prisma__OPDRecordClient<$Result.GetResult<Prisma.$OPDRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OPDRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OPDRecordFindFirstOrThrowArgs} args - Arguments to find a OPDRecord
     * @example
     * // Get one OPDRecord
     * const oPDRecord = await prisma.oPDRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OPDRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, OPDRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__OPDRecordClient<$Result.GetResult<Prisma.$OPDRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OPDRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OPDRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OPDRecords
     * const oPDRecords = await prisma.oPDRecord.findMany()
     * 
     * // Get first 10 OPDRecords
     * const oPDRecords = await prisma.oPDRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oPDRecordWithIdOnly = await prisma.oPDRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OPDRecordFindManyArgs>(args?: SelectSubset<T, OPDRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OPDRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OPDRecord.
     * @param {OPDRecordCreateArgs} args - Arguments to create a OPDRecord.
     * @example
     * // Create one OPDRecord
     * const OPDRecord = await prisma.oPDRecord.create({
     *   data: {
     *     // ... data to create a OPDRecord
     *   }
     * })
     * 
     */
    create<T extends OPDRecordCreateArgs>(args: SelectSubset<T, OPDRecordCreateArgs<ExtArgs>>): Prisma__OPDRecordClient<$Result.GetResult<Prisma.$OPDRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OPDRecords.
     * @param {OPDRecordCreateManyArgs} args - Arguments to create many OPDRecords.
     * @example
     * // Create many OPDRecords
     * const oPDRecord = await prisma.oPDRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OPDRecordCreateManyArgs>(args?: SelectSubset<T, OPDRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OPDRecords and returns the data saved in the database.
     * @param {OPDRecordCreateManyAndReturnArgs} args - Arguments to create many OPDRecords.
     * @example
     * // Create many OPDRecords
     * const oPDRecord = await prisma.oPDRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OPDRecords and only return the `id`
     * const oPDRecordWithIdOnly = await prisma.oPDRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OPDRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, OPDRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OPDRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OPDRecord.
     * @param {OPDRecordDeleteArgs} args - Arguments to delete one OPDRecord.
     * @example
     * // Delete one OPDRecord
     * const OPDRecord = await prisma.oPDRecord.delete({
     *   where: {
     *     // ... filter to delete one OPDRecord
     *   }
     * })
     * 
     */
    delete<T extends OPDRecordDeleteArgs>(args: SelectSubset<T, OPDRecordDeleteArgs<ExtArgs>>): Prisma__OPDRecordClient<$Result.GetResult<Prisma.$OPDRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OPDRecord.
     * @param {OPDRecordUpdateArgs} args - Arguments to update one OPDRecord.
     * @example
     * // Update one OPDRecord
     * const oPDRecord = await prisma.oPDRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OPDRecordUpdateArgs>(args: SelectSubset<T, OPDRecordUpdateArgs<ExtArgs>>): Prisma__OPDRecordClient<$Result.GetResult<Prisma.$OPDRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OPDRecords.
     * @param {OPDRecordDeleteManyArgs} args - Arguments to filter OPDRecords to delete.
     * @example
     * // Delete a few OPDRecords
     * const { count } = await prisma.oPDRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OPDRecordDeleteManyArgs>(args?: SelectSubset<T, OPDRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OPDRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OPDRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OPDRecords
     * const oPDRecord = await prisma.oPDRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OPDRecordUpdateManyArgs>(args: SelectSubset<T, OPDRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OPDRecords and returns the data updated in the database.
     * @param {OPDRecordUpdateManyAndReturnArgs} args - Arguments to update many OPDRecords.
     * @example
     * // Update many OPDRecords
     * const oPDRecord = await prisma.oPDRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OPDRecords and only return the `id`
     * const oPDRecordWithIdOnly = await prisma.oPDRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OPDRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, OPDRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OPDRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OPDRecord.
     * @param {OPDRecordUpsertArgs} args - Arguments to update or create a OPDRecord.
     * @example
     * // Update or create a OPDRecord
     * const oPDRecord = await prisma.oPDRecord.upsert({
     *   create: {
     *     // ... data to create a OPDRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OPDRecord we want to update
     *   }
     * })
     */
    upsert<T extends OPDRecordUpsertArgs>(args: SelectSubset<T, OPDRecordUpsertArgs<ExtArgs>>): Prisma__OPDRecordClient<$Result.GetResult<Prisma.$OPDRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OPDRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OPDRecordCountArgs} args - Arguments to filter OPDRecords to count.
     * @example
     * // Count the number of OPDRecords
     * const count = await prisma.oPDRecord.count({
     *   where: {
     *     // ... the filter for the OPDRecords we want to count
     *   }
     * })
    **/
    count<T extends OPDRecordCountArgs>(
      args?: Subset<T, OPDRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OPDRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OPDRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OPDRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OPDRecordAggregateArgs>(args: Subset<T, OPDRecordAggregateArgs>): Prisma.PrismaPromise<GetOPDRecordAggregateType<T>>

    /**
     * Group by OPDRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OPDRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OPDRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OPDRecordGroupByArgs['orderBy'] }
        : { orderBy?: OPDRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OPDRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOPDRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OPDRecord model
   */
  readonly fields: OPDRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OPDRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OPDRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OPDRecord model
   */
  interface OPDRecordFieldRefs {
    readonly id: FieldRef<"OPDRecord", 'Int'>
    readonly patientId: FieldRef<"OPDRecord", 'Int'>
    readonly doctorId: FieldRef<"OPDRecord", 'Int'>
    readonly notes: FieldRef<"OPDRecord", 'String'>
    readonly prescription: FieldRef<"OPDRecord", 'String'>
    readonly date: FieldRef<"OPDRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OPDRecord findUnique
   */
  export type OPDRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPDRecord
     */
    select?: OPDRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OPDRecord
     */
    omit?: OPDRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OPDRecordInclude<ExtArgs> | null
    /**
     * Filter, which OPDRecord to fetch.
     */
    where: OPDRecordWhereUniqueInput
  }

  /**
   * OPDRecord findUniqueOrThrow
   */
  export type OPDRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPDRecord
     */
    select?: OPDRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OPDRecord
     */
    omit?: OPDRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OPDRecordInclude<ExtArgs> | null
    /**
     * Filter, which OPDRecord to fetch.
     */
    where: OPDRecordWhereUniqueInput
  }

  /**
   * OPDRecord findFirst
   */
  export type OPDRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPDRecord
     */
    select?: OPDRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OPDRecord
     */
    omit?: OPDRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OPDRecordInclude<ExtArgs> | null
    /**
     * Filter, which OPDRecord to fetch.
     */
    where?: OPDRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OPDRecords to fetch.
     */
    orderBy?: OPDRecordOrderByWithRelationInput | OPDRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OPDRecords.
     */
    cursor?: OPDRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OPDRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OPDRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OPDRecords.
     */
    distinct?: OPDRecordScalarFieldEnum | OPDRecordScalarFieldEnum[]
  }

  /**
   * OPDRecord findFirstOrThrow
   */
  export type OPDRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPDRecord
     */
    select?: OPDRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OPDRecord
     */
    omit?: OPDRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OPDRecordInclude<ExtArgs> | null
    /**
     * Filter, which OPDRecord to fetch.
     */
    where?: OPDRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OPDRecords to fetch.
     */
    orderBy?: OPDRecordOrderByWithRelationInput | OPDRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OPDRecords.
     */
    cursor?: OPDRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OPDRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OPDRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OPDRecords.
     */
    distinct?: OPDRecordScalarFieldEnum | OPDRecordScalarFieldEnum[]
  }

  /**
   * OPDRecord findMany
   */
  export type OPDRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPDRecord
     */
    select?: OPDRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OPDRecord
     */
    omit?: OPDRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OPDRecordInclude<ExtArgs> | null
    /**
     * Filter, which OPDRecords to fetch.
     */
    where?: OPDRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OPDRecords to fetch.
     */
    orderBy?: OPDRecordOrderByWithRelationInput | OPDRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OPDRecords.
     */
    cursor?: OPDRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OPDRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OPDRecords.
     */
    skip?: number
    distinct?: OPDRecordScalarFieldEnum | OPDRecordScalarFieldEnum[]
  }

  /**
   * OPDRecord create
   */
  export type OPDRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPDRecord
     */
    select?: OPDRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OPDRecord
     */
    omit?: OPDRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OPDRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a OPDRecord.
     */
    data: XOR<OPDRecordCreateInput, OPDRecordUncheckedCreateInput>
  }

  /**
   * OPDRecord createMany
   */
  export type OPDRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OPDRecords.
     */
    data: OPDRecordCreateManyInput | OPDRecordCreateManyInput[]
  }

  /**
   * OPDRecord createManyAndReturn
   */
  export type OPDRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPDRecord
     */
    select?: OPDRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OPDRecord
     */
    omit?: OPDRecordOmit<ExtArgs> | null
    /**
     * The data used to create many OPDRecords.
     */
    data: OPDRecordCreateManyInput | OPDRecordCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OPDRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OPDRecord update
   */
  export type OPDRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPDRecord
     */
    select?: OPDRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OPDRecord
     */
    omit?: OPDRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OPDRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a OPDRecord.
     */
    data: XOR<OPDRecordUpdateInput, OPDRecordUncheckedUpdateInput>
    /**
     * Choose, which OPDRecord to update.
     */
    where: OPDRecordWhereUniqueInput
  }

  /**
   * OPDRecord updateMany
   */
  export type OPDRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OPDRecords.
     */
    data: XOR<OPDRecordUpdateManyMutationInput, OPDRecordUncheckedUpdateManyInput>
    /**
     * Filter which OPDRecords to update
     */
    where?: OPDRecordWhereInput
    /**
     * Limit how many OPDRecords to update.
     */
    limit?: number
  }

  /**
   * OPDRecord updateManyAndReturn
   */
  export type OPDRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPDRecord
     */
    select?: OPDRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OPDRecord
     */
    omit?: OPDRecordOmit<ExtArgs> | null
    /**
     * The data used to update OPDRecords.
     */
    data: XOR<OPDRecordUpdateManyMutationInput, OPDRecordUncheckedUpdateManyInput>
    /**
     * Filter which OPDRecords to update
     */
    where?: OPDRecordWhereInput
    /**
     * Limit how many OPDRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OPDRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OPDRecord upsert
   */
  export type OPDRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPDRecord
     */
    select?: OPDRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OPDRecord
     */
    omit?: OPDRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OPDRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the OPDRecord to update in case it exists.
     */
    where: OPDRecordWhereUniqueInput
    /**
     * In case the OPDRecord found by the `where` argument doesn't exist, create a new OPDRecord with this data.
     */
    create: XOR<OPDRecordCreateInput, OPDRecordUncheckedCreateInput>
    /**
     * In case the OPDRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OPDRecordUpdateInput, OPDRecordUncheckedUpdateInput>
  }

  /**
   * OPDRecord delete
   */
  export type OPDRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPDRecord
     */
    select?: OPDRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OPDRecord
     */
    omit?: OPDRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OPDRecordInclude<ExtArgs> | null
    /**
     * Filter which OPDRecord to delete.
     */
    where: OPDRecordWhereUniqueInput
  }

  /**
   * OPDRecord deleteMany
   */
  export type OPDRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OPDRecords to delete
     */
    where?: OPDRecordWhereInput
    /**
     * Limit how many OPDRecords to delete.
     */
    limit?: number
  }

  /**
   * OPDRecord without action
   */
  export type OPDRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPDRecord
     */
    select?: OPDRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OPDRecord
     */
    omit?: OPDRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OPDRecordInclude<ExtArgs> | null
  }


  /**
   * Model IPDAdmission
   */

  export type AggregateIPDAdmission = {
    _count: IPDAdmissionCountAggregateOutputType | null
    _avg: IPDAdmissionAvgAggregateOutputType | null
    _sum: IPDAdmissionSumAggregateOutputType | null
    _min: IPDAdmissionMinAggregateOutputType | null
    _max: IPDAdmissionMaxAggregateOutputType | null
  }

  export type IPDAdmissionAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
    roomId: number | null
  }

  export type IPDAdmissionSumAggregateOutputType = {
    id: number | null
    patientId: number | null
    roomId: number | null
  }

  export type IPDAdmissionMinAggregateOutputType = {
    id: number | null
    patientId: number | null
    roomId: number | null
    admitDate: Date | null
    dischargeDate: Date | null
  }

  export type IPDAdmissionMaxAggregateOutputType = {
    id: number | null
    patientId: number | null
    roomId: number | null
    admitDate: Date | null
    dischargeDate: Date | null
  }

  export type IPDAdmissionCountAggregateOutputType = {
    id: number
    patientId: number
    roomId: number
    admitDate: number
    dischargeDate: number
    _all: number
  }


  export type IPDAdmissionAvgAggregateInputType = {
    id?: true
    patientId?: true
    roomId?: true
  }

  export type IPDAdmissionSumAggregateInputType = {
    id?: true
    patientId?: true
    roomId?: true
  }

  export type IPDAdmissionMinAggregateInputType = {
    id?: true
    patientId?: true
    roomId?: true
    admitDate?: true
    dischargeDate?: true
  }

  export type IPDAdmissionMaxAggregateInputType = {
    id?: true
    patientId?: true
    roomId?: true
    admitDate?: true
    dischargeDate?: true
  }

  export type IPDAdmissionCountAggregateInputType = {
    id?: true
    patientId?: true
    roomId?: true
    admitDate?: true
    dischargeDate?: true
    _all?: true
  }

  export type IPDAdmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IPDAdmission to aggregate.
     */
    where?: IPDAdmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IPDAdmissions to fetch.
     */
    orderBy?: IPDAdmissionOrderByWithRelationInput | IPDAdmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IPDAdmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IPDAdmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IPDAdmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IPDAdmissions
    **/
    _count?: true | IPDAdmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IPDAdmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IPDAdmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IPDAdmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IPDAdmissionMaxAggregateInputType
  }

  export type GetIPDAdmissionAggregateType<T extends IPDAdmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateIPDAdmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIPDAdmission[P]>
      : GetScalarType<T[P], AggregateIPDAdmission[P]>
  }




  export type IPDAdmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IPDAdmissionWhereInput
    orderBy?: IPDAdmissionOrderByWithAggregationInput | IPDAdmissionOrderByWithAggregationInput[]
    by: IPDAdmissionScalarFieldEnum[] | IPDAdmissionScalarFieldEnum
    having?: IPDAdmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IPDAdmissionCountAggregateInputType | true
    _avg?: IPDAdmissionAvgAggregateInputType
    _sum?: IPDAdmissionSumAggregateInputType
    _min?: IPDAdmissionMinAggregateInputType
    _max?: IPDAdmissionMaxAggregateInputType
  }

  export type IPDAdmissionGroupByOutputType = {
    id: number
    patientId: number
    roomId: number
    admitDate: Date
    dischargeDate: Date | null
    _count: IPDAdmissionCountAggregateOutputType | null
    _avg: IPDAdmissionAvgAggregateOutputType | null
    _sum: IPDAdmissionSumAggregateOutputType | null
    _min: IPDAdmissionMinAggregateOutputType | null
    _max: IPDAdmissionMaxAggregateOutputType | null
  }

  type GetIPDAdmissionGroupByPayload<T extends IPDAdmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IPDAdmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IPDAdmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IPDAdmissionGroupByOutputType[P]>
            : GetScalarType<T[P], IPDAdmissionGroupByOutputType[P]>
        }
      >
    >


  export type IPDAdmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    roomId?: boolean
    admitDate?: boolean
    dischargeDate?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["iPDAdmission"]>

  export type IPDAdmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    roomId?: boolean
    admitDate?: boolean
    dischargeDate?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["iPDAdmission"]>

  export type IPDAdmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    roomId?: boolean
    admitDate?: boolean
    dischargeDate?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["iPDAdmission"]>

  export type IPDAdmissionSelectScalar = {
    id?: boolean
    patientId?: boolean
    roomId?: boolean
    admitDate?: boolean
    dischargeDate?: boolean
  }

  export type IPDAdmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "roomId" | "admitDate" | "dischargeDate", ExtArgs["result"]["iPDAdmission"]>
  export type IPDAdmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type IPDAdmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type IPDAdmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $IPDAdmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IPDAdmission"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patientId: number
      roomId: number
      admitDate: Date
      dischargeDate: Date | null
    }, ExtArgs["result"]["iPDAdmission"]>
    composites: {}
  }

  type IPDAdmissionGetPayload<S extends boolean | null | undefined | IPDAdmissionDefaultArgs> = $Result.GetResult<Prisma.$IPDAdmissionPayload, S>

  type IPDAdmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IPDAdmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IPDAdmissionCountAggregateInputType | true
    }

  export interface IPDAdmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IPDAdmission'], meta: { name: 'IPDAdmission' } }
    /**
     * Find zero or one IPDAdmission that matches the filter.
     * @param {IPDAdmissionFindUniqueArgs} args - Arguments to find a IPDAdmission
     * @example
     * // Get one IPDAdmission
     * const iPDAdmission = await prisma.iPDAdmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IPDAdmissionFindUniqueArgs>(args: SelectSubset<T, IPDAdmissionFindUniqueArgs<ExtArgs>>): Prisma__IPDAdmissionClient<$Result.GetResult<Prisma.$IPDAdmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IPDAdmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IPDAdmissionFindUniqueOrThrowArgs} args - Arguments to find a IPDAdmission
     * @example
     * // Get one IPDAdmission
     * const iPDAdmission = await prisma.iPDAdmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IPDAdmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, IPDAdmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IPDAdmissionClient<$Result.GetResult<Prisma.$IPDAdmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IPDAdmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IPDAdmissionFindFirstArgs} args - Arguments to find a IPDAdmission
     * @example
     * // Get one IPDAdmission
     * const iPDAdmission = await prisma.iPDAdmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IPDAdmissionFindFirstArgs>(args?: SelectSubset<T, IPDAdmissionFindFirstArgs<ExtArgs>>): Prisma__IPDAdmissionClient<$Result.GetResult<Prisma.$IPDAdmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IPDAdmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IPDAdmissionFindFirstOrThrowArgs} args - Arguments to find a IPDAdmission
     * @example
     * // Get one IPDAdmission
     * const iPDAdmission = await prisma.iPDAdmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IPDAdmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, IPDAdmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__IPDAdmissionClient<$Result.GetResult<Prisma.$IPDAdmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IPDAdmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IPDAdmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IPDAdmissions
     * const iPDAdmissions = await prisma.iPDAdmission.findMany()
     * 
     * // Get first 10 IPDAdmissions
     * const iPDAdmissions = await prisma.iPDAdmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const iPDAdmissionWithIdOnly = await prisma.iPDAdmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IPDAdmissionFindManyArgs>(args?: SelectSubset<T, IPDAdmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IPDAdmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IPDAdmission.
     * @param {IPDAdmissionCreateArgs} args - Arguments to create a IPDAdmission.
     * @example
     * // Create one IPDAdmission
     * const IPDAdmission = await prisma.iPDAdmission.create({
     *   data: {
     *     // ... data to create a IPDAdmission
     *   }
     * })
     * 
     */
    create<T extends IPDAdmissionCreateArgs>(args: SelectSubset<T, IPDAdmissionCreateArgs<ExtArgs>>): Prisma__IPDAdmissionClient<$Result.GetResult<Prisma.$IPDAdmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IPDAdmissions.
     * @param {IPDAdmissionCreateManyArgs} args - Arguments to create many IPDAdmissions.
     * @example
     * // Create many IPDAdmissions
     * const iPDAdmission = await prisma.iPDAdmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IPDAdmissionCreateManyArgs>(args?: SelectSubset<T, IPDAdmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IPDAdmissions and returns the data saved in the database.
     * @param {IPDAdmissionCreateManyAndReturnArgs} args - Arguments to create many IPDAdmissions.
     * @example
     * // Create many IPDAdmissions
     * const iPDAdmission = await prisma.iPDAdmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IPDAdmissions and only return the `id`
     * const iPDAdmissionWithIdOnly = await prisma.iPDAdmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IPDAdmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, IPDAdmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IPDAdmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IPDAdmission.
     * @param {IPDAdmissionDeleteArgs} args - Arguments to delete one IPDAdmission.
     * @example
     * // Delete one IPDAdmission
     * const IPDAdmission = await prisma.iPDAdmission.delete({
     *   where: {
     *     // ... filter to delete one IPDAdmission
     *   }
     * })
     * 
     */
    delete<T extends IPDAdmissionDeleteArgs>(args: SelectSubset<T, IPDAdmissionDeleteArgs<ExtArgs>>): Prisma__IPDAdmissionClient<$Result.GetResult<Prisma.$IPDAdmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IPDAdmission.
     * @param {IPDAdmissionUpdateArgs} args - Arguments to update one IPDAdmission.
     * @example
     * // Update one IPDAdmission
     * const iPDAdmission = await prisma.iPDAdmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IPDAdmissionUpdateArgs>(args: SelectSubset<T, IPDAdmissionUpdateArgs<ExtArgs>>): Prisma__IPDAdmissionClient<$Result.GetResult<Prisma.$IPDAdmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IPDAdmissions.
     * @param {IPDAdmissionDeleteManyArgs} args - Arguments to filter IPDAdmissions to delete.
     * @example
     * // Delete a few IPDAdmissions
     * const { count } = await prisma.iPDAdmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IPDAdmissionDeleteManyArgs>(args?: SelectSubset<T, IPDAdmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IPDAdmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IPDAdmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IPDAdmissions
     * const iPDAdmission = await prisma.iPDAdmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IPDAdmissionUpdateManyArgs>(args: SelectSubset<T, IPDAdmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IPDAdmissions and returns the data updated in the database.
     * @param {IPDAdmissionUpdateManyAndReturnArgs} args - Arguments to update many IPDAdmissions.
     * @example
     * // Update many IPDAdmissions
     * const iPDAdmission = await prisma.iPDAdmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IPDAdmissions and only return the `id`
     * const iPDAdmissionWithIdOnly = await prisma.iPDAdmission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IPDAdmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, IPDAdmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IPDAdmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IPDAdmission.
     * @param {IPDAdmissionUpsertArgs} args - Arguments to update or create a IPDAdmission.
     * @example
     * // Update or create a IPDAdmission
     * const iPDAdmission = await prisma.iPDAdmission.upsert({
     *   create: {
     *     // ... data to create a IPDAdmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IPDAdmission we want to update
     *   }
     * })
     */
    upsert<T extends IPDAdmissionUpsertArgs>(args: SelectSubset<T, IPDAdmissionUpsertArgs<ExtArgs>>): Prisma__IPDAdmissionClient<$Result.GetResult<Prisma.$IPDAdmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IPDAdmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IPDAdmissionCountArgs} args - Arguments to filter IPDAdmissions to count.
     * @example
     * // Count the number of IPDAdmissions
     * const count = await prisma.iPDAdmission.count({
     *   where: {
     *     // ... the filter for the IPDAdmissions we want to count
     *   }
     * })
    **/
    count<T extends IPDAdmissionCountArgs>(
      args?: Subset<T, IPDAdmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IPDAdmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IPDAdmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IPDAdmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IPDAdmissionAggregateArgs>(args: Subset<T, IPDAdmissionAggregateArgs>): Prisma.PrismaPromise<GetIPDAdmissionAggregateType<T>>

    /**
     * Group by IPDAdmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IPDAdmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IPDAdmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IPDAdmissionGroupByArgs['orderBy'] }
        : { orderBy?: IPDAdmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IPDAdmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIPDAdmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IPDAdmission model
   */
  readonly fields: IPDAdmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IPDAdmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IPDAdmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IPDAdmission model
   */
  interface IPDAdmissionFieldRefs {
    readonly id: FieldRef<"IPDAdmission", 'Int'>
    readonly patientId: FieldRef<"IPDAdmission", 'Int'>
    readonly roomId: FieldRef<"IPDAdmission", 'Int'>
    readonly admitDate: FieldRef<"IPDAdmission", 'DateTime'>
    readonly dischargeDate: FieldRef<"IPDAdmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IPDAdmission findUnique
   */
  export type IPDAdmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IPDAdmission
     */
    select?: IPDAdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IPDAdmission
     */
    omit?: IPDAdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IPDAdmissionInclude<ExtArgs> | null
    /**
     * Filter, which IPDAdmission to fetch.
     */
    where: IPDAdmissionWhereUniqueInput
  }

  /**
   * IPDAdmission findUniqueOrThrow
   */
  export type IPDAdmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IPDAdmission
     */
    select?: IPDAdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IPDAdmission
     */
    omit?: IPDAdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IPDAdmissionInclude<ExtArgs> | null
    /**
     * Filter, which IPDAdmission to fetch.
     */
    where: IPDAdmissionWhereUniqueInput
  }

  /**
   * IPDAdmission findFirst
   */
  export type IPDAdmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IPDAdmission
     */
    select?: IPDAdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IPDAdmission
     */
    omit?: IPDAdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IPDAdmissionInclude<ExtArgs> | null
    /**
     * Filter, which IPDAdmission to fetch.
     */
    where?: IPDAdmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IPDAdmissions to fetch.
     */
    orderBy?: IPDAdmissionOrderByWithRelationInput | IPDAdmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IPDAdmissions.
     */
    cursor?: IPDAdmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IPDAdmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IPDAdmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IPDAdmissions.
     */
    distinct?: IPDAdmissionScalarFieldEnum | IPDAdmissionScalarFieldEnum[]
  }

  /**
   * IPDAdmission findFirstOrThrow
   */
  export type IPDAdmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IPDAdmission
     */
    select?: IPDAdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IPDAdmission
     */
    omit?: IPDAdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IPDAdmissionInclude<ExtArgs> | null
    /**
     * Filter, which IPDAdmission to fetch.
     */
    where?: IPDAdmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IPDAdmissions to fetch.
     */
    orderBy?: IPDAdmissionOrderByWithRelationInput | IPDAdmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IPDAdmissions.
     */
    cursor?: IPDAdmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IPDAdmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IPDAdmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IPDAdmissions.
     */
    distinct?: IPDAdmissionScalarFieldEnum | IPDAdmissionScalarFieldEnum[]
  }

  /**
   * IPDAdmission findMany
   */
  export type IPDAdmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IPDAdmission
     */
    select?: IPDAdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IPDAdmission
     */
    omit?: IPDAdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IPDAdmissionInclude<ExtArgs> | null
    /**
     * Filter, which IPDAdmissions to fetch.
     */
    where?: IPDAdmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IPDAdmissions to fetch.
     */
    orderBy?: IPDAdmissionOrderByWithRelationInput | IPDAdmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IPDAdmissions.
     */
    cursor?: IPDAdmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IPDAdmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IPDAdmissions.
     */
    skip?: number
    distinct?: IPDAdmissionScalarFieldEnum | IPDAdmissionScalarFieldEnum[]
  }

  /**
   * IPDAdmission create
   */
  export type IPDAdmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IPDAdmission
     */
    select?: IPDAdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IPDAdmission
     */
    omit?: IPDAdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IPDAdmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a IPDAdmission.
     */
    data: XOR<IPDAdmissionCreateInput, IPDAdmissionUncheckedCreateInput>
  }

  /**
   * IPDAdmission createMany
   */
  export type IPDAdmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IPDAdmissions.
     */
    data: IPDAdmissionCreateManyInput | IPDAdmissionCreateManyInput[]
  }

  /**
   * IPDAdmission createManyAndReturn
   */
  export type IPDAdmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IPDAdmission
     */
    select?: IPDAdmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IPDAdmission
     */
    omit?: IPDAdmissionOmit<ExtArgs> | null
    /**
     * The data used to create many IPDAdmissions.
     */
    data: IPDAdmissionCreateManyInput | IPDAdmissionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IPDAdmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IPDAdmission update
   */
  export type IPDAdmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IPDAdmission
     */
    select?: IPDAdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IPDAdmission
     */
    omit?: IPDAdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IPDAdmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a IPDAdmission.
     */
    data: XOR<IPDAdmissionUpdateInput, IPDAdmissionUncheckedUpdateInput>
    /**
     * Choose, which IPDAdmission to update.
     */
    where: IPDAdmissionWhereUniqueInput
  }

  /**
   * IPDAdmission updateMany
   */
  export type IPDAdmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IPDAdmissions.
     */
    data: XOR<IPDAdmissionUpdateManyMutationInput, IPDAdmissionUncheckedUpdateManyInput>
    /**
     * Filter which IPDAdmissions to update
     */
    where?: IPDAdmissionWhereInput
    /**
     * Limit how many IPDAdmissions to update.
     */
    limit?: number
  }

  /**
   * IPDAdmission updateManyAndReturn
   */
  export type IPDAdmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IPDAdmission
     */
    select?: IPDAdmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IPDAdmission
     */
    omit?: IPDAdmissionOmit<ExtArgs> | null
    /**
     * The data used to update IPDAdmissions.
     */
    data: XOR<IPDAdmissionUpdateManyMutationInput, IPDAdmissionUncheckedUpdateManyInput>
    /**
     * Filter which IPDAdmissions to update
     */
    where?: IPDAdmissionWhereInput
    /**
     * Limit how many IPDAdmissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IPDAdmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IPDAdmission upsert
   */
  export type IPDAdmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IPDAdmission
     */
    select?: IPDAdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IPDAdmission
     */
    omit?: IPDAdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IPDAdmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the IPDAdmission to update in case it exists.
     */
    where: IPDAdmissionWhereUniqueInput
    /**
     * In case the IPDAdmission found by the `where` argument doesn't exist, create a new IPDAdmission with this data.
     */
    create: XOR<IPDAdmissionCreateInput, IPDAdmissionUncheckedCreateInput>
    /**
     * In case the IPDAdmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IPDAdmissionUpdateInput, IPDAdmissionUncheckedUpdateInput>
  }

  /**
   * IPDAdmission delete
   */
  export type IPDAdmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IPDAdmission
     */
    select?: IPDAdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IPDAdmission
     */
    omit?: IPDAdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IPDAdmissionInclude<ExtArgs> | null
    /**
     * Filter which IPDAdmission to delete.
     */
    where: IPDAdmissionWhereUniqueInput
  }

  /**
   * IPDAdmission deleteMany
   */
  export type IPDAdmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IPDAdmissions to delete
     */
    where?: IPDAdmissionWhereInput
    /**
     * Limit how many IPDAdmissions to delete.
     */
    limit?: number
  }

  /**
   * IPDAdmission without action
   */
  export type IPDAdmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IPDAdmission
     */
    select?: IPDAdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IPDAdmission
     */
    omit?: IPDAdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IPDAdmissionInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    id: number | null
  }

  export type RoomSumAggregateOutputType = {
    id: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: number | null
    roomType: string | null
    isOccupied: boolean | null
  }

  export type RoomMaxAggregateOutputType = {
    id: number | null
    roomType: string | null
    isOccupied: boolean | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    roomType: number
    isOccupied: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    id?: true
  }

  export type RoomSumAggregateInputType = {
    id?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    roomType?: true
    isOccupied?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    roomType?: true
    isOccupied?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    roomType?: true
    isOccupied?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: number
    roomType: string
    isOccupied: boolean
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomType?: boolean
    isOccupied?: boolean
    ipdAdmissions?: boolean | Room$ipdAdmissionsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomType?: boolean
    isOccupied?: boolean
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomType?: boolean
    isOccupied?: boolean
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    roomType?: boolean
    isOccupied?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomType" | "isOccupied", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ipdAdmissions?: boolean | Room$ipdAdmissionsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      ipdAdmissions: Prisma.$IPDAdmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roomType: string
      isOccupied: boolean
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ipdAdmissions<T extends Room$ipdAdmissionsArgs<ExtArgs> = {}>(args?: Subset<T, Room$ipdAdmissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IPDAdmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'Int'>
    readonly roomType: FieldRef<"Room", 'String'>
    readonly isOccupied: FieldRef<"Room", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.ipdAdmissions
   */
  export type Room$ipdAdmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IPDAdmission
     */
    select?: IPDAdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IPDAdmission
     */
    omit?: IPDAdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IPDAdmissionInclude<ExtArgs> | null
    where?: IPDAdmissionWhereInput
    orderBy?: IPDAdmissionOrderByWithRelationInput | IPDAdmissionOrderByWithRelationInput[]
    cursor?: IPDAdmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IPDAdmissionScalarFieldEnum | IPDAdmissionScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model LabTest
   */

  export type AggregateLabTest = {
    _count: LabTestCountAggregateOutputType | null
    _avg: LabTestAvgAggregateOutputType | null
    _sum: LabTestSumAggregateOutputType | null
    _min: LabTestMinAggregateOutputType | null
    _max: LabTestMaxAggregateOutputType | null
  }

  export type LabTestAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
  }

  export type LabTestSumAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
  }

  export type LabTestMinAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
    testType: string | null
    result: string | null
    status: string | null
  }

  export type LabTestMaxAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
    testType: string | null
    result: string | null
    status: string | null
  }

  export type LabTestCountAggregateOutputType = {
    id: number
    patientId: number
    doctorId: number
    testType: number
    result: number
    status: number
    _all: number
  }


  export type LabTestAvgAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
  }

  export type LabTestSumAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
  }

  export type LabTestMinAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    testType?: true
    result?: true
    status?: true
  }

  export type LabTestMaxAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    testType?: true
    result?: true
    status?: true
  }

  export type LabTestCountAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    testType?: true
    result?: true
    status?: true
    _all?: true
  }

  export type LabTestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabTest to aggregate.
     */
    where?: LabTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabTests to fetch.
     */
    orderBy?: LabTestOrderByWithRelationInput | LabTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LabTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LabTests
    **/
    _count?: true | LabTestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LabTestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LabTestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LabTestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LabTestMaxAggregateInputType
  }

  export type GetLabTestAggregateType<T extends LabTestAggregateArgs> = {
        [P in keyof T & keyof AggregateLabTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLabTest[P]>
      : GetScalarType<T[P], AggregateLabTest[P]>
  }




  export type LabTestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabTestWhereInput
    orderBy?: LabTestOrderByWithAggregationInput | LabTestOrderByWithAggregationInput[]
    by: LabTestScalarFieldEnum[] | LabTestScalarFieldEnum
    having?: LabTestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LabTestCountAggregateInputType | true
    _avg?: LabTestAvgAggregateInputType
    _sum?: LabTestSumAggregateInputType
    _min?: LabTestMinAggregateInputType
    _max?: LabTestMaxAggregateInputType
  }

  export type LabTestGroupByOutputType = {
    id: number
    patientId: number
    doctorId: number
    testType: string
    result: string | null
    status: string
    _count: LabTestCountAggregateOutputType | null
    _avg: LabTestAvgAggregateOutputType | null
    _sum: LabTestSumAggregateOutputType | null
    _min: LabTestMinAggregateOutputType | null
    _max: LabTestMaxAggregateOutputType | null
  }

  type GetLabTestGroupByPayload<T extends LabTestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LabTestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LabTestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LabTestGroupByOutputType[P]>
            : GetScalarType<T[P], LabTestGroupByOutputType[P]>
        }
      >
    >


  export type LabTestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    testType?: boolean
    result?: boolean
    status?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labTest"]>

  export type LabTestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    testType?: boolean
    result?: boolean
    status?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labTest"]>

  export type LabTestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    testType?: boolean
    result?: boolean
    status?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labTest"]>

  export type LabTestSelectScalar = {
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    testType?: boolean
    result?: boolean
    status?: boolean
  }

  export type LabTestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "doctorId" | "testType" | "result" | "status", ExtArgs["result"]["labTest"]>
  export type LabTestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type LabTestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type LabTestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }

  export type $LabTestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LabTest"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      doctor: Prisma.$DoctorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patientId: number
      doctorId: number
      testType: string
      result: string | null
      status: string
    }, ExtArgs["result"]["labTest"]>
    composites: {}
  }

  type LabTestGetPayload<S extends boolean | null | undefined | LabTestDefaultArgs> = $Result.GetResult<Prisma.$LabTestPayload, S>

  type LabTestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LabTestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LabTestCountAggregateInputType | true
    }

  export interface LabTestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LabTest'], meta: { name: 'LabTest' } }
    /**
     * Find zero or one LabTest that matches the filter.
     * @param {LabTestFindUniqueArgs} args - Arguments to find a LabTest
     * @example
     * // Get one LabTest
     * const labTest = await prisma.labTest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LabTestFindUniqueArgs>(args: SelectSubset<T, LabTestFindUniqueArgs<ExtArgs>>): Prisma__LabTestClient<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LabTest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LabTestFindUniqueOrThrowArgs} args - Arguments to find a LabTest
     * @example
     * // Get one LabTest
     * const labTest = await prisma.labTest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LabTestFindUniqueOrThrowArgs>(args: SelectSubset<T, LabTestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LabTestClient<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabTest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabTestFindFirstArgs} args - Arguments to find a LabTest
     * @example
     * // Get one LabTest
     * const labTest = await prisma.labTest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LabTestFindFirstArgs>(args?: SelectSubset<T, LabTestFindFirstArgs<ExtArgs>>): Prisma__LabTestClient<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabTest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabTestFindFirstOrThrowArgs} args - Arguments to find a LabTest
     * @example
     * // Get one LabTest
     * const labTest = await prisma.labTest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LabTestFindFirstOrThrowArgs>(args?: SelectSubset<T, LabTestFindFirstOrThrowArgs<ExtArgs>>): Prisma__LabTestClient<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LabTests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabTestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LabTests
     * const labTests = await prisma.labTest.findMany()
     * 
     * // Get first 10 LabTests
     * const labTests = await prisma.labTest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const labTestWithIdOnly = await prisma.labTest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LabTestFindManyArgs>(args?: SelectSubset<T, LabTestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LabTest.
     * @param {LabTestCreateArgs} args - Arguments to create a LabTest.
     * @example
     * // Create one LabTest
     * const LabTest = await prisma.labTest.create({
     *   data: {
     *     // ... data to create a LabTest
     *   }
     * })
     * 
     */
    create<T extends LabTestCreateArgs>(args: SelectSubset<T, LabTestCreateArgs<ExtArgs>>): Prisma__LabTestClient<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LabTests.
     * @param {LabTestCreateManyArgs} args - Arguments to create many LabTests.
     * @example
     * // Create many LabTests
     * const labTest = await prisma.labTest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LabTestCreateManyArgs>(args?: SelectSubset<T, LabTestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LabTests and returns the data saved in the database.
     * @param {LabTestCreateManyAndReturnArgs} args - Arguments to create many LabTests.
     * @example
     * // Create many LabTests
     * const labTest = await prisma.labTest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LabTests and only return the `id`
     * const labTestWithIdOnly = await prisma.labTest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LabTestCreateManyAndReturnArgs>(args?: SelectSubset<T, LabTestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LabTest.
     * @param {LabTestDeleteArgs} args - Arguments to delete one LabTest.
     * @example
     * // Delete one LabTest
     * const LabTest = await prisma.labTest.delete({
     *   where: {
     *     // ... filter to delete one LabTest
     *   }
     * })
     * 
     */
    delete<T extends LabTestDeleteArgs>(args: SelectSubset<T, LabTestDeleteArgs<ExtArgs>>): Prisma__LabTestClient<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LabTest.
     * @param {LabTestUpdateArgs} args - Arguments to update one LabTest.
     * @example
     * // Update one LabTest
     * const labTest = await prisma.labTest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LabTestUpdateArgs>(args: SelectSubset<T, LabTestUpdateArgs<ExtArgs>>): Prisma__LabTestClient<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LabTests.
     * @param {LabTestDeleteManyArgs} args - Arguments to filter LabTests to delete.
     * @example
     * // Delete a few LabTests
     * const { count } = await prisma.labTest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LabTestDeleteManyArgs>(args?: SelectSubset<T, LabTestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabTestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LabTests
     * const labTest = await prisma.labTest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LabTestUpdateManyArgs>(args: SelectSubset<T, LabTestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabTests and returns the data updated in the database.
     * @param {LabTestUpdateManyAndReturnArgs} args - Arguments to update many LabTests.
     * @example
     * // Update many LabTests
     * const labTest = await prisma.labTest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LabTests and only return the `id`
     * const labTestWithIdOnly = await prisma.labTest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LabTestUpdateManyAndReturnArgs>(args: SelectSubset<T, LabTestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LabTest.
     * @param {LabTestUpsertArgs} args - Arguments to update or create a LabTest.
     * @example
     * // Update or create a LabTest
     * const labTest = await prisma.labTest.upsert({
     *   create: {
     *     // ... data to create a LabTest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LabTest we want to update
     *   }
     * })
     */
    upsert<T extends LabTestUpsertArgs>(args: SelectSubset<T, LabTestUpsertArgs<ExtArgs>>): Prisma__LabTestClient<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LabTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabTestCountArgs} args - Arguments to filter LabTests to count.
     * @example
     * // Count the number of LabTests
     * const count = await prisma.labTest.count({
     *   where: {
     *     // ... the filter for the LabTests we want to count
     *   }
     * })
    **/
    count<T extends LabTestCountArgs>(
      args?: Subset<T, LabTestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LabTestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LabTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabTestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LabTestAggregateArgs>(args: Subset<T, LabTestAggregateArgs>): Prisma.PrismaPromise<GetLabTestAggregateType<T>>

    /**
     * Group by LabTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabTestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LabTestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LabTestGroupByArgs['orderBy'] }
        : { orderBy?: LabTestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LabTestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LabTest model
   */
  readonly fields: LabTestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LabTest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LabTestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LabTest model
   */
  interface LabTestFieldRefs {
    readonly id: FieldRef<"LabTest", 'Int'>
    readonly patientId: FieldRef<"LabTest", 'Int'>
    readonly doctorId: FieldRef<"LabTest", 'Int'>
    readonly testType: FieldRef<"LabTest", 'String'>
    readonly result: FieldRef<"LabTest", 'String'>
    readonly status: FieldRef<"LabTest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LabTest findUnique
   */
  export type LabTestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    /**
     * Filter, which LabTest to fetch.
     */
    where: LabTestWhereUniqueInput
  }

  /**
   * LabTest findUniqueOrThrow
   */
  export type LabTestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    /**
     * Filter, which LabTest to fetch.
     */
    where: LabTestWhereUniqueInput
  }

  /**
   * LabTest findFirst
   */
  export type LabTestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    /**
     * Filter, which LabTest to fetch.
     */
    where?: LabTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabTests to fetch.
     */
    orderBy?: LabTestOrderByWithRelationInput | LabTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabTests.
     */
    cursor?: LabTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabTests.
     */
    distinct?: LabTestScalarFieldEnum | LabTestScalarFieldEnum[]
  }

  /**
   * LabTest findFirstOrThrow
   */
  export type LabTestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    /**
     * Filter, which LabTest to fetch.
     */
    where?: LabTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabTests to fetch.
     */
    orderBy?: LabTestOrderByWithRelationInput | LabTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabTests.
     */
    cursor?: LabTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabTests.
     */
    distinct?: LabTestScalarFieldEnum | LabTestScalarFieldEnum[]
  }

  /**
   * LabTest findMany
   */
  export type LabTestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    /**
     * Filter, which LabTests to fetch.
     */
    where?: LabTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabTests to fetch.
     */
    orderBy?: LabTestOrderByWithRelationInput | LabTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LabTests.
     */
    cursor?: LabTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabTests.
     */
    skip?: number
    distinct?: LabTestScalarFieldEnum | LabTestScalarFieldEnum[]
  }

  /**
   * LabTest create
   */
  export type LabTestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    /**
     * The data needed to create a LabTest.
     */
    data: XOR<LabTestCreateInput, LabTestUncheckedCreateInput>
  }

  /**
   * LabTest createMany
   */
  export type LabTestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LabTests.
     */
    data: LabTestCreateManyInput | LabTestCreateManyInput[]
  }

  /**
   * LabTest createManyAndReturn
   */
  export type LabTestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * The data used to create many LabTests.
     */
    data: LabTestCreateManyInput | LabTestCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LabTest update
   */
  export type LabTestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    /**
     * The data needed to update a LabTest.
     */
    data: XOR<LabTestUpdateInput, LabTestUncheckedUpdateInput>
    /**
     * Choose, which LabTest to update.
     */
    where: LabTestWhereUniqueInput
  }

  /**
   * LabTest updateMany
   */
  export type LabTestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LabTests.
     */
    data: XOR<LabTestUpdateManyMutationInput, LabTestUncheckedUpdateManyInput>
    /**
     * Filter which LabTests to update
     */
    where?: LabTestWhereInput
    /**
     * Limit how many LabTests to update.
     */
    limit?: number
  }

  /**
   * LabTest updateManyAndReturn
   */
  export type LabTestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * The data used to update LabTests.
     */
    data: XOR<LabTestUpdateManyMutationInput, LabTestUncheckedUpdateManyInput>
    /**
     * Filter which LabTests to update
     */
    where?: LabTestWhereInput
    /**
     * Limit how many LabTests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LabTest upsert
   */
  export type LabTestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    /**
     * The filter to search for the LabTest to update in case it exists.
     */
    where: LabTestWhereUniqueInput
    /**
     * In case the LabTest found by the `where` argument doesn't exist, create a new LabTest with this data.
     */
    create: XOR<LabTestCreateInput, LabTestUncheckedCreateInput>
    /**
     * In case the LabTest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LabTestUpdateInput, LabTestUncheckedUpdateInput>
  }

  /**
   * LabTest delete
   */
  export type LabTestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    /**
     * Filter which LabTest to delete.
     */
    where: LabTestWhereUniqueInput
  }

  /**
   * LabTest deleteMany
   */
  export type LabTestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabTests to delete
     */
    where?: LabTestWhereInput
    /**
     * Limit how many LabTests to delete.
     */
    limit?: number
  }

  /**
   * LabTest without action
   */
  export type LabTestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
  }


  /**
   * Model Medicine
   */

  export type AggregateMedicine = {
    _count: MedicineCountAggregateOutputType | null
    _avg: MedicineAvgAggregateOutputType | null
    _sum: MedicineSumAggregateOutputType | null
    _min: MedicineMinAggregateOutputType | null
    _max: MedicineMaxAggregateOutputType | null
  }

  export type MedicineAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
  }

  export type MedicineSumAggregateOutputType = {
    id: number | null
    quantity: number | null
  }

  export type MedicineMinAggregateOutputType = {
    id: number | null
    name: string | null
    batch: string | null
    expiry: Date | null
    quantity: number | null
  }

  export type MedicineMaxAggregateOutputType = {
    id: number | null
    name: string | null
    batch: string | null
    expiry: Date | null
    quantity: number | null
  }

  export type MedicineCountAggregateOutputType = {
    id: number
    name: number
    batch: number
    expiry: number
    quantity: number
    _all: number
  }


  export type MedicineAvgAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type MedicineSumAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type MedicineMinAggregateInputType = {
    id?: true
    name?: true
    batch?: true
    expiry?: true
    quantity?: true
  }

  export type MedicineMaxAggregateInputType = {
    id?: true
    name?: true
    batch?: true
    expiry?: true
    quantity?: true
  }

  export type MedicineCountAggregateInputType = {
    id?: true
    name?: true
    batch?: true
    expiry?: true
    quantity?: true
    _all?: true
  }

  export type MedicineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicine to aggregate.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medicines
    **/
    _count?: true | MedicineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicineMaxAggregateInputType
  }

  export type GetMedicineAggregateType<T extends MedicineAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicine[P]>
      : GetScalarType<T[P], AggregateMedicine[P]>
  }




  export type MedicineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineWhereInput
    orderBy?: MedicineOrderByWithAggregationInput | MedicineOrderByWithAggregationInput[]
    by: MedicineScalarFieldEnum[] | MedicineScalarFieldEnum
    having?: MedicineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicineCountAggregateInputType | true
    _avg?: MedicineAvgAggregateInputType
    _sum?: MedicineSumAggregateInputType
    _min?: MedicineMinAggregateInputType
    _max?: MedicineMaxAggregateInputType
  }

  export type MedicineGroupByOutputType = {
    id: number
    name: string
    batch: string
    expiry: Date
    quantity: number
    _count: MedicineCountAggregateOutputType | null
    _avg: MedicineAvgAggregateOutputType | null
    _sum: MedicineSumAggregateOutputType | null
    _min: MedicineMinAggregateOutputType | null
    _max: MedicineMaxAggregateOutputType | null
  }

  type GetMedicineGroupByPayload<T extends MedicineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicineGroupByOutputType[P]>
            : GetScalarType<T[P], MedicineGroupByOutputType[P]>
        }
      >
    >


  export type MedicineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    batch?: boolean
    expiry?: boolean
    quantity?: boolean
    issuedMedicines?: boolean | Medicine$issuedMedicinesArgs<ExtArgs>
    _count?: boolean | MedicineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicine"]>

  export type MedicineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    batch?: boolean
    expiry?: boolean
    quantity?: boolean
  }, ExtArgs["result"]["medicine"]>

  export type MedicineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    batch?: boolean
    expiry?: boolean
    quantity?: boolean
  }, ExtArgs["result"]["medicine"]>

  export type MedicineSelectScalar = {
    id?: boolean
    name?: boolean
    batch?: boolean
    expiry?: boolean
    quantity?: boolean
  }

  export type MedicineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "batch" | "expiry" | "quantity", ExtArgs["result"]["medicine"]>
  export type MedicineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issuedMedicines?: boolean | Medicine$issuedMedicinesArgs<ExtArgs>
    _count?: boolean | MedicineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MedicineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MedicinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medicine"
    objects: {
      issuedMedicines: Prisma.$IssuedMedicinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      batch: string
      expiry: Date
      quantity: number
    }, ExtArgs["result"]["medicine"]>
    composites: {}
  }

  type MedicineGetPayload<S extends boolean | null | undefined | MedicineDefaultArgs> = $Result.GetResult<Prisma.$MedicinePayload, S>

  type MedicineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicineCountAggregateInputType | true
    }

  export interface MedicineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medicine'], meta: { name: 'Medicine' } }
    /**
     * Find zero or one Medicine that matches the filter.
     * @param {MedicineFindUniqueArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicineFindUniqueArgs>(args: SelectSubset<T, MedicineFindUniqueArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medicine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicineFindUniqueOrThrowArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicineFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindFirstArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicineFindFirstArgs>(args?: SelectSubset<T, MedicineFindFirstArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindFirstOrThrowArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicineFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicineFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medicines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicines
     * const medicines = await prisma.medicine.findMany()
     * 
     * // Get first 10 Medicines
     * const medicines = await prisma.medicine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicineWithIdOnly = await prisma.medicine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicineFindManyArgs>(args?: SelectSubset<T, MedicineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medicine.
     * @param {MedicineCreateArgs} args - Arguments to create a Medicine.
     * @example
     * // Create one Medicine
     * const Medicine = await prisma.medicine.create({
     *   data: {
     *     // ... data to create a Medicine
     *   }
     * })
     * 
     */
    create<T extends MedicineCreateArgs>(args: SelectSubset<T, MedicineCreateArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medicines.
     * @param {MedicineCreateManyArgs} args - Arguments to create many Medicines.
     * @example
     * // Create many Medicines
     * const medicine = await prisma.medicine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicineCreateManyArgs>(args?: SelectSubset<T, MedicineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medicines and returns the data saved in the database.
     * @param {MedicineCreateManyAndReturnArgs} args - Arguments to create many Medicines.
     * @example
     * // Create many Medicines
     * const medicine = await prisma.medicine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medicines and only return the `id`
     * const medicineWithIdOnly = await prisma.medicine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicineCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medicine.
     * @param {MedicineDeleteArgs} args - Arguments to delete one Medicine.
     * @example
     * // Delete one Medicine
     * const Medicine = await prisma.medicine.delete({
     *   where: {
     *     // ... filter to delete one Medicine
     *   }
     * })
     * 
     */
    delete<T extends MedicineDeleteArgs>(args: SelectSubset<T, MedicineDeleteArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medicine.
     * @param {MedicineUpdateArgs} args - Arguments to update one Medicine.
     * @example
     * // Update one Medicine
     * const medicine = await prisma.medicine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicineUpdateArgs>(args: SelectSubset<T, MedicineUpdateArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medicines.
     * @param {MedicineDeleteManyArgs} args - Arguments to filter Medicines to delete.
     * @example
     * // Delete a few Medicines
     * const { count } = await prisma.medicine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicineDeleteManyArgs>(args?: SelectSubset<T, MedicineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicines
     * const medicine = await prisma.medicine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicineUpdateManyArgs>(args: SelectSubset<T, MedicineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicines and returns the data updated in the database.
     * @param {MedicineUpdateManyAndReturnArgs} args - Arguments to update many Medicines.
     * @example
     * // Update many Medicines
     * const medicine = await prisma.medicine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medicines and only return the `id`
     * const medicineWithIdOnly = await prisma.medicine.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicineUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medicine.
     * @param {MedicineUpsertArgs} args - Arguments to update or create a Medicine.
     * @example
     * // Update or create a Medicine
     * const medicine = await prisma.medicine.upsert({
     *   create: {
     *     // ... data to create a Medicine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medicine we want to update
     *   }
     * })
     */
    upsert<T extends MedicineUpsertArgs>(args: SelectSubset<T, MedicineUpsertArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineCountArgs} args - Arguments to filter Medicines to count.
     * @example
     * // Count the number of Medicines
     * const count = await prisma.medicine.count({
     *   where: {
     *     // ... the filter for the Medicines we want to count
     *   }
     * })
    **/
    count<T extends MedicineCountArgs>(
      args?: Subset<T, MedicineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicineAggregateArgs>(args: Subset<T, MedicineAggregateArgs>): Prisma.PrismaPromise<GetMedicineAggregateType<T>>

    /**
     * Group by Medicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicineGroupByArgs['orderBy'] }
        : { orderBy?: MedicineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medicine model
   */
  readonly fields: MedicineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medicine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    issuedMedicines<T extends Medicine$issuedMedicinesArgs<ExtArgs> = {}>(args?: Subset<T, Medicine$issuedMedicinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuedMedicinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Medicine model
   */
  interface MedicineFieldRefs {
    readonly id: FieldRef<"Medicine", 'Int'>
    readonly name: FieldRef<"Medicine", 'String'>
    readonly batch: FieldRef<"Medicine", 'String'>
    readonly expiry: FieldRef<"Medicine", 'DateTime'>
    readonly quantity: FieldRef<"Medicine", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Medicine findUnique
   */
  export type MedicineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine findUniqueOrThrow
   */
  export type MedicineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine findFirst
   */
  export type MedicineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicines.
     */
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine findFirstOrThrow
   */
  export type MedicineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicines.
     */
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine findMany
   */
  export type MedicineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicines to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine create
   */
  export type MedicineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * The data needed to create a Medicine.
     */
    data: XOR<MedicineCreateInput, MedicineUncheckedCreateInput>
  }

  /**
   * Medicine createMany
   */
  export type MedicineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medicines.
     */
    data: MedicineCreateManyInput | MedicineCreateManyInput[]
  }

  /**
   * Medicine createManyAndReturn
   */
  export type MedicineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * The data used to create many Medicines.
     */
    data: MedicineCreateManyInput | MedicineCreateManyInput[]
  }

  /**
   * Medicine update
   */
  export type MedicineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * The data needed to update a Medicine.
     */
    data: XOR<MedicineUpdateInput, MedicineUncheckedUpdateInput>
    /**
     * Choose, which Medicine to update.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine updateMany
   */
  export type MedicineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medicines.
     */
    data: XOR<MedicineUpdateManyMutationInput, MedicineUncheckedUpdateManyInput>
    /**
     * Filter which Medicines to update
     */
    where?: MedicineWhereInput
    /**
     * Limit how many Medicines to update.
     */
    limit?: number
  }

  /**
   * Medicine updateManyAndReturn
   */
  export type MedicineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * The data used to update Medicines.
     */
    data: XOR<MedicineUpdateManyMutationInput, MedicineUncheckedUpdateManyInput>
    /**
     * Filter which Medicines to update
     */
    where?: MedicineWhereInput
    /**
     * Limit how many Medicines to update.
     */
    limit?: number
  }

  /**
   * Medicine upsert
   */
  export type MedicineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * The filter to search for the Medicine to update in case it exists.
     */
    where: MedicineWhereUniqueInput
    /**
     * In case the Medicine found by the `where` argument doesn't exist, create a new Medicine with this data.
     */
    create: XOR<MedicineCreateInput, MedicineUncheckedCreateInput>
    /**
     * In case the Medicine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicineUpdateInput, MedicineUncheckedUpdateInput>
  }

  /**
   * Medicine delete
   */
  export type MedicineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter which Medicine to delete.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine deleteMany
   */
  export type MedicineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicines to delete
     */
    where?: MedicineWhereInput
    /**
     * Limit how many Medicines to delete.
     */
    limit?: number
  }

  /**
   * Medicine.issuedMedicines
   */
  export type Medicine$issuedMedicinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedMedicine
     */
    select?: IssuedMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedMedicine
     */
    omit?: IssuedMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedMedicineInclude<ExtArgs> | null
    where?: IssuedMedicineWhereInput
    orderBy?: IssuedMedicineOrderByWithRelationInput | IssuedMedicineOrderByWithRelationInput[]
    cursor?: IssuedMedicineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssuedMedicineScalarFieldEnum | IssuedMedicineScalarFieldEnum[]
  }

  /**
   * Medicine without action
   */
  export type MedicineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
  }


  /**
   * Model IssuedMedicine
   */

  export type AggregateIssuedMedicine = {
    _count: IssuedMedicineCountAggregateOutputType | null
    _avg: IssuedMedicineAvgAggregateOutputType | null
    _sum: IssuedMedicineSumAggregateOutputType | null
    _min: IssuedMedicineMinAggregateOutputType | null
    _max: IssuedMedicineMaxAggregateOutputType | null
  }

  export type IssuedMedicineAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
    medicineId: number | null
    quantity: number | null
  }

  export type IssuedMedicineSumAggregateOutputType = {
    id: number | null
    patientId: number | null
    medicineId: number | null
    quantity: number | null
  }

  export type IssuedMedicineMinAggregateOutputType = {
    id: number | null
    patientId: number | null
    medicineId: number | null
    quantity: number | null
    date: Date | null
  }

  export type IssuedMedicineMaxAggregateOutputType = {
    id: number | null
    patientId: number | null
    medicineId: number | null
    quantity: number | null
    date: Date | null
  }

  export type IssuedMedicineCountAggregateOutputType = {
    id: number
    patientId: number
    medicineId: number
    quantity: number
    date: number
    _all: number
  }


  export type IssuedMedicineAvgAggregateInputType = {
    id?: true
    patientId?: true
    medicineId?: true
    quantity?: true
  }

  export type IssuedMedicineSumAggregateInputType = {
    id?: true
    patientId?: true
    medicineId?: true
    quantity?: true
  }

  export type IssuedMedicineMinAggregateInputType = {
    id?: true
    patientId?: true
    medicineId?: true
    quantity?: true
    date?: true
  }

  export type IssuedMedicineMaxAggregateInputType = {
    id?: true
    patientId?: true
    medicineId?: true
    quantity?: true
    date?: true
  }

  export type IssuedMedicineCountAggregateInputType = {
    id?: true
    patientId?: true
    medicineId?: true
    quantity?: true
    date?: true
    _all?: true
  }

  export type IssuedMedicineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IssuedMedicine to aggregate.
     */
    where?: IssuedMedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssuedMedicines to fetch.
     */
    orderBy?: IssuedMedicineOrderByWithRelationInput | IssuedMedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IssuedMedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssuedMedicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssuedMedicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IssuedMedicines
    **/
    _count?: true | IssuedMedicineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IssuedMedicineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IssuedMedicineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IssuedMedicineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IssuedMedicineMaxAggregateInputType
  }

  export type GetIssuedMedicineAggregateType<T extends IssuedMedicineAggregateArgs> = {
        [P in keyof T & keyof AggregateIssuedMedicine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIssuedMedicine[P]>
      : GetScalarType<T[P], AggregateIssuedMedicine[P]>
  }




  export type IssuedMedicineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssuedMedicineWhereInput
    orderBy?: IssuedMedicineOrderByWithAggregationInput | IssuedMedicineOrderByWithAggregationInput[]
    by: IssuedMedicineScalarFieldEnum[] | IssuedMedicineScalarFieldEnum
    having?: IssuedMedicineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IssuedMedicineCountAggregateInputType | true
    _avg?: IssuedMedicineAvgAggregateInputType
    _sum?: IssuedMedicineSumAggregateInputType
    _min?: IssuedMedicineMinAggregateInputType
    _max?: IssuedMedicineMaxAggregateInputType
  }

  export type IssuedMedicineGroupByOutputType = {
    id: number
    patientId: number
    medicineId: number
    quantity: number
    date: Date
    _count: IssuedMedicineCountAggregateOutputType | null
    _avg: IssuedMedicineAvgAggregateOutputType | null
    _sum: IssuedMedicineSumAggregateOutputType | null
    _min: IssuedMedicineMinAggregateOutputType | null
    _max: IssuedMedicineMaxAggregateOutputType | null
  }

  type GetIssuedMedicineGroupByPayload<T extends IssuedMedicineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IssuedMedicineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IssuedMedicineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IssuedMedicineGroupByOutputType[P]>
            : GetScalarType<T[P], IssuedMedicineGroupByOutputType[P]>
        }
      >
    >


  export type IssuedMedicineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    medicineId?: boolean
    quantity?: boolean
    date?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issuedMedicine"]>

  export type IssuedMedicineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    medicineId?: boolean
    quantity?: boolean
    date?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issuedMedicine"]>

  export type IssuedMedicineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    medicineId?: boolean
    quantity?: boolean
    date?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issuedMedicine"]>

  export type IssuedMedicineSelectScalar = {
    id?: boolean
    patientId?: boolean
    medicineId?: boolean
    quantity?: boolean
    date?: boolean
  }

  export type IssuedMedicineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "medicineId" | "quantity" | "date", ExtArgs["result"]["issuedMedicine"]>
  export type IssuedMedicineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }
  export type IssuedMedicineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }
  export type IssuedMedicineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }

  export type $IssuedMedicinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IssuedMedicine"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      medicine: Prisma.$MedicinePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patientId: number
      medicineId: number
      quantity: number
      date: Date
    }, ExtArgs["result"]["issuedMedicine"]>
    composites: {}
  }

  type IssuedMedicineGetPayload<S extends boolean | null | undefined | IssuedMedicineDefaultArgs> = $Result.GetResult<Prisma.$IssuedMedicinePayload, S>

  type IssuedMedicineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IssuedMedicineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IssuedMedicineCountAggregateInputType | true
    }

  export interface IssuedMedicineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IssuedMedicine'], meta: { name: 'IssuedMedicine' } }
    /**
     * Find zero or one IssuedMedicine that matches the filter.
     * @param {IssuedMedicineFindUniqueArgs} args - Arguments to find a IssuedMedicine
     * @example
     * // Get one IssuedMedicine
     * const issuedMedicine = await prisma.issuedMedicine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IssuedMedicineFindUniqueArgs>(args: SelectSubset<T, IssuedMedicineFindUniqueArgs<ExtArgs>>): Prisma__IssuedMedicineClient<$Result.GetResult<Prisma.$IssuedMedicinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IssuedMedicine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IssuedMedicineFindUniqueOrThrowArgs} args - Arguments to find a IssuedMedicine
     * @example
     * // Get one IssuedMedicine
     * const issuedMedicine = await prisma.issuedMedicine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IssuedMedicineFindUniqueOrThrowArgs>(args: SelectSubset<T, IssuedMedicineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IssuedMedicineClient<$Result.GetResult<Prisma.$IssuedMedicinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IssuedMedicine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuedMedicineFindFirstArgs} args - Arguments to find a IssuedMedicine
     * @example
     * // Get one IssuedMedicine
     * const issuedMedicine = await prisma.issuedMedicine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IssuedMedicineFindFirstArgs>(args?: SelectSubset<T, IssuedMedicineFindFirstArgs<ExtArgs>>): Prisma__IssuedMedicineClient<$Result.GetResult<Prisma.$IssuedMedicinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IssuedMedicine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuedMedicineFindFirstOrThrowArgs} args - Arguments to find a IssuedMedicine
     * @example
     * // Get one IssuedMedicine
     * const issuedMedicine = await prisma.issuedMedicine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IssuedMedicineFindFirstOrThrowArgs>(args?: SelectSubset<T, IssuedMedicineFindFirstOrThrowArgs<ExtArgs>>): Prisma__IssuedMedicineClient<$Result.GetResult<Prisma.$IssuedMedicinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IssuedMedicines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuedMedicineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IssuedMedicines
     * const issuedMedicines = await prisma.issuedMedicine.findMany()
     * 
     * // Get first 10 IssuedMedicines
     * const issuedMedicines = await prisma.issuedMedicine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const issuedMedicineWithIdOnly = await prisma.issuedMedicine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IssuedMedicineFindManyArgs>(args?: SelectSubset<T, IssuedMedicineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuedMedicinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IssuedMedicine.
     * @param {IssuedMedicineCreateArgs} args - Arguments to create a IssuedMedicine.
     * @example
     * // Create one IssuedMedicine
     * const IssuedMedicine = await prisma.issuedMedicine.create({
     *   data: {
     *     // ... data to create a IssuedMedicine
     *   }
     * })
     * 
     */
    create<T extends IssuedMedicineCreateArgs>(args: SelectSubset<T, IssuedMedicineCreateArgs<ExtArgs>>): Prisma__IssuedMedicineClient<$Result.GetResult<Prisma.$IssuedMedicinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IssuedMedicines.
     * @param {IssuedMedicineCreateManyArgs} args - Arguments to create many IssuedMedicines.
     * @example
     * // Create many IssuedMedicines
     * const issuedMedicine = await prisma.issuedMedicine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IssuedMedicineCreateManyArgs>(args?: SelectSubset<T, IssuedMedicineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IssuedMedicines and returns the data saved in the database.
     * @param {IssuedMedicineCreateManyAndReturnArgs} args - Arguments to create many IssuedMedicines.
     * @example
     * // Create many IssuedMedicines
     * const issuedMedicine = await prisma.issuedMedicine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IssuedMedicines and only return the `id`
     * const issuedMedicineWithIdOnly = await prisma.issuedMedicine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IssuedMedicineCreateManyAndReturnArgs>(args?: SelectSubset<T, IssuedMedicineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuedMedicinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IssuedMedicine.
     * @param {IssuedMedicineDeleteArgs} args - Arguments to delete one IssuedMedicine.
     * @example
     * // Delete one IssuedMedicine
     * const IssuedMedicine = await prisma.issuedMedicine.delete({
     *   where: {
     *     // ... filter to delete one IssuedMedicine
     *   }
     * })
     * 
     */
    delete<T extends IssuedMedicineDeleteArgs>(args: SelectSubset<T, IssuedMedicineDeleteArgs<ExtArgs>>): Prisma__IssuedMedicineClient<$Result.GetResult<Prisma.$IssuedMedicinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IssuedMedicine.
     * @param {IssuedMedicineUpdateArgs} args - Arguments to update one IssuedMedicine.
     * @example
     * // Update one IssuedMedicine
     * const issuedMedicine = await prisma.issuedMedicine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IssuedMedicineUpdateArgs>(args: SelectSubset<T, IssuedMedicineUpdateArgs<ExtArgs>>): Prisma__IssuedMedicineClient<$Result.GetResult<Prisma.$IssuedMedicinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IssuedMedicines.
     * @param {IssuedMedicineDeleteManyArgs} args - Arguments to filter IssuedMedicines to delete.
     * @example
     * // Delete a few IssuedMedicines
     * const { count } = await prisma.issuedMedicine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IssuedMedicineDeleteManyArgs>(args?: SelectSubset<T, IssuedMedicineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IssuedMedicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuedMedicineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IssuedMedicines
     * const issuedMedicine = await prisma.issuedMedicine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IssuedMedicineUpdateManyArgs>(args: SelectSubset<T, IssuedMedicineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IssuedMedicines and returns the data updated in the database.
     * @param {IssuedMedicineUpdateManyAndReturnArgs} args - Arguments to update many IssuedMedicines.
     * @example
     * // Update many IssuedMedicines
     * const issuedMedicine = await prisma.issuedMedicine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IssuedMedicines and only return the `id`
     * const issuedMedicineWithIdOnly = await prisma.issuedMedicine.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IssuedMedicineUpdateManyAndReturnArgs>(args: SelectSubset<T, IssuedMedicineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuedMedicinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IssuedMedicine.
     * @param {IssuedMedicineUpsertArgs} args - Arguments to update or create a IssuedMedicine.
     * @example
     * // Update or create a IssuedMedicine
     * const issuedMedicine = await prisma.issuedMedicine.upsert({
     *   create: {
     *     // ... data to create a IssuedMedicine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IssuedMedicine we want to update
     *   }
     * })
     */
    upsert<T extends IssuedMedicineUpsertArgs>(args: SelectSubset<T, IssuedMedicineUpsertArgs<ExtArgs>>): Prisma__IssuedMedicineClient<$Result.GetResult<Prisma.$IssuedMedicinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IssuedMedicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuedMedicineCountArgs} args - Arguments to filter IssuedMedicines to count.
     * @example
     * // Count the number of IssuedMedicines
     * const count = await prisma.issuedMedicine.count({
     *   where: {
     *     // ... the filter for the IssuedMedicines we want to count
     *   }
     * })
    **/
    count<T extends IssuedMedicineCountArgs>(
      args?: Subset<T, IssuedMedicineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IssuedMedicineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IssuedMedicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuedMedicineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IssuedMedicineAggregateArgs>(args: Subset<T, IssuedMedicineAggregateArgs>): Prisma.PrismaPromise<GetIssuedMedicineAggregateType<T>>

    /**
     * Group by IssuedMedicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuedMedicineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IssuedMedicineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IssuedMedicineGroupByArgs['orderBy'] }
        : { orderBy?: IssuedMedicineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IssuedMedicineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIssuedMedicineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IssuedMedicine model
   */
  readonly fields: IssuedMedicineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IssuedMedicine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IssuedMedicineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medicine<T extends MedicineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicineDefaultArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IssuedMedicine model
   */
  interface IssuedMedicineFieldRefs {
    readonly id: FieldRef<"IssuedMedicine", 'Int'>
    readonly patientId: FieldRef<"IssuedMedicine", 'Int'>
    readonly medicineId: FieldRef<"IssuedMedicine", 'Int'>
    readonly quantity: FieldRef<"IssuedMedicine", 'Int'>
    readonly date: FieldRef<"IssuedMedicine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IssuedMedicine findUnique
   */
  export type IssuedMedicineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedMedicine
     */
    select?: IssuedMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedMedicine
     */
    omit?: IssuedMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedMedicineInclude<ExtArgs> | null
    /**
     * Filter, which IssuedMedicine to fetch.
     */
    where: IssuedMedicineWhereUniqueInput
  }

  /**
   * IssuedMedicine findUniqueOrThrow
   */
  export type IssuedMedicineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedMedicine
     */
    select?: IssuedMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedMedicine
     */
    omit?: IssuedMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedMedicineInclude<ExtArgs> | null
    /**
     * Filter, which IssuedMedicine to fetch.
     */
    where: IssuedMedicineWhereUniqueInput
  }

  /**
   * IssuedMedicine findFirst
   */
  export type IssuedMedicineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedMedicine
     */
    select?: IssuedMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedMedicine
     */
    omit?: IssuedMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedMedicineInclude<ExtArgs> | null
    /**
     * Filter, which IssuedMedicine to fetch.
     */
    where?: IssuedMedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssuedMedicines to fetch.
     */
    orderBy?: IssuedMedicineOrderByWithRelationInput | IssuedMedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IssuedMedicines.
     */
    cursor?: IssuedMedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssuedMedicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssuedMedicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IssuedMedicines.
     */
    distinct?: IssuedMedicineScalarFieldEnum | IssuedMedicineScalarFieldEnum[]
  }

  /**
   * IssuedMedicine findFirstOrThrow
   */
  export type IssuedMedicineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedMedicine
     */
    select?: IssuedMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedMedicine
     */
    omit?: IssuedMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedMedicineInclude<ExtArgs> | null
    /**
     * Filter, which IssuedMedicine to fetch.
     */
    where?: IssuedMedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssuedMedicines to fetch.
     */
    orderBy?: IssuedMedicineOrderByWithRelationInput | IssuedMedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IssuedMedicines.
     */
    cursor?: IssuedMedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssuedMedicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssuedMedicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IssuedMedicines.
     */
    distinct?: IssuedMedicineScalarFieldEnum | IssuedMedicineScalarFieldEnum[]
  }

  /**
   * IssuedMedicine findMany
   */
  export type IssuedMedicineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedMedicine
     */
    select?: IssuedMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedMedicine
     */
    omit?: IssuedMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedMedicineInclude<ExtArgs> | null
    /**
     * Filter, which IssuedMedicines to fetch.
     */
    where?: IssuedMedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssuedMedicines to fetch.
     */
    orderBy?: IssuedMedicineOrderByWithRelationInput | IssuedMedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IssuedMedicines.
     */
    cursor?: IssuedMedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssuedMedicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssuedMedicines.
     */
    skip?: number
    distinct?: IssuedMedicineScalarFieldEnum | IssuedMedicineScalarFieldEnum[]
  }

  /**
   * IssuedMedicine create
   */
  export type IssuedMedicineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedMedicine
     */
    select?: IssuedMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedMedicine
     */
    omit?: IssuedMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedMedicineInclude<ExtArgs> | null
    /**
     * The data needed to create a IssuedMedicine.
     */
    data: XOR<IssuedMedicineCreateInput, IssuedMedicineUncheckedCreateInput>
  }

  /**
   * IssuedMedicine createMany
   */
  export type IssuedMedicineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IssuedMedicines.
     */
    data: IssuedMedicineCreateManyInput | IssuedMedicineCreateManyInput[]
  }

  /**
   * IssuedMedicine createManyAndReturn
   */
  export type IssuedMedicineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedMedicine
     */
    select?: IssuedMedicineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedMedicine
     */
    omit?: IssuedMedicineOmit<ExtArgs> | null
    /**
     * The data used to create many IssuedMedicines.
     */
    data: IssuedMedicineCreateManyInput | IssuedMedicineCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedMedicineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IssuedMedicine update
   */
  export type IssuedMedicineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedMedicine
     */
    select?: IssuedMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedMedicine
     */
    omit?: IssuedMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedMedicineInclude<ExtArgs> | null
    /**
     * The data needed to update a IssuedMedicine.
     */
    data: XOR<IssuedMedicineUpdateInput, IssuedMedicineUncheckedUpdateInput>
    /**
     * Choose, which IssuedMedicine to update.
     */
    where: IssuedMedicineWhereUniqueInput
  }

  /**
   * IssuedMedicine updateMany
   */
  export type IssuedMedicineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IssuedMedicines.
     */
    data: XOR<IssuedMedicineUpdateManyMutationInput, IssuedMedicineUncheckedUpdateManyInput>
    /**
     * Filter which IssuedMedicines to update
     */
    where?: IssuedMedicineWhereInput
    /**
     * Limit how many IssuedMedicines to update.
     */
    limit?: number
  }

  /**
   * IssuedMedicine updateManyAndReturn
   */
  export type IssuedMedicineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedMedicine
     */
    select?: IssuedMedicineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedMedicine
     */
    omit?: IssuedMedicineOmit<ExtArgs> | null
    /**
     * The data used to update IssuedMedicines.
     */
    data: XOR<IssuedMedicineUpdateManyMutationInput, IssuedMedicineUncheckedUpdateManyInput>
    /**
     * Filter which IssuedMedicines to update
     */
    where?: IssuedMedicineWhereInput
    /**
     * Limit how many IssuedMedicines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedMedicineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IssuedMedicine upsert
   */
  export type IssuedMedicineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedMedicine
     */
    select?: IssuedMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedMedicine
     */
    omit?: IssuedMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedMedicineInclude<ExtArgs> | null
    /**
     * The filter to search for the IssuedMedicine to update in case it exists.
     */
    where: IssuedMedicineWhereUniqueInput
    /**
     * In case the IssuedMedicine found by the `where` argument doesn't exist, create a new IssuedMedicine with this data.
     */
    create: XOR<IssuedMedicineCreateInput, IssuedMedicineUncheckedCreateInput>
    /**
     * In case the IssuedMedicine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IssuedMedicineUpdateInput, IssuedMedicineUncheckedUpdateInput>
  }

  /**
   * IssuedMedicine delete
   */
  export type IssuedMedicineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedMedicine
     */
    select?: IssuedMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedMedicine
     */
    omit?: IssuedMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedMedicineInclude<ExtArgs> | null
    /**
     * Filter which IssuedMedicine to delete.
     */
    where: IssuedMedicineWhereUniqueInput
  }

  /**
   * IssuedMedicine deleteMany
   */
  export type IssuedMedicineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IssuedMedicines to delete
     */
    where?: IssuedMedicineWhereInput
    /**
     * Limit how many IssuedMedicines to delete.
     */
    limit?: number
  }

  /**
   * IssuedMedicine without action
   */
  export type IssuedMedicineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedMedicine
     */
    select?: IssuedMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedMedicine
     */
    omit?: IssuedMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedMedicineInclude<ExtArgs> | null
  }


  /**
   * Model Inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
  }

  export type InventorySumAggregateOutputType = {
    id: number | null
    quantity: number | null
  }

  export type InventoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    department: string | null
    quantity: number | null
    expiry: Date | null
  }

  export type InventoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    department: string | null
    quantity: number | null
    expiry: Date | null
  }

  export type InventoryCountAggregateOutputType = {
    id: number
    name: number
    department: number
    quantity: number
    expiry: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type InventorySumAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type InventoryMinAggregateInputType = {
    id?: true
    name?: true
    department?: true
    quantity?: true
    expiry?: true
  }

  export type InventoryMaxAggregateInputType = {
    id?: true
    name?: true
    department?: true
    quantity?: true
    expiry?: true
  }

  export type InventoryCountAggregateInputType = {
    id?: true
    name?: true
    department?: true
    quantity?: true
    expiry?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventory to aggregate.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type InventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithAggregationInput | InventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: InventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    id: number
    name: string
    department: string
    quantity: number
    expiry: Date | null
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends InventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type InventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    department?: boolean
    quantity?: boolean
    expiry?: boolean
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    department?: boolean
    quantity?: boolean
    expiry?: boolean
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    department?: boolean
    quantity?: boolean
    expiry?: boolean
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectScalar = {
    id?: boolean
    name?: boolean
    department?: boolean
    quantity?: boolean
    expiry?: boolean
  }

  export type InventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "department" | "quantity" | "expiry", ExtArgs["result"]["inventory"]>

  export type $InventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inventory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      department: string
      quantity: number
      expiry: Date | null
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }

  type InventoryGetPayload<S extends boolean | null | undefined | InventoryDefaultArgs> = $Result.GetResult<Prisma.$InventoryPayload, S>

  type InventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface InventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inventory'], meta: { name: 'Inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {InventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryFindUniqueArgs>(args: SelectSubset<T, InventoryFindUniqueArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryFindFirstArgs>(args?: SelectSubset<T, InventoryFindFirstArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryWithIdOnly = await prisma.inventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryFindManyArgs>(args?: SelectSubset<T, InventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventory.
     * @param {InventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
     */
    create<T extends InventoryCreateArgs>(args: SelectSubset<T, InventoryCreateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventories.
     * @param {InventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryCreateManyArgs>(args?: SelectSubset<T, InventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inventories and returns the data saved in the database.
     * @param {InventoryCreateManyAndReturnArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inventories and only return the `id`
     * const inventoryWithIdOnly = await prisma.inventory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inventory.
     * @param {InventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
     */
    delete<T extends InventoryDeleteArgs>(args: SelectSubset<T, InventoryDeleteArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventory.
     * @param {InventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryUpdateArgs>(args: SelectSubset<T, InventoryUpdateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventories.
     * @param {InventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryDeleteManyArgs>(args?: SelectSubset<T, InventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryUpdateManyArgs>(args: SelectSubset<T, InventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories and returns the data updated in the database.
     * @param {InventoryUpdateManyAndReturnArgs} args - Arguments to update many Inventories.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inventories and only return the `id`
     * const inventoryWithIdOnly = await prisma.inventory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InventoryUpdateManyAndReturnArgs>(args: SelectSubset<T, InventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inventory.
     * @param {InventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends InventoryUpsertArgs>(args: SelectSubset<T, InventoryUpsertArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends InventoryCountArgs>(
      args?: Subset<T, InventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryGroupByArgs['orderBy'] }
        : { orderBy?: InventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inventory model
   */
  readonly fields: InventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inventory model
   */
  interface InventoryFieldRefs {
    readonly id: FieldRef<"Inventory", 'Int'>
    readonly name: FieldRef<"Inventory", 'String'>
    readonly department: FieldRef<"Inventory", 'String'>
    readonly quantity: FieldRef<"Inventory", 'Int'>
    readonly expiry: FieldRef<"Inventory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Inventory findUnique
   */
  export type InventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findUniqueOrThrow
   */
  export type InventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findFirst
   */
  export type InventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findFirstOrThrow
   */
  export type InventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findMany
   */
  export type InventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Filter, which Inventories to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory create
   */
  export type InventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * The data needed to create a Inventory.
     */
    data: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
  }

  /**
   * Inventory createMany
   */
  export type InventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
  }

  /**
   * Inventory createManyAndReturn
   */
  export type InventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
  }

  /**
   * Inventory update
   */
  export type InventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * The data needed to update a Inventory.
     */
    data: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
    /**
     * Choose, which Inventory to update.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory updateMany
   */
  export type InventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to update.
     */
    limit?: number
  }

  /**
   * Inventory updateManyAndReturn
   */
  export type InventoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to update.
     */
    limit?: number
  }

  /**
   * Inventory upsert
   */
  export type InventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * The filter to search for the Inventory to update in case it exists.
     */
    where: InventoryWhereUniqueInput
    /**
     * In case the Inventory found by the `where` argument doesn't exist, create a new Inventory with this data.
     */
    create: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
    /**
     * In case the Inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
  }

  /**
   * Inventory delete
   */
  export type InventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Filter which Inventory to delete.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory deleteMany
   */
  export type InventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventories to delete
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to delete.
     */
    limit?: number
  }

  /**
   * Inventory without action
   */
  export type InventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
  }


  /**
   * Model Billing
   */

  export type AggregateBilling = {
    _count: BillingCountAggregateOutputType | null
    _avg: BillingAvgAggregateOutputType | null
    _sum: BillingSumAggregateOutputType | null
    _min: BillingMinAggregateOutputType | null
    _max: BillingMaxAggregateOutputType | null
  }

  export type BillingAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
    amount: number | null
  }

  export type BillingSumAggregateOutputType = {
    id: number | null
    patientId: number | null
    amount: number | null
  }

  export type BillingMinAggregateOutputType = {
    id: number | null
    patientId: number | null
    amount: number | null
    status: string | null
    billDate: Date | null
  }

  export type BillingMaxAggregateOutputType = {
    id: number | null
    patientId: number | null
    amount: number | null
    status: string | null
    billDate: Date | null
  }

  export type BillingCountAggregateOutputType = {
    id: number
    patientId: number
    amount: number
    status: number
    billDate: number
    _all: number
  }


  export type BillingAvgAggregateInputType = {
    id?: true
    patientId?: true
    amount?: true
  }

  export type BillingSumAggregateInputType = {
    id?: true
    patientId?: true
    amount?: true
  }

  export type BillingMinAggregateInputType = {
    id?: true
    patientId?: true
    amount?: true
    status?: true
    billDate?: true
  }

  export type BillingMaxAggregateInputType = {
    id?: true
    patientId?: true
    amount?: true
    status?: true
    billDate?: true
  }

  export type BillingCountAggregateInputType = {
    id?: true
    patientId?: true
    amount?: true
    status?: true
    billDate?: true
    _all?: true
  }

  export type BillingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Billing to aggregate.
     */
    where?: BillingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billings to fetch.
     */
    orderBy?: BillingOrderByWithRelationInput | BillingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Billings
    **/
    _count?: true | BillingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillingMaxAggregateInputType
  }

  export type GetBillingAggregateType<T extends BillingAggregateArgs> = {
        [P in keyof T & keyof AggregateBilling]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBilling[P]>
      : GetScalarType<T[P], AggregateBilling[P]>
  }




  export type BillingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillingWhereInput
    orderBy?: BillingOrderByWithAggregationInput | BillingOrderByWithAggregationInput[]
    by: BillingScalarFieldEnum[] | BillingScalarFieldEnum
    having?: BillingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillingCountAggregateInputType | true
    _avg?: BillingAvgAggregateInputType
    _sum?: BillingSumAggregateInputType
    _min?: BillingMinAggregateInputType
    _max?: BillingMaxAggregateInputType
  }

  export type BillingGroupByOutputType = {
    id: number
    patientId: number
    amount: number
    status: string
    billDate: Date
    _count: BillingCountAggregateOutputType | null
    _avg: BillingAvgAggregateOutputType | null
    _sum: BillingSumAggregateOutputType | null
    _min: BillingMinAggregateOutputType | null
    _max: BillingMaxAggregateOutputType | null
  }

  type GetBillingGroupByPayload<T extends BillingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillingGroupByOutputType[P]>
            : GetScalarType<T[P], BillingGroupByOutputType[P]>
        }
      >
    >


  export type BillingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    amount?: boolean
    status?: boolean
    billDate?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billing"]>

  export type BillingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    amount?: boolean
    status?: boolean
    billDate?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billing"]>

  export type BillingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    amount?: boolean
    status?: boolean
    billDate?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billing"]>

  export type BillingSelectScalar = {
    id?: boolean
    patientId?: boolean
    amount?: boolean
    status?: boolean
    billDate?: boolean
  }

  export type BillingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "amount" | "status" | "billDate", ExtArgs["result"]["billing"]>
  export type BillingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type BillingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type BillingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $BillingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Billing"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patientId: number
      amount: number
      status: string
      billDate: Date
    }, ExtArgs["result"]["billing"]>
    composites: {}
  }

  type BillingGetPayload<S extends boolean | null | undefined | BillingDefaultArgs> = $Result.GetResult<Prisma.$BillingPayload, S>

  type BillingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillingCountAggregateInputType | true
    }

  export interface BillingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Billing'], meta: { name: 'Billing' } }
    /**
     * Find zero or one Billing that matches the filter.
     * @param {BillingFindUniqueArgs} args - Arguments to find a Billing
     * @example
     * // Get one Billing
     * const billing = await prisma.billing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillingFindUniqueArgs>(args: SelectSubset<T, BillingFindUniqueArgs<ExtArgs>>): Prisma__BillingClient<$Result.GetResult<Prisma.$BillingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Billing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillingFindUniqueOrThrowArgs} args - Arguments to find a Billing
     * @example
     * // Get one Billing
     * const billing = await prisma.billing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillingFindUniqueOrThrowArgs>(args: SelectSubset<T, BillingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillingClient<$Result.GetResult<Prisma.$BillingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Billing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingFindFirstArgs} args - Arguments to find a Billing
     * @example
     * // Get one Billing
     * const billing = await prisma.billing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillingFindFirstArgs>(args?: SelectSubset<T, BillingFindFirstArgs<ExtArgs>>): Prisma__BillingClient<$Result.GetResult<Prisma.$BillingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Billing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingFindFirstOrThrowArgs} args - Arguments to find a Billing
     * @example
     * // Get one Billing
     * const billing = await prisma.billing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillingFindFirstOrThrowArgs>(args?: SelectSubset<T, BillingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillingClient<$Result.GetResult<Prisma.$BillingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Billings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Billings
     * const billings = await prisma.billing.findMany()
     * 
     * // Get first 10 Billings
     * const billings = await prisma.billing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billingWithIdOnly = await prisma.billing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillingFindManyArgs>(args?: SelectSubset<T, BillingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Billing.
     * @param {BillingCreateArgs} args - Arguments to create a Billing.
     * @example
     * // Create one Billing
     * const Billing = await prisma.billing.create({
     *   data: {
     *     // ... data to create a Billing
     *   }
     * })
     * 
     */
    create<T extends BillingCreateArgs>(args: SelectSubset<T, BillingCreateArgs<ExtArgs>>): Prisma__BillingClient<$Result.GetResult<Prisma.$BillingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Billings.
     * @param {BillingCreateManyArgs} args - Arguments to create many Billings.
     * @example
     * // Create many Billings
     * const billing = await prisma.billing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillingCreateManyArgs>(args?: SelectSubset<T, BillingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Billings and returns the data saved in the database.
     * @param {BillingCreateManyAndReturnArgs} args - Arguments to create many Billings.
     * @example
     * // Create many Billings
     * const billing = await prisma.billing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Billings and only return the `id`
     * const billingWithIdOnly = await prisma.billing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillingCreateManyAndReturnArgs>(args?: SelectSubset<T, BillingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Billing.
     * @param {BillingDeleteArgs} args - Arguments to delete one Billing.
     * @example
     * // Delete one Billing
     * const Billing = await prisma.billing.delete({
     *   where: {
     *     // ... filter to delete one Billing
     *   }
     * })
     * 
     */
    delete<T extends BillingDeleteArgs>(args: SelectSubset<T, BillingDeleteArgs<ExtArgs>>): Prisma__BillingClient<$Result.GetResult<Prisma.$BillingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Billing.
     * @param {BillingUpdateArgs} args - Arguments to update one Billing.
     * @example
     * // Update one Billing
     * const billing = await prisma.billing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillingUpdateArgs>(args: SelectSubset<T, BillingUpdateArgs<ExtArgs>>): Prisma__BillingClient<$Result.GetResult<Prisma.$BillingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Billings.
     * @param {BillingDeleteManyArgs} args - Arguments to filter Billings to delete.
     * @example
     * // Delete a few Billings
     * const { count } = await prisma.billing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillingDeleteManyArgs>(args?: SelectSubset<T, BillingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Billings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Billings
     * const billing = await prisma.billing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillingUpdateManyArgs>(args: SelectSubset<T, BillingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Billings and returns the data updated in the database.
     * @param {BillingUpdateManyAndReturnArgs} args - Arguments to update many Billings.
     * @example
     * // Update many Billings
     * const billing = await prisma.billing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Billings and only return the `id`
     * const billingWithIdOnly = await prisma.billing.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BillingUpdateManyAndReturnArgs>(args: SelectSubset<T, BillingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Billing.
     * @param {BillingUpsertArgs} args - Arguments to update or create a Billing.
     * @example
     * // Update or create a Billing
     * const billing = await prisma.billing.upsert({
     *   create: {
     *     // ... data to create a Billing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Billing we want to update
     *   }
     * })
     */
    upsert<T extends BillingUpsertArgs>(args: SelectSubset<T, BillingUpsertArgs<ExtArgs>>): Prisma__BillingClient<$Result.GetResult<Prisma.$BillingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Billings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingCountArgs} args - Arguments to filter Billings to count.
     * @example
     * // Count the number of Billings
     * const count = await prisma.billing.count({
     *   where: {
     *     // ... the filter for the Billings we want to count
     *   }
     * })
    **/
    count<T extends BillingCountArgs>(
      args?: Subset<T, BillingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Billing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BillingAggregateArgs>(args: Subset<T, BillingAggregateArgs>): Prisma.PrismaPromise<GetBillingAggregateType<T>>

    /**
     * Group by Billing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BillingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillingGroupByArgs['orderBy'] }
        : { orderBy?: BillingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BillingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Billing model
   */
  readonly fields: BillingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Billing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Billing model
   */
  interface BillingFieldRefs {
    readonly id: FieldRef<"Billing", 'Int'>
    readonly patientId: FieldRef<"Billing", 'Int'>
    readonly amount: FieldRef<"Billing", 'Float'>
    readonly status: FieldRef<"Billing", 'String'>
    readonly billDate: FieldRef<"Billing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Billing findUnique
   */
  export type BillingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billing
     */
    omit?: BillingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInclude<ExtArgs> | null
    /**
     * Filter, which Billing to fetch.
     */
    where: BillingWhereUniqueInput
  }

  /**
   * Billing findUniqueOrThrow
   */
  export type BillingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billing
     */
    omit?: BillingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInclude<ExtArgs> | null
    /**
     * Filter, which Billing to fetch.
     */
    where: BillingWhereUniqueInput
  }

  /**
   * Billing findFirst
   */
  export type BillingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billing
     */
    omit?: BillingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInclude<ExtArgs> | null
    /**
     * Filter, which Billing to fetch.
     */
    where?: BillingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billings to fetch.
     */
    orderBy?: BillingOrderByWithRelationInput | BillingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Billings.
     */
    cursor?: BillingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Billings.
     */
    distinct?: BillingScalarFieldEnum | BillingScalarFieldEnum[]
  }

  /**
   * Billing findFirstOrThrow
   */
  export type BillingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billing
     */
    omit?: BillingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInclude<ExtArgs> | null
    /**
     * Filter, which Billing to fetch.
     */
    where?: BillingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billings to fetch.
     */
    orderBy?: BillingOrderByWithRelationInput | BillingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Billings.
     */
    cursor?: BillingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Billings.
     */
    distinct?: BillingScalarFieldEnum | BillingScalarFieldEnum[]
  }

  /**
   * Billing findMany
   */
  export type BillingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billing
     */
    omit?: BillingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInclude<ExtArgs> | null
    /**
     * Filter, which Billings to fetch.
     */
    where?: BillingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billings to fetch.
     */
    orderBy?: BillingOrderByWithRelationInput | BillingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Billings.
     */
    cursor?: BillingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billings.
     */
    skip?: number
    distinct?: BillingScalarFieldEnum | BillingScalarFieldEnum[]
  }

  /**
   * Billing create
   */
  export type BillingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billing
     */
    omit?: BillingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInclude<ExtArgs> | null
    /**
     * The data needed to create a Billing.
     */
    data: XOR<BillingCreateInput, BillingUncheckedCreateInput>
  }

  /**
   * Billing createMany
   */
  export type BillingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Billings.
     */
    data: BillingCreateManyInput | BillingCreateManyInput[]
  }

  /**
   * Billing createManyAndReturn
   */
  export type BillingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Billing
     */
    omit?: BillingOmit<ExtArgs> | null
    /**
     * The data used to create many Billings.
     */
    data: BillingCreateManyInput | BillingCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Billing update
   */
  export type BillingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billing
     */
    omit?: BillingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInclude<ExtArgs> | null
    /**
     * The data needed to update a Billing.
     */
    data: XOR<BillingUpdateInput, BillingUncheckedUpdateInput>
    /**
     * Choose, which Billing to update.
     */
    where: BillingWhereUniqueInput
  }

  /**
   * Billing updateMany
   */
  export type BillingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Billings.
     */
    data: XOR<BillingUpdateManyMutationInput, BillingUncheckedUpdateManyInput>
    /**
     * Filter which Billings to update
     */
    where?: BillingWhereInput
    /**
     * Limit how many Billings to update.
     */
    limit?: number
  }

  /**
   * Billing updateManyAndReturn
   */
  export type BillingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Billing
     */
    omit?: BillingOmit<ExtArgs> | null
    /**
     * The data used to update Billings.
     */
    data: XOR<BillingUpdateManyMutationInput, BillingUncheckedUpdateManyInput>
    /**
     * Filter which Billings to update
     */
    where?: BillingWhereInput
    /**
     * Limit how many Billings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Billing upsert
   */
  export type BillingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billing
     */
    omit?: BillingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInclude<ExtArgs> | null
    /**
     * The filter to search for the Billing to update in case it exists.
     */
    where: BillingWhereUniqueInput
    /**
     * In case the Billing found by the `where` argument doesn't exist, create a new Billing with this data.
     */
    create: XOR<BillingCreateInput, BillingUncheckedCreateInput>
    /**
     * In case the Billing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillingUpdateInput, BillingUncheckedUpdateInput>
  }

  /**
   * Billing delete
   */
  export type BillingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billing
     */
    omit?: BillingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInclude<ExtArgs> | null
    /**
     * Filter which Billing to delete.
     */
    where: BillingWhereUniqueInput
  }

  /**
   * Billing deleteMany
   */
  export type BillingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Billings to delete
     */
    where?: BillingWhereInput
    /**
     * Limit how many Billings to delete.
     */
    limit?: number
  }

  /**
   * Billing without action
   */
  export type BillingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billing
     */
    omit?: BillingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    password: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    password: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    password: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    username: string
    password: string
    role: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "password" | "role", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      username: string
      password: string
      role: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PatientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    gender: 'gender',
    dob: 'dob',
    contact: 'contact',
    allergies: 'allergies',
    history: 'history'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const DoctorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    department: 'department',
    specialization: 'specialization'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    doctorId: 'doctorId',
    date: 'date',
    status: 'status'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const OPDRecordScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    doctorId: 'doctorId',
    notes: 'notes',
    prescription: 'prescription',
    date: 'date'
  };

  export type OPDRecordScalarFieldEnum = (typeof OPDRecordScalarFieldEnum)[keyof typeof OPDRecordScalarFieldEnum]


  export const IPDAdmissionScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    roomId: 'roomId',
    admitDate: 'admitDate',
    dischargeDate: 'dischargeDate'
  };

  export type IPDAdmissionScalarFieldEnum = (typeof IPDAdmissionScalarFieldEnum)[keyof typeof IPDAdmissionScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    roomType: 'roomType',
    isOccupied: 'isOccupied'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const LabTestScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    doctorId: 'doctorId',
    testType: 'testType',
    result: 'result',
    status: 'status'
  };

  export type LabTestScalarFieldEnum = (typeof LabTestScalarFieldEnum)[keyof typeof LabTestScalarFieldEnum]


  export const MedicineScalarFieldEnum: {
    id: 'id',
    name: 'name',
    batch: 'batch',
    expiry: 'expiry',
    quantity: 'quantity'
  };

  export type MedicineScalarFieldEnum = (typeof MedicineScalarFieldEnum)[keyof typeof MedicineScalarFieldEnum]


  export const IssuedMedicineScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    medicineId: 'medicineId',
    quantity: 'quantity',
    date: 'date'
  };

  export type IssuedMedicineScalarFieldEnum = (typeof IssuedMedicineScalarFieldEnum)[keyof typeof IssuedMedicineScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    department: 'department',
    quantity: 'quantity',
    expiry: 'expiry'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const BillingScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    amount: 'amount',
    status: 'status',
    billDate: 'billDate'
  };

  export type BillingScalarFieldEnum = (typeof BillingScalarFieldEnum)[keyof typeof BillingScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: IntFilter<"Patient"> | number
    name?: StringFilter<"Patient"> | string
    gender?: StringFilter<"Patient"> | string
    dob?: DateTimeFilter<"Patient"> | Date | string
    contact?: StringFilter<"Patient"> | string
    allergies?: StringNullableFilter<"Patient"> | string | null
    history?: StringNullableFilter<"Patient"> | string | null
    appointments?: AppointmentListRelationFilter
    opdRecords?: OPDRecordListRelationFilter
    ipdAdmissions?: IPDAdmissionListRelationFilter
    issuedMedicines?: IssuedMedicineListRelationFilter
    billings?: BillingListRelationFilter
    LabTest?: LabTestListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    contact?: SortOrder
    allergies?: SortOrderInput | SortOrder
    history?: SortOrderInput | SortOrder
    appointments?: AppointmentOrderByRelationAggregateInput
    opdRecords?: OPDRecordOrderByRelationAggregateInput
    ipdAdmissions?: IPDAdmissionOrderByRelationAggregateInput
    issuedMedicines?: IssuedMedicineOrderByRelationAggregateInput
    billings?: BillingOrderByRelationAggregateInput
    LabTest?: LabTestOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    name?: StringFilter<"Patient"> | string
    gender?: StringFilter<"Patient"> | string
    dob?: DateTimeFilter<"Patient"> | Date | string
    contact?: StringFilter<"Patient"> | string
    allergies?: StringNullableFilter<"Patient"> | string | null
    history?: StringNullableFilter<"Patient"> | string | null
    appointments?: AppointmentListRelationFilter
    opdRecords?: OPDRecordListRelationFilter
    ipdAdmissions?: IPDAdmissionListRelationFilter
    issuedMedicines?: IssuedMedicineListRelationFilter
    billings?: BillingListRelationFilter
    LabTest?: LabTestListRelationFilter
  }, "id">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    contact?: SortOrder
    allergies?: SortOrderInput | SortOrder
    history?: SortOrderInput | SortOrder
    _count?: PatientCountOrderByAggregateInput
    _avg?: PatientAvgOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
    _sum?: PatientSumOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Patient"> | number
    name?: StringWithAggregatesFilter<"Patient"> | string
    gender?: StringWithAggregatesFilter<"Patient"> | string
    dob?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    contact?: StringWithAggregatesFilter<"Patient"> | string
    allergies?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    history?: StringNullableWithAggregatesFilter<"Patient"> | string | null
  }

  export type DoctorWhereInput = {
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    id?: IntFilter<"Doctor"> | number
    name?: StringFilter<"Doctor"> | string
    department?: StringFilter<"Doctor"> | string
    specialization?: StringNullableFilter<"Doctor"> | string | null
    appointments?: AppointmentListRelationFilter
    opdRecords?: OPDRecordListRelationFilter
    labTests?: LabTestListRelationFilter
  }

  export type DoctorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    department?: SortOrder
    specialization?: SortOrderInput | SortOrder
    appointments?: AppointmentOrderByRelationAggregateInput
    opdRecords?: OPDRecordOrderByRelationAggregateInput
    labTests?: LabTestOrderByRelationAggregateInput
  }

  export type DoctorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    name?: StringFilter<"Doctor"> | string
    department?: StringFilter<"Doctor"> | string
    specialization?: StringNullableFilter<"Doctor"> | string | null
    appointments?: AppointmentListRelationFilter
    opdRecords?: OPDRecordListRelationFilter
    labTests?: LabTestListRelationFilter
  }, "id">

  export type DoctorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    department?: SortOrder
    specialization?: SortOrderInput | SortOrder
    _count?: DoctorCountOrderByAggregateInput
    _avg?: DoctorAvgOrderByAggregateInput
    _max?: DoctorMaxOrderByAggregateInput
    _min?: DoctorMinOrderByAggregateInput
    _sum?: DoctorSumOrderByAggregateInput
  }

  export type DoctorScalarWhereWithAggregatesInput = {
    AND?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    OR?: DoctorScalarWhereWithAggregatesInput[]
    NOT?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Doctor"> | number
    name?: StringWithAggregatesFilter<"Doctor"> | string
    department?: StringWithAggregatesFilter<"Doctor"> | string
    specialization?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: IntFilter<"Appointment"> | number
    patientId?: IntFilter<"Appointment"> | number
    doctorId?: IntFilter<"Appointment"> | number
    date?: DateTimeFilter<"Appointment"> | Date | string
    status?: StringFilter<"Appointment"> | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    patient?: PatientOrderByWithRelationInput
    doctor?: DoctorOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    patientId?: IntFilter<"Appointment"> | number
    doctorId?: IntFilter<"Appointment"> | number
    date?: DateTimeFilter<"Appointment"> | Date | string
    status?: StringFilter<"Appointment"> | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Appointment"> | number
    patientId?: IntWithAggregatesFilter<"Appointment"> | number
    doctorId?: IntWithAggregatesFilter<"Appointment"> | number
    date?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    status?: StringWithAggregatesFilter<"Appointment"> | string
  }

  export type OPDRecordWhereInput = {
    AND?: OPDRecordWhereInput | OPDRecordWhereInput[]
    OR?: OPDRecordWhereInput[]
    NOT?: OPDRecordWhereInput | OPDRecordWhereInput[]
    id?: IntFilter<"OPDRecord"> | number
    patientId?: IntFilter<"OPDRecord"> | number
    doctorId?: IntFilter<"OPDRecord"> | number
    notes?: StringFilter<"OPDRecord"> | string
    prescription?: StringFilter<"OPDRecord"> | string
    date?: DateTimeFilter<"OPDRecord"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }

  export type OPDRecordOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    notes?: SortOrder
    prescription?: SortOrder
    date?: SortOrder
    patient?: PatientOrderByWithRelationInput
    doctor?: DoctorOrderByWithRelationInput
  }

  export type OPDRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OPDRecordWhereInput | OPDRecordWhereInput[]
    OR?: OPDRecordWhereInput[]
    NOT?: OPDRecordWhereInput | OPDRecordWhereInput[]
    patientId?: IntFilter<"OPDRecord"> | number
    doctorId?: IntFilter<"OPDRecord"> | number
    notes?: StringFilter<"OPDRecord"> | string
    prescription?: StringFilter<"OPDRecord"> | string
    date?: DateTimeFilter<"OPDRecord"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }, "id">

  export type OPDRecordOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    notes?: SortOrder
    prescription?: SortOrder
    date?: SortOrder
    _count?: OPDRecordCountOrderByAggregateInput
    _avg?: OPDRecordAvgOrderByAggregateInput
    _max?: OPDRecordMaxOrderByAggregateInput
    _min?: OPDRecordMinOrderByAggregateInput
    _sum?: OPDRecordSumOrderByAggregateInput
  }

  export type OPDRecordScalarWhereWithAggregatesInput = {
    AND?: OPDRecordScalarWhereWithAggregatesInput | OPDRecordScalarWhereWithAggregatesInput[]
    OR?: OPDRecordScalarWhereWithAggregatesInput[]
    NOT?: OPDRecordScalarWhereWithAggregatesInput | OPDRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OPDRecord"> | number
    patientId?: IntWithAggregatesFilter<"OPDRecord"> | number
    doctorId?: IntWithAggregatesFilter<"OPDRecord"> | number
    notes?: StringWithAggregatesFilter<"OPDRecord"> | string
    prescription?: StringWithAggregatesFilter<"OPDRecord"> | string
    date?: DateTimeWithAggregatesFilter<"OPDRecord"> | Date | string
  }

  export type IPDAdmissionWhereInput = {
    AND?: IPDAdmissionWhereInput | IPDAdmissionWhereInput[]
    OR?: IPDAdmissionWhereInput[]
    NOT?: IPDAdmissionWhereInput | IPDAdmissionWhereInput[]
    id?: IntFilter<"IPDAdmission"> | number
    patientId?: IntFilter<"IPDAdmission"> | number
    roomId?: IntFilter<"IPDAdmission"> | number
    admitDate?: DateTimeFilter<"IPDAdmission"> | Date | string
    dischargeDate?: DateTimeNullableFilter<"IPDAdmission"> | Date | string | null
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type IPDAdmissionOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    roomId?: SortOrder
    admitDate?: SortOrder
    dischargeDate?: SortOrderInput | SortOrder
    patient?: PatientOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
  }

  export type IPDAdmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IPDAdmissionWhereInput | IPDAdmissionWhereInput[]
    OR?: IPDAdmissionWhereInput[]
    NOT?: IPDAdmissionWhereInput | IPDAdmissionWhereInput[]
    patientId?: IntFilter<"IPDAdmission"> | number
    roomId?: IntFilter<"IPDAdmission"> | number
    admitDate?: DateTimeFilter<"IPDAdmission"> | Date | string
    dischargeDate?: DateTimeNullableFilter<"IPDAdmission"> | Date | string | null
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "id">

  export type IPDAdmissionOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    roomId?: SortOrder
    admitDate?: SortOrder
    dischargeDate?: SortOrderInput | SortOrder
    _count?: IPDAdmissionCountOrderByAggregateInput
    _avg?: IPDAdmissionAvgOrderByAggregateInput
    _max?: IPDAdmissionMaxOrderByAggregateInput
    _min?: IPDAdmissionMinOrderByAggregateInput
    _sum?: IPDAdmissionSumOrderByAggregateInput
  }

  export type IPDAdmissionScalarWhereWithAggregatesInput = {
    AND?: IPDAdmissionScalarWhereWithAggregatesInput | IPDAdmissionScalarWhereWithAggregatesInput[]
    OR?: IPDAdmissionScalarWhereWithAggregatesInput[]
    NOT?: IPDAdmissionScalarWhereWithAggregatesInput | IPDAdmissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IPDAdmission"> | number
    patientId?: IntWithAggregatesFilter<"IPDAdmission"> | number
    roomId?: IntWithAggregatesFilter<"IPDAdmission"> | number
    admitDate?: DateTimeWithAggregatesFilter<"IPDAdmission"> | Date | string
    dischargeDate?: DateTimeNullableWithAggregatesFilter<"IPDAdmission"> | Date | string | null
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: IntFilter<"Room"> | number
    roomType?: StringFilter<"Room"> | string
    isOccupied?: BoolFilter<"Room"> | boolean
    ipdAdmissions?: IPDAdmissionListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    roomType?: SortOrder
    isOccupied?: SortOrder
    ipdAdmissions?: IPDAdmissionOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    roomType?: StringFilter<"Room"> | string
    isOccupied?: BoolFilter<"Room"> | boolean
    ipdAdmissions?: IPDAdmissionListRelationFilter
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    roomType?: SortOrder
    isOccupied?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Room"> | number
    roomType?: StringWithAggregatesFilter<"Room"> | string
    isOccupied?: BoolWithAggregatesFilter<"Room"> | boolean
  }

  export type LabTestWhereInput = {
    AND?: LabTestWhereInput | LabTestWhereInput[]
    OR?: LabTestWhereInput[]
    NOT?: LabTestWhereInput | LabTestWhereInput[]
    id?: IntFilter<"LabTest"> | number
    patientId?: IntFilter<"LabTest"> | number
    doctorId?: IntFilter<"LabTest"> | number
    testType?: StringFilter<"LabTest"> | string
    result?: StringNullableFilter<"LabTest"> | string | null
    status?: StringFilter<"LabTest"> | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }

  export type LabTestOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    testType?: SortOrder
    result?: SortOrderInput | SortOrder
    status?: SortOrder
    patient?: PatientOrderByWithRelationInput
    doctor?: DoctorOrderByWithRelationInput
  }

  export type LabTestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LabTestWhereInput | LabTestWhereInput[]
    OR?: LabTestWhereInput[]
    NOT?: LabTestWhereInput | LabTestWhereInput[]
    patientId?: IntFilter<"LabTest"> | number
    doctorId?: IntFilter<"LabTest"> | number
    testType?: StringFilter<"LabTest"> | string
    result?: StringNullableFilter<"LabTest"> | string | null
    status?: StringFilter<"LabTest"> | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }, "id">

  export type LabTestOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    testType?: SortOrder
    result?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: LabTestCountOrderByAggregateInput
    _avg?: LabTestAvgOrderByAggregateInput
    _max?: LabTestMaxOrderByAggregateInput
    _min?: LabTestMinOrderByAggregateInput
    _sum?: LabTestSumOrderByAggregateInput
  }

  export type LabTestScalarWhereWithAggregatesInput = {
    AND?: LabTestScalarWhereWithAggregatesInput | LabTestScalarWhereWithAggregatesInput[]
    OR?: LabTestScalarWhereWithAggregatesInput[]
    NOT?: LabTestScalarWhereWithAggregatesInput | LabTestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LabTest"> | number
    patientId?: IntWithAggregatesFilter<"LabTest"> | number
    doctorId?: IntWithAggregatesFilter<"LabTest"> | number
    testType?: StringWithAggregatesFilter<"LabTest"> | string
    result?: StringNullableWithAggregatesFilter<"LabTest"> | string | null
    status?: StringWithAggregatesFilter<"LabTest"> | string
  }

  export type MedicineWhereInput = {
    AND?: MedicineWhereInput | MedicineWhereInput[]
    OR?: MedicineWhereInput[]
    NOT?: MedicineWhereInput | MedicineWhereInput[]
    id?: IntFilter<"Medicine"> | number
    name?: StringFilter<"Medicine"> | string
    batch?: StringFilter<"Medicine"> | string
    expiry?: DateTimeFilter<"Medicine"> | Date | string
    quantity?: IntFilter<"Medicine"> | number
    issuedMedicines?: IssuedMedicineListRelationFilter
  }

  export type MedicineOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    batch?: SortOrder
    expiry?: SortOrder
    quantity?: SortOrder
    issuedMedicines?: IssuedMedicineOrderByRelationAggregateInput
  }

  export type MedicineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MedicineWhereInput | MedicineWhereInput[]
    OR?: MedicineWhereInput[]
    NOT?: MedicineWhereInput | MedicineWhereInput[]
    name?: StringFilter<"Medicine"> | string
    batch?: StringFilter<"Medicine"> | string
    expiry?: DateTimeFilter<"Medicine"> | Date | string
    quantity?: IntFilter<"Medicine"> | number
    issuedMedicines?: IssuedMedicineListRelationFilter
  }, "id">

  export type MedicineOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    batch?: SortOrder
    expiry?: SortOrder
    quantity?: SortOrder
    _count?: MedicineCountOrderByAggregateInput
    _avg?: MedicineAvgOrderByAggregateInput
    _max?: MedicineMaxOrderByAggregateInput
    _min?: MedicineMinOrderByAggregateInput
    _sum?: MedicineSumOrderByAggregateInput
  }

  export type MedicineScalarWhereWithAggregatesInput = {
    AND?: MedicineScalarWhereWithAggregatesInput | MedicineScalarWhereWithAggregatesInput[]
    OR?: MedicineScalarWhereWithAggregatesInput[]
    NOT?: MedicineScalarWhereWithAggregatesInput | MedicineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Medicine"> | number
    name?: StringWithAggregatesFilter<"Medicine"> | string
    batch?: StringWithAggregatesFilter<"Medicine"> | string
    expiry?: DateTimeWithAggregatesFilter<"Medicine"> | Date | string
    quantity?: IntWithAggregatesFilter<"Medicine"> | number
  }

  export type IssuedMedicineWhereInput = {
    AND?: IssuedMedicineWhereInput | IssuedMedicineWhereInput[]
    OR?: IssuedMedicineWhereInput[]
    NOT?: IssuedMedicineWhereInput | IssuedMedicineWhereInput[]
    id?: IntFilter<"IssuedMedicine"> | number
    patientId?: IntFilter<"IssuedMedicine"> | number
    medicineId?: IntFilter<"IssuedMedicine"> | number
    quantity?: IntFilter<"IssuedMedicine"> | number
    date?: DateTimeFilter<"IssuedMedicine"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    medicine?: XOR<MedicineScalarRelationFilter, MedicineWhereInput>
  }

  export type IssuedMedicineOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    medicineId?: SortOrder
    quantity?: SortOrder
    date?: SortOrder
    patient?: PatientOrderByWithRelationInput
    medicine?: MedicineOrderByWithRelationInput
  }

  export type IssuedMedicineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IssuedMedicineWhereInput | IssuedMedicineWhereInput[]
    OR?: IssuedMedicineWhereInput[]
    NOT?: IssuedMedicineWhereInput | IssuedMedicineWhereInput[]
    patientId?: IntFilter<"IssuedMedicine"> | number
    medicineId?: IntFilter<"IssuedMedicine"> | number
    quantity?: IntFilter<"IssuedMedicine"> | number
    date?: DateTimeFilter<"IssuedMedicine"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    medicine?: XOR<MedicineScalarRelationFilter, MedicineWhereInput>
  }, "id">

  export type IssuedMedicineOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    medicineId?: SortOrder
    quantity?: SortOrder
    date?: SortOrder
    _count?: IssuedMedicineCountOrderByAggregateInput
    _avg?: IssuedMedicineAvgOrderByAggregateInput
    _max?: IssuedMedicineMaxOrderByAggregateInput
    _min?: IssuedMedicineMinOrderByAggregateInput
    _sum?: IssuedMedicineSumOrderByAggregateInput
  }

  export type IssuedMedicineScalarWhereWithAggregatesInput = {
    AND?: IssuedMedicineScalarWhereWithAggregatesInput | IssuedMedicineScalarWhereWithAggregatesInput[]
    OR?: IssuedMedicineScalarWhereWithAggregatesInput[]
    NOT?: IssuedMedicineScalarWhereWithAggregatesInput | IssuedMedicineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IssuedMedicine"> | number
    patientId?: IntWithAggregatesFilter<"IssuedMedicine"> | number
    medicineId?: IntWithAggregatesFilter<"IssuedMedicine"> | number
    quantity?: IntWithAggregatesFilter<"IssuedMedicine"> | number
    date?: DateTimeWithAggregatesFilter<"IssuedMedicine"> | Date | string
  }

  export type InventoryWhereInput = {
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    id?: IntFilter<"Inventory"> | number
    name?: StringFilter<"Inventory"> | string
    department?: StringFilter<"Inventory"> | string
    quantity?: IntFilter<"Inventory"> | number
    expiry?: DateTimeNullableFilter<"Inventory"> | Date | string | null
  }

  export type InventoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    department?: SortOrder
    quantity?: SortOrder
    expiry?: SortOrderInput | SortOrder
  }

  export type InventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    name?: StringFilter<"Inventory"> | string
    department?: StringFilter<"Inventory"> | string
    quantity?: IntFilter<"Inventory"> | number
    expiry?: DateTimeNullableFilter<"Inventory"> | Date | string | null
  }, "id">

  export type InventoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    department?: SortOrder
    quantity?: SortOrder
    expiry?: SortOrderInput | SortOrder
    _count?: InventoryCountOrderByAggregateInput
    _avg?: InventoryAvgOrderByAggregateInput
    _max?: InventoryMaxOrderByAggregateInput
    _min?: InventoryMinOrderByAggregateInput
    _sum?: InventorySumOrderByAggregateInput
  }

  export type InventoryScalarWhereWithAggregatesInput = {
    AND?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    OR?: InventoryScalarWhereWithAggregatesInput[]
    NOT?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Inventory"> | number
    name?: StringWithAggregatesFilter<"Inventory"> | string
    department?: StringWithAggregatesFilter<"Inventory"> | string
    quantity?: IntWithAggregatesFilter<"Inventory"> | number
    expiry?: DateTimeNullableWithAggregatesFilter<"Inventory"> | Date | string | null
  }

  export type BillingWhereInput = {
    AND?: BillingWhereInput | BillingWhereInput[]
    OR?: BillingWhereInput[]
    NOT?: BillingWhereInput | BillingWhereInput[]
    id?: IntFilter<"Billing"> | number
    patientId?: IntFilter<"Billing"> | number
    amount?: FloatFilter<"Billing"> | number
    status?: StringFilter<"Billing"> | string
    billDate?: DateTimeFilter<"Billing"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type BillingOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    billDate?: SortOrder
    patient?: PatientOrderByWithRelationInput
  }

  export type BillingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BillingWhereInput | BillingWhereInput[]
    OR?: BillingWhereInput[]
    NOT?: BillingWhereInput | BillingWhereInput[]
    patientId?: IntFilter<"Billing"> | number
    amount?: FloatFilter<"Billing"> | number
    status?: StringFilter<"Billing"> | string
    billDate?: DateTimeFilter<"Billing"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id">

  export type BillingOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    billDate?: SortOrder
    _count?: BillingCountOrderByAggregateInput
    _avg?: BillingAvgOrderByAggregateInput
    _max?: BillingMaxOrderByAggregateInput
    _min?: BillingMinOrderByAggregateInput
    _sum?: BillingSumOrderByAggregateInput
  }

  export type BillingScalarWhereWithAggregatesInput = {
    AND?: BillingScalarWhereWithAggregatesInput | BillingScalarWhereWithAggregatesInput[]
    OR?: BillingScalarWhereWithAggregatesInput[]
    NOT?: BillingScalarWhereWithAggregatesInput | BillingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Billing"> | number
    patientId?: IntWithAggregatesFilter<"Billing"> | number
    amount?: FloatWithAggregatesFilter<"Billing"> | number
    status?: StringWithAggregatesFilter<"Billing"> | string
    billDate?: DateTimeWithAggregatesFilter<"Billing"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
  }

  export type PatientCreateInput = {
    name: string
    gender: string
    dob: Date | string
    contact: string
    allergies?: string | null
    history?: string | null
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    opdRecords?: OPDRecordCreateNestedManyWithoutPatientInput
    ipdAdmissions?: IPDAdmissionCreateNestedManyWithoutPatientInput
    issuedMedicines?: IssuedMedicineCreateNestedManyWithoutPatientInput
    billings?: BillingCreateNestedManyWithoutPatientInput
    LabTest?: LabTestCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: number
    name: string
    gender: string
    dob: Date | string
    contact: string
    allergies?: string | null
    history?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    opdRecords?: OPDRecordUncheckedCreateNestedManyWithoutPatientInput
    ipdAdmissions?: IPDAdmissionUncheckedCreateNestedManyWithoutPatientInput
    issuedMedicines?: IssuedMedicineUncheckedCreateNestedManyWithoutPatientInput
    billings?: BillingUncheckedCreateNestedManyWithoutPatientInput
    LabTest?: LabTestUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    history?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    opdRecords?: OPDRecordUpdateManyWithoutPatientNestedInput
    ipdAdmissions?: IPDAdmissionUpdateManyWithoutPatientNestedInput
    issuedMedicines?: IssuedMedicineUpdateManyWithoutPatientNestedInput
    billings?: BillingUpdateManyWithoutPatientNestedInput
    LabTest?: LabTestUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    history?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    opdRecords?: OPDRecordUncheckedUpdateManyWithoutPatientNestedInput
    ipdAdmissions?: IPDAdmissionUncheckedUpdateManyWithoutPatientNestedInput
    issuedMedicines?: IssuedMedicineUncheckedUpdateManyWithoutPatientNestedInput
    billings?: BillingUncheckedUpdateManyWithoutPatientNestedInput
    LabTest?: LabTestUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: number
    name: string
    gender: string
    dob: Date | string
    contact: string
    allergies?: string | null
    history?: string | null
  }

  export type PatientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    history?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    history?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DoctorCreateInput = {
    name: string
    department: string
    specialization?: string | null
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    opdRecords?: OPDRecordCreateNestedManyWithoutDoctorInput
    labTests?: LabTestCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateInput = {
    id?: number
    name: string
    department: string
    specialization?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    opdRecords?: OPDRecordUncheckedCreateNestedManyWithoutDoctorInput
    labTests?: LabTestUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    opdRecords?: OPDRecordUpdateManyWithoutDoctorNestedInput
    labTests?: LabTestUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    opdRecords?: OPDRecordUncheckedUpdateManyWithoutDoctorNestedInput
    labTests?: LabTestUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorCreateManyInput = {
    id?: number
    name: string
    department: string
    specialization?: string | null
  }

  export type DoctorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DoctorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentCreateInput = {
    date: Date | string
    status: string
    patient: PatientCreateNestedOneWithoutAppointmentsInput
    doctor: DoctorCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: number
    patientId: number
    doctorId: number
    date: Date | string
    status: string
  }

  export type AppointmentUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentCreateManyInput = {
    id?: number
    patientId: number
    doctorId: number
    date: Date | string
    status: string
  }

  export type AppointmentUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OPDRecordCreateInput = {
    notes: string
    prescription: string
    date: Date | string
    patient: PatientCreateNestedOneWithoutOpdRecordsInput
    doctor: DoctorCreateNestedOneWithoutOpdRecordsInput
  }

  export type OPDRecordUncheckedCreateInput = {
    id?: number
    patientId: number
    doctorId: number
    notes: string
    prescription: string
    date: Date | string
  }

  export type OPDRecordUpdateInput = {
    notes?: StringFieldUpdateOperationsInput | string
    prescription?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutOpdRecordsNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutOpdRecordsNestedInput
  }

  export type OPDRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    prescription?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OPDRecordCreateManyInput = {
    id?: number
    patientId: number
    doctorId: number
    notes: string
    prescription: string
    date: Date | string
  }

  export type OPDRecordUpdateManyMutationInput = {
    notes?: StringFieldUpdateOperationsInput | string
    prescription?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OPDRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    prescription?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IPDAdmissionCreateInput = {
    admitDate: Date | string
    dischargeDate?: Date | string | null
    patient: PatientCreateNestedOneWithoutIpdAdmissionsInput
    room: RoomCreateNestedOneWithoutIpdAdmissionsInput
  }

  export type IPDAdmissionUncheckedCreateInput = {
    id?: number
    patientId: number
    roomId: number
    admitDate: Date | string
    dischargeDate?: Date | string | null
  }

  export type IPDAdmissionUpdateInput = {
    admitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dischargeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patient?: PatientUpdateOneRequiredWithoutIpdAdmissionsNestedInput
    room?: RoomUpdateOneRequiredWithoutIpdAdmissionsNestedInput
  }

  export type IPDAdmissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    admitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dischargeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IPDAdmissionCreateManyInput = {
    id?: number
    patientId: number
    roomId: number
    admitDate: Date | string
    dischargeDate?: Date | string | null
  }

  export type IPDAdmissionUpdateManyMutationInput = {
    admitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dischargeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IPDAdmissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    admitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dischargeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoomCreateInput = {
    roomType: string
    isOccupied?: boolean
    ipdAdmissions?: IPDAdmissionCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: number
    roomType: string
    isOccupied?: boolean
    ipdAdmissions?: IPDAdmissionUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    roomType?: StringFieldUpdateOperationsInput | string
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    ipdAdmissions?: IPDAdmissionUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomType?: StringFieldUpdateOperationsInput | string
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    ipdAdmissions?: IPDAdmissionUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: number
    roomType: string
    isOccupied?: boolean
  }

  export type RoomUpdateManyMutationInput = {
    roomType?: StringFieldUpdateOperationsInput | string
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomType?: StringFieldUpdateOperationsInput | string
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LabTestCreateInput = {
    testType: string
    result?: string | null
    status: string
    patient: PatientCreateNestedOneWithoutLabTestInput
    doctor: DoctorCreateNestedOneWithoutLabTestsInput
  }

  export type LabTestUncheckedCreateInput = {
    id?: number
    patientId: number
    doctorId: number
    testType: string
    result?: string | null
    status: string
  }

  export type LabTestUpdateInput = {
    testType?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    patient?: PatientUpdateOneRequiredWithoutLabTestNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutLabTestsNestedInput
  }

  export type LabTestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    testType?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type LabTestCreateManyInput = {
    id?: number
    patientId: number
    doctorId: number
    testType: string
    result?: string | null
    status: string
  }

  export type LabTestUpdateManyMutationInput = {
    testType?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type LabTestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    testType?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type MedicineCreateInput = {
    name: string
    batch: string
    expiry: Date | string
    quantity: number
    issuedMedicines?: IssuedMedicineCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUncheckedCreateInput = {
    id?: number
    name: string
    batch: string
    expiry: Date | string
    quantity: number
    issuedMedicines?: IssuedMedicineUncheckedCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    batch?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    issuedMedicines?: IssuedMedicineUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    batch?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    issuedMedicines?: IssuedMedicineUncheckedUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineCreateManyInput = {
    id?: number
    name: string
    batch: string
    expiry: Date | string
    quantity: number
  }

  export type MedicineUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    batch?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type MedicineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    batch?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type IssuedMedicineCreateInput = {
    quantity: number
    date: Date | string
    patient: PatientCreateNestedOneWithoutIssuedMedicinesInput
    medicine: MedicineCreateNestedOneWithoutIssuedMedicinesInput
  }

  export type IssuedMedicineUncheckedCreateInput = {
    id?: number
    patientId: number
    medicineId: number
    quantity: number
    date: Date | string
  }

  export type IssuedMedicineUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutIssuedMedicinesNestedInput
    medicine?: MedicineUpdateOneRequiredWithoutIssuedMedicinesNestedInput
  }

  export type IssuedMedicineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssuedMedicineCreateManyInput = {
    id?: number
    patientId: number
    medicineId: number
    quantity: number
    date: Date | string
  }

  export type IssuedMedicineUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssuedMedicineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCreateInput = {
    name: string
    department: string
    quantity: number
    expiry?: Date | string | null
  }

  export type InventoryUncheckedCreateInput = {
    id?: number
    name: string
    department: string
    quantity: number
    expiry?: Date | string | null
  }

  export type InventoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InventoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InventoryCreateManyInput = {
    id?: number
    name: string
    department: string
    quantity: number
    expiry?: Date | string | null
  }

  export type InventoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InventoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BillingCreateInput = {
    amount: number
    status: string
    billDate: Date | string
    patient: PatientCreateNestedOneWithoutBillingsInput
  }

  export type BillingUncheckedCreateInput = {
    id?: number
    patientId: number
    amount: number
    status: string
    billDate: Date | string
  }

  export type BillingUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    billDate?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutBillingsNestedInput
  }

  export type BillingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    billDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingCreateManyInput = {
    id?: number
    patientId: number
    amount: number
    status: string
    billDate: Date | string
  }

  export type BillingUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    billDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    billDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    name: string
    username: string
    password: string
    role: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    username: string
    password: string
    role: string
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    username: string
    password: string
    role: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type OPDRecordListRelationFilter = {
    every?: OPDRecordWhereInput
    some?: OPDRecordWhereInput
    none?: OPDRecordWhereInput
  }

  export type IPDAdmissionListRelationFilter = {
    every?: IPDAdmissionWhereInput
    some?: IPDAdmissionWhereInput
    none?: IPDAdmissionWhereInput
  }

  export type IssuedMedicineListRelationFilter = {
    every?: IssuedMedicineWhereInput
    some?: IssuedMedicineWhereInput
    none?: IssuedMedicineWhereInput
  }

  export type BillingListRelationFilter = {
    every?: BillingWhereInput
    some?: BillingWhereInput
    none?: BillingWhereInput
  }

  export type LabTestListRelationFilter = {
    every?: LabTestWhereInput
    some?: LabTestWhereInput
    none?: LabTestWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OPDRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IPDAdmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IssuedMedicineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BillingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LabTestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    contact?: SortOrder
    allergies?: SortOrder
    history?: SortOrder
  }

  export type PatientAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    contact?: SortOrder
    allergies?: SortOrder
    history?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    contact?: SortOrder
    allergies?: SortOrder
    history?: SortOrder
  }

  export type PatientSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DoctorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    department?: SortOrder
    specialization?: SortOrder
  }

  export type DoctorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DoctorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    department?: SortOrder
    specialization?: SortOrder
  }

  export type DoctorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    department?: SortOrder
    specialization?: SortOrder
  }

  export type DoctorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type DoctorScalarRelationFilter = {
    is?: DoctorWhereInput
    isNot?: DoctorWhereInput
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
  }

  export type OPDRecordCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    notes?: SortOrder
    prescription?: SortOrder
    date?: SortOrder
  }

  export type OPDRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
  }

  export type OPDRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    notes?: SortOrder
    prescription?: SortOrder
    date?: SortOrder
  }

  export type OPDRecordMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    notes?: SortOrder
    prescription?: SortOrder
    date?: SortOrder
  }

  export type OPDRecordSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type IPDAdmissionCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    roomId?: SortOrder
    admitDate?: SortOrder
    dischargeDate?: SortOrder
  }

  export type IPDAdmissionAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    roomId?: SortOrder
  }

  export type IPDAdmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    roomId?: SortOrder
    admitDate?: SortOrder
    dischargeDate?: SortOrder
  }

  export type IPDAdmissionMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    roomId?: SortOrder
    admitDate?: SortOrder
    dischargeDate?: SortOrder
  }

  export type IPDAdmissionSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    roomId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    roomType?: SortOrder
    isOccupied?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    roomType?: SortOrder
    isOccupied?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    roomType?: SortOrder
    isOccupied?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LabTestCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    testType?: SortOrder
    result?: SortOrder
    status?: SortOrder
  }

  export type LabTestAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
  }

  export type LabTestMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    testType?: SortOrder
    result?: SortOrder
    status?: SortOrder
  }

  export type LabTestMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    testType?: SortOrder
    result?: SortOrder
    status?: SortOrder
  }

  export type LabTestSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
  }

  export type MedicineCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    batch?: SortOrder
    expiry?: SortOrder
    quantity?: SortOrder
  }

  export type MedicineAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type MedicineMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    batch?: SortOrder
    expiry?: SortOrder
    quantity?: SortOrder
  }

  export type MedicineMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    batch?: SortOrder
    expiry?: SortOrder
    quantity?: SortOrder
  }

  export type MedicineSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type MedicineScalarRelationFilter = {
    is?: MedicineWhereInput
    isNot?: MedicineWhereInput
  }

  export type IssuedMedicineCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    medicineId?: SortOrder
    quantity?: SortOrder
    date?: SortOrder
  }

  export type IssuedMedicineAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    medicineId?: SortOrder
    quantity?: SortOrder
  }

  export type IssuedMedicineMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    medicineId?: SortOrder
    quantity?: SortOrder
    date?: SortOrder
  }

  export type IssuedMedicineMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    medicineId?: SortOrder
    quantity?: SortOrder
    date?: SortOrder
  }

  export type IssuedMedicineSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    medicineId?: SortOrder
    quantity?: SortOrder
  }

  export type InventoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    department?: SortOrder
    quantity?: SortOrder
    expiry?: SortOrder
  }

  export type InventoryAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type InventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    department?: SortOrder
    quantity?: SortOrder
    expiry?: SortOrder
  }

  export type InventoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    department?: SortOrder
    quantity?: SortOrder
    expiry?: SortOrder
  }

  export type InventorySumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BillingCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    billDate?: SortOrder
  }

  export type BillingAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    amount?: SortOrder
  }

  export type BillingMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    billDate?: SortOrder
  }

  export type BillingMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    billDate?: SortOrder
  }

  export type BillingSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AppointmentCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type OPDRecordCreateNestedManyWithoutPatientInput = {
    create?: XOR<OPDRecordCreateWithoutPatientInput, OPDRecordUncheckedCreateWithoutPatientInput> | OPDRecordCreateWithoutPatientInput[] | OPDRecordUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: OPDRecordCreateOrConnectWithoutPatientInput | OPDRecordCreateOrConnectWithoutPatientInput[]
    createMany?: OPDRecordCreateManyPatientInputEnvelope
    connect?: OPDRecordWhereUniqueInput | OPDRecordWhereUniqueInput[]
  }

  export type IPDAdmissionCreateNestedManyWithoutPatientInput = {
    create?: XOR<IPDAdmissionCreateWithoutPatientInput, IPDAdmissionUncheckedCreateWithoutPatientInput> | IPDAdmissionCreateWithoutPatientInput[] | IPDAdmissionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: IPDAdmissionCreateOrConnectWithoutPatientInput | IPDAdmissionCreateOrConnectWithoutPatientInput[]
    createMany?: IPDAdmissionCreateManyPatientInputEnvelope
    connect?: IPDAdmissionWhereUniqueInput | IPDAdmissionWhereUniqueInput[]
  }

  export type IssuedMedicineCreateNestedManyWithoutPatientInput = {
    create?: XOR<IssuedMedicineCreateWithoutPatientInput, IssuedMedicineUncheckedCreateWithoutPatientInput> | IssuedMedicineCreateWithoutPatientInput[] | IssuedMedicineUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: IssuedMedicineCreateOrConnectWithoutPatientInput | IssuedMedicineCreateOrConnectWithoutPatientInput[]
    createMany?: IssuedMedicineCreateManyPatientInputEnvelope
    connect?: IssuedMedicineWhereUniqueInput | IssuedMedicineWhereUniqueInput[]
  }

  export type BillingCreateNestedManyWithoutPatientInput = {
    create?: XOR<BillingCreateWithoutPatientInput, BillingUncheckedCreateWithoutPatientInput> | BillingCreateWithoutPatientInput[] | BillingUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: BillingCreateOrConnectWithoutPatientInput | BillingCreateOrConnectWithoutPatientInput[]
    createMany?: BillingCreateManyPatientInputEnvelope
    connect?: BillingWhereUniqueInput | BillingWhereUniqueInput[]
  }

  export type LabTestCreateNestedManyWithoutPatientInput = {
    create?: XOR<LabTestCreateWithoutPatientInput, LabTestUncheckedCreateWithoutPatientInput> | LabTestCreateWithoutPatientInput[] | LabTestUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LabTestCreateOrConnectWithoutPatientInput | LabTestCreateOrConnectWithoutPatientInput[]
    createMany?: LabTestCreateManyPatientInputEnvelope
    connect?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type OPDRecordUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<OPDRecordCreateWithoutPatientInput, OPDRecordUncheckedCreateWithoutPatientInput> | OPDRecordCreateWithoutPatientInput[] | OPDRecordUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: OPDRecordCreateOrConnectWithoutPatientInput | OPDRecordCreateOrConnectWithoutPatientInput[]
    createMany?: OPDRecordCreateManyPatientInputEnvelope
    connect?: OPDRecordWhereUniqueInput | OPDRecordWhereUniqueInput[]
  }

  export type IPDAdmissionUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<IPDAdmissionCreateWithoutPatientInput, IPDAdmissionUncheckedCreateWithoutPatientInput> | IPDAdmissionCreateWithoutPatientInput[] | IPDAdmissionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: IPDAdmissionCreateOrConnectWithoutPatientInput | IPDAdmissionCreateOrConnectWithoutPatientInput[]
    createMany?: IPDAdmissionCreateManyPatientInputEnvelope
    connect?: IPDAdmissionWhereUniqueInput | IPDAdmissionWhereUniqueInput[]
  }

  export type IssuedMedicineUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<IssuedMedicineCreateWithoutPatientInput, IssuedMedicineUncheckedCreateWithoutPatientInput> | IssuedMedicineCreateWithoutPatientInput[] | IssuedMedicineUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: IssuedMedicineCreateOrConnectWithoutPatientInput | IssuedMedicineCreateOrConnectWithoutPatientInput[]
    createMany?: IssuedMedicineCreateManyPatientInputEnvelope
    connect?: IssuedMedicineWhereUniqueInput | IssuedMedicineWhereUniqueInput[]
  }

  export type BillingUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<BillingCreateWithoutPatientInput, BillingUncheckedCreateWithoutPatientInput> | BillingCreateWithoutPatientInput[] | BillingUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: BillingCreateOrConnectWithoutPatientInput | BillingCreateOrConnectWithoutPatientInput[]
    createMany?: BillingCreateManyPatientInputEnvelope
    connect?: BillingWhereUniqueInput | BillingWhereUniqueInput[]
  }

  export type LabTestUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<LabTestCreateWithoutPatientInput, LabTestUncheckedCreateWithoutPatientInput> | LabTestCreateWithoutPatientInput[] | LabTestUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LabTestCreateOrConnectWithoutPatientInput | LabTestCreateOrConnectWithoutPatientInput[]
    createMany?: LabTestCreateManyPatientInputEnvelope
    connect?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AppointmentUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type OPDRecordUpdateManyWithoutPatientNestedInput = {
    create?: XOR<OPDRecordCreateWithoutPatientInput, OPDRecordUncheckedCreateWithoutPatientInput> | OPDRecordCreateWithoutPatientInput[] | OPDRecordUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: OPDRecordCreateOrConnectWithoutPatientInput | OPDRecordCreateOrConnectWithoutPatientInput[]
    upsert?: OPDRecordUpsertWithWhereUniqueWithoutPatientInput | OPDRecordUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: OPDRecordCreateManyPatientInputEnvelope
    set?: OPDRecordWhereUniqueInput | OPDRecordWhereUniqueInput[]
    disconnect?: OPDRecordWhereUniqueInput | OPDRecordWhereUniqueInput[]
    delete?: OPDRecordWhereUniqueInput | OPDRecordWhereUniqueInput[]
    connect?: OPDRecordWhereUniqueInput | OPDRecordWhereUniqueInput[]
    update?: OPDRecordUpdateWithWhereUniqueWithoutPatientInput | OPDRecordUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: OPDRecordUpdateManyWithWhereWithoutPatientInput | OPDRecordUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: OPDRecordScalarWhereInput | OPDRecordScalarWhereInput[]
  }

  export type IPDAdmissionUpdateManyWithoutPatientNestedInput = {
    create?: XOR<IPDAdmissionCreateWithoutPatientInput, IPDAdmissionUncheckedCreateWithoutPatientInput> | IPDAdmissionCreateWithoutPatientInput[] | IPDAdmissionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: IPDAdmissionCreateOrConnectWithoutPatientInput | IPDAdmissionCreateOrConnectWithoutPatientInput[]
    upsert?: IPDAdmissionUpsertWithWhereUniqueWithoutPatientInput | IPDAdmissionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: IPDAdmissionCreateManyPatientInputEnvelope
    set?: IPDAdmissionWhereUniqueInput | IPDAdmissionWhereUniqueInput[]
    disconnect?: IPDAdmissionWhereUniqueInput | IPDAdmissionWhereUniqueInput[]
    delete?: IPDAdmissionWhereUniqueInput | IPDAdmissionWhereUniqueInput[]
    connect?: IPDAdmissionWhereUniqueInput | IPDAdmissionWhereUniqueInput[]
    update?: IPDAdmissionUpdateWithWhereUniqueWithoutPatientInput | IPDAdmissionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: IPDAdmissionUpdateManyWithWhereWithoutPatientInput | IPDAdmissionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: IPDAdmissionScalarWhereInput | IPDAdmissionScalarWhereInput[]
  }

  export type IssuedMedicineUpdateManyWithoutPatientNestedInput = {
    create?: XOR<IssuedMedicineCreateWithoutPatientInput, IssuedMedicineUncheckedCreateWithoutPatientInput> | IssuedMedicineCreateWithoutPatientInput[] | IssuedMedicineUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: IssuedMedicineCreateOrConnectWithoutPatientInput | IssuedMedicineCreateOrConnectWithoutPatientInput[]
    upsert?: IssuedMedicineUpsertWithWhereUniqueWithoutPatientInput | IssuedMedicineUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: IssuedMedicineCreateManyPatientInputEnvelope
    set?: IssuedMedicineWhereUniqueInput | IssuedMedicineWhereUniqueInput[]
    disconnect?: IssuedMedicineWhereUniqueInput | IssuedMedicineWhereUniqueInput[]
    delete?: IssuedMedicineWhereUniqueInput | IssuedMedicineWhereUniqueInput[]
    connect?: IssuedMedicineWhereUniqueInput | IssuedMedicineWhereUniqueInput[]
    update?: IssuedMedicineUpdateWithWhereUniqueWithoutPatientInput | IssuedMedicineUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: IssuedMedicineUpdateManyWithWhereWithoutPatientInput | IssuedMedicineUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: IssuedMedicineScalarWhereInput | IssuedMedicineScalarWhereInput[]
  }

  export type BillingUpdateManyWithoutPatientNestedInput = {
    create?: XOR<BillingCreateWithoutPatientInput, BillingUncheckedCreateWithoutPatientInput> | BillingCreateWithoutPatientInput[] | BillingUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: BillingCreateOrConnectWithoutPatientInput | BillingCreateOrConnectWithoutPatientInput[]
    upsert?: BillingUpsertWithWhereUniqueWithoutPatientInput | BillingUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: BillingCreateManyPatientInputEnvelope
    set?: BillingWhereUniqueInput | BillingWhereUniqueInput[]
    disconnect?: BillingWhereUniqueInput | BillingWhereUniqueInput[]
    delete?: BillingWhereUniqueInput | BillingWhereUniqueInput[]
    connect?: BillingWhereUniqueInput | BillingWhereUniqueInput[]
    update?: BillingUpdateWithWhereUniqueWithoutPatientInput | BillingUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: BillingUpdateManyWithWhereWithoutPatientInput | BillingUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: BillingScalarWhereInput | BillingScalarWhereInput[]
  }

  export type LabTestUpdateManyWithoutPatientNestedInput = {
    create?: XOR<LabTestCreateWithoutPatientInput, LabTestUncheckedCreateWithoutPatientInput> | LabTestCreateWithoutPatientInput[] | LabTestUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LabTestCreateOrConnectWithoutPatientInput | LabTestCreateOrConnectWithoutPatientInput[]
    upsert?: LabTestUpsertWithWhereUniqueWithoutPatientInput | LabTestUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: LabTestCreateManyPatientInputEnvelope
    set?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    disconnect?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    delete?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    connect?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    update?: LabTestUpdateWithWhereUniqueWithoutPatientInput | LabTestUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: LabTestUpdateManyWithWhereWithoutPatientInput | LabTestUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: LabTestScalarWhereInput | LabTestScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type OPDRecordUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<OPDRecordCreateWithoutPatientInput, OPDRecordUncheckedCreateWithoutPatientInput> | OPDRecordCreateWithoutPatientInput[] | OPDRecordUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: OPDRecordCreateOrConnectWithoutPatientInput | OPDRecordCreateOrConnectWithoutPatientInput[]
    upsert?: OPDRecordUpsertWithWhereUniqueWithoutPatientInput | OPDRecordUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: OPDRecordCreateManyPatientInputEnvelope
    set?: OPDRecordWhereUniqueInput | OPDRecordWhereUniqueInput[]
    disconnect?: OPDRecordWhereUniqueInput | OPDRecordWhereUniqueInput[]
    delete?: OPDRecordWhereUniqueInput | OPDRecordWhereUniqueInput[]
    connect?: OPDRecordWhereUniqueInput | OPDRecordWhereUniqueInput[]
    update?: OPDRecordUpdateWithWhereUniqueWithoutPatientInput | OPDRecordUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: OPDRecordUpdateManyWithWhereWithoutPatientInput | OPDRecordUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: OPDRecordScalarWhereInput | OPDRecordScalarWhereInput[]
  }

  export type IPDAdmissionUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<IPDAdmissionCreateWithoutPatientInput, IPDAdmissionUncheckedCreateWithoutPatientInput> | IPDAdmissionCreateWithoutPatientInput[] | IPDAdmissionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: IPDAdmissionCreateOrConnectWithoutPatientInput | IPDAdmissionCreateOrConnectWithoutPatientInput[]
    upsert?: IPDAdmissionUpsertWithWhereUniqueWithoutPatientInput | IPDAdmissionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: IPDAdmissionCreateManyPatientInputEnvelope
    set?: IPDAdmissionWhereUniqueInput | IPDAdmissionWhereUniqueInput[]
    disconnect?: IPDAdmissionWhereUniqueInput | IPDAdmissionWhereUniqueInput[]
    delete?: IPDAdmissionWhereUniqueInput | IPDAdmissionWhereUniqueInput[]
    connect?: IPDAdmissionWhereUniqueInput | IPDAdmissionWhereUniqueInput[]
    update?: IPDAdmissionUpdateWithWhereUniqueWithoutPatientInput | IPDAdmissionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: IPDAdmissionUpdateManyWithWhereWithoutPatientInput | IPDAdmissionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: IPDAdmissionScalarWhereInput | IPDAdmissionScalarWhereInput[]
  }

  export type IssuedMedicineUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<IssuedMedicineCreateWithoutPatientInput, IssuedMedicineUncheckedCreateWithoutPatientInput> | IssuedMedicineCreateWithoutPatientInput[] | IssuedMedicineUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: IssuedMedicineCreateOrConnectWithoutPatientInput | IssuedMedicineCreateOrConnectWithoutPatientInput[]
    upsert?: IssuedMedicineUpsertWithWhereUniqueWithoutPatientInput | IssuedMedicineUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: IssuedMedicineCreateManyPatientInputEnvelope
    set?: IssuedMedicineWhereUniqueInput | IssuedMedicineWhereUniqueInput[]
    disconnect?: IssuedMedicineWhereUniqueInput | IssuedMedicineWhereUniqueInput[]
    delete?: IssuedMedicineWhereUniqueInput | IssuedMedicineWhereUniqueInput[]
    connect?: IssuedMedicineWhereUniqueInput | IssuedMedicineWhereUniqueInput[]
    update?: IssuedMedicineUpdateWithWhereUniqueWithoutPatientInput | IssuedMedicineUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: IssuedMedicineUpdateManyWithWhereWithoutPatientInput | IssuedMedicineUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: IssuedMedicineScalarWhereInput | IssuedMedicineScalarWhereInput[]
  }

  export type BillingUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<BillingCreateWithoutPatientInput, BillingUncheckedCreateWithoutPatientInput> | BillingCreateWithoutPatientInput[] | BillingUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: BillingCreateOrConnectWithoutPatientInput | BillingCreateOrConnectWithoutPatientInput[]
    upsert?: BillingUpsertWithWhereUniqueWithoutPatientInput | BillingUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: BillingCreateManyPatientInputEnvelope
    set?: BillingWhereUniqueInput | BillingWhereUniqueInput[]
    disconnect?: BillingWhereUniqueInput | BillingWhereUniqueInput[]
    delete?: BillingWhereUniqueInput | BillingWhereUniqueInput[]
    connect?: BillingWhereUniqueInput | BillingWhereUniqueInput[]
    update?: BillingUpdateWithWhereUniqueWithoutPatientInput | BillingUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: BillingUpdateManyWithWhereWithoutPatientInput | BillingUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: BillingScalarWhereInput | BillingScalarWhereInput[]
  }

  export type LabTestUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<LabTestCreateWithoutPatientInput, LabTestUncheckedCreateWithoutPatientInput> | LabTestCreateWithoutPatientInput[] | LabTestUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LabTestCreateOrConnectWithoutPatientInput | LabTestCreateOrConnectWithoutPatientInput[]
    upsert?: LabTestUpsertWithWhereUniqueWithoutPatientInput | LabTestUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: LabTestCreateManyPatientInputEnvelope
    set?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    disconnect?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    delete?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    connect?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    update?: LabTestUpdateWithWhereUniqueWithoutPatientInput | LabTestUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: LabTestUpdateManyWithWhereWithoutPatientInput | LabTestUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: LabTestScalarWhereInput | LabTestScalarWhereInput[]
  }

  export type AppointmentCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type OPDRecordCreateNestedManyWithoutDoctorInput = {
    create?: XOR<OPDRecordCreateWithoutDoctorInput, OPDRecordUncheckedCreateWithoutDoctorInput> | OPDRecordCreateWithoutDoctorInput[] | OPDRecordUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: OPDRecordCreateOrConnectWithoutDoctorInput | OPDRecordCreateOrConnectWithoutDoctorInput[]
    createMany?: OPDRecordCreateManyDoctorInputEnvelope
    connect?: OPDRecordWhereUniqueInput | OPDRecordWhereUniqueInput[]
  }

  export type LabTestCreateNestedManyWithoutDoctorInput = {
    create?: XOR<LabTestCreateWithoutDoctorInput, LabTestUncheckedCreateWithoutDoctorInput> | LabTestCreateWithoutDoctorInput[] | LabTestUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: LabTestCreateOrConnectWithoutDoctorInput | LabTestCreateOrConnectWithoutDoctorInput[]
    createMany?: LabTestCreateManyDoctorInputEnvelope
    connect?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type OPDRecordUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<OPDRecordCreateWithoutDoctorInput, OPDRecordUncheckedCreateWithoutDoctorInput> | OPDRecordCreateWithoutDoctorInput[] | OPDRecordUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: OPDRecordCreateOrConnectWithoutDoctorInput | OPDRecordCreateOrConnectWithoutDoctorInput[]
    createMany?: OPDRecordCreateManyDoctorInputEnvelope
    connect?: OPDRecordWhereUniqueInput | OPDRecordWhereUniqueInput[]
  }

  export type LabTestUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<LabTestCreateWithoutDoctorInput, LabTestUncheckedCreateWithoutDoctorInput> | LabTestCreateWithoutDoctorInput[] | LabTestUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: LabTestCreateOrConnectWithoutDoctorInput | LabTestCreateOrConnectWithoutDoctorInput[]
    createMany?: LabTestCreateManyDoctorInputEnvelope
    connect?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
  }

  export type AppointmentUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type OPDRecordUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<OPDRecordCreateWithoutDoctorInput, OPDRecordUncheckedCreateWithoutDoctorInput> | OPDRecordCreateWithoutDoctorInput[] | OPDRecordUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: OPDRecordCreateOrConnectWithoutDoctorInput | OPDRecordCreateOrConnectWithoutDoctorInput[]
    upsert?: OPDRecordUpsertWithWhereUniqueWithoutDoctorInput | OPDRecordUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: OPDRecordCreateManyDoctorInputEnvelope
    set?: OPDRecordWhereUniqueInput | OPDRecordWhereUniqueInput[]
    disconnect?: OPDRecordWhereUniqueInput | OPDRecordWhereUniqueInput[]
    delete?: OPDRecordWhereUniqueInput | OPDRecordWhereUniqueInput[]
    connect?: OPDRecordWhereUniqueInput | OPDRecordWhereUniqueInput[]
    update?: OPDRecordUpdateWithWhereUniqueWithoutDoctorInput | OPDRecordUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: OPDRecordUpdateManyWithWhereWithoutDoctorInput | OPDRecordUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: OPDRecordScalarWhereInput | OPDRecordScalarWhereInput[]
  }

  export type LabTestUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<LabTestCreateWithoutDoctorInput, LabTestUncheckedCreateWithoutDoctorInput> | LabTestCreateWithoutDoctorInput[] | LabTestUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: LabTestCreateOrConnectWithoutDoctorInput | LabTestCreateOrConnectWithoutDoctorInput[]
    upsert?: LabTestUpsertWithWhereUniqueWithoutDoctorInput | LabTestUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: LabTestCreateManyDoctorInputEnvelope
    set?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    disconnect?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    delete?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    connect?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    update?: LabTestUpdateWithWhereUniqueWithoutDoctorInput | LabTestUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: LabTestUpdateManyWithWhereWithoutDoctorInput | LabTestUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: LabTestScalarWhereInput | LabTestScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type OPDRecordUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<OPDRecordCreateWithoutDoctorInput, OPDRecordUncheckedCreateWithoutDoctorInput> | OPDRecordCreateWithoutDoctorInput[] | OPDRecordUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: OPDRecordCreateOrConnectWithoutDoctorInput | OPDRecordCreateOrConnectWithoutDoctorInput[]
    upsert?: OPDRecordUpsertWithWhereUniqueWithoutDoctorInput | OPDRecordUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: OPDRecordCreateManyDoctorInputEnvelope
    set?: OPDRecordWhereUniqueInput | OPDRecordWhereUniqueInput[]
    disconnect?: OPDRecordWhereUniqueInput | OPDRecordWhereUniqueInput[]
    delete?: OPDRecordWhereUniqueInput | OPDRecordWhereUniqueInput[]
    connect?: OPDRecordWhereUniqueInput | OPDRecordWhereUniqueInput[]
    update?: OPDRecordUpdateWithWhereUniqueWithoutDoctorInput | OPDRecordUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: OPDRecordUpdateManyWithWhereWithoutDoctorInput | OPDRecordUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: OPDRecordScalarWhereInput | OPDRecordScalarWhereInput[]
  }

  export type LabTestUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<LabTestCreateWithoutDoctorInput, LabTestUncheckedCreateWithoutDoctorInput> | LabTestCreateWithoutDoctorInput[] | LabTestUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: LabTestCreateOrConnectWithoutDoctorInput | LabTestCreateOrConnectWithoutDoctorInput[]
    upsert?: LabTestUpsertWithWhereUniqueWithoutDoctorInput | LabTestUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: LabTestCreateManyDoctorInputEnvelope
    set?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    disconnect?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    delete?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    connect?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    update?: LabTestUpdateWithWhereUniqueWithoutDoctorInput | LabTestUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: LabTestUpdateManyWithWhereWithoutDoctorInput | LabTestUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: LabTestScalarWhereInput | LabTestScalarWhereInput[]
  }

  export type PatientCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAppointmentsInput
    connect?: PatientWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutAppointmentsInput
    connect?: DoctorWhereUniqueInput
  }

  export type PatientUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAppointmentsInput
    upsert?: PatientUpsertWithoutAppointmentsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutAppointmentsInput, PatientUpdateWithoutAppointmentsInput>, PatientUncheckedUpdateWithoutAppointmentsInput>
  }

  export type DoctorUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutAppointmentsInput
    upsert?: DoctorUpsertWithoutAppointmentsInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutAppointmentsInput, DoctorUpdateWithoutAppointmentsInput>, DoctorUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PatientCreateNestedOneWithoutOpdRecordsInput = {
    create?: XOR<PatientCreateWithoutOpdRecordsInput, PatientUncheckedCreateWithoutOpdRecordsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutOpdRecordsInput
    connect?: PatientWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutOpdRecordsInput = {
    create?: XOR<DoctorCreateWithoutOpdRecordsInput, DoctorUncheckedCreateWithoutOpdRecordsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutOpdRecordsInput
    connect?: DoctorWhereUniqueInput
  }

  export type PatientUpdateOneRequiredWithoutOpdRecordsNestedInput = {
    create?: XOR<PatientCreateWithoutOpdRecordsInput, PatientUncheckedCreateWithoutOpdRecordsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutOpdRecordsInput
    upsert?: PatientUpsertWithoutOpdRecordsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutOpdRecordsInput, PatientUpdateWithoutOpdRecordsInput>, PatientUncheckedUpdateWithoutOpdRecordsInput>
  }

  export type DoctorUpdateOneRequiredWithoutOpdRecordsNestedInput = {
    create?: XOR<DoctorCreateWithoutOpdRecordsInput, DoctorUncheckedCreateWithoutOpdRecordsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutOpdRecordsInput
    upsert?: DoctorUpsertWithoutOpdRecordsInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutOpdRecordsInput, DoctorUpdateWithoutOpdRecordsInput>, DoctorUncheckedUpdateWithoutOpdRecordsInput>
  }

  export type PatientCreateNestedOneWithoutIpdAdmissionsInput = {
    create?: XOR<PatientCreateWithoutIpdAdmissionsInput, PatientUncheckedCreateWithoutIpdAdmissionsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutIpdAdmissionsInput
    connect?: PatientWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutIpdAdmissionsInput = {
    create?: XOR<RoomCreateWithoutIpdAdmissionsInput, RoomUncheckedCreateWithoutIpdAdmissionsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutIpdAdmissionsInput
    connect?: RoomWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PatientUpdateOneRequiredWithoutIpdAdmissionsNestedInput = {
    create?: XOR<PatientCreateWithoutIpdAdmissionsInput, PatientUncheckedCreateWithoutIpdAdmissionsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutIpdAdmissionsInput
    upsert?: PatientUpsertWithoutIpdAdmissionsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutIpdAdmissionsInput, PatientUpdateWithoutIpdAdmissionsInput>, PatientUncheckedUpdateWithoutIpdAdmissionsInput>
  }

  export type RoomUpdateOneRequiredWithoutIpdAdmissionsNestedInput = {
    create?: XOR<RoomCreateWithoutIpdAdmissionsInput, RoomUncheckedCreateWithoutIpdAdmissionsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutIpdAdmissionsInput
    upsert?: RoomUpsertWithoutIpdAdmissionsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutIpdAdmissionsInput, RoomUpdateWithoutIpdAdmissionsInput>, RoomUncheckedUpdateWithoutIpdAdmissionsInput>
  }

  export type IPDAdmissionCreateNestedManyWithoutRoomInput = {
    create?: XOR<IPDAdmissionCreateWithoutRoomInput, IPDAdmissionUncheckedCreateWithoutRoomInput> | IPDAdmissionCreateWithoutRoomInput[] | IPDAdmissionUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: IPDAdmissionCreateOrConnectWithoutRoomInput | IPDAdmissionCreateOrConnectWithoutRoomInput[]
    createMany?: IPDAdmissionCreateManyRoomInputEnvelope
    connect?: IPDAdmissionWhereUniqueInput | IPDAdmissionWhereUniqueInput[]
  }

  export type IPDAdmissionUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<IPDAdmissionCreateWithoutRoomInput, IPDAdmissionUncheckedCreateWithoutRoomInput> | IPDAdmissionCreateWithoutRoomInput[] | IPDAdmissionUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: IPDAdmissionCreateOrConnectWithoutRoomInput | IPDAdmissionCreateOrConnectWithoutRoomInput[]
    createMany?: IPDAdmissionCreateManyRoomInputEnvelope
    connect?: IPDAdmissionWhereUniqueInput | IPDAdmissionWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IPDAdmissionUpdateManyWithoutRoomNestedInput = {
    create?: XOR<IPDAdmissionCreateWithoutRoomInput, IPDAdmissionUncheckedCreateWithoutRoomInput> | IPDAdmissionCreateWithoutRoomInput[] | IPDAdmissionUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: IPDAdmissionCreateOrConnectWithoutRoomInput | IPDAdmissionCreateOrConnectWithoutRoomInput[]
    upsert?: IPDAdmissionUpsertWithWhereUniqueWithoutRoomInput | IPDAdmissionUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: IPDAdmissionCreateManyRoomInputEnvelope
    set?: IPDAdmissionWhereUniqueInput | IPDAdmissionWhereUniqueInput[]
    disconnect?: IPDAdmissionWhereUniqueInput | IPDAdmissionWhereUniqueInput[]
    delete?: IPDAdmissionWhereUniqueInput | IPDAdmissionWhereUniqueInput[]
    connect?: IPDAdmissionWhereUniqueInput | IPDAdmissionWhereUniqueInput[]
    update?: IPDAdmissionUpdateWithWhereUniqueWithoutRoomInput | IPDAdmissionUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: IPDAdmissionUpdateManyWithWhereWithoutRoomInput | IPDAdmissionUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: IPDAdmissionScalarWhereInput | IPDAdmissionScalarWhereInput[]
  }

  export type IPDAdmissionUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<IPDAdmissionCreateWithoutRoomInput, IPDAdmissionUncheckedCreateWithoutRoomInput> | IPDAdmissionCreateWithoutRoomInput[] | IPDAdmissionUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: IPDAdmissionCreateOrConnectWithoutRoomInput | IPDAdmissionCreateOrConnectWithoutRoomInput[]
    upsert?: IPDAdmissionUpsertWithWhereUniqueWithoutRoomInput | IPDAdmissionUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: IPDAdmissionCreateManyRoomInputEnvelope
    set?: IPDAdmissionWhereUniqueInput | IPDAdmissionWhereUniqueInput[]
    disconnect?: IPDAdmissionWhereUniqueInput | IPDAdmissionWhereUniqueInput[]
    delete?: IPDAdmissionWhereUniqueInput | IPDAdmissionWhereUniqueInput[]
    connect?: IPDAdmissionWhereUniqueInput | IPDAdmissionWhereUniqueInput[]
    update?: IPDAdmissionUpdateWithWhereUniqueWithoutRoomInput | IPDAdmissionUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: IPDAdmissionUpdateManyWithWhereWithoutRoomInput | IPDAdmissionUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: IPDAdmissionScalarWhereInput | IPDAdmissionScalarWhereInput[]
  }

  export type PatientCreateNestedOneWithoutLabTestInput = {
    create?: XOR<PatientCreateWithoutLabTestInput, PatientUncheckedCreateWithoutLabTestInput>
    connectOrCreate?: PatientCreateOrConnectWithoutLabTestInput
    connect?: PatientWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutLabTestsInput = {
    create?: XOR<DoctorCreateWithoutLabTestsInput, DoctorUncheckedCreateWithoutLabTestsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutLabTestsInput
    connect?: DoctorWhereUniqueInput
  }

  export type PatientUpdateOneRequiredWithoutLabTestNestedInput = {
    create?: XOR<PatientCreateWithoutLabTestInput, PatientUncheckedCreateWithoutLabTestInput>
    connectOrCreate?: PatientCreateOrConnectWithoutLabTestInput
    upsert?: PatientUpsertWithoutLabTestInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutLabTestInput, PatientUpdateWithoutLabTestInput>, PatientUncheckedUpdateWithoutLabTestInput>
  }

  export type DoctorUpdateOneRequiredWithoutLabTestsNestedInput = {
    create?: XOR<DoctorCreateWithoutLabTestsInput, DoctorUncheckedCreateWithoutLabTestsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutLabTestsInput
    upsert?: DoctorUpsertWithoutLabTestsInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutLabTestsInput, DoctorUpdateWithoutLabTestsInput>, DoctorUncheckedUpdateWithoutLabTestsInput>
  }

  export type IssuedMedicineCreateNestedManyWithoutMedicineInput = {
    create?: XOR<IssuedMedicineCreateWithoutMedicineInput, IssuedMedicineUncheckedCreateWithoutMedicineInput> | IssuedMedicineCreateWithoutMedicineInput[] | IssuedMedicineUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: IssuedMedicineCreateOrConnectWithoutMedicineInput | IssuedMedicineCreateOrConnectWithoutMedicineInput[]
    createMany?: IssuedMedicineCreateManyMedicineInputEnvelope
    connect?: IssuedMedicineWhereUniqueInput | IssuedMedicineWhereUniqueInput[]
  }

  export type IssuedMedicineUncheckedCreateNestedManyWithoutMedicineInput = {
    create?: XOR<IssuedMedicineCreateWithoutMedicineInput, IssuedMedicineUncheckedCreateWithoutMedicineInput> | IssuedMedicineCreateWithoutMedicineInput[] | IssuedMedicineUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: IssuedMedicineCreateOrConnectWithoutMedicineInput | IssuedMedicineCreateOrConnectWithoutMedicineInput[]
    createMany?: IssuedMedicineCreateManyMedicineInputEnvelope
    connect?: IssuedMedicineWhereUniqueInput | IssuedMedicineWhereUniqueInput[]
  }

  export type IssuedMedicineUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<IssuedMedicineCreateWithoutMedicineInput, IssuedMedicineUncheckedCreateWithoutMedicineInput> | IssuedMedicineCreateWithoutMedicineInput[] | IssuedMedicineUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: IssuedMedicineCreateOrConnectWithoutMedicineInput | IssuedMedicineCreateOrConnectWithoutMedicineInput[]
    upsert?: IssuedMedicineUpsertWithWhereUniqueWithoutMedicineInput | IssuedMedicineUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: IssuedMedicineCreateManyMedicineInputEnvelope
    set?: IssuedMedicineWhereUniqueInput | IssuedMedicineWhereUniqueInput[]
    disconnect?: IssuedMedicineWhereUniqueInput | IssuedMedicineWhereUniqueInput[]
    delete?: IssuedMedicineWhereUniqueInput | IssuedMedicineWhereUniqueInput[]
    connect?: IssuedMedicineWhereUniqueInput | IssuedMedicineWhereUniqueInput[]
    update?: IssuedMedicineUpdateWithWhereUniqueWithoutMedicineInput | IssuedMedicineUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: IssuedMedicineUpdateManyWithWhereWithoutMedicineInput | IssuedMedicineUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: IssuedMedicineScalarWhereInput | IssuedMedicineScalarWhereInput[]
  }

  export type IssuedMedicineUncheckedUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<IssuedMedicineCreateWithoutMedicineInput, IssuedMedicineUncheckedCreateWithoutMedicineInput> | IssuedMedicineCreateWithoutMedicineInput[] | IssuedMedicineUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: IssuedMedicineCreateOrConnectWithoutMedicineInput | IssuedMedicineCreateOrConnectWithoutMedicineInput[]
    upsert?: IssuedMedicineUpsertWithWhereUniqueWithoutMedicineInput | IssuedMedicineUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: IssuedMedicineCreateManyMedicineInputEnvelope
    set?: IssuedMedicineWhereUniqueInput | IssuedMedicineWhereUniqueInput[]
    disconnect?: IssuedMedicineWhereUniqueInput | IssuedMedicineWhereUniqueInput[]
    delete?: IssuedMedicineWhereUniqueInput | IssuedMedicineWhereUniqueInput[]
    connect?: IssuedMedicineWhereUniqueInput | IssuedMedicineWhereUniqueInput[]
    update?: IssuedMedicineUpdateWithWhereUniqueWithoutMedicineInput | IssuedMedicineUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: IssuedMedicineUpdateManyWithWhereWithoutMedicineInput | IssuedMedicineUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: IssuedMedicineScalarWhereInput | IssuedMedicineScalarWhereInput[]
  }

  export type PatientCreateNestedOneWithoutIssuedMedicinesInput = {
    create?: XOR<PatientCreateWithoutIssuedMedicinesInput, PatientUncheckedCreateWithoutIssuedMedicinesInput>
    connectOrCreate?: PatientCreateOrConnectWithoutIssuedMedicinesInput
    connect?: PatientWhereUniqueInput
  }

  export type MedicineCreateNestedOneWithoutIssuedMedicinesInput = {
    create?: XOR<MedicineCreateWithoutIssuedMedicinesInput, MedicineUncheckedCreateWithoutIssuedMedicinesInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutIssuedMedicinesInput
    connect?: MedicineWhereUniqueInput
  }

  export type PatientUpdateOneRequiredWithoutIssuedMedicinesNestedInput = {
    create?: XOR<PatientCreateWithoutIssuedMedicinesInput, PatientUncheckedCreateWithoutIssuedMedicinesInput>
    connectOrCreate?: PatientCreateOrConnectWithoutIssuedMedicinesInput
    upsert?: PatientUpsertWithoutIssuedMedicinesInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutIssuedMedicinesInput, PatientUpdateWithoutIssuedMedicinesInput>, PatientUncheckedUpdateWithoutIssuedMedicinesInput>
  }

  export type MedicineUpdateOneRequiredWithoutIssuedMedicinesNestedInput = {
    create?: XOR<MedicineCreateWithoutIssuedMedicinesInput, MedicineUncheckedCreateWithoutIssuedMedicinesInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutIssuedMedicinesInput
    upsert?: MedicineUpsertWithoutIssuedMedicinesInput
    connect?: MedicineWhereUniqueInput
    update?: XOR<XOR<MedicineUpdateToOneWithWhereWithoutIssuedMedicinesInput, MedicineUpdateWithoutIssuedMedicinesInput>, MedicineUncheckedUpdateWithoutIssuedMedicinesInput>
  }

  export type PatientCreateNestedOneWithoutBillingsInput = {
    create?: XOR<PatientCreateWithoutBillingsInput, PatientUncheckedCreateWithoutBillingsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutBillingsInput
    connect?: PatientWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PatientUpdateOneRequiredWithoutBillingsNestedInput = {
    create?: XOR<PatientCreateWithoutBillingsInput, PatientUncheckedCreateWithoutBillingsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutBillingsInput
    upsert?: PatientUpsertWithoutBillingsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutBillingsInput, PatientUpdateWithoutBillingsInput>, PatientUncheckedUpdateWithoutBillingsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AppointmentCreateWithoutPatientInput = {
    date: Date | string
    status: string
    doctor: DoctorCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutPatientInput = {
    id?: number
    doctorId: number
    date: Date | string
    status: string
  }

  export type AppointmentCreateOrConnectWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentCreateManyPatientInputEnvelope = {
    data: AppointmentCreateManyPatientInput | AppointmentCreateManyPatientInput[]
  }

  export type OPDRecordCreateWithoutPatientInput = {
    notes: string
    prescription: string
    date: Date | string
    doctor: DoctorCreateNestedOneWithoutOpdRecordsInput
  }

  export type OPDRecordUncheckedCreateWithoutPatientInput = {
    id?: number
    doctorId: number
    notes: string
    prescription: string
    date: Date | string
  }

  export type OPDRecordCreateOrConnectWithoutPatientInput = {
    where: OPDRecordWhereUniqueInput
    create: XOR<OPDRecordCreateWithoutPatientInput, OPDRecordUncheckedCreateWithoutPatientInput>
  }

  export type OPDRecordCreateManyPatientInputEnvelope = {
    data: OPDRecordCreateManyPatientInput | OPDRecordCreateManyPatientInput[]
  }

  export type IPDAdmissionCreateWithoutPatientInput = {
    admitDate: Date | string
    dischargeDate?: Date | string | null
    room: RoomCreateNestedOneWithoutIpdAdmissionsInput
  }

  export type IPDAdmissionUncheckedCreateWithoutPatientInput = {
    id?: number
    roomId: number
    admitDate: Date | string
    dischargeDate?: Date | string | null
  }

  export type IPDAdmissionCreateOrConnectWithoutPatientInput = {
    where: IPDAdmissionWhereUniqueInput
    create: XOR<IPDAdmissionCreateWithoutPatientInput, IPDAdmissionUncheckedCreateWithoutPatientInput>
  }

  export type IPDAdmissionCreateManyPatientInputEnvelope = {
    data: IPDAdmissionCreateManyPatientInput | IPDAdmissionCreateManyPatientInput[]
  }

  export type IssuedMedicineCreateWithoutPatientInput = {
    quantity: number
    date: Date | string
    medicine: MedicineCreateNestedOneWithoutIssuedMedicinesInput
  }

  export type IssuedMedicineUncheckedCreateWithoutPatientInput = {
    id?: number
    medicineId: number
    quantity: number
    date: Date | string
  }

  export type IssuedMedicineCreateOrConnectWithoutPatientInput = {
    where: IssuedMedicineWhereUniqueInput
    create: XOR<IssuedMedicineCreateWithoutPatientInput, IssuedMedicineUncheckedCreateWithoutPatientInput>
  }

  export type IssuedMedicineCreateManyPatientInputEnvelope = {
    data: IssuedMedicineCreateManyPatientInput | IssuedMedicineCreateManyPatientInput[]
  }

  export type BillingCreateWithoutPatientInput = {
    amount: number
    status: string
    billDate: Date | string
  }

  export type BillingUncheckedCreateWithoutPatientInput = {
    id?: number
    amount: number
    status: string
    billDate: Date | string
  }

  export type BillingCreateOrConnectWithoutPatientInput = {
    where: BillingWhereUniqueInput
    create: XOR<BillingCreateWithoutPatientInput, BillingUncheckedCreateWithoutPatientInput>
  }

  export type BillingCreateManyPatientInputEnvelope = {
    data: BillingCreateManyPatientInput | BillingCreateManyPatientInput[]
  }

  export type LabTestCreateWithoutPatientInput = {
    testType: string
    result?: string | null
    status: string
    doctor: DoctorCreateNestedOneWithoutLabTestsInput
  }

  export type LabTestUncheckedCreateWithoutPatientInput = {
    id?: number
    doctorId: number
    testType: string
    result?: string | null
    status: string
  }

  export type LabTestCreateOrConnectWithoutPatientInput = {
    where: LabTestWhereUniqueInput
    create: XOR<LabTestCreateWithoutPatientInput, LabTestUncheckedCreateWithoutPatientInput>
  }

  export type LabTestCreateManyPatientInputEnvelope = {
    data: LabTestCreateManyPatientInput | LabTestCreateManyPatientInput[]
  }

  export type AppointmentUpsertWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutPatientInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutPatientInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: IntFilter<"Appointment"> | number
    patientId?: IntFilter<"Appointment"> | number
    doctorId?: IntFilter<"Appointment"> | number
    date?: DateTimeFilter<"Appointment"> | Date | string
    status?: StringFilter<"Appointment"> | string
  }

  export type OPDRecordUpsertWithWhereUniqueWithoutPatientInput = {
    where: OPDRecordWhereUniqueInput
    update: XOR<OPDRecordUpdateWithoutPatientInput, OPDRecordUncheckedUpdateWithoutPatientInput>
    create: XOR<OPDRecordCreateWithoutPatientInput, OPDRecordUncheckedCreateWithoutPatientInput>
  }

  export type OPDRecordUpdateWithWhereUniqueWithoutPatientInput = {
    where: OPDRecordWhereUniqueInput
    data: XOR<OPDRecordUpdateWithoutPatientInput, OPDRecordUncheckedUpdateWithoutPatientInput>
  }

  export type OPDRecordUpdateManyWithWhereWithoutPatientInput = {
    where: OPDRecordScalarWhereInput
    data: XOR<OPDRecordUpdateManyMutationInput, OPDRecordUncheckedUpdateManyWithoutPatientInput>
  }

  export type OPDRecordScalarWhereInput = {
    AND?: OPDRecordScalarWhereInput | OPDRecordScalarWhereInput[]
    OR?: OPDRecordScalarWhereInput[]
    NOT?: OPDRecordScalarWhereInput | OPDRecordScalarWhereInput[]
    id?: IntFilter<"OPDRecord"> | number
    patientId?: IntFilter<"OPDRecord"> | number
    doctorId?: IntFilter<"OPDRecord"> | number
    notes?: StringFilter<"OPDRecord"> | string
    prescription?: StringFilter<"OPDRecord"> | string
    date?: DateTimeFilter<"OPDRecord"> | Date | string
  }

  export type IPDAdmissionUpsertWithWhereUniqueWithoutPatientInput = {
    where: IPDAdmissionWhereUniqueInput
    update: XOR<IPDAdmissionUpdateWithoutPatientInput, IPDAdmissionUncheckedUpdateWithoutPatientInput>
    create: XOR<IPDAdmissionCreateWithoutPatientInput, IPDAdmissionUncheckedCreateWithoutPatientInput>
  }

  export type IPDAdmissionUpdateWithWhereUniqueWithoutPatientInput = {
    where: IPDAdmissionWhereUniqueInput
    data: XOR<IPDAdmissionUpdateWithoutPatientInput, IPDAdmissionUncheckedUpdateWithoutPatientInput>
  }

  export type IPDAdmissionUpdateManyWithWhereWithoutPatientInput = {
    where: IPDAdmissionScalarWhereInput
    data: XOR<IPDAdmissionUpdateManyMutationInput, IPDAdmissionUncheckedUpdateManyWithoutPatientInput>
  }

  export type IPDAdmissionScalarWhereInput = {
    AND?: IPDAdmissionScalarWhereInput | IPDAdmissionScalarWhereInput[]
    OR?: IPDAdmissionScalarWhereInput[]
    NOT?: IPDAdmissionScalarWhereInput | IPDAdmissionScalarWhereInput[]
    id?: IntFilter<"IPDAdmission"> | number
    patientId?: IntFilter<"IPDAdmission"> | number
    roomId?: IntFilter<"IPDAdmission"> | number
    admitDate?: DateTimeFilter<"IPDAdmission"> | Date | string
    dischargeDate?: DateTimeNullableFilter<"IPDAdmission"> | Date | string | null
  }

  export type IssuedMedicineUpsertWithWhereUniqueWithoutPatientInput = {
    where: IssuedMedicineWhereUniqueInput
    update: XOR<IssuedMedicineUpdateWithoutPatientInput, IssuedMedicineUncheckedUpdateWithoutPatientInput>
    create: XOR<IssuedMedicineCreateWithoutPatientInput, IssuedMedicineUncheckedCreateWithoutPatientInput>
  }

  export type IssuedMedicineUpdateWithWhereUniqueWithoutPatientInput = {
    where: IssuedMedicineWhereUniqueInput
    data: XOR<IssuedMedicineUpdateWithoutPatientInput, IssuedMedicineUncheckedUpdateWithoutPatientInput>
  }

  export type IssuedMedicineUpdateManyWithWhereWithoutPatientInput = {
    where: IssuedMedicineScalarWhereInput
    data: XOR<IssuedMedicineUpdateManyMutationInput, IssuedMedicineUncheckedUpdateManyWithoutPatientInput>
  }

  export type IssuedMedicineScalarWhereInput = {
    AND?: IssuedMedicineScalarWhereInput | IssuedMedicineScalarWhereInput[]
    OR?: IssuedMedicineScalarWhereInput[]
    NOT?: IssuedMedicineScalarWhereInput | IssuedMedicineScalarWhereInput[]
    id?: IntFilter<"IssuedMedicine"> | number
    patientId?: IntFilter<"IssuedMedicine"> | number
    medicineId?: IntFilter<"IssuedMedicine"> | number
    quantity?: IntFilter<"IssuedMedicine"> | number
    date?: DateTimeFilter<"IssuedMedicine"> | Date | string
  }

  export type BillingUpsertWithWhereUniqueWithoutPatientInput = {
    where: BillingWhereUniqueInput
    update: XOR<BillingUpdateWithoutPatientInput, BillingUncheckedUpdateWithoutPatientInput>
    create: XOR<BillingCreateWithoutPatientInput, BillingUncheckedCreateWithoutPatientInput>
  }

  export type BillingUpdateWithWhereUniqueWithoutPatientInput = {
    where: BillingWhereUniqueInput
    data: XOR<BillingUpdateWithoutPatientInput, BillingUncheckedUpdateWithoutPatientInput>
  }

  export type BillingUpdateManyWithWhereWithoutPatientInput = {
    where: BillingScalarWhereInput
    data: XOR<BillingUpdateManyMutationInput, BillingUncheckedUpdateManyWithoutPatientInput>
  }

  export type BillingScalarWhereInput = {
    AND?: BillingScalarWhereInput | BillingScalarWhereInput[]
    OR?: BillingScalarWhereInput[]
    NOT?: BillingScalarWhereInput | BillingScalarWhereInput[]
    id?: IntFilter<"Billing"> | number
    patientId?: IntFilter<"Billing"> | number
    amount?: FloatFilter<"Billing"> | number
    status?: StringFilter<"Billing"> | string
    billDate?: DateTimeFilter<"Billing"> | Date | string
  }

  export type LabTestUpsertWithWhereUniqueWithoutPatientInput = {
    where: LabTestWhereUniqueInput
    update: XOR<LabTestUpdateWithoutPatientInput, LabTestUncheckedUpdateWithoutPatientInput>
    create: XOR<LabTestCreateWithoutPatientInput, LabTestUncheckedCreateWithoutPatientInput>
  }

  export type LabTestUpdateWithWhereUniqueWithoutPatientInput = {
    where: LabTestWhereUniqueInput
    data: XOR<LabTestUpdateWithoutPatientInput, LabTestUncheckedUpdateWithoutPatientInput>
  }

  export type LabTestUpdateManyWithWhereWithoutPatientInput = {
    where: LabTestScalarWhereInput
    data: XOR<LabTestUpdateManyMutationInput, LabTestUncheckedUpdateManyWithoutPatientInput>
  }

  export type LabTestScalarWhereInput = {
    AND?: LabTestScalarWhereInput | LabTestScalarWhereInput[]
    OR?: LabTestScalarWhereInput[]
    NOT?: LabTestScalarWhereInput | LabTestScalarWhereInput[]
    id?: IntFilter<"LabTest"> | number
    patientId?: IntFilter<"LabTest"> | number
    doctorId?: IntFilter<"LabTest"> | number
    testType?: StringFilter<"LabTest"> | string
    result?: StringNullableFilter<"LabTest"> | string | null
    status?: StringFilter<"LabTest"> | string
  }

  export type AppointmentCreateWithoutDoctorInput = {
    date: Date | string
    status: string
    patient: PatientCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutDoctorInput = {
    id?: number
    patientId: number
    date: Date | string
    status: string
  }

  export type AppointmentCreateOrConnectWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentCreateManyDoctorInputEnvelope = {
    data: AppointmentCreateManyDoctorInput | AppointmentCreateManyDoctorInput[]
  }

  export type OPDRecordCreateWithoutDoctorInput = {
    notes: string
    prescription: string
    date: Date | string
    patient: PatientCreateNestedOneWithoutOpdRecordsInput
  }

  export type OPDRecordUncheckedCreateWithoutDoctorInput = {
    id?: number
    patientId: number
    notes: string
    prescription: string
    date: Date | string
  }

  export type OPDRecordCreateOrConnectWithoutDoctorInput = {
    where: OPDRecordWhereUniqueInput
    create: XOR<OPDRecordCreateWithoutDoctorInput, OPDRecordUncheckedCreateWithoutDoctorInput>
  }

  export type OPDRecordCreateManyDoctorInputEnvelope = {
    data: OPDRecordCreateManyDoctorInput | OPDRecordCreateManyDoctorInput[]
  }

  export type LabTestCreateWithoutDoctorInput = {
    testType: string
    result?: string | null
    status: string
    patient: PatientCreateNestedOneWithoutLabTestInput
  }

  export type LabTestUncheckedCreateWithoutDoctorInput = {
    id?: number
    patientId: number
    testType: string
    result?: string | null
    status: string
  }

  export type LabTestCreateOrConnectWithoutDoctorInput = {
    where: LabTestWhereUniqueInput
    create: XOR<LabTestCreateWithoutDoctorInput, LabTestUncheckedCreateWithoutDoctorInput>
  }

  export type LabTestCreateManyDoctorInputEnvelope = {
    data: LabTestCreateManyDoctorInput | LabTestCreateManyDoctorInput[]
  }

  export type AppointmentUpsertWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutDoctorInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutDoctorInput>
  }

  export type OPDRecordUpsertWithWhereUniqueWithoutDoctorInput = {
    where: OPDRecordWhereUniqueInput
    update: XOR<OPDRecordUpdateWithoutDoctorInput, OPDRecordUncheckedUpdateWithoutDoctorInput>
    create: XOR<OPDRecordCreateWithoutDoctorInput, OPDRecordUncheckedCreateWithoutDoctorInput>
  }

  export type OPDRecordUpdateWithWhereUniqueWithoutDoctorInput = {
    where: OPDRecordWhereUniqueInput
    data: XOR<OPDRecordUpdateWithoutDoctorInput, OPDRecordUncheckedUpdateWithoutDoctorInput>
  }

  export type OPDRecordUpdateManyWithWhereWithoutDoctorInput = {
    where: OPDRecordScalarWhereInput
    data: XOR<OPDRecordUpdateManyMutationInput, OPDRecordUncheckedUpdateManyWithoutDoctorInput>
  }

  export type LabTestUpsertWithWhereUniqueWithoutDoctorInput = {
    where: LabTestWhereUniqueInput
    update: XOR<LabTestUpdateWithoutDoctorInput, LabTestUncheckedUpdateWithoutDoctorInput>
    create: XOR<LabTestCreateWithoutDoctorInput, LabTestUncheckedCreateWithoutDoctorInput>
  }

  export type LabTestUpdateWithWhereUniqueWithoutDoctorInput = {
    where: LabTestWhereUniqueInput
    data: XOR<LabTestUpdateWithoutDoctorInput, LabTestUncheckedUpdateWithoutDoctorInput>
  }

  export type LabTestUpdateManyWithWhereWithoutDoctorInput = {
    where: LabTestScalarWhereInput
    data: XOR<LabTestUpdateManyMutationInput, LabTestUncheckedUpdateManyWithoutDoctorInput>
  }

  export type PatientCreateWithoutAppointmentsInput = {
    name: string
    gender: string
    dob: Date | string
    contact: string
    allergies?: string | null
    history?: string | null
    opdRecords?: OPDRecordCreateNestedManyWithoutPatientInput
    ipdAdmissions?: IPDAdmissionCreateNestedManyWithoutPatientInput
    issuedMedicines?: IssuedMedicineCreateNestedManyWithoutPatientInput
    billings?: BillingCreateNestedManyWithoutPatientInput
    LabTest?: LabTestCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    name: string
    gender: string
    dob: Date | string
    contact: string
    allergies?: string | null
    history?: string | null
    opdRecords?: OPDRecordUncheckedCreateNestedManyWithoutPatientInput
    ipdAdmissions?: IPDAdmissionUncheckedCreateNestedManyWithoutPatientInput
    issuedMedicines?: IssuedMedicineUncheckedCreateNestedManyWithoutPatientInput
    billings?: BillingUncheckedCreateNestedManyWithoutPatientInput
    LabTest?: LabTestUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutAppointmentsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
  }

  export type DoctorCreateWithoutAppointmentsInput = {
    name: string
    department: string
    specialization?: string | null
    opdRecords?: OPDRecordCreateNestedManyWithoutDoctorInput
    labTests?: LabTestCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    name: string
    department: string
    specialization?: string | null
    opdRecords?: OPDRecordUncheckedCreateNestedManyWithoutDoctorInput
    labTests?: LabTestUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutAppointmentsInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
  }

  export type PatientUpsertWithoutAppointmentsInput = {
    update: XOR<PatientUpdateWithoutAppointmentsInput, PatientUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutAppointmentsInput, PatientUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PatientUpdateWithoutAppointmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    history?: NullableStringFieldUpdateOperationsInput | string | null
    opdRecords?: OPDRecordUpdateManyWithoutPatientNestedInput
    ipdAdmissions?: IPDAdmissionUpdateManyWithoutPatientNestedInput
    issuedMedicines?: IssuedMedicineUpdateManyWithoutPatientNestedInput
    billings?: BillingUpdateManyWithoutPatientNestedInput
    LabTest?: LabTestUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    history?: NullableStringFieldUpdateOperationsInput | string | null
    opdRecords?: OPDRecordUncheckedUpdateManyWithoutPatientNestedInput
    ipdAdmissions?: IPDAdmissionUncheckedUpdateManyWithoutPatientNestedInput
    issuedMedicines?: IssuedMedicineUncheckedUpdateManyWithoutPatientNestedInput
    billings?: BillingUncheckedUpdateManyWithoutPatientNestedInput
    LabTest?: LabTestUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type DoctorUpsertWithoutAppointmentsInput = {
    update: XOR<DoctorUpdateWithoutAppointmentsInput, DoctorUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutAppointmentsInput, DoctorUncheckedUpdateWithoutAppointmentsInput>
  }

  export type DoctorUpdateWithoutAppointmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    opdRecords?: OPDRecordUpdateManyWithoutDoctorNestedInput
    labTests?: LabTestUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    opdRecords?: OPDRecordUncheckedUpdateManyWithoutDoctorNestedInput
    labTests?: LabTestUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type PatientCreateWithoutOpdRecordsInput = {
    name: string
    gender: string
    dob: Date | string
    contact: string
    allergies?: string | null
    history?: string | null
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    ipdAdmissions?: IPDAdmissionCreateNestedManyWithoutPatientInput
    issuedMedicines?: IssuedMedicineCreateNestedManyWithoutPatientInput
    billings?: BillingCreateNestedManyWithoutPatientInput
    LabTest?: LabTestCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutOpdRecordsInput = {
    id?: number
    name: string
    gender: string
    dob: Date | string
    contact: string
    allergies?: string | null
    history?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    ipdAdmissions?: IPDAdmissionUncheckedCreateNestedManyWithoutPatientInput
    issuedMedicines?: IssuedMedicineUncheckedCreateNestedManyWithoutPatientInput
    billings?: BillingUncheckedCreateNestedManyWithoutPatientInput
    LabTest?: LabTestUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutOpdRecordsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutOpdRecordsInput, PatientUncheckedCreateWithoutOpdRecordsInput>
  }

  export type DoctorCreateWithoutOpdRecordsInput = {
    name: string
    department: string
    specialization?: string | null
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    labTests?: LabTestCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutOpdRecordsInput = {
    id?: number
    name: string
    department: string
    specialization?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    labTests?: LabTestUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutOpdRecordsInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutOpdRecordsInput, DoctorUncheckedCreateWithoutOpdRecordsInput>
  }

  export type PatientUpsertWithoutOpdRecordsInput = {
    update: XOR<PatientUpdateWithoutOpdRecordsInput, PatientUncheckedUpdateWithoutOpdRecordsInput>
    create: XOR<PatientCreateWithoutOpdRecordsInput, PatientUncheckedCreateWithoutOpdRecordsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutOpdRecordsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutOpdRecordsInput, PatientUncheckedUpdateWithoutOpdRecordsInput>
  }

  export type PatientUpdateWithoutOpdRecordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    history?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    ipdAdmissions?: IPDAdmissionUpdateManyWithoutPatientNestedInput
    issuedMedicines?: IssuedMedicineUpdateManyWithoutPatientNestedInput
    billings?: BillingUpdateManyWithoutPatientNestedInput
    LabTest?: LabTestUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutOpdRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    history?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    ipdAdmissions?: IPDAdmissionUncheckedUpdateManyWithoutPatientNestedInput
    issuedMedicines?: IssuedMedicineUncheckedUpdateManyWithoutPatientNestedInput
    billings?: BillingUncheckedUpdateManyWithoutPatientNestedInput
    LabTest?: LabTestUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type DoctorUpsertWithoutOpdRecordsInput = {
    update: XOR<DoctorUpdateWithoutOpdRecordsInput, DoctorUncheckedUpdateWithoutOpdRecordsInput>
    create: XOR<DoctorCreateWithoutOpdRecordsInput, DoctorUncheckedCreateWithoutOpdRecordsInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutOpdRecordsInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutOpdRecordsInput, DoctorUncheckedUpdateWithoutOpdRecordsInput>
  }

  export type DoctorUpdateWithoutOpdRecordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    labTests?: LabTestUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutOpdRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    labTests?: LabTestUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type PatientCreateWithoutIpdAdmissionsInput = {
    name: string
    gender: string
    dob: Date | string
    contact: string
    allergies?: string | null
    history?: string | null
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    opdRecords?: OPDRecordCreateNestedManyWithoutPatientInput
    issuedMedicines?: IssuedMedicineCreateNestedManyWithoutPatientInput
    billings?: BillingCreateNestedManyWithoutPatientInput
    LabTest?: LabTestCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutIpdAdmissionsInput = {
    id?: number
    name: string
    gender: string
    dob: Date | string
    contact: string
    allergies?: string | null
    history?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    opdRecords?: OPDRecordUncheckedCreateNestedManyWithoutPatientInput
    issuedMedicines?: IssuedMedicineUncheckedCreateNestedManyWithoutPatientInput
    billings?: BillingUncheckedCreateNestedManyWithoutPatientInput
    LabTest?: LabTestUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutIpdAdmissionsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutIpdAdmissionsInput, PatientUncheckedCreateWithoutIpdAdmissionsInput>
  }

  export type RoomCreateWithoutIpdAdmissionsInput = {
    roomType: string
    isOccupied?: boolean
  }

  export type RoomUncheckedCreateWithoutIpdAdmissionsInput = {
    id?: number
    roomType: string
    isOccupied?: boolean
  }

  export type RoomCreateOrConnectWithoutIpdAdmissionsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutIpdAdmissionsInput, RoomUncheckedCreateWithoutIpdAdmissionsInput>
  }

  export type PatientUpsertWithoutIpdAdmissionsInput = {
    update: XOR<PatientUpdateWithoutIpdAdmissionsInput, PatientUncheckedUpdateWithoutIpdAdmissionsInput>
    create: XOR<PatientCreateWithoutIpdAdmissionsInput, PatientUncheckedCreateWithoutIpdAdmissionsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutIpdAdmissionsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutIpdAdmissionsInput, PatientUncheckedUpdateWithoutIpdAdmissionsInput>
  }

  export type PatientUpdateWithoutIpdAdmissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    history?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    opdRecords?: OPDRecordUpdateManyWithoutPatientNestedInput
    issuedMedicines?: IssuedMedicineUpdateManyWithoutPatientNestedInput
    billings?: BillingUpdateManyWithoutPatientNestedInput
    LabTest?: LabTestUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutIpdAdmissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    history?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    opdRecords?: OPDRecordUncheckedUpdateManyWithoutPatientNestedInput
    issuedMedicines?: IssuedMedicineUncheckedUpdateManyWithoutPatientNestedInput
    billings?: BillingUncheckedUpdateManyWithoutPatientNestedInput
    LabTest?: LabTestUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type RoomUpsertWithoutIpdAdmissionsInput = {
    update: XOR<RoomUpdateWithoutIpdAdmissionsInput, RoomUncheckedUpdateWithoutIpdAdmissionsInput>
    create: XOR<RoomCreateWithoutIpdAdmissionsInput, RoomUncheckedCreateWithoutIpdAdmissionsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutIpdAdmissionsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutIpdAdmissionsInput, RoomUncheckedUpdateWithoutIpdAdmissionsInput>
  }

  export type RoomUpdateWithoutIpdAdmissionsInput = {
    roomType?: StringFieldUpdateOperationsInput | string
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoomUncheckedUpdateWithoutIpdAdmissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomType?: StringFieldUpdateOperationsInput | string
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IPDAdmissionCreateWithoutRoomInput = {
    admitDate: Date | string
    dischargeDate?: Date | string | null
    patient: PatientCreateNestedOneWithoutIpdAdmissionsInput
  }

  export type IPDAdmissionUncheckedCreateWithoutRoomInput = {
    id?: number
    patientId: number
    admitDate: Date | string
    dischargeDate?: Date | string | null
  }

  export type IPDAdmissionCreateOrConnectWithoutRoomInput = {
    where: IPDAdmissionWhereUniqueInput
    create: XOR<IPDAdmissionCreateWithoutRoomInput, IPDAdmissionUncheckedCreateWithoutRoomInput>
  }

  export type IPDAdmissionCreateManyRoomInputEnvelope = {
    data: IPDAdmissionCreateManyRoomInput | IPDAdmissionCreateManyRoomInput[]
  }

  export type IPDAdmissionUpsertWithWhereUniqueWithoutRoomInput = {
    where: IPDAdmissionWhereUniqueInput
    update: XOR<IPDAdmissionUpdateWithoutRoomInput, IPDAdmissionUncheckedUpdateWithoutRoomInput>
    create: XOR<IPDAdmissionCreateWithoutRoomInput, IPDAdmissionUncheckedCreateWithoutRoomInput>
  }

  export type IPDAdmissionUpdateWithWhereUniqueWithoutRoomInput = {
    where: IPDAdmissionWhereUniqueInput
    data: XOR<IPDAdmissionUpdateWithoutRoomInput, IPDAdmissionUncheckedUpdateWithoutRoomInput>
  }

  export type IPDAdmissionUpdateManyWithWhereWithoutRoomInput = {
    where: IPDAdmissionScalarWhereInput
    data: XOR<IPDAdmissionUpdateManyMutationInput, IPDAdmissionUncheckedUpdateManyWithoutRoomInput>
  }

  export type PatientCreateWithoutLabTestInput = {
    name: string
    gender: string
    dob: Date | string
    contact: string
    allergies?: string | null
    history?: string | null
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    opdRecords?: OPDRecordCreateNestedManyWithoutPatientInput
    ipdAdmissions?: IPDAdmissionCreateNestedManyWithoutPatientInput
    issuedMedicines?: IssuedMedicineCreateNestedManyWithoutPatientInput
    billings?: BillingCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutLabTestInput = {
    id?: number
    name: string
    gender: string
    dob: Date | string
    contact: string
    allergies?: string | null
    history?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    opdRecords?: OPDRecordUncheckedCreateNestedManyWithoutPatientInput
    ipdAdmissions?: IPDAdmissionUncheckedCreateNestedManyWithoutPatientInput
    issuedMedicines?: IssuedMedicineUncheckedCreateNestedManyWithoutPatientInput
    billings?: BillingUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutLabTestInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutLabTestInput, PatientUncheckedCreateWithoutLabTestInput>
  }

  export type DoctorCreateWithoutLabTestsInput = {
    name: string
    department: string
    specialization?: string | null
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    opdRecords?: OPDRecordCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutLabTestsInput = {
    id?: number
    name: string
    department: string
    specialization?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    opdRecords?: OPDRecordUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutLabTestsInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutLabTestsInput, DoctorUncheckedCreateWithoutLabTestsInput>
  }

  export type PatientUpsertWithoutLabTestInput = {
    update: XOR<PatientUpdateWithoutLabTestInput, PatientUncheckedUpdateWithoutLabTestInput>
    create: XOR<PatientCreateWithoutLabTestInput, PatientUncheckedCreateWithoutLabTestInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutLabTestInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutLabTestInput, PatientUncheckedUpdateWithoutLabTestInput>
  }

  export type PatientUpdateWithoutLabTestInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    history?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    opdRecords?: OPDRecordUpdateManyWithoutPatientNestedInput
    ipdAdmissions?: IPDAdmissionUpdateManyWithoutPatientNestedInput
    issuedMedicines?: IssuedMedicineUpdateManyWithoutPatientNestedInput
    billings?: BillingUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutLabTestInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    history?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    opdRecords?: OPDRecordUncheckedUpdateManyWithoutPatientNestedInput
    ipdAdmissions?: IPDAdmissionUncheckedUpdateManyWithoutPatientNestedInput
    issuedMedicines?: IssuedMedicineUncheckedUpdateManyWithoutPatientNestedInput
    billings?: BillingUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type DoctorUpsertWithoutLabTestsInput = {
    update: XOR<DoctorUpdateWithoutLabTestsInput, DoctorUncheckedUpdateWithoutLabTestsInput>
    create: XOR<DoctorCreateWithoutLabTestsInput, DoctorUncheckedCreateWithoutLabTestsInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutLabTestsInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutLabTestsInput, DoctorUncheckedUpdateWithoutLabTestsInput>
  }

  export type DoctorUpdateWithoutLabTestsInput = {
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    opdRecords?: OPDRecordUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutLabTestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    opdRecords?: OPDRecordUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type IssuedMedicineCreateWithoutMedicineInput = {
    quantity: number
    date: Date | string
    patient: PatientCreateNestedOneWithoutIssuedMedicinesInput
  }

  export type IssuedMedicineUncheckedCreateWithoutMedicineInput = {
    id?: number
    patientId: number
    quantity: number
    date: Date | string
  }

  export type IssuedMedicineCreateOrConnectWithoutMedicineInput = {
    where: IssuedMedicineWhereUniqueInput
    create: XOR<IssuedMedicineCreateWithoutMedicineInput, IssuedMedicineUncheckedCreateWithoutMedicineInput>
  }

  export type IssuedMedicineCreateManyMedicineInputEnvelope = {
    data: IssuedMedicineCreateManyMedicineInput | IssuedMedicineCreateManyMedicineInput[]
  }

  export type IssuedMedicineUpsertWithWhereUniqueWithoutMedicineInput = {
    where: IssuedMedicineWhereUniqueInput
    update: XOR<IssuedMedicineUpdateWithoutMedicineInput, IssuedMedicineUncheckedUpdateWithoutMedicineInput>
    create: XOR<IssuedMedicineCreateWithoutMedicineInput, IssuedMedicineUncheckedCreateWithoutMedicineInput>
  }

  export type IssuedMedicineUpdateWithWhereUniqueWithoutMedicineInput = {
    where: IssuedMedicineWhereUniqueInput
    data: XOR<IssuedMedicineUpdateWithoutMedicineInput, IssuedMedicineUncheckedUpdateWithoutMedicineInput>
  }

  export type IssuedMedicineUpdateManyWithWhereWithoutMedicineInput = {
    where: IssuedMedicineScalarWhereInput
    data: XOR<IssuedMedicineUpdateManyMutationInput, IssuedMedicineUncheckedUpdateManyWithoutMedicineInput>
  }

  export type PatientCreateWithoutIssuedMedicinesInput = {
    name: string
    gender: string
    dob: Date | string
    contact: string
    allergies?: string | null
    history?: string | null
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    opdRecords?: OPDRecordCreateNestedManyWithoutPatientInput
    ipdAdmissions?: IPDAdmissionCreateNestedManyWithoutPatientInput
    billings?: BillingCreateNestedManyWithoutPatientInput
    LabTest?: LabTestCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutIssuedMedicinesInput = {
    id?: number
    name: string
    gender: string
    dob: Date | string
    contact: string
    allergies?: string | null
    history?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    opdRecords?: OPDRecordUncheckedCreateNestedManyWithoutPatientInput
    ipdAdmissions?: IPDAdmissionUncheckedCreateNestedManyWithoutPatientInput
    billings?: BillingUncheckedCreateNestedManyWithoutPatientInput
    LabTest?: LabTestUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutIssuedMedicinesInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutIssuedMedicinesInput, PatientUncheckedCreateWithoutIssuedMedicinesInput>
  }

  export type MedicineCreateWithoutIssuedMedicinesInput = {
    name: string
    batch: string
    expiry: Date | string
    quantity: number
  }

  export type MedicineUncheckedCreateWithoutIssuedMedicinesInput = {
    id?: number
    name: string
    batch: string
    expiry: Date | string
    quantity: number
  }

  export type MedicineCreateOrConnectWithoutIssuedMedicinesInput = {
    where: MedicineWhereUniqueInput
    create: XOR<MedicineCreateWithoutIssuedMedicinesInput, MedicineUncheckedCreateWithoutIssuedMedicinesInput>
  }

  export type PatientUpsertWithoutIssuedMedicinesInput = {
    update: XOR<PatientUpdateWithoutIssuedMedicinesInput, PatientUncheckedUpdateWithoutIssuedMedicinesInput>
    create: XOR<PatientCreateWithoutIssuedMedicinesInput, PatientUncheckedCreateWithoutIssuedMedicinesInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutIssuedMedicinesInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutIssuedMedicinesInput, PatientUncheckedUpdateWithoutIssuedMedicinesInput>
  }

  export type PatientUpdateWithoutIssuedMedicinesInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    history?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    opdRecords?: OPDRecordUpdateManyWithoutPatientNestedInput
    ipdAdmissions?: IPDAdmissionUpdateManyWithoutPatientNestedInput
    billings?: BillingUpdateManyWithoutPatientNestedInput
    LabTest?: LabTestUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutIssuedMedicinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    history?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    opdRecords?: OPDRecordUncheckedUpdateManyWithoutPatientNestedInput
    ipdAdmissions?: IPDAdmissionUncheckedUpdateManyWithoutPatientNestedInput
    billings?: BillingUncheckedUpdateManyWithoutPatientNestedInput
    LabTest?: LabTestUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type MedicineUpsertWithoutIssuedMedicinesInput = {
    update: XOR<MedicineUpdateWithoutIssuedMedicinesInput, MedicineUncheckedUpdateWithoutIssuedMedicinesInput>
    create: XOR<MedicineCreateWithoutIssuedMedicinesInput, MedicineUncheckedCreateWithoutIssuedMedicinesInput>
    where?: MedicineWhereInput
  }

  export type MedicineUpdateToOneWithWhereWithoutIssuedMedicinesInput = {
    where?: MedicineWhereInput
    data: XOR<MedicineUpdateWithoutIssuedMedicinesInput, MedicineUncheckedUpdateWithoutIssuedMedicinesInput>
  }

  export type MedicineUpdateWithoutIssuedMedicinesInput = {
    name?: StringFieldUpdateOperationsInput | string
    batch?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type MedicineUncheckedUpdateWithoutIssuedMedicinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    batch?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type PatientCreateWithoutBillingsInput = {
    name: string
    gender: string
    dob: Date | string
    contact: string
    allergies?: string | null
    history?: string | null
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    opdRecords?: OPDRecordCreateNestedManyWithoutPatientInput
    ipdAdmissions?: IPDAdmissionCreateNestedManyWithoutPatientInput
    issuedMedicines?: IssuedMedicineCreateNestedManyWithoutPatientInput
    LabTest?: LabTestCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutBillingsInput = {
    id?: number
    name: string
    gender: string
    dob: Date | string
    contact: string
    allergies?: string | null
    history?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    opdRecords?: OPDRecordUncheckedCreateNestedManyWithoutPatientInput
    ipdAdmissions?: IPDAdmissionUncheckedCreateNestedManyWithoutPatientInput
    issuedMedicines?: IssuedMedicineUncheckedCreateNestedManyWithoutPatientInput
    LabTest?: LabTestUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutBillingsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutBillingsInput, PatientUncheckedCreateWithoutBillingsInput>
  }

  export type PatientUpsertWithoutBillingsInput = {
    update: XOR<PatientUpdateWithoutBillingsInput, PatientUncheckedUpdateWithoutBillingsInput>
    create: XOR<PatientCreateWithoutBillingsInput, PatientUncheckedCreateWithoutBillingsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutBillingsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutBillingsInput, PatientUncheckedUpdateWithoutBillingsInput>
  }

  export type PatientUpdateWithoutBillingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    history?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    opdRecords?: OPDRecordUpdateManyWithoutPatientNestedInput
    ipdAdmissions?: IPDAdmissionUpdateManyWithoutPatientNestedInput
    issuedMedicines?: IssuedMedicineUpdateManyWithoutPatientNestedInput
    LabTest?: LabTestUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutBillingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    history?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    opdRecords?: OPDRecordUncheckedUpdateManyWithoutPatientNestedInput
    ipdAdmissions?: IPDAdmissionUncheckedUpdateManyWithoutPatientNestedInput
    issuedMedicines?: IssuedMedicineUncheckedUpdateManyWithoutPatientNestedInput
    LabTest?: LabTestUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type AppointmentCreateManyPatientInput = {
    id?: number
    doctorId: number
    date: Date | string
    status: string
  }

  export type OPDRecordCreateManyPatientInput = {
    id?: number
    doctorId: number
    notes: string
    prescription: string
    date: Date | string
  }

  export type IPDAdmissionCreateManyPatientInput = {
    id?: number
    roomId: number
    admitDate: Date | string
    dischargeDate?: Date | string | null
  }

  export type IssuedMedicineCreateManyPatientInput = {
    id?: number
    medicineId: number
    quantity: number
    date: Date | string
  }

  export type BillingCreateManyPatientInput = {
    id?: number
    amount: number
    status: string
    billDate: Date | string
  }

  export type LabTestCreateManyPatientInput = {
    id?: number
    doctorId: number
    testType: string
    result?: string | null
    status: string
  }

  export type AppointmentUpdateWithoutPatientInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    doctor?: DoctorUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OPDRecordUpdateWithoutPatientInput = {
    notes?: StringFieldUpdateOperationsInput | string
    prescription?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutOpdRecordsNestedInput
  }

  export type OPDRecordUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    prescription?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OPDRecordUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    prescription?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IPDAdmissionUpdateWithoutPatientInput = {
    admitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dischargeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room?: RoomUpdateOneRequiredWithoutIpdAdmissionsNestedInput
  }

  export type IPDAdmissionUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    admitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dischargeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IPDAdmissionUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    admitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dischargeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IssuedMedicineUpdateWithoutPatientInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    medicine?: MedicineUpdateOneRequiredWithoutIssuedMedicinesNestedInput
  }

  export type IssuedMedicineUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssuedMedicineUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingUpdateWithoutPatientInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    billDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    billDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    billDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabTestUpdateWithoutPatientInput = {
    testType?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    doctor?: DoctorUpdateOneRequiredWithoutLabTestsNestedInput
  }

  export type LabTestUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    testType?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type LabTestUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    testType?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentCreateManyDoctorInput = {
    id?: number
    patientId: number
    date: Date | string
    status: string
  }

  export type OPDRecordCreateManyDoctorInput = {
    id?: number
    patientId: number
    notes: string
    prescription: string
    date: Date | string
  }

  export type LabTestCreateManyDoctorInput = {
    id?: number
    patientId: number
    testType: string
    result?: string | null
    status: string
  }

  export type AppointmentUpdateWithoutDoctorInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OPDRecordUpdateWithoutDoctorInput = {
    notes?: StringFieldUpdateOperationsInput | string
    prescription?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutOpdRecordsNestedInput
  }

  export type OPDRecordUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    prescription?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OPDRecordUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    prescription?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabTestUpdateWithoutDoctorInput = {
    testType?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    patient?: PatientUpdateOneRequiredWithoutLabTestNestedInput
  }

  export type LabTestUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    testType?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type LabTestUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    testType?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type IPDAdmissionCreateManyRoomInput = {
    id?: number
    patientId: number
    admitDate: Date | string
    dischargeDate?: Date | string | null
  }

  export type IPDAdmissionUpdateWithoutRoomInput = {
    admitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dischargeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patient?: PatientUpdateOneRequiredWithoutIpdAdmissionsNestedInput
  }

  export type IPDAdmissionUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    admitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dischargeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IPDAdmissionUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    admitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dischargeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IssuedMedicineCreateManyMedicineInput = {
    id?: number
    patientId: number
    quantity: number
    date: Date | string
  }

  export type IssuedMedicineUpdateWithoutMedicineInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutIssuedMedicinesNestedInput
  }

  export type IssuedMedicineUncheckedUpdateWithoutMedicineInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssuedMedicineUncheckedUpdateManyWithoutMedicineInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}