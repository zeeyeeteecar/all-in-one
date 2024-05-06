
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model Tb_staff_info
 * 
 */
export type Tb_staff_info = {
  staff_ID: number
  userName: string
  firstName: string
  lastName: string
  staffO2B2_ID: number
}

/**
 * Model Tb_staff_leave
 * 
 */
export type Tb_staff_leave = {
  Leave_ID: number
  staff_o2b2_ID: number
  staffLeaveType: string
  staffLeaveDate: Date
  staffLeaveNote: string
}

/**
 * Model Tb_state_holiday
 * 
 */
export type Tb_state_holiday = {
  holiday_ID: number
  holidayTitle: string
  holidayDate: Date
  holidayYear: string
}

/**
 * Model Tb_state_holiday_copy
 * 
 */
export type Tb_state_holiday_copy = {
  holiday_ID: number
  holidayTitle: string
  holidayDate: Date
  holidayYear: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tb_staff_infos
 * const tb_staff_infos = await prisma.tb_staff_info.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tb_staff_infos
   * const tb_staff_infos = await prisma.tb_staff_info.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.tb_staff_info`: Exposes CRUD operations for the **Tb_staff_info** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_staff_infos
    * const tb_staff_infos = await prisma.tb_staff_info.findMany()
    * ```
    */
  get tb_staff_info(): Prisma.Tb_staff_infoDelegate<GlobalReject>;

  /**
   * `prisma.tb_staff_leave`: Exposes CRUD operations for the **Tb_staff_leave** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_staff_leaves
    * const tb_staff_leaves = await prisma.tb_staff_leave.findMany()
    * ```
    */
  get tb_staff_leave(): Prisma.Tb_staff_leaveDelegate<GlobalReject>;

  /**
   * `prisma.tb_state_holiday`: Exposes CRUD operations for the **Tb_state_holiday** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_state_holidays
    * const tb_state_holidays = await prisma.tb_state_holiday.findMany()
    * ```
    */
  get tb_state_holiday(): Prisma.Tb_state_holidayDelegate<GlobalReject>;

  /**
   * `prisma.tb_state_holiday_copy`: Exposes CRUD operations for the **Tb_state_holiday_copy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_state_holiday_copies
    * const tb_state_holiday_copies = await prisma.tb_state_holiday_copy.findMany()
    * ```
    */
  get tb_state_holiday_copy(): Prisma.Tb_state_holiday_copyDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.14.1
   * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Tb_staff_info: 'Tb_staff_info',
    Tb_staff_leave: 'Tb_staff_leave',
    Tb_state_holiday: 'Tb_state_holiday',
    Tb_state_holiday_copy: 'Tb_state_holiday_copy'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Tb_staff_info
   */


  export type AggregateTb_staff_info = {
    _count: Tb_staff_infoCountAggregateOutputType | null
    _avg: Tb_staff_infoAvgAggregateOutputType | null
    _sum: Tb_staff_infoSumAggregateOutputType | null
    _min: Tb_staff_infoMinAggregateOutputType | null
    _max: Tb_staff_infoMaxAggregateOutputType | null
  }

  export type Tb_staff_infoAvgAggregateOutputType = {
    staff_ID: number | null
    staffO2B2_ID: number | null
  }

  export type Tb_staff_infoSumAggregateOutputType = {
    staff_ID: number | null
    staffO2B2_ID: number | null
  }

  export type Tb_staff_infoMinAggregateOutputType = {
    staff_ID: number | null
    userName: string | null
    firstName: string | null
    lastName: string | null
    staffO2B2_ID: number | null
  }

  export type Tb_staff_infoMaxAggregateOutputType = {
    staff_ID: number | null
    userName: string | null
    firstName: string | null
    lastName: string | null
    staffO2B2_ID: number | null
  }

  export type Tb_staff_infoCountAggregateOutputType = {
    staff_ID: number
    userName: number
    firstName: number
    lastName: number
    staffO2B2_ID: number
    _all: number
  }


  export type Tb_staff_infoAvgAggregateInputType = {
    staff_ID?: true
    staffO2B2_ID?: true
  }

  export type Tb_staff_infoSumAggregateInputType = {
    staff_ID?: true
    staffO2B2_ID?: true
  }

  export type Tb_staff_infoMinAggregateInputType = {
    staff_ID?: true
    userName?: true
    firstName?: true
    lastName?: true
    staffO2B2_ID?: true
  }

  export type Tb_staff_infoMaxAggregateInputType = {
    staff_ID?: true
    userName?: true
    firstName?: true
    lastName?: true
    staffO2B2_ID?: true
  }

  export type Tb_staff_infoCountAggregateInputType = {
    staff_ID?: true
    userName?: true
    firstName?: true
    lastName?: true
    staffO2B2_ID?: true
    _all?: true
  }

  export type Tb_staff_infoAggregateArgs = {
    /**
     * Filter which Tb_staff_info to aggregate.
     */
    where?: Tb_staff_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tb_staff_infos to fetch.
     */
    orderBy?: Enumerable<Tb_staff_infoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Tb_staff_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tb_staff_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tb_staff_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tb_staff_infos
    **/
    _count?: true | Tb_staff_infoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_staff_infoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_staff_infoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_staff_infoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_staff_infoMaxAggregateInputType
  }

  export type GetTb_staff_infoAggregateType<T extends Tb_staff_infoAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_staff_info]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_staff_info[P]>
      : GetScalarType<T[P], AggregateTb_staff_info[P]>
  }




  export type Tb_staff_infoGroupByArgs = {
    where?: Tb_staff_infoWhereInput
    orderBy?: Enumerable<Tb_staff_infoOrderByWithAggregationInput>
    by: Tb_staff_infoScalarFieldEnum[]
    having?: Tb_staff_infoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_staff_infoCountAggregateInputType | true
    _avg?: Tb_staff_infoAvgAggregateInputType
    _sum?: Tb_staff_infoSumAggregateInputType
    _min?: Tb_staff_infoMinAggregateInputType
    _max?: Tb_staff_infoMaxAggregateInputType
  }


  export type Tb_staff_infoGroupByOutputType = {
    staff_ID: number
    userName: string
    firstName: string
    lastName: string
    staffO2B2_ID: number
    _count: Tb_staff_infoCountAggregateOutputType | null
    _avg: Tb_staff_infoAvgAggregateOutputType | null
    _sum: Tb_staff_infoSumAggregateOutputType | null
    _min: Tb_staff_infoMinAggregateOutputType | null
    _max: Tb_staff_infoMaxAggregateOutputType | null
  }

  type GetTb_staff_infoGroupByPayload<T extends Tb_staff_infoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Tb_staff_infoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_staff_infoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_staff_infoGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_staff_infoGroupByOutputType[P]>
        }
      >
    >


  export type Tb_staff_infoSelect = {
    staff_ID?: boolean
    userName?: boolean
    firstName?: boolean
    lastName?: boolean
    staffO2B2_ID?: boolean
  }


  export type Tb_staff_infoGetPayload<S extends boolean | null | undefined | Tb_staff_infoArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Tb_staff_info :
    S extends undefined ? never :
    S extends { include: any } & (Tb_staff_infoArgs | Tb_staff_infoFindManyArgs)
    ? Tb_staff_info 
    : S extends { select: any } & (Tb_staff_infoArgs | Tb_staff_infoFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Tb_staff_info ? Tb_staff_info[P] : never
  } 
      : Tb_staff_info


  type Tb_staff_infoCountArgs = 
    Omit<Tb_staff_infoFindManyArgs, 'select' | 'include'> & {
      select?: Tb_staff_infoCountAggregateInputType | true
    }

  export interface Tb_staff_infoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Tb_staff_info that matches the filter.
     * @param {Tb_staff_infoFindUniqueArgs} args - Arguments to find a Tb_staff_info
     * @example
     * // Get one Tb_staff_info
     * const tb_staff_info = await prisma.tb_staff_info.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Tb_staff_infoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Tb_staff_infoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Tb_staff_info'> extends True ? Prisma__Tb_staff_infoClient<Tb_staff_infoGetPayload<T>> : Prisma__Tb_staff_infoClient<Tb_staff_infoGetPayload<T> | null, null>

    /**
     * Find one Tb_staff_info that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Tb_staff_infoFindUniqueOrThrowArgs} args - Arguments to find a Tb_staff_info
     * @example
     * // Get one Tb_staff_info
     * const tb_staff_info = await prisma.tb_staff_info.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Tb_staff_infoFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Tb_staff_infoFindUniqueOrThrowArgs>
    ): Prisma__Tb_staff_infoClient<Tb_staff_infoGetPayload<T>>

    /**
     * Find the first Tb_staff_info that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_staff_infoFindFirstArgs} args - Arguments to find a Tb_staff_info
     * @example
     * // Get one Tb_staff_info
     * const tb_staff_info = await prisma.tb_staff_info.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Tb_staff_infoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Tb_staff_infoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Tb_staff_info'> extends True ? Prisma__Tb_staff_infoClient<Tb_staff_infoGetPayload<T>> : Prisma__Tb_staff_infoClient<Tb_staff_infoGetPayload<T> | null, null>

    /**
     * Find the first Tb_staff_info that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_staff_infoFindFirstOrThrowArgs} args - Arguments to find a Tb_staff_info
     * @example
     * // Get one Tb_staff_info
     * const tb_staff_info = await prisma.tb_staff_info.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Tb_staff_infoFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Tb_staff_infoFindFirstOrThrowArgs>
    ): Prisma__Tb_staff_infoClient<Tb_staff_infoGetPayload<T>>

    /**
     * Find zero or more Tb_staff_infos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_staff_infoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_staff_infos
     * const tb_staff_infos = await prisma.tb_staff_info.findMany()
     * 
     * // Get first 10 Tb_staff_infos
     * const tb_staff_infos = await prisma.tb_staff_info.findMany({ take: 10 })
     * 
     * // Only select the `staff_ID`
     * const tb_staff_infoWithStaff_IDOnly = await prisma.tb_staff_info.findMany({ select: { staff_ID: true } })
     * 
    **/
    findMany<T extends Tb_staff_infoFindManyArgs>(
      args?: SelectSubset<T, Tb_staff_infoFindManyArgs>
    ): Prisma.PrismaPromise<Array<Tb_staff_infoGetPayload<T>>>

    /**
     * Create a Tb_staff_info.
     * @param {Tb_staff_infoCreateArgs} args - Arguments to create a Tb_staff_info.
     * @example
     * // Create one Tb_staff_info
     * const Tb_staff_info = await prisma.tb_staff_info.create({
     *   data: {
     *     // ... data to create a Tb_staff_info
     *   }
     * })
     * 
    **/
    create<T extends Tb_staff_infoCreateArgs>(
      args: SelectSubset<T, Tb_staff_infoCreateArgs>
    ): Prisma__Tb_staff_infoClient<Tb_staff_infoGetPayload<T>>

    /**
     * Create many Tb_staff_infos.
     *     @param {Tb_staff_infoCreateManyArgs} args - Arguments to create many Tb_staff_infos.
     *     @example
     *     // Create many Tb_staff_infos
     *     const tb_staff_info = await prisma.tb_staff_info.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Tb_staff_infoCreateManyArgs>(
      args?: SelectSubset<T, Tb_staff_infoCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_staff_info.
     * @param {Tb_staff_infoDeleteArgs} args - Arguments to delete one Tb_staff_info.
     * @example
     * // Delete one Tb_staff_info
     * const Tb_staff_info = await prisma.tb_staff_info.delete({
     *   where: {
     *     // ... filter to delete one Tb_staff_info
     *   }
     * })
     * 
    **/
    delete<T extends Tb_staff_infoDeleteArgs>(
      args: SelectSubset<T, Tb_staff_infoDeleteArgs>
    ): Prisma__Tb_staff_infoClient<Tb_staff_infoGetPayload<T>>

    /**
     * Update one Tb_staff_info.
     * @param {Tb_staff_infoUpdateArgs} args - Arguments to update one Tb_staff_info.
     * @example
     * // Update one Tb_staff_info
     * const tb_staff_info = await prisma.tb_staff_info.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Tb_staff_infoUpdateArgs>(
      args: SelectSubset<T, Tb_staff_infoUpdateArgs>
    ): Prisma__Tb_staff_infoClient<Tb_staff_infoGetPayload<T>>

    /**
     * Delete zero or more Tb_staff_infos.
     * @param {Tb_staff_infoDeleteManyArgs} args - Arguments to filter Tb_staff_infos to delete.
     * @example
     * // Delete a few Tb_staff_infos
     * const { count } = await prisma.tb_staff_info.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Tb_staff_infoDeleteManyArgs>(
      args?: SelectSubset<T, Tb_staff_infoDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_staff_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_staff_infoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_staff_infos
     * const tb_staff_info = await prisma.tb_staff_info.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Tb_staff_infoUpdateManyArgs>(
      args: SelectSubset<T, Tb_staff_infoUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_staff_info.
     * @param {Tb_staff_infoUpsertArgs} args - Arguments to update or create a Tb_staff_info.
     * @example
     * // Update or create a Tb_staff_info
     * const tb_staff_info = await prisma.tb_staff_info.upsert({
     *   create: {
     *     // ... data to create a Tb_staff_info
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_staff_info we want to update
     *   }
     * })
    **/
    upsert<T extends Tb_staff_infoUpsertArgs>(
      args: SelectSubset<T, Tb_staff_infoUpsertArgs>
    ): Prisma__Tb_staff_infoClient<Tb_staff_infoGetPayload<T>>

    /**
     * Count the number of Tb_staff_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_staff_infoCountArgs} args - Arguments to filter Tb_staff_infos to count.
     * @example
     * // Count the number of Tb_staff_infos
     * const count = await prisma.tb_staff_info.count({
     *   where: {
     *     // ... the filter for the Tb_staff_infos we want to count
     *   }
     * })
    **/
    count<T extends Tb_staff_infoCountArgs>(
      args?: Subset<T, Tb_staff_infoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_staff_infoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_staff_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_staff_infoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_staff_infoAggregateArgs>(args: Subset<T, Tb_staff_infoAggregateArgs>): Prisma.PrismaPromise<GetTb_staff_infoAggregateType<T>>

    /**
     * Group by Tb_staff_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_staff_infoGroupByArgs} args - Group by arguments.
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
      T extends Tb_staff_infoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Tb_staff_infoGroupByArgs['orderBy'] }
        : { orderBy?: Tb_staff_infoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Tb_staff_infoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_staff_infoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Tb_staff_info.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Tb_staff_infoClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Tb_staff_info base type for findUnique actions
   */
  export type Tb_staff_infoFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Tb_staff_info
     */
    select?: Tb_staff_infoSelect | null
    /**
     * Filter, which Tb_staff_info to fetch.
     */
    where: Tb_staff_infoWhereUniqueInput
  }

  /**
   * Tb_staff_info findUnique
   */
  export interface Tb_staff_infoFindUniqueArgs extends Tb_staff_infoFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Tb_staff_info findUniqueOrThrow
   */
  export type Tb_staff_infoFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Tb_staff_info
     */
    select?: Tb_staff_infoSelect | null
    /**
     * Filter, which Tb_staff_info to fetch.
     */
    where: Tb_staff_infoWhereUniqueInput
  }


  /**
   * Tb_staff_info base type for findFirst actions
   */
  export type Tb_staff_infoFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Tb_staff_info
     */
    select?: Tb_staff_infoSelect | null
    /**
     * Filter, which Tb_staff_info to fetch.
     */
    where?: Tb_staff_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tb_staff_infos to fetch.
     */
    orderBy?: Enumerable<Tb_staff_infoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tb_staff_infos.
     */
    cursor?: Tb_staff_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tb_staff_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tb_staff_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tb_staff_infos.
     */
    distinct?: Enumerable<Tb_staff_infoScalarFieldEnum>
  }

  /**
   * Tb_staff_info findFirst
   */
  export interface Tb_staff_infoFindFirstArgs extends Tb_staff_infoFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Tb_staff_info findFirstOrThrow
   */
  export type Tb_staff_infoFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Tb_staff_info
     */
    select?: Tb_staff_infoSelect | null
    /**
     * Filter, which Tb_staff_info to fetch.
     */
    where?: Tb_staff_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tb_staff_infos to fetch.
     */
    orderBy?: Enumerable<Tb_staff_infoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tb_staff_infos.
     */
    cursor?: Tb_staff_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tb_staff_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tb_staff_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tb_staff_infos.
     */
    distinct?: Enumerable<Tb_staff_infoScalarFieldEnum>
  }


  /**
   * Tb_staff_info findMany
   */
  export type Tb_staff_infoFindManyArgs = {
    /**
     * Select specific fields to fetch from the Tb_staff_info
     */
    select?: Tb_staff_infoSelect | null
    /**
     * Filter, which Tb_staff_infos to fetch.
     */
    where?: Tb_staff_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tb_staff_infos to fetch.
     */
    orderBy?: Enumerable<Tb_staff_infoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tb_staff_infos.
     */
    cursor?: Tb_staff_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tb_staff_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tb_staff_infos.
     */
    skip?: number
    distinct?: Enumerable<Tb_staff_infoScalarFieldEnum>
  }


  /**
   * Tb_staff_info create
   */
  export type Tb_staff_infoCreateArgs = {
    /**
     * Select specific fields to fetch from the Tb_staff_info
     */
    select?: Tb_staff_infoSelect | null
    /**
     * The data needed to create a Tb_staff_info.
     */
    data: XOR<Tb_staff_infoCreateInput, Tb_staff_infoUncheckedCreateInput>
  }


  /**
   * Tb_staff_info createMany
   */
  export type Tb_staff_infoCreateManyArgs = {
    /**
     * The data used to create many Tb_staff_infos.
     */
    data: Enumerable<Tb_staff_infoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Tb_staff_info update
   */
  export type Tb_staff_infoUpdateArgs = {
    /**
     * Select specific fields to fetch from the Tb_staff_info
     */
    select?: Tb_staff_infoSelect | null
    /**
     * The data needed to update a Tb_staff_info.
     */
    data: XOR<Tb_staff_infoUpdateInput, Tb_staff_infoUncheckedUpdateInput>
    /**
     * Choose, which Tb_staff_info to update.
     */
    where: Tb_staff_infoWhereUniqueInput
  }


  /**
   * Tb_staff_info updateMany
   */
  export type Tb_staff_infoUpdateManyArgs = {
    /**
     * The data used to update Tb_staff_infos.
     */
    data: XOR<Tb_staff_infoUpdateManyMutationInput, Tb_staff_infoUncheckedUpdateManyInput>
    /**
     * Filter which Tb_staff_infos to update
     */
    where?: Tb_staff_infoWhereInput
  }


  /**
   * Tb_staff_info upsert
   */
  export type Tb_staff_infoUpsertArgs = {
    /**
     * Select specific fields to fetch from the Tb_staff_info
     */
    select?: Tb_staff_infoSelect | null
    /**
     * The filter to search for the Tb_staff_info to update in case it exists.
     */
    where: Tb_staff_infoWhereUniqueInput
    /**
     * In case the Tb_staff_info found by the `where` argument doesn't exist, create a new Tb_staff_info with this data.
     */
    create: XOR<Tb_staff_infoCreateInput, Tb_staff_infoUncheckedCreateInput>
    /**
     * In case the Tb_staff_info was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Tb_staff_infoUpdateInput, Tb_staff_infoUncheckedUpdateInput>
  }


  /**
   * Tb_staff_info delete
   */
  export type Tb_staff_infoDeleteArgs = {
    /**
     * Select specific fields to fetch from the Tb_staff_info
     */
    select?: Tb_staff_infoSelect | null
    /**
     * Filter which Tb_staff_info to delete.
     */
    where: Tb_staff_infoWhereUniqueInput
  }


  /**
   * Tb_staff_info deleteMany
   */
  export type Tb_staff_infoDeleteManyArgs = {
    /**
     * Filter which Tb_staff_infos to delete
     */
    where?: Tb_staff_infoWhereInput
  }


  /**
   * Tb_staff_info without action
   */
  export type Tb_staff_infoArgs = {
    /**
     * Select specific fields to fetch from the Tb_staff_info
     */
    select?: Tb_staff_infoSelect | null
  }



  /**
   * Model Tb_staff_leave
   */


  export type AggregateTb_staff_leave = {
    _count: Tb_staff_leaveCountAggregateOutputType | null
    _avg: Tb_staff_leaveAvgAggregateOutputType | null
    _sum: Tb_staff_leaveSumAggregateOutputType | null
    _min: Tb_staff_leaveMinAggregateOutputType | null
    _max: Tb_staff_leaveMaxAggregateOutputType | null
  }

  export type Tb_staff_leaveAvgAggregateOutputType = {
    Leave_ID: number | null
    staff_o2b2_ID: number | null
  }

  export type Tb_staff_leaveSumAggregateOutputType = {
    Leave_ID: number | null
    staff_o2b2_ID: number | null
  }

  export type Tb_staff_leaveMinAggregateOutputType = {
    Leave_ID: number | null
    staff_o2b2_ID: number | null
    staffLeaveType: string | null
    staffLeaveDate: Date | null
    staffLeaveNote: string | null
  }

  export type Tb_staff_leaveMaxAggregateOutputType = {
    Leave_ID: number | null
    staff_o2b2_ID: number | null
    staffLeaveType: string | null
    staffLeaveDate: Date | null
    staffLeaveNote: string | null
  }

  export type Tb_staff_leaveCountAggregateOutputType = {
    Leave_ID: number
    staff_o2b2_ID: number
    staffLeaveType: number
    staffLeaveDate: number
    staffLeaveNote: number
    _all: number
  }


  export type Tb_staff_leaveAvgAggregateInputType = {
    Leave_ID?: true
    staff_o2b2_ID?: true
  }

  export type Tb_staff_leaveSumAggregateInputType = {
    Leave_ID?: true
    staff_o2b2_ID?: true
  }

  export type Tb_staff_leaveMinAggregateInputType = {
    Leave_ID?: true
    staff_o2b2_ID?: true
    staffLeaveType?: true
    staffLeaveDate?: true
    staffLeaveNote?: true
  }

  export type Tb_staff_leaveMaxAggregateInputType = {
    Leave_ID?: true
    staff_o2b2_ID?: true
    staffLeaveType?: true
    staffLeaveDate?: true
    staffLeaveNote?: true
  }

  export type Tb_staff_leaveCountAggregateInputType = {
    Leave_ID?: true
    staff_o2b2_ID?: true
    staffLeaveType?: true
    staffLeaveDate?: true
    staffLeaveNote?: true
    _all?: true
  }

  export type Tb_staff_leaveAggregateArgs = {
    /**
     * Filter which Tb_staff_leave to aggregate.
     */
    where?: Tb_staff_leaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tb_staff_leaves to fetch.
     */
    orderBy?: Enumerable<Tb_staff_leaveOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Tb_staff_leaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tb_staff_leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tb_staff_leaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tb_staff_leaves
    **/
    _count?: true | Tb_staff_leaveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_staff_leaveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_staff_leaveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_staff_leaveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_staff_leaveMaxAggregateInputType
  }

  export type GetTb_staff_leaveAggregateType<T extends Tb_staff_leaveAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_staff_leave]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_staff_leave[P]>
      : GetScalarType<T[P], AggregateTb_staff_leave[P]>
  }




  export type Tb_staff_leaveGroupByArgs = {
    where?: Tb_staff_leaveWhereInput
    orderBy?: Enumerable<Tb_staff_leaveOrderByWithAggregationInput>
    by: Tb_staff_leaveScalarFieldEnum[]
    having?: Tb_staff_leaveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_staff_leaveCountAggregateInputType | true
    _avg?: Tb_staff_leaveAvgAggregateInputType
    _sum?: Tb_staff_leaveSumAggregateInputType
    _min?: Tb_staff_leaveMinAggregateInputType
    _max?: Tb_staff_leaveMaxAggregateInputType
  }


  export type Tb_staff_leaveGroupByOutputType = {
    Leave_ID: number
    staff_o2b2_ID: number
    staffLeaveType: string
    staffLeaveDate: Date
    staffLeaveNote: string
    _count: Tb_staff_leaveCountAggregateOutputType | null
    _avg: Tb_staff_leaveAvgAggregateOutputType | null
    _sum: Tb_staff_leaveSumAggregateOutputType | null
    _min: Tb_staff_leaveMinAggregateOutputType | null
    _max: Tb_staff_leaveMaxAggregateOutputType | null
  }

  type GetTb_staff_leaveGroupByPayload<T extends Tb_staff_leaveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Tb_staff_leaveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_staff_leaveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_staff_leaveGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_staff_leaveGroupByOutputType[P]>
        }
      >
    >


  export type Tb_staff_leaveSelect = {
    Leave_ID?: boolean
    staff_o2b2_ID?: boolean
    staffLeaveType?: boolean
    staffLeaveDate?: boolean
    staffLeaveNote?: boolean
  }


  export type Tb_staff_leaveGetPayload<S extends boolean | null | undefined | Tb_staff_leaveArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Tb_staff_leave :
    S extends undefined ? never :
    S extends { include: any } & (Tb_staff_leaveArgs | Tb_staff_leaveFindManyArgs)
    ? Tb_staff_leave 
    : S extends { select: any } & (Tb_staff_leaveArgs | Tb_staff_leaveFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Tb_staff_leave ? Tb_staff_leave[P] : never
  } 
      : Tb_staff_leave


  type Tb_staff_leaveCountArgs = 
    Omit<Tb_staff_leaveFindManyArgs, 'select' | 'include'> & {
      select?: Tb_staff_leaveCountAggregateInputType | true
    }

  export interface Tb_staff_leaveDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Tb_staff_leave that matches the filter.
     * @param {Tb_staff_leaveFindUniqueArgs} args - Arguments to find a Tb_staff_leave
     * @example
     * // Get one Tb_staff_leave
     * const tb_staff_leave = await prisma.tb_staff_leave.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Tb_staff_leaveFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Tb_staff_leaveFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Tb_staff_leave'> extends True ? Prisma__Tb_staff_leaveClient<Tb_staff_leaveGetPayload<T>> : Prisma__Tb_staff_leaveClient<Tb_staff_leaveGetPayload<T> | null, null>

    /**
     * Find one Tb_staff_leave that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Tb_staff_leaveFindUniqueOrThrowArgs} args - Arguments to find a Tb_staff_leave
     * @example
     * // Get one Tb_staff_leave
     * const tb_staff_leave = await prisma.tb_staff_leave.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Tb_staff_leaveFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Tb_staff_leaveFindUniqueOrThrowArgs>
    ): Prisma__Tb_staff_leaveClient<Tb_staff_leaveGetPayload<T>>

    /**
     * Find the first Tb_staff_leave that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_staff_leaveFindFirstArgs} args - Arguments to find a Tb_staff_leave
     * @example
     * // Get one Tb_staff_leave
     * const tb_staff_leave = await prisma.tb_staff_leave.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Tb_staff_leaveFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Tb_staff_leaveFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Tb_staff_leave'> extends True ? Prisma__Tb_staff_leaveClient<Tb_staff_leaveGetPayload<T>> : Prisma__Tb_staff_leaveClient<Tb_staff_leaveGetPayload<T> | null, null>

    /**
     * Find the first Tb_staff_leave that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_staff_leaveFindFirstOrThrowArgs} args - Arguments to find a Tb_staff_leave
     * @example
     * // Get one Tb_staff_leave
     * const tb_staff_leave = await prisma.tb_staff_leave.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Tb_staff_leaveFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Tb_staff_leaveFindFirstOrThrowArgs>
    ): Prisma__Tb_staff_leaveClient<Tb_staff_leaveGetPayload<T>>

    /**
     * Find zero or more Tb_staff_leaves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_staff_leaveFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_staff_leaves
     * const tb_staff_leaves = await prisma.tb_staff_leave.findMany()
     * 
     * // Get first 10 Tb_staff_leaves
     * const tb_staff_leaves = await prisma.tb_staff_leave.findMany({ take: 10 })
     * 
     * // Only select the `Leave_ID`
     * const tb_staff_leaveWithLeave_IDOnly = await prisma.tb_staff_leave.findMany({ select: { Leave_ID: true } })
     * 
    **/
    findMany<T extends Tb_staff_leaveFindManyArgs>(
      args?: SelectSubset<T, Tb_staff_leaveFindManyArgs>
    ): Prisma.PrismaPromise<Array<Tb_staff_leaveGetPayload<T>>>

    /**
     * Create a Tb_staff_leave.
     * @param {Tb_staff_leaveCreateArgs} args - Arguments to create a Tb_staff_leave.
     * @example
     * // Create one Tb_staff_leave
     * const Tb_staff_leave = await prisma.tb_staff_leave.create({
     *   data: {
     *     // ... data to create a Tb_staff_leave
     *   }
     * })
     * 
    **/
    create<T extends Tb_staff_leaveCreateArgs>(
      args: SelectSubset<T, Tb_staff_leaveCreateArgs>
    ): Prisma__Tb_staff_leaveClient<Tb_staff_leaveGetPayload<T>>

    /**
     * Create many Tb_staff_leaves.
     *     @param {Tb_staff_leaveCreateManyArgs} args - Arguments to create many Tb_staff_leaves.
     *     @example
     *     // Create many Tb_staff_leaves
     *     const tb_staff_leave = await prisma.tb_staff_leave.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Tb_staff_leaveCreateManyArgs>(
      args?: SelectSubset<T, Tb_staff_leaveCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_staff_leave.
     * @param {Tb_staff_leaveDeleteArgs} args - Arguments to delete one Tb_staff_leave.
     * @example
     * // Delete one Tb_staff_leave
     * const Tb_staff_leave = await prisma.tb_staff_leave.delete({
     *   where: {
     *     // ... filter to delete one Tb_staff_leave
     *   }
     * })
     * 
    **/
    delete<T extends Tb_staff_leaveDeleteArgs>(
      args: SelectSubset<T, Tb_staff_leaveDeleteArgs>
    ): Prisma__Tb_staff_leaveClient<Tb_staff_leaveGetPayload<T>>

    /**
     * Update one Tb_staff_leave.
     * @param {Tb_staff_leaveUpdateArgs} args - Arguments to update one Tb_staff_leave.
     * @example
     * // Update one Tb_staff_leave
     * const tb_staff_leave = await prisma.tb_staff_leave.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Tb_staff_leaveUpdateArgs>(
      args: SelectSubset<T, Tb_staff_leaveUpdateArgs>
    ): Prisma__Tb_staff_leaveClient<Tb_staff_leaveGetPayload<T>>

    /**
     * Delete zero or more Tb_staff_leaves.
     * @param {Tb_staff_leaveDeleteManyArgs} args - Arguments to filter Tb_staff_leaves to delete.
     * @example
     * // Delete a few Tb_staff_leaves
     * const { count } = await prisma.tb_staff_leave.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Tb_staff_leaveDeleteManyArgs>(
      args?: SelectSubset<T, Tb_staff_leaveDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_staff_leaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_staff_leaveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_staff_leaves
     * const tb_staff_leave = await prisma.tb_staff_leave.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Tb_staff_leaveUpdateManyArgs>(
      args: SelectSubset<T, Tb_staff_leaveUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_staff_leave.
     * @param {Tb_staff_leaveUpsertArgs} args - Arguments to update or create a Tb_staff_leave.
     * @example
     * // Update or create a Tb_staff_leave
     * const tb_staff_leave = await prisma.tb_staff_leave.upsert({
     *   create: {
     *     // ... data to create a Tb_staff_leave
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_staff_leave we want to update
     *   }
     * })
    **/
    upsert<T extends Tb_staff_leaveUpsertArgs>(
      args: SelectSubset<T, Tb_staff_leaveUpsertArgs>
    ): Prisma__Tb_staff_leaveClient<Tb_staff_leaveGetPayload<T>>

    /**
     * Count the number of Tb_staff_leaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_staff_leaveCountArgs} args - Arguments to filter Tb_staff_leaves to count.
     * @example
     * // Count the number of Tb_staff_leaves
     * const count = await prisma.tb_staff_leave.count({
     *   where: {
     *     // ... the filter for the Tb_staff_leaves we want to count
     *   }
     * })
    **/
    count<T extends Tb_staff_leaveCountArgs>(
      args?: Subset<T, Tb_staff_leaveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_staff_leaveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_staff_leave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_staff_leaveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_staff_leaveAggregateArgs>(args: Subset<T, Tb_staff_leaveAggregateArgs>): Prisma.PrismaPromise<GetTb_staff_leaveAggregateType<T>>

    /**
     * Group by Tb_staff_leave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_staff_leaveGroupByArgs} args - Group by arguments.
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
      T extends Tb_staff_leaveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Tb_staff_leaveGroupByArgs['orderBy'] }
        : { orderBy?: Tb_staff_leaveGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Tb_staff_leaveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_staff_leaveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Tb_staff_leave.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Tb_staff_leaveClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Tb_staff_leave base type for findUnique actions
   */
  export type Tb_staff_leaveFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Tb_staff_leave
     */
    select?: Tb_staff_leaveSelect | null
    /**
     * Filter, which Tb_staff_leave to fetch.
     */
    where: Tb_staff_leaveWhereUniqueInput
  }

  /**
   * Tb_staff_leave findUnique
   */
  export interface Tb_staff_leaveFindUniqueArgs extends Tb_staff_leaveFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Tb_staff_leave findUniqueOrThrow
   */
  export type Tb_staff_leaveFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Tb_staff_leave
     */
    select?: Tb_staff_leaveSelect | null
    /**
     * Filter, which Tb_staff_leave to fetch.
     */
    where: Tb_staff_leaveWhereUniqueInput
  }


  /**
   * Tb_staff_leave base type for findFirst actions
   */
  export type Tb_staff_leaveFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Tb_staff_leave
     */
    select?: Tb_staff_leaveSelect | null
    /**
     * Filter, which Tb_staff_leave to fetch.
     */
    where?: Tb_staff_leaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tb_staff_leaves to fetch.
     */
    orderBy?: Enumerable<Tb_staff_leaveOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tb_staff_leaves.
     */
    cursor?: Tb_staff_leaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tb_staff_leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tb_staff_leaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tb_staff_leaves.
     */
    distinct?: Enumerable<Tb_staff_leaveScalarFieldEnum>
  }

  /**
   * Tb_staff_leave findFirst
   */
  export interface Tb_staff_leaveFindFirstArgs extends Tb_staff_leaveFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Tb_staff_leave findFirstOrThrow
   */
  export type Tb_staff_leaveFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Tb_staff_leave
     */
    select?: Tb_staff_leaveSelect | null
    /**
     * Filter, which Tb_staff_leave to fetch.
     */
    where?: Tb_staff_leaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tb_staff_leaves to fetch.
     */
    orderBy?: Enumerable<Tb_staff_leaveOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tb_staff_leaves.
     */
    cursor?: Tb_staff_leaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tb_staff_leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tb_staff_leaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tb_staff_leaves.
     */
    distinct?: Enumerable<Tb_staff_leaveScalarFieldEnum>
  }


  /**
   * Tb_staff_leave findMany
   */
  export type Tb_staff_leaveFindManyArgs = {
    /**
     * Select specific fields to fetch from the Tb_staff_leave
     */
    select?: Tb_staff_leaveSelect | null
    /**
     * Filter, which Tb_staff_leaves to fetch.
     */
    where?: Tb_staff_leaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tb_staff_leaves to fetch.
     */
    orderBy?: Enumerable<Tb_staff_leaveOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tb_staff_leaves.
     */
    cursor?: Tb_staff_leaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tb_staff_leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tb_staff_leaves.
     */
    skip?: number
    distinct?: Enumerable<Tb_staff_leaveScalarFieldEnum>
  }


  /**
   * Tb_staff_leave create
   */
  export type Tb_staff_leaveCreateArgs = {
    /**
     * Select specific fields to fetch from the Tb_staff_leave
     */
    select?: Tb_staff_leaveSelect | null
    /**
     * The data needed to create a Tb_staff_leave.
     */
    data: XOR<Tb_staff_leaveCreateInput, Tb_staff_leaveUncheckedCreateInput>
  }


  /**
   * Tb_staff_leave createMany
   */
  export type Tb_staff_leaveCreateManyArgs = {
    /**
     * The data used to create many Tb_staff_leaves.
     */
    data: Enumerable<Tb_staff_leaveCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Tb_staff_leave update
   */
  export type Tb_staff_leaveUpdateArgs = {
    /**
     * Select specific fields to fetch from the Tb_staff_leave
     */
    select?: Tb_staff_leaveSelect | null
    /**
     * The data needed to update a Tb_staff_leave.
     */
    data: XOR<Tb_staff_leaveUpdateInput, Tb_staff_leaveUncheckedUpdateInput>
    /**
     * Choose, which Tb_staff_leave to update.
     */
    where: Tb_staff_leaveWhereUniqueInput
  }


  /**
   * Tb_staff_leave updateMany
   */
  export type Tb_staff_leaveUpdateManyArgs = {
    /**
     * The data used to update Tb_staff_leaves.
     */
    data: XOR<Tb_staff_leaveUpdateManyMutationInput, Tb_staff_leaveUncheckedUpdateManyInput>
    /**
     * Filter which Tb_staff_leaves to update
     */
    where?: Tb_staff_leaveWhereInput
  }


  /**
   * Tb_staff_leave upsert
   */
  export type Tb_staff_leaveUpsertArgs = {
    /**
     * Select specific fields to fetch from the Tb_staff_leave
     */
    select?: Tb_staff_leaveSelect | null
    /**
     * The filter to search for the Tb_staff_leave to update in case it exists.
     */
    where: Tb_staff_leaveWhereUniqueInput
    /**
     * In case the Tb_staff_leave found by the `where` argument doesn't exist, create a new Tb_staff_leave with this data.
     */
    create: XOR<Tb_staff_leaveCreateInput, Tb_staff_leaveUncheckedCreateInput>
    /**
     * In case the Tb_staff_leave was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Tb_staff_leaveUpdateInput, Tb_staff_leaveUncheckedUpdateInput>
  }


  /**
   * Tb_staff_leave delete
   */
  export type Tb_staff_leaveDeleteArgs = {
    /**
     * Select specific fields to fetch from the Tb_staff_leave
     */
    select?: Tb_staff_leaveSelect | null
    /**
     * Filter which Tb_staff_leave to delete.
     */
    where: Tb_staff_leaveWhereUniqueInput
  }


  /**
   * Tb_staff_leave deleteMany
   */
  export type Tb_staff_leaveDeleteManyArgs = {
    /**
     * Filter which Tb_staff_leaves to delete
     */
    where?: Tb_staff_leaveWhereInput
  }


  /**
   * Tb_staff_leave without action
   */
  export type Tb_staff_leaveArgs = {
    /**
     * Select specific fields to fetch from the Tb_staff_leave
     */
    select?: Tb_staff_leaveSelect | null
  }



  /**
   * Model Tb_state_holiday
   */


  export type AggregateTb_state_holiday = {
    _count: Tb_state_holidayCountAggregateOutputType | null
    _avg: Tb_state_holidayAvgAggregateOutputType | null
    _sum: Tb_state_holidaySumAggregateOutputType | null
    _min: Tb_state_holidayMinAggregateOutputType | null
    _max: Tb_state_holidayMaxAggregateOutputType | null
  }

  export type Tb_state_holidayAvgAggregateOutputType = {
    holiday_ID: number | null
  }

  export type Tb_state_holidaySumAggregateOutputType = {
    holiday_ID: number | null
  }

  export type Tb_state_holidayMinAggregateOutputType = {
    holiday_ID: number | null
    holidayTitle: string | null
    holidayDate: Date | null
    holidayYear: string | null
  }

  export type Tb_state_holidayMaxAggregateOutputType = {
    holiday_ID: number | null
    holidayTitle: string | null
    holidayDate: Date | null
    holidayYear: string | null
  }

  export type Tb_state_holidayCountAggregateOutputType = {
    holiday_ID: number
    holidayTitle: number
    holidayDate: number
    holidayYear: number
    _all: number
  }


  export type Tb_state_holidayAvgAggregateInputType = {
    holiday_ID?: true
  }

  export type Tb_state_holidaySumAggregateInputType = {
    holiday_ID?: true
  }

  export type Tb_state_holidayMinAggregateInputType = {
    holiday_ID?: true
    holidayTitle?: true
    holidayDate?: true
    holidayYear?: true
  }

  export type Tb_state_holidayMaxAggregateInputType = {
    holiday_ID?: true
    holidayTitle?: true
    holidayDate?: true
    holidayYear?: true
  }

  export type Tb_state_holidayCountAggregateInputType = {
    holiday_ID?: true
    holidayTitle?: true
    holidayDate?: true
    holidayYear?: true
    _all?: true
  }

  export type Tb_state_holidayAggregateArgs = {
    /**
     * Filter which Tb_state_holiday to aggregate.
     */
    where?: Tb_state_holidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tb_state_holidays to fetch.
     */
    orderBy?: Enumerable<Tb_state_holidayOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Tb_state_holidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tb_state_holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tb_state_holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tb_state_holidays
    **/
    _count?: true | Tb_state_holidayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_state_holidayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_state_holidaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_state_holidayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_state_holidayMaxAggregateInputType
  }

  export type GetTb_state_holidayAggregateType<T extends Tb_state_holidayAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_state_holiday]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_state_holiday[P]>
      : GetScalarType<T[P], AggregateTb_state_holiday[P]>
  }




  export type Tb_state_holidayGroupByArgs = {
    where?: Tb_state_holidayWhereInput
    orderBy?: Enumerable<Tb_state_holidayOrderByWithAggregationInput>
    by: Tb_state_holidayScalarFieldEnum[]
    having?: Tb_state_holidayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_state_holidayCountAggregateInputType | true
    _avg?: Tb_state_holidayAvgAggregateInputType
    _sum?: Tb_state_holidaySumAggregateInputType
    _min?: Tb_state_holidayMinAggregateInputType
    _max?: Tb_state_holidayMaxAggregateInputType
  }


  export type Tb_state_holidayGroupByOutputType = {
    holiday_ID: number
    holidayTitle: string
    holidayDate: Date
    holidayYear: string
    _count: Tb_state_holidayCountAggregateOutputType | null
    _avg: Tb_state_holidayAvgAggregateOutputType | null
    _sum: Tb_state_holidaySumAggregateOutputType | null
    _min: Tb_state_holidayMinAggregateOutputType | null
    _max: Tb_state_holidayMaxAggregateOutputType | null
  }

  type GetTb_state_holidayGroupByPayload<T extends Tb_state_holidayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Tb_state_holidayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_state_holidayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_state_holidayGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_state_holidayGroupByOutputType[P]>
        }
      >
    >


  export type Tb_state_holidaySelect = {
    holiday_ID?: boolean
    holidayTitle?: boolean
    holidayDate?: boolean
    holidayYear?: boolean
  }


  export type Tb_state_holidayGetPayload<S extends boolean | null | undefined | Tb_state_holidayArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Tb_state_holiday :
    S extends undefined ? never :
    S extends { include: any } & (Tb_state_holidayArgs | Tb_state_holidayFindManyArgs)
    ? Tb_state_holiday 
    : S extends { select: any } & (Tb_state_holidayArgs | Tb_state_holidayFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Tb_state_holiday ? Tb_state_holiday[P] : never
  } 
      : Tb_state_holiday


  type Tb_state_holidayCountArgs = 
    Omit<Tb_state_holidayFindManyArgs, 'select' | 'include'> & {
      select?: Tb_state_holidayCountAggregateInputType | true
    }

  export interface Tb_state_holidayDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Tb_state_holiday that matches the filter.
     * @param {Tb_state_holidayFindUniqueArgs} args - Arguments to find a Tb_state_holiday
     * @example
     * // Get one Tb_state_holiday
     * const tb_state_holiday = await prisma.tb_state_holiday.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Tb_state_holidayFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Tb_state_holidayFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Tb_state_holiday'> extends True ? Prisma__Tb_state_holidayClient<Tb_state_holidayGetPayload<T>> : Prisma__Tb_state_holidayClient<Tb_state_holidayGetPayload<T> | null, null>

    /**
     * Find one Tb_state_holiday that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Tb_state_holidayFindUniqueOrThrowArgs} args - Arguments to find a Tb_state_holiday
     * @example
     * // Get one Tb_state_holiday
     * const tb_state_holiday = await prisma.tb_state_holiday.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Tb_state_holidayFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Tb_state_holidayFindUniqueOrThrowArgs>
    ): Prisma__Tb_state_holidayClient<Tb_state_holidayGetPayload<T>>

    /**
     * Find the first Tb_state_holiday that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_state_holidayFindFirstArgs} args - Arguments to find a Tb_state_holiday
     * @example
     * // Get one Tb_state_holiday
     * const tb_state_holiday = await prisma.tb_state_holiday.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Tb_state_holidayFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Tb_state_holidayFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Tb_state_holiday'> extends True ? Prisma__Tb_state_holidayClient<Tb_state_holidayGetPayload<T>> : Prisma__Tb_state_holidayClient<Tb_state_holidayGetPayload<T> | null, null>

    /**
     * Find the first Tb_state_holiday that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_state_holidayFindFirstOrThrowArgs} args - Arguments to find a Tb_state_holiday
     * @example
     * // Get one Tb_state_holiday
     * const tb_state_holiday = await prisma.tb_state_holiday.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Tb_state_holidayFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Tb_state_holidayFindFirstOrThrowArgs>
    ): Prisma__Tb_state_holidayClient<Tb_state_holidayGetPayload<T>>

    /**
     * Find zero or more Tb_state_holidays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_state_holidayFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_state_holidays
     * const tb_state_holidays = await prisma.tb_state_holiday.findMany()
     * 
     * // Get first 10 Tb_state_holidays
     * const tb_state_holidays = await prisma.tb_state_holiday.findMany({ take: 10 })
     * 
     * // Only select the `holiday_ID`
     * const tb_state_holidayWithHoliday_IDOnly = await prisma.tb_state_holiday.findMany({ select: { holiday_ID: true } })
     * 
    **/
    findMany<T extends Tb_state_holidayFindManyArgs>(
      args?: SelectSubset<T, Tb_state_holidayFindManyArgs>
    ): Prisma.PrismaPromise<Array<Tb_state_holidayGetPayload<T>>>

    /**
     * Create a Tb_state_holiday.
     * @param {Tb_state_holidayCreateArgs} args - Arguments to create a Tb_state_holiday.
     * @example
     * // Create one Tb_state_holiday
     * const Tb_state_holiday = await prisma.tb_state_holiday.create({
     *   data: {
     *     // ... data to create a Tb_state_holiday
     *   }
     * })
     * 
    **/
    create<T extends Tb_state_holidayCreateArgs>(
      args: SelectSubset<T, Tb_state_holidayCreateArgs>
    ): Prisma__Tb_state_holidayClient<Tb_state_holidayGetPayload<T>>

    /**
     * Create many Tb_state_holidays.
     *     @param {Tb_state_holidayCreateManyArgs} args - Arguments to create many Tb_state_holidays.
     *     @example
     *     // Create many Tb_state_holidays
     *     const tb_state_holiday = await prisma.tb_state_holiday.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Tb_state_holidayCreateManyArgs>(
      args?: SelectSubset<T, Tb_state_holidayCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_state_holiday.
     * @param {Tb_state_holidayDeleteArgs} args - Arguments to delete one Tb_state_holiday.
     * @example
     * // Delete one Tb_state_holiday
     * const Tb_state_holiday = await prisma.tb_state_holiday.delete({
     *   where: {
     *     // ... filter to delete one Tb_state_holiday
     *   }
     * })
     * 
    **/
    delete<T extends Tb_state_holidayDeleteArgs>(
      args: SelectSubset<T, Tb_state_holidayDeleteArgs>
    ): Prisma__Tb_state_holidayClient<Tb_state_holidayGetPayload<T>>

    /**
     * Update one Tb_state_holiday.
     * @param {Tb_state_holidayUpdateArgs} args - Arguments to update one Tb_state_holiday.
     * @example
     * // Update one Tb_state_holiday
     * const tb_state_holiday = await prisma.tb_state_holiday.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Tb_state_holidayUpdateArgs>(
      args: SelectSubset<T, Tb_state_holidayUpdateArgs>
    ): Prisma__Tb_state_holidayClient<Tb_state_holidayGetPayload<T>>

    /**
     * Delete zero or more Tb_state_holidays.
     * @param {Tb_state_holidayDeleteManyArgs} args - Arguments to filter Tb_state_holidays to delete.
     * @example
     * // Delete a few Tb_state_holidays
     * const { count } = await prisma.tb_state_holiday.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Tb_state_holidayDeleteManyArgs>(
      args?: SelectSubset<T, Tb_state_holidayDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_state_holidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_state_holidayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_state_holidays
     * const tb_state_holiday = await prisma.tb_state_holiday.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Tb_state_holidayUpdateManyArgs>(
      args: SelectSubset<T, Tb_state_holidayUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_state_holiday.
     * @param {Tb_state_holidayUpsertArgs} args - Arguments to update or create a Tb_state_holiday.
     * @example
     * // Update or create a Tb_state_holiday
     * const tb_state_holiday = await prisma.tb_state_holiday.upsert({
     *   create: {
     *     // ... data to create a Tb_state_holiday
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_state_holiday we want to update
     *   }
     * })
    **/
    upsert<T extends Tb_state_holidayUpsertArgs>(
      args: SelectSubset<T, Tb_state_holidayUpsertArgs>
    ): Prisma__Tb_state_holidayClient<Tb_state_holidayGetPayload<T>>

    /**
     * Count the number of Tb_state_holidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_state_holidayCountArgs} args - Arguments to filter Tb_state_holidays to count.
     * @example
     * // Count the number of Tb_state_holidays
     * const count = await prisma.tb_state_holiday.count({
     *   where: {
     *     // ... the filter for the Tb_state_holidays we want to count
     *   }
     * })
    **/
    count<T extends Tb_state_holidayCountArgs>(
      args?: Subset<T, Tb_state_holidayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_state_holidayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_state_holiday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_state_holidayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_state_holidayAggregateArgs>(args: Subset<T, Tb_state_holidayAggregateArgs>): Prisma.PrismaPromise<GetTb_state_holidayAggregateType<T>>

    /**
     * Group by Tb_state_holiday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_state_holidayGroupByArgs} args - Group by arguments.
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
      T extends Tb_state_holidayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Tb_state_holidayGroupByArgs['orderBy'] }
        : { orderBy?: Tb_state_holidayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Tb_state_holidayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_state_holidayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Tb_state_holiday.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Tb_state_holidayClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Tb_state_holiday base type for findUnique actions
   */
  export type Tb_state_holidayFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Tb_state_holiday
     */
    select?: Tb_state_holidaySelect | null
    /**
     * Filter, which Tb_state_holiday to fetch.
     */
    where: Tb_state_holidayWhereUniqueInput
  }

  /**
   * Tb_state_holiday findUnique
   */
  export interface Tb_state_holidayFindUniqueArgs extends Tb_state_holidayFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Tb_state_holiday findUniqueOrThrow
   */
  export type Tb_state_holidayFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Tb_state_holiday
     */
    select?: Tb_state_holidaySelect | null
    /**
     * Filter, which Tb_state_holiday to fetch.
     */
    where: Tb_state_holidayWhereUniqueInput
  }


  /**
   * Tb_state_holiday base type for findFirst actions
   */
  export type Tb_state_holidayFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Tb_state_holiday
     */
    select?: Tb_state_holidaySelect | null
    /**
     * Filter, which Tb_state_holiday to fetch.
     */
    where?: Tb_state_holidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tb_state_holidays to fetch.
     */
    orderBy?: Enumerable<Tb_state_holidayOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tb_state_holidays.
     */
    cursor?: Tb_state_holidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tb_state_holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tb_state_holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tb_state_holidays.
     */
    distinct?: Enumerable<Tb_state_holidayScalarFieldEnum>
  }

  /**
   * Tb_state_holiday findFirst
   */
  export interface Tb_state_holidayFindFirstArgs extends Tb_state_holidayFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Tb_state_holiday findFirstOrThrow
   */
  export type Tb_state_holidayFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Tb_state_holiday
     */
    select?: Tb_state_holidaySelect | null
    /**
     * Filter, which Tb_state_holiday to fetch.
     */
    where?: Tb_state_holidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tb_state_holidays to fetch.
     */
    orderBy?: Enumerable<Tb_state_holidayOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tb_state_holidays.
     */
    cursor?: Tb_state_holidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tb_state_holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tb_state_holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tb_state_holidays.
     */
    distinct?: Enumerable<Tb_state_holidayScalarFieldEnum>
  }


  /**
   * Tb_state_holiday findMany
   */
  export type Tb_state_holidayFindManyArgs = {
    /**
     * Select specific fields to fetch from the Tb_state_holiday
     */
    select?: Tb_state_holidaySelect | null
    /**
     * Filter, which Tb_state_holidays to fetch.
     */
    where?: Tb_state_holidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tb_state_holidays to fetch.
     */
    orderBy?: Enumerable<Tb_state_holidayOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tb_state_holidays.
     */
    cursor?: Tb_state_holidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tb_state_holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tb_state_holidays.
     */
    skip?: number
    distinct?: Enumerable<Tb_state_holidayScalarFieldEnum>
  }


  /**
   * Tb_state_holiday create
   */
  export type Tb_state_holidayCreateArgs = {
    /**
     * Select specific fields to fetch from the Tb_state_holiday
     */
    select?: Tb_state_holidaySelect | null
    /**
     * The data needed to create a Tb_state_holiday.
     */
    data: XOR<Tb_state_holidayCreateInput, Tb_state_holidayUncheckedCreateInput>
  }


  /**
   * Tb_state_holiday createMany
   */
  export type Tb_state_holidayCreateManyArgs = {
    /**
     * The data used to create many Tb_state_holidays.
     */
    data: Enumerable<Tb_state_holidayCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Tb_state_holiday update
   */
  export type Tb_state_holidayUpdateArgs = {
    /**
     * Select specific fields to fetch from the Tb_state_holiday
     */
    select?: Tb_state_holidaySelect | null
    /**
     * The data needed to update a Tb_state_holiday.
     */
    data: XOR<Tb_state_holidayUpdateInput, Tb_state_holidayUncheckedUpdateInput>
    /**
     * Choose, which Tb_state_holiday to update.
     */
    where: Tb_state_holidayWhereUniqueInput
  }


  /**
   * Tb_state_holiday updateMany
   */
  export type Tb_state_holidayUpdateManyArgs = {
    /**
     * The data used to update Tb_state_holidays.
     */
    data: XOR<Tb_state_holidayUpdateManyMutationInput, Tb_state_holidayUncheckedUpdateManyInput>
    /**
     * Filter which Tb_state_holidays to update
     */
    where?: Tb_state_holidayWhereInput
  }


  /**
   * Tb_state_holiday upsert
   */
  export type Tb_state_holidayUpsertArgs = {
    /**
     * Select specific fields to fetch from the Tb_state_holiday
     */
    select?: Tb_state_holidaySelect | null
    /**
     * The filter to search for the Tb_state_holiday to update in case it exists.
     */
    where: Tb_state_holidayWhereUniqueInput
    /**
     * In case the Tb_state_holiday found by the `where` argument doesn't exist, create a new Tb_state_holiday with this data.
     */
    create: XOR<Tb_state_holidayCreateInput, Tb_state_holidayUncheckedCreateInput>
    /**
     * In case the Tb_state_holiday was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Tb_state_holidayUpdateInput, Tb_state_holidayUncheckedUpdateInput>
  }


  /**
   * Tb_state_holiday delete
   */
  export type Tb_state_holidayDeleteArgs = {
    /**
     * Select specific fields to fetch from the Tb_state_holiday
     */
    select?: Tb_state_holidaySelect | null
    /**
     * Filter which Tb_state_holiday to delete.
     */
    where: Tb_state_holidayWhereUniqueInput
  }


  /**
   * Tb_state_holiday deleteMany
   */
  export type Tb_state_holidayDeleteManyArgs = {
    /**
     * Filter which Tb_state_holidays to delete
     */
    where?: Tb_state_holidayWhereInput
  }


  /**
   * Tb_state_holiday without action
   */
  export type Tb_state_holidayArgs = {
    /**
     * Select specific fields to fetch from the Tb_state_holiday
     */
    select?: Tb_state_holidaySelect | null
  }



  /**
   * Model Tb_state_holiday_copy
   */


  export type AggregateTb_state_holiday_copy = {
    _count: Tb_state_holiday_copyCountAggregateOutputType | null
    _avg: Tb_state_holiday_copyAvgAggregateOutputType | null
    _sum: Tb_state_holiday_copySumAggregateOutputType | null
    _min: Tb_state_holiday_copyMinAggregateOutputType | null
    _max: Tb_state_holiday_copyMaxAggregateOutputType | null
  }

  export type Tb_state_holiday_copyAvgAggregateOutputType = {
    holiday_ID: number | null
  }

  export type Tb_state_holiday_copySumAggregateOutputType = {
    holiday_ID: number | null
  }

  export type Tb_state_holiday_copyMinAggregateOutputType = {
    holiday_ID: number | null
    holidayTitle: string | null
    holidayDate: Date | null
    holidayYear: string | null
  }

  export type Tb_state_holiday_copyMaxAggregateOutputType = {
    holiday_ID: number | null
    holidayTitle: string | null
    holidayDate: Date | null
    holidayYear: string | null
  }

  export type Tb_state_holiday_copyCountAggregateOutputType = {
    holiday_ID: number
    holidayTitle: number
    holidayDate: number
    holidayYear: number
    _all: number
  }


  export type Tb_state_holiday_copyAvgAggregateInputType = {
    holiday_ID?: true
  }

  export type Tb_state_holiday_copySumAggregateInputType = {
    holiday_ID?: true
  }

  export type Tb_state_holiday_copyMinAggregateInputType = {
    holiday_ID?: true
    holidayTitle?: true
    holidayDate?: true
    holidayYear?: true
  }

  export type Tb_state_holiday_copyMaxAggregateInputType = {
    holiday_ID?: true
    holidayTitle?: true
    holidayDate?: true
    holidayYear?: true
  }

  export type Tb_state_holiday_copyCountAggregateInputType = {
    holiday_ID?: true
    holidayTitle?: true
    holidayDate?: true
    holidayYear?: true
    _all?: true
  }

  export type Tb_state_holiday_copyAggregateArgs = {
    /**
     * Filter which Tb_state_holiday_copy to aggregate.
     */
    where?: Tb_state_holiday_copyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tb_state_holiday_copies to fetch.
     */
    orderBy?: Enumerable<Tb_state_holiday_copyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Tb_state_holiday_copyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tb_state_holiday_copies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tb_state_holiday_copies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tb_state_holiday_copies
    **/
    _count?: true | Tb_state_holiday_copyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_state_holiday_copyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_state_holiday_copySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_state_holiday_copyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_state_holiday_copyMaxAggregateInputType
  }

  export type GetTb_state_holiday_copyAggregateType<T extends Tb_state_holiday_copyAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_state_holiday_copy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_state_holiday_copy[P]>
      : GetScalarType<T[P], AggregateTb_state_holiday_copy[P]>
  }




  export type Tb_state_holiday_copyGroupByArgs = {
    where?: Tb_state_holiday_copyWhereInput
    orderBy?: Enumerable<Tb_state_holiday_copyOrderByWithAggregationInput>
    by: Tb_state_holiday_copyScalarFieldEnum[]
    having?: Tb_state_holiday_copyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_state_holiday_copyCountAggregateInputType | true
    _avg?: Tb_state_holiday_copyAvgAggregateInputType
    _sum?: Tb_state_holiday_copySumAggregateInputType
    _min?: Tb_state_holiday_copyMinAggregateInputType
    _max?: Tb_state_holiday_copyMaxAggregateInputType
  }


  export type Tb_state_holiday_copyGroupByOutputType = {
    holiday_ID: number
    holidayTitle: string
    holidayDate: Date
    holidayYear: string
    _count: Tb_state_holiday_copyCountAggregateOutputType | null
    _avg: Tb_state_holiday_copyAvgAggregateOutputType | null
    _sum: Tb_state_holiday_copySumAggregateOutputType | null
    _min: Tb_state_holiday_copyMinAggregateOutputType | null
    _max: Tb_state_holiday_copyMaxAggregateOutputType | null
  }

  type GetTb_state_holiday_copyGroupByPayload<T extends Tb_state_holiday_copyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Tb_state_holiday_copyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_state_holiday_copyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_state_holiday_copyGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_state_holiday_copyGroupByOutputType[P]>
        }
      >
    >


  export type Tb_state_holiday_copySelect = {
    holiday_ID?: boolean
    holidayTitle?: boolean
    holidayDate?: boolean
    holidayYear?: boolean
  }


  export type Tb_state_holiday_copyGetPayload<S extends boolean | null | undefined | Tb_state_holiday_copyArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Tb_state_holiday_copy :
    S extends undefined ? never :
    S extends { include: any } & (Tb_state_holiday_copyArgs | Tb_state_holiday_copyFindManyArgs)
    ? Tb_state_holiday_copy 
    : S extends { select: any } & (Tb_state_holiday_copyArgs | Tb_state_holiday_copyFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Tb_state_holiday_copy ? Tb_state_holiday_copy[P] : never
  } 
      : Tb_state_holiday_copy


  type Tb_state_holiday_copyCountArgs = 
    Omit<Tb_state_holiday_copyFindManyArgs, 'select' | 'include'> & {
      select?: Tb_state_holiday_copyCountAggregateInputType | true
    }

  export interface Tb_state_holiday_copyDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Tb_state_holiday_copy that matches the filter.
     * @param {Tb_state_holiday_copyFindUniqueArgs} args - Arguments to find a Tb_state_holiday_copy
     * @example
     * // Get one Tb_state_holiday_copy
     * const tb_state_holiday_copy = await prisma.tb_state_holiday_copy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Tb_state_holiday_copyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Tb_state_holiday_copyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Tb_state_holiday_copy'> extends True ? Prisma__Tb_state_holiday_copyClient<Tb_state_holiday_copyGetPayload<T>> : Prisma__Tb_state_holiday_copyClient<Tb_state_holiday_copyGetPayload<T> | null, null>

    /**
     * Find one Tb_state_holiday_copy that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Tb_state_holiday_copyFindUniqueOrThrowArgs} args - Arguments to find a Tb_state_holiday_copy
     * @example
     * // Get one Tb_state_holiday_copy
     * const tb_state_holiday_copy = await prisma.tb_state_holiday_copy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Tb_state_holiday_copyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Tb_state_holiday_copyFindUniqueOrThrowArgs>
    ): Prisma__Tb_state_holiday_copyClient<Tb_state_holiday_copyGetPayload<T>>

    /**
     * Find the first Tb_state_holiday_copy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_state_holiday_copyFindFirstArgs} args - Arguments to find a Tb_state_holiday_copy
     * @example
     * // Get one Tb_state_holiday_copy
     * const tb_state_holiday_copy = await prisma.tb_state_holiday_copy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Tb_state_holiday_copyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Tb_state_holiday_copyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Tb_state_holiday_copy'> extends True ? Prisma__Tb_state_holiday_copyClient<Tb_state_holiday_copyGetPayload<T>> : Prisma__Tb_state_holiday_copyClient<Tb_state_holiday_copyGetPayload<T> | null, null>

    /**
     * Find the first Tb_state_holiday_copy that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_state_holiday_copyFindFirstOrThrowArgs} args - Arguments to find a Tb_state_holiday_copy
     * @example
     * // Get one Tb_state_holiday_copy
     * const tb_state_holiday_copy = await prisma.tb_state_holiday_copy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Tb_state_holiday_copyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Tb_state_holiday_copyFindFirstOrThrowArgs>
    ): Prisma__Tb_state_holiday_copyClient<Tb_state_holiday_copyGetPayload<T>>

    /**
     * Find zero or more Tb_state_holiday_copies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_state_holiday_copyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_state_holiday_copies
     * const tb_state_holiday_copies = await prisma.tb_state_holiday_copy.findMany()
     * 
     * // Get first 10 Tb_state_holiday_copies
     * const tb_state_holiday_copies = await prisma.tb_state_holiday_copy.findMany({ take: 10 })
     * 
     * // Only select the `holiday_ID`
     * const tb_state_holiday_copyWithHoliday_IDOnly = await prisma.tb_state_holiday_copy.findMany({ select: { holiday_ID: true } })
     * 
    **/
    findMany<T extends Tb_state_holiday_copyFindManyArgs>(
      args?: SelectSubset<T, Tb_state_holiday_copyFindManyArgs>
    ): Prisma.PrismaPromise<Array<Tb_state_holiday_copyGetPayload<T>>>

    /**
     * Create a Tb_state_holiday_copy.
     * @param {Tb_state_holiday_copyCreateArgs} args - Arguments to create a Tb_state_holiday_copy.
     * @example
     * // Create one Tb_state_holiday_copy
     * const Tb_state_holiday_copy = await prisma.tb_state_holiday_copy.create({
     *   data: {
     *     // ... data to create a Tb_state_holiday_copy
     *   }
     * })
     * 
    **/
    create<T extends Tb_state_holiday_copyCreateArgs>(
      args: SelectSubset<T, Tb_state_holiday_copyCreateArgs>
    ): Prisma__Tb_state_holiday_copyClient<Tb_state_holiday_copyGetPayload<T>>

    /**
     * Create many Tb_state_holiday_copies.
     *     @param {Tb_state_holiday_copyCreateManyArgs} args - Arguments to create many Tb_state_holiday_copies.
     *     @example
     *     // Create many Tb_state_holiday_copies
     *     const tb_state_holiday_copy = await prisma.tb_state_holiday_copy.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Tb_state_holiday_copyCreateManyArgs>(
      args?: SelectSubset<T, Tb_state_holiday_copyCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_state_holiday_copy.
     * @param {Tb_state_holiday_copyDeleteArgs} args - Arguments to delete one Tb_state_holiday_copy.
     * @example
     * // Delete one Tb_state_holiday_copy
     * const Tb_state_holiday_copy = await prisma.tb_state_holiday_copy.delete({
     *   where: {
     *     // ... filter to delete one Tb_state_holiday_copy
     *   }
     * })
     * 
    **/
    delete<T extends Tb_state_holiday_copyDeleteArgs>(
      args: SelectSubset<T, Tb_state_holiday_copyDeleteArgs>
    ): Prisma__Tb_state_holiday_copyClient<Tb_state_holiday_copyGetPayload<T>>

    /**
     * Update one Tb_state_holiday_copy.
     * @param {Tb_state_holiday_copyUpdateArgs} args - Arguments to update one Tb_state_holiday_copy.
     * @example
     * // Update one Tb_state_holiday_copy
     * const tb_state_holiday_copy = await prisma.tb_state_holiday_copy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Tb_state_holiday_copyUpdateArgs>(
      args: SelectSubset<T, Tb_state_holiday_copyUpdateArgs>
    ): Prisma__Tb_state_holiday_copyClient<Tb_state_holiday_copyGetPayload<T>>

    /**
     * Delete zero or more Tb_state_holiday_copies.
     * @param {Tb_state_holiday_copyDeleteManyArgs} args - Arguments to filter Tb_state_holiday_copies to delete.
     * @example
     * // Delete a few Tb_state_holiday_copies
     * const { count } = await prisma.tb_state_holiday_copy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Tb_state_holiday_copyDeleteManyArgs>(
      args?: SelectSubset<T, Tb_state_holiday_copyDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_state_holiday_copies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_state_holiday_copyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_state_holiday_copies
     * const tb_state_holiday_copy = await prisma.tb_state_holiday_copy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Tb_state_holiday_copyUpdateManyArgs>(
      args: SelectSubset<T, Tb_state_holiday_copyUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_state_holiday_copy.
     * @param {Tb_state_holiday_copyUpsertArgs} args - Arguments to update or create a Tb_state_holiday_copy.
     * @example
     * // Update or create a Tb_state_holiday_copy
     * const tb_state_holiday_copy = await prisma.tb_state_holiday_copy.upsert({
     *   create: {
     *     // ... data to create a Tb_state_holiday_copy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_state_holiday_copy we want to update
     *   }
     * })
    **/
    upsert<T extends Tb_state_holiday_copyUpsertArgs>(
      args: SelectSubset<T, Tb_state_holiday_copyUpsertArgs>
    ): Prisma__Tb_state_holiday_copyClient<Tb_state_holiday_copyGetPayload<T>>

    /**
     * Count the number of Tb_state_holiday_copies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_state_holiday_copyCountArgs} args - Arguments to filter Tb_state_holiday_copies to count.
     * @example
     * // Count the number of Tb_state_holiday_copies
     * const count = await prisma.tb_state_holiday_copy.count({
     *   where: {
     *     // ... the filter for the Tb_state_holiday_copies we want to count
     *   }
     * })
    **/
    count<T extends Tb_state_holiday_copyCountArgs>(
      args?: Subset<T, Tb_state_holiday_copyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_state_holiday_copyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_state_holiday_copy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_state_holiday_copyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_state_holiday_copyAggregateArgs>(args: Subset<T, Tb_state_holiday_copyAggregateArgs>): Prisma.PrismaPromise<GetTb_state_holiday_copyAggregateType<T>>

    /**
     * Group by Tb_state_holiday_copy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_state_holiday_copyGroupByArgs} args - Group by arguments.
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
      T extends Tb_state_holiday_copyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Tb_state_holiday_copyGroupByArgs['orderBy'] }
        : { orderBy?: Tb_state_holiday_copyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Tb_state_holiday_copyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_state_holiday_copyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Tb_state_holiday_copy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Tb_state_holiday_copyClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Tb_state_holiday_copy base type for findUnique actions
   */
  export type Tb_state_holiday_copyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Tb_state_holiday_copy
     */
    select?: Tb_state_holiday_copySelect | null
    /**
     * Filter, which Tb_state_holiday_copy to fetch.
     */
    where: Tb_state_holiday_copyWhereUniqueInput
  }

  /**
   * Tb_state_holiday_copy findUnique
   */
  export interface Tb_state_holiday_copyFindUniqueArgs extends Tb_state_holiday_copyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Tb_state_holiday_copy findUniqueOrThrow
   */
  export type Tb_state_holiday_copyFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Tb_state_holiday_copy
     */
    select?: Tb_state_holiday_copySelect | null
    /**
     * Filter, which Tb_state_holiday_copy to fetch.
     */
    where: Tb_state_holiday_copyWhereUniqueInput
  }


  /**
   * Tb_state_holiday_copy base type for findFirst actions
   */
  export type Tb_state_holiday_copyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Tb_state_holiday_copy
     */
    select?: Tb_state_holiday_copySelect | null
    /**
     * Filter, which Tb_state_holiday_copy to fetch.
     */
    where?: Tb_state_holiday_copyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tb_state_holiday_copies to fetch.
     */
    orderBy?: Enumerable<Tb_state_holiday_copyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tb_state_holiday_copies.
     */
    cursor?: Tb_state_holiday_copyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tb_state_holiday_copies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tb_state_holiday_copies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tb_state_holiday_copies.
     */
    distinct?: Enumerable<Tb_state_holiday_copyScalarFieldEnum>
  }

  /**
   * Tb_state_holiday_copy findFirst
   */
  export interface Tb_state_holiday_copyFindFirstArgs extends Tb_state_holiday_copyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Tb_state_holiday_copy findFirstOrThrow
   */
  export type Tb_state_holiday_copyFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Tb_state_holiday_copy
     */
    select?: Tb_state_holiday_copySelect | null
    /**
     * Filter, which Tb_state_holiday_copy to fetch.
     */
    where?: Tb_state_holiday_copyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tb_state_holiday_copies to fetch.
     */
    orderBy?: Enumerable<Tb_state_holiday_copyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tb_state_holiday_copies.
     */
    cursor?: Tb_state_holiday_copyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tb_state_holiday_copies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tb_state_holiday_copies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tb_state_holiday_copies.
     */
    distinct?: Enumerable<Tb_state_holiday_copyScalarFieldEnum>
  }


  /**
   * Tb_state_holiday_copy findMany
   */
  export type Tb_state_holiday_copyFindManyArgs = {
    /**
     * Select specific fields to fetch from the Tb_state_holiday_copy
     */
    select?: Tb_state_holiday_copySelect | null
    /**
     * Filter, which Tb_state_holiday_copies to fetch.
     */
    where?: Tb_state_holiday_copyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tb_state_holiday_copies to fetch.
     */
    orderBy?: Enumerable<Tb_state_holiday_copyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tb_state_holiday_copies.
     */
    cursor?: Tb_state_holiday_copyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tb_state_holiday_copies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tb_state_holiday_copies.
     */
    skip?: number
    distinct?: Enumerable<Tb_state_holiday_copyScalarFieldEnum>
  }


  /**
   * Tb_state_holiday_copy create
   */
  export type Tb_state_holiday_copyCreateArgs = {
    /**
     * Select specific fields to fetch from the Tb_state_holiday_copy
     */
    select?: Tb_state_holiday_copySelect | null
    /**
     * The data needed to create a Tb_state_holiday_copy.
     */
    data: XOR<Tb_state_holiday_copyCreateInput, Tb_state_holiday_copyUncheckedCreateInput>
  }


  /**
   * Tb_state_holiday_copy createMany
   */
  export type Tb_state_holiday_copyCreateManyArgs = {
    /**
     * The data used to create many Tb_state_holiday_copies.
     */
    data: Enumerable<Tb_state_holiday_copyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Tb_state_holiday_copy update
   */
  export type Tb_state_holiday_copyUpdateArgs = {
    /**
     * Select specific fields to fetch from the Tb_state_holiday_copy
     */
    select?: Tb_state_holiday_copySelect | null
    /**
     * The data needed to update a Tb_state_holiday_copy.
     */
    data: XOR<Tb_state_holiday_copyUpdateInput, Tb_state_holiday_copyUncheckedUpdateInput>
    /**
     * Choose, which Tb_state_holiday_copy to update.
     */
    where: Tb_state_holiday_copyWhereUniqueInput
  }


  /**
   * Tb_state_holiday_copy updateMany
   */
  export type Tb_state_holiday_copyUpdateManyArgs = {
    /**
     * The data used to update Tb_state_holiday_copies.
     */
    data: XOR<Tb_state_holiday_copyUpdateManyMutationInput, Tb_state_holiday_copyUncheckedUpdateManyInput>
    /**
     * Filter which Tb_state_holiday_copies to update
     */
    where?: Tb_state_holiday_copyWhereInput
  }


  /**
   * Tb_state_holiday_copy upsert
   */
  export type Tb_state_holiday_copyUpsertArgs = {
    /**
     * Select specific fields to fetch from the Tb_state_holiday_copy
     */
    select?: Tb_state_holiday_copySelect | null
    /**
     * The filter to search for the Tb_state_holiday_copy to update in case it exists.
     */
    where: Tb_state_holiday_copyWhereUniqueInput
    /**
     * In case the Tb_state_holiday_copy found by the `where` argument doesn't exist, create a new Tb_state_holiday_copy with this data.
     */
    create: XOR<Tb_state_holiday_copyCreateInput, Tb_state_holiday_copyUncheckedCreateInput>
    /**
     * In case the Tb_state_holiday_copy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Tb_state_holiday_copyUpdateInput, Tb_state_holiday_copyUncheckedUpdateInput>
  }


  /**
   * Tb_state_holiday_copy delete
   */
  export type Tb_state_holiday_copyDeleteArgs = {
    /**
     * Select specific fields to fetch from the Tb_state_holiday_copy
     */
    select?: Tb_state_holiday_copySelect | null
    /**
     * Filter which Tb_state_holiday_copy to delete.
     */
    where: Tb_state_holiday_copyWhereUniqueInput
  }


  /**
   * Tb_state_holiday_copy deleteMany
   */
  export type Tb_state_holiday_copyDeleteManyArgs = {
    /**
     * Filter which Tb_state_holiday_copies to delete
     */
    where?: Tb_state_holiday_copyWhereInput
  }


  /**
   * Tb_state_holiday_copy without action
   */
  export type Tb_state_holiday_copyArgs = {
    /**
     * Select specific fields to fetch from the Tb_state_holiday_copy
     */
    select?: Tb_state_holiday_copySelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Tb_staff_infoScalarFieldEnum: {
    staff_ID: 'staff_ID',
    userName: 'userName',
    firstName: 'firstName',
    lastName: 'lastName',
    staffO2B2_ID: 'staffO2B2_ID'
  };

  export type Tb_staff_infoScalarFieldEnum = (typeof Tb_staff_infoScalarFieldEnum)[keyof typeof Tb_staff_infoScalarFieldEnum]


  export const Tb_staff_leaveScalarFieldEnum: {
    Leave_ID: 'Leave_ID',
    staff_o2b2_ID: 'staff_o2b2_ID',
    staffLeaveType: 'staffLeaveType',
    staffLeaveDate: 'staffLeaveDate',
    staffLeaveNote: 'staffLeaveNote'
  };

  export type Tb_staff_leaveScalarFieldEnum = (typeof Tb_staff_leaveScalarFieldEnum)[keyof typeof Tb_staff_leaveScalarFieldEnum]


  export const Tb_state_holidayScalarFieldEnum: {
    holiday_ID: 'holiday_ID',
    holidayTitle: 'holidayTitle',
    holidayDate: 'holidayDate',
    holidayYear: 'holidayYear'
  };

  export type Tb_state_holidayScalarFieldEnum = (typeof Tb_state_holidayScalarFieldEnum)[keyof typeof Tb_state_holidayScalarFieldEnum]


  export const Tb_state_holiday_copyScalarFieldEnum: {
    holiday_ID: 'holiday_ID',
    holidayTitle: 'holidayTitle',
    holidayDate: 'holidayDate',
    holidayYear: 'holidayYear'
  };

  export type Tb_state_holiday_copyScalarFieldEnum = (typeof Tb_state_holiday_copyScalarFieldEnum)[keyof typeof Tb_state_holiday_copyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type Tb_staff_infoWhereInput = {
    AND?: Enumerable<Tb_staff_infoWhereInput>
    OR?: Enumerable<Tb_staff_infoWhereInput>
    NOT?: Enumerable<Tb_staff_infoWhereInput>
    staff_ID?: IntFilter<"Tb_staff_info"> | number
    userName?: StringFilter<"Tb_staff_info"> | string
    firstName?: StringFilter<"Tb_staff_info"> | string
    lastName?: StringFilter<"Tb_staff_info"> | string
    staffO2B2_ID?: IntFilter<"Tb_staff_info"> | number
  }

  export type Tb_staff_infoOrderByWithRelationInput = {
    staff_ID?: SortOrder
    userName?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    staffO2B2_ID?: SortOrder
  }

  export type Tb_staff_infoWhereUniqueInput = Prisma.AtLeast<{
    staff_ID?: number
    AND?: Enumerable<Tb_staff_infoWhereInput>
    OR?: Enumerable<Tb_staff_infoWhereInput>
    NOT?: Enumerable<Tb_staff_infoWhereInput>
    userName?: StringFilter<"Tb_staff_info"> | string
    firstName?: StringFilter<"Tb_staff_info"> | string
    lastName?: StringFilter<"Tb_staff_info"> | string
    staffO2B2_ID?: IntFilter<"Tb_staff_info"> | number
  }, "staff_ID">

  export type Tb_staff_infoOrderByWithAggregationInput = {
    staff_ID?: SortOrder
    userName?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    staffO2B2_ID?: SortOrder
    _count?: Tb_staff_infoCountOrderByAggregateInput
    _avg?: Tb_staff_infoAvgOrderByAggregateInput
    _max?: Tb_staff_infoMaxOrderByAggregateInput
    _min?: Tb_staff_infoMinOrderByAggregateInput
    _sum?: Tb_staff_infoSumOrderByAggregateInput
  }

  export type Tb_staff_infoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Tb_staff_infoScalarWhereWithAggregatesInput>
    OR?: Enumerable<Tb_staff_infoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Tb_staff_infoScalarWhereWithAggregatesInput>
    staff_ID?: IntWithAggregatesFilter<"Tb_staff_info"> | number
    userName?: StringWithAggregatesFilter<"Tb_staff_info"> | string
    firstName?: StringWithAggregatesFilter<"Tb_staff_info"> | string
    lastName?: StringWithAggregatesFilter<"Tb_staff_info"> | string
    staffO2B2_ID?: IntWithAggregatesFilter<"Tb_staff_info"> | number
  }

  export type Tb_staff_leaveWhereInput = {
    AND?: Enumerable<Tb_staff_leaveWhereInput>
    OR?: Enumerable<Tb_staff_leaveWhereInput>
    NOT?: Enumerable<Tb_staff_leaveWhereInput>
    Leave_ID?: IntFilter<"Tb_staff_leave"> | number
    staff_o2b2_ID?: IntFilter<"Tb_staff_leave"> | number
    staffLeaveType?: StringFilter<"Tb_staff_leave"> | string
    staffLeaveDate?: DateTimeFilter<"Tb_staff_leave"> | Date | string
    staffLeaveNote?: StringFilter<"Tb_staff_leave"> | string
  }

  export type Tb_staff_leaveOrderByWithRelationInput = {
    Leave_ID?: SortOrder
    staff_o2b2_ID?: SortOrder
    staffLeaveType?: SortOrder
    staffLeaveDate?: SortOrder
    staffLeaveNote?: SortOrder
  }

  export type Tb_staff_leaveWhereUniqueInput = Prisma.AtLeast<{
    Leave_ID?: number
    AND?: Enumerable<Tb_staff_leaveWhereInput>
    OR?: Enumerable<Tb_staff_leaveWhereInput>
    NOT?: Enumerable<Tb_staff_leaveWhereInput>
    staff_o2b2_ID?: IntFilter<"Tb_staff_leave"> | number
    staffLeaveType?: StringFilter<"Tb_staff_leave"> | string
    staffLeaveDate?: DateTimeFilter<"Tb_staff_leave"> | Date | string
    staffLeaveNote?: StringFilter<"Tb_staff_leave"> | string
  }, "Leave_ID">

  export type Tb_staff_leaveOrderByWithAggregationInput = {
    Leave_ID?: SortOrder
    staff_o2b2_ID?: SortOrder
    staffLeaveType?: SortOrder
    staffLeaveDate?: SortOrder
    staffLeaveNote?: SortOrder
    _count?: Tb_staff_leaveCountOrderByAggregateInput
    _avg?: Tb_staff_leaveAvgOrderByAggregateInput
    _max?: Tb_staff_leaveMaxOrderByAggregateInput
    _min?: Tb_staff_leaveMinOrderByAggregateInput
    _sum?: Tb_staff_leaveSumOrderByAggregateInput
  }

  export type Tb_staff_leaveScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Tb_staff_leaveScalarWhereWithAggregatesInput>
    OR?: Enumerable<Tb_staff_leaveScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Tb_staff_leaveScalarWhereWithAggregatesInput>
    Leave_ID?: IntWithAggregatesFilter<"Tb_staff_leave"> | number
    staff_o2b2_ID?: IntWithAggregatesFilter<"Tb_staff_leave"> | number
    staffLeaveType?: StringWithAggregatesFilter<"Tb_staff_leave"> | string
    staffLeaveDate?: DateTimeWithAggregatesFilter<"Tb_staff_leave"> | Date | string
    staffLeaveNote?: StringWithAggregatesFilter<"Tb_staff_leave"> | string
  }

  export type Tb_state_holidayWhereInput = {
    AND?: Enumerable<Tb_state_holidayWhereInput>
    OR?: Enumerable<Tb_state_holidayWhereInput>
    NOT?: Enumerable<Tb_state_holidayWhereInput>
    holiday_ID?: IntFilter<"Tb_state_holiday"> | number
    holidayTitle?: StringFilter<"Tb_state_holiday"> | string
    holidayDate?: DateTimeFilter<"Tb_state_holiday"> | Date | string
    holidayYear?: StringFilter<"Tb_state_holiday"> | string
  }

  export type Tb_state_holidayOrderByWithRelationInput = {
    holiday_ID?: SortOrder
    holidayTitle?: SortOrder
    holidayDate?: SortOrder
    holidayYear?: SortOrder
  }

  export type Tb_state_holidayWhereUniqueInput = Prisma.AtLeast<{
    holiday_ID?: number
    AND?: Enumerable<Tb_state_holidayWhereInput>
    OR?: Enumerable<Tb_state_holidayWhereInput>
    NOT?: Enumerable<Tb_state_holidayWhereInput>
    holidayTitle?: StringFilter<"Tb_state_holiday"> | string
    holidayDate?: DateTimeFilter<"Tb_state_holiday"> | Date | string
    holidayYear?: StringFilter<"Tb_state_holiday"> | string
  }, "holiday_ID">

  export type Tb_state_holidayOrderByWithAggregationInput = {
    holiday_ID?: SortOrder
    holidayTitle?: SortOrder
    holidayDate?: SortOrder
    holidayYear?: SortOrder
    _count?: Tb_state_holidayCountOrderByAggregateInput
    _avg?: Tb_state_holidayAvgOrderByAggregateInput
    _max?: Tb_state_holidayMaxOrderByAggregateInput
    _min?: Tb_state_holidayMinOrderByAggregateInput
    _sum?: Tb_state_holidaySumOrderByAggregateInput
  }

  export type Tb_state_holidayScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Tb_state_holidayScalarWhereWithAggregatesInput>
    OR?: Enumerable<Tb_state_holidayScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Tb_state_holidayScalarWhereWithAggregatesInput>
    holiday_ID?: IntWithAggregatesFilter<"Tb_state_holiday"> | number
    holidayTitle?: StringWithAggregatesFilter<"Tb_state_holiday"> | string
    holidayDate?: DateTimeWithAggregatesFilter<"Tb_state_holiday"> | Date | string
    holidayYear?: StringWithAggregatesFilter<"Tb_state_holiday"> | string
  }

  export type Tb_state_holiday_copyWhereInput = {
    AND?: Enumerable<Tb_state_holiday_copyWhereInput>
    OR?: Enumerable<Tb_state_holiday_copyWhereInput>
    NOT?: Enumerable<Tb_state_holiday_copyWhereInput>
    holiday_ID?: IntFilter<"Tb_state_holiday_copy"> | number
    holidayTitle?: StringFilter<"Tb_state_holiday_copy"> | string
    holidayDate?: DateTimeFilter<"Tb_state_holiday_copy"> | Date | string
    holidayYear?: StringFilter<"Tb_state_holiday_copy"> | string
  }

  export type Tb_state_holiday_copyOrderByWithRelationInput = {
    holiday_ID?: SortOrder
    holidayTitle?: SortOrder
    holidayDate?: SortOrder
    holidayYear?: SortOrder
  }

  export type Tb_state_holiday_copyWhereUniqueInput = Prisma.AtLeast<{
    holiday_ID?: number
    AND?: Enumerable<Tb_state_holiday_copyWhereInput>
    OR?: Enumerable<Tb_state_holiday_copyWhereInput>
    NOT?: Enumerable<Tb_state_holiday_copyWhereInput>
    holidayTitle?: StringFilter<"Tb_state_holiday_copy"> | string
    holidayDate?: DateTimeFilter<"Tb_state_holiday_copy"> | Date | string
    holidayYear?: StringFilter<"Tb_state_holiday_copy"> | string
  }, "holiday_ID">

  export type Tb_state_holiday_copyOrderByWithAggregationInput = {
    holiday_ID?: SortOrder
    holidayTitle?: SortOrder
    holidayDate?: SortOrder
    holidayYear?: SortOrder
    _count?: Tb_state_holiday_copyCountOrderByAggregateInput
    _avg?: Tb_state_holiday_copyAvgOrderByAggregateInput
    _max?: Tb_state_holiday_copyMaxOrderByAggregateInput
    _min?: Tb_state_holiday_copyMinOrderByAggregateInput
    _sum?: Tb_state_holiday_copySumOrderByAggregateInput
  }

  export type Tb_state_holiday_copyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Tb_state_holiday_copyScalarWhereWithAggregatesInput>
    OR?: Enumerable<Tb_state_holiday_copyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Tb_state_holiday_copyScalarWhereWithAggregatesInput>
    holiday_ID?: IntWithAggregatesFilter<"Tb_state_holiday_copy"> | number
    holidayTitle?: StringWithAggregatesFilter<"Tb_state_holiday_copy"> | string
    holidayDate?: DateTimeWithAggregatesFilter<"Tb_state_holiday_copy"> | Date | string
    holidayYear?: StringWithAggregatesFilter<"Tb_state_holiday_copy"> | string
  }

  export type Tb_staff_infoCreateInput = {
    userName: string
    firstName: string
    lastName: string
    staffO2B2_ID: number
  }

  export type Tb_staff_infoUncheckedCreateInput = {
    staff_ID?: number
    userName: string
    firstName: string
    lastName: string
    staffO2B2_ID: number
  }

  export type Tb_staff_infoUpdateInput = {
    userName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    staffO2B2_ID?: IntFieldUpdateOperationsInput | number
  }

  export type Tb_staff_infoUncheckedUpdateInput = {
    staff_ID?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    staffO2B2_ID?: IntFieldUpdateOperationsInput | number
  }

  export type Tb_staff_infoCreateManyInput = {
    staff_ID?: number
    userName: string
    firstName: string
    lastName: string
    staffO2B2_ID: number
  }

  export type Tb_staff_infoUpdateManyMutationInput = {
    userName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    staffO2B2_ID?: IntFieldUpdateOperationsInput | number
  }

  export type Tb_staff_infoUncheckedUpdateManyInput = {
    staff_ID?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    staffO2B2_ID?: IntFieldUpdateOperationsInput | number
  }

  export type Tb_staff_leaveCreateInput = {
    staff_o2b2_ID: number
    staffLeaveType: string
    staffLeaveDate: Date | string
    staffLeaveNote: string
  }

  export type Tb_staff_leaveUncheckedCreateInput = {
    Leave_ID?: number
    staff_o2b2_ID: number
    staffLeaveType: string
    staffLeaveDate: Date | string
    staffLeaveNote: string
  }

  export type Tb_staff_leaveUpdateInput = {
    staff_o2b2_ID?: IntFieldUpdateOperationsInput | number
    staffLeaveType?: StringFieldUpdateOperationsInput | string
    staffLeaveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    staffLeaveNote?: StringFieldUpdateOperationsInput | string
  }

  export type Tb_staff_leaveUncheckedUpdateInput = {
    Leave_ID?: IntFieldUpdateOperationsInput | number
    staff_o2b2_ID?: IntFieldUpdateOperationsInput | number
    staffLeaveType?: StringFieldUpdateOperationsInput | string
    staffLeaveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    staffLeaveNote?: StringFieldUpdateOperationsInput | string
  }

  export type Tb_staff_leaveCreateManyInput = {
    Leave_ID?: number
    staff_o2b2_ID: number
    staffLeaveType: string
    staffLeaveDate: Date | string
    staffLeaveNote: string
  }

  export type Tb_staff_leaveUpdateManyMutationInput = {
    staff_o2b2_ID?: IntFieldUpdateOperationsInput | number
    staffLeaveType?: StringFieldUpdateOperationsInput | string
    staffLeaveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    staffLeaveNote?: StringFieldUpdateOperationsInput | string
  }

  export type Tb_staff_leaveUncheckedUpdateManyInput = {
    Leave_ID?: IntFieldUpdateOperationsInput | number
    staff_o2b2_ID?: IntFieldUpdateOperationsInput | number
    staffLeaveType?: StringFieldUpdateOperationsInput | string
    staffLeaveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    staffLeaveNote?: StringFieldUpdateOperationsInput | string
  }

  export type Tb_state_holidayCreateInput = {
    holidayTitle: string
    holidayDate: Date | string
    holidayYear: string
  }

  export type Tb_state_holidayUncheckedCreateInput = {
    holiday_ID?: number
    holidayTitle: string
    holidayDate: Date | string
    holidayYear: string
  }

  export type Tb_state_holidayUpdateInput = {
    holidayTitle?: StringFieldUpdateOperationsInput | string
    holidayDate?: DateTimeFieldUpdateOperationsInput | Date | string
    holidayYear?: StringFieldUpdateOperationsInput | string
  }

  export type Tb_state_holidayUncheckedUpdateInput = {
    holiday_ID?: IntFieldUpdateOperationsInput | number
    holidayTitle?: StringFieldUpdateOperationsInput | string
    holidayDate?: DateTimeFieldUpdateOperationsInput | Date | string
    holidayYear?: StringFieldUpdateOperationsInput | string
  }

  export type Tb_state_holidayCreateManyInput = {
    holiday_ID?: number
    holidayTitle: string
    holidayDate: Date | string
    holidayYear: string
  }

  export type Tb_state_holidayUpdateManyMutationInput = {
    holidayTitle?: StringFieldUpdateOperationsInput | string
    holidayDate?: DateTimeFieldUpdateOperationsInput | Date | string
    holidayYear?: StringFieldUpdateOperationsInput | string
  }

  export type Tb_state_holidayUncheckedUpdateManyInput = {
    holiday_ID?: IntFieldUpdateOperationsInput | number
    holidayTitle?: StringFieldUpdateOperationsInput | string
    holidayDate?: DateTimeFieldUpdateOperationsInput | Date | string
    holidayYear?: StringFieldUpdateOperationsInput | string
  }

  export type Tb_state_holiday_copyCreateInput = {
    holidayTitle: string
    holidayDate: Date | string
    holidayYear: string
  }

  export type Tb_state_holiday_copyUncheckedCreateInput = {
    holiday_ID?: number
    holidayTitle: string
    holidayDate: Date | string
    holidayYear: string
  }

  export type Tb_state_holiday_copyUpdateInput = {
    holidayTitle?: StringFieldUpdateOperationsInput | string
    holidayDate?: DateTimeFieldUpdateOperationsInput | Date | string
    holidayYear?: StringFieldUpdateOperationsInput | string
  }

  export type Tb_state_holiday_copyUncheckedUpdateInput = {
    holiday_ID?: IntFieldUpdateOperationsInput | number
    holidayTitle?: StringFieldUpdateOperationsInput | string
    holidayDate?: DateTimeFieldUpdateOperationsInput | Date | string
    holidayYear?: StringFieldUpdateOperationsInput | string
  }

  export type Tb_state_holiday_copyCreateManyInput = {
    holiday_ID?: number
    holidayTitle: string
    holidayDate: Date | string
    holidayYear: string
  }

  export type Tb_state_holiday_copyUpdateManyMutationInput = {
    holidayTitle?: StringFieldUpdateOperationsInput | string
    holidayDate?: DateTimeFieldUpdateOperationsInput | Date | string
    holidayYear?: StringFieldUpdateOperationsInput | string
  }

  export type Tb_state_holiday_copyUncheckedUpdateManyInput = {
    holiday_ID?: IntFieldUpdateOperationsInput | number
    holidayTitle?: StringFieldUpdateOperationsInput | string
    holidayDate?: DateTimeFieldUpdateOperationsInput | Date | string
    holidayYear?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Tb_staff_infoCountOrderByAggregateInput = {
    staff_ID?: SortOrder
    userName?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    staffO2B2_ID?: SortOrder
  }

  export type Tb_staff_infoAvgOrderByAggregateInput = {
    staff_ID?: SortOrder
    staffO2B2_ID?: SortOrder
  }

  export type Tb_staff_infoMaxOrderByAggregateInput = {
    staff_ID?: SortOrder
    userName?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    staffO2B2_ID?: SortOrder
  }

  export type Tb_staff_infoMinOrderByAggregateInput = {
    staff_ID?: SortOrder
    userName?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    staffO2B2_ID?: SortOrder
  }

  export type Tb_staff_infoSumOrderByAggregateInput = {
    staff_ID?: SortOrder
    staffO2B2_ID?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: Enumerable<number>
    notIn?: Enumerable<number>
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
    in?: Enumerable<string>
    notIn?: Enumerable<string>
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Tb_staff_leaveCountOrderByAggregateInput = {
    Leave_ID?: SortOrder
    staff_o2b2_ID?: SortOrder
    staffLeaveType?: SortOrder
    staffLeaveDate?: SortOrder
    staffLeaveNote?: SortOrder
  }

  export type Tb_staff_leaveAvgOrderByAggregateInput = {
    Leave_ID?: SortOrder
    staff_o2b2_ID?: SortOrder
  }

  export type Tb_staff_leaveMaxOrderByAggregateInput = {
    Leave_ID?: SortOrder
    staff_o2b2_ID?: SortOrder
    staffLeaveType?: SortOrder
    staffLeaveDate?: SortOrder
    staffLeaveNote?: SortOrder
  }

  export type Tb_staff_leaveMinOrderByAggregateInput = {
    Leave_ID?: SortOrder
    staff_o2b2_ID?: SortOrder
    staffLeaveType?: SortOrder
    staffLeaveDate?: SortOrder
    staffLeaveNote?: SortOrder
  }

  export type Tb_staff_leaveSumOrderByAggregateInput = {
    Leave_ID?: SortOrder
    staff_o2b2_ID?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Tb_state_holidayCountOrderByAggregateInput = {
    holiday_ID?: SortOrder
    holidayTitle?: SortOrder
    holidayDate?: SortOrder
    holidayYear?: SortOrder
  }

  export type Tb_state_holidayAvgOrderByAggregateInput = {
    holiday_ID?: SortOrder
  }

  export type Tb_state_holidayMaxOrderByAggregateInput = {
    holiday_ID?: SortOrder
    holidayTitle?: SortOrder
    holidayDate?: SortOrder
    holidayYear?: SortOrder
  }

  export type Tb_state_holidayMinOrderByAggregateInput = {
    holiday_ID?: SortOrder
    holidayTitle?: SortOrder
    holidayDate?: SortOrder
    holidayYear?: SortOrder
  }

  export type Tb_state_holidaySumOrderByAggregateInput = {
    holiday_ID?: SortOrder
  }

  export type Tb_state_holiday_copyCountOrderByAggregateInput = {
    holiday_ID?: SortOrder
    holidayTitle?: SortOrder
    holidayDate?: SortOrder
    holidayYear?: SortOrder
  }

  export type Tb_state_holiday_copyAvgOrderByAggregateInput = {
    holiday_ID?: SortOrder
  }

  export type Tb_state_holiday_copyMaxOrderByAggregateInput = {
    holiday_ID?: SortOrder
    holidayTitle?: SortOrder
    holidayDate?: SortOrder
    holidayYear?: SortOrder
  }

  export type Tb_state_holiday_copyMinOrderByAggregateInput = {
    holiday_ID?: SortOrder
    holidayTitle?: SortOrder
    holidayDate?: SortOrder
    holidayYear?: SortOrder
  }

  export type Tb_state_holiday_copySumOrderByAggregateInput = {
    holiday_ID?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: Enumerable<number>
    notIn?: Enumerable<number>
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
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string>
    notIn?: Enumerable<string>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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