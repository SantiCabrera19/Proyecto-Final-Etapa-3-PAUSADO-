import './News.css'
import Funciones from './Funciones'

// NEWS-BOX COMPONENT
function NewsBox(props) {
    const { news, index } = props
    const publishedAt = Funciones.transformDate(news.publishedAt)
    
    return(
        <div className="box-news" key={index}>

            <a href={news.url} target="_blank" rel="noopener noreferrer">
                <img id='img-news' className="img-news" src={news.urlToImage}  />
            </a>

            <div id='box-info'>
                <small>Publicado: { publishedAt } - </small>
                <small style={ {textDecoration: 'underline'} }>{ news.source.name }</small>

                <a href={news.url} target="_blank" rel="noopener noreferrer">
                    <p> <b>{news.title}</b>  </p> 
                </a> 
            </div>                               
        </div>
    )
}

export default NewsBox;