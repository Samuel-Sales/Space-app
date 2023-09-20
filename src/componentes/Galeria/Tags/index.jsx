import styled from 'styled-components';
import tags from './tags.json';

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`

const ConteudoContainer = styled.div`
    display: flex;
    gap: 60px;
    align-items: center;
    padding: 2em 2em 2em 0;
`

const Tag = styled.div`
    display: flex;
    gap: 12px;
    button {
        font-size: 24px;
        background: rgba(217, 217, 217, 0.3);
        border-radius: 10px;
        transition: background-color 0.3s ease;
        padding: 12px;
        box-sizing: border-box;
        border: 2px solid transparent;
        color: #FFFFFF;
        cursor: pointer;
        &:hover {
            border-color: #C98CF1;
        }
    }
`

const Tags = () => {
    return (
        <>
            <ConteudoContainer>
                <TagTitulo>Busque por tags:</TagTitulo>
                <Tag>
                    {tags.map(tag => <button key={tag.id}>{tag.titulo}</button>)}
                </Tag>
            </ConteudoContainer>
        </>
     );
}
 
export default Tags;