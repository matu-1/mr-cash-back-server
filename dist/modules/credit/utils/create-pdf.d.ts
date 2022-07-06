/// <reference types="node" />
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
    amount: number;
    totalAmount: number;
    quantityFee: number;
    fistFeeDate: Date;
    lastFeeDate: Date;
    warrantyDescription: string;
    nroFacturaCompra: string;
    facturaCompra: string;
    creationDate: Date;
}
export declare function createContractPdf(dto: CreateContractDto): Promise<Buffer>;
export declare const uploadConctract: (dto: CreateContractDto) => Promise<string>;
