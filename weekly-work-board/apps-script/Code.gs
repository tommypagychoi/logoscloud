const SPREADSHEET_ID = '1a1X9ediHP77v_XPkWLjjUdOi2-H8KKLFRg1VaQ0s8UU';
const SHEET_NAME = 'WeeklyWork';
const SCRIPT_TOKEN = '';
const HEADERS = ['id', 'title', 'owner', 'due', 'status', 'priority', 'memo', 'createdAt', 'updatedAt'];

function doGet(e) {
  const callback = e.parameter.callback || 'callback';
  try {
    if (SCRIPT_TOKEN && e.parameter.token !== SCRIPT_TOKEN) {
      throw new Error('Invalid token.');
    }
    const action = e.parameter.action || 'list';
    const payload = e.parameter.payload ? JSON.parse(e.parameter.payload) : {};
    const result = routeAction(action, payload);
    return jsonp(callback, Object.assign({ ok: true }, result));
  } catch (error) {
    return jsonp(callback, { ok: false, error: error.message });
  }
}

function routeAction(action, payload) {
  if (action === 'list') return { tasks: listTasks() };
  if (action === 'add') return { task: addTask(payload) };
  if (action === 'update') return { task: updateTask(payload) };
  if (action === 'delete') return { deleted: deleteTask(payload.id) };
  throw new Error('Unsupported action: ' + action);
}

function getSheet() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);

  const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
  const currentHeaders = headerRange.getValues()[0];
  const needsHeader = HEADERS.some((header, index) => currentHeaders[index] !== header);
  if (needsHeader) {
    headerRange.setValues([HEADERS]);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function listTasks() {
  const sheet = getSheet();
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];
  return sheet.getRange(2, 1, lastRow - 1, HEADERS.length).getValues()
    .filter(row => row[0])
    .map(row => rowToTask(row));
}

function addTask(payload) {
  const sheet = getSheet();
  const now = new Date().toISOString();
  const task = normalizeTask(payload);
  task.id = Utilities.getUuid();
  task.createdAt = now;
  task.updatedAt = now;
  sheet.appendRow(taskToRow(task));
  return task;
}

function updateTask(payload) {
  const sheet = getSheet();
  const rowNumber = findRowNumber(sheet, payload.id);
  if (!rowNumber) throw new Error('Task not found.');
  const existing = rowToTask(sheet.getRange(rowNumber, 1, 1, HEADERS.length).getValues()[0]);
  const task = normalizeTask(Object.assign(existing, payload));
  task.id = existing.id;
  task.createdAt = existing.createdAt;
  task.updatedAt = new Date().toISOString();
  sheet.getRange(rowNumber, 1, 1, HEADERS.length).setValues([taskToRow(task)]);
  return task;
}

function deleteTask(id) {
  const sheet = getSheet();
  const rowNumber = findRowNumber(sheet, id);
  if (!rowNumber) throw new Error('Task not found.');
  sheet.deleteRow(rowNumber);
  return true;
}

function findRowNumber(sheet, id) {
  if (!id) return null;
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return null;
  const ids = sheet.getRange(2, 1, lastRow - 1, 1).getValues();
  const index = ids.findIndex(row => row[0] === id);
  return index === -1 ? null : index + 2;
}

function normalizeTask(payload) {
  return {
    id: payload.id || '',
    title: String(payload.title || '').trim(),
    owner: String(payload.owner || '').trim(),
    due: String(payload.due || '').trim(),
    status: String(payload.status || 'todo').trim(),
    priority: String(payload.priority || '2').trim(),
    memo: String(payload.memo || '').trim(),
    createdAt: payload.createdAt || '',
    updatedAt: payload.updatedAt || ''
  };
}

function rowToTask(row) {
  return {
    id: String(row[0] || ''),
    title: String(row[1] || ''),
    owner: String(row[2] || ''),
    due: formatDateValue(row[3]),
    status: String(row[4] || 'todo'),
    priority: String(row[5] || '2'),
    memo: String(row[6] || ''),
    createdAt: String(row[7] || ''),
    updatedAt: String(row[8] || '')
  };
}

function taskToRow(task) {
  return HEADERS.map(header => task[header] || '');
}

function formatDateValue(value) {
  if (Object.prototype.toString.call(value) === '[object Date]') {
    return Utilities.formatDate(value, Session.getScriptTimeZone(), 'yyyy-MM-dd');
  }
  return String(value || '');
}

function jsonp(callback, data) {
  const safeCallback = String(callback).replace(/[^\w.$]/g, '');
  return ContentService
    .createTextOutput(safeCallback + '(' + JSON.stringify(data) + ');')
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}
