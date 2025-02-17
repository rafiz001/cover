import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: '30px',
    fontFamily: 'Times-Roman'
    
  },
  body:{
    paddingTop: '10px',
    border: '2px solid black',
    borderRadius: '5px',
    height: '100%',
    

  },
  
  header: {

    flexDirection: 'row',
    justifyContent: 'space-around',

    paddingBottom:'5px',
    borderBottom:'2px',
    borderStyle:'solid',
    borderColor:'black'
  },
  cse:{
    height: '70px',
    width:'70px',
    
  },
  vu:{
    height: '70px',
    width:'50px',
  }
});

// Create Document Component
const  MyDocument = () => (
  <Document>
    <Page  style={styles.page} >
      <View style={styles.body}>
      
        
      <View style={styles.header}>
        
        
        <Image style={styles.cse} src="/static/CSE.png"/>
        
        

        <View >
        <View style={{  flexDirection:'row', justifyContent:'center'}}><Text  style={{   fontSize:'40px'}}>Varendra University</Text></View>
        <View style={{  flexDirection:'row', justifyContent:'center'}}><Text style={{   fontSize:'12px', }}>Department of Computer Science and Engineering</Text></View>
        
        </View>
        
        <Image style={styles.vu} src="/static/VU.png"/>
        
        
        
        
      </View>
      
      <View style={{  marginVertical:"30px", textAlign:'center', flexDirection:'row', justifyContent:'center'  }}>
      <Text style={{border:'2px solid black', borderRadius:'25px', padding:'10px'}}>Lab Report: #1</Text>
      </View>

      
      <View  style={{flexDirection:'row', justifyContent:'center', marginHorizontal:"5px",marginVertical:'50px', padding:"2px", border:"2px solid black", borderRadius:"5px"}}>
        
        <View style={{flex:3}}>
      <View style={{paddingLeft:'15px'}}>
      <Text >Course Code: </Text>
      <Text style={{fontFamily:'Times-Bold'}}>CSE 324</Text>
      </View>

      <View style={{paddingLeft:'15px'}}>
      <Text style={{ marginTop:"10px"}}>Course Title: </Text>
      <Text style={{fontFamily:'Times-Bold'}}>Lorem ipsum dolor sit amet consectetur adipisicing</Text>
      </View>

      </View>

      

      <View style={{flex:2}}>

      <View style={{}}>
      <Text>Issue Date: </Text>
      <Text style={{fontFamily:'Times-Bold'}}>14 February, 2025</Text>
      </View>
      <View style={{ marginTop:"10px"}}>
      <Text>Submission Date: </Text>
      <Text style={{fontFamily:'Times-Bold'}}>21 February, 2025</Text>
      </View>

      </View>
      </View>

        <View style={{  margin: '10px',marginTop:'70px', border:'2px solid black'}}>
        <View  style={{flexDirection:'row',}}>
        <View style={{flex:1, borderRight: '2px'}}>
          <Text style={{textAlign:'center', padding: '5px'}}>Prepared by:</Text>
        </View>
        <View style={{flex:1, }}>
        <Text style={{textAlign:'center', padding: '5px'}}>Prepared for:</Text>
        </View>
        </View>
        
        <View  style={{flexDirection:'row'}}>
        <View style={{flex:1, borderRight:'2px', borderTop:'2px'}}>
          <Text style={{textAlign:'left', padding: '5px', paddingLeft:'15px'}}>
          Name: {"\n"}Md. Rafiz Uddin{"\n"}ID: 222311079{"\n"}Year: 3rd{"\n"}Semester: 7th{"\n"}Section: B{"\n"}Batch: 30th</Text>
        </View>
        <View style={{flex:1, borderTop:'2px'}}>
        <Text style={{textAlign:'left', padding: '5px'}}>Mohammad Faisal Al-Naser{"\n"}-Lecturer,{"\n"}Md. Adnan Sami{"\n"}-Lecturer,{"\n"}Dept. of CSE, VU</Text>
        </View>
        </View>

        </View>
      <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop:'60px', paddingRight:'5px'}}>
        <Text style={{paddingHorizontal:'40px', borderTop:'2px'}}>Signature</Text>
      </View>
      </View>
      
    </Page>
  </Document>
);

export default MyDocument;