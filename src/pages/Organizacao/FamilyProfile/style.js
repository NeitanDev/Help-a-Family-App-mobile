import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    align-items: center;
    background-color: #2bbf54;
`;

export const Header = styled.View`
    width:100%;
    height: 11%;
    padding-left:40px; 
    justify-content: space-between;
    flex-direction: row;
    padding-right: 40px;
`;

export const ContainerLogo = styled.View`
    height: 100%;
    width:40%;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    height: 100%;
    width:100%;
`;

export const ContainerTitlePage = styled.View`
    height: 100%;
    width:40%;
    justify-content:center;
    align-items:center;
`;

export const TitlePage = styled.Text`
    font-family: Amaranth-Regular;
    font-size: 40px;
    color: #fff;
`;

export const Body = styled.View`
    width: 100%;
    height: 89%;
    background-color: #FFF;
    align-items: center;
    /* border-radius: 50px; */
`;
