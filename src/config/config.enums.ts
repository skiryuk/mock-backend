export enum EContractsModes {
  NEW = 'new',
  EDIT = 'edit',
}

export enum EContractsKits {
  D = 'd',
  C = 'c',
  U = 'u',
  P = 'p',
  S = 's',
}

export enum ERequestOperationTypes {
  MANUAL = 1, // Ручная АО
  REPLACE_SIM_CARD = 2, // Замена SIM-карты
  MOBILE_TV = 3, // Подключение услуги Мобильное ТВ
  BLOCKING = 4, // Блокировка
  UNBLOCKING = 5, // Разблокировка
  UNBLOCK_SUPERMARKET = 6, // Разблокировка Супермаркет
  DETALIZATION = 7, // Детализация
  REPLACE_USER_SIM_CARD = 8, // Замена SIM-карты реальному пользователю
  CONSULTATION = 9, // Консультация по Личному кабинету
  VAS_SERVICE = 10, // VAS услуга (Домашний регион, Безлимитный интернет, Соблазнительный роуминг)
  TRANSFER_NUMBER = 11, // Перенос номера,
  CANCEL_TRANSFER_NUMBER = 12, // Отмена переноса номера,
  SDB = 13, // Интернет на всё
  SEB = 14, // Всё для семьи
  TARGET_OFFER = 15, // Целевое предложение
  SERVICE = 16, // Услуга
  CHANGE_BILL_PLAN = 17, // Смена тарифного плана (любой тариф)
  PAID_REPLACE_SIM = 18, // Платная замена SIM-карты
  REMOVE_SRV_SUBS = 19, // Отключение подписок и услуг
  REPLACE_NUMBER = 20, // Замена номера
  AGREEMENT_DATA_CHANGING = 21, // Изменение данных по договору
  TRANSFER_INCORRECT_PAYMENT = 22, // Перенос ошибочного платежа
  PROVIDE_PIN_PUK = 23, // Предоставление PIN/PUK
  TRANSITION_TO_POSTPAID = 24, // Переход на постоплату
  TRANSITION_TO_PREPAID = 25, // Переход на предоплату
  PREPAID_CONTRACT_RENEWAL = 26, // Переоформление
  CHANGE_BILL_PLAN_UPSELL = 27, // Смена тарифного плана – Рекомендованный
  CHANGE_BILL_PLAN_CONTR = 28, // Смена тарифа по контрпредложению
  STOCK_FOR_CURRENT_ABONENT = 29, // Акция действующему абоненту
  ONLINE_SHOP = 30, // Интернет-магазин
  ANTIVIRUS = 31, // Антивирус
  CASE = 32, // Обращение
  BROADBAND_WIRE = 33,
  BROADBAND_INTERNET = 34,
  BROADBAND_CONVERGENCE = 35,
  REJECT_CONTRACT = 36,
  ALISA = 37, // Подключение алисы
  CHANGE_BILL_PLAN_CONTR_NEW = 38, // Смена тарифного плана – принять предложение
  FAMILY = 39, // Подключение Семьи
  INSURANCE = 40,
  FAMILY_ON_SALE = 41, // Семья при продаже
  SELFREG = 42, // Саморегистрация
  AUTOPAY = 43, // Автооплата
  MY_BEELINE = 44, // Установка приложения "Мой Билайн"
  CHANGE_BILL_PLAN_ANTI_DOWNSELL = 45, // Смена тарифа через Call-центр
}
