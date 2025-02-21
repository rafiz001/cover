import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';

Font.register({
  family: "Poppins-Bold",
  src: "/cover/static/Poppins-Bold.ttf",
});
const styles = StyleSheet.create({
  page: {
    padding: '30px',
    fontFamily: 'Times-Roman',
    backgroundColor: 'white',
  },
  body:{
    // paddingTop: '10px',
    border: '2px solid black',
    borderRadius: '5px',
    height: '100%',
    display:'flex',
    flexDirection:'row',
    position:"relative",
    padding:0,
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
const  Design2 = ({data,assignment}) => {

 

  return (
  <Document>
    <Page  style={styles.page} >
      <View style={styles.body}>
      
        
      
      <View style={{flex:2,backgroundColor:"black"}}>

      </View>
      
      <View style={{flex:12,backgroundColor:"", paddingTop:"20px", paddingLeft:"10px"}}>
        <View style={{flexDirection:"row"}}>
        <Image style={styles.vu} src={data.color?"/cover/static/VU.png":"/cover/static/VU_mono.png"}/>
        <Image style={styles.cse} src={data.color?"/cover/static/CSE.png":"/cover/static/CSE_mono.png"}/>
        
        
        </View>
        <Text style={{fontFamily:'Poppins-Bold'}}>{assignment?"Assignment":"Lab Report"}: #{data.report}</Text>
        <Text style={{fontFamily:'Poppins-Bold', marginTop:'10px', textAlign:'left'}}>{data.ctitle}</Text>
      </View>

      <View style={{flex:5,backgroundColor:"#d1d1d1"}}>

      </View>
      <View style={{position:'absolute', top:"0px", right:"0px",width:"200px", height:"200px", backgroundColorr:'cyan',overflow: "hidden" }} >
        <View style={{position:'absolute',  top:"5px", right:"-35px", width:"70px", height:"25px", backgroundColor:"black", transform: "rotate(45deg)",}}></View>
        <View style={{position:'absolute',  top:"7px", right:"-25px", width:"100px", height:"20px", backgroundColor:"grey", transform: "rotate(45deg)",}}></View>
        <View  style={{position:'absolute',  top:"100x", right:"-75px", width:"150px", height:"27px", backgroundColor:"grey", transform: "rotate(45deg)",}}></View>
        <View  style={{position:'absolute',  top:"40px", right:"-10px", width:"200px", height:"25px", backgroundColor:"black", transform: "rotate(45deg)",}}></View>
        <View  style={{position:'absolute',  top:"7px", right:"-5px", width:"150px", height:"25px", backgroundColor:"black", transform: "rotate(45deg)",}}></View>
      </View>
      
      </View>
      
    </Page>
  </Document>
)}
;

export default Design2;