import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { GetValues } from "../storage/globalStorage";

export const Report = () =>{
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    let bairro = GetValues("Bairro");
    let uf = GetValues("Uf");
    let localidade = GetValues("Localidade"); 
    let cep = GetValues("Cep");
    let logradouro = GetValues("Logradouro");

    const reportCep = [
        {
            text: 'BuscadorCEP!',
            style: 'header',
            bold: true,
            margin: [15, 20, 0, 10]
        }
    ];

    const details = [
        {text: '\n\nEndereço encontrado', style: 'header'},
		{
			type: 'none',
			ul: [
                'Cep: ' + cep,
                'Localidade: ' + localidade +'/'+uf,
                'Logradouro: ' + logradouro,
			    'Bairro: ' + bairro,				
			]
		},
    ];

    function rodape(currentPage, pageCount){
        return[
            {
                text: currentPage + '/' +pageCount,
                fontSize: 15,
                alignment: 'right',
                margin: [0, 10, 20, 0]
            }
        ]
    }

    const docDefinitions = {
        pageSize: "A4", 
        pageMargins: [15, 50, 15, 20],

        header: [reportCep],
        content: [details],
        footer: rodape
    }

    pdfMake.createPdf(docDefinitions).download();
}