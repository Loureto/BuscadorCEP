import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button/Button";
import { InputText } from "../components/InputText/InputText";
import { Label } from "../components/Label/Label";
import { api } from "../services/api";
import SaveValues, { GetValues, Remove } from "../storage/globalStorage";
import { handleErro, ToastMsg } from "../util/mensagem";
import '../styles/buscacep.scss';

export const BuscaCep = () =>{
    const navigate = useNavigate();
    const [uf, setUf] = React.useState(null);
    const [logra, setLogra] = React.useState('');
    const [muni, setMuni] = React.useState(''); 

    React.useEffect(()=>{
        document.getElementById('input-select').focus();
    },[])

    async function handleClickPesquisar(){
        try{
            if(uf === "" || uf === null){
                return handleErro('Campo obrigatório! Selecione a UF'),
                document.getElementById('input-select').focus();
            }
            else if(muni === "" || muni === null){
                return handleErro('Campo obrigatório! preencha o campo município'),
                document.getElementById('input-municipio').focus();
            }
            else if(logra === "" || logra === null){
                return handleErro('Campo obrigatório! preencha o campo logradouro'),
                document.getElementById('input-logradouro').focus();
            }
            const response = await api.get(`${uf}/${muni.replace(/ /g, "%20")}/${logra.replace(/ /g, "%20")}/json`);
            if(!response.data.erro){
                let _cep = response.data[0].cep;
                let _logradouro = response.data[0].logradouro;
                let _bairro = response.data[0].bairro;
                let _uf = response.data[0].uf;
                let _localidade = response.data[0].localidade;
                let _codigo = response.data[0].ibge;

                await SaveValues("_Cep", _cep);
                await SaveValues("_Bairro", _bairro);
                await SaveValues("_Uf", _uf);
                await SaveValues("_Localidade", _localidade);
                await SaveValues("_Logradouro", _logradouro);
                await SaveValues("_Codigo", _codigo);

                alert(`Cep: ${GetValues("_Cep")}\nCódigo do logradouro: ${GetValues("_Codigo")}\nLocalidade: ${GetValues("_Localidade")}/${GetValues("_Uf")}\nBairro: ${GetValues("_Bairro")}`);
                setLogra('');
                setMuni('');
                setUf('Selecione...');
            }
        }catch(e){
            handleErro('Verifique se as informações estão corretas!');
            return;
        }finally{
            Remove("_Cep");
            Remove("_Bairro");
            Remove("_Uf");
            Remove("_Localidade");
            Remove("_Logradouro");
            Remove("_Codigo");            
        }
    }

    const handleClickVoltar = () =>{
        navigate('/');
    }

    const changeLogradouro = (e) =>{
        let logradouro = e.target.value;
        setLogra(logradouro);
    }

    const changeMunicipio = (e) =>{
        let municipio = e.target.value;
        setMuni(municipio);
    }

    const changeUf = (e) =>{
        let _uf = e.target.value;
        setUf(_uf);
    }

    const tabela_uf =[
        "RO","AC","AM","RR","PA",
        "AP","TO","MA","PI","CE",
        "RN","PB","PE","AL","SE",
        "BA","MG","ES","RJ","SP",
        "PR","SC","RS","MS","MT",
        "GO","DF"
    ]

    return(
        <div className="container-buscacep">
            <div className="card-buscacep">
                <hr size="8"  className="hr-buscacep"/>
                
                <form className="form-buscacep" onSubmit={handleClickPesquisar}>
                    <Label texto="Estado"/>
                    <select className="select-buscacep" id="input-select" onChange={changeUf} value={uf} defaultValue="Selecione..." style={{marginBottom: 10}}>
                        <option disabled >Selecione...</option>
                        {tabela_uf.map((item)=>{
                            return <option key={item} value={item}>{item}</option>
                        })}                                         
                    </select>
                    <Label texto="Município"/>
                    <InputText onChange={changeMunicipio} id="input-municipio" value={muni} type="text" placeholder="Ex: são paulo" />
                        
                    <Label texto="Logradouro"/>
                    <InputText onChange={changeLogradouro} id="input-logradouro" value={logra} type="text" placeholder="Ex: rua maria de lurdes"/>
                </form>
               
                <div className="card-btn-buscacep">
                    <Button onClick={handleClickVoltar} tipo="voltar" label="Voltar"/>
                    <Button onClick={handleClickPesquisar} tipo="pesquisar" label="Pesquisar"/>
                </div>
                <hr size="8"  className="hr-buscacep"/>
            </div>
            <ToastMsg />
        </div>
    );    
}