export const CREDIT_STATUS = {
  PENDING: 0,
  APPROVED: 1, //PREAPPROVED
  DISBURSED: 2, //APPROVED
  REJECTED: 3,
  CANCELLED: 4,
  EXPIRED: 5,
  OFFERED: 6,
  LOST: 7,
  PREAPPROVED: 8, //ACCEPTED
  WAITING: 9,
  COMPLETED: 10,
};

export const PLAN = {
  WEEKLY: 0,
  MONTHLY: 1,
};

export const PLAN_TEXT = {
  [PLAN.WEEKLY]: 'Semanal',
  [PLAN.MONTHLY]: 'Mensual',
};
