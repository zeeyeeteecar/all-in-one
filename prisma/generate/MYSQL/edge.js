
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.13.0
 * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
 */
Prisma.prismaVersion = {
  client: "5.13.0",
  engine: "b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.TBEventReg_ACM2017ScalarFieldEnum = {
  ID: 'ID',
  EventTitle: 'EventTitle',
  RegName: 'RegName',
  RegEmail: 'RegEmail',
  RegTel: 'RegTel',
  RegAddress: 'RegAddress',
  RegAffiliate: 'RegAffiliate',
  RegPreamble: 'RegPreamble',
  RegQuestion: 'RegQuestion',
  RegDate: 'RegDate',
  RegIP: 'RegIP'
};

exports.Prisma.TBEventReg_ACM2018ScalarFieldEnum = {
  ID: 'ID',
  EventTitle: 'EventTitle',
  RegName: 'RegName',
  RegEmail: 'RegEmail',
  RegTel: 'RegTel',
  RegAddress: 'RegAddress',
  RegAffiliate: 'RegAffiliate',
  RegPreamble: 'RegPreamble',
  RegQuestion: 'RegQuestion',
  RegDate: 'RegDate',
  RegIP: 'RegIP'
};

exports.Prisma.TBEventReg_ACM2022ScalarFieldEnum = {
  ID: 'ID',
  EventTitle: 'EventTitle',
  RegName: 'RegName',
  RegEmail: 'RegEmail',
  RegTel: 'RegTel',
  RegAddress: 'RegAddress',
  RegAffiliate: 'RegAffiliate',
  RegPreamble: 'RegPreamble',
  RegQuestion: 'RegQuestion',
  RegDate: 'RegDate',
  RegIP: 'RegIP'
};

exports.Prisma.TBEventReg_ChessChampionship2019ScalarFieldEnum = {
  ID: 'ID',
  EventTitle: 'EventTitle',
  RegNameFirst: 'RegNameFirst',
  RegNameLast: 'RegNameLast',
  RegDOB: 'RegDOB',
  RegEmail: 'RegEmail',
  RegTel: 'RegTel',
  ParentNameFirst: 'ParentNameFirst',
  ParentNameLast: 'ParentNameLast',
  ParentTel: 'ParentTel',
  ParentEmail: 'ParentEmail',
  RegDate: 'RegDate',
  RegIP: 'RegIP'
};

exports.Prisma.TBEventReg_SEEE_2017ScalarFieldEnum = {
  ID: 'ID',
  EventTitle: 'EventTitle',
  RegName: 'RegName',
  RegEmail: 'RegEmail',
  RegTel: 'RegTel',
  RegAddress: 'RegAddress',
  RegDate: 'RegDate',
  RegIP: 'RegIP',
  RegLunch: 'RegLunch'
};

exports.Prisma.TBEventReg_SEEE_2017_VenderInfoScalarFieldEnum = {
  ID: 'ID',
  VenderCompTitle: 'VenderCompTitle',
  VenderResource: 'VenderResource',
  VenderEmail: 'VenderEmail',
  VenderDescrip: 'VenderDescrip',
  VenderBooth: 'VenderBooth',
  VenderTel: 'VenderTel',
  AMorPM: 'AMorPM',
  AM1: 'AM1',
  AM2: 'AM2',
  AM3: 'AM3',
  AM4: 'AM4',
  AM5: 'AM5',
  AM6: 'AM6',
  PM1: 'PM1',
  PM2: 'PM2',
  PM3: 'PM3',
  PM4: 'PM4',
  PM5: 'PM5',
  PM6: 'PM6'
};

exports.Prisma.TBEventReg_SEEE_2018ScalarFieldEnum = {
  ID: 'ID',
  EventTitle: 'EventTitle',
  RegName: 'RegName',
  RegEmail: 'RegEmail',
  RegTel: 'RegTel',
  RegAddress: 'RegAddress',
  RegDate: 'RegDate',
  RegIP: 'RegIP',
  RegLunch: 'RegLunch'
};

exports.Prisma.TBEventReg_SEEE_2018_VenderInfoScalarFieldEnum = {
  ID: 'ID',
  VenderCompTitle: 'VenderCompTitle',
  VenderContactPerson: 'VenderContactPerson',
  VenderResource: 'VenderResource',
  VenderEmail: 'VenderEmail',
  VenderDescrip: 'VenderDescrip',
  VenderBooth: 'VenderBooth',
  VenderTel: 'VenderTel',
  TimeSlot1: 'TimeSlot1',
  TimeSlot2: 'TimeSlot2',
  TimeSlot3: 'TimeSlot3',
  TimeSlot4: 'TimeSlot4',
  TimeSlot5: 'TimeSlot5',
  TimeSlot6: 'TimeSlot6',
  TimeSlot7: 'TimeSlot7',
  TimeSlot8: 'TimeSlot8',
  TimeSlot9: 'TimeSlot9',
  TimeSlot10: 'TimeSlot10'
};

exports.Prisma.TBEventReg_SpringIntoActionScalarFieldEnum = {
  ID: 'ID',
  EventTitle: 'EventTitle',
  RegName: 'RegName',
  RegEmail: 'RegEmail',
  RegTel: 'RegTel',
  RegAddress: 'RegAddress',
  RegDate: 'RegDate',
  RegIP: 'RegIP'
};

exports.Prisma.TBInvisibleIllness2019ScalarFieldEnum = {
  IndexID: 'IndexID',
  RegName: 'RegName',
  RegEmail: 'RegEmail',
  RegTel: 'RegTel',
  IfRCDMember: 'IfRCDMember',
  RegDate: 'RegDate',
  RegIP: 'RegIP'
};

exports.Prisma.TB_2017Gala_KaraokaScalarFieldEnum = {
  ID: 'ID',
  NominatorName: 'NominatorName',
  NominatorTelEmail: 'NominatorTelEmail',
  NomineeName: 'NomineeName',
  NomineeTelEmail: 'NomineeTelEmail',
  KaraokeName: 'KaraokeName',
  BringCD: 'BringCD',
  RegDateTime: 'RegDateTime'
};

exports.Prisma.Tbl_barrage_ILAcrossCanadaDay2023ScalarFieldEnum = {
  barrage_id: 'barrage_id',
  barrage_content: 'barrage_content',
  createdAt: 'createdAt'
};

exports.Prisma.Auth_groupScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.Auth_group_permissionsScalarFieldEnum = {
  id: 'id',
  group_id: 'group_id',
  permission_id: 'permission_id'
};

exports.Prisma.Auth_permissionScalarFieldEnum = {
  id: 'id',
  name: 'name',
  content_type_id: 'content_type_id',
  codename: 'codename'
};

exports.Prisma.Auth_userScalarFieldEnum = {
  id: 'id',
  password: 'password',
  last_login: 'last_login',
  is_superuser: 'is_superuser',
  username: 'username',
  first_name: 'first_name',
  last_name: 'last_name',
  email: 'email',
  is_staff: 'is_staff',
  is_active: 'is_active',
  date_joined: 'date_joined'
};

exports.Prisma.Auth_user_groupsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  group_id: 'group_id'
};

exports.Prisma.Auth_user_user_permissionsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  permission_id: 'permission_id'
};

exports.Prisma.CategoryListScalarFieldEnum = {
  categorytype: 'categorytype',
  hide: 'hide',
  categoryID: 'categoryID'
};

exports.Prisma.Django_admin_logScalarFieldEnum = {
  id: 'id',
  action_time: 'action_time',
  object_id: 'object_id',
  object_repr: 'object_repr',
  action_flag: 'action_flag',
  change_message: 'change_message',
  content_type_id: 'content_type_id',
  user_id: 'user_id'
};

exports.Prisma.Django_content_typeScalarFieldEnum = {
  id: 'id',
  app_label: 'app_label',
  model: 'model'
};

exports.Prisma.Django_migrationsScalarFieldEnum = {
  id: 'id',
  app: 'app',
  name: 'name',
  applied: 'applied'
};

exports.Prisma.Django_sessionScalarFieldEnum = {
  session_key: 'session_key',
  session_data: 'session_data',
  expire_date: 'expire_date'
};

exports.Prisma.EventsScalarFieldEnum = {
  id: 'id',
  title: 'title',
  color: 'color',
  start: 'start',
  end: 'end'
};

exports.Prisma.RecordInfoScalarFieldEnum = {
  recordInfo_ID: 'recordInfo_ID',
  categoryID: 'categoryID',
  Name: 'Name',
  StreetAddress: 'StreetAddress',
  City: 'City',
  PostalCode: 'PostalCode',
  Province: 'Province',
  Telephone: 'Telephone',
  Fax: 'Fax',
  Website: 'Website'
};

exports.Prisma.Tbl_BMORun2024_BarrageScalarFieldEnum = {
  ID: 'ID',
  donor_Fname: 'donor_Fname',
  donor_Lname: 'donor_Lname',
  donor_Org: 'donor_Org',
  donor_Amount: 'donor_Amount',
  createdAt: 'createdAt'
};

exports.Prisma.Tbl_ETransferInfoScalarFieldEnum = {
  id: 'id',
  fname: 'fname',
  lname: 'lname',
  userAddress: 'userAddress',
  userTel: 'userTel',
  useremail: 'useremail',
  todaydate: 'todaydate',
  RegDate: 'RegDate',
  RegTime: 'RegTime',
  userIP: 'userIP'
};

exports.Prisma.Tbl_TshirtContestScalarFieldEnum = {
  id: 'id',
  fname: 'fname',
  lname: 'lname',
  tel: 'tel',
  email: 'email',
  notes: 'notes',
  artwork: 'artwork',
  imgPreview: 'imgPreview',
  ip: 'ip',
  submitTime: 'submitTime'
};

exports.Prisma.Tbl_barrage_at_us_2023ScalarFieldEnum = {
  id: 'id',
  barrageContent: 'barrageContent'
};

exports.Prisma.Tbl_next_authScalarFieldEnum = {
  id: 'id',
  username: 'username',
  password: 'password',
  email: 'email',
  isVerified: 'isVerified',
  isAdmin: 'isAdmin'
};

exports.Prisma.Tbl_onlineconcert2022_donorsScalarFieldEnum = {
  donor_id: 'donor_id',
  donor_fname: 'donor_fname',
  donor_lname: 'donor_lname',
  donor_amount: 'donor_amount'
};

exports.Prisma.UsersScalarFieldEnum = {
  Username: 'Username',
  Password: 'Password',
  id: 'id'
};

exports.Prisma.Tbl_CaptureImageScalarFieldEnum = {
  ID: 'ID',
  userName: 'userName',
  userID: 'userID',
  imgBase64_1: 'imgBase64_1',
  imgBase64_2: 'imgBase64_2'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  TBEventReg_ACM2017: 'TBEventReg_ACM2017',
  TBEventReg_ACM2018: 'TBEventReg_ACM2018',
  TBEventReg_ACM2022: 'TBEventReg_ACM2022',
  TBEventReg_ChessChampionship2019: 'TBEventReg_ChessChampionship2019',
  TBEventReg_SEEE_2017: 'TBEventReg_SEEE_2017',
  TBEventReg_SEEE_2017_VenderInfo: 'TBEventReg_SEEE_2017_VenderInfo',
  TBEventReg_SEEE_2018: 'TBEventReg_SEEE_2018',
  TBEventReg_SEEE_2018_VenderInfo: 'TBEventReg_SEEE_2018_VenderInfo',
  TBEventReg_SpringIntoAction: 'TBEventReg_SpringIntoAction',
  TBInvisibleIllness2019: 'TBInvisibleIllness2019',
  TB_2017Gala_Karaoka: 'TB_2017Gala_Karaoka',
  Tbl_barrage_ILAcrossCanadaDay2023: 'Tbl_barrage_ILAcrossCanadaDay2023',
  auth_group: 'auth_group',
  auth_group_permissions: 'auth_group_permissions',
  auth_permission: 'auth_permission',
  auth_user: 'auth_user',
  auth_user_groups: 'auth_user_groups',
  auth_user_user_permissions: 'auth_user_user_permissions',
  categoryList: 'categoryList',
  django_admin_log: 'django_admin_log',
  django_content_type: 'django_content_type',
  django_migrations: 'django_migrations',
  django_session: 'django_session',
  events: 'events',
  recordInfo: 'recordInfo',
  tbl_BMORun2024_Barrage: 'tbl_BMORun2024_Barrage',
  tbl_ETransferInfo: 'tbl_ETransferInfo',
  tbl_TshirtContest: 'tbl_TshirtContest',
  tbl_barrage_at_us_2023: 'tbl_barrage_at_us_2023',
  tbl_next_auth: 'tbl_next_auth',
  tbl_onlineconcert2022_donors: 'tbl_onlineconcert2022_donors',
  users: 'users',
  tbl_CaptureImage: 'tbl_CaptureImage'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Tom\\Desktop\\nextjs14\\all-in-one\\prisma\\generate\\MYSQL",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.13.0",
  "engineVersion": "b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL_MYSQL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"generate/MYSQL\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL_MYSQL\")\n}\n\nmodel TBEventReg_ACM2017 {\n  ID           Int       @id\n  EventTitle   String?   @db.VarChar(100)\n  RegName      String?   @db.VarChar(100)\n  RegEmail     String?   @db.VarChar(100)\n  RegTel       String?   @db.VarChar(100)\n  RegAddress   String?   @db.VarChar(200)\n  RegAffiliate String?   @db.VarChar(100)\n  RegPreamble  String    @db.LongText\n  RegQuestion  String    @db.LongText\n  RegDate      DateTime? @db.DateTime(0)\n  RegIP        String    @db.VarChar(20)\n}\n\nmodel TBEventReg_ACM2018 {\n  ID           Int       @id @default(autoincrement())\n  EventTitle   String?   @db.VarChar(100)\n  RegName      String?   @db.VarChar(100)\n  RegEmail     String?   @db.VarChar(100)\n  RegTel       String?   @db.VarChar(100)\n  RegAddress   String?   @db.VarChar(200)\n  RegAffiliate String?   @db.VarChar(100)\n  RegPreamble  String    @db.LongText\n  RegQuestion  String    @db.LongText\n  RegDate      DateTime? @db.DateTime(0)\n  RegIP        String    @db.VarChar(20)\n}\n\nmodel TBEventReg_ACM2022 {\n  ID           Int       @id @default(autoincrement())\n  EventTitle   String?   @db.VarChar(100)\n  RegName      String?   @db.VarChar(100)\n  RegEmail     String?   @db.VarChar(100)\n  RegTel       String?   @db.VarChar(100)\n  RegAddress   String?   @db.VarChar(200)\n  RegAffiliate String?   @db.VarChar(100)\n  RegPreamble  String    @db.LongText\n  RegQuestion  String    @db.LongText\n  RegDate      DateTime? @db.DateTime(0)\n  RegIP        String    @db.VarChar(20)\n}\n\nmodel TBEventReg_ChessChampionship2019 {\n  ID              Int      @id @default(autoincrement())\n  EventTitle      String   @db.VarChar(100)\n  RegNameFirst    String   @db.VarChar(100)\n  RegNameLast     String   @db.VarChar(100)\n  RegDOB          DateTime @db.Date\n  RegEmail        String   @db.VarChar(100)\n  RegTel          String   @db.VarChar(100)\n  ParentNameFirst String   @db.VarChar(100)\n  ParentNameLast  String   @db.VarChar(100)\n  ParentTel       String   @db.VarChar(100)\n  ParentEmail     String   @db.VarChar(100)\n  RegDate         DateTime @db.DateTime(0)\n  RegIP           String   @db.VarChar(50)\n}\n\nmodel TBEventReg_SEEE_2017 {\n  ID         Int      @id\n  EventTitle String   @db.VarChar(100)\n  RegName    String   @db.VarChar(100)\n  RegEmail   String   @db.VarChar(100)\n  RegTel     String   @db.VarChar(100)\n  RegAddress String   @db.VarChar(200)\n  RegDate    DateTime @db.DateTime(0)\n  RegIP      String   @db.VarChar(20)\n  RegLunch   String?  @db.VarChar(3)\n}\n\nmodel TBEventReg_SEEE_2017_VenderInfo {\n  ID              Int    @id\n  VenderCompTitle String @db.VarChar(50)\n  VenderResource  String @db.VarChar(50)\n  VenderEmail     String @db.VarChar(50)\n  VenderDescrip   String @db.Text\n  VenderBooth     String @db.VarChar(2)\n  VenderTel       String @db.VarChar(20)\n  AMorPM          String @db.VarChar(4)\n  AM1             String @db.VarChar(20)\n  AM2             String @db.VarChar(20)\n  AM3             String @db.VarChar(20)\n  AM4             String @db.VarChar(20)\n  AM5             String @db.VarChar(20)\n  AM6             String @db.VarChar(20)\n  PM1             String @db.VarChar(20)\n  PM2             String @db.VarChar(20)\n  PM3             String @db.VarChar(20)\n  PM4             String @db.VarChar(20)\n  PM5             String @db.VarChar(20)\n  PM6             String @db.VarChar(20)\n}\n\nmodel TBEventReg_SEEE_2018 {\n  ID         Int      @id @default(autoincrement())\n  EventTitle String   @db.VarChar(100)\n  RegName    String   @db.VarChar(100)\n  RegEmail   String   @db.VarChar(100)\n  RegTel     String   @db.VarChar(100)\n  RegAddress String   @db.VarChar(200)\n  RegDate    DateTime @db.DateTime(0)\n  RegIP      String   @db.VarChar(50)\n  RegLunch   String?  @db.VarChar(3)\n}\n\nmodel TBEventReg_SEEE_2018_VenderInfo {\n  ID                  Int    @id @default(autoincrement())\n  VenderCompTitle     String @db.VarChar(50)\n  VenderContactPerson String @db.VarChar(50)\n  VenderResource      String @db.VarChar(50)\n  VenderEmail         String @db.VarChar(50)\n  VenderDescrip       String @db.Text\n  VenderBooth         String @db.VarChar(2)\n  VenderTel           String @db.VarChar(20)\n  TimeSlot1           String @db.VarChar(50)\n  TimeSlot2           String @db.VarChar(50)\n  TimeSlot3           String @db.VarChar(50)\n  TimeSlot4           String @db.VarChar(50)\n  TimeSlot5           String @db.VarChar(50)\n  TimeSlot6           String @db.VarChar(50)\n  TimeSlot7           String @db.VarChar(50)\n  TimeSlot8           String @db.VarChar(50)\n  TimeSlot9           String @db.VarChar(50)\n  TimeSlot10          String @db.VarChar(50)\n}\n\nmodel TBEventReg_SpringIntoAction {\n  ID         Int       @id\n  EventTitle String?   @db.VarChar(100)\n  RegName    String?   @db.VarChar(100)\n  RegEmail   String?   @db.VarChar(100)\n  RegTel     String?   @db.VarChar(100)\n  RegAddress String?   @db.VarChar(200)\n  RegDate    DateTime? @db.DateTime(0)\n  RegIP      String    @db.VarChar(20)\n}\n\nmodel TBInvisibleIllness2019 {\n  IndexID     Int      @id @default(autoincrement())\n  RegName     String   @db.VarChar(30)\n  RegEmail    String   @db.VarChar(50)\n  RegTel      String   @db.VarChar(20)\n  IfRCDMember String   @db.VarChar(5)\n  RegDate     DateTime @db.DateTime(0)\n  RegIP       String   @db.VarChar(20)\n}\n\nmodel TB_2017Gala_Karaoka {\n  ID                Int      @id\n  NominatorName     String   @db.VarChar(30)\n  NominatorTelEmail String   @db.VarChar(50)\n  NomineeName       String   @db.VarChar(30)\n  NomineeTelEmail   String   @db.VarChar(50)\n  KaraokeName       String   @db.VarChar(50)\n  BringCD           String   @db.VarChar(3)\n  RegDateTime       DateTime @db.DateTime(0)\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by the Prisma Client.\nmodel TB_Auction_Item {\n  ItemID         Int\n  ItemCode       String   @db.VarChar(8)\n  ItemName       String   @db.VarChar(300)\n  ItemDescrip    String   @db.Text\n  ItemPhoto      String   @db.VarChar(200)\n  ItemPriceStart Decimal  @db.Decimal(7, 2)\n  ItemIncrement  Decimal  @db.Decimal(5, 2)\n  ItemStartTime  DateTime @db.DateTime(0)\n  ItemEndTime    DateTime @db.DateTime(0)\n  ItemPhotoPath  String   @db.VarChar(200)\n  ItemActive     String   @db.VarChar(3)\n\n  @@ignore\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by the Prisma Client.\nmodel TB_Auction_Item_Bid {\n  ItemBidID                Int\n  ItemBidName              String   @db.VarChar(20)\n  ItemBidPhone             String   @db.VarChar(20)\n  ItemBidEmail             String   @db.VarChar(50)\n  ItemBidPrice             Decimal  @db.Decimal(5, 2)\n  ItemID                   Int\n  ItemBidRecordCreatedDate DateTime @db.DateTime(0)\n\n  @@ignore\n}\n\nmodel Tbl_barrage_ILAcrossCanadaDay2023 {\n  barrage_id      Int      @id @default(autoincrement())\n  barrage_content String   @db.VarChar(100)\n  createdAt       DateTime @default(now()) @db.Timestamp(0)\n}\n\nmodel auth_group {\n  id                     Int                      @id @default(autoincrement())\n  name                   String                   @unique(map: \"name\") @db.VarChar(150)\n  auth_group_permissions auth_group_permissions[]\n  auth_user_groups       auth_user_groups[]\n}\n\nmodel auth_group_permissions {\n  id              BigInt          @id @default(autoincrement())\n  group_id        Int\n  permission_id   Int\n  auth_permission auth_permission @relation(fields: [permission_id], references: [id], onUpdate: Restrict, map: \"auth_group_permissio_permission_id_84c5c92e_fk_auth_perm\")\n  auth_group      auth_group      @relation(fields: [group_id], references: [id], onUpdate: Restrict, map: \"auth_group_permissions_group_id_b120cbf9_fk_auth_group_id\")\n\n  @@unique([group_id, permission_id], map: \"auth_group_permissions_group_id_permission_id_0cd325b0_uniq\")\n  @@index([permission_id], map: \"auth_group_permissio_permission_id_84c5c92e_fk_auth_perm\")\n}\n\nmodel auth_permission {\n  id                         Int                          @id @default(autoincrement())\n  name                       String                       @db.VarChar(255)\n  content_type_id            Int\n  codename                   String                       @db.VarChar(100)\n  auth_group_permissions     auth_group_permissions[]\n  django_content_type        django_content_type          @relation(fields: [content_type_id], references: [id], onUpdate: Restrict, map: \"auth_permission_content_type_id_2f476e4b_fk_django_co\")\n  auth_user_user_permissions auth_user_user_permissions[]\n\n  @@unique([content_type_id, codename], map: \"auth_permission_content_type_id_codename_01ab375a_uniq\")\n}\n\nmodel auth_user {\n  id                         Int                          @id @default(autoincrement())\n  password                   String                       @db.VarChar(128)\n  last_login                 DateTime?                    @db.DateTime(6)\n  is_superuser               Boolean\n  username                   String                       @unique(map: \"username\") @db.VarChar(150)\n  first_name                 String                       @db.VarChar(150)\n  last_name                  String                       @db.VarChar(150)\n  email                      String                       @db.VarChar(254)\n  is_staff                   Boolean\n  is_active                  Boolean\n  date_joined                DateTime                     @db.DateTime(6)\n  auth_user_groups           auth_user_groups[]\n  auth_user_user_permissions auth_user_user_permissions[]\n  django_admin_log           django_admin_log[]\n}\n\nmodel auth_user_groups {\n  id         BigInt     @id @default(autoincrement())\n  user_id    Int\n  group_id   Int\n  auth_group auth_group @relation(fields: [group_id], references: [id], onUpdate: Restrict, map: \"auth_user_groups_group_id_97559544_fk_auth_group_id\")\n  auth_user  auth_user  @relation(fields: [user_id], references: [id], onUpdate: Restrict, map: \"auth_user_groups_user_id_6a12ed8b_fk_auth_user_id\")\n\n  @@unique([user_id, group_id], map: \"auth_user_groups_user_id_group_id_94350c0c_uniq\")\n  @@index([group_id], map: \"auth_user_groups_group_id_97559544_fk_auth_group_id\")\n}\n\nmodel auth_user_user_permissions {\n  id              BigInt          @id @default(autoincrement())\n  user_id         Int\n  permission_id   Int\n  auth_permission auth_permission @relation(fields: [permission_id], references: [id], onUpdate: Restrict, map: \"auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm\")\n  auth_user       auth_user       @relation(fields: [user_id], references: [id], onUpdate: Restrict, map: \"auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id\")\n\n  @@unique([user_id, permission_id], map: \"auth_user_user_permissions_user_id_permission_id_14a6b632_uniq\")\n  @@index([permission_id], map: \"auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm\")\n}\n\nmodel categoryList {\n  categorytype String? @db.VarChar(255)\n  hide         Int?\n  categoryID   Int     @id @default(autoincrement())\n}\n\nmodel django_admin_log {\n  id                  Int                  @id @default(autoincrement())\n  action_time         DateTime             @db.DateTime(6)\n  object_id           String?              @db.LongText\n  object_repr         String               @db.VarChar(200)\n  action_flag         Int                  @db.UnsignedSmallInt\n  change_message      String               @db.LongText\n  content_type_id     Int?\n  user_id             Int\n  django_content_type django_content_type? @relation(fields: [content_type_id], references: [id], onDelete: Restrict, onUpdate: Restrict, map: \"django_admin_log_content_type_id_c4bce8eb_fk_django_co\")\n  auth_user           auth_user            @relation(fields: [user_id], references: [id], onUpdate: Restrict, map: \"django_admin_log_user_id_c564eba6_fk_auth_user_id\")\n\n  @@index([content_type_id], map: \"django_admin_log_content_type_id_c4bce8eb_fk_django_co\")\n  @@index([user_id], map: \"django_admin_log_user_id_c564eba6_fk_auth_user_id\")\n}\n\nmodel django_content_type {\n  id               Int                @id @default(autoincrement())\n  app_label        String             @db.VarChar(100)\n  model            String             @db.VarChar(100)\n  auth_permission  auth_permission[]\n  django_admin_log django_admin_log[]\n\n  @@unique([app_label, model], map: \"django_content_type_app_label_model_76bd3d3b_uniq\")\n}\n\nmodel django_migrations {\n  id      BigInt   @id @default(autoincrement())\n  app     String   @db.VarChar(255)\n  name    String   @db.VarChar(255)\n  applied DateTime @db.DateTime(6)\n}\n\nmodel django_session {\n  session_key  String   @id @db.VarChar(40)\n  session_data String   @db.LongText\n  expire_date  DateTime @db.DateTime(6)\n\n  @@index([expire_date], map: \"django_session_expire_date_a5c62663\")\n}\n\nmodel events {\n  id    Int       @id @default(autoincrement())\n  title String    @db.VarChar(255)\n  color String?   @db.VarChar(7)\n  start DateTime  @db.DateTime(0)\n  end   DateTime? @db.DateTime(0)\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by the Prisma Client.\nmodel feature {\n  Parking         String? @db.VarChar(5000)\n  Sidewalk        String? @db.VarChar(5000)\n  Entrance        String? @db.VarChar(5000)\n  PublicWashroom  String? @db.VarChar(1000)\n  Elevator        String? @db.VarChar(1000)\n  Lobby           String? @db.VarChar(1000)\n  GuestRoom       String? @db.VarChar(5000)\n  DiningRoom      String? @db.VarChar(5000)\n  Patio           String? @db.VarChar(5000)\n  MeetingRoom     String? @db.VarChar(5000)\n  PublicTelephone String? @db.VarChar(5000)\n  MajorRestaurant String? @db.VarChar(5000)\n  GroceryOutlet   String? @db.VarChar(1000)\n  FoodCourt       String? @db.VarChar(1000)\n  MainTheatre     String? @db.VarChar(1000)\n  recordInfo_ID   Int?\n  Other           String? @db.VarChar(5000)\n\n  @@index([recordInfo_ID], map: \"recordInfo_ID\")\n  @@ignore\n}\n\nmodel recordInfo {\n  recordInfo_ID Int     @id @default(autoincrement())\n  categoryID    Int?\n  Name          String? @db.VarChar(1000)\n  StreetAddress String? @db.VarChar(1000)\n  City          String? @db.VarChar(100)\n  PostalCode    String? @db.VarChar(10)\n  Province      String? @db.VarChar(50)\n  Telephone     String? @db.VarChar(20)\n  Fax           String? @db.VarChar(20)\n  Website       String? @db.VarChar(1000)\n\n  @@index([categoryID], map: \"categoryID\")\n}\n\nmodel tbl_BMORun2024_Barrage {\n  ID           Int      @id @default(autoincrement())\n  donor_Fname  String?  @db.VarChar(20)\n  donor_Lname  String?  @db.VarChar(20)\n  donor_Org    String?  @db.VarChar(50)\n  donor_Amount Decimal? @db.Decimal(10, 2)\n  createdAt    String   @db.VarChar(20)\n}\n\nmodel tbl_ETransferInfo {\n  id          Int      @id @default(autoincrement())\n  fname       String   @db.VarChar(100)\n  lname       String   @db.VarChar(100)\n  userAddress String   @db.VarChar(200)\n  userTel     String   @db.VarChar(20)\n  useremail   String   @db.VarChar(100)\n  todaydate   DateTime @db.Date\n  RegDate     DateTime @db.Date\n  RegTime     DateTime @db.Time(0)\n  userIP      String   @db.VarChar(20)\n}\n\nmodel tbl_TshirtContest {\n  id         Int      @id\n  fname      String   @db.VarChar(100)\n  lname      String   @db.VarChar(100)\n  tel        String   @db.VarChar(50)\n  email      String   @db.VarChar(100)\n  notes      String   @db.Text\n  artwork    String   @db.VarChar(100)\n  imgPreview String   @db.VarChar(100)\n  ip         String   @db.VarChar(20)\n  submitTime DateTime @db.DateTime(0)\n}\n\nmodel tbl_barrage_at_us_2023 {\n  id             Int    @id @default(autoincrement())\n  barrageContent String @db.VarChar(225)\n}\n\nmodel tbl_next_auth {\n  id         Int     @id @default(autoincrement())\n  username   String  @db.VarChar(20)\n  password   String  @db.VarChar(200)\n  email      String  @db.VarChar(20)\n  isVerified Boolean @default(false)\n  isAdmin    Boolean @default(false)\n}\n\nmodel tbl_onlineconcert2022_donors {\n  donor_id     Int    @id @default(autoincrement())\n  donor_fname  String @db.VarChar(50)\n  donor_lname  String @db.VarChar(50)\n  donor_amount Int\n}\n\nmodel users {\n  Username String @db.VarChar(50)\n  Password String @db.VarChar(50)\n  id       Int    @id @default(autoincrement())\n}\n\nmodel tbl_CaptureImage {\n  ID          Int     @id @default(autoincrement())\n  userName    String? @db.VarChar(20)\n  userID      Int?\n  imgBase64_1 String? @db.MediumText\n  imgBase64_2 String  @db.MediumText\n}\n",
  "inlineSchemaHash": "9fc3c389f83a22e8bb9e47c6949354aa9d4c4696f7070ebedf0fe072182e2121",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"TBEventReg_ACM2017\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EventTitle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegEmail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegTel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegAffiliate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegPreamble\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegQuestion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegIP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TBEventReg_ACM2018\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EventTitle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegEmail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegTel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegAffiliate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegPreamble\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegQuestion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegIP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TBEventReg_ACM2022\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EventTitle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegEmail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegTel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegAffiliate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegPreamble\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegQuestion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegIP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TBEventReg_ChessChampionship2019\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EventTitle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegNameFirst\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegNameLast\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegDOB\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegEmail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegTel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ParentNameFirst\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ParentNameLast\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ParentTel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ParentEmail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegIP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TBEventReg_SEEE_2017\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EventTitle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegEmail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegTel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegIP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegLunch\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TBEventReg_SEEE_2017_VenderInfo\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VenderCompTitle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VenderResource\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VenderEmail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VenderDescrip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VenderBooth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VenderTel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AMorPM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AM1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AM2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AM3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AM4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AM5\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AM6\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PM1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PM2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PM3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PM4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PM5\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PM6\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TBEventReg_SEEE_2018\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EventTitle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegEmail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegTel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegIP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegLunch\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TBEventReg_SEEE_2018_VenderInfo\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VenderCompTitle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VenderContactPerson\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VenderResource\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VenderEmail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VenderDescrip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VenderBooth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VenderTel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TimeSlot1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TimeSlot2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TimeSlot3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TimeSlot4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TimeSlot5\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TimeSlot6\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TimeSlot7\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TimeSlot8\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TimeSlot9\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TimeSlot10\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TBEventReg_SpringIntoAction\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EventTitle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegEmail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegTel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegIP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TBInvisibleIllness2019\":{\"dbName\":null,\"fields\":[{\"name\":\"IndexID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegEmail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegTel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IfRCDMember\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegIP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TB_2017Gala_Karaoka\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NominatorName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NominatorTelEmail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NomineeName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NomineeTelEmail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"KaraokeName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BringCD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegDateTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Tbl_barrage_ILAcrossCanadaDay2023\":{\"dbName\":null,\"fields\":[{\"name\":\"barrage_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"barrage_content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"auth_group\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auth_group_permissions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"auth_group_permissions\",\"relationName\":\"auth_groupToauth_group_permissions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auth_user_groups\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"auth_user_groups\",\"relationName\":\"auth_groupToauth_user_groups\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"auth_group_permissions\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"group_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permission_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auth_permission\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"auth_permission\",\"relationName\":\"auth_group_permissionsToauth_permission\",\"relationFromFields\":[\"permission_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auth_group\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"auth_group\",\"relationName\":\"auth_groupToauth_group_permissions\",\"relationFromFields\":[\"group_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"group_id\",\"permission_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"group_id\",\"permission_id\"]}],\"isGenerated\":false},\"auth_permission\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content_type_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auth_group_permissions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"auth_group_permissions\",\"relationName\":\"auth_group_permissionsToauth_permission\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"django_content_type\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"django_content_type\",\"relationName\":\"auth_permissionTodjango_content_type\",\"relationFromFields\":[\"content_type_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auth_user_user_permissions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"auth_user_user_permissions\",\"relationName\":\"auth_permissionToauth_user_user_permissions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"content_type_id\",\"codename\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"content_type_id\",\"codename\"]}],\"isGenerated\":false},\"auth_user\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_login\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_superuser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"first_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_staff\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date_joined\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auth_user_groups\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"auth_user_groups\",\"relationName\":\"auth_userToauth_user_groups\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auth_user_user_permissions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"auth_user_user_permissions\",\"relationName\":\"auth_userToauth_user_user_permissions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"django_admin_log\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"django_admin_log\",\"relationName\":\"auth_userTodjango_admin_log\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"auth_user_groups\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"group_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auth_group\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"auth_group\",\"relationName\":\"auth_groupToauth_user_groups\",\"relationFromFields\":[\"group_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auth_user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"auth_user\",\"relationName\":\"auth_userToauth_user_groups\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"user_id\",\"group_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"user_id\",\"group_id\"]}],\"isGenerated\":false},\"auth_user_user_permissions\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permission_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auth_permission\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"auth_permission\",\"relationName\":\"auth_permissionToauth_user_user_permissions\",\"relationFromFields\":[\"permission_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auth_user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"auth_user\",\"relationName\":\"auth_userToauth_user_user_permissions\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"user_id\",\"permission_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"user_id\",\"permission_id\"]}],\"isGenerated\":false},\"categoryList\":{\"dbName\":null,\"fields\":[{\"name\":\"categorytype\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hide\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categoryID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"django_admin_log\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"action_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"object_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"object_repr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"action_flag\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"change_message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content_type_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"django_content_type\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"django_content_type\",\"relationName\":\"django_admin_logTodjango_content_type\",\"relationFromFields\":[\"content_type_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auth_user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"auth_user\",\"relationName\":\"auth_userTodjango_admin_log\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"django_content_type\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"app_label\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"model\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auth_permission\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"auth_permission\",\"relationName\":\"auth_permissionTodjango_content_type\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"django_admin_log\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"django_admin_log\",\"relationName\":\"django_admin_logTodjango_content_type\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"app_label\",\"model\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"app_label\",\"model\"]}],\"isGenerated\":false},\"django_migrations\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"app\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"applied\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"django_session\":{\"dbName\":null,\"fields\":[{\"name\":\"session_key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"session_data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expire_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"events\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"end\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"recordInfo\":{\"dbName\":null,\"fields\":[{\"name\":\"recordInfo_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categoryID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"StreetAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"City\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PostalCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Province\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Telephone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Fax\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Website\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tbl_BMORun2024_Barrage\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"donor_Fname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"donor_Lname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"donor_Org\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"donor_Amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tbl_ETransferInfo\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userTel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"useremail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"todaydate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RegTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userIP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tbl_TshirtContest\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artwork\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imgPreview\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"submitTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tbl_barrage_at_us_2023\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"barrageContent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tbl_next_auth\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isVerified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isAdmin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tbl_onlineconcert2022_donors\":{\"dbName\":null,\"fields\":[{\"name\":\"donor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"donor_fname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"donor_lname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"donor_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"users\":{\"dbName\":null,\"fields\":[{\"name\":\"Username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tbl_CaptureImage\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imgBase64_1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imgBase64_2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL_MYSQL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL_MYSQL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL_MYSQL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

