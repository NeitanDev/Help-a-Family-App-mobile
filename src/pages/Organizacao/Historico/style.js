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
    font-size: 35px;
    color: #fff;
`;

export const Body = styled.View`
    width: 100%;
    height: 89%;
    background-color: #FFF;
    align-items: center;
    border-radius: 50px;
    padding-left: 24px;
    padding-right: 24px;
    padding-top:24px;
`;

export const Title = styled.Text`
    font-size: 40px;
    color: #2bbf54;
    text-align: center;
    margin-bottom: 24px;
`;

export const List = styled.ScrollView`
    height:90%;
    width: 100%;
`;

export const ContainerList=styled.View`
    height:90%;
    width: 100%;
    overflow: hidden;
    padding-bottom: 24px;
`; 

export const Item = styled.View`
    height: 100px;
    width: 100%;
    background-color: #FFF;
    justify-content:space-between;
    padding-left:10px;
    padding-right:10px;
    border: 0.3px;
    border-radius:8px;
    border-color:#000;
    margin-bottom:10px;
    flex-direction: row;
`;

export const FamiliaText = styled.Text`
    font-size: 18px;
`;

export const ContainerFamiliaHeader = styled.Text`
    font-size: 16px;
    color: #bfbfbf;
    position: absolute;
    top: 5px;
`;

export const ContainerFamiliaText = styled.View`
    height: 100px;
    width: 40%;
    flex-direction: column;
    justify-content:center;
`;