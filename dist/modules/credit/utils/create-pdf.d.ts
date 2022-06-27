export interface CreateContractDto {
    nit: string;
    acreedorNombre: string;
    acreedorCI: string;
    acreedorExpedicion: string;
    acreedorDireccion: string;
    acreedorNroCasa: string;
    deudorNombre: string;
    deudorCI: string;
    deudorExpedicion: string;
    deudorDireccion: string;
    monto: string;
    montoTotal: string;
    quantityFee: number;
    fistFeeDate: string;
    lastFeeDate: string;
    warrantyDescription: string;
    nroFacturaCompra: string;
    facturaCompra: string;
    creationDate: Date;
}
export declare function createContractPdf(dto: CreateContractDto): void;
