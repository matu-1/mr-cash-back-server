import PdfPrinter from 'pdfmake';
import fs from 'fs';
import * as path from 'path';
import { TDocumentDefinitions, TFontDictionary } from 'pdfmake/interfaces';
import { format } from 'date-fns';
import esLocale from 'date-fns/locale/es';
import writtenNumber from 'written-number';

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

export function createContractPdf(dto: CreateContractDto) {
  const filePath = path.resolve('files/pdfs', 'contract.pdf');
  const fonts: TFontDictionary = {
    Roboto: {
      normal: path.resolve('files/fonts/Arial-Regular.ttf'),
      bold: path.resolve('files/fonts/Arial-Bold.ttf'),
      italics: path.resolve('files/fonts/Arial-Italic.ttf'),
      bolditalics: path.resolve('files/fonts/Arial-BoldItalic.ttf'),
    },
  };
  const {
    nit,
    acreedorNombre,
    acreedorCI,
    acreedorExpedicion,
    acreedorDireccion,
    acreedorNroCasa,
    deudorNombre,
    deudorCI,
    deudorExpedicion,
    deudorDireccion,
    monto,
    montoTotal,
    quantityFee,
    fistFeeDate,
    lastFeeDate,
    warrantyDescription,
    nroFacturaCompra,
    facturaCompra,
    creationDate,
  } = dto;
  const [creationDay, creationMonth, creationYear] = format(
    creationDate,
    'd,MMMM,yy',
    { locale: esLocale },
  ).split(',');

  const printer = new PdfPrinter(fonts);
  const docDefinition: TDocumentDefinitions = {
    content: [
      { text: 'RECONOCIMIENTO DE DEUDA Y COMPROMISO DE PAGO', style: 'header' },
      'Conste por el presente documento privado, que surtirá efectos de un documento público con el solo reconocimiento de firmas y rúbricas en él estampadas, las partes que suscriben, convienen y acuerdan al tenor de las cláusulas siguientes:',
      {
        text: [
          { text: 'PRIMERA (DE LAS PARTES).- ', style: 'subtitle' },
          'El presente documento es suscrito entre:',
        ],
      },
      {
        ol: [
          {
            counter: 1.1,
            bold: false,
            text: [
              { text: 'MR CASH BACK SRL., ', style: 'subtitle' },
              'empresa legalmente constituida, bajo las leyes del estado plurinacional de Bolivia, con Nit No. ',
              { text: nit, decoration: 'underline' },
              ', representada en este acto por ',
              { text: acreedorNombre, decoration: 'underline' },
              ' Mayor de edad, con Cédula de identidad No. ',
              { text: acreedorCI, decoration: 'underline' },
              ` ${acreedorExpedicion}, domiciliado en `,
              { text: acreedorDireccion, decoration: 'underline' },
              ' No. ',
              { text: acreedorNroCasa, decoration: 'underline' },
              ', en lo sucesivo simplemente se denominara ',
              { text: '“EL ACREEDOR”.', style: 'subtitle' },
            ],
          },
          {
            counter: 1.2,
            bold: false,
            text: [
              { text: deudorNombre, decoration: 'underline' },
              ' con C.I. No. ',
              { text: deudorCI, decoration: 'underline' },
              ` ${deudorExpedicion}, Mayor de edad, hábil por derecho, domiciliado en la Calle `,
              { text: deudorDireccion, decoration: 'underline' },
              ', en lo sucesivo simplemente se denominaran ',
              { text: '“EL DEUDOR”.', style: 'subtitle' },
            ],
          },
        ],
        style: {
          bold: true,
        },
      },
      {
        text: [
          { text: 'SEGUNDA (ANTECEDENTES).- ', style: 'subtitle' },
          'La actividad que desarrolla El Acreedor MR CASH BACK SRL, es una empresa que se dedica a otorgar, con recursos propios, prestamos de dinero a interés con garantía prendaria.',
        ],
      },
      'El Deudor conociendo las actividades que realiza el Acreedor y encontrándose de acuerdo con las características de las mismas, a través del presente documento ha solicitado un préstamo a intereses, con la respectiva constitución de una garantía prendaria.',
      {
        text: [
          { text: 'TERCERA (OBJETO).- ', style: 'subtitle' },
          'Al presente, sin que medie dolo, error o algún vicio que anule el consentimiento, ',
          { text: 'EL DEUDOR ', style: 'subtitle' },
          'declara la existencia de la ',
          { text: 'DEUDA ', style: 'subtitle' },
          'por concepto de Préstamo con Garantía prendaria en favor del ',
          { text: 'ACREEDOR', style: 'subtitle' },
          ', que asciende al monto de Bs. ',
          { text: monto, decoration: 'underline' },
          ' (',
          {
            text: writtenNumber(monto, { lang: 'es' }),
            decoration: 'underline',
          },
          '00/100 Bolivianos), suma de dinero que el ',
          { text: 'DEUDOR', style: 'subtitle' },
          ', se obliga a pagar al ',
          { text: 'ACREEDOR', style: 'subtitle' },
          ', en las fechas y plazos que se establezcan en el presente documento, aceptando además de cancelar los intereses convenidos, cubrir costos de tasas por servicio y costos por transporte de recojo y devolución de la garantía.',
        ],
      },
      {
        text: [
          { text: 'CUARTA (INTERESES).- ', style: 'subtitle' },
          `EL DEUDOR acepta que el préstamo de dinero recibido a través del presente documento devengara un interés del 3% mensual sobre el capital otorgado.`,
        ],
      },
      {
        text: [
          { text: 'QUINTA (PENALIDAD POR MORA).- ', style: 'subtitle' },
          `En caso de retraso en el cumplimiento de las obligaciones que se asumen a través del presente contrato, EL DEUDOR deberá cancelar al ACREEDOR, adicionalmente al interés convencional convenido en la cláusula CUARTA, una penalidad por mora mensual del 10% sobre el saldo adeudado y durante todo el tiempo que dure la mora. El Deudor se constituirá en mora desde el primer día de incumplimiento a sus obligaciones asumidas en virtud al presente contrato, sin necesidad de requerimiento judicial o extrajudicial alguno por parte del ACREEDOR.`,
        ],
      },
      {
        text: [
          { text: 'SEXTA (COSTOS ADICIONALES).- ', style: 'subtitle' },
          `Adicionalmente al capital y los intereses asumidos por el deudor en base al presente documento, el deudor reconoce que tiene conocimiento y asumirá los costos por tasa de servicios por un monto de Bs.- `,
          { text: montoTotal, decoration: 'underline' },
          ', que serán cancelados en ',
          { text: quantityFee, decoration: 'underline' },
          ' cuotas o durante el tiempo de duración del crédito, y los costos por recojo y devolución de la garantía que serán calculados en base a la distancia de lugar de recojo de la prenda, reservándose EL ACREEDOR el derecho de modificar precios o tarifas de acuerdo a las condiciones que lo ameriten.',
        ],
      },
      {
        text: [
          { text: 'SEPTIMA (FORMA DE PAGO).- ', style: 'subtitle' },
          `EL DEUDOR se compromete a pagar y cancelar la totalidad de la obligación y los intereses generados, mediante ${quantityFee} cuotas semanales descritas de la siguiente manera:`,
          `EL DEUDOR cancelara ${quantityFee} cuotas semanales por la suma de Bs. `,
          { text: montoTotal, decoration: 'underline' },
          ' (',
          {
            text: writtenNumber(montoTotal, { lang: 'es' }),
            decoration: 'underline',
          },
          ` 00/100 Bolivianos), a partir de la firma del presente documento, debiendo cancelar la primer cuota en fecha `,
          { text: fistFeeDate, decoration: 'underline' },
          ' y su última cuota en fecha ',
          { text: lastFeeDate, decoration: 'underline' },
          ' cubriendo de esta forma el total por concepto de capital e intereses. Excepcionalmente cualquier tolerancia en la devolución y/o pago que el ACREEDOR permitiera al deudor en ningún caso se considerara como prorroga, concesión de nuevo plazo, ni extensión del plazo, ni renovación, y menos como novación y no modificara el derecho del ACREEDOR para exigir el pago y en su caso instaurar la correspondiente acción ejecutiva, a la que expresamente se somete el DEUDOR,  en cualquier momento vencido que fueran los términos o plazos convenidos o concedidos y por mucho que se hubiera permitido cualquier tolerancia, cualquier prorroga, concesión de nuevo plazo, extensión de plazo o renovación para tener efecto deberá convenirse expresamente por escrito entre EL ACREEDOR y el DEUDOR, cuyos términos del referido contrato deberá establecerlo el ACREEDOR.',
        ],
      },
      'El deudor deberá realizar los pagos en moneda de curso legal y en el domicilio del acreedor o mediante cualquiera de los métodos de pago disponibles en favor del acreedor, los pagos realizados en cualquier otro lugar al establecido en el presente contrato o a otras personas que no sean las autorizadas para recibirlos se tendrán como no efectuados. Excepcionalmente en caso de que el cliente cancele totalmente la operación antes del vencimiento del plazo del contrato, este se tendrá por concluido y el deudor deberá cancelar los gastos de la deuda, gastos de transporte por recojo y devolución de la garantía y tasa por servicio.',
      {
        text: [
          {
            text: 'OCTAVA (DE LAS GARANTIAS).- EL DEUDOR, ',
            style: 'subtitle',
          },
          'garantiza el cumplimiento de la presente obligación con la garantía prendaria de la prenda que se describe a continuación: ',
        ],
      },
      { text: warrantyDescription, decoration: 'underline' },
      {
        text: [
          'Asimismo el deudor declara ser único y legítimo propietario de la prenda que deja en garantía respaldando tal declaración a través de la factura de compra No. ',
          { text: nroFacturaCompra, decoration: 'underline' },
          ' y/o ',
          { text: facturaCompra, decoration: 'underline' },
          '.',
        ],
      },
      'Una vez cancelada la obligación por parte del deudor en el capital, intereses, tasa por servicio y transporte por recojo y devolución de la garantía, el acreedor se compromete a restituir la prenda en las mismas condiciones estéticas y de funcionamiento en que la recibió, de acuerdo a un cronograma de entregas establecido por el acreedor, dándose el respectivo aviso de la fecha y hora al deudor.',
      {
        text: [
          {
            text: 'NOVENA (DE LA ACELERACION Y EJECUCION).- ',
            style: 'subtitle',
          },
          'En caso de incumplimiento en el pago del monto adeudado, dentro del plazo convenido, el ',
          { text: 'DEUDOR ', style: 'subtitle' },
          'se declara automáticamente constituido en mora sin necesidad de requerimiento o intimación judicial alguna, teniéndose el plazo como totalmente vencido y la totalidad de la deuda se considerara como suma líquida y exigible, facultando de esta manera al ',
          { text: 'ACREEDOR ', style: 'subtitle' },
          'a que pueda exigir el pago de lo adeudado mediante la vía Ejecutiva.',
        ],
      },
      {
        text: [
          { text: 'DECIMA (VALOR DE DOCUMENTO PÚBLICO).- ', style: 'subtitle' },
          'El presente Documento Privado con el sólo reconocimiento de firmas y rubricas surtirá los efectos de Documento Público, con lo que adquirirá la calidad de Título ejecutivo. ',
        ],
      },
      {
        text: [
          {
            text: 'DECIMA PRIMERA (DEL DOMICILIO DE LAS PARTES).- ',
            style: 'subtitle',
          },
          'Las partes reconocen los siguientes domicilios:',
        ],
      },
      {
        ul: [
          {
            text: [
              'MR CASH BACK reconoce como su domicilio en ',
              {
                text: acreedorDireccion,
                decoration: 'underline',
              },
              '.',
            ],
          },
          {
            text: [
              'El Deudor reconoce su domicilio en ',
              {
                text: deudorDireccion,
                decoration: 'underline',
              },
              '.',
            ],
          },
        ],
      },
      {
        text: [
          { text: 'DECIMA SEGUNDA (DE LA ACEPTACIÓN).- ', style: 'subtitle' },
          'Nosotros, el ',
          { text: 'ACREEDOR ', style: 'subtitle' },
          'por una parte y el',
          { text: 'DEUDOR' },
          ', por otra, declaramos nuestra plena y total conformidad y aceptación con cada una de las cláusulas y condiciones del presente documento, firmando en pleno uso de nuestras facultades como constancia al pie.',
        ],
      },
      {
        text: [
          'Es firmado, en dos ejemplares originales, en la ciudad de Santa Cruz, a los ',
          { text: creationDay, decoration: 'underline' },
          ' días del mes de ',
          { text: creationMonth, decoration: 'underline' },
          ' de 20',
          { text: creationYear, decoration: 'underline' },
          '.',
        ],
      },
      {
        text: ''.padStart(40),
        decoration: 'underline',
        style: ['firma', 'marginFirma'],
      },
      {
        text: 'Representante Legal de MR CASH BACK SRL',
        style: 'firma',
      },
      {
        text: 'ACREEDOR',
        style: 'firma',
      },
      {
        text: ''.padStart(40),
        decoration: 'underline',
        style: ['firma', 'marginFirma'],
      },
      {
        text: 'DEUDOR',
        style: 'firma',
      },
    ],
    styles: {
      header: {
        alignment: 'center',
        bold: true,
        margin: [0, 0, 0, 16],
      },
      subtitle: {
        bold: true,
      },
      firma: {
        bold: true,
        alignment: 'center',
        fontSize: 10,
      },
      marginFirma: {
        margin: [0, 50, 0, 0],
      },
    },
    defaultStyle: {
      lineHeight: 1.5,
      alignment: 'justify',
    },
  };

  const options = {
    // ...
  };

  const pdfDoc = printer.createPdfKitDocument(docDefinition, options);
  pdfDoc.pipe(fs.createWriteStream(filePath));
  pdfDoc.end();
  console.log('builded pdf');
}
