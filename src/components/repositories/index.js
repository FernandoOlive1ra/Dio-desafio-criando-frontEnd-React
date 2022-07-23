import React from 'react'
import RepositoryItem from '../repository-item';
import * as S from './styled';

const Repositories = () => {
  return (
    <S.WrapperTabs selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
        <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
        </S.WrapperTabList>

        <S.WrapperTabPanel> 
            <RepositoryItem
             name="Dio-desafio-criando-frontEnd-React" 
             linkToRepo="https://github.com/FernandoOlive1ra/Dio-desafio-criando-frontEnd-React"
             fullname="FernandoOlive1ra/Dio-desafio-criando-frontEnd-React" 
            />
        </S.WrapperTabPanel>


        <S.WrapperTabPanel>
            <RepositoryItem
            name="Dio-Desafio-CssTransitions-keyframes" 
            linkToRepo="https://github.com/FernandoOlive1ra/Dio-Desafio-CssTransitions-keyframes"
            fullname="FernandoOlive1ra/Dio-Desafio-CssTransitions-keyframes" 
            />
        </S.WrapperTabPanel>
        

    </S.WrapperTabs>
  )
}

export default Repositories