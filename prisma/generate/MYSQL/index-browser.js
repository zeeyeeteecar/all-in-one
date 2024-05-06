
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
