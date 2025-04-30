import { Type, Static } from '@sinclair/typebox'

export const Line = Type.Object({
  INVOICE_LINE_ID: Type.String(),
  INVOICE_ID: Type.String(),
  LineNo: Type.Number(),
  LineType: Type.String(),
  LineDescription: Type.String(),
  LineAmountInclTax: Type.Number(),
  LineAmountExclTax: Type.Number(),
  LineTaxAmount: Type.Number(),
  TaxRate: Type.Number(),
  TaxCode: Type.String(),
  PONumber: Type.String(),
  POLineNumber: Type.Number(),
  GRNumber: Type.String(),
  GRLineNumber: Type.Number(),
  LineAccount: Type.String(),
  LineDiscountAmount: Type.Number(),
  CalDiscAllocation: Type.Number(),
  QTYInvoice: Type.Number(),
})

export const Header = Type.Object({
  INVOICE_ID: Type.String(),
  InvoiceType: Type.String(),
  InvoiceSubType: Type.String(),
  Company: Type.String(),
  BU: Type.String(),
  SupplierNumber: Type.String(),
  SupplierSite: Type.String(),
  InvoiceNumber: Type.String(),
  InvDate: Type.String(),
  InvoiceCurrency: Type.String(),
  InvAmtInclTax: Type.Number(),
  TaxAmount: Type.Number(),
  InvoiceDescription: Type.String(),
  ExchRate: Type.Any(),
  ExchRateType: Type.String(),
  ExchRateDate: Type.String(),
  RefInvoice: Type.Any(),
  PaymentTerm: Type.String(),
  PaymentMethod: Type.String(),
  PayGroup: Type.String(),
  mockCurrentDate: Type.String(),
  SupplierLiabilityAccount: Type.Any(),
  AccountDate: Type.String(),
  CreatedBy: Type.String(),
  line: Type.Array(Line),
})

export const Batch = Type.Object({
  ExternalJobID: Type.String(),
  ExternalSystem: Type.String(),
  ExternalTotalAmount: Type.Number(),
  ExternalCountTransaction: Type.Number(),
  RejectAllRecords: Type.Boolean(),
  header: Type.Array(Header),
})

export const FinGwReq = Type.Object({
  batch: Batch,
})

// If you want types as well:
export type LineType = Static<typeof Line>
export type HeaderType = Static<typeof Header>
export type BatchType = Static<typeof Batch>
export type TFinGwReq = Static<typeof FinGwReq>