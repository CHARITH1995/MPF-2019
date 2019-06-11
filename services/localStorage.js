import AsyncStorage from '@react-native-community/async-storage';

const localStorage = {

    async saveItem(key, value){

        try{
            await AsyncStorage.setItem(key, value);
        }catch(error){
            console.log('AsyncStorage error'+ error.message);
        }

    },

    async loadJWT() {
        try{
            const value = await AsyncStorage.getItem('jwt_token');
            if(value !== null){

                this.setState({
                    jwt : value,
                    loading : false
                });

            }else{
                this.setState({
                    loading : false
                });
            }
        } catch (error) {
            console.log("AsyncStorage Error : "+error.message);
        }
    },

    async deleteJWT(){
        try{
            await AsyncStorage.removeItem('jwt_token')
            .then(
                () => {
                    this.setState({
                        jwt : ''
                    })
                }
            );
        } catch (error){
            console.log('AsyncStorage Error : '+ error.message);
        }
    }



}

export default localStorage;

