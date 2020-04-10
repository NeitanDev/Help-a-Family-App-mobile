import styled from 'styled-components/native';
//import { exp } from 'react-native-reanimated';

export const Container = styled.View`
    flex:1;
    align-items: center;
    background-color: #2bbf54;
`;

export const Header = styled.View`
    width:100%;
    /* align-items: flex-start; */
    height: 11%;
    /* background-color: #333; */
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
    /* background-color: #333; */
`;

export const Logo = styled.Image`
    height: 100%;
    width:100%;
`;

export const ContainerTitlePage = styled.View`
    height: 100%;
    width:40%;
    /* background-color: #2bbf54; */
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
    height: 87%;
    background-color: #FFF;
    align-items: center;
    /* justify-content: center; */
    border-radius: 50px;
    padding-left: 24px;
    padding-right: 24px;
    padding-top:24px;
`;

//até aqui vai ser padrão de todas as paginas

export const ContainerOrg = styled.View`
    height: 35%;
    width: 100%;
    /* background-color: #333; */
    align-items: center;
`;

export const OrgImage = styled.Image`
    height: 100%;
    width: 70%;
`;

export const Form = styled.View`
    height: 65%;
    width: 100%;
    /* background-color: #333; */
    justify-content: flex-end;
    align-items:center;
    padding-top:24px;
    padding-bottom:24px;
`;

export const Title = styled.Text`
    font-family: Amaranth-Regular;
    font-size: 40px;
    color: #2bbf54;
    text-align: center;
`;



export const Input =  styled.TextInput`
    width: 100%;
    height: 50px;
    background-color: #FFF;
    justify-content:center;
    align-items: center;
    border: 0.2px;
    border-radius:8px;
    padding-left:10px;
    padding-right:8px;
    font-family: Amaranth-Regular;
    font-size: 24px;
    /* color: #2bbf54; */
    margin-top: 24px;
`;

export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color: #FFF;
    justify-content:center;
    align-items: center;
    /* border: 0.5px; */
    border-radius:10px;
    /* padding-left:10px; */
    /* padding-right:8px; */
    /* font-family: Amaranth-Regular; */
    /* font-size: 24px; */
    background-color: #2bbf54;
    margin-top: 24px;
`;

export const ButtonText = styled.Text`
    font-family: Amaranth-Regular;
    font-size: 40px;
    color: #FFF;
    text-align:center;
`;