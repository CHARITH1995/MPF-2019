import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image,Platform } from 'react-native';

import Header from '../components/Header'

const header1 = <Text style = {{fontSize : 17, fontWeight : 'bold', borderBottomWidth : 2, borderBottomColor : '#1A5961', marginBottom : 20, paddingBottom : 10}} >Building Robust Institutions: Achieving Good Governance and Justice for All</Text>
const text1 = <Text style = {{fontSize : 15,marginBottom : 20}}>The Maldives is a young democracy attempting to build on considerable economic and human development gains, while simultaneously countering challenges posed by deep socio-economic, environmental and political issues. The Constitution of 2008 established separation of powers, paving the way for a rights-oriented community and state.
                {"\n"}
                {"\n"}
                However, 10 years down the road, the Maldives has still been unable to fully realize the progressive, protective and self-sufficient State envisaged by the new Constitution. In fact, Maldivian democracy for the past few years has been subjected to numerous tests and obstacles, significantly impacting its consolidation.
                {"\n"}
                {"\n"}
                The Government of President Ibrahim Mohamed Solih prioritises the restoration of rule of law and democratic values, promotion and protection of human dignity and human rights, and strengthening of the governance system in the country. While the current administration faces recurring problems of limitations in the resource envelope, budgetary constraints and lack of technical capacity, the Government is confident that these roadblocks can be overcome with the support of international partners.
                {"\n"}
                {"\n"}
                The recent democratic gains in the Maldives presents the current administration with a valuable opportunity to enhance the capacity of institutions and to design and implement policies to boost economic growth and human development.  {"\n"}
As such, after almost a decade, national planning is back on the agenda, and the Government realises the need to ensure inclusive planning to build a broadly owned development narrative to strengthen social cohesion.
                {"\n"}
                {"\n"}
                In that regard, the Government’s proposed reforms in the Governance sector will be implemented broadly under the following themes.
                {"\n"}
                {"\n"}
                •  Policy Note 12 - Addressing the issue of corruption within state institutions
•  Policy Note 13 - Building an accountable state  {"\n"}
•  Policy Note 14 - Reform of the legal and justice sector  {"\n"}
•  Policy Note 15 - Transitional Justice Mechanisms  {"\n"}
•  Reforms pertaining to policing, detention facilities and rehabilitation  {"\n"}
•  Policy Note 16 - Reforms pertaining to policing, detention facilities and rehabilitation  {"\n"}
•  Policy Note 17 - Independent Institutions; ensuring accountability, checks and balances  {"\n"}
                </Text>
const header2 = <Text style = {{fontSize : 17, fontWeight : 'bold',borderBottomWidth : 2, borderBottomColor : '#1A5961',marginBottom : 20, paddingBottom : 10}} >Enhancing Social Outcomes: Investing in Healthcare, Education, and Housing</Text>
const text2 = <Text style = {{fontSize : 15,marginBottom : 20}}>The Maldives has huge potential that it yet to be fully realised – a rapidly expanding economy, a demographic dividend with educated young people, improving infrastructure and institutions, and growing physical and digital connectivity.
               {"\n"}
                {"\n"}
                The potential offered can only be achieved, with focus on enhancing social outcomes, through targeted investment in healthcare, healthy lifestyles, education, arts, culture, and housing. As enshrined in the Constitution of the Maldives, the State is required to deliver socio-economic development for the whole population in a non-discriminatory manner, allowing every person to live a dignified life.
                {"\n"}
                {"\n"}
                The Government’s National Development Plan is based on a human rights approach, which seeks to analyse inequalities at the heart of development issues, and redress discriminatory and unjust practices that impede progress. Focusing on a rights-based approach is not only participatory – taking into account the voices of the policies impact – but also leads to more sustainable and better human development outcomes. A human rights based approach to development, and gender mainstreaming is complementary. The Government aims to empower women through their greater participation in the country’s social, economic and political development.
                {"\n"}
                {"\n"}
                The following sub-themes are considered within the scope of enhancing social outcomes. The policy notes on the sub-themes offer the Government’s rationale, as well as the policy priorities on each sub-theme.
                {"\n"}
                {"\n"}
                • Policy Note 7 – Providing Inclusive, Affordable, and Adequate Housing {"\n"}
• Policy Note 8 – Ensuring Quality and Equitable Education {"\n"}
• Policy Note 9 – Delivering Quality Healthcare and Promoting Healthy Lifestyles {"\n"}
• Policy Note 10 – Empowering Women and Promoting a Participatory Approach to Development {"\n"}
• Policy Note 11 – Youth Empowerment {"\n"}
                </Text>
const header3 = <Text style = {{fontSize : 17, fontWeight : 'bold',borderBottomWidth : 2, borderBottomColor : '#1A5961',marginBottom : 20, paddingBottom : 10}} >Blue Economy: Addressing inclusivity, and sustainability in economic development</Text>
const text3 = <Text style = {{fontSize : 15, marginBottom : 20}}>The Maldives is an island nation, surrounded by the ocean. The economy, and well-being of the country is tied to the health and wealth of the natural environment, and primarily the ocean, which accounts for approximately 99% of Maldivian territory.
                {"\n"}
                {"\n"}
                Similar to other Small Island Developing States, the Maldives is dependent on the ocean for sustainable development, food security, connectivity and livelihoods. Stressors to the the envirionment will therefore have direct and indirect impacts on sectors such as tourism, fisheries, maritime transport infrastructure, and the overall development of the economy.
                {"\n"}
                {"\n"}
                The concept of Blue Economy takes this reality as the starting point for delivering sustainable and inclusive growth. The focus is on delivering economic development that takes into account the profound dependency on natural ecosystems, and the need to ensure development dividends are distributed equitably among all people, regions, segments and sectors of the country.
                {"\n"}
                {"\n"}
                The following sub-themes are considered under the theme of the “Blue Economy”. The policy notes on the sub-themes offer the Government’s rationale, as well as the policy priorities on each sub-theme.
                {"\n"}
                {"\n"}
                • Policy Note 1 – Sustainable Management of the Environment    {"\n"}
• Policy Note 2 – An Economy Driven by Renewable Energy    {"\n"}
• Policy Note 3 – Building Resilient Infrastructure, Enhancing Connectivity    {"\n"}
• Policy Note 4 – An Enabling Environment for MSMEs    {"\n"}
• Policy Note 5 – Generating Employment    {"\n"}
• Policy Note 6 – Facilitating e-Governance and a Digital Economy    {"\n"}
</Text>

var content = [[header1,header2,header3],[text1,text2,text3]]

export default class OverviewMore extends Component {
    constructor (){
        super()
        this.state = {
            posNo : null,
            headerText : null
        }
    }
    componentDidMount(){
        const { navigation } = this.props;
        var pos = (navigation.getParam('posNo'));
        var headerText = (navigation.getParam('headerText'));
        this.setState ({
            posNo : pos,
            headerText : headerText
        })
    }
    render() {
        return (
            <View style = {{ flex : 1}} >
             <View style={styles.statusBarBackground}> 
                </View>
                <Header title = {this.state.headerText}/>
                <ScrollView style = {styles.ContentCover}>
                        <View style = {styles.sectionCover}>
                            {content[0][this.state.posNo]}
                            {content[1][this.state.posNo]}
                        </View>
                </ScrollView>
            </View>





        )
    }
}

let dimensions = Dimensions.get("window");
let cardHeight = Math.round((dimensions.height * 1) / 15);
let carWidth = dimensions.width;

const styles = StyleSheet.create({
    statusBarBackground: {
        height: (Platform.OS === 'ios') ? 18 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
        backgroundColor: "#1A5961",
      },
   ContentCover : {
       flex : 1,
        paddingLeft : 20,
        paddingRight : 20,
        paddingTop : 20,
        paddingBottom : 20
   },
   sectionCover : {
       flex : 1,
       paddingLeft : 20,
       paddingRight : 20,
       paddingTop : 20,
       paddingBottom : 20,
    //    backgroundColor: "white",
    //    shadowColor: '#7c7c7c',
    //     shadowOffset: { width: 5, height: 7 },
    //     shadowOpacity: 0.5,
    //     shadowRadius: 2,  
    //     elevation: 3,
    //    marginBottom : 25
   }
})