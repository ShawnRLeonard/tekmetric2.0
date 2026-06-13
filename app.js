/* ============================================================
   CarTech Shop Manager — App Logic & Mock Data
   ============================================================ */

'use strict';

// ===== Mock Data =====

const customers = [
  { id: 1, firstName: 'Maria',    lastName: 'Garcia',    phone: '615-555-0101', email: 'maria.garcia@email.com',   address: '123 Oak St, Smyrna, TN 37167',       notes: 'Prefers morning appointments' },
  { id: 2, firstName: 'James',    lastName: 'Wilson',    phone: '615-555-0202', email: 'jwilson@email.com',        address: '456 Elm Ave, Murfreesboro, TN 37130', notes: '' },
  { id: 3, firstName: 'Carlos',   lastName: 'Ramirez',   phone: '615-555-0303', email: 'carlos.r@email.com',       address: '789 Pine Rd, La Vergne, TN 37086',   notes: 'Habla español' },
  { id: 4, firstName: 'Jennifer', lastName: 'Smith',     phone: '615-555-0404', email: 'jsmith@email.com',         address: '321 Maple Dr, Antioch, TN 37013',    notes: '' },
  { id: 5, firstName: 'Robert',   lastName: 'Johnson',   phone: '615-555-0505', email: 'rjohnson@email.com',       address: '654 Cedar Ln, Nashville, TN 37201',  notes: 'Fleet customer' },
  { id: 6, firstName: 'Ana',      lastName: 'Morales',   phone: '615-555-0606', email: 'ana.morales@email.com',    address: '90 Hickory Blvd, Smyrna, TN 37167',  notes: '' },
];

const vehicles = [
  { id: 1, customerId: 1, year: 2018, make: 'Toyota',    model: 'Camry',     color: 'Silver', vin: '4T1BF1FK5JU123456', mileage: 78450 },
  { id: 2, customerId: 1, year: 2020, make: 'Honda',     model: 'CR-V',      color: 'Blue',   vin: '2HKRW2H57LH123456', mileage: 42100 },
  { id: 3, customerId: 2, year: 2016, make: 'Ford',      model: 'F-150',     color: 'Black',  vin: '1FTFW1ET0GFC12345', mileage: 112000 },
  { id: 4, customerId: 3, year: 2019, make: 'Nissan',    model: 'Altima',    color: 'White',  vin: '1N4BL4BV0KC123456', mileage: 55300 },
  { id: 5, customerId: 4, year: 2021, make: 'Chevrolet', model: 'Equinox',   color: 'Red',    vin: '3GNAXUEV0MS123456', mileage: 28700 },
  { id: 6, customerId: 5, year: 2015, make: 'BMW',       model: '3 Series',  color: 'Gray',   vin: 'WBA3A5C51FF123456', mileage: 89200 },
  { id: 7, customerId: 6, year: 2022, make: 'Toyota',    model: 'Corolla',   color: 'White',  vin: '2T1BURHE0JC123456', mileage: 18600 },
];

const repairOrders = [
  {
    id: 1001, customerId: 1, vehicleId: 1, status: 'In Progress',
    advisor: 'Scott', tech: 'Emmanuel', created: '2026-06-11',
    mileageIn: 78450,
    services: [
      { name: 'Oil Change & Filter',  labor: 29.99 },
      { name: 'Tire Rotation',        labor: 15.00 },
    ],
    parts: [
      { name: 'Oil Filter',                  qty: 1, price: 8.99 },
      { name: 'Full Synthetic 5W-30 (5 qt)', qty: 1, price: 32.50 },
    ],
    notes: 'Customer requests call before pickup. Check for noise on acceleration.',
  },
  {
    id: 1002, customerId: 2, vehicleId: 3, status: 'Estimate',
    advisor: 'Scott', tech: 'Ruben', created: '2026-06-11',
    mileageIn: 112000,
    services: [
      { name: 'Brake Inspection (4-corner)', labor: 45.00 },
    ],
    parts: [],
    notes: 'Customer complains of grinding on braking.',
  },
  {
    id: 1003, customerId: 3, vehicleId: 4, status: 'Approved',
    advisor: 'Scott', tech: 'Emmanuel', created: '2026-06-10',
    mileageIn: 55300,
    services: [
      { name: 'Transmission Service (CVT)', labor: 149.99 },
    ],
    parts: [
      { name: 'CVT Transmission Fluid', qty: 4, price: 12.00 },
    ],
    notes: '',
  },
  {
    id: 1004, customerId: 4, vehicleId: 5, status: 'Completed',
    advisor: 'Scott', tech: 'Ruben', created: '2026-06-09',
    mileageIn: 28700,
    services: [
      { name: 'Engine Diagnostic Scan', labor: 89.99 },
      { name: 'Replace Upstream O2 Sensor', labor: 75.00 },
    ],
    parts: [
      { name: 'Upstream O2 Sensor (OEM)', qty: 1, price: 45.00 },
    ],
    notes: 'Check engine light cleared. P0141 code. Verified fix.',
  },
  {
    id: 1005, customerId: 5, vehicleId: 6, status: 'Invoiced',
    advisor: 'Scott', tech: 'Shawn', created: '2026-06-08',
    mileageIn: 89200,
    services: [
      { name: 'Front Brake Pads & Rotors', labor: 180.00 },
    ],
    parts: [
      { name: 'Front Brake Pad Set',      qty: 1, price: 65.00 },
      { name: 'Front Rotors (Pair)',       qty: 1, price: 120.00 },
    ],
    notes: '',
  },
  {
    id: 1006, customerId: 6, vehicleId: 7, status: 'In Progress',
    advisor: 'Scott', tech: 'Emmanuel', created: '2026-06-12',
    mileageIn: 18600,
    services: [
      { name: 'A/C Diagnosis', labor: 89.99 },
      { name: 'A/C Recharge',  labor: 49.99 },
    ],
    parts: [
      { name: 'R-134a Refrigerant (1 lb)', qty: 2, price: 18.00 },
    ],
    notes: 'AC blowing warm. Check for leak first.',
  },
];

let nextRoId = 1007;
let nextCustomerId = 7;
let nextVehicleId = 8;
let nextApptId = 6;

const appointments = [
  { id: 1, customerId: 1, vehicleId: 1, date: '2026-06-12', time: '08:00', service: 'Oil Change',            duration: 1,   notes: '' },
  { id: 2, customerId: 3, vehicleId: 4, date: '2026-06-12', time: '10:00', service: 'Transmission Service',  duration: 2,   notes: 'Dropping off at 9:30' },
  { id: 3, customerId: 2, vehicleId: 3, date: '2026-06-12', time: '14:00', service: 'Brake Inspection',      duration: 1,   notes: '' },
  { id: 4, customerId: 4, vehicleId: 5, date: '2026-06-13', time: '09:00', service: 'Follow-up Check',       duration: 0.5, notes: '' },
  { id: 5, customerId: 5, vehicleId: 6, date: '2026-06-13', time: '11:00', service: 'Alignment Check',       duration: 1.5, notes: '' },
];

// ===== Helpers =====

const $ = id => document.getElementById(id);

function customerName(id) {
  const c = customers.find(c => c.id === id);
  return c ? `${c.firstName} ${c.lastName}` : '—';
}

function vehicleStr(id) {
  const v = vehicles.find(v => v.id === id);
  return v ? `${v.year} ${v.make} ${v.model}` : '—';
}

function statusBadge(status) {
  const map = {
    'Estimate':    'badge-estimate',
    'Approved':    'badge-approved',
    'In Progress': 'badge-inprogress',
    'Completed':   'badge-completed',
    'Invoiced':    'badge-invoiced',
    'Paid':        'badge-paid',
    'Unpaid':      'badge-estimate',
    'Overdue':     'badge-overdue',
  };
  return `<span class="badge ${map[status] || 'badge-estimate'}">${status}</span>`;
}

function fmt$(n) {
  return '$' + parseFloat(n || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function roTotal(ro) {
  const labor = ro.services.reduce((s, x) => s + x.labor, 0);
  const parts = ro.parts.reduce((s, x) => s + x.price * x.qty, 0);
  const subtotal = labor + parts;
  const tax = parts * 0.0975; // TN sales tax on parts
  return subtotal + tax;
}

function initials(firstName, lastName) {
  return ((firstName[0] || '') + (lastName[0] || '')).toUpperCase();
}

function showToast(msg) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

function formatDate(dateStr) {
  if (!dateStr) return '—';
  const [y, m, d] = dateStr.split('-');
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${months[parseInt(m)-1]} ${parseInt(d)}, ${y}`;
}

function fmtTime(t) {
  const [h, m] = t.split(':').map(Number);
  const period = h >= 12 ? 'PM' : 'AM';
  const hr = h % 12 || 12;
  return `${hr}:${m.toString().padStart(2,'0')} ${period}`;
}

// Today's date string
const TODAY = '2026-06-12';

// ===== Navigation =====

let currentPage = 'dashboard';

function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const pageEl = $(`page-${page}`);
  const navEl = document.querySelector(`[data-page="${page}"]`);
  if (pageEl) pageEl.classList.add('active');
  if (navEl) navEl.classList.add('active');

  currentPage = page;
  location.hash = page;

  if (page === 'dashboard')     renderDashboard();
  if (page === 'repair-orders') renderRepairOrders();
  if (page === 'tech-board')    renderTechBoard();
  if (page === 'appointments')  renderAppointments();
  if (page === 'customers')     renderCustomers();
  if (page === 'vehicles')      renderVehicles();
  if (page === 'invoices')      renderInvoices();
}

document.querySelectorAll('[data-page]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    navigate(el.dataset.page);
    closeSidebar();
  });
});

document.querySelectorAll('[data-page-link]').forEach(el => {
  el.addEventListener('click', () => navigate(el.dataset.pageLink));
});

// Mobile sidebar
function closeSidebar() {
  $('sidebar').classList.remove('open');
  $('sidebarOverlay').style.display = 'none';
}

$('menuToggle').addEventListener('click', () => {
  $('sidebar').classList.toggle('open');
  $('sidebarOverlay').style.display = $('sidebar').classList.contains('open') ? 'block' : 'none';
});

// ===== Activity Feed Data =====

const activityFeed = [
  { id: 1,  user: 'Emmanuel S.', action: 'added a job to the estimate.',                                           roId: 1006, timeAgo: '1h ago',  category: 'Estimate',  catClass: 'cat-estimate' },
  { id: 2,  user: 'Scott W.',    action: 'updated the customer information.',                                      roId: 1001, timeAgo: '1h ago',  category: 'Other',     catClass: 'cat-other'    },
  { id: 3,  user: 'Ruben S.',    action: 'updated the customer information.',                                      roId: 1002, timeAgo: '2h ago',  category: 'Other',     catClass: 'cat-other'    },
  { id: 4,  user: 'Emmanuel S.', action: 'created Repair Order #1006: Ana Morales\'s 2022 Toyota Corolla · White', roId: 1006, timeAgo: '2h ago',  category: 'RO Status', catClass: 'cat-ro-status'},
  { id: 5,  user: 'Ruben S.',    action: 'created Repair Order #1002: James Wilson\'s 2016 Ford F-150 · Black',    roId: 1002, timeAgo: '2h ago',  category: 'RO Status', catClass: 'cat-ro-status'},
  { id: 6,  user: 'Scott W.',    action: 'sent RO #1003 to A/R with date June 10, 2026',                          roId: 1003, timeAgo: '3h ago',  category: 'RO Status', catClass: 'cat-ro-status'},
  { id: 7,  user: 'Ruben S.',    action: 'received authorization from customer on job(s): Brake Inspection – $45.00', roId: 1002, timeAgo: '3h ago', category: 'Authorization', catClass: 'cat-auth' },
  { id: 8,  user: 'Emmanuel S.', action: 'added a job to the estimate.',                                           roId: 1003, timeAgo: '3h ago',  category: 'Estimate',  catClass: 'cat-estimate' },
  { id: 9,  user: 'Scott W.',    action: 'changed RO Default Labor Rate from $149.00 to $125.00.',                roId: 1001, timeAgo: '4h ago',  category: 'Estimate',  catClass: 'cat-estimate' },
  { id: 10, user: 'Shawn L.',    action: 'marked RO #1005 as Completed.',                                         roId: 1005, timeAgo: '5h ago',  category: 'RO Status', catClass: 'cat-ro-status'},
  { id: 11, user: 'Emmanuel S.', action: 'updated vehicle mileage to 78,450 mi.',                                 roId: 1001, timeAgo: '5h ago',  category: 'Other',     catClass: 'cat-other'    },
  { id: 12, user: 'Scott W.',    action: 'sent invoice #2001 to Robert Johnson.',                                  roId: 1005, timeAgo: '6h ago',  category: 'Invoice',   catClass: 'cat-invoice'  },
];

// ===== Dashboard =====

function renderDashboard() {
  const openROs = repairOrders.filter(r => ['Estimate','Approved','In Progress'].includes(r.status)).length;
  const todayAppts = appointments.filter(a => a.date === TODAY).length;
  const monthRevenue = repairOrders
    .filter(r => r.status === 'Invoiced' || r.status === 'Completed')
    .reduce((s, r) => s + roTotal(r), 0);

  $('stat-open-ro').textContent = openROs;
  $('stat-today-appts').textContent = todayAppts;
  $('stat-month-rev').textContent = fmt$(monthRevenue);
  $('stat-aro').textContent = fmt$(repairOrders.reduce((s, r) => s + roTotal(r), 0) / repairOrders.length);

  $('ro-badge').textContent = repairOrders.filter(r => r.status === 'In Progress').length;

  // Recent ROs table
  const tbody = document.querySelector('#dash-ro-table tbody');
  tbody.innerHTML = '';
  [...repairOrders].slice(0, 6).forEach(ro => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>#${ro.id}</strong></td>
      <td>${customerName(ro.customerId)}</td>
      <td>${vehicleStr(ro.vehicleId)}</td>
      <td>${statusBadge(ro.status)}</td>
      <td><strong>${fmt$(roTotal(ro))}</strong></td>
    `;
    tr.addEventListener('click', () => openRoDrawer(ro.id));
    tbody.appendChild(tr);
  });

  // Today's schedule
  const scheduleEl = $('today-schedule');
  const todayList = appointments.filter(a => a.date === TODAY).sort((a, b) => a.time.localeCompare(b.time));
  if (todayList.length === 0) {
    scheduleEl.innerHTML = `<div class="empty-state"><div class="empty-state-icon">📅</div><div class="empty-state-text">No appointments today</div></div>`;
  } else {
    scheduleEl.innerHTML = todayList.map(a => `
      <div class="schedule-item">
        <div class="schedule-time">${fmtTime(a.time)}</div>
        <div class="schedule-info">
          <div class="schedule-name">${customerName(a.customerId)}</div>
          <div class="schedule-vehicle">${vehicleStr(a.vehicleId)}</div>
        </div>
        <div class="schedule-service">${a.service}</div>
      </div>
    `).join('');
  }

  renderActivityFeed();
}

function renderActivityFeed(query) {
  const list = query
    ? activityFeed.filter(a =>
        a.user.toLowerCase().includes(query.toLowerCase()) ||
        a.action.toLowerCase().includes(query.toLowerCase()) ||
        String(a.roId).includes(query)
      )
    : activityFeed;

  const el = $('activity-feed-list');
  if (!el) return;

  if (list.length === 0) {
    el.innerHTML = `<div class="empty-state" style="padding:40px;"><div class="empty-state-text">No activity found</div></div>`;
    return;
  }

  el.innerHTML = list.map(item => `
    <div class="activity-item">
      <div class="activity-item-body">
        <div class="activity-item-text"><strong>${item.user}</strong> ${item.action}</div>
        <div class="activity-item-meta">
          <a href="#">RO #${item.roId}</a> &nbsp;·&nbsp; ${item.timeAgo}
        </div>
      </div>
      <span class="activity-cat-badge ${item.catClass}">${item.category}</span>
    </div>
  `).join('');
}

// Dashboard tabs
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.dash-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.dash-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.dash-pane').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const pane = $(`dash-tab-${tab.dataset.tab}`);
      if (pane) pane.classList.add('active');
      if (tab.dataset.tab === 'activity') renderActivityFeed();
    });
  });

  document.querySelectorAll('.activity-sub-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.activity-sub-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  const actSearch = $('activitySearch');
  if (actSearch) actSearch.addEventListener('input', e => renderActivityFeed(e.target.value));
});

// ===== Tech Board =====

const TECHS = [
  { name: 'Red Young',       initials: 'RY', color: '#8b5cf6' },
  { name: 'Shawn Leonard',   initials: 'SL', color: '#14b8a6' },
  { name: 'Emanuel Salazar', initials: 'ES', color: '#3b82f6' },
];

function renderTechBoard() {
  const board = $('tech-board');
  if (!board) return;
  board.innerHTML = '';

  const activeROs = repairOrders.filter(r => !['Invoiced'].includes(r.status));

  // Not Assigned column
  const unassignedROs = activeROs.filter(r => !TECHS.find(t => t.name === r.tech));
  board.appendChild(buildTechCol(null, unassignedROs));

  // One column per tech
  TECHS.forEach(tech => {
    const techROs = activeROs.filter(r => r.tech === tech.name);
    board.appendChild(buildTechCol(tech, techROs));
  });
}

function buildTechCol(tech, ros) {
  const col = document.createElement('div');
  col.className = 'tech-col';

  const totalJobs = ros.length;
  const inProgress = ros.filter(r => r.status === 'In Progress').length;

  const headerCls = tech ? '' : 'unassigned';
  const name = tech ? tech.name : 'Not Assigned';

  col.innerHTML = `
    <div class="tech-col-header ${headerCls}">
      <div class="tech-col-name">${name}</div>
      <div class="tech-col-stats">
        <div class="tech-stat">
          <div class="tech-stat-val">${totalJobs}</div>
          <div class="tech-stat-label">Jobs</div>
        </div>
        <div class="tech-stat">
          <div class="tech-stat-val">${inProgress}</div>
          <div class="tech-stat-label">Active</div>
        </div>
        <div class="tech-stat">
          <div class="tech-stat-val">${totalJobs - inProgress}</div>
          <div class="tech-stat-label">Queued</div>
        </div>
      </div>
    </div>
    <div class="tech-col-body"></div>
  `;

  const body = col.querySelector('.tech-col-body');

  if (ros.length === 0) {
    body.innerHTML = `<div class="board-empty">No jobs assigned</div>`;
  } else {
    ros.forEach(ro => {
      const customer = customers.find(c => c.id === ro.customerId) || {};
      const vehicle  = vehicles.find(v => v.id === ro.vehicleId)   || {};
      const total    = roTotal(ro);

      let statusCls = 'tech-status-estimate';
      let statusLabel = ro.status;
      if (ro.status === 'In Progress') { statusCls = 'tech-status-inprogress'; statusLabel = 'In Progress'; }
      else if (ro.status === 'Completed') { statusCls = 'tech-status-complete'; statusLabel = 'Complete'; }
      else if (ro.status === 'Estimate' || ro.status === 'Approved') { statusCls = 'tech-status-notstarted'; statusLabel = 'Not Started'; }

      const card = document.createElement('div');
      card.className = 'tech-card';
      card.innerHTML = `
        <div class="tech-card-status ${statusCls}">${statusLabel}</div>
        <div class="tech-card-vehicle">${vehicle.year || ''} ${vehicle.make || ''} ${vehicle.model || ''}</div>
        <div class="tech-card-customer">${customer.firstName || ''} ${customer.lastName || ''}</div>
        <div class="tech-card-footer">
          <span class="tech-card-ro">#${ro.id}</span>
          <span class="tech-card-total">${fmt$(total)}</span>
        </div>
      `;
      card.addEventListener('click', () => openRoDrawer(ro.id));
      body.appendChild(card);
    });
  }

  return col;
}

$('tech-search') && $('tech-search').addEventListener('input', () => renderTechBoard());

// ===== Repair Orders (Board + List) =====

let roView = 'board'; // 'board' | 'list'
let roSearchQuery = '';

const BOARD_COLS = [
  { label: 'Estimates',        cls: 'estimate',   statuses: ['Estimate', 'Approved']   },
  { label: 'Work In Progress', cls: 'inprogress', statuses: ['In Progress']            },
  { label: 'Completed',        cls: 'completed',  statuses: ['Completed', 'Invoiced']  },
];

const TECH_COLORS = {
  'Emmanuel': '#3b82f6',
  'Ruben':    '#8b5cf6',
  'Shawn':    '#14b8a6',
  'Scott':    '#f97316',
};

function filteredROs() {
  let list = [...repairOrders].sort((a, b) => b.id - a.id);
  if (roSearchQuery) {
    const q = roSearchQuery.toLowerCase();
    list = list.filter(r =>
      String(r.id).includes(q) ||
      customerName(r.customerId).toLowerCase().includes(q) ||
      vehicleStr(r.vehicleId).toLowerCase().includes(q) ||
      r.tech.toLowerCase().includes(q) ||
      r.advisor.toLowerCase().includes(q)
    );
  }
  return list;
}

function renderRepairOrders(query) {
  if (query !== undefined) roSearchQuery = query;
  if (roView === 'board') renderBoard();
  else renderList();
}

function renderBoard() {
  const list = filteredROs();
  const board = $('ro-board');
  board.innerHTML = '';

  BOARD_COLS.forEach(col => {
    const colROs = list.filter(r => col.statuses.includes(r.status));
    const colEl = document.createElement('div');
    colEl.className = 'board-col';
    colEl.innerHTML = `
      <div class="board-col-header ${col.cls}">
        <span class="board-col-title">${col.label} <span class="board-col-count">(${colROs.length})</span></span>
        <div class="board-col-sort">
          Sort by:
          <select class="sort-select">
            <option>Custom</option>
            <option>Date</option>
            <option>Total</option>
          </select>
        </div>
      </div>
      <div class="board-col-body" id="col-${col.cls}"></div>
    `;
    board.appendChild(colEl);

    const body = colEl.querySelector('.board-col-body');

    if (colROs.length === 0) {
      body.innerHTML = `<div class="board-empty">No ROs</div>`;
      return;
    }

    colROs.forEach(ro => {
      const customer  = customers.find(c => c.id === ro.customerId) || {};
      const vehicle   = vehicles.find(v => v.id === ro.vehicleId)   || {};
      const total     = roTotal(ro);
      const needsAuth = ro.status === 'Estimate';
      const techColor = TECH_COLORS[ro.tech] || '#64748b';
      const techInit  = ro.tech ? ro.tech.slice(0, 2).toUpperCase() : '??';
      const vehicleLabel = [vehicle.year, vehicle.make, vehicle.model].filter(Boolean).join(' ');

      const card = document.createElement('div');
      card.className = 'ro-card';
      card.innerHTML = `
        <div class="ro-card-top">
          <span class="ro-card-num">#${ro.id}</span>
          <span class="ro-card-date">${formatDate(ro.created)}</span>
        </div>
        <div class="ro-card-customer">${customer.firstName || ''} ${customer.lastName || ''}</div>
        <div class="ro-card-phone">${customer.phone || '—'}</div>
        <div class="ro-card-vehicle">${vehicleLabel}${vehicle.color ? ' · ' + vehicle.color : ''}</div>
        ${needsAuth ? `<div class="ro-card-auth-tag"><span>⚠</span> Requires Authorization</div>` : ''}
        <div class="ro-card-footer">
          <div class="tech-avatar" style="background:${techColor};" title="${ro.tech}">${techInit}</div>
          <span class="ro-card-total">${fmt$(total)}</span>
        </div>
      `;
      card.addEventListener('click', () => openRoDrawer(ro.id));
      body.appendChild(card);
    });
  });
}

function renderList() {
  const list = filteredROs();
  const tbody = document.querySelector('#ro-table tbody');
  tbody.innerHTML = '';

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8"><div class="empty-state"><div class="empty-state-icon">📋</div><div class="empty-state-text">No repair orders found</div></div></td></tr>`;
    return;
  }

  list.forEach(ro => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>#${ro.id}</strong></td>
      <td>${customerName(ro.customerId)}</td>
      <td>${vehicleStr(ro.vehicleId)}<span class="text-sm">${(vehicles.find(v => v.id === ro.vehicleId) || {}).color || ''}</span></td>
      <td>${statusBadge(ro.status)}</td>
      <td>${ro.advisor}</td>
      <td>${ro.tech}</td>
      <td>${formatDate(ro.created)}</td>
      <td><strong>${fmt$(roTotal(ro))}</strong></td>
    `;
    tr.addEventListener('click', () => openRoDrawer(ro.id));
    tbody.appendChild(tr);
  });
}

// View toggle
$('viewBoard').addEventListener('click', () => {
  roView = 'board';
  $('viewBoard').classList.add('active');
  $('viewList').classList.remove('active');
  $('ro-board').style.display = 'flex';
  $('ro-list-view').style.display = 'none';
  renderBoard();
});

$('viewList').addEventListener('click', () => {
  roView = 'list';
  $('viewList').classList.add('active');
  $('viewBoard').classList.remove('active');
  $('ro-board').style.display = 'none';
  $('ro-list-view').style.display = 'block';
  renderList();
});

$('ro-search').addEventListener('input', e => renderRepairOrders(e.target.value));

// ===== RO Drawer =====

let currentRoId = null;

function openRoDrawer(roId) {
  const ro = repairOrders.find(r => r.id === roId);
  if (!ro) return;
  currentRoId = roId;

  const customer = customers.find(c => c.id === ro.customerId) || {};
  const vehicle = vehicles.find(v => v.id === ro.vehicleId) || {};

  $('drawerRoNum').textContent = `Repair Order #${ro.id}`;
  $('drawerRoDate').textContent = `Created ${formatDate(ro.created)} · ${ro.advisor} (Advisor) · ${ro.tech} (Tech)`;
  $('drawerStatusSelect').value = ro.status;

  const laborTotal = ro.services.reduce((s, x) => s + x.labor, 0);
  const partsTotal = ro.parts.reduce((s, x) => s + x.price * x.qty, 0);
  const tax = partsTotal * 0.0975;
  const grandTotal = laborTotal + partsTotal + tax;

  $('drawerBody').innerHTML = `
    <div class="detail-grid">
      <div class="detail-card">
        <div class="detail-card-title">Customer</div>
        <div class="detail-field">
          <div class="detail-field-label">Name</div>
          <div class="detail-field-value">${customer.firstName || ''} ${customer.lastName || ''}</div>
        </div>
        <div class="detail-field">
          <div class="detail-field-label">Phone</div>
          <div class="detail-field-value"><a href="tel:${customer.phone}">${customer.phone || '—'}</a></div>
        </div>
        <div class="detail-field">
          <div class="detail-field-label">Email</div>
          <div class="detail-field-value"><a href="mailto:${customer.email}">${customer.email || '—'}</a></div>
        </div>
      </div>
      <div class="detail-card">
        <div class="detail-card-title">Vehicle</div>
        <div class="detail-field">
          <div class="detail-field-label">Year / Make / Model</div>
          <div class="detail-field-value">${vehicle.year || ''} ${vehicle.make || ''} ${vehicle.model || ''}</div>
        </div>
        <div class="detail-field">
          <div class="detail-field-label">Color / VIN</div>
          <div class="detail-field-value">${vehicle.color || '—'} · <span style="font-size:11px;color:var(--text2);">${vehicle.vin || '—'}</span></div>
        </div>
        <div class="detail-field">
          <div class="detail-field-label">Mileage In</div>
          <div class="detail-field-value">${(ro.mileageIn || vehicle.mileage || 0).toLocaleString()} mi</div>
        </div>
      </div>
    </div>

    <div class="line-items-section">
      <div class="line-items-header">
        <span class="line-items-title">Labor / Services</span>
        <button class="btn btn-ghost btn-sm">+ Add Service</button>
      </div>
      ${ro.services.length === 0 ? '<div class="empty-state"><div class="empty-state-text">No services added</div></div>' : ro.services.map(s => `
        <div class="line-item">
          <div class="line-item-name">${s.name}</div>
          <div class="line-item-qty">1</div>
          <div class="line-item-price">${fmt$(s.labor)}</div>
          <div class="line-item-total">${fmt$(s.labor)}</div>
        </div>
      `).join('')}
    </div>

    <div class="line-items-section">
      <div class="line-items-header">
        <span class="line-items-title">Parts</span>
        <button class="btn btn-ghost btn-sm">+ Add Part</button>
      </div>
      ${ro.parts.length === 0 ? '<div style="padding:12px 14px;font-size:12px;color:var(--text3);">No parts added</div>' : ro.parts.map(p => `
        <div class="line-item">
          <div class="line-item-name">${p.name}</div>
          <div class="line-item-qty">×${p.qty}</div>
          <div class="line-item-price">${fmt$(p.price)}</div>
          <div class="line-item-total">${fmt$(p.price * p.qty)}</div>
        </div>
      `).join('')}
    </div>

    <div class="totals-section">
      <div class="total-row"><span>Labor</span><span>${fmt$(laborTotal)}</span></div>
      <div class="total-row"><span>Parts</span><span>${fmt$(partsTotal)}</span></div>
      <div class="total-row"><span>Tax (9.75% on parts)</span><span>${fmt$(tax)}</span></div>
      <div class="total-row grand"><span>Total</span><span>${fmt$(grandTotal)}</span></div>
    </div>

    <div class="notes-section">
      <div class="detail-card-title">Notes / Customer Complaint</div>
      <textarea id="drawerNotes">${ro.notes}</textarea>
    </div>
  `;

  $('drawerOverlay').classList.add('open');
  $('roDrawer').classList.add('open');
}

function closeRoDrawer() {
  $('drawerOverlay').classList.remove('open');
  $('roDrawer').classList.remove('open');
  currentRoId = null;
}

$('drawerClose').addEventListener('click', closeRoDrawer);
$('drawerOverlay').addEventListener('click', closeRoDrawer);

$('saveRoBtn').addEventListener('click', () => {
  if (!currentRoId) return;
  const ro = repairOrders.find(r => r.id === currentRoId);
  if (ro) {
    ro.status = $('drawerStatusSelect').value;
    const notes = $('drawerNotes');
    if (notes) ro.notes = notes.value;
  }
  closeRoDrawer();
  if (currentPage === 'repair-orders') renderRepairOrders();
  if (currentPage === 'dashboard') renderDashboard();
  showToast(`RO #${currentRoId} saved.`);
});

// ===== New RO Modal =====

function openNewRoModal() {
  // Populate customer select
  const sel = $('newRoCustomer');
  sel.innerHTML = '<option value="">Select customer...</option>';
  customers.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.id;
    opt.textContent = `${c.firstName} ${c.lastName}`;
    sel.appendChild(opt);
  });
  $('newRoVehicle').innerHTML = '<option value="">Select vehicle...</option>';
  $('newRoModal').classList.add('open');
}

function closeNewRoModal() {
  $('newRoModal').classList.remove('open');
}

$('newRoBtn').addEventListener('click', openNewRoModal);
$('newRoBtn2').addEventListener('click', openNewRoModal);
$('newRoModalClose').addEventListener('click', closeNewRoModal);
$('newRoCancel').addEventListener('click', closeNewRoModal);
$('newRoModal').addEventListener('click', e => { if (e.target === $('newRoModal')) closeNewRoModal(); });

// Populate vehicles when customer changes
$('newRoCustomer').addEventListener('change', function() {
  const custId = parseInt(this.value);
  const vSel = $('newRoVehicle');
  vSel.innerHTML = '<option value="">Select vehicle...</option>';
  if (custId) {
    vehicles.filter(v => v.customerId === custId).forEach(v => {
      const opt = document.createElement('option');
      opt.value = v.id;
      opt.textContent = `${v.year} ${v.make} ${v.model} (${v.color})`;
      vSel.appendChild(opt);
    });
  }
});

$('newRoSubmit').addEventListener('click', () => {
  const custId = parseInt($('newRoCustomer').value);
  const vehId = parseInt($('newRoVehicle').value);
  if (!custId || !vehId) {
    showToast('Please select a customer and vehicle.');
    return;
  }
  const newRo = {
    id: nextRoId++,
    customerId: custId,
    vehicleId: vehId,
    status: $('newRoStatus').value,
    advisor: $('newRoAdvisor').value,
    tech: $('newRoTech').value,
    created: TODAY,
    mileageIn: parseInt($('newRoMileage').value) || 0,
    services: [],
    parts: [],
    notes: $('newRoNotes').value,
  };
  repairOrders.unshift(newRo);
  closeNewRoModal();
  renderRepairOrders();
  renderDashboard();
  showToast(`RO #${newRo.id} created.`);
  navigate('repair-orders');
});

// ===== Appointments Calendar =====

let apptWeekOffset = 0;

function getWeekDates(offset) {
  const base = new Date('2026-06-12');
  base.setDate(base.getDate() + offset * 7);
  // Go to Monday of that week
  const day = base.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  base.setDate(base.getDate() + diff);

  const dates = [];
  for (let i = 0; i < 5; i++) {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    dates.push(d);
  }
  return dates;
}

function dateStr(d) {
  return d.toISOString().split('T')[0];
}

const HOURS = ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM'];
const HOUR_VALS = ['08', '09', '10', '11', '12', '13', '14', '15', '16'];

function renderAppointments() {
  const dates = getWeekDates(apptWeekOffset);
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  // Week label
  const start = dates[0];
  const end = dates[4];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  $('appt-week-label').textContent = `${months[start.getMonth()]} ${start.getDate()} – ${months[end.getMonth()]} ${end.getDate()}, ${end.getFullYear()}`;

  let html = `<div class="appt-week">`;

  // Header row
  html += `<div class="appt-week-header time-label">Time</div>`;
  dates.forEach((d, i) => {
    const isToday = dateStr(d) === TODAY;
    html += `<div class="appt-week-header ${isToday ? 'today' : ''}">${dayNames[i]}<br><small style="font-size:13px;">${d.getDate()}</small></div>`;
  });

  // Time rows
  HOURS.forEach((hour, hi) => {
    html += `<div class="appt-time-cell">${hour}</div>`;
    dates.forEach(d => {
      const ds = dateStr(d);
      const hv = HOUR_VALS[hi];
      const appts = appointments.filter(a => a.date === ds && a.time.startsWith(hv));
      html += `<div class="appt-day-cell">`;
      appts.forEach(a => {
        html += `
          <div class="appt-card" title="${customerName(a.customerId)} — ${a.service}${a.notes ? '\n' + a.notes : ''}">
            <div class="appt-card-name">${customerName(a.customerId)}</div>
            <div class="appt-card-service">${a.service}</div>
          </div>`;
      });
      html += `</div>`;
    });
  });

  html += `</div>`;
  $('appt-calendar').innerHTML = html;
}

$('appt-prev').addEventListener('click', () => { apptWeekOffset--; renderAppointments(); });
$('appt-next').addEventListener('click', () => { apptWeekOffset++; renderAppointments(); });

// New Appointment Modal
function openNewApptModal() {
  const sel = $('apptCustomer');
  sel.innerHTML = '<option value="">Select customer...</option>';
  customers.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.id;
    opt.textContent = `${c.firstName} ${c.lastName}`;
    sel.appendChild(opt);
  });
  $('apptVehicle').innerHTML = '<option value="">Select vehicle...</option>';
  $('apptDate').value = TODAY;
  $('newApptModal').classList.add('open');
}

function closeNewApptModal() {
  $('newApptModal').classList.remove('open');
}

$('newApptBtn').addEventListener('click', openNewApptModal);
$('newApptModalClose').addEventListener('click', closeNewApptModal);
$('newApptCancel').addEventListener('click', closeNewApptModal);
$('newApptModal').addEventListener('click', e => { if (e.target === $('newApptModal')) closeNewApptModal(); });

$('apptCustomer').addEventListener('change', function() {
  const custId = parseInt(this.value);
  const vSel = $('apptVehicle');
  vSel.innerHTML = '<option value="">Select vehicle...</option>';
  if (custId) {
    vehicles.filter(v => v.customerId === custId).forEach(v => {
      const opt = document.createElement('option');
      opt.value = v.id;
      opt.textContent = `${v.year} ${v.make} ${v.model}`;
      vSel.appendChild(opt);
    });
  }
});

$('newApptSubmit').addEventListener('click', () => {
  const custId = parseInt($('apptCustomer').value);
  const vehId = parseInt($('apptVehicle').value);
  const service = $('apptService').value.trim();
  if (!custId || !vehId || !service) {
    showToast('Please fill in all required fields.');
    return;
  }
  appointments.push({
    id: nextApptId++,
    customerId: custId,
    vehicleId: vehId,
    date: $('apptDate').value,
    time: $('apptTime').value,
    service,
    duration: parseFloat($('apptDuration').value),
    notes: $('apptNotes').value,
  });
  closeNewApptModal();
  renderAppointments();
  renderDashboard();
  showToast('Appointment scheduled.');
});

// ===== Customers =====

let custSearch = '';

function renderCustomers(query) {
  if (query !== undefined) custSearch = query;

  let list = [...customers];
  if (custSearch) {
    const q = custSearch.toLowerCase();
    list = list.filter(c =>
      `${c.firstName} ${c.lastName}`.toLowerCase().includes(q) ||
      c.phone.includes(q) ||
      c.email.toLowerCase().includes(q)
    );
  }

  const tbody = document.querySelector('#customers-table tbody');
  tbody.innerHTML = '';

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7"><div class="empty-state"><div class="empty-state-icon">👥</div><div class="empty-state-text">No customers found</div></div></td></tr>`;
    return;
  }

  list.forEach(c => {
    const custVehicles = vehicles.filter(v => v.customerId === c.id);
    const custROs = repairOrders.filter(r => r.customerId === c.id);
    const totalSpent = custROs.filter(r => ['Completed','Invoiced'].includes(r.status))
      .reduce((s, r) => s + roTotal(r), 0);
    const lastRO = [...custROs].sort((a, b) => b.created.localeCompare(a.created))[0];

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>
        <div class="flex-cell">
          <div class="customer-initials">${initials(c.firstName, c.lastName)}</div>
          <div>
            <strong>${c.firstName} ${c.lastName}</strong>
            ${c.notes ? `<span class="text-sm">${c.notes}</span>` : ''}
          </div>
        </div>
      </td>
      <td><a href="tel:${c.phone}" style="color:var(--accent);">${c.phone}</a></td>
      <td>${c.email}</td>
      <td>${custVehicles.length}</td>
      <td>${lastRO ? formatDate(lastRO.created) : '—'}</td>
      <td><strong>${totalSpent > 0 ? fmt$(totalSpent) : '—'}</strong></td>
      <td><button class="btn btn-ghost btn-sm">View</button></td>
    `;
    tbody.appendChild(tr);
  });
}

$('customer-search').addEventListener('input', e => renderCustomers(e.target.value));

// Add Customer Modal
function openNewCustModal() {
  ['custFirstName','custLastName','custPhone','custEmail','custAddress','custNotes']
    .forEach(id => $(id).value = '');
  $('newCustomerModal').classList.add('open');
}

function closeNewCustModal() { $('newCustomerModal').classList.remove('open'); }
$('newCustomerBtn').addEventListener('click', openNewCustModal);
$('newCustModalClose').addEventListener('click', closeNewCustModal);
$('newCustCancel').addEventListener('click', closeNewCustModal);
$('newCustomerModal').addEventListener('click', e => { if (e.target === $('newCustomerModal')) closeNewCustModal(); });

$('newCustSubmit').addEventListener('click', () => {
  const first = $('custFirstName').value.trim();
  const last = $('custLastName').value.trim();
  if (!first || !last) { showToast('First and last name are required.'); return; }
  customers.push({
    id: nextCustomerId++,
    firstName: first,
    lastName: last,
    phone: $('custPhone').value.trim(),
    email: $('custEmail').value.trim(),
    address: $('custAddress').value.trim(),
    notes: $('custNotes').value.trim(),
  });
  closeNewCustModal();
  renderCustomers();
  showToast(`${first} ${last} added.`);
});

// ===== Vehicles =====

let vehSearch = '';

function renderVehicles(query) {
  if (query !== undefined) vehSearch = query;

  let list = [...vehicles];
  if (vehSearch) {
    const q = vehSearch.toLowerCase();
    list = list.filter(v =>
      `${v.year} ${v.make} ${v.model}`.toLowerCase().includes(q) ||
      v.vin.toLowerCase().includes(q) ||
      customerName(v.customerId).toLowerCase().includes(q)
    );
  }

  const tbody = document.querySelector('#vehicles-table tbody');
  tbody.innerHTML = '';

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7"><div class="empty-state"><div class="empty-state-icon">🚗</div><div class="empty-state-text">No vehicles found</div></div></td></tr>`;
    return;
  }

  list.forEach(v => {
    const roCount = repairOrders.filter(r => r.vehicleId === v.id).length;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>
        <strong>${v.year} ${v.make} ${v.model}</strong>
      </td>
      <td>${v.color}</td>
      <td style="font-size:11px;color:var(--text2);">${v.vin}</td>
      <td>${v.mileage.toLocaleString()} mi</td>
      <td>
        <div class="flex-cell">
          <div class="customer-initials" style="width:26px;height:26px;font-size:10px;">
            ${(() => { const c = customers.find(c => c.id === v.customerId); return c ? initials(c.firstName, c.lastName) : '?'; })()}
          </div>
          ${customerName(v.customerId)}
        </div>
      </td>
      <td>${roCount > 0 ? `<span class="badge badge-inprogress">${roCount} RO${roCount !== 1 ? 's' : ''}</span>` : '—'}</td>
      <td><button class="btn btn-ghost btn-sm">View</button></td>
    `;
    tbody.appendChild(tr);
  });
}

$('vehicle-search').addEventListener('input', e => renderVehicles(e.target.value));
$('newVehicleBtn').addEventListener('click', () => showToast('Vehicle form coming soon.'));

// ===== Invoices =====

let invFilter = 'all';
let invSearch = '';

function getInvoiceStatus(ro) {
  if (ro.status === 'Invoiced') return 'Unpaid';
  if (ro.status === 'Completed') return 'Paid';
  return null;
}

function renderInvoices(filter, query) {
  if (filter !== undefined) invFilter = filter;
  if (query !== undefined) invSearch = query;

  let list = repairOrders
    .filter(r => ['Completed','Invoiced'].includes(r.status))
    .map((r, i) => ({
      ...r,
      invNum: 2000 + i,
      invStatus: getInvoiceStatus(r),
    }))
    .sort((a, b) => b.id - a.id);

  if (invFilter !== 'all') {
    list = list.filter(i => i.invStatus === invFilter);
  }

  if (invSearch) {
    const q = invSearch.toLowerCase();
    list = list.filter(i =>
      String(i.invNum).includes(q) ||
      customerName(i.customerId).toLowerCase().includes(q) ||
      vehicleStr(i.vehicleId).toLowerCase().includes(q)
    );
  }

  const tbody = document.querySelector('#invoices-table tbody');
  tbody.innerHTML = '';

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8"><div class="empty-state"><div class="empty-state-icon">💰</div><div class="empty-state-text">No invoices found</div></div></td></tr>`;
    return;
  }

  list.forEach(inv => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>#${inv.invNum}</strong></td>
      <td>${customerName(inv.customerId)}</td>
      <td>${vehicleStr(inv.vehicleId)}</td>
      <td>#${inv.id}</td>
      <td>${formatDate(inv.created)}</td>
      <td><strong>${fmt$(roTotal(inv))}</strong></td>
      <td>${statusBadge(inv.invStatus)}</td>
      <td>
        ${inv.invStatus === 'Unpaid'
          ? `<button class="btn btn-primary btn-sm" onclick="markPaid(${inv.id})">Mark Paid</button>`
          : `<button class="btn btn-ghost btn-sm">View</button>`}
      </td>
    `;
    tbody.appendChild(tr);
  });
}

window.markPaid = function(roId) {
  const ro = repairOrders.find(r => r.id === roId);
  if (ro) { ro.status = 'Completed'; renderInvoices(); renderDashboard(); showToast('Invoice marked as paid.'); }
};

document.querySelectorAll('#inv-filter-tabs .filter-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('#inv-filter-tabs .filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderInvoices(tab.dataset.filter, undefined);
  });
});

$('inv-search').addEventListener('input', e => renderInvoices(undefined, e.target.value));

// ===== Global Search =====

$('globalSearch').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const q = this.value.trim();
    if (!q) return;

    // Try RO number
    const roNum = parseInt(q.replace('#', ''));
    const roMatch = repairOrders.find(r => r.id === roNum);
    if (roMatch) { navigate('repair-orders'); openRoDrawer(roMatch.id); this.value = ''; return; }

    // Try customer
    const custMatch = customers.find(c =>
      `${c.firstName} ${c.lastName}`.toLowerCase().includes(q.toLowerCase())
    );
    if (custMatch) {
      navigate('customers');
      renderCustomers(q);
      $('customer-search').value = q;
      this.value = '';
      return;
    }

    navigate('repair-orders');
    renderRepairOrders(undefined, q);
    $('ro-search').value = q;
    this.value = '';
  }
});

// ===== Init =====

const startPage = location.hash.replace('#', '') || 'dashboard';
navigate(startPage);
