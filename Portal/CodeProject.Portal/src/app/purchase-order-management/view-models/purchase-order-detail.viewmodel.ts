export class PurchaseOrderDetailViewModel {
    public purchaseOrderDetailId: number;
    public purchaseOrderId: number;
    public productId: number;
    public productMasterId: number;
    public productNumber: string;
    public productDescription: string;
    public unitPrice: number;
    public unitPriceFormatted: string;
    public orderQuantity: number;
    public orderTotal: number;
    public orderQuantityFormatted: string;
    public dateCreated: Date;
    public dateUpdated: Date;
    public editQuantity: Boolean;
    public editUnitPrice: Boolean;
    public editProductNumber: Boolean;
    public editMode: Boolean;
    public disableSaveButton: Boolean;
    public disableEditButton: Boolean;
    public disableAddButton: Boolean;
    public disableCancelButton: Boolean;
    public disableDeleteButton: Boolean;
}
