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
    font-size: 30px;
    color: #fff;
`;

export const Body = styled.View`
    width: 100%;
    height: 87%;
    background-color: #FFF;
    /* align-items: center; */
    /* justify-content: center; */
    border-radius: 50px;
    /* padding-left: 24px; */
    /* padding-right: 24px; */
    /* padding-top:24px; */
    overflow: hidden;
`;

//até aqui vai ser padrão de todas as paginas

export const Scroll = styled.ScrollView`
    width: 100%;
    height: 100%;
    background-color: #FFF;
    border-radius: 50px;
    padding-left: 24px;
    padding-right: 24px;
    padding-top:24px;
    /* padding-bottom: 24px; */
    margin-bottom:15px;
`;


export const Title = styled.Text`
    text-align: center;
    color: #2bbf54;
    font-size:40px;
    /* margin-top:24px; */
    /* margin-bottom:24px; */
    font-family: Amaranth-Regular;
    margin-bottom:24px;
`;

export const ContainerInput = styled.View`
    width: 100%;
    height: 80px;
    margin-bottom:15px;
    /* background-color:#333; */
`;

export const TitleInput = styled.Text`
    color:#41414d;
    font-size:16px;
    margin-bottom:10px;
`;

export const Inupt = styled.TextInput`
    width: 100%;
    height: 50px;
    background-color: #FFF;
    justify-content:flex-start;
    align-items: center;
    border: 0.2px;
    border-radius:8px;
    padding-left:10px;
    padding-right:8px;
    /* font-family: Amaranth-Regular; */
    font-size: 20px;
    /* color: #2bbf54; */
    /* margin-top: 24px; */
`;

export const ContainerInputCord = styled.View`
    width: 100%;
    height: 80px;
    margin-bottom:15px;
    /* background-color:#333; */
    flex-direction: row;
    justify-content:space-between;
`;

export const CordsInupt = styled.TextInput`
    width: 45%;
    height: 50px;
    background-color: #FFF;
    justify-content:center;
    align-items: center;
    border: 0.2px;
    border-radius:8px;
    padding-left:10px;
    padding-right:8px;
    /* font-family: Amaranth-Regular; */
    font-size: 20px;
    /* color: #2bbf54; */
    /* margin-top: 24px; */
`;

export const Button = styled.TouchableOpacity`
    width:100%;
    height: 50px;
    background-color:#2bbf54;
    margin-bottom:24px;
    border-radius:8px;
    align-items:center;
    justify-content:center;
`;

export const ButtonText = styled.Text`
    font-size: 24px;
    font-family:Amaranth-Regular;
    text-align: center;
    color: #FFF;
`;