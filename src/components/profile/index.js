import React from 'react'
import useGithub from '../../hooks/github-hooks';
import * as S from './styled';

const Profile= () => {

    const { githubState } = useGithub();

  return (
    <S.Wrapper>
        <S.WrapperImage src="https://avatars.githubusercontent.com/u/105995190?v=4" alt="avatar of user"/>
           
            <S.WrapperInfoUser>
                <div>
                    <h1>{githubState.user.name}</h1>
                    <S.WrapperUsername>
                    <h3>Username: </h3> 
                    <a href={githubState.user.html_url} target="_blank" rel="noreferrer" >{githubState.user.login}</a>
                    </S.WrapperUsername>
                </div>


                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>{githubState.user.followers}</span>
                    </div>
                   
                    <div>
                        <h4>Followings</h4>
                        <span>{githubState.user.following}</span>
                    </div>

                    <div>
                        <h4>Gistis</h4>
                        <span>{githubState.user.public_gists}</span>
                    </div>

                    <div>
                        <h4>Repos</h4>
                        <span>{githubState.user.public_repos}</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>


    </S.Wrapper>
  )
}

export default Profile;