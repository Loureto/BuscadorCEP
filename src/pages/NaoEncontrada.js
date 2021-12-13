import ImgPag404 from '../assets/pag404.png';
import '../styles/naoencontrada.scss';

export const NaoEncontrada = () =>{
    return( 
        <div className='container-img404'>            
            <div>
                <hr size="8"  className="hr-pag404"/>
                <div>                
                    <img src={ImgPag404} alt=' imagem 404' />
                    <h2>Página não encontrada!</h2>                
                </div>
                <hr size="8"  className="hr-pag404"/>
            </div>           
        </div>
    );
}