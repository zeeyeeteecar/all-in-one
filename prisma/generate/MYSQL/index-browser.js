
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.14.1
 * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
 */
Prisma.prismaVersion = {
  client: "4.14.1",
  engine: "b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


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
  users: 'users'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
